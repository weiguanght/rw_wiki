import { useState, useCallback } from 'react';

/**
 * 复制到剪贴板 Hook
 * @returns {{ copied: boolean, copyToClipboard: Function }}
 */
export function useCopyToClipboard() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = useCallback(async (text) => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
            } else {
                // 备用方法
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.cssText = 'position:fixed;left:-9999px;top:-9999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            return true;
        } catch (err) {
            console.error('复制失败:', err);
            return false;
        }
    }, []);

    return { copied, copyToClipboard };
}
