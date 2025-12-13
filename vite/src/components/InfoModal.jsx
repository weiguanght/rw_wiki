import { useState } from 'react';

/**
 * 信息弹窗组件
 */
export function InfoModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* 触发按钮 */}
            <button
                onClick={() => setIsOpen(true)}
                className="p-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer bg-transparent border-none"
                title="代码表信息"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#3498db">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
            </button>

            {/* 弹窗 */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[2000] flex justify-center items-center"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="rounded-xl p-6 max-w-[500px] w-[90%] max-h-[80vh] overflow-y-auto shadow-2xl relative"
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

                        <h3 className="m-0 mb-4 text-xl" style={{ color: '#3498db' }}>
                            代码表制作信息
                        </h3>

                        <div className="space-y-4">
                            <div className="pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <p className="m-0 leading-relaxed text-sm">
                                    此代码表由"洛铭（改天再说）"（1980316694）自己拆包游戏代码以及自行在网络渠道上搜索和参考其他代码表以及教程收集总结制作而成。
                                </p>
                            </div>

                            <div className="pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <p className="m-0 mb-2 leading-relaxed text-sm">
                                    <strong>感谢：</strong>大家对代码表的错误进行改正。
                                </p>
                                <p className="m-0 leading-relaxed text-sm">
                                    <strong>群：</strong>319198864，上限为1000人
                                </p>
                            </div>

                            <div className="pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <p className="m-0 mb-2 leading-relaxed text-sm">
                                    此代码表为NDT-v1.15（正式版1.3.1.3）（2025.4.18）
                                </p>
                                <p className="m-0 mb-2 leading-relaxed text-sm">
                                    本人会不定期更新代码表，可能是小优化，也可能是大更新。
                                </p>
                                <p className="m-0 leading-relaxed text-sm">
                                    如有问题，可以向作者反映（1980316694），谢谢！
                                </p>
                            </div>

                            <div className="pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <p className="m-0 leading-relaxed text-sm">
                                    代码表内部依然可能有重复，错误等问题；也可能还会有没来得及测试的新代码；作者并不建议你去看那些未知的代码
                                </p>
                            </div>

                            <div>
                                <p className="m-0 leading-relaxed text-sm">
                                    遵循{' '}
                                    <a
                                        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="no-underline hover:underline"
                                        style={{ color: '#3498db' }}
                                    >
                                        CC BY-NC-SA 4.0
                                    </a>{' '}
                                    协议
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
