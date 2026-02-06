'use client'

import { useState } from 'react'

// ——— Inline SVG Icons ———————————————————————————————
const I = {
  check: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  chevronDown: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  chevronLeft: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),
  plus: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line
        x1="12"
        y1="5"
        x2="12"
        y2="19"
      />
      <line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
      />
    </svg>
  ),
  x: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line
        x1="18"
        y1="6"
        x2="6"
        y2="18"
      />
      <line
        x1="6"
        y1="6"
        x2="18"
        y2="18"
      />
    </svg>
  ),
  search: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        cx="11"
        cy="11"
        r="8"
      />
      <line
        x1="21"
        y1="21"
        x2="16.65"
        y2="16.65"
      />
    </svg>
  ),
  layers: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  calendar: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        ry="2"
      />
      <line
        x1="16"
        y1="2"
        x2="16"
        y2="6"
      />
      <line
        x1="8"
        y1="2"
        x2="8"
        y2="6"
      />
      <line
        x1="3"
        y1="10"
        x2="21"
        y2="10"
      />
    </svg>
  ),
  bell: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  grid: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="3"
        y="3"
        width="7"
        height="7"
      />
      <rect
        x="14"
        y="3"
        width="7"
        height="7"
      />
      <rect
        x="14"
        y="14"
        width="7"
        height="7"
      />
      <rect
        x="3"
        y="14"
        width="7"
        height="7"
      />
    </svg>
  ),
  trash: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  info: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
      />
      <line
        x1="12"
        y1="16"
        x2="12"
        y2="12"
      />
      <line
        x1="12"
        y1="8"
        x2="12.01"
        y2="8"
      />
    </svg>
  ),
  arrowUp: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line
        x1="12"
        y1="19"
        x2="12"
        y2="5"
      />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  ),
  arrowDown: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line
        x1="12"
        y1="5"
        x2="12"
        y2="19"
      />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  ),
  undo: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
    </svg>
  ),
  alertTriangle: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line
        x1="12"
        y1="9"
        x2="12"
        y2="13"
      />
      <line
        x1="12"
        y1="17"
        x2="12.01"
        y2="17"
      />
    </svg>
  ),
  shield: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
}

// ——— Mock Data ———————————————————————————————————————

const CATEGORIES = [
  { id: 'dairy', name: 'Dairy & Eggs', count: 24 },
  { id: 'bakery', name: 'Bakery', count: 18 },
  { id: 'produce', name: 'Fresh Produce', count: 31 },
  { id: 'meat', name: 'Meat & Seafood', count: 15 },
  { id: 'beverages', name: 'Beverages', count: 22 },
  { id: 'snacks', name: 'Snacks & Confectionery', count: 19 },
  { id: 'canned', name: 'Canned Goods', count: 12 },
  { id: 'frozen', name: 'Frozen Foods', count: 8 },
]

const PRODUCTS = [
  {
    id: 1,
    name: 'Organic Whole Milk 1L',
    category: 'Dairy & Eggs',
    barcode: '8710400000112',
  },
  {
    id: 2,
    name: 'Free Range Eggs 12pk',
    category: 'Dairy & Eggs',
    barcode: '8710400000129',
  },
  {
    id: 3,
    name: 'Sourdough Bread 400g',
    category: 'Bakery',
    barcode: '8710400000136',
  },
  {
    id: 4,
    name: 'Greek Yogurt 500g',
    category: 'Dairy & Eggs',
    barcode: '8710400000143',
  },
  {
    id: 5,
    name: 'Fresh Orange Juice 1L',
    category: 'Beverages',
    barcode: '8710400000150',
  },
  {
    id: 6,
    name: 'Sliced Ham 200g',
    category: 'Meat & Seafood',
    barcode: '8710400000167',
  },
  {
    id: 7,
    name: 'Croissants 4pk',
    category: 'Bakery',
    barcode: '8710400000174',
  },
  {
    id: 8,
    name: 'Butter Unsalted 250g',
    category: 'Dairy & Eggs',
    barcode: '8710400000181',
  },
]

const CATEGORY_SHELF_DEFAULTS = [
  { id: 'dairy', name: 'Dairy & Eggs', days: 7 },
  { id: 'bakery', name: 'Bakery', days: 3 },
  { id: 'produce', name: 'Fresh Produce', days: 5 },
  { id: 'meat', name: 'Meat & Seafood', days: 4 },
  { id: 'beverages', name: 'Beverages', days: 14 },
  { id: 'snacks', name: 'Snacks & Confectionery', days: 30 },
  { id: 'canned', name: 'Canned Goods', days: 365 },
  { id: 'frozen', name: 'Frozen Foods', days: 90 },
]

