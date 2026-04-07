import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ChevronRight, PanelLeftClose, PanelLeftOpen, Search, X } from 'lucide-react'
import unitCodeJson from './data/单位代码.json'
import './App.css'

type ViewMode = 'table' | 'card'
type SidebarTargetType = 'all' | 'section' | 'subSection' | 'entry'
type ColumnKey = 'code' | 'translation' | 'description' | 'constraints' | 'correct' | 'incorrect'

type UnknownRecord = Record<string, unknown>

interface EntryItem {
  id: number
  section: string
  sectionDescription: string
  subSection: string
  code: string
  translation: string
  descriptions: string[]
  constraints: string[]
  correctExamples: string[]
  incorrectExamples: string[]
}

interface SidebarSubSection {
  key: string
  section: string
  subSection: string
  title: string
  count: number
  entries: EntryItem[]
}

interface SidebarSection {
  key: string
  section: string
  title: string
  count: number
  subSections: SidebarSubSection[]
}

interface SidebarTarget {
  type: SidebarTargetType
  section?: string
  subSection?: string
  id?: number
}

interface ResizeState {
  key: ColumnKey
  startX: number
  startWidth: number
}

interface ColumnWidths {
  code: number
  translation: number
  description: number
  constraints: number
  correct: number
  incorrect: number
}

const DEFAULT_COLUMN_WIDTHS: ColumnWidths = {
  code: 180,
  translation: 160,
  description: 320,
  constraints: 260,
  correct: 260,
  incorrect: 260,
}

const SEARCHABLE_FIELDS = [
  'section',
  'sectionDescription',
  'subSection',
  'code',
  'translation',
  'descriptions',
  'constraints',
  'correctExamples',
  'incorrectExamples',
] as const

