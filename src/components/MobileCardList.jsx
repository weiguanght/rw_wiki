import { useState, useEffect } from 'react';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

/**
 * 卡片列表组件 - 支持多列布局和展开/折叠
 */
export function MobileCardList({ rows, columns = 1, copyMode = 'click' }) {
    const { copyToClipboard } = useCopyToClipboard();
    const [copiedCard, setCopiedCard] = useState(null);

    // 从设置读取默认展开状态
    const [defaultExpanded, setDefaultExpanded] = useState(() => {
        if (typeof window === 'undefined') return true;
        return localStorage.getItem('wiki-card-expanded') !== 'false';
    });

    // 各卡片的展开状态
    const [expandedCards, setExpandedCards] = useState({});

    // 监听设置变化
    useEffect(() => {
        const handleSettingsChange = () => {
            const newDefault = localStorage.getItem('wiki-card-expanded') !== 'false';
            setDefaultExpanded(newDefault);
            // 重置所有卡片到新的默认状态
            setExpandedCards({});
        };

        window.addEventListener('wiki-settings-change', handleSettingsChange);
        return () => window.removeEventListener('wiki-settings-change', handleSettingsChange);
    }, []);

    const handleCopy = (text, index, field) => {
        if (!text) return;
        copyToClipboard(text);
        setCopiedCard(`${index}-${field}`);
        setTimeout(() => setCopiedCard(null), 300);
    };

    const toggleCard = (index) => {
        setExpandedCards(prev => ({
            ...prev,
            [index]: prev[index] === undefined ? !defaultExpanded : !prev[index]
        }));
    };

    const isExpanded = (index) => {
        if (expandedCards[index] !== undefined) {
            return expandedCards[index];
        }
        return defaultExpanded;
    };

    if (!rows || rows.length === 0) {
        return (
            <div
                className="flex items-center justify-center h-32"
                style={{ color: 'var(--text-muted)' }}
            >
                暂无数据
            </div>
        );
    }

    // 根据列数设置网格
    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5'
    };

    return (
        <div className={`grid ${gridCols[columns] || 'grid-cols-1'} gap-3`}>
            {rows.map((row, index) => {
                const expanded = isExpanded(index);
                return (
                    <div
                        key={index}
                        className="rounded-lg shadow-sm overflow-hidden"
                        style={{
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-color)'
                        }}
                    >
                        {/* 卡片头部：名称 + 翻译 + 展开按钮 */}
                        <div
                            className="flex items-center justify-between p-3 cursor-pointer"
                            onClick={() => toggleCard(index)}
                            style={{ borderBottom: expanded ? '1px solid var(--border-color)' : 'none' }}
                        >
                            <div className="flex-1 min-w-0">
                                <div
                                    className={`font-mono font-bold text-base truncate ${copiedCard === `${index}-code` ? 'copied' : ''
                                        }`}
                                    style={{ color: 'var(--text-code)' }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleCopy(row.code, index, 'code');
                                    }}
                                >
                                    {row.code}
                                </div>
                                <div
                                    className={`text-sm truncate mt-0.5 ${copiedCard === `${index}-translation` ? 'copied' : ''
                                        }`}
                                    style={{ color: 'var(--text-muted)' }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleCopy(row.translation, index, 'translation');
                                    }}
                                >
                                    {row.translation}
                                </div>
                            </div>
                            {/* 展开/折叠按钮 */}
                            <button
                                className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-transform bg-transparent border-none cursor-pointer"
                                style={{
                                    color: 'var(--text-muted)',
                                    transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)'
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleCard(index);
                                }}
                            >
                                ›
                            </button>
                        </div>

                        {/* 卡片详情 */}
                        {expanded && (
                            <div className="p-3 pt-2 space-y-2 text-sm">
                                <div
                                    className={`cursor-pointer ${copiedCard === `${index}-description` ? 'copied' : ''}`}
                                    onClick={() => handleCopy(row.description, index, 'description')}
                                >
                                    <span className="font-semibold" style={{ color: 'var(--text-muted)' }}>描述：</span>
                                    <span style={{ color: 'var(--text-primary)' }}>{row.description}</span>
                                </div>

                                <div
                                    className={`cursor-pointer ${copiedCard === `${index}-example` ? 'copied' : ''}`}
                                    onClick={() => handleCopy(row.example, index, 'example')}
                                >
                                    <span className="font-semibold" style={{ color: 'var(--text-muted)' }}>例子：</span>
                                    <span
                                        className="font-mono px-1 py-0.5 rounded text-xs break-all inline"
                                        style={{
                                            color: 'var(--text-code-example)',
                                            background: 'var(--bg-code-example)'
                                        }}
                                    >
                                        {row.example}
                                    </span>
                                </div>

                                <div
                                    className={`cursor-pointer ${copiedCard === `${index}-valueType` ? 'copied' : ''}`}
                                    onClick={() => handleCopy(row.valueType, index, 'valueType')}
                                >
                                    <span className="font-semibold" style={{ color: 'var(--text-muted)' }}>类型：</span>
                                    <span style={{ color: 'var(--text-primary)' }}>{row.valueType}</span>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
