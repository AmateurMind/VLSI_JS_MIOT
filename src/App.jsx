import React, { useState, useMemo } from 'react';
import { EXPERIMENTS_DATA } from './data/experiments';
import {
  Code,
  Copy,
  Check,
  Search,
  Play,
  FileCode,
  Terminal,
  Cpu,
  Layers,
  ChevronRight,
  ExternalLink,
  PanelLeftClose,
  PanelLeftOpen,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('JS');
  const [selectedExpId, setSelectedExpId] = useState('js-exp1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('code'); // 'code' | 'preview'
  const [copiedFile, setCopiedFile] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Switch category
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchQuery('');
    const firstExp = EXPERIMENTS_DATA[category]?.[0];
    if (firstExp) {
      setSelectedExpId(firstExp.id);
      setActiveFileIndex(0);
      setActiveTab('code');
    }
  };

  // Filter experiments
  const currentExperiments = EXPERIMENTS_DATA[activeCategory] || [];
  const filteredExperiments = useMemo(() => {
    if (!searchQuery.trim()) return currentExperiments;
    const q = searchQuery.toLowerCase();
    return currentExperiments.filter(
      (exp) =>
        exp.title.toLowerCase().includes(q) ||
        exp.description.toLowerCase().includes(q) ||
        exp.category.toLowerCase().includes(q) ||
        exp.tags?.some((t) => t.toLowerCase().includes(q))
    );
  }, [currentExperiments, searchQuery]);

  const selectedExp = useMemo(() => {
    return (
      currentExperiments.find((e) => e.id === selectedExpId) ||
      currentExperiments[0] ||
      null
    );
  }, [currentExperiments, selectedExpId]);

  const currentFile = selectedExp?.codeFiles?.[activeFileIndex] || selectedExp?.codeFiles?.[0];

  const handleCopy = (codeText, identifier) => {
    navigator.clipboard.writeText(codeText).then(() => {
      setCopiedFile(identifier);
      setTimeout(() => setCopiedFile(null), 2000);
    });
  };

  // Live preview HTML content
  const previewHtml = useMemo(() => {
    if (!selectedExp || activeCategory !== 'JS') return '';
    // If it's a multi-file HTML + JS, combine them
    const htmlFile = selectedExp.codeFiles.find((f) => f.filename.endsWith('.html'));
    const jsFile = selectedExp.codeFiles.find((f) => f.filename.endsWith('.js'));
    if (!htmlFile) return '';
    let content = htmlFile.code;
    if (jsFile && content.includes('<script src="script.js"></script>')) {
      content = content.replace(
        '<script src="script.js"></script>',
        `<script>${jsFile.code}</script>`
      );
    }
    return content;
  }, [selectedExp, activeCategory]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--bg-primary)' }}>
      {/* Top Navigation Bar */}
      <header
        style={{
          height: '60px',
          borderBottom: '1px solid var(--border-color)',
          background: 'var(--bg-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          zIndex: 10,
          flexShrink: 0
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title="Toggle Sidebar"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)',
              padding: '6px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {sidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, #1f6feb, #388bfd)',
                color: '#fff',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}
            >
              <FileCode size={18} />
            </div>
            <div>
              <span style={{ fontWeight: 700, fontSize: '16px', color: '#fff' }}>Lab Hub</span>
              <span
                style={{
                  fontSize: '11px',
                  background: 'var(--bg-tertiary)',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  marginLeft: '8px',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  border: '1px solid var(--border-color)'
                }}
              >
                Ready to Copy
              </span>
            </div>
          </div>
        </div>

        {/* 3 Top-Right Options: JS / VLSI / MIOT */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-secondary)', marginRight: '6px', display: 'none' }}>
            Select Track:
          </span>
          {[
            { key: 'JS', label: 'JS', icon: Terminal, count: EXPERIMENTS_DATA.JS.length, color: '#e3b341' },
            { key: 'VLSI', label: 'VLSI', icon: Cpu, count: EXPERIMENTS_DATA.VLSI.length, color: '#f78166' },
            { key: 'MIOT', label: 'MIOT', icon: Layers, count: EXPERIMENTS_DATA.MIOT.length, color: '#56d364' }
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeCategory === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleCategoryChange(item.key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 16px',
                  borderRadius: '8px',
                  border: isActive ? `1px solid ${item.color}` : '1px solid var(--border-color)',
                  background: isActive ? 'var(--bg-tertiary)' : 'var(--bg-primary)',
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  fontSize: '13.5px',
                  transition: 'all 0.15s ease',
                  boxShadow: isActive ? `0 0 10px rgba(0,0,0,0.4)` : 'none'
                }}
              >
                <Icon size={16} color={isActive ? item.color : 'var(--text-secondary)'} />
                <span>{item.label}</span>
                <span
                  style={{
                    fontSize: '11px',
                    background: isActive ? item.color : 'var(--bg-secondary)',
                    color: isActive ? '#0d1117' : 'var(--text-secondary)',
                    padding: '1px 6px',
                    borderRadius: '10px',
                    fontWeight: 700
                  }}
                >
                  {item.count}
                </span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Body */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left Sidebar */}
        {sidebarOpen && (
          <aside
            style={{
              width: '320px',
              borderRight: '1px solid var(--border-color)',
              background: 'var(--bg-secondary)',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0
            }}
          >
            {/* Sidebar Search */}
            <div style={{ padding: '14px', borderBottom: '1px solid var(--border-color)' }}>
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Search
                  size={15}
                  style={{ position: 'absolute', left: '10px', color: 'var(--text-secondary)' }}
                />
                <input
                  type="text"
                  placeholder={`Search ${activeCategory} experiments...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    padding: '8px 10px 8px 34px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Sidebar List */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '10px 8px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: 'var(--text-muted)',
                  padding: '6px 8px 10px'
                }}
              >
                {activeCategory} Experiments ({filteredExperiments.length})
              </div>

              {filteredExperiments.length === 0 ? (
                <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '13px' }}>
                  No experiments match your search.
                </div>
              ) : (
                filteredExperiments.map((exp, idx) => {
                  const isSelected = selectedExp?.id === exp.id;
                  return (
                    <button
                      key={exp.id}
                      onClick={() => {
                        setSelectedExpId(exp.id);
                        setActiveFileIndex(0);
                        setActiveTab('code');
                      }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        padding: '10px 12px',
                        borderRadius: '6px',
                        border: isSelected ? '1px solid var(--accent)' : '1px solid transparent',
                        background: isSelected ? 'var(--accent-light)' : 'transparent',
                        color: isSelected ? '#fff' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        marginBottom: '4px',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '4px',
                          background: isSelected ? 'var(--accent)' : 'var(--bg-tertiary)',
                          color: isSelected ? '#fff' : 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '11px',
                          fontWeight: 700,
                          flexShrink: 0
                        }}
                      >
                        {idx + 1}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontWeight: isSelected ? 600 : 500,
                            fontSize: '13px',
                            color: isSelected ? '#fff' : 'var(--text-primary)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {exp.title}
                        </div>
                        <div
                          style={{
                            fontSize: '11px',
                            color: 'var(--text-muted)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            marginTop: '2px'
                          }}
                        >
                          {exp.file}
                        </div>
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Sidebar Footer */}
            <div
              style={{
                padding: '12px 14px',
                borderTop: '1px solid var(--border-color)',
                fontSize: '12px',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>Vercel-Ready React App</span>
              <span style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--success)' }} />
                Online
              </span>
            </div>
          </aside>
        )}

        {/* Main Content Area */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--bg-primary)' }}>
          {selectedExp ? (
            <>
              {/* Header Info Banner */}
              <div
                style={{
                  padding: '18px 24px',
                  borderBottom: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--accent)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontWeight: 600,
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      {selectedExp.category}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      📁 {selectedExp.file}
                    </span>
                  </div>
                  <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                    {selectedExp.title}
                  </h1>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '750px' }}>
                    {selectedExp.description}
                  </p>
                </div>

                {/* Primary Copy Button */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {activeCategory === 'JS' && (
                    <div style={{ display: 'flex', background: 'var(--bg-tertiary)', borderRadius: '6px', padding: '2px', border: '1px solid var(--border-color)' }}>
                      <button
                        onClick={() => setActiveTab('code')}
                        style={{
                          background: activeTab === 'code' ? 'var(--accent)' : 'transparent',
                          color: activeTab === 'code' ? '#fff' : 'var(--text-secondary)',
                          border: 'none',
                          padding: '6px 12px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <Code size={14} /> Code
                      </button>
                      <button
                        onClick={() => setActiveTab('preview')}
                        style={{
                          background: activeTab === 'preview' ? 'var(--accent)' : 'transparent',
                          color: activeTab === 'preview' ? '#fff' : 'var(--text-secondary)',
                          border: 'none',
                          padding: '6px 12px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <Play size={14} /> Live Run
                      </button>
                    </div>
                  )}

                  <button
                    onClick={() => handleCopy(currentFile?.code || '', 'all')}
                    style={{
                      background: copiedFile === 'all' ? 'var(--success)' : '#238636',
                      color: '#fff',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'background 0.2s ease'
                    }}
                  >
                    {copiedFile === 'all' ? <Check size={16} /> : <Copy size={16} />}
                    {copiedFile === 'all' ? 'Copied to Clipboard!' : 'Copy Code'}
                  </button>
                </div>
              </div>

              {/* File Tabs (if multi-file) */}
              {selectedExp.codeFiles.length > 1 && activeTab === 'code' && (
                <div
                  style={{
                    display: 'flex',
                    background: 'var(--bg-secondary)',
                    padding: '6px 20px 0',
                    borderBottom: '1px solid var(--border-color)',
                    gap: '4px'
                  }}
                >
                  {selectedExp.codeFiles.map((file, idx) => {
                    const isFileActive = activeFileIndex === idx;
                    return (
                      <button
                        key={file.filename}
                        onClick={() => setActiveFileIndex(idx)}
                        style={{
                          background: isFileActive ? 'var(--bg-primary)' : 'transparent',
                          border: '1px solid var(--border-color)',
                          borderBottom: isFileActive ? '1px solid var(--bg-primary)' : '1px solid var(--border-color)',
                          marginBottom: '-1px',
                          padding: '6px 14px',
                          borderTopLeftRadius: '6px',
                          borderTopRightRadius: '6px',
                          color: isFileActive ? '#fff' : 'var(--text-secondary)',
                          fontSize: '12.5px',
                          fontWeight: isFileActive ? 600 : 400,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <FileCode size={14} color={isFileActive ? 'var(--accent)' : 'var(--text-secondary)'} />
                        {file.filename}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* View Body: Code or Live Preview */}
              <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                {activeTab === 'code' ? (
                  <div style={{ height: '100%', overflowY: 'auto', display: 'flex' }}>
                    {/* Line numbers and Code */}
                    <div
                      style={{
                        padding: '16px 12px 16px 16px',
                        borderRight: '1px solid var(--border-color)',
                        userSelect: 'none',
                        textAlign: 'right',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13px',
                        lineHeight: '1.6',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {currentFile?.code.split('\n').map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>

                    <pre
                      style={{
                        flex: 1,
                        padding: '16px',
                        margin: 0,
                        overflowX: 'auto',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13.5px',
                        lineHeight: '1.6',
                        color: '#e6edf3'
                      }}
                    >
                      <code>{currentFile?.code}</code>
                    </pre>

                    {/* Quick Floating Copy button inside code pane */}
                    <div style={{ position: 'absolute', top: '12px', right: '16px' }}>
                      <button
                        onClick={() => handleCopy(currentFile?.code || '', currentFile?.filename)}
                        title="Copy this file"
                        style={{
                          background: 'rgba(33, 38, 45, 0.85)',
                          backdropFilter: 'blur(4px)',
                          border: '1px solid var(--border-color)',
                          color: copiedFile === currentFile?.filename ? 'var(--success)' : 'var(--text-primary)',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '12px'
                        }}
                      >
                        {copiedFile === currentFile?.filename ? <Check size={14} /> : <Copy size={14} />}
                        {copiedFile === currentFile?.filename ? 'Copied' : `Copy ${currentFile?.filename}`}
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Live Preview Tab */
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff' }}>
                    <div
                      style={{
                        padding: '6px 14px',
                        background: '#f6f8fa',
                        borderBottom: '1px solid #d0d7de',
                        fontSize: '12px',
                        color: '#57606a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>Interactive Sandbox Preview: {selectedExp.title}</span>
                      <button
                        onClick={() => {
                          const w = window.open('');
                          w.document.write(previewHtml);
                          w.document.close();
                        }}
                        style={{
                          background: '#fff',
                          border: '1px solid #d0d7de',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <ExternalLink size={12} /> Open in New Tab
                      </button>
                    </div>
                    <iframe
                      title="live-preview"
                      srcDoc={previewHtml}
                      sandbox="allow-scripts allow-modals allow-forms allow-same-origin"
                      style={{
                        flex: 1,
                        width: '100%',
                        border: 'none',
                        background: '#fff'
                      }}
                    />
                  </div>
                )}
              </div>
            </>
          ) : (
            <div style={{ padding: '60px', textAlign: 'center', color: 'var(--text-secondary)' }}>
              Select an experiment to view and copy code.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
