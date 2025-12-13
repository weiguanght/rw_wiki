import { useState } from 'react';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

/**
 * 桌面端表格组件 - 传统 table + sticky header
 */
export function DesktopTable({ rows, copyMode = 'click' }) {
    const { copyToClipboard } = useCopyToClipboard();
    const [copiedCell, setCopiedCell] = useState(null);

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
                        <th className="border p-2.5 text-left font-semibold w-[12%]" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>代码</th>
                        <th className="border p-2.5 text-left font-semibold w-[8%]" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>翻译</th>
                        <th className="border p-2.5 text-left font-semibold w-[30%]" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>描述</th>
                        <th className="border p-2.5 text-left font-semibold w-[35%]" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>例子</th>
                        <th className="border p-2.5 text-left font-semibold w-[15%]" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>值类型</th>
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
