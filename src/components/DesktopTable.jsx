import { useState, useMemo, useEffect } from 'react';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

// 默认固定列宽
const DEFAULT_WIDTHS = [12, 8, 30, 35, 15];

/**
 * 计算自动列宽
 * 算法：移除每列前20%最长数据，计算剩余80%平均值，按比例分配
 */
function calculateAutoWidths(rows) {
    if (!rows || rows.length === 0) return DEFAULT_WIDTHS;

    const columns = ['code', 'translation', 'description', 'example', 'valueType'];
    const columnCharCounts = columns.map(() => []);

    // 收集每列字符数
    rows.forEach(row => {
        columns.forEach((col, index) => {
            const text = row[col] || '';
            columnCharCounts[index].push(text.length);
        });
    });

    // 计算每列加权平均值
    const columnAverages = columnCharCounts.map(counts => {
        if (counts.length === 0) return 1;

        // 降序排序
        const sorted = [...counts].sort((a, b) => b - a);

        // 移除前20%
        const removeCount = Math.floor(sorted.length * 0.2);
        const remaining = sorted.slice(removeCount);

        if (remaining.length === 0) return 1;

        // 计算平均值
        const sum = remaining.reduce((acc, val) => acc + val, 0);
        return Math.max(sum / remaining.length, 1); // 最小值为1
    });

    // 计算总和
    const total = columnAverages.reduce((acc, val) => acc + val, 0);

    // 计算百分比，设置最小宽度5%
    const widths = columnAverages.map(avg => Math.max((avg / total) * 100, 5));

    // 归一化确保总和为100%
    const widthSum = widths.reduce((acc, val) => acc + val, 0);
    return widths.map(w => (w / widthSum) * 100);
}

/**
 * 桌面端表格组件 - 传统 table + sticky header
 */
export function DesktopTable({ rows, copyMode = 'click' }) {
    const { copyToClipboard } = useCopyToClipboard();
    const [copiedCell, setCopiedCell] = useState(null);
    const [autoColumnWidth, setAutoColumnWidth] = useState(() => {
        if (typeof window === 'undefined') return false;
        return localStorage.getItem('wiki-auto-column-width') === 'true';
    });

    // 监听设置变化
    useEffect(() => {
        const handleSettingsChange = () => {
            setAutoColumnWidth(localStorage.getItem('wiki-auto-column-width') === 'true');
        };
        window.addEventListener('wiki-settings-change', handleSettingsChange);
        return () => window.removeEventListener('wiki-settings-change', handleSettingsChange);
    }, []);

    // 根据设置计算列宽
    const columnWidths = useMemo(() => {
        if (autoColumnWidth) {
            return calculateAutoWidths(rows);
        }
        return DEFAULT_WIDTHS;
    }, [rows, autoColumnWidth]);

    const handleCopy = (text, rowIndex, colIndex) => {
        if (!text) return;
        copyToClipboard(text);
        setCopiedCell(`${rowIndex}-${colIndex}`);
        setTimeout(() => setCopiedCell(null), 300);
    };

    const handleCellInteraction = (e, text, rowIndex, colIndex) => {
        if (copyMode === 'click') {
            handleCopy(text, rowIndex, colIndex);
        }
    };

    if (!rows || rows.length === 0) {
        return <p className="text-center py-4" style={{ color: 'var(--text-muted)' }}>暂无数据</p>;
    }

    const headers = ['代码', '翻译', '描述', '例子', '值类型'];

    return (
        <div className="w-full">
            <table
                className="w-full border-collapse text-sm"
                style={{ borderSpacing: 0, tableLayout: 'fixed' }}
            >
                <thead
                    className="sticky top-12 z-5"
                    style={{ background: 'var(--bg-table-header)' }}
                >
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={header}
                                className="border p-2.5 text-left font-semibold"
                                style={{
                                    borderColor: 'var(--border-color)',
                                    color: 'var(--text-secondary)',
                                    width: `${columnWidths[index].toFixed(2)}%`
                                }}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr
                            key={i}
                            className="transition-colors hover:bg-[var(--bg-table-hover)]"
                            style={{
                                background: i % 2 === 0 ? 'transparent' : 'var(--bg-table-even)'
                            }}
                        >
                            <td
                                className={`border p-2.5 align-top cursor-pointer font-mono font-bold ${copiedCell === `${i}-0` ? 'copied' : ''}`}
                                style={{ borderColor: 'var(--border-color)', color: 'var(--text-code)', wordBreak: 'break-all' }}
                                onClick={(e) => handleCellInteraction(e, row.code, i, 0)}
                            >
                                {row.code}
                            </td>
                            <td
                                className={`border p-2.5 align-top cursor-pointer ${copiedCell === `${i}-1` ? 'copied' : ''}`}
                                style={{ borderColor: 'var(--border-color)' }}
                                onClick={(e) => handleCellInteraction(e, row.translation, i, 1)}
                            >
                                {row.translation}
                            </td>
                            <td
                                className={`border p-2.5 align-top cursor-pointer ${copiedCell === `${i}-2` ? 'copied' : ''}`}
                                style={{ borderColor: 'var(--border-color)' }}
                                onClick={(e) => handleCellInteraction(e, row.description, i, 2)}
                            >
                                {row.description}
                            </td>
                            <td
                                className={`border p-2.5 align-top cursor-pointer ${copiedCell === `${i}-3` ? 'copied' : ''}`}
                                style={{ borderColor: 'var(--border-color)' }}
                                onClick={(e) => handleCellInteraction(e, row.example, i, 3)}
                            >
                                <span
                                    className="font-mono text-sm px-1 py-0.5 rounded break-all"
                                    style={{
                                        color: 'var(--text-code-example)',
                                        background: 'var(--bg-code-example)'
                                    }}
                                >
                                    {row.example}
                                </span>
                            </td>
                            <td
                                className={`border p-2.5 align-top cursor-pointer ${copiedCell === `${i}-4` ? 'copied' : ''}`}
                                style={{ borderColor: 'var(--border-color)' }}
                                onClick={(e) => handleCellInteraction(e, row.valueType, i, 4)}
                            >
                                {row.valueType}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