// ——— Shared UI Primitives ————————————————————————————

function Toggle({ enabled, onChange, size = 'default' }) {
  const w = size === 'small' ? 32 : 40
  const h = size === 'small' ? 18 : 22
  const dot = size === 'small' ? 14 : 18
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        onChange()
      }}
      className={`relative rounded-full transition-colors duration-200 shrink-0 ${
        enabled ? 'bg-gray-900' : 'bg-gray-200'
      }`}
      style={{ width: w, height: h }}
    >
      <div
        className="absolute bg-white rounded-full shadow-sm transition-transform duration-200"
        style={{
          width: dot,
          height: dot,
          top: 2,
          transform: enabled
            ? `translateX(${w - dot - 2}px)`
            : 'translateX(2px)',
        }}
      />
    </button>
  )
}

function RadioDot({ selected }) {
  return (
    <div
      className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
        selected ? 'border-gray-900' : 'border-gray-300'
      }`}
    >
      {selected && <div className="w-2 h-2 rounded-full bg-gray-900" />}
    </div>
  )
}

function Checkbox({ checked, onChange }) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        onChange()
      }}
      className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
        checked
          ? 'bg-gray-900 border-gray-900'
          : 'border-gray-300 hover:border-gray-400'
      }`}
    >
      {checked && I.check('w-2.5 h-2.5 text-white')}
    </div>
  )
}

// ——— Sticky Save Footer ——————————————————————————————

function StickySaveFooter({ isDirty, onSave, onDiscard }) {
  if (!isDirty) return null
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] z-30">
      <div className="px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-900 animate-pulse" />
          <span className="text-sm text-gray-500">Unsaved changes</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onDiscard}
            className="text-sm px-3 py-1.5 text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1.5"
          >
            {I.undo('w-3 h-3')}
            Discard
          </button>
          <button
            onClick={onSave}
            className="text-sm font-semibold px-4 py-1.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// LEFT SIDEBAR NAV
// ═══════════════════════════════════════════════════════

function SidebarNav({ activeSection, onSelect, summaries }) {
  const sections = [
    { id: 'overview', icon: 'grid', label: 'Overview', summary: null },
    {
      id: 'tracking',
      icon: 'layers',
      label: 'What to Track',
      summary: summaries.tracking,
    },
    {
      id: 'automation',
      icon: 'calendar',
      label: 'Batch Automation',
      summary: summaries.automation,
    },
    {
      id: 'notifications',
      icon: 'bell',
      label: 'Notifications',
      summary: summaries.notifications,
      badge: 'Soon',
      disabled: true,
    },
  ]

  return (
    <nav className="space-y-1">
      {sections.map((s) => {
        const isActive = activeSection === s.id
        return (
          <button
            key={s.id}
            onClick={() => !s.disabled && onSelect(s.id)}
            disabled={s.disabled}
            className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-3 transition-all duration-150 group ${
              isActive
                ? 'bg-gray-900 text-white shadow-sm'
                : s.disabled
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <div
              className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                isActive
                  ? 'bg-white/15'
                  : s.disabled
                    ? 'bg-gray-50'
                    : 'bg-gray-100 group-hover:bg-gray-200/70'
              }`}
            >
              {I[s.icon](
                `w-3.5 h-3.5 ${isActive ? 'text-white' : s.disabled ? 'text-gray-300' : 'text-gray-500'}`,
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm font-medium truncate ${isActive ? 'text-white' : ''}`}
                >
                  {s.label}
                </span>
                {s.badge && (
                  <span
                    className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white/80'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {s.badge}
                  </span>
                )}
              </div>
              {s.summary && (
                <span
                  className={`text-xs truncate block mt-0.5 ${
                    isActive ? 'text-white/60' : 'text-gray-400'
                  }`}
                >
                  {s.summary}
                </span>
              )}
            </div>
          </button>
        )
      })}
    </nav>
  )
}

// ═══════════════════════════════════════════════════════
// OVERVIEW PANEL
// ═══════════════════════════════════════════════════════

