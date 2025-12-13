import { useState, useMemo } from 'react';

/**
 * 搜索栏组件
 */
export function SearchBar({ sections, onNavigate }) {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    // 构建可搜索项
    const searchItems = useMemo(() => {
        const items = [];
        sections?.forEach(section => {
            // 添加章节标题
            items.push({
                code: section.title,
                desc: '章节',
                sectionId: section.id,
                type: 'section'
            });
            // 添加表格行
            section.rows?.forEach(row => {
                items.push({
                    code: row.code,
                    desc: row.description?.substring(0, 60) || '',
                    sectionId: section.id,
                    type: 'row'
                });
            });
        });
        return items;
    }, [sections]);

    // 搜索结果
    const results = useMemo(() => {
        if (!query || query.length < 1) return [];
        const lowerQuery = query.toLowerCase();
        return searchItems
            .filter(item =>
                item.code.toLowerCase().includes(lowerQuery) ||
                item.desc.toLowerCase().includes(lowerQuery)
            )
            .slice(0, 15);
    }, [query, searchItems]);

    const handleSelect = (sectionId) => {
        onNavigate?.(sectionId);
        setQuery('');
        setIsOpen(false);
    };

    const highlightText = (text, q) => {
        if (!q) return text;
        const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, i) =>
            regex.test(part)
                ? <span key={i} className="px-0.5 rounded" style={{ background: 'var(--bg-highlight)' }}>{part}</span>
                : part
        );
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setIsOpen(true);
                }}
                onFocus={() => query && setIsOpen(true)}
                placeholder="搜索代码..."
                className="w-[110px] md:w-[200px] px-3 py-2 border rounded-full text-sm outline-none transition-all focus:shadow-md"
                style={{
                    background: 'var(--bg-search)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                }}
            />

            {/* 搜索结果下拉 */}
            {isOpen && results.length > 0 && (
                <div
                    className="absolute top-12 right-0 w-[350px] max-h-[400px] overflow-y-auto rounded-lg shadow-lg z-50"
                    style={{
                        background: 'var(--bg-search)',
                        border: '1px solid var(--border-color)'
                    }}
                >
                    {results.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => handleSelect(item.sectionId)}
                            className="px-4 py-3 cursor-pointer transition-colors hover:bg-[var(--bg-search-hover)]"
                            style={{ borderBottom: '1px solid var(--border-color)' }}
                        >
                            <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                                {highlightText(item.code, query)}
                            </div>
                            <div className="text-xs mt-1 truncate" style={{ color: 'var(--text-muted)' }}>
                                {highlightText(item.desc, query)}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {isOpen && query && results.length === 0 && (
                <div
                    className="absolute top-12 right-0 w-[350px] p-4 text-center rounded-lg shadow-lg"
                    style={{
                        background: 'var(--bg-search)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-muted)'
                    }}
                >
                    未找到结果
                </div>
            )}

            {/* 点击外部关闭 */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}
