'use client'

import { useState, useEffect } from 'react'

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
  chevronRight: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
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
  sparkles: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
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
  box: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line
        x1="12"
        y1="22.08"
        x2="12"
        y2="12"
      />
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
  arrowRight: (c) => (
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
        x1="5"
        y1="12"
        x2="19"
        y2="12"
      />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  pencil: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  ),
  shieldCheck: (c) => (
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
      <polyline points="9 12 11.5 14.5 15.5 10" />
    </svg>
  ),
  zap: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  eye: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle
        cx="12"
        cy="12"
        r="3"
      />
    </svg>
  ),
  loader: (c) => (
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
        y1="2"
        x2="12"
        y2="6"
      />
      <line
        x1="12"
        y1="18"
        x2="12"
        y2="22"
      />
      <line
        x1="4.93"
        y1="4.93"
        x2="7.76"
        y2="7.76"
      />
      <line
        x1="16.24"
        y1="16.24"
        x2="19.07"
        y2="19.07"
      />
      <line
        x1="2"
        y1="12"
        x2="6"
        y2="12"
      />
      <line
        x1="18"
        y1="12"
        x2="22"
        y2="12"
      />
      <line
        x1="4.93"
        y1="19.07"
        x2="7.76"
        y2="16.24"
      />
      <line
        x1="16.24"
        y1="7.76"
        x2="19.07"
        y2="4.93"
      />
    </svg>
  ),
  store: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
    </svg>
  ),
}

// ——— Smart Defaults (simulating what LIFO would auto-detect from Square) ——
const DETECTED_CATEGORIES = [
  {
    id: 'dairy',
    name: 'Dairy & Eggs',
    productCount: 14,
    defaultDays: 14,
    isFood: true,
  },
  {
    id: 'bakery',
    name: 'Bakery',
    productCount: 8,
    defaultDays: 3,
    isFood: true,
  },
  {
    id: 'produce',
    name: 'Fresh Produce',
    productCount: 22,
    defaultDays: 5,
    isFood: true,
  },
  {
    id: 'meat',
    name: 'Meat & Seafood',
    productCount: 11,
    defaultDays: 4,
    isFood: true,
  },
  {
    id: 'beverages',
    name: 'Beverages',
    productCount: 9,
    defaultDays: 14,
    isFood: true,
  },
  {
    id: 'snacks',
    name: 'Snacks & Confectionery',
    productCount: 15,
    defaultDays: 30,
    isFood: true,
  },
  {
    id: 'canned',
    name: 'Canned Goods',
    productCount: 7,
    defaultDays: 365,
    isFood: true,
  },
  {
    id: 'frozen',
    name: 'Frozen Foods',
    productCount: 6,
    defaultDays: 90,
    isFood: true,
  },
  {
    id: 'household',
    name: 'Household & Cleaning',
    productCount: 12,
    defaultDays: null,
    isFood: false,
  },
  {
    id: 'personal',
    name: 'Personal Care',
    productCount: 5,
    defaultDays: null,
    isFood: false,
  },
]

const STORE_NAME = 'Albert Heijn Centrum'

// ——— Shared Components ———————————————————————————————

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
      className={`relative rounded-full transition-colors duration-200 flex-shrink-0 ${enabled ? 'bg-gray-900' : 'bg-gray-200'}`}
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

