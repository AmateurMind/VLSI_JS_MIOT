import React, { useState } from 'react';
import { EXPERIMENTS_DATA } from './data/experiments';

export default function App() {
  const [category, setCategory] = useState('JS');
  const [selectedId, setSelectedId] = useState('js-exp1');
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const experiments = EXPERIMENTS_DATA[category] || [];
  const currentExp = experiments.find((e) => e.id === selectedId) || experiments[0];
  const currentFile = currentExp?.codeFiles?.[activeFileIndex] || currentExp?.codeFiles?.[0];

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    const first = EXPERIMENTS_DATA[cat]?.[0];
    if (first) {
      setSelectedId(first.id);
      setActiveFileIndex(0);
    }
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#f8fafc' }}>
      {/* Top Bar */}
      <header
        style={{
          height: '56px',
          background: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          flexShrink: 0
        }}
      >
        <div style={{ fontWeight: 700, fontSize: '18px', color: '#0f172a' }}>
          Lab Codes
        </div>

        {/* Top Right Options: JS / VLSI / MIOT */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {['JS', 'VLSI', 'MIOT'].map((cat) => {
            const isActive = category === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '6px',
                  border: isActive ? '1px solid #0f172a' : '1px solid #cbd5e1',
                  background: isActive ? '#0f172a' : '#ffffff',
                  color: isActive ? '#ffffff' : '#475569',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Content Area */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left Sidebar */}
        <aside
          style={{
            width: '280px',
            background: '#ffffff',
            borderRight: '1px solid #e2e8f0',
            overflowY: 'auto',
            padding: '12px'
          }}
        >
          <div
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#94a3b8',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              padding: '6px 8px 10px'
            }}
          >
            {category} List ({experiments.length})
          </div>

          {experiments.map((exp, idx) => {
            const isSelected = currentExp?.id === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => {
                  setSelectedId(exp.id);
                  setActiveFileIndex(0);
                  setCopied(false);
                }}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  border: 'none',
                  background: isSelected ? '#f1f5f9' : 'transparent',
                  color: isSelected ? '#0f172a' : '#475569',
                  fontWeight: isSelected ? 600 : 400,
                  fontSize: '13.5px',
                  cursor: 'pointer',
                  marginBottom: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span
                  style={{
                    color: isSelected ? '#0f172a' : '#94a3b8',
                    fontSize: '12px',
                    fontWeight: 600
                  }}
                >
                  {idx + 1}.
                </span>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {exp.title.replace(/^Exp \d+:\s*/, '')}
                </span>
              </button>
            );
          })}
        </aside>

        {/* Code View Area */}
        <main
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: '24px'
          }}
        >
          {currentExp ? (
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflow: 'hidden'
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  padding: '16px 20px',
                  borderBottom: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: '#fafafa'
                }}
              >
                <div>
                  <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a', marginBottom: '2px' }}>
                    {currentExp.title}
                  </h2>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>
                    File: {currentFile?.filename || currentExp.file}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {/* File Selector if multiple files */}
                  {currentExp.codeFiles.length > 1 && (
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {currentExp.codeFiles.map((f, idx) => (
                        <button
                          key={f.filename}
                          onClick={() => {
                            setActiveFileIndex(idx);
                            setCopied(false);
                          }}
                          style={{
                            padding: '4px 10px',
                            borderRadius: '4px',
                            border: '1px solid #cbd5e1',
                            background: activeFileIndex === idx ? '#0f172a' : '#ffffff',
                            color: activeFileIndex === idx ? '#ffffff' : '#475569',
                            fontSize: '12px',
                            cursor: 'pointer'
                          }}
                        >
                          {f.filename}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(currentFile?.code || '')}
                    style={{
                      background: copied ? '#15803d' : '#0f172a',
                      color: '#ffffff',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'background 0.15s ease'
                    }}
                  >
                    {copied ? '✓ Copied' : 'Copy Code'}
                  </button>
                </div>
              </div>

              {/* Code Block */}
              <div style={{ flex: 1, overflow: 'auto', padding: '20px', background: '#ffffff' }}>
                <pre style={{ margin: 0, color: '#1e293b' }}>
                  <code>{currentFile?.code}</code>
                </pre>
              </div>
            </div>
          ) : (
            <div style={{ color: '#64748b', fontSize: '14px' }}>Select an experiment from the left sidebar.</div>
          )}
        </main>
      </div>
    </div>
  );
}
