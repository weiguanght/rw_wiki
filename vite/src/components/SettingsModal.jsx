import { useState, useEffect } from 'react';
import { triggerSettingsChange } from '../hooks/useResponsiveLayout';

/**
 * 设置弹窗组件
 */
export function SettingsModal() {
    const [isOpen, setIsOpen] = useState(false);

    // 复制模式
    const [copyMode, setCopyMode] = useState(() => {
        if (typeof window === 'undefined') return 'click';
        return localStorage.getItem('wiki-copy-mode') || 'click';
    });

    // 自动切换卡片视图
    const [autoCardSwitch, setAutoCardSwitch] = useState(() => {
        if (typeof window === 'undefined') return false;
        return localStorage.getItem('wiki-auto-card-switch') === 'true';
    });

    // 卡片默认展开
    const [cardExpanded, setCardExpanded] = useState(() => {
        if (typeof window === 'undefined') return true;
        return localStorage.getItem('wiki-card-expanded') !== 'false';
    });

    useEffect(() => {
        localStorage.setItem('wiki-copy-mode', copyMode);
    }, [copyMode]);

    useEffect(() => {
        localStorage.setItem('wiki-auto-card-switch', String(autoCardSwitch));
        triggerSettingsChange();
    }, [autoCardSwitch]);

    useEffect(() => {
        localStorage.setItem('wiki-card-expanded', String(cardExpanded));
        triggerSettingsChange();
    }, [cardExpanded]);

    return (
        <>
            {/* 触发按钮 */}
            <button
                onClick={() => setIsOpen(true)}
                className="p-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer bg-transparent border-none"
                title="设置"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#3498db">
                    <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                </svg>
            </button>

            {/* 弹窗 */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[2000] flex justify-center items-center"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="rounded-xl p-6 max-w-[420px] w-[90%] max-h-[80vh] overflow-y-auto shadow-2xl relative"
                        style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* 关闭按钮 */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-2xl leading-none cursor-pointer bg-transparent border-none transition-colors hover:opacity-70"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            ×
                        </button>

                        <h3 className="m-0 mb-5 text-xl" style={{ color: '#3498db' }}>
                            设置
                        </h3>

                        {/* 设置项1: 复制模式 */}
                        <SettingItem
                            title="单元格复制触发方式"
                            description="选择如何触发复制功能"
                        >
                            <div className="flex gap-2">
                                <ToggleButton
                                    active={copyMode === 'click'}
                                    onClick={() => setCopyMode('click')}
                                >
                                    单击
                                </ToggleButton>
                                <ToggleButton
                                    active={copyMode === 'longpress'}
                                    onClick={() => setCopyMode('longpress')}
                                >
                                    长按
                                </ToggleButton>
                            </div>
                        </SettingItem>

                        {/* 设置项2: 自动切换卡片视图 */}
                        <SettingItem
                            title="自动切换卡片视图"
                            description="宽高比越大列数越多，1-5列"
                        >
                            <ToggleSwitch
                                checked={autoCardSwitch}
                                onChange={setAutoCardSwitch}
                            />
                        </SettingItem>

                        {/* 设置项3: 卡片默认展开 */}
                        <SettingItem
                            title="卡片默认展开"
                            description="关闭后卡片只显示名称和翻译，可手动展开"
                            noBorder
                        >
                            <ToggleSwitch
                                checked={cardExpanded}
                                onChange={setCardExpanded}
                            />
                        </SettingItem>
                    </div>
                </div>
            )}
        </>
    );
}

/**
 * 设置项容器
 */
function SettingItem({ title, description, children, noBorder = false }) {
    return (
        <div
            className="flex items-center justify-between py-3 gap-4"
            style={{ borderBottom: noBorder ? 'none' : '1px solid var(--border-color)' }}
        >
            <div className="flex-1">
                <div className="text-sm" style={{ color: 'var(--text-primary)' }}>
                    {title}
                </div>
                <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                    {description}
                </div>
            </div>
            <div className="flex-shrink-0">
                {children}
            </div>
        </div>
    );
}

/**
 * 切换按钮
 */
function ToggleButton({ active, onClick, children }) {
    return (
        <button
            onClick={onClick}
            className="px-4 py-1.5 rounded-full text-sm cursor-pointer transition-all"
            style={{
                border: '1px solid',
                borderColor: active ? '#3498db' : 'var(--border-color)',
                background: active ? '#3498db' : 'transparent',
                color: active ? 'white' : 'var(--text-muted)'
            }}
        >
            {children}
        </button>
    );
}

/**
 * 开关组件
 */
function ToggleSwitch({ checked, onChange }) {
    return (
        <button
            onClick={() => onChange(!checked)}
            className="relative w-12 h-6 rounded-full cursor-pointer transition-colors"
            style={{
                background: checked ? '#3498db' : 'var(--border-color)'
            }}
        >
            <span
                className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all"
                style={{
                    left: checked ? '26px' : '2px'
                }}
            />
        </button>
    );
}
