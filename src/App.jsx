import React, { useState } from 'react';
import { EXPERIMENTS_DATA } from './data/experiments';

export default function App() {
  const [category, setCategory] = useState('JS');
  const [selectedId, setSelectedId] = useState('js-exp1');
  const [copiedKey, setCopiedKey] = useState(null);

  const experiments = EXPERIMENTS_DATA[category] || [];
  const currentExp = experiments.find((e) => e.id === selectedId) || experiments[0];

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    const first = EXPERIMENTS_DATA[cat]?.[0];
    if (first) {
      setSelectedId(first.id);
    }
  };

  const handleCopy = (code, key) => {
    navigator.clipboard.writeText(code);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const isMultiColumn = currentExp?.codeFiles && currentExp.codeFiles.length > 1;

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
      <div style={{ display: 'flex', flex: 1, minHeight: 0, minWidth: 0 }}>
        {/* Left Sidebar */}
        <aside
          style={{
            width: '280px',
            flexShrink: 0,
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

          {experiments.map((exp) => {
            const isSelected = currentExp?.id === exp.id;
            const match = exp.title.match(/^(Exp\s*\d+):\s*(.*)$/i);
            const expLabel = match ? match[1] : '';
            const expName = match ? match[2] : exp.title;

            return (
              <button
                key={exp.id}
                onClick={() => setSelectedId(exp.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  border: 'none',
                  background: isSelected ? '#f1f5f9' : 'transparent',
                  color: exp.isSkipped ? '#94a3b8' : (isSelected ? '#0f172a' : '#475569'),
                  fontWeight: isSelected ? 600 : 400,
                  fontSize: '13.5px',
                  cursor: 'pointer',
                  marginBottom: '2px',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '8px'
                }}
              >
                <span
                  style={{
                    color: isSelected ? '#0f172a' : '#64748b',
                    fontSize: '12px',
                    fontWeight: 600,
                    minWidth: '44px',
                    flexShrink: 0
                  }}
                >
                  {expLabel || '•'}
                </span>
                <span
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    fontStyle: exp.isSkipped ? 'italic' : 'normal'
                  }}
                >
                  {expName}
                </span>
              </button>
            );
          })}
        </aside>

        {/* Code View Area */}
        <main
          style={{
            flex: 1,
            minHeight: 0,
            minWidth: 0,
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {currentExp ? (
            <>
              {/* Experiment Title */}
              <div>
                <h1 style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', margin: 0 }}>
                  {currentExp.title}
                </h1>
                <p style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
                  {currentExp.description}
                </p>
              </div>

              {/* If Exp is skipped / not there (e.g. Exp 7) */}
              {currentExp.isSkipped ? (
                <div
                  style={{
                    background: '#ffffff',
                    border: '1px dashed #cbd5e1',
                    borderRadius: '8px',
                    padding: '36px 24px',
                    textAlign: 'center',
                    color: '#64748b'
                  }}
                >
                  <p style={{ fontSize: '15px', fontWeight: 500, color: '#334155' }}>
                    Experiment 7 is not there / not available in the project files.
                  </p>
                  <p style={{ fontSize: '13px', marginTop: '8px' }}>
                    Select <strong>Exp 8 (Set Operations)</strong> from the sidebar to continue.
                  </p>
                </div>
              ) : (
                /* Files Layout: 2 Columns for multi-file (Exp 10), 1 Column for single file */
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMultiColumn ? '1fr 1fr' : '1fr',
                    gap: '16px',
                    alignItems: 'start'
                  }}
                >
                  {currentExp.codeFiles.map((file) => {
                    const copyKey = `${currentExp.id}-${file.filename}`;
                    const isCopied = copiedKey === copyKey;

                    return (
                      <div
                        key={file.filename}
                        style={{
                          background: '#ffffff',
                          border: '1px solid #e2e8f0',
                          borderRadius: '8px',
                          display: 'flex',
                          flexDirection: 'column',
                          overflow: 'hidden',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
                        }}
                      >
                        {/* Top Header with Copy Button prominently at top right */}
                        <div
                          style={{
                            padding: '12px 16px',
                            borderBottom: '1px solid #e2e8f0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            background: '#fafafa'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontWeight: 600, fontSize: '14px', color: '#0f172a' }}>
                              {file.filename}
                            </span>
                            <span
                              style={{
                                fontSize: '11px',
                                background: '#e2e8f0',
                                color: '#475569',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                textTransform: 'uppercase',
                                fontWeight: 600
                              }}
                            >
                              {file.language}
                            </span>
                          </div>

                          {/* Top Copy Button */}
                          <button
                            onClick={() => handleCopy(file.code, copyKey)}
                            style={{
                              background: isCopied ? '#15803d' : '#0f172a',
                              color: '#ffffff',
                              border: 'none',
                              padding: '6px 14px',
                              borderRadius: '5px',
                              fontSize: '12.5px',
                              fontWeight: 500,
                              cursor: 'pointer',
                              transition: 'background 0.15s ease',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            {isCopied ? '✓ Copied' : `Copy ${file.filename}`}
                          </button>
                        </div>

                        {/* Code Content */}
                        <div
                          style={{
                            padding: '16px',
                            background: '#ffffff',
                            overflowX: 'auto',
                            maxHeight: isMultiColumn ? '70vh' : 'none',
                            overflowY: isMultiColumn ? 'auto' : 'visible'
                          }}
                        >
                          <pre style={{ margin: 0, color: '#1e293b' }}>
                            <code>{file.code}</code>
                          </pre>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          ) : (
            <div style={{ color: '#64748b', fontSize: '14px' }}>Select an experiment from the left sidebar.</div>
          )}
        </main>
      </div>
    </div>
  );
}
