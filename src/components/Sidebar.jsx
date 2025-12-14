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
                className="fixed top-[20px] left-[20px] z-[1001] w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg shadow-lg cursor-pointer"
                style={{
                    background: 'var(--bg-sidebar)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
            >
                <span className="block w-[18px] h-[2px] bg-white rounded-sm"></span>
                <span className="block w-[18px] h-[2px] bg-white rounded-sm"></span>
                <span className="block w-[18px] h-[2px] bg-white rounded-sm"></span>
            </button>

            {/* 遮罩层 - 使用 opacity 过渡替代条件渲染 */}
            <div
                className="fixed inset-0 z-[999]"
                onClick={() => setIsOpen(false)}
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'auto' : 'none',
                    transition: 'opacity 0.3s ease',
                    willChange: 'opacity'
                }}
            />

            {/* 侧边栏 - 使用 transform 替代 left 实现 GPU 加速 */}
            <aside
                className="fixed top-0 left-0 h-screen w-[300px] z-[1000] overflow-y-auto"
                style={{
                    background: 'var(--bg-sidebar)',
                    color: 'var(--text-sidebar)',
                    borderRight: '1px solid var(--border-sidebar)',
                    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    willChange: 'transform'
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
