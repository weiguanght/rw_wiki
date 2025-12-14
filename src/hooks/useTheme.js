import { useState, useEffect, useRef } from 'react';

/**
 * 主题管理 Hook
 * @returns {{ isDark: boolean, toggleTheme: Function }}
 */
export function useTheme() {
    const isInitialMount = useRef(true);

    const [isDark, setIsDark] = useState(() => {
        if (typeof window === 'undefined') return false;
        const saved = localStorage.getItem('wiki-theme');
        if (saved === 'dark') return true;
        if (saved === 'light') return false;
        return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
    });

    useEffect(() => {
        // 初次加载时直接设置主题，不添加过渡效果
        if (isInitialMount.current) {
            isInitialMount.current = false;
            if (isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('wiki-theme', isDark ? 'dark' : 'light');
            return;
        }

        // 用户手动切换时，同步添加过渡类并切换主题
        // 先添加过渡类，然后在微任务中切换主题类，确保过渡生效
        document.documentElement.classList.add('theme-transitioning');

        // 使用 requestAnimationFrame 等待过渡类写入 DOM 后再切换主题
        requestAnimationFrame(() => {
            if (isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        });

        localStorage.setItem('wiki-theme', isDark ? 'dark' : 'light');

        // 过渡完成后移除过渡类（与 CSS 过渡时间同步）
        const timer = setTimeout(() => {
            document.documentElement.classList.remove('theme-transitioning');
        }, 350);

        return () => clearTimeout(timer);
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return { isDark, toggleTheme };
}
