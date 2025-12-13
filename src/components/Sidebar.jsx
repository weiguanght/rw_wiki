import { useState, useEffect } from 'react';

/**
 * 侧边栏导航组件
 */
export function Sidebar({ navigation, onNavigate }) {
    const [isOpen, setIsOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(() => {
        if (typeof window === 'undefined') return {};
        const saved = localStorage.getItem('wiki-nav-collapsed');
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem('wiki-nav-collapsed', JSON.stringify(collapsed));
    }, [collapsed]);

    const toggleCategory = (dataCategory) => {
        setCollapsed(prev => ({
            ...prev,
            [dataCategory]: !prev[dataCategory]
        }));
    };

    const handleLinkClick = (id) => {
        onNavigate?.(id);
        setIsOpen(false);
    };

    return (
        <>
            {/* 汉堡菜单按钮 - 正方形 */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-[1001] w-11 h-11 flex items-center justify-center rounded-lg shadow-lg transition-colors cursor-pointer text-lg"
                style={{ background: 'var(--bg-sidebar)', color: 'white' }}
            >
                ☰
            </button>

            {/* 遮罩层 */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[999]"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* 侧边栏 */}
            <aside
                className={`fixed top-0 h-screen w-[300px] z-[1000] overflow-y-auto transition-[left] duration-300 ${isOpen ? 'left-0' : 'left-[-320px]'
                    }`}
                style={{
                    background: 'var(--bg-sidebar)',
                    color: 'var(--text-sidebar)',
                    borderRight: '1px solid var(--border-sidebar)'
                }}
            >
                {/* 头部 */}
                <div
                    className="p-5 text-center"
                    style={{ background: 'var(--bg-sidebar-header)' }}
                >
                    <h2 className="m-0 text-xl">铁锈战争模组Wiki</h2>
                    <small className="text-sm opacity-80">代码参考手册</small>
                </div>

                {/* 导航列表 */}
                <ul className="list-none p-0 m-0">
                    {navigation.map((cat) => (
                        <li key={cat.dataCategory}>
                            {/* 一级分类 */}
                            <div
                                onClick={() => toggleCategory(cat.dataCategory)}
                                className="flex justify-between items-center px-5 py-3 cursor-pointer font-bold transition-colors select-none"
                                style={{
                                    background: 'var(--bg-nav-category)',
                                    color: '#fff',
                                    borderBottom: '1px solid var(--border-sidebar)'
                                }}
                            >
                                <span>{cat.category}</span>
                                <span
                                    className={`text-xs transition-transform duration-300 ${collapsed[cat.dataCategory] ? '-rotate-90' : ''
                                        }`}
                                >
                                    ▼
                                </span>
                            </div>

                            {/* 子菜单 */}
                            <ul
                                className={`list-none p-0 m-0 overflow-hidden transition-all duration-300 ${collapsed[cat.dataCategory] ? 'max-h-0' : 'max-h-[2000px]'
                                    }`}
                            >
                                {cat.items.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleLinkClick(item.id);
                                            }}
                                            className="block px-5 py-2.5 no-underline text-sm transition-all duration-200 hover:pl-6"
                                            style={{
                                                color: 'var(--text-sidebar-link)',
                                                borderBottom: '1px solid var(--border-sidebar)'
                                            }}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
}