function App() {
  const allEntries = useMemo(() => parseEntries(unitCodeJson as unknown), [])

  const [searchText, setSearchText] = useState('')
  const [viewMode, setViewMode] = useState<ViewMode>('table')
  const [selectedId, setSelectedId] = useState<number | null>(allEntries[0]?.id ?? null)
  const [selectedSidebarTarget, setSelectedSidebarTarget] = useState('all')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => new Set())
  const [expandedSubSections, setExpandedSubSections] = useState<Set<string>>(() => new Set())
  const [columnWidths, setColumnWidths] = useState<ColumnWidths>(DEFAULT_COLUMN_WIDTHS)
  const [cardColumns, setCardColumns] = useState(1)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const resizeStateRef = useRef<ResizeState | null>(null)
  const tableRowRefs = useRef(new Map<number, HTMLTableRowElement>())
  const cardItemRefs = useRef(new Map<number, HTMLElement>())
  const cardWrapRef = useRef<HTMLDivElement | null>(null)

  const sidebarSections = useMemo(() => buildSidebarSections(allEntries), [allEntries])

  const filteredEntries = useMemo(() => filterEntries(allEntries, searchText), [allEntries, searchText])

  const selectedEntry = useMemo(() => {
    if (filteredEntries.length === 0) {
      return null
    }
    if (selectedId == null) {
      return filteredEntries[0]
    }
    return filteredEntries.find((item) => item.id === selectedId) ?? filteredEntries[0]
  }, [filteredEntries, selectedId])

  const selectEntryById = useCallback((nextId: number | null, syncSidebarTarget = true) => {
    if (nextId == null) {
      setSelectedId(null)
      return
    }

    const target = allEntries.find((item) => item.id === nextId)
    if (!target) {
      setSelectedId(nextId)
      return
    }

    setExpandedSections((prev) => addToSet(prev, target.section))
    setExpandedSubSections((prev) => addToSet(prev, makeSubSectionKey(target.section, target.subSection)))
    if (syncSidebarTarget) {
      setSelectedSidebarTarget(toSidebarTargetId({ type: 'entry', id: target.id }))
    }
    setSelectedId(target.id)
  }, [allEntries])

  useEffect(() => {
    if (!selectedEntry) {
      return
    }

    if (viewMode === 'table') {
      tableRowRefs.current.get(selectedEntry.id)?.scrollIntoView({ block: 'nearest' })
      return
    }

    cardItemRefs.current.get(selectedEntry.id)?.scrollIntoView({ block: 'nearest' })
  }, [selectedEntry, viewMode])

  useEffect(() => {
    if (viewMode !== 'card') {
      return
    }

    const element = cardWrapRef.current
    if (!element) {
      return
    }

    const updateColumns = () => {
      const cardMinWidth = 420
      const gap = 12
      const width = element.clientWidth
      const columns = Math.max(1, Math.floor((width + gap) / (cardMinWidth + gap)))
      setCardColumns(columns)
    }

    updateColumns()
    const observer = new ResizeObserver(updateColumns)
    observer.observe(element)

    return () => observer.disconnect()
  }, [viewMode, filteredEntries.length])

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const state = resizeStateRef.current
      if (!state) {
        return
      }

      const nextWidth = Math.max(120, state.startWidth + event.clientX - state.startX)
      setColumnWidths((prev) => ({
        ...prev,
        [state.key]: nextWidth,
      }))
    }

    const handlePointerStop = () => {
      resizeStateRef.current = null
      document.body.classList.remove('col-resizing')
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerStop)
    window.addEventListener('pointercancel', handlePointerStop)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerStop)
      window.removeEventListener('pointercancel', handlePointerStop)
      document.body.classList.remove('col-resizing')
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isEditableElement(event.target)) {
        return
      }

      if (filteredEntries.length === 0) {
        return
      }

      const currentIndex = selectedId == null
        ? 0
        : Math.max(0, filteredEntries.findIndex((item) => item.id === selectedId))

      if (viewMode === 'table') {
        if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
          return
        }

        event.preventDefault()
        const delta = event.key === 'ArrowDown' ? 1 : -1
        const nextIndex = clamp(currentIndex + delta, 0, filteredEntries.length - 1)
        selectEntryById(filteredEntries[nextIndex].id)
        return
      }

      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        return
      }

      event.preventDefault()
      let delta = 0
      if (event.key === 'ArrowLeft') {
        delta = -1
      } else if (event.key === 'ArrowRight') {
        delta = 1
      } else if (event.key === 'ArrowUp') {
        delta = -cardColumns
      } else if (event.key === 'ArrowDown') {
        delta = cardColumns
      }

      const nextIndex = clamp(currentIndex + delta, 0, filteredEntries.length - 1)
      selectEntryById(filteredEntries[nextIndex].id)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [cardColumns, filteredEntries, selectEntryById, selectedId, viewMode])

  const expandAllNodes = () => {
    setExpandedSections(new Set(sidebarSections.map((item) => item.key)))
    setExpandedSubSections(
      new Set(
        sidebarSections.flatMap((section) => section.subSections.map((subSection) => subSection.key)),
      ),
    )
  }

  const collapseAllNodes = () => {
    setExpandedSections(new Set())
    setExpandedSubSections(new Set())
  }

  const selectBySidebar = (target: SidebarTarget) => {
    const targetEntry = findTargetEntry(allEntries, target)
    if (!targetEntry) {
      return
    }

    setSelectedSidebarTarget(toSidebarTargetId(target))

    if (!filteredEntries.some((item) => item.id === targetEntry.id)) {
      setSearchText('')
    }

    selectEntryById(targetEntry.id, false)
  }

  const copyText = async (name: string, value: string) => {
    if (!value.trim()) {
      return
    }

    try {
      await navigator.clipboard.writeText(value)
      setCopiedField(name)
      window.setTimeout(() => setCopiedField(null), 700)
    } catch {
      // ignore clipboard errors
    }
  }

  const totalCount = allEntries.length
  const filteredCount = filteredEntries.length

  const handleSearchTextChange = (nextText: string) => {
    setSearchText(nextText)

    const nextFiltered = filterEntries(allEntries, nextText)
    if (nextFiltered.length === 0) {
      selectEntryById(null, false)
      return
    }

    const nextId = selectedId != null && nextFiltered.some((item) => item.id === selectedId)
      ? selectedId
      : nextFiltered[0].id

    selectEntryById(nextId, false)
  }

  return (
    <div className="appShell">
      <header className="topBar">
        <button
          type="button"
          className="iconButton"
          onClick={() => setSidebarCollapsed((prev) => !prev)}
          aria-label={sidebarCollapsed ? '展开导航栏' : '收起导航栏'}
          aria-pressed={sidebarCollapsed}
          title={sidebarCollapsed ? '展开导航' : '收起导航'}
        >
          {sidebarCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
        </button>

        <h1 className="title">单位代码预览器（Web）</h1>

        <div className="topTools">
          <label className="searchBox" aria-label="搜索">
            <Search className="searchIcon" size={15} />
            <input
              value={searchText}
              onChange={(event) => handleSearchTextChange(event.target.value)}
              className="searchInput"
              autoComplete="off"
            />
            {!searchText && <span className="searchHint">搜索</span>}
            {searchText && (
              <button
                type="button"
                className="searchClear"
                onClick={() => handleSearchTextChange('')}
                aria-label="清空搜索"
              >
                <X size={12} />
              </button>
            )}
          </label>

          <div className="viewToggle" role="group" aria-label="视图">
            <span className="viewLabel">视图</span>
            <button
              type="button"
              className={viewMode === 'table' ? 'toggleButton active' : 'toggleButton'}
              onClick={() => setViewMode('table')}
            >
              表格
            </button>
            <button
              type="button"
              className={viewMode === 'card' ? 'toggleButton active' : 'toggleButton'}
              onClick={() => setViewMode('card')}
            >
              卡片
            </button>
          </div>

          <div className="countText" title="筛选条目 / 总条目">
            {filteredCount} / {totalCount}
          </div>
        </div>
      </header>

      <div className={sidebarCollapsed ? 'layoutGrid sidebarCollapsed' : 'layoutGrid'}>
        {!sidebarCollapsed && (
          <aside className="sidebarPanel">
          <div className="panelHeader">
            <div className="panelTitle">导航</div>
            <div className="panelActions">
              <button type="button" className="panelActionButton" onClick={expandAllNodes}>
                展开全部
              </button>
              <button type="button" className="panelActionButton" onClick={collapseAllNodes}>
                收起全部
              </button>
            </div>
          </div>
          <button
            type="button"
            className={selectedSidebarTarget === 'all' ? 'navRow allRow active' : 'navRow allRow'}
            onClick={() => selectBySidebar({ type: 'all' })}
          >
            <span className="navText">全部</span>
            <span className="navCount">{totalCount}</span>
          </button>

          <div className="navTree">
            {sidebarSections.map((section) => {
              const sectionExpanded = expandedSections.has(section.key)
              const sectionTargetId = toSidebarTargetId({ type: 'section', section: section.section })
              const sectionSelected = selectedSidebarTarget === sectionTargetId

              return (
                <div key={section.key} className="treeBlock">
                  <div className={sectionSelected ? 'navRow level1 active' : 'navRow level1'}>
                    <button
                      type="button"
                      className="twisty"
                      onClick={() => {
                        setExpandedSections((prev) => toggleInSet(prev, section.key))
                      }}
                      title={sectionExpanded ? '收起大节' : '展开大节'}
                    >
                      <ChevronRight className={sectionExpanded ? 'twistyIcon expanded' : 'twistyIcon'} size={14} />
                    </button>
                    <button
                      type="button"
                      className="navTextButton"
                      onClick={() => selectBySidebar({ type: 'section', section: section.section })}
                      onDoubleClick={() => {
                        setExpandedSections((prev) => toggleInSet(prev, section.key))
                      }}
                    >
                      <span className="navText">{section.title}</span>
                    </button>
                    <span className="navCount">{section.count}</span>
                  </div>

                  {sectionExpanded && (
                    <div>
                      {section.subSections.map((subSection) => {
                        const subExpanded = expandedSubSections.has(subSection.key)
                        const subTargetId = toSidebarTargetId({
                          type: 'subSection',
                          section: subSection.section,
                          subSection: subSection.subSection,
                        })
                        const subSelected = selectedSidebarTarget === subTargetId

                        return (
                          <div key={subSection.key} className="subTreeBlock">
                            <div className={subSelected ? 'navRow level2 active' : 'navRow level2'}>
                              <button
                                type="button"
                                className="twisty"
                                onClick={() => {
                                  setExpandedSubSections((prev) => toggleInSet(prev, subSection.key))
                                }}
                                title={subExpanded ? '收起小节' : '展开小节'}
                              >
                                <ChevronRight className={subExpanded ? 'twistyIcon expanded' : 'twistyIcon'} size={14} />
                              </button>
                              <button
                                type="button"
                                className="navTextButton"
                                onClick={() => {
                                  selectBySidebar({
                                    type: 'subSection',
                                    section: subSection.section,
                                    subSection: subSection.subSection,
                                  })
                                }}
                                onDoubleClick={() => {
                                  setExpandedSubSections((prev) => toggleInSet(prev, subSection.key))
                                }}
                              >
                                <span className="navText">{subSection.title}</span>
                              </button>
                              <span className="navCount">{subSection.count}</span>
                            </div>

                            {subExpanded && (
                              <div>
                                {subSection.entries.map((entry) => {
                                  const entryTargetId = toSidebarTargetId({ type: 'entry', id: entry.id })
                                  const selected = selectedSidebarTarget === entryTargetId
                                  return (
                                    <button
                                      key={entry.id}
                                      type="button"
                                      className={selected ? 'navRow level3 active' : 'navRow level3'}
                                      onClick={() => {
                                        setSelectedSidebarTarget(entryTargetId)
                                        selectEntryById(entry.id, false)
                                      }}
                                    >
                                      <span className="navText">{entry.code}</span>
                                    </button>
                                  )
                                })}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          </aside>
        )}

        <main className="mainPanel">
          {viewMode === 'table' ? (
            <div className="tableWrap">
              <table className="entryTable">
                <colgroup>
                  <col style={{ width: columnWidths.code }} />
                  <col style={{ width: columnWidths.translation }} />
                  <col style={{ width: columnWidths.description }} />
                  <col style={{ width: columnWidths.constraints }} />
                  <col style={{ width: columnWidths.correct }} />
                  <col style={{ width: columnWidths.incorrect }} />
                </colgroup>
                <thead>
                  <tr>
                    <ResizableHeader
                      title="键"
                      colKey="code"
                      onResizeStart={(state) => {
                        resizeStateRef.current = state
                      }}
                      width={columnWidths.code}
                    />
                    <ResizableHeader
                      title="中文译名"
                      colKey="translation"
                      onResizeStart={(state) => {
                        resizeStateRef.current = state
                      }}
                      width={columnWidths.translation}
                    />
                    <ResizableHeader
                      title="描述"
                      colKey="description"
                      onResizeStart={(state) => {
                        resizeStateRef.current = state
                      }}
                      width={columnWidths.description}
                    />
                    <ResizableHeader
                      title="约束"
                      colKey="constraints"
                      onResizeStart={(state) => {
                        resizeStateRef.current = state
                      }}
                      width={columnWidths.constraints}
                    />
                    <ResizableHeader
                      title="正确例子"
                      colKey="correct"
                      onResizeStart={(state) => {
                        resizeStateRef.current = state
                      }}
                      width={columnWidths.correct}
                    />
                    <ResizableHeader
                      title="错误例子"
                      colKey="incorrect"
                      onResizeStart={(state) => {
                        resizeStateRef.current = state
                      }}
                      width={columnWidths.incorrect}
                    />
                  </tr>
                </thead>

                <tbody>
                  {filteredEntries.map((entry) => {
                    const selected = selectedEntry?.id === entry.id
                    return (
                      <tr
                        key={entry.id}
                        className={selected ? 'selectedRow' : ''}
                        onClick={() => selectEntryById(entry.id)}
                        ref={(element) => {
                          if (element) {
                            tableRowRefs.current.set(entry.id, element)
                          } else {
                            tableRowRefs.current.delete(entry.id)
                          }
                        }}
                      >
                        <td title={entry.code}>{entry.code}</td>
                        <td title={entry.translation}>{entry.translation}</td>
                        <td title={toSingleLine(entry.descriptions)}>{toSingleLine(entry.descriptions)}</td>
                        <td title={toSingleLine(entry.constraints)}>{toSingleLine(entry.constraints)}</td>
                        <td title={toSingleLine(entry.correctExamples)}>{toSingleLine(entry.correctExamples)}</td>
                        <td title={toSingleLine(entry.incorrectExamples)}>{toSingleLine(entry.incorrectExamples)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="cardWrap" ref={cardWrapRef}>
              {filteredEntries.map((entry) => {
                const selected = selectedEntry?.id === entry.id
                return (
                  <article
                    key={entry.id}
                    className={selected ? 'entryCard selectedCard' : 'entryCard'}
                    onClick={() => selectEntryById(entry.id)}
                    ref={(element) => {
                      if (element) {
                        cardItemRefs.current.set(entry.id, element)
                      } else {
                        cardItemRefs.current.delete(entry.id)
                      }
                    }}
                  >
                    <CardLine label="键" value={entry.code} />
                    <CardLine label="中文译名" value={entry.translation} />
                    <CardLine label="描述" value={toSingleLine(entry.descriptions)} />
                    <CardLine label="约束" value={toSingleLine(entry.constraints)} />
                    <CardLine label="正确例子" value={toSingleLine(entry.correctExamples)} />
                    <CardLine label="错误例子" value={toSingleLine(entry.incorrectExamples)} />
                  </article>
                )
              })}
            </div>
          )}
        </main>

        <aside className="detailPanel">
          <div className="panelTitle">详情</div>
          {selectedEntry ? (
            <div className="detailContent">
              <DetailItem
                label="大节"
                value={selectedEntry.section}
                copied={copiedField === '大节'}
                onClick={() => copyText('大节', selectedEntry.section)}
              />
              <DetailItem
                label="小节"
                value={selectedEntry.subSection}
                copied={copiedField === '小节'}
                onClick={() => copyText('小节', selectedEntry.subSection)}
              />
              <DetailItem
                label="键"
                value={selectedEntry.code}
                copied={copiedField === '键'}
                onClick={() => copyText('键', selectedEntry.code)}
              />
              <DetailItem
                label="中文译名"
                value={selectedEntry.translation}
                copied={copiedField === '中文译名'}
                onClick={() => copyText('中文译名', selectedEntry.translation)}
              />
              <DetailItem
                label="描述"
                value={toSingleLine(selectedEntry.descriptions)}
                copied={copiedField === '描述'}
                onClick={() => copyText('描述', toSingleLine(selectedEntry.descriptions))}
              />
              <DetailItem
                label="约束"
                value={toSingleLine(selectedEntry.constraints)}
                copied={copiedField === '约束'}
                onClick={() => copyText('约束', toSingleLine(selectedEntry.constraints))}
              />
              <DetailItem
                label="正确例子"
                value={toSingleLine(selectedEntry.correctExamples)}
                copied={copiedField === '正确例子'}
                onClick={() => copyText('正确例子', toSingleLine(selectedEntry.correctExamples))}
              />
              <DetailItem
                label="错误例子"
                value={toSingleLine(selectedEntry.incorrectExamples)}
                copied={copiedField === '错误例子'}
                onClick={() => copyText('错误例子', toSingleLine(selectedEntry.incorrectExamples))}
              />
            </div>
          ) : (
            <div className="emptyDetail">没有匹配条目</div>
          )}
        </aside>
      </div>
    </div>
  )
}

function CardLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="cardLine" title={value}>
      <span className="cardLabel">{label}</span>
      <span className="cardValue">{value}</span>
    </div>
  )
}

function DetailItem({
  label,
  value,
  copied,
  onClick,
}: {
  label: string
  value: string
  copied: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      className={copied ? 'detailItem copied' : 'detailItem'}
      onClick={onClick}
      title="点击复制"
    >
      <div className="detailLabel">{label}</div>
      <div className="detailValueRow">
        <div className="detailValue">{value || ' '}</div>
        {copied && <span className="copiedBadge">已复制</span>}
      </div>
    </button>
  )
}

function ResizableHeader({
  title,
  colKey,
  width,
  onResizeStart,
}: {
  title: string
  colKey: ColumnKey
  width: number
  onResizeStart: (state: ResizeState) => void
}) {
  return (
    <th style={{ width }}>
      <span className="headerTitle">{title}</span>
      <span
        className="resizeHandle"
        onPointerDown={(event) => {
          event.preventDefault()
          event.stopPropagation()
          document.body.classList.add('col-resizing')
          event.currentTarget.setPointerCapture(event.pointerId)
          onResizeStart({
            key: colKey,
            startX: event.clientX,
            startWidth: width,
          })
        }}
      />
    </th>
  )
}

function parseEntries(source: unknown): EntryItem[] {
  const output: EntryItem[] = []

  collectEntries(source, { section: '', sectionDescription: '', subSection: '' }, output)

  const seen = new Set<string>()
  const dedup: EntryItem[] = []

  for (const entry of output) {
    const key = [
      entry.section,
      entry.sectionDescription,
      entry.subSection,
      entry.code,
      entry.translation,
      toSingleLine(entry.descriptions),
      toSingleLine(entry.constraints),
      toSingleLine(entry.correctExamples),
      toSingleLine(entry.incorrectExamples),
    ].join('|')

    if (!seen.has(key)) {
      seen.add(key)
      dedup.push(entry)
    }
  }

  return dedup.map((entry, index) => ({ ...entry, id: index + 1 }))
}

function collectEntries(
  source: unknown,
  context: { section: string; sectionDescription: string; subSection: string },
  output: EntryItem[],
): void {
  if (Array.isArray(source)) {
    for (const item of source) {
      collectEntries(item, context, output)
    }
    return
  }

  if (!isRecord(source)) {
    return
  }

  const nextContext = {
    section: getString(source, 'section') ?? context.section,
    sectionDescription: getString(source, 'section_description') ?? context.sectionDescription,
    subSection: getString(source, 'subSection') ?? context.subSection,
  }

  const entries = source.entries
  if (Array.isArray(entries)) {
    for (const item of entries) {
      if (!isRecord(item)) {
        continue
      }

      output.push({
        id: 0,
        section: nextContext.section,
        sectionDescription: nextContext.sectionDescription,
        subSection: nextContext.subSection,
        code: getString(item, 'code') ?? '(无键)',
        translation: getString(item, 'translation') ?? '',
        descriptions: getStringList(item, 'description'),
        constraints: getStringList(item, 'constraints'),
        correctExamples: getStringList(item, 'correct_examples'),
        incorrectExamples: getStringList(item, 'incorrect_examples'),
      })
    }
  }

  for (const [key, value] of Object.entries(source)) {
    if (key === 'entries') {
      continue
    }
    collectEntries(value, nextContext, output)
  }
}

function buildSidebarSections(entries: EntryItem[]): SidebarSection[] {
  const sections: SidebarSection[] = []
  const sectionOrder = distinctInOrder(entries.map((item) => item.section))

  for (const section of sectionOrder) {
    const sectionEntries = entries.filter((item) => item.section === section)
    const sectionDescription = sectionEntries.find((item) => item.sectionDescription.trim())?.sectionDescription.trim() ?? ''

    const sectionTitle = section
      ? sectionDescription
        ? `${sectionDescription} ${section}`
        : section
      : '（空大节）'

    const subSections: SidebarSubSection[] = []
    const subOrder = distinctInOrder(sectionEntries.map((item) => item.subSection))

    for (const subSection of subOrder) {
      const subEntries = sectionEntries.filter((item) => item.subSection === subSection)
      const title = subSection || '（空小节）'

      subSections.push({
        key: makeSubSectionKey(section, subSection),
        section,
        subSection,
        title,
        count: subEntries.length,
        entries: subEntries,
      })
    }

    sections.push({
      key: section,
      section,
      title: sectionTitle,
      count: sectionEntries.length,
      subSections,
    })
  }

  return sections
}

function findTargetEntry(allEntries: EntryItem[], target: SidebarTarget): EntryItem | undefined {
  if (target.type === 'all') {
    return allEntries[0]
  }

  if (target.type === 'entry') {
    return allEntries.find((item) => item.id === target.id)
  }

  if (target.type === 'section') {
    return allEntries.find((item) => item.section === target.section)
  }

  return allEntries.find(
    (item) => item.section === target.section && item.subSection === target.subSection,
  )
}

function getStringList(source: UnknownRecord, key: string): string[] {
  const raw = source[key]
  if (Array.isArray(raw)) {
    return raw
      .map((item) => sanitizeText(String(item ?? '')))
      .filter((item) => item.length > 0)
  }

  const text = sanitizeText(String(raw ?? ''))
  return text ? [text] : []
}

function getString(source: UnknownRecord, key: string): string | null {
  const value = source[key]
  if (value == null) {
    return null
  }

  const text = sanitizeText(String(value))
  return text ? text : null
}

function sanitizeText(source: string): string {
  return source.replace(/\r?\n/g, ' ').trim()
}

function toSingleLine(list: string[]): string {
  return list.join('；')
}

function distinctInOrder(list: string[]): string[] {
  const seen = new Set<string>()
  const output: string[] = []

  for (const item of list) {
    if (!seen.has(item)) {
      seen.add(item)
      output.push(item)
    }
  }

  return output
}

function toggleInSet(source: Set<string>, key: string): Set<string> {
  const next = new Set(source)
  if (next.has(key)) {
    next.delete(key)
  } else {
    next.add(key)
  }
  return next
}

function addToSet(source: Set<string>, key: string): Set<string> {
  if (source.has(key)) {
    return source
  }
  const next = new Set(source)
  next.add(key)
  return next
}

function makeSubSectionKey(section: string, subSection: string): string {
  return `${section}::${subSection}`
}

function toSidebarTargetId(target: SidebarTarget): string {
  if (target.type === 'all') {
    return 'all'
  }
  if (target.type === 'section') {
    return `section|${target.section ?? ''}`
  }
  if (target.type === 'subSection') {
    return `subSection|${target.section ?? ''}|${target.subSection ?? ''}`
  }
  return `entry|${target.id ?? ''}`
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

function isEditableElement(target: EventTarget | null): boolean {
  const element = target as HTMLElement | null
  if (!element) {
    return false
  }

  const tag = element.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
    return true
  }

  return Boolean(element.closest('[contenteditable="true"]'))
}

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function filterEntries(entries: EntryItem[], text: string): EntryItem[] {
  const keyword = text.trim().toLowerCase()
  if (!keyword) {
    return entries
  }

  return entries.filter((entry) => {
    return SEARCHABLE_FIELDS.some((fieldName) => {
      const value = entry[fieldName]
      if (Array.isArray(value)) {
        return value.join(' ').toLowerCase().includes(keyword)
      }
      return String(value).toLowerCase().includes(keyword)
    })
  })
}

export default App
