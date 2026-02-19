'use client'

import { useState, useCallback, useEffect } from 'react'

const PROGRESS_STEPS = { 1: 16, 2: 33, 3: 50, 4: 66, 5: 83, 6: 100 }

const CATEGORIES = [
  {
    key: 'beverages',
    icon: '🥤',
    name: 'Beverages',
    shelf: 30,
    color: '#DBEAFE',
  },
  {
    key: 'butter',
    icon: '🧈',
    name: 'Butter & Spreads',
    shelf: 21,
    color: '#FEF3C7',
  },
  {
    key: 'canned',
    icon: '🥫',
    name: 'Canned & Jarred',
    shelf: 365,
    color: '#E0E7FF',
  },
  { key: 'cheese', icon: '🧀', name: 'Cheese', shelf: 14, color: '#FEF9C3' },
  {
    key: 'chilled',
    icon: '❄️',
    name: 'Chilled Packaged',
    shelf: 14,
    color: '#CFFAFE',
  },
  {
    key: 'dairy',
    icon: '🥛',
    name: 'Dairy & Eggs',
    shelf: 7,
    color: '#FCE7F3',
  },
  {
    key: 'deli',
    icon: '🥩',
    name: 'Deli & Prepared Foods',
    shelf: 5,
    color: '#FEE2E2',
  },
  { key: 'dry', icon: '🫘', name: 'Dry Goods', shelf: 14, color: '#F3E8FF' },
  {
    key: 'bakery',
    icon: '🍞',
    name: 'Fresh Bakery',
    shelf: 3,
    color: '#FFEDD5',
  },
  {
    key: 'fish',
    icon: '🐟',
    name: 'Fresh Fish & Seafood',
    shelf: 3,
    color: '#CCFBF1',
  },
  {
    key: 'herbs',
    icon: '🌿',
    name: 'Fresh Herbs & Aromatics',
    shelf: 5,
    color: '#D1FAE5',
  },
  { key: 'meat', icon: '🥩', name: 'Fresh Meat', shelf: 5, color: '#FFE4E6' },
]

function shelfClass(days) {
  if (days <= 5) return 'shelf-urgent'
  if (days <= 14) return 'shelf-warning'
  if (days <= 30) return 'shelf-ok'
  return 'shelf-long'
}

function shelfLabel(days) {
  return days >= 365 ? `${Math.round(days / 365)} yr` : `${days} days`
}

/* ── Confetti ── */
function ConfettiOverlay({ active }) {
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    if (!active) return
    const colors = [
      '#2DB87A',
      '#34D399',
      '#6EE7B7',
      '#FCD34D',
      '#F59E0B',
      '#60A5FA',
      '#A78BFA',
    ]
    const newPieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      bg: colors[Math.floor(Math.random() * colors.length)],
      delay: `${Math.random() * 0.8}s`,
      duration: `${2 + Math.random() * 1.5}s`,
      w: 6 + Math.random() * 8,
      round: Math.random() > 0.5,
    }))
    setPieces(newPieces)
    const t = setTimeout(() => setPieces([]), 4000)
    return () => clearTimeout(t)
  }, [active])

  if (!pieces.length) return null

  return (
    <div className="confetti-container">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left,
            background: p.bg,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.w,
            height: p.w,
            borderRadius: p.round ? '50%' : '2px',
          }}
        />
      ))}
    </div>
  )
}

