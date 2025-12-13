#!/usr/bin/env python3
"""
解析 index.html，提取导航栏结构和表格数据，导出为 JSON。
"""

import json
import re
from pathlib import Path
from typing import Optional, List, Dict, Any
from bs4 import BeautifulSoup


def parse_html(html_path: Path) -> dict:
    """解析HTML文件，提取导航和表格数据。"""
    
    with open(html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    result = {
        "navigation": [],
        "sections": [],
        "metadata": {
            "version": "NDT-v1.15",
            "updateDate": "2025.4.18"
        }
    }
    
    # 解析导航栏
    nav_links = soup.find('ul', class_='nav-links')
    if nav_links:
        result["navigation"] = parse_navigation(nav_links)
    
    # 解析所有 section-block
    sections = soup.find_all('div', class_='section-block')
    for section in sections:
        section_data = parse_section(section)
        if section_data:
            result["sections"].append(section_data)
    
    return result


def parse_navigation(nav_links) -> list:
    """解析导航栏，提取分类和子项。"""
    navigation = []
    current_category = None
    
    for child in nav_links.children:
        if not hasattr(child, 'name'):
            continue
            
        # 一级分类
        if child.name == 'li' and 'nav-category' in child.get('class', []):
            current_category = {
                "category": child.get_text(strip=True),
                "dataCategory": child.get('data-category', ''),
                "items": []
            }
            navigation.append(current_category)
        
        # 子菜单
        elif child.name == 'ul' and 'nav-submenu' in child.get('class', []):
            if current_category:
                for li in child.find_all('li'):
                    a = li.find('a')
                    if a:
                        href = a.get('href', '')
                        section_id = href.lstrip('#') if href.startswith('#') else href
                        current_category["items"].append({
                            "id": section_id,
                            "title": a.get_text(strip=True)
                        })
    
    return navigation


def parse_section(section) -> Optional[Dict[str, Any]]:
    """解析单个 section-block。"""
    section_id = section.get('id', '')
    if not section_id:
        return None
    
    title_elem = section.find(class_='section-title')
    title = title_elem.get_text(strip=True) if title_elem else ''
    
    # 推断分类
    category = infer_category(section_id)
    
    # 解析表格
    rows = []
    table = section.find('table')
    if table:
        tbody = table.find('tbody')
        if tbody:
            for tr in tbody.find_all('tr'):
                row_data = parse_table_row(tr)
                if row_data:
                    rows.append(row_data)
    
    return {
        "id": section_id,
        "title": title,
        "category": category,
        "rows": rows
    }


def infer_category(section_id: str) -> str:
    """根据 section id 推断分类。"""
    if section_id.startswith('sec_'):
        # 单位代码: sec_0 ~ sec_23
        # 地图代码: sec_24 ~ sec_38, sec_map_event_types
        # 参考资料: sec_39, ref_*
        match = re.match(r'sec_(\d+)', section_id)
        if match:
            num = int(match.group(1))
            if num <= 23:
                return "unit"
            elif num <= 38 or section_id == "sec_map_event_types":
                return "map"
            else:
                return "ref"
        if 'map' in section_id:
            return "map"
    elif section_id.startswith('ref_'):
        return "ref"
    elif section_id.startswith('other_'):
        return "other"
    return "unknown"


def parse_table_row(tr) -> Optional[Dict[str, str]]:
    """解析表格行。"""
    tds = tr.find_all('td')
    if len(tds) < 5:
        return None
    
    code = tds[0].get_text(strip=True)
    translation = tds[1].get_text(strip=True)
    description = tds[2].get_text(strip=True)
    
    # 例子可能包含 span.col-example
    example_elem = tds[3].find('span', class_='col-example')
    example = example_elem.get_text(strip=True) if example_elem else tds[3].get_text(strip=True)
    
    value_type = tds[4].get_text(strip=True)
    
    if not code:  # 跳过空行
        return None
    
    return {
        "code": code,
        "translation": translation,
        "description": description,
        "example": example,
        "valueType": value_type
    }


def main():
    script_dir = Path(__file__).parent
    html_path = script_dir.parent / 'index.html'
    output_path = script_dir.parent / 'vite' / 'src' / 'data' / 'data.json'
    
    print(f"解析: {html_path}")
    data = parse_html(html_path)
    
    # 统计信息
    total_sections = len(data["sections"])
    total_rows = sum(len(s["rows"]) for s in data["sections"])
    total_nav_items = sum(len(c["items"]) for c in data["navigation"])
    
    print(f"导航分类: {len(data['navigation'])}")
    print(f"导航项目: {total_nav_items}")
    print(f"章节数量: {total_sections}")
    print(f"表格行数: {total_rows}")
    
    # 确保输出目录存在
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"输出: {output_path}")


if __name__ == '__main__':
    main()