function ProgressDots({ current, total }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === current
              ? 'w-6 bg-gray-900'
              : i < current
                ? 'w-1.5 bg-gray-400'
                : 'w-1.5 bg-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// STEP 1: "Here's what we found"
// ═══════════════════════════════════════════════════════

function StepCatalogReview({
  categories,
  onToggle,
  onUpdateDays,
  onNext,
  onExpandCategory,
  expandedId,
}) {
  const tracked = categories.filter((c) => c.enabled)
  const trackedProducts = tracked.reduce((s, c) => s + c.productCount, 0)
  const totalProducts = categories.reduce((s, c) => s + c.productCount, 0)

  return (
    <div>
      {/* Hero moment */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-2xl mb-4">
          {I.sparkles('w-6 h-6 text-white')}
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          We found {totalProducts} products across {categories.length}{' '}
          categories
        </h1>
        <p className="text-sm text-gray-400 max-w-lg mx-auto">
          We've pre-selected the food categories that benefit most from expiry
          tracking and set smart shelf-life defaults. Adjust anything that
          doesn't look right.
        </p>
      </div>

      {/* Summary bar */}
      <div className="bg-gray-900 text-white rounded-2xl px-5 py-4 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white/10 p-2 rounded-xl">
            {I.shieldCheck('w-5 h-5')}
          </div>
          <div>
            <div className="text-sm font-semibold">
              {trackedProducts} products will be tracked
            </div>
            <div className="text-xs text-gray-400 mt-0.5">
              {tracked.length} of {categories.length} categories enabled ·
              estimated shelf lives pre-filled
            </div>
          </div>
        </div>
      </div>

      {/* Category list */}
      <div className="space-y-2">
        {categories.map((cat) => (
          <CategoryRow
            key={cat.id}
            category={cat}
            onToggle={() => onToggle(cat.id)}
            onUpdateDays={(days) => onUpdateDays(cat.id, days)}
            expanded={expandedId === cat.id}
            onExpand={() =>
              onExpandCategory(expandedId === cat.id ? null : cat.id)
            }
          />
        ))}
      </div>

      {/* Helper text */}
      <div className="mt-5 flex items-start gap-3 px-1">
        {I.info('w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0')}
        <p className="text-xs text-gray-400 leading-relaxed">
          Shelf life defaults are estimates based on standard industry data. You
          and your team can always override the expiry date for individual
          batches when receiving deliveries.
        </p>
      </div>
    </div>
  )
}

function CategoryRow({ category, onToggle, onUpdateDays, expanded, onExpand }) {
  const [editingDays, setEditingDays] = useState(false)
  const [tempDays, setTempDays] = useState(category.days)

  const commitDays = () => {
    onUpdateDays(parseInt(tempDays) || category.days)
    setEditingDays(false)
  }

  return (
    <div
      className={`border rounded-2xl transition-all duration-200 ${
        category.enabled
          ? 'border-gray-200 bg-white shadow-sm'
          : 'border-gray-100 bg-gray-50/50'
      }`}
    >
      <div className="px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Toggle
            enabled={category.enabled}
            onChange={onToggle}
            size="small"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-medium ${category.enabled ? 'text-gray-900' : 'text-gray-400'}`}
              >
                {category.name}
              </span>
              {!category.isFood && (
                <span className="text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-400">
                  Non-food
                </span>
              )}
            </div>
            <span
              className={`text-xs ${category.enabled ? 'text-gray-400' : 'text-gray-300'}`}
            >
              {category.productCount} products
            </span>
          </div>
        </div>

        {category.enabled && category.days && (
          <div className="flex items-center gap-2 flex-shrink-0">
            {editingDays ? (
              <div
                className="flex items-center gap-1.5"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="number"
                  min="1"
                  value={tempDays}
                  onChange={(e) => setTempDays(e.target.value)}
                  onBlur={commitDays}
                  onKeyDown={(e) => e.key === 'Enter' && commitDays()}
                  autoFocus
                  className="w-16 text-sm text-right px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
                <span className="text-xs text-gray-500">days</span>
              </div>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setTempDays(category.days)
                  setEditingDays(true)
                }}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors group"
              >
                <span className="text-sm font-semibold text-gray-700">
                  {category.days}d
                </span>
                <span className="text-xs text-gray-400">shelf life</span>
                {I.pencil(
                  'w-3 h-3 text-gray-300 group-hover:text-gray-500 transition-colors',
                )}
              </button>
            )}
          </div>
        )}

        {category.enabled && !category.days && (
          <span className="text-xs text-gray-300 italic">
            No expiry tracking
          </span>
        )}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// STEP 2: "Preview what you'll see"
// ═══════════════════════════════════════════════════════

function StepPreview({ categories, onBack, onActivate, isActivating }) {
  const tracked = categories.filter((c) => c.enabled)
  const trackedProducts = tracked.reduce((s, c) => s + c.productCount, 0)
  const withAutoDates = tracked
    .filter((c) => c.days)
    .reduce((s, c) => s + c.productCount, 0)
  const manualDateProducts = trackedProducts - withAutoDates

  // Simulated preview data
  const previewBatches = [
    {
      product: 'Organic Whole Milk 1L',
      category: 'Dairy & Eggs',
      estimatedExpiry: 'Feb 20, 2026',
      daysLeft: 14,
      qty: 24,
    },
    {
      product: 'Sourdough Bread 400g',
      category: 'Bakery',
      estimatedExpiry: 'Feb 9, 2026',
      daysLeft: 3,
      qty: 12,
    },
    {
      product: 'Fresh Salmon Fillet',
      category: 'Meat & Seafood',
      estimatedExpiry: 'Feb 10, 2026',
      daysLeft: 4,
      qty: 8,
    },
    {
      product: 'Greek Yogurt 500g',
      category: 'Dairy & Eggs',
      estimatedExpiry: 'Feb 20, 2026',
      daysLeft: 14,
      qty: 36,
    },
    {
      product: 'Mixed Leaf Salad 150g',
      category: 'Fresh Produce',
      estimatedExpiry: 'Feb 11, 2026',
      daysLeft: 5,
      qty: 18,
    },
  ]

  return (
    <div>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-2xl mb-4">
          {I.eye('w-6 h-6 text-white')}
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Here's what your dashboard will look like
        </h1>
        <p className="text-sm text-gray-400 max-w-lg mx-auto">
          Lifo will create batches from your current Square inventory using the
          shelf lives you confirmed. Every date is an estimate — your team can
          correct any of them.
        </p>
      </div>

      {/* Stats preview */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-gray-900">
            {trackedProducts}
          </div>
          <div className="text-xs text-gray-400 mt-1">Products tracked</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-gray-900">
            {withAutoDates}
          </div>
          <div className="text-xs text-gray-400 mt-1">Auto-dated</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-gray-900">
            {tracked.length}
          </div>
          <div className="text-xs text-gray-400 mt-1">Categories</div>
        </div>
      </div>

      {/* Preview table */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden mb-6">
        <div className="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-gray-900">
              Batch Preview
            </h3>
            <span className="text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-400">
              Estimated
            </span>
          </div>
          <span className="text-xs text-gray-400">
            Showing 5 of {trackedProducts}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                <th className="px-5 py-2.5">Product</th>
                <th className="px-5 py-2.5">Est. Expiry</th>
                <th className="px-5 py-2.5">Time Left</th>
                <th className="px-5 py-2.5 text-right">Qty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {previewBatches.map((batch, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-5 py-3">
                    <div className="text-sm font-medium text-gray-900">
                      {batch.product}
                    </div>
                    <div className="text-xs text-gray-400">
                      {batch.category}
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm text-gray-600">
                        ~{batch.estimatedExpiry}
                      </span>
                      {I.pencil('w-3 h-3 text-gray-300')}
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg ${
                        batch.daysLeft <= 3
                          ? 'bg-gray-200 text-gray-900'
                          : batch.daysLeft <= 7
                            ? 'bg-gray-100 text-gray-700'
                            : 'bg-gray-50 text-gray-500'
                      }`}
                    >
                      ~{batch.daysLeft}d
                    </span>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-700 text-right font-medium">
                    {batch.qty}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Explanation callout */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-3">
          {I.info('w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0')}
          <div>
            <p className="text-sm text-gray-600 font-medium mb-1">
              How estimated dates work
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Since we don't know exactly when products arrived, we're using
              today's date + your shelf-life defaults as a starting estimate.
              The tilde (~) shows these are approximations. When your next
              delivery arrives, Lifo will calculate precise expiry dates
              automatically. Your team can edit any date at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// STEP 3: Success / Done
// ═══════════════════════════════════════════════════════

function StepSuccess({ categories }) {
  const tracked = categories.filter((c) => c.enabled)
  const trackedProducts = tracked.reduce((s, c) => s + c.productCount, 0)

  const [showChecks, setShowChecks] = useState([false, false, false, false])

  useEffect(() => {
    const timers = [
      setTimeout(
        () =>
          setShowChecks((p) => {
            const n = [...p]
            n[0] = true
            return n
          }),
        300,
      ),
      setTimeout(
        () =>
          setShowChecks((p) => {
            const n = [...p]
            n[1] = true
            return n
          }),
        700,
      ),
      setTimeout(
        () =>
          setShowChecks((p) => {
            const n = [...p]
            n[2] = true
            return n
          }),
        1100,
      ),
      setTimeout(
        () =>
          setShowChecks((p) => {
            const n = [...p]
            n[3] = true
            return n
          }),
        1500,
      ),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const steps = [
    {
      label: 'Square catalog synced',
      detail: `${categories.reduce((s, c) => s + c.productCount, 0)} products imported`,
    },
    {
      label: 'Tracking categories configured',
      detail: `${tracked.length} categories enabled`,
    },
    {
      label: 'Shelf-life defaults applied',
      detail: `${trackedProducts} products auto-dated`,
    },
    { label: 'Initial batches created', detail: 'Dashboard is live' },
  ]

  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-900 rounded-2xl mb-5">
        {I.check('w-7 h-7 text-white')}
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">You're all set</h1>
      <p className="text-sm text-gray-400 max-w-md mx-auto mb-8">
        Your dashboard is live with {trackedProducts} tracked products. Lifo
        will automatically create batches when new deliveries come in from
        Square.
      </p>

      {/* Completion checklist */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 text-left max-w-md mx-auto mb-8">
        <div className="space-y-3.5">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 transition-all duration-300 ${showChecks[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            >
              <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                {I.check('w-3 h-3 text-white')}
              </div>
              <div className="flex-1">
                <span className="text-sm text-gray-700">{step.label}</span>
                <span className="text-xs text-gray-400 ml-2">
                  · {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What happens next */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 max-w-md mx-auto mb-8 text-left">
        <p className="text-sm font-medium text-gray-700 mb-2">
          What happens next
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
            <span className="text-gray-300 mt-0.5">•</span>
            <span>
              New Square deliveries will auto-create batches with your
              shelf-life defaults
            </span>
          </li>
          <li className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
            <span className="text-gray-300 mt-0.5">•</span>
            <span>
              You'll get alerts as batches approach their expiry dates
            </span>
          </li>
          <li className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
            <span className="text-gray-300 mt-0.5">•</span>
            <span>Adjust any shelf life or setting anytime in Settings</span>
          </li>
        </ul>
      </div>

      <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors text-sm">
        Go to Dashboard
        {I.arrowRight('w-4 h-4')}
      </button>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// ACTIVATING STATE (brief interstitial)
// ═══════════════════════════════════════════════════════

function ActivatingState() {
  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-2xl mb-5 animate-pulse">
        {I.zap('w-7 h-7 text-gray-400')}
      </div>
      <h2 className="text-lg font-bold text-gray-900 mb-2">
        Creating your batches...
      </h2>
      <p className="text-sm text-gray-400 max-w-sm mx-auto">
        Setting up expiry tracking for your inventory. This usually takes just a
        moment.
      </p>
      <div className="mt-6 flex justify-center">
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full bg-gray-900 animate-bounce"
            style={{ animationDelay: '0ms' }}
          />
          <div
            className="w-2 h-2 rounded-full bg-gray-900 animate-bounce"
            style={{ animationDelay: '150ms' }}
          />
          <div
            className="w-2 h-2 rounded-full bg-gray-900 animate-bounce"
            style={{ animationDelay: '300ms' }}
          />
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// MAIN FLOW CONTROLLER
// ═══════════════════════════════════════════════════════

export default function OnboardingSetupFlow() {
  const [step, setStep] = useState(0) // 0 = review, 1 = preview, 2 = activating, 3 = success
  const [expandedCategory, setExpandedCategory] = useState(null)

  // Categories with enabled state and editable days
  const [categories, setCategories] = useState(
    DETECTED_CATEGORIES.map((c) => ({
      ...c,
      enabled: c.isFood, // Auto-enable food categories
      days: c.defaultDays,
    })),
  )

  const toggleCategory = (id) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, enabled: !c.enabled } : c)),
    )
  }

  const updateCategoryDays = (id, days) => {
    setCategories((prev) => prev.map((c) => (c.id === id ? { ...c, days } : c)))
  }

  const handleActivate = () => {
    setStep(2) // activating
    setTimeout(() => setStep(3), 2200) // success after delay
  }

  const tracked = categories.filter((c) => c.enabled)
  const trackedProducts = tracked.reduce((s, c) => s + c.productCount, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
              Wireframe v6
            </span>
            <div className="w-px h-3 bg-gray-200" />
            <span className="text-xs text-gray-400">Catalog Review</span>
          </div>
          <span className="text-[10px] font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded hidden sm:inline">
            /onboarding/setup/catalog-review
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        {step === 0 && (
          <>
            <StepCatalogReview
              categories={categories}
              onToggle={toggleCategory}
              onUpdateDays={updateCategoryDays}
              onNext={() => setStep(1)}
              onExpandCategory={setExpandedCategory}
              expandedId={expandedCategory}
            />
            {/* Fixed bottom CTA */}
            <div className="mt-8 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                Step 1 of 3 · Configure tracking
              </span>
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors text-sm"
              >
                Looks good
                {I.arrowRight('w-4 h-4')}
              </button>
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <StepPreview
              categories={categories}
              onBack={() => setStep(0)}
              onActivate={handleActivate}
              isActivating={false}
            />
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => setStep(0)}
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                ← Back to categories
              </button>
              <button
                onClick={handleActivate}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors text-sm"
              >
                Activate Tracking
                {I.zap('w-4 h-4')}
              </button>
            </div>
          </>
        )}

        {step === 2 && <ActivatingState />}

        {step === 3 && <StepSuccess categories={categories} />}
      </div>
    </div>
  )
}
