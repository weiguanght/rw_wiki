import { useState, useEffect } from 'react';

/**
 * 响应式布局 Hook
 * 根据设置和宽高比返回布局信息
 * @returns {{ useCardView: boolean, columns: number, aspectRatio: number }}
 */
export function useResponsiveLayout() {
    const [layout, setLayout] = useState(() => {
        if (typeof window === 'undefined') {
            return { useCardView: false, columns: 1, aspectRatio: 1.5 };
        }
        // 宽高比 = width / height
        const ratio = window.innerWidth / window.innerHeight;
        const autoSwitch = localStorage.getItem('wiki-auto-card-switch') === 'true';
        return calculateLayout(ratio, autoSwitch);
    });

    useEffect(() => {
        const handleResize = () => {
            // 宽高比 = width / height
            const ratio = window.innerWidth / window.innerHeight;
            const autoSwitch = localStorage.getItem('wiki-auto-card-switch') === 'true';
            setLayout(calculateLayout(ratio, autoSwitch));
        };

        // 监听设置变化
        const handleStorageChange = () => {
            handleResize();
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('storage', handleStorageChange);

        // 自定义事件用于同页面设置变更
        window.addEventListener('wiki-settings-change', handleStorageChange);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('wiki-settings-change', handleStorageChange);
        };
    }, []);

    return layout;
}

/**
 * 计算布局
 * @param {number} ratio - 宽高比 (width / height)
 * @param {boolean} autoSwitch - 是否启用自动切换（设置选项）
 */
function calculateLayout(ratio, autoSwitch) {
    // 计算列数（全局固定，只要是卡片模式都适用）
    const getColumns = (r) => {
        if (r < 0.75) return 1;
        if (r < 1.1) return 2;
        if (r < 1.4) return 3;
        if (r < 1.7) return 4;
        return 5;
    };

    // 1. 如果设置选项打开，强制使用卡片形式
    if (autoSwitch) {
        return { useCardView: true, columns: getColumns(ratio), aspectRatio: ratio };
    }

    // 2. 如果设置选项关闭，检测宽高比是否 <= 1.3
    if (ratio <= 1.3) {
        // 宽高比 <= 1.3 → 卡片形式
        return { useCardView: true, columns: getColumns(ratio), aspectRatio: ratio };
    }

    // 3. 宽高比 > 1.3 → 表格形式
    return { useCardView: false, columns: 1, aspectRatio: ratio };
}

/**
 * 触发设置变更事件
 */
export function triggerSettingsChange() {
    window.dispatchEvent(new Event('wiki-settings-change'));
}
