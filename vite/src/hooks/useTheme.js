import { useState, useEffect } from 'react';

/**
 * 主题管理 Hook
 * @returns {{ isDark: boolean, toggleTheme: Function }}
 */
export function useTheme() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === 'undefined') return false;
        const saved = localStorage.getItem('wiki-theme');
        if (saved === 'dark') return true;
        if (saved === 'light') return false;
        return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('wiki-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return { isDark, toggleTheme };
}
