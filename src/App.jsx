import { useRef, useState, useEffect, Suspense, lazy } from 'react';
import { Sidebar } from './components/Sidebar';
import { DesktopTable } from './components/DesktopTable';
import { MobileCardList } from './components/MobileCardList';
import { SearchBar } from './components/SearchBar';
import { ThemeToggle } from './components/ThemeToggle';
import { CopyToast, BackToTop } from './components/Utilities';
import { useResponsiveLayout } from './hooks/useResponsiveLayout';
import { useTheme } from './hooks/useTheme';
import { useCopyToClipboard } from './hooks/useCopyToClipboard';

// 懒加载模态框组件
const InfoModal = lazy(() => import('./components/InfoModal'));
const SettingsModal = lazy(() => import('./components/SettingsModal'));

// 加载骨架屏组件
function LoadingSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
      <div className="text-center">
        <div
          className="w-12 h-12 border-4 rounded-full animate-spin mx-auto mb-4"
          style={{ borderColor: '#3498db', borderTopColor: 'transparent' }}
        />
        <p style={{ color: 'var(--text-muted)' }}>加载中...</p>
      </div>
    </div>
  );
}

function App() {
  const { useCardView, columns } = useResponsiveLayout();
  const { isDark, toggleTheme } = useTheme();
  const { copied } = useCopyToClipboard();
  const mainContentRef = useRef(null);
  const [activeSectionId, setActiveSectionId] = useState(null);

  // 异步加载数据
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('./data/data.json')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Failed to load data:', err))
      .finally(() => setLoading(false));
  }, []);

  // 导航到指定 section
  const handleNavigate = (sectionId) => {
    setActiveSectionId(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 加载状态显示骨架屏
  if (loading || !data) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* 侧边栏 */}
      <Sidebar navigation={data.navigation} onNavigate={handleNavigate} />

      {/* 顶部遮挡层 - 防止内容穿透 */}
      <div
        className="fixed top-0 left-0 right-0 h-[60px] z-[999]"
        style={{ background: 'var(--bg-primary)' }}
      />

      {/* 顶部工具栏 */}
      <div className="fixed top-3 right-4 z-[1000] flex items-center gap-2">
        <Suspense fallback={null}>
          <SettingsModal />
          <InfoModal />
        </Suspense>
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        <SearchBar sections={data.sections} onNavigate={handleNavigate} />
      </div>

      {/* 主内容区 - 使用自然页面滚动 */}
      <main
        ref={mainContentRef}
        className="min-h-screen pt-20 pb-10 px-4 md:px-10"
        style={{
          background: 'var(--bg-primary)',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {data.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mb-16 p-4 md:p-5 rounded-lg shadow-sm"
            style={{
              background: 'var(--bg-secondary)',
              boxShadow: '0 2px 5px var(--shadow-color, rgba(0,0,0,0.05))'
            }}
          >
            {/* 章节标题 - sticky */}
            <h3
              className="sticky top-[60px] z-10 m-0 py-2.5 mb-5 text-xl md:text-2xl font-semibold"
              style={{
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                borderBottom: '2px solid #3498db'
              }}
            >
              {section.title}
            </h3>

            {/* 响应式渲染：卡片视图 / 表格视图 */}
            {useCardView ? (
              <MobileCardList rows={section.rows} columns={columns} />
            ) : (
              <DesktopTable rows={section.rows} />
            )}
          </section>
        ))}
      </main>

      {/* 返回顶部 */}
      <BackToTop containerRef={mainContentRef} />

      {/* 复制提示 */}
      <CopyToast show={copied} />
    </div>
  );
}

export default App;