function OverviewPanel({
  onNavigate,
  trackingScope,
  automationMode,
  categories,
  selectedCategories,
  selectedProducts,
  automationCategories,
  automationProducts,
}) {
  const [howItWorksExpanded, setHowItWorksExpanded] = useState(true)

  const trackedCount =
    trackingScope === 'all'
      ? PRODUCTS.length
      : trackingScope === 'category'
        ? CATEGORIES.filter((c) => selectedCategories.includes(c.id)).reduce(
            (s, c) => s + c.count,
            0,
          )
        : selectedProducts.length

  const totalProducts = CATEGORIES.reduce((s, c) => s + c.count, 0)

  const automatedCount =
    automationMode === 'category'
      ? automationCategories.filter((c) => c.enabled).length
      : automationMode === 'product'
        ? automationProducts.length
        : 0

  const enabledCategoryRules = automationCategories.filter((c) => c.enabled)
  const manualProductsCount =
    automationMode === 'none' ? trackedCount : totalProducts - trackedCount

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900">
          Review your batch setup
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Here's how your batches will be created when inventory arrives.
        </p>
      </div>

      {/* Setup Summary */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-5">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-gray-100 p-2 rounded-xl">
            {I.grid('w-4 h-4 text-gray-500')}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Setup Summary
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">
              Products tracked
            </div>
            <div className="text-base font-semibold text-gray-900">
              {trackedCount} of {CATEGORIES.length}
            </div>
          </div>

          {automationMode !== 'none' && (
            <>
              {automationMode === 'category' &&
                enabledCategoryRules.length > 0 && (
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">
                      Auto-expiration
                    </div>
                    <div className="text-base font-semibold text-gray-900">
                      {enabledCategoryRules.length}{' '}
                      {enabledCategoryRules.length === 1
                        ? 'category'
                        : 'categories'}{' '}
                      enabled
                    </div>
                  </div>
                )}

              {automationMode === 'product' &&
                automationProducts.length > 0 && (
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">
                      Product overrides
                    </div>
                    <div className="text-base font-semibold text-gray-900">
                      {automationProducts.length}{' '}
                      {automationProducts.length === 1 ? 'product' : 'products'}{' '}
                      customized
                    </div>
                  </div>
                )}
            </>
          )}

          {automationMode === 'none' && (
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">
                Manual entry
              </div>
              <div className="text-base font-semibold text-gray-900">
                All products
              </div>
            </div>
          )}
        </div>
      </div>

      {/* How it works */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-5">
        <button
          onClick={() => setHowItWorksExpanded(!howItWorksExpanded)}
          className="w-full flex items-start justify-between gap-3 mb-4 group"
        >
          <div className="flex items-start gap-3">
            <div className="bg-gray-100 p-2 rounded-xl group-hover:bg-gray-200/70 transition-colors">
              {I.info('w-4 h-4 text-gray-500')}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                How it works
              </h3>
            </div>
          </div>
          <div
            className={`transition-transform duration-200 ${howItWorksExpanded ? 'rotate-180' : ''}`}
          >
            {I.chevronDown('w-4 h-4 text-gray-400')}
          </div>
        </button>

        {howItWorksExpanded && (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-sm font-semibold text-gray-400 shrink-0 w-5">
                1.
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">
                  Sync your products
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Connect Lifo to your Square account and import your inventory.
                  Lifo pulls in all your products, so you can start tracking
                  expiry dates immediately.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-sm font-semibold text-gray-400 shrink-0 w-5">
                2.
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">
                  Attach expiration dates
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-2">
                  Products arrive without expiry info. You can:
                </p>
                <ul className="space-y-1.5 ml-4">
                  <li className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                    <span className="text-gray-300 shrink-0">•</span>
                    <span>
                      Let Lifo auto-fill dates using your rules (by category or
                      individual product)
                    </span>
                  </li>
                  <li className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                    <span className="text-gray-300 shrink-0">•</span>
                    <span>Enter dates manually for products without rules</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 leading-relaxed mt-2">
                  This creates batches — groups of the same product organized by
                  expiration date.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-sm font-semibold text-gray-400 shrink-0 w-5">
                3.
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">
                  Review and confirm
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Quickly check quantities and expiration dates for each batch
                  before confirming. Lifo ensures your inventory is batch-level
                  accurate in seconds.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-sm font-semibold text-gray-400 shrink-0 w-5">
                4.
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">
                  Track and optimize
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Once batches are created, Lifo applies FIFO logic to your
                  sales data. You'll see which batches are selling, which are
                  lingering, and when to discount or donate products — insights
                  traditional inventory counts can't provide.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Your automation rules */}
      {automationMode !== 'none' && (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-5">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-xl">
                {I.calendar('w-4 h-4 text-gray-500')}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Your automation rules
                </h3>
              </div>
            </div>
            <button
              onClick={() => onNavigate('automation')}
              className="text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors"
            >
              Edit →
            </button>
          </div>

          {automationMode === 'category' && enabledCategoryRules.length > 0 && (
            <div className="space-y-2">
              {enabledCategoryRules.map((cat) => (
                <div
                  key={cat.id}
                  className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-sm text-gray-700">{cat.name}</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {cat.days} days
                  </span>
                </div>
              ))}
            </div>
          )}

          {automationMode === 'product' && automationProducts.length > 0 && (
            <div className="space-y-2">
              {automationProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <span className="text-sm text-gray-700">{prod.name}</span>
                    <span className="text-xs text-gray-400 ml-2">
                      {prod.category}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {prod.days} days
                  </span>
                </div>
              ))}
            </div>
          )}

          {automationMode === 'category' && automationProducts.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="text-xs text-gray-400 mb-2">
                + {automationProducts.length} product override
                {automationProducts.length !== 1 ? 's' : ''}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Quick actions */}
      <div className="space-y-2">
        <button
          onClick={() => onNavigate('tracking')}
          className="w-full text-left bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:bg-white transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg group-hover:bg-gray-50 transition-colors">
                {I.layers('w-3.5 h-3.5 text-gray-500')}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  What to Track
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {trackingScope === 'all'
                    ? `Tracking all ${totalProducts} products`
                    : trackingScope === 'category'
                      ? `${selectedCategories.length} categories selected`
                      : `${selectedProducts.length} individual products`}
                </div>
              </div>
            </div>
            <span className="text-xs font-medium text-gray-400 group-hover:text-gray-600">
              Edit →
            </span>
          </div>
        </button>

        <button
          onClick={() => onNavigate('automation')}
          className="w-full text-left bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:bg-white transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg group-hover:bg-gray-50 transition-colors">
                {I.calendar('w-3.5 h-3.5 text-gray-500')}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Batch Automation
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {automationMode === 'none'
                    ? 'Manual entry for all products'
                    : automationMode === 'category'
                      ? `${automatedCount} categories automated`
                      : `${automatedCount} product overrides`}
                </div>
              </div>
            </div>
            <span className="text-xs font-medium text-gray-400 group-hover:text-gray-600">
              Edit →
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}

function StatusRow({ done, label, detail, disabled }) {
  return (
    <div className={`flex items-center gap-3 ${disabled ? 'opacity-40' : ''}`}>
      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
          done ? 'bg-gray-900' : 'border-2 border-gray-200'
        }`}
      >
        {done && I.check('w-3 h-3 text-white')}
      </div>
      <div className="flex-1 min-w-0">
        <span className={`text-sm ${done ? 'text-gray-700' : 'text-gray-400'}`}>
          {label}
        </span>
        <span className="text-xs text-gray-400 ml-2">· {detail}</span>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// WHAT TO TRACK PANEL
// ═══════════════════════════════════════════════════════

function TrackingPanel({
  scope,
  setScope,
  selectedCategories,
  setSelectedCategories,
  selectedProducts,
  setSelectedProducts,
}) {
  const [productSearch, setProductSearch] = useState('')

  const toggleCategory = (id) => {
    setSelectedCategories(
      selectedCategories.includes(id)
        ? selectedCategories.filter((c) => c !== id)
        : [...selectedCategories, id],
    )
  }

  const toggleProduct = (id) => {
    setSelectedProducts(
      selectedProducts.includes(id)
        ? selectedProducts.filter((p) => p !== id)
        : [...selectedProducts, id],
    )
  }

  const filteredProducts = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(productSearch.toLowerCase()),
  )

  const totalTracked =
    scope === 'all'
      ? PRODUCTS.length
      : scope === 'category'
        ? CATEGORIES.filter((c) => selectedCategories.includes(c.id)).reduce(
            (s, c) => s + c.count,
            0,
          )
        : selectedProducts.length

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900">What to Track</h2>
        <p className="text-sm text-gray-400 mt-1">
          Choose which products get batch-level expiry tracking.
        </p>
      </div>

      <div className="space-y-2.5">
        {/* All products */}
        <RadioCard
          selected={scope === 'all'}
          onSelect={() => setScope('all')}
          label="All products"
          description={`Track all ${PRODUCTS.length} products in your catalog. Recommended for getting started quickly.`}
        />

        {/* By category */}
        <RadioCard
          selected={scope === 'category'}
          onSelect={() => setScope('category')}
          label="Select by category"
          description="Choose specific categories to track. Ideal for focusing on high-waste areas first."
        >
          <div className="space-y-0.5 max-h-56 overflow-y-auto -mx-1 px-1">
            {CATEGORIES.map((cat) => (
              <label
                key={cat.id}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={selectedCategories.includes(cat.id)}
                    onChange={() => toggleCategory(cat.id)}
                  />
                  <span className="text-sm text-gray-700">{cat.name}</span>
                </div>
                <span className="text-xs text-gray-400">{cat.count} items</span>
              </label>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400">
              {selectedCategories.length} of {CATEGORIES.length} selected
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedCategories(CATEGORIES.map((c) => c.id))
              }}
              className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Select all
            </button>
          </div>
        </RadioCard>

        {/* Individual products */}
        <RadioCard
          selected={scope === 'individual'}
          onSelect={() => setScope('individual')}
          label="Select individual products"
          description="Hand-pick specific products. Best for small or targeted tracking setups."
        >
          <div className="relative mb-3">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              {I.search('w-3.5 h-3.5 text-gray-400')}
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={productSearch}
              onChange={(e) => setProductSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-0.5 max-h-48 overflow-y-auto -mx-1 px-1">
            {filteredProducts.map((product) => (
              <label
                key={product.id}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => toggleProduct(product.id)}
                  />
                  <div>
                    <span className="text-sm text-gray-700">
                      {product.name}
                    </span>
                    <span className="text-xs text-gray-400 ml-2">
                      {product.category}
                    </span>
                  </div>
                </div>
              </label>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t border-gray-100">
            <span className="text-xs text-gray-400">
              {selectedProducts.length} of {PRODUCTS.length} selected
            </span>
          </div>
        </RadioCard>
      </div>

      {/* Footer summary */}
      <div className="mt-5 flex items-start gap-3 px-1">
        {I.info('w-4 h-4 text-gray-300 mt-0.5 shrink-0')}
        <p className="text-xs text-gray-400 leading-relaxed">
          Currently tracking{' '}
          <span className="font-medium text-gray-600">
            {totalTracked} products
          </span>
        </p>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// BATCH AUTOMATION PANEL
// ═══════════════════════════════════════════════════════

function AutomationPanel({
  mode,
  setMode,
  automationCategories,
  setAutomationCategories,
  automationProducts,
  setAutomationProducts,
}) {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [newProductId, setNewProductId] = useState('')
  const [newProductDays, setNewProductDays] = useState(7)

  const toggleCategoryEnabled = (id) => {
    setAutomationCategories(
      automationCategories.map((c) =>
        c.id === id ? { ...c, enabled: !c.enabled } : c,
      ),
    )
  }
  const updateCategoryDays = (id, days) => {
    setAutomationCategories(
      automationCategories.map((c) =>
        c.id === id ? { ...c, days: parseInt(days) || 1 } : c,
      ),
    )
  }

  const addProduct = () => {
    if (!newProductId) return
    const product = PRODUCTS.find((p) => p.id === parseInt(newProductId))
    if (!product) return
    setAutomationProducts([
      ...automationProducts,
      {
        id: product.id,
        name: product.name,
        category: product.category,
        days: newProductDays,
      },
    ])
    setNewProductId('')
    setNewProductDays(7)
    setShowAddProduct(false)
  }

  const removeProduct = (id) => {
    setAutomationProducts(automationProducts.filter((p) => p.id !== id))
  }

  const availableProducts = PRODUCTS.filter(
    (p) => !automationProducts.find((ap) => ap.id === p.id),
  )
  const enabledCatCount = automationCategories.filter((c) => c.enabled).length

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900">Batch Automation</h2>
        <p className="text-sm text-gray-400 mt-1">
          Set default shelf life timelines. When inventory arrives, Lifo will
          auto-calculate expiry dates.
        </p>
      </div>

      <div className="space-y-2.5">
        {/* Manual only */}
        <RadioCard
          selected={mode === 'none'}
          onSelect={() => setMode('none')}
          label="Manual entry only"
          description="Enter expiration dates manually for each batch. Full control, no assumptions."
        />

        {/* By category */}
        <RadioCard
          selected={mode === 'category'}
          onSelect={() => setMode('category')}
          label="Automate by category"
          description="Set default shelf life for entire categories. Quick setup for most products."
        >
          <div className="space-y-1.5 max-h-64 overflow-y-auto">
            {automationCategories.map((cat) => (
              <div
                key={cat.id}
                className={`flex items-center justify-between py-2.5 px-3 rounded-lg transition-colors ${
                  cat.enabled ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Toggle
                    enabled={cat.enabled}
                    onChange={() => toggleCategoryEnabled(cat.id)}
                    size="small"
                  />
                  <span
                    className={`text-sm ${cat.enabled ? 'text-gray-900 font-medium' : 'text-gray-400'}`}
                  >
                    {cat.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={cat.days}
                    onChange={(e) => updateCategoryDays(cat.id, e.target.value)}
                    disabled={!cat.enabled}
                    onClick={(e) => e.stopPropagation()}
                    className={`w-14 text-sm text-right px-2 py-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 ${
                      cat.enabled
                        ? 'bg-white border-gray-200 text-gray-900'
                        : 'bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed'
                    }`}
                  />
                  <span
                    className={`text-xs ${cat.enabled ? 'text-gray-500' : 'text-gray-300'}`}
                  >
                    days
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400">
              {enabledCatCount} of {automationCategories.length} enabled
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setAutomationCategories(
                  automationCategories.map((c) => ({ ...c, enabled: true })),
                )
              }}
              className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Enable all
            </button>
          </div>
        </RadioCard>

        {/* By individual product */}
        <RadioCard
          selected={mode === 'product'}
          onSelect={() => setMode('product')}
          label="Automate by individual product"
          description="Set shelf life for specific products. Most precise, but requires more setup."
        >
          {automationProducts.length > 0 && (
            <div className="space-y-1.5 max-h-48 overflow-y-auto mb-3">
              {automationProducts.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between py-2 px-3 bg-gray-100 rounded-lg group"
                >
                  <div className="min-w-0">
                    <span className="text-sm font-medium text-gray-900">
                      {p.name}
                    </span>
                    <span className="text-xs text-gray-400 ml-2">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm font-semibold text-gray-700">
                      {p.days} days
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        removeProduct(p.id)
                      }}
                      className="p-1 rounded hover:bg-gray-200 text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      {I.x('w-3.5 h-3.5')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {showAddProduct ? (
            <div
              className={`${automationProducts.length > 0 ? 'pt-3 border-t border-gray-100' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <label className="text-xs font-medium text-gray-500 mb-1 block">
                    Product
                  </label>
                  <select
                    value={newProductId}
                    onChange={(e) => setNewProductId(e.target.value)}
                    className="w-full text-sm px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
                  >
                    <option value="">Select a product...</option>
                    {availableProducts.map((p) => (
                      <option
                        key={p.id}
                        value={p.id}
                      >
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-20">
                  <label className="text-xs font-medium text-gray-500 mb-1 block">
                    Days
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={newProductDays}
                    onChange={(e) =>
                      setNewProductDays(parseInt(e.target.value) || 1)
                    }
                    className="w-full text-sm px-2 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
                  />
                </div>
                <button
                  onClick={addProduct}
                  disabled={!newProductId}
                  className="px-3 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Add
                </button>
                <button
                  onClick={() => setShowAddProduct(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {I.x('w-4 h-4')}
                </button>
              </div>
            </div>
          ) : (
            <div
              className={
                automationProducts.length > 0
                  ? 'pt-2 border-t border-gray-100'
                  : ''
              }
            >
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowAddProduct(true)
                }}
                className="text-sm text-gray-500 hover:text-gray-900 font-medium flex items-center gap-1.5 transition-colors"
              >
                {I.plus('w-3.5 h-3.5')}
                Add product
              </button>
            </div>
          )}
        </RadioCard>
      </div>

      {/* Contextual help */}
      <div className="mt-5 flex items-start gap-3 px-1">
        {I.info('w-4 h-4 text-gray-300 mt-0.5 shrink-0')}
        <p className="text-xs text-gray-400 leading-relaxed">
          {mode === 'none'
            ? 'With manual entry, employees will be prompted to enter or scan the expiration date for every batch.'
            : "When a delivery is made in Square, Lifo will auto-calculate the expiry date based on the shelf life you've set here. Employees can always override the suggested date."}
        </p>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// NOTIFICATIONS PANEL (placeholder)
// ═══════════════════════════════════════════════════════

function NotificationsPanel() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
        <p className="text-sm text-gray-400 mt-1">
          Get alerts when batches are approaching expiry.
        </p>
      </div>
      <div className="bg-white border border-gray-200 border-dashed rounded-2xl p-10 text-center">
        <div className="bg-gray-100 p-3 rounded-2xl inline-flex mb-3">
          {I.bell('w-5 h-5 text-gray-400')}
        </div>
        <p className="text-sm font-medium text-gray-500">Coming soon</p>
        <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto">
          Configure automatic alerts when products reach a certain number of
          days before expiry. Get discount or donation recommendations at the
          right time.
        </p>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// RADIO CARD (reusable)
// ═══════════════════════════════════════════════════════

function RadioCard({ selected, onSelect, label, description, children }) {
  return (
    <div
      onClick={onSelect}
      className={`border rounded-2xl transition-all duration-200 cursor-pointer ${
        selected
          ? 'border-gray-900 bg-white ring-1 ring-gray-900 shadow-sm'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5">
            <RadioDot selected={selected} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-900">{label}</div>
            <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">
              {description}
            </div>
          </div>
        </div>
      </div>
      {selected && children && (
        <div
          className="px-5 pb-4 pt-0"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="pt-3 border-t border-gray-100">{children}</div>
        </div>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// MOBILE NAV (shown below md breakpoint)
// ═══════════════════════════════════════════════════════

function MobileNav({ activeSection, onSelect, onBack, summaries }) {
  if (activeSection !== null) {
    const labels = {
      overview: 'Overview',
      tracking: 'What to Track',
      automation: 'Batch Automation',
      notifications: 'Notifications',
    }
    return (
      <div className="md:hidden bg-white border-b border-gray-200 px-4 py-2.5">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          {I.chevronLeft('w-4 h-4')}
          <span>Settings</span>
          <span className="text-gray-300 mx-1">·</span>
          <span className="font-medium text-gray-900">
            {labels[activeSection]}
          </span>
        </button>
      </div>
    )
  }
  return null
}

// ═══════════════════════════════════════════════════════
// MOBILE OVERVIEW (list of tappable rows)
// ═══════════════════════════════════════════════════════

function MobileOverviewList({ onSelect, summaries }) {
  const sections = [
    {
      id: 'overview',
      icon: 'grid',
      label: 'Overview',
      summary: 'Configuration summary',
    },
    {
      id: 'tracking',
      icon: 'layers',
      label: 'What to Track',
      summary: summaries.tracking,
    },
    {
      id: 'automation',
      icon: 'calendar',
      label: 'Batch Automation',
      summary: summaries.automation,
    },
    {
      id: 'notifications',
      icon: 'bell',
      label: 'Notifications',
      summary: 'Coming soon',
      disabled: true,
    },
  ]

  return (
    <div className="space-y-1.5">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => !s.disabled && onSelect(s.id)}
          disabled={s.disabled}
          className={`w-full text-left bg-white border border-gray-200 rounded-xl px-4 py-3.5 flex items-center gap-3 transition-all ${
            s.disabled
              ? 'opacity-40 cursor-not-allowed'
              : 'hover:border-gray-300 hover:shadow-sm'
          }`}
        >
          <div className="bg-gray-100 p-2 rounded-xl shrink-0">
            {I[s.icon]('w-4 h-4 text-gray-500')}
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-sm font-semibold text-gray-900">
              {s.label}
            </span>
            <span className="text-xs text-gray-400 block mt-0.5">
              {s.summary}
            </span>
          </div>
          {!s.disabled && I.chevronDown('w-4 h-4 text-gray-300 -rotate-90')}
        </button>
      ))}
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// MAIN LAYOUT
// ═══════════════════════════════════════════════════════

export default function SettingsSidebarWireframe() {
  // Active section
  const [activeSection, setActiveSection] = useState('overview')

  // Mobile: null = show list, string = show detail
  const [mobileSection, setMobileSection] = useState(null)

  // Tracking state
  const [trackingScope, setTrackingScope] = useState('all')
  const [selectedCategories, setSelectedCategories] = useState([
    'dairy',
    'bakery',
    'beverages',
  ])
  const [selectedProducts, setSelectedProducts] = useState([1, 3, 4, 7])

  // Automation state
  const [automationMode, setAutomationMode] = useState('category')
  const [automationCategories, setAutomationCategories] = useState(
    CATEGORY_SHELF_DEFAULTS.map((c, i) => ({ ...c, enabled: i < 3 })),
  )
  const [automationProducts, setAutomationProducts] = useState([
    { id: 1, name: 'Organic Whole Milk 1L', category: 'Dairy & Eggs', days: 5 },
    { id: 7, name: 'Croissants 4pk', category: 'Bakery', days: 2 },
  ])

  // Dirty tracking (simplified)
  const [isDirty, setIsDirty] = useState(false)
  const markDirty = () => setIsDirty(true)

  // Computed summaries for nav
  const summaries = {
    tracking:
      trackingScope === 'all'
        ? `${PRODUCTS.length} products`
        : trackingScope === 'category'
          ? `${selectedCategories.length} categories`
          : `${selectedProducts.length} products`,
    automation:
      automationMode === 'none'
        ? 'Manual entry'
        : automationMode === 'category'
          ? `${automationCategories.filter((c) => c.enabled).length} categories`
          : `${automationProducts.length} products`,
    notifications: 'Coming soon',
  }

  // Wrap setters to mark dirty
  const wrapDirty =
    (fn) =>
    (...args) => {
      fn(...args)
      markDirty()
    }

  // Render the active detail panel
  const renderPanel = (section) => {
    switch (section) {
      case 'overview':
        return (
          <OverviewPanel
            onNavigate={(s) => {
              setActiveSection(s)
              setMobileSection(s)
            }}
            trackingScope={trackingScope}
            automationMode={automationMode}
            categories={CATEGORIES}
            selectedCategories={selectedCategories}
            selectedProducts={selectedProducts}
            automationCategories={automationCategories}
            automationProducts={automationProducts}
          />
        )
      case 'tracking':
        return (
          <TrackingPanel
            scope={trackingScope}
            setScope={wrapDirty(setTrackingScope)}
            selectedCategories={selectedCategories}
            setSelectedCategories={wrapDirty(setSelectedCategories)}
            selectedProducts={selectedProducts}
            setSelectedProducts={wrapDirty(setSelectedProducts)}
          />
        )
      case 'automation':
        return (
          <AutomationPanel
            mode={automationMode}
            setMode={wrapDirty(setAutomationMode)}
            automationCategories={automationCategories}
            setAutomationCategories={wrapDirty(setAutomationCategories)}
            automationProducts={automationProducts}
            setAutomationProducts={wrapDirty(setAutomationProducts)}
          />
        )
      case 'notifications':
        return <NotificationsPanel />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
              Wireframe v4
            </span>
            <div className="w-px h-3 bg-gray-200" />
            <span className="text-xs text-gray-400">
              Sidebar + Detail Panel
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded hidden sm:inline">
              /dashboard/settings
            </span>
          </div>
        </div>
      </div>

      {/* Mobile nav breadcrumb */}
      <MobileNav
        activeSection={mobileSection}
        onSelect={setMobileSection}
        onBack={() => setMobileSection(null)}
        summaries={summaries}
      />

      {/* Main layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-900">
            Batch Tracking Settings
          </h1>
          <p className="text-sm text-gray-400 mt-1 hidden sm:block">
            Manage how Lifo tracks your inventory and automates batch creation.
          </p>
        </div>

        {/* Desktop: two-column layout */}
        <div className="hidden md:grid md:grid-cols-[220px_1fr] gap-6">
          {/* Left sidebar */}
          <div className="self-start sticky top-6">
            <SidebarNav
              activeSection={activeSection}
              onSelect={setActiveSection}
              summaries={summaries}
            />
          </div>

          {/* Right detail panel */}
          <div className="relative min-h-[500px] pb-16">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              {renderPanel(activeSection)}
            </div>
            <StickySaveFooter
              isDirty={isDirty}
              onSave={() => setIsDirty(false)}
              onDiscard={() => setIsDirty(false)}
            />
          </div>
        </div>

        {/* Mobile: drill-down navigation */}
        <div className="md:hidden">
          {mobileSection === null ? (
            <MobileOverviewList
              onSelect={setMobileSection}
              summaries={summaries}
            />
          ) : (
            <div className="relative pb-16">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
                {renderPanel(mobileSection)}
              </div>
              <StickySaveFooter
                isDirty={isDirty}
                onSave={() => setIsDirty(false)}
                onDiscard={() => setIsDirty(false)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
