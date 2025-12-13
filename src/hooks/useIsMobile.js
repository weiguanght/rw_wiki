import { useState, useEffect } from 'react';

/**
 * 响应式检测 Hook，判断当前是否为移动端
 * @param {number} breakpoint - 断点宽度，默认768px
 * @returns {boolean} 是否为移动端
 */
export function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.innerWidth < breakpoint;
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isMobile;
}
