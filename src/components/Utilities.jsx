import { useState } from 'react';

/**
 * 复制Toast提示组件
 */
export function CopyToast({ message = '已复制到剪贴板', show }) {
    return (
        <div
            className={`fixed bottom-20 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-lg text-sm z-[3000] pointer-events-none transition-all duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
                }`}
            style={{ background: 'rgba(0, 0, 0, 0.8)', color: 'white' }}
        >
            {message}
        </div>
    );
}

/**
 * 返回顶部按钮组件
 */
export function BackToTop({ containerRef }) {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 监听滚动
    if (containerRef.current) {
        containerRef.current.onscroll = () => {
            setVisible(containerRef.current.scrollTop > 300);
        };
    }

    return (
        <button
            onClick={handleClick}
            className={`fixed bottom-5 right-5 w-12 h-12 rounded-full text-white text-lg shadow-lg cursor-pointer transition-opacity z-50 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            style={{ background: '#3498db' }}
        >
            ↑
        </button>
    );
}