/* ══════════════════ MAIN PAGE ══════════════════ */
export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [prevStep, setPrevStep] = useState(1)
  const [method, setMethod] = useState('auto')
  const [trackScope, setTrackScope] = useState('all')
  const [allMode, setAllMode] = useState('auto')
  const [showConfetti, setShowConfetti] = useState(false)

  const goToStep = useCallback(
    (n) => {
      if (n === 2 && step === 1) {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 100)
      }
      setPrevStep(step)
      setStep(n)
    },
    [step],
  )

  const stepLabels = [
    'Connect',
    'Connected',
    'Method',
    'Scope',
    'Configure',
    'Review',
  ]

  return (
    <>
      <style
        jsx
        global
      >
        {styles}
      </style>

      <div className="onboarding-wrapper">
        <div className="bg-pattern" />

        {/* ── Top bar ── */}
        <header className="top-bar">
          <div className="logo">
            <div className="logo-mark">
              <svg
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle
                  cx="14"
                  cy="20"
                  r="10"
                  fill="#2DB87A"
                  opacity="0.7"
                />
                <circle
                  cx="26"
                  cy="20"
                  r="10"
                  fill="#34D399"
                  opacity="0.7"
                />
                <circle
                  cx="20"
                  cy="14"
                  r="10"
                  fill="#6EE7B7"
                  opacity="0.5"
                />
              </svg>
            </div>
            <span className="logo-text">lifo</span>
          </div>
          <div className="store-badge">
            <span className="dot" />
            Sean&apos;s Playground Store
          </div>
        </header>

        {/* ── Progress ── */}
        <div className="progress-container">
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${PROGRESS_STEPS[step]}%` }}
            />
          </div>
          <div className="step-indicator">Step {step} of 6</div>
        </div>

        {/* ═══ STEP 1: Connect ═══ */}
        {step === 1 && (
          <div
            className="step-content step active"
            key="step1"
          >
            <h1 className="step-heading">
              Connect your
              <br />
              Square account
            </h1>
            <p className="step-subheading">
              Link your catalog so Lifo can add batch-level expiry tracking on
              top of your existing products.
            </p>

            <div
              className="connect-card"
              onClick={() => goToStep(2)}
              role="button"
              tabIndex={0}
            >
              <div className="connect-icon">
                <svg viewBox="0 0 24 24">
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="3"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="connect-info">
                <h3>Square</h3>
                <p>
                  Connect to sync products, categories, and sales data in real
                  time
                </p>
              </div>
              <svg
                className="connect-arrow"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}

        {/* ═══ STEP 2: Connected ═══ */}
        {step === 2 && (
          <div
            className="step-content step active"
            key="step2"
          >
            <div className="success-badge">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h1 className="step-heading">You&apos;re connected!</h1>
            <p className="step-subheading">
              We found your stores. Lifo adds expiry tracking on top of your
              existing Square catalog — nothing changes on your POS.
            </p>

            <div className="stores-grid">
              <div className="store-card active">
                <h4>LIFO App Number 2</h4>
                <div className="store-meta">
                  <span>📦 1 product</span>
                  <span>🏷 1 category</span>
                </div>
              </div>
              <div className="store-card">
                <h4>LIFO App</h4>
                <div className="store-meta">
                  <span>📦 0 products</span>
                  <span>🏷 0 categories</span>
                </div>
              </div>
            </div>

            <div
              className="btn-row"
              style={{ maxWidth: 480 }}
            >
              <button
                className="btn-back"
                onClick={() => goToStep(1)}
              >
                Back
              </button>
              <button
                className="btn-continue"
                onClick={() => goToStep(3)}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* ═══ STEP 3: Tracking Method ═══ */}
        {step === 3 && (
          <div
            className="step-content step active"
            key="step3"
          >
            <h1 className="step-heading">
              How should we
              <br />
              track expiry dates?
            </h1>
            <p className="step-subheading">
              Choose your default method. You can always change this
              per-category later.
            </p>
            <a
              href="#"
              className="skip-link"
            >
              Skip and configure later →
            </a>

            <div className="method-cards">
              <div
                className={`method-card ${method === 'auto' ? 'selected' : ''}`}
                onClick={() => setMethod('auto')}
                role="button"
                tabIndex={0}
              >
                <div className="method-header">
                  <div className="method-icon auto">⚡</div>
                  <h3>Auto-track</h3>
                </div>
                <p>
                  We calculate expiry dates from the delivery date + shelf life
                  you set. Nothing to enter on delivery.
                </p>
                <div className="method-preview">
                  Beverages → 30d from delivery ✓
                  <br />
                  Butter &amp; Spreads → 21d from delivery ✓
                </div>
              </div>

              <div
                className={`method-card ${method === 'manual' ? 'selected' : ''}`}
                onClick={() => setMethod('manual')}
                role="button"
                tabIndex={0}
              >
                <div className="method-header">
                  <div className="method-icon manual">✏️</div>
                  <h3>Manual entry</h3>
                </div>
                <p>
                  You&apos;ll enter the expiry date when each delivery arrives.
                  Best for products with variable shelf life.
                </p>
              </div>
            </div>

            <div
              className="btn-row"
              style={{ maxWidth: 520 }}
            >
              <button
                className="btn-back"
                onClick={() => goToStep(2)}
              >
                Back
              </button>
              <button
                className="btn-continue"
                onClick={() => goToStep(4)}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* ═══ STEP 4: What to Track ═══ */}
        {step === 4 && (
          <div
            className="step-content step active"
            key="step4"
          >
            <h1 className="step-heading">
              What would you
              <br />
              like to track?
            </h1>
            <p className="step-subheading">
              Choose which products appear in your expiry dashboard.
            </p>

            <div className="track-options">
              <div
                className={`track-option ${trackScope === 'all' ? 'selected' : ''}`}
                onClick={() => setTrackScope('all')}
                role="button"
                tabIndex={0}
              >
                <div className="track-check">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div className="track-info">
                  <h3>Track everything</h3>
                  <p>All 35 products across all categories</p>
                </div>
              </div>

              <div
                className={`track-option ${trackScope === 'manual' ? 'selected' : ''}`}
                onClick={() => setTrackScope('manual')}
                role="button"
                tabIndex={0}
              >
                <div className="track-check">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div className="track-info">
                  <h3>Choose categories manually</h3>
                  <p>Select which categories to track</p>
                </div>
              </div>
            </div>

            <p className="product-count">35 of 35 products</p>

            <div
              className="btn-row"
              style={{ maxWidth: 520 }}
            >
              <button
                className="btn-back"
                onClick={() => goToStep(3)}
              >
                Back
              </button>
              <button
                className="btn-continue"
                onClick={() => goToStep(5)}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* ═══ STEP 5: Configure Categories ═══ */}
        {step === 5 && (
          <div
            className="step-content step active wide"
            key="step5"
          >
            <h1 className="step-heading">
              Set shelf life
              <br />
              by category
            </h1>
            <p className="step-subheading">
              Configure how Lifo monitors and manages product batches.
            </p>

            <div className="set-all-row">
              Set all to:
              <button
                className={`set-all-btn ${allMode === 'auto' ? 'active' : ''}`}
                onClick={() => setAllMode('auto')}
              >
                ⚡ Auto-track
              </button>
              <button
                className={`set-all-btn ${allMode === 'manual' ? 'active' : ''}`}
                onClick={() => setAllMode('manual')}
              >
                ✏️ Manual
              </button>
            </div>

            <div className="category-list">
              {CATEGORIES.map((cat) => (
                <div
                  className="category-row"
                  key={cat.key}
                >
                  <div
                    className={`cat-icon ${cat.key}`}
                    style={{ background: cat.color }}
                  >
                    {cat.icon}
                  </div>
                  <span className="cat-name">{cat.name}</span>
                  <span className={`cat-badge ${allMode}`}>
                    {allMode === 'auto' ? '⚡ Auto' : '✏️ Manual'}
                  </span>
                  <span className={`cat-shelf ${shelfClass(cat.shelf)}`}>
                    {shelfLabel(cat.shelf)}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="btn-row"
              style={{ maxWidth: 700 }}
            >
              <button
                className="btn-back"
                onClick={() => goToStep(4)}
              >
                Back
              </button>
              <button
                className="btn-continue"
                onClick={() => goToStep(6)}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* ═══ STEP 6: Review ═══ */}
        {step === 6 && (
          <div
            className="step-content step active wide"
            key="step6"
          >
            <h1 className="step-heading">Review &amp; go live</h1>
            <p className="step-subheading">
              Everything looks good? You can always change these in Settings.
            </p>

            <div className="review-section">
              <div className="review-section-header">
                <h3>
                  {allMode === 'auto' ? '⚡ Auto-track' : '✏️ Manual'}{' '}
                  <span className="count">{CATEGORIES.length} categories</span>
                </h3>
                <button
                  className="review-change"
                  onClick={() => goToStep(5)}
                >
                  Change
                </button>
              </div>
              <div className="review-grid">
                {CATEGORIES.map((cat) => (
                  <div
                    className="review-chip"
                    key={cat.key}
                  >
                    <span
                      className="chip-icon"
                      style={{ background: cat.color }}
                    >
                      {cat.icon}
                    </span>
                    {cat.name.split(' ')[0]}
                    <span className="chip-shelf">
                      {cat.shelf >= 365 ? '365d' : `${cat.shelf}d`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-note">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              <span>
                When you turn on tracking, Lifo will start monitoring your
                Square sales and creating batches based on these rules. Your POS
                is unaffected.
              </span>
            </div>

            <div
              className="btn-row"
              style={{ maxWidth: 700, marginTop: 28 }}
            >
              <button
                className="btn-back"
                onClick={() => goToStep(5)}
              >
                Back
              </button>
              <button className="btn-final">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                Turn on expiry tracking
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Demo nav ── */}
      <nav className="screen-nav">
        {stepLabels.map((label, i) => (
          <button
            key={label}
            className={`screen-tab ${step === i + 1 ? 'active' : ''}`}
            onClick={() => goToStep(i + 1)}
          >
            {i + 1}. {label}
          </button>
        ))}
      </nav>

      <ConfettiOverlay active={showConfetti} />
    </>
  )
}

/* ══════════════════ STYLES ══════════════════ */
const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400&display=swap');

:root {
  --lifo-green: #2DB87A;
  --lifo-green-light: #E8F8F0;
  --lifo-green-dark: #1A8F5C;
  --lifo-emerald: #34D399;
  --surface: #FAFBFC;
  --surface-warm: #F8F7F4;
  --text-primary: #1A1D23;
  --text-secondary: #6B7280;
  --text-muted: #9CA3AF;
  --border: #E5E7EB;
  --border-light: #F0F1F3;
  --white: #FFFFFF;
  --amber: #F59E0B;
  --amber-light: #FEF3C7;
  --red: #EF4444;
  --red-light: #FEE2E2;
  --blue: #3B82F6;
  --blue-light: #DBEAFE;
  --purple: #8B5CF6;
  --purple-light: #EDE9FE;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.06);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.08);
  --shadow-xl: 0 24px 60px rgba(0,0,0,0.1);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--white);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
}

.onboarding-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  position: relative;
  z-index: 10;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-mark {
  width: 36px;
  height: 36px;
}

.logo-mark svg { width: 100%; height: 100%; }

.logo-text {
  font-family: 'Fraunces', serif;
  font-weight: 700;
  font-size: 22px;
  color: var(--text-primary);
  letter-spacing: -0.5px;
}

.store-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--surface);
  border-radius: 100px;
  font-size: 13px;
  color: var(--text-secondary);
  border: 1px solid var(--border-light);
}

.store-badge .dot {
  width: 8px;
  height: 8px;
  background: var(--lifo-green);
  border-radius: 50%;
}

.progress-container { padding: 0 40px; margin-bottom: 8px; }

.progress-track {
  height: 3px;
  background: var(--border-light);
  border-radius: 10px;
  overflow: hidden;
  max-width: 480px;
  margin: 0 auto;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--lifo-green), var(--lifo-emerald));
  border-radius: 10px;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.step-indicator {
  text-align: center;
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 500;
}

.step-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 40px 60px;
  max-width: 680px;
  margin: 0 auto;
  width: 100%;
}

.step-content.wide { max-width: 780px; }

.step-heading {
  font-family: 'Fraunces', serif;
  font-size: 42px;
  font-weight: 700;
  line-height: 1.15;
  text-align: center;
  margin-bottom: 12px;
  letter-spacing: -1px;
  color: var(--text-primary);
}

.step-subheading {
  font-size: 16px;
  color: var(--text-secondary);
  text-align: center;
  line-height: 1.6;
  max-width: 440px;
  margin-bottom: 40px;
}

/* Connect card */
.connect-card {
  width: 100%;
  max-width: 480px;
  border: 1.5px solid var(--border);
  border-radius: 16px;
  padding: 28px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  background: var(--white);
}

.connect-card:hover {
  border-color: var(--lifo-green);
  box-shadow: 0 0 0 3px rgba(45,184,122,0.1), var(--shadow-md);
  transform: translateY(-1px);
}

.connect-icon {
  width: 52px;
  height: 52px;
  background: #000;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.connect-icon svg { width: 28px; height: 28px; fill: white; }

.connect-info { flex: 1; }
.connect-info h3 { font-size: 16px; font-weight: 600; margin-bottom: 4px; }
.connect-info p { font-size: 14px; color: var(--text-secondary); line-height: 1.4; }

.connect-arrow { color: var(--text-muted); transition: transform 0.2s ease; }
.connect-card:hover .connect-arrow { transform: translateX(3px); color: var(--lifo-green); }

/* Success badge */
.success-badge {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--lifo-green-light), #D1FAE5);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  animation: successPop 0.5s cubic-bezier(0.175,0.885,0.32,1.275) forwards;
}

@keyframes successPop {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.success-badge svg { width: 36px; height: 36px; color: var(--lifo-green); }

.stores-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%;
  max-width: 480px;
  margin-top: 8px;
  margin-bottom: 32px;
}

.store-card {
  border: 1.5px solid var(--border);
  border-radius: 14px;
  padding: 20px;
  text-align: center;
  transition: all 0.2s ease;
}

.store-card.active { border-color: var(--lifo-green); background: var(--lifo-green-light); }
.store-card h4 { font-size: 14px; font-weight: 600; margin-bottom: 8px; }

.store-meta {
  display: flex;
  gap: 12px;
  justify-content: center;
  font-size: 12px;
  color: var(--text-secondary);
}

.store-meta span { display: flex; align-items: center; gap: 4px; }

/* Method cards */
.method-cards { display: flex; flex-direction: column; gap: 14px; width: 100%; max-width: 520px; }

.method-card {
  border: 1.5px solid var(--border);
  border-radius: 16px;
  padding: 24px 28px;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
}

.method-card:hover { border-color: var(--text-muted); }

.method-card.selected { border-color: var(--lifo-green); background: var(--lifo-green-light); }

.method-card.selected::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 4px;
  background: var(--lifo-green);
  border-radius: 0 4px 4px 0;
}

.method-header { display: flex; align-items: center; gap: 14px; margin-bottom: 8px; }

.method-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.method-icon.auto { background: linear-gradient(135deg, #D1FAE5, #A7F3D0); }
.method-icon.manual { background: linear-gradient(135deg, var(--blue-light), #BFDBFE); }
.method-header h3 { font-size: 16px; font-weight: 600; }
.method-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.5; margin-left: 54px; }

.method-preview {
  margin-top: 14px;
  margin-left: 54px;
  padding: 12px 16px;
  background: rgba(0,0,0,0.03);
  border-radius: 8px;
  font-size: 13px;
  color: var(--text-secondary);
  font-family: 'DM Sans', monospace;
  line-height: 1.7;
}

/* Track options */
.track-options { display: flex; flex-direction: column; gap: 14px; width: 100%; max-width: 520px; margin-bottom: 16px; }

.track-option {
  border: 1.5px solid var(--border);
  border-radius: 16px;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.track-option:hover { border-color: var(--text-muted); }
.track-option.selected { border-color: var(--lifo-green); background: var(--lifo-green-light); }

.track-check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.track-option.selected .track-check { background: var(--lifo-green); border-color: var(--lifo-green); }
.track-option.selected .track-check svg { display: block; }
.track-check svg { display: none; width: 14px; height: 14px; color: white; }
.track-info h3 { font-size: 16px; font-weight: 600; margin-bottom: 3px; }
.track-info p { font-size: 14px; color: var(--text-secondary); }
.product-count { font-size: 13px; color: var(--text-muted); text-align: center; margin-top: 4px; font-weight: 500; }

/* Set-all row */
.set-all-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 20px;
  justify-content: center;
}

.set-all-btn {
  padding: 5px 14px;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: var(--white);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  color: var(--text-secondary);
}

.set-all-btn:hover { border-color: var(--lifo-green); color: var(--lifo-green); }
.set-all-btn.active { background: var(--lifo-green); border-color: var(--lifo-green); color: white; }

/* Category list */
.category-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 4px;
}

.category-row {
  display: grid;
  grid-template-columns: 40px 1fr auto auto;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  border-radius: 12px;
  transition: background 0.15s ease;
}

.category-row:hover { background: var(--surface); }

.cat-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.cat-name { font-size: 14px; font-weight: 500; }

.cat-badge {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
}

.cat-badge.auto { background: var(--lifo-green-light); color: var(--lifo-green-dark); }
.cat-badge.manual { background: var(--blue-light); color: var(--blue); }

.cat-shelf {
  font-size: 13px;
  color: var(--text-secondary);
  min-width: 70px;
  text-align: right;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}

.shelf-urgent { color: var(--red); }
.shelf-warning { color: var(--amber); }
.shelf-ok { color: var(--lifo-green); }
.shelf-long { color: var(--text-muted); }

/* Review */
.review-section { width: 100%; margin-bottom: 20px; }

.review-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.review-section-header h3 {
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.review-section-header h3 .count {
  background: var(--surface);
  padding: 2px 9px;
  border-radius: 100px;
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 500;
}

.review-change {
  font-size: 13px;
  color: var(--lifo-green);
  cursor: pointer;
  font-weight: 500;
  border: none;
  background: none;
  font-family: inherit;
}

.review-change:hover { text-decoration: underline; }

.review-grid { display: flex; flex-wrap: wrap; gap: 8px; }

.review-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: var(--surface);
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
}

.review-chip .chip-icon {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.review-chip .chip-shelf { color: var(--text-muted); font-weight: 400; margin-left: 2px; }

/* Buttons */
.btn-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 520px;
  margin-top: 32px;
}

.btn-back {
  padding: 12px 28px;
  border-radius: 12px;
  border: 1.5px solid var(--border);
  background: var(--white);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  color: var(--text-secondary);
}

.btn-back:hover { border-color: var(--text-muted); color: var(--text-primary); }

.btn-continue {
  padding: 12px 32px;
  border-radius: 12px;
  border: none;
  background: var(--lifo-green);
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: inherit;
  box-shadow: 0 2px 8px rgba(45,184,122,0.3);
}

.btn-continue:hover {
  background: var(--lifo-green-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(45,184,122,0.35);
}

.btn-final {
  padding: 14px 36px;
  border-radius: 14px;
  border: none;
  background: linear-gradient(135deg, var(--lifo-green), var(--lifo-emerald));
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: inherit;
  box-shadow: 0 4px 20px rgba(45,184,122,0.3);
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-final:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(45,184,122,0.35);
}

/* Screen nav */
.screen-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--white);
  border-top: 1px solid var(--border-light);
  display: flex;
  justify-content: center;
  gap: 4px;
  padding: 12px 20px;
  z-index: 100;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.04);
}

.screen-tab {
  padding: 8px 18px;
  border-radius: 8px;
  border: none;
  background: none;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  color: var(--text-muted);
  transition: all 0.2s ease;
  font-family: inherit;
}

.screen-tab:hover { background: var(--surface); color: var(--text-secondary); }
.screen-tab.active { background: var(--lifo-green-light); color: var(--lifo-green-dark); }

/* Skip link */
.skip-link {
  font-size: 13px;
  color: var(--text-muted);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 32px;
  transition: color 0.2s ease;
}

.skip-link:hover { color: var(--text-secondary); }

/* Info note */
.info-note {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 18px;
  background: var(--surface);
  border-radius: 12px;
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
  max-width: 520px;
  width: 100%;
  margin-top: 20px;
}

.info-note svg { flex-shrink: 0; margin-top: 1px; color: var(--lifo-green); }

/* Confetti */
.confetti-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
}

.confetti-piece {
  position: absolute;
  border-radius: 2px;
  animation: confettiFall 2.5s ease-out forwards;
  opacity: 0;
}

@keyframes confettiFall {
  0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}

/* Background */
.bg-pattern {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.35;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(45,184,122,0.06) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(52,211,153,0.05) 0%, transparent 50%);
}

.onboarding-wrapper > *:not(.bg-pattern) { position: relative; z-index: 1; }

/* Scrollbar */
.category-list::-webkit-scrollbar { width: 4px; }
.category-list::-webkit-scrollbar-track { background: transparent; }
.category-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 10px; }

/* Fade animation */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.step.active { animation: fadeUp 0.4s ease forwards; }
`
