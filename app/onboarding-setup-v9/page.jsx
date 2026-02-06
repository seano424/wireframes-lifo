'use client'

import { useState, useEffect } from 'react'

// ——— Icons ———————————————————————————————————————————
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
  package: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.5 9.4 7.55 4.24" />
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
  clock: (c) => (
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  skipForward: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 4 15 12 5 20 5 4" />
      <line
        x1="19"
        y1="5"
        x2="19"
        y2="19"
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
  square: (c) => (
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
        width="18"
        height="18"
        rx="2"
      />
    </svg>
  ),
}

// ═══════════════════════════════════════════════════════
// FUZZY MATCHING ENGINE (from v7)
// ═══════════════════════════════════════════════════════

const SHELF_LIFE_RULES = [
  {
    keywords: [
      'dairy',
      'milk',
      'cheese',
      'yogurt',
      'yoghurt',
      'butter',
      'cream',
      'egg',
      'lait',
      'fromage',
      'oeuf',
    ],
    days: 7,
    matchLabel: 'Dairy',
  },
  {
    keywords: [
      'bakery',
      'bread',
      'pastry',
      'boulangerie',
      'pain',
      'viennoiserie',
      'cake',
      'patisserie',
    ],
    days: 3,
    matchLabel: 'Bakery',
  },
  {
    keywords: [
      'produce',
      'fruit',
      'vegetable',
      'fresh',
      'légume',
      'salade',
      'salad',
    ],
    days: 5,
    matchLabel: 'Produce',
  },
  {
    keywords: [
      'meat',
      'fish',
      'seafood',
      'poultry',
      'chicken',
      'beef',
      'pork',
      'viande',
      'poisson',
      'charcuterie',
      'deli',
    ],
    days: 4,
    matchLabel: 'Meat & Seafood',
  },
  {
    keywords: [
      'beverage',
      'drink',
      'juice',
      'boisson',
      'soda',
      'water',
      'smoothie',
    ],
    days: 14,
    matchLabel: 'Beverages',
  },
  {
    keywords: ['frozen', 'ice cream', 'surgelé', 'glacé', 'freezer'],
    days: 90,
    matchLabel: 'Frozen',
  },
  {
    keywords: ['canned', 'conserve', 'tinned', 'jar', 'preserved', 'bocal'],
    days: 365,
    matchLabel: 'Canned / Preserved',
  },
  {
    keywords: [
      'snack',
      'chips',
      'biscuit',
      'cookie',
      'confectionery',
      'candy',
      'chocolate',
      'confiserie',
    ],
    days: 30,
    matchLabel: 'Snacks',
  },
  {
    keywords: [
      'cleaning',
      'household',
      'detergent',
      'soap',
      'ménage',
      'entretien',
      'paper',
      'plastic',
    ],
    days: null,
    matchLabel: 'Non-food',
  },
  {
    keywords: [
      'personal',
      'beauty',
      'hygiene',
      'cosmetic',
      'shampoo',
      'toiletries',
      'soin',
    ],
    days: null,
    matchLabel: 'Non-food',
  },
]

const DEFAULT_SHELF_LIFE = 14

function fuzzyMatchCategory(categoryName) {
  const lower = categoryName.toLowerCase()
  for (const rule of SHELF_LIFE_RULES) {
    for (const keyword of rule.keywords) {
      if (lower.includes(keyword)) {
        return {
          matched: true,
          matchLabel: rule.matchLabel,
          defaultDays: rule.days,
          isFood: rule.days !== null,
          confidence: 'high',
        }
      }
    }
  }
  return {
    matched: false,
    matchLabel: null,
    defaultDays: DEFAULT_SHELF_LIFE,
    isFood: true,
    confidence: 'low',
  }
}

// ═══════════════════════════════════════════════════════
// SQUARE CATALOG (simulated)
// ═══════════════════════════════════════════════════════

const SQUARE_CATALOG = {
  storeName: 'Épicerie Martin',
  categories: [
    { id: 'sq_1', name: 'Produits Laitiers', productCount: 18 },
    { id: 'sq_2', name: 'Boulangerie', productCount: 11 },
    { id: 'sq_3', name: 'Fruits & Légumes', productCount: 26 },
    { id: 'sq_4', name: 'Viandes', productCount: 9 },
    { id: 'sq_5', name: 'Boissons', productCount: 14 },
    { id: 'sq_6', name: 'Surgelés', productCount: 7 },
    { id: 'sq_7', name: 'Promotions', productCount: 12 },
    { id: 'sq_8', name: 'Rayon 3', productCount: 8 },
    { id: 'sq_9', name: 'Nouveautés', productCount: 5 },
    { id: 'sq_10', name: 'Entretien Maison', productCount: 10 },
  ],
  uncategorizedCount: 34,
}

function processSquareCatalog(catalog) {
  const processed = catalog.categories.map((cat) => {
    const match = fuzzyMatchCategory(cat.name)
    return {
      ...cat,
      ...match,
      enabled: match.isFood,
      days: match.defaultDays || DEFAULT_SHELF_LIFE,
      mode: match.isFood ? 'auto' : 'off', // 'auto' | 'manual' | 'off'
    }
  })

  if (catalog.uncategorizedCount > 0) {
    processed.push({
      id: 'sq_uncategorized',
      name: 'Uncategorized',
      productCount: catalog.uncategorizedCount,
      matched: false,
      matchLabel: null,
      defaultDays: DEFAULT_SHELF_LIFE,
      isFood: true,
      confidence: 'none',
      enabled: true,
      days: DEFAULT_SHELF_LIFE,
      mode: 'auto',
    })
  }

  return processed
}

const TOTAL_PRODUCTS =
  SQUARE_CATALOG.categories.reduce((s, c) => s + c.productCount, 0) +
  SQUARE_CATALOG.uncategorizedCount

// ——— Shared Primitives ———————————————————————————————

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
      className={`relative rounded-full transition-colors duration-200 shrink-0 ${enabled ? 'bg-gray-900' : 'bg-gray-200'}`}
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

// ═══════════════════════════════════════════════════════
// SIDEBAR NAVIGATION (Stripe-inspired)
// ═══════════════════════════════════════════════════════

function Sidebar({ step, completedSteps, onStepClick }) {
  const steps = [
    { id: 0, label: 'Square connected', icon: 'square' },
    { id: 1, label: 'What to track', icon: 'layers' },
    { id: 2, label: 'How to track it', icon: 'calendar' },
  ]

  return (
    <nav className="space-y-1">
      {steps.map((s) => {
        const isComplete = completedSteps.includes(s.id)
        const isCurrent = step === s.id
        const isClickable = true

        return (
          <button
            key={s.id}
            onClick={() => onStepClick(s.id)}
            disabled={false}
            className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-3 transition-all duration-150 group ${
              isCurrent
                ? 'bg-gray-900 text-white'
                : isClickable
                  ? 'text-gray-600 hover:bg-gray-100'
                  : 'text-gray-400 cursor-default'
            }`}
          >
            {/* Step indicator */}
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold ${
                isComplete && !isCurrent
                  ? 'bg-gray-900 text-white'
                  : isCurrent
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 text-gray-400'
              }`}
            >
              {isComplete && !isCurrent
                ? I.check('w-3 h-3')
                : s.id === 0 && !isCurrent
                  ? I.check('w-3 h-3 text-gray-400')
                  : s.id === 0
                    ? I.check('w-3 h-3')
                    : s.id}
            </div>

            <span
              className={`text-sm font-medium ${isCurrent ? 'text-white' : isComplete && !isCurrent ? 'text-gray-700' : ''}`}
            >
              {s.label}
            </span>
          </button>
        )
      })}

      {/* Activate button in sidebar */}
      <div className="pt-3 mt-3 border-t border-gray-100">
        <div
          className={`px-3 py-2.5 flex items-center gap-3 text-sm font-medium ${
            completedSteps.includes(2) ? 'text-gray-900' : 'text-gray-300'
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
              completedSteps.includes(2) ? 'bg-gray-900' : 'bg-gray-100'
            }`}
          >
            {I.zap(
              `w-3 h-3 ${completedSteps.includes(2) ? 'text-white' : 'text-gray-300'}`,
            )}
          </div>
          Activate
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════════════
// STEP 0: SQUARE CONNECTED
// ═══════════════════════════════════════════════════════

function StepSquareConnected({ onNext }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1.5">
          Square connected
        </h2>
        <p className="text-sm text-gray-400">
          Your Square account is successfully connected and synced.
        </p>
      </div>

      {/* Simple grayscale info panel */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
        <div className="space-y-4">
          <div>
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
              Store Name
            </div>
            <div className="text-sm text-gray-700">
              {SQUARE_CATALOG.storeName}
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
              Catalog Size
            </div>
            <div className="text-sm text-gray-700">
              {TOTAL_PRODUCTS} products across{' '}
              {SQUARE_CATALOG.categories.length} categories
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
              Connection Status
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-400" />
              <span className="text-sm text-gray-700">Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Next button */}
      <div className="flex justify-end">
        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors"
        >
          Next {I.arrowRight('w-3.5 h-3.5')}
        </button>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// STEP 1: WHAT TO TRACK
// ═══════════════════════════════════════════════════════

function StepWhatToTrack({ categories, onToggle, onNext }) {
  const tracked = categories.filter((c) => c.enabled)
  const trackedProducts = tracked.reduce((s, c) => s + c.productCount, 0)

  // Split food from non-food for display order
  const foodCategories = categories.filter((c) => c.isFood || c.enabled)
  const nonFoodCategories = categories.filter((c) => !c.isFood && !c.enabled)

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1.5">
          What do you want to track?
        </h2>
        <p className="text-sm text-gray-400">
          We found {TOTAL_PRODUCTS} products across{' '}
          {SQUARE_CATALOG.categories.length} categories in your Square catalog.
          We've pre-selected the ones that need expiry tracking.
        </p>
      </div>

      {/* Category list */}
      <div className="space-y-1.5 mb-6">
        {foodCategories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onToggle(cat.id)}
            className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-150 cursor-pointer ${
              cat.enabled
                ? 'border-gray-200 bg-white hover:border-gray-300'
                : 'border-gray-100 bg-gray-50/50 hover:border-gray-200'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <Toggle
                enabled={cat.enabled}
                onChange={() => onToggle(cat.id)}
                size="small"
              />
              <div className="min-w-0">
                <span
                  className={`text-sm font-medium ${cat.enabled ? 'text-gray-900' : 'text-gray-400'}`}
                >
                  {cat.name}
                </span>
                {cat.confidence === 'high' && cat.matchLabel && (
                  <span className="text-xs text-gray-400 ml-2">
                    · {cat.matchLabel}
                  </span>
                )}
              </div>
            </div>
            <span
              className={`text-sm tabular-nums shrink-0 ${cat.enabled ? 'text-gray-500' : 'text-gray-300'}`}
            >
              {cat.productCount} products
            </span>
          </div>
        ))}

        {/* Non-food section — collapsed */}
        {nonFoodCategories.length > 0 && (
          <div className="mt-3">
            <div className="px-1 mb-2">
              <span className="text-xs text-gray-400">
                {nonFoodCategories.length} non-food{' '}
                {nonFoodCategories.length === 1 ? 'category' : 'categories'}{' '}
                detected — no expiry tracking needed
              </span>
            </div>
            {nonFoodCategories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onToggle(cat.id)}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50/30 cursor-pointer hover:border-gray-200 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Toggle
                    enabled={cat.enabled}
                    onChange={() => onToggle(cat.id)}
                    size="small"
                  />
                  <span className="text-sm text-gray-400">{cat.name}</span>
                </div>
                <span className="text-xs text-gray-300 shrink-0">
                  {cat.productCount} products
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary + next */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">
          Tracking{' '}
          <span className="font-medium text-gray-600">{trackedProducts}</span>{' '}
          of {TOTAL_PRODUCTS} products
        </span>
        <button
          onClick={onNext}
          disabled={trackedProducts === 0}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next {I.arrowRight('w-3.5 h-3.5')}
        </button>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// STEP 2: HOW TO TRACK IT
// ═══════════════════════════════════════════════════════

function ShelfLifeChip({ cat, onUpdateDays, onToggleMode }) {
  const [editing, setEditing] = useState(false)
  const [tempDays, setTempDays] = useState(cat.days)

  const commitDays = () => {
    onUpdateDays(parseInt(tempDays) || DEFAULT_SHELF_LIFE)
    setEditing(false)
  }

  if (cat.mode === 'manual') {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation()
          onToggleMode()
        }}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dashed border-gray-300 bg-gray-50 text-xs font-medium text-gray-400 hover:border-gray-400 hover:text-gray-500 transition-colors"
      >
        {I.pencil('w-3 h-3')}
        Manual entry
      </button>
    )
  }

  if (editing) {
    return (
      <div
        className="inline-flex items-center gap-1.5"
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
          className="w-14 text-sm text-right px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
        />
        <span className="text-xs text-gray-500">days</span>
      </div>
    )
  }

  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        setTempDays(cat.days)
        setEditing(true)
      }}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors group ${
        cat.confidence === 'high'
          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          : 'bg-gray-100 text-gray-400 border border-dashed border-gray-200 hover:bg-gray-200 hover:text-gray-600'
      }`}
    >
      {cat.confidence !== 'high' && (
        <span className="text-xs font-normal">~</span>
      )}
      {cat.days}d
      {I.pencil(
        'w-3 h-3 text-gray-300 group-hover:text-gray-500 transition-colors',
      )}
    </button>
  )
}

function StepHowToTrack({
  categories,
  onUpdateDays,
  onToggleMode,
  onBack,
  onActivate,
  onSkip,
}) {
  const [previewOpen, setPreviewOpen] = useState(false)
  const enabledCategories = categories.filter((c) => c.enabled)
  const trackedProducts = enabledCategories.reduce(
    (s, c) => s + c.productCount,
    0,
  )
  const autoCategories = enabledCategories.filter((c) => c.mode === 'auto')
  const manualCategories = enabledCategories.filter((c) => c.mode === 'manual')

  // Simulated preview batches based on actual enabled categories
  const previewBatches = enabledCategories
    .filter((c) => c.mode === 'auto')
    .slice(0, 4)
    .map((c) => ({
      product:
        c.name === 'Produits Laitiers'
          ? 'Yaourt Grec Nature 500g'
          : c.name === 'Boulangerie'
            ? 'Baguette Tradition'
            : c.name === 'Viandes'
              ? 'Filet de Saumon'
              : c.name === 'Fruits & Légumes'
                ? 'Tomates Bio 500g'
                : c.name === 'Boissons'
                  ? "Jus d'Orange Frais 1L"
                  : c.name === 'Surgelés'
                    ? 'Pizza Surgelée 400g'
                    : `Sample from ${c.name}`,
      category: c.name,
      daysLeft: c.days,
      qty: Math.floor(Math.random() * 30) + 8,
      confidence: c.confidence,
    }))

  // Add a manual example if any categories are manual
  if (manualCategories.length > 0) {
    previewBatches.push({
      product: `Sample from ${manualCategories[0].name}`,
      category: manualCategories[0].name,
      daysLeft: null,
      qty: 15,
      confidence: 'manual',
    })
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1.5">
          How should we track expiration dates?
        </h2>
        <p className="text-sm text-gray-400">
          Set a default shelf life for each category. When deliveries arrive,
          we'll calculate the expiry automatically. Choose "Manual" for
          categories where you'd rather enter dates yourself.
        </p>
      </div>

      {/* Category shelf life list */}
      <div className="space-y-1.5 mb-4">
        {enabledCategories.map((cat) => (
          <div
            key={cat.id}
            className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-white transition-all"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="min-w-0">
                <span className="text-sm font-medium text-gray-900">
                  {cat.name}
                </span>
                <span className="text-xs text-gray-400 ml-2">
                  {cat.productCount} products
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <ShelfLifeChip
                cat={cat}
                onUpdateDays={(days) => onUpdateDays(cat.id, days)}
                onToggleMode={() => onToggleMode(cat.id)}
              />
              {/* Mode toggle dropdown */}
              <div className="relative group">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onToggleMode(cat.id)
                  }}
                  className="p-1.5 rounded-lg text-gray-300 hover:text-gray-500 hover:bg-gray-100 transition-colors"
                  title={
                    cat.mode === 'auto'
                      ? 'Switch to manual entry'
                      : 'Switch to automatic'
                  }
                >
                  {cat.mode === 'auto'
                    ? I.pencil('w-3.5 h-3.5')
                    : I.zap('w-3.5 h-3.5')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mb-6 px-1">
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          {I.zap('w-3 h-3')} = auto-calculate from delivery date
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          {I.pencil('w-3 h-3')} = you'll enter dates per delivery
        </div>
      </div>

      {/* Batch preview — collapsible */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-6">
        <button
          onClick={() => setPreviewOpen(!previewOpen)}
          className="w-full px-4 py-3 flex items-center justify-between group"
        >
          <div className="flex items-center gap-2.5">
            <div className="bg-gray-100 p-1.5 rounded-lg group-hover:bg-gray-200 transition-colors">
              {I.eye('w-3.5 h-3.5 text-gray-400')}
            </div>
            <span className="text-sm font-medium text-gray-600">
              Preview your dashboard
            </span>
          </div>
          <div
            className={`transition-transform duration-200 ${previewOpen ? 'rotate-180' : ''}`}
          >
            {I.chevronDown('w-4 h-4 text-gray-400')}
          </div>
        </button>
        {previewOpen && (
          <div className="border-t border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Est. Expiry</th>
                    <th className="px-4 py-2 text-right">Qty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {previewBatches.map((batch, i) => (
                    <tr
                      key={i}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="px-4 py-2.5">
                        <div className="text-sm font-medium text-gray-900">
                          {batch.product}
                        </div>
                        <span className="text-xs text-gray-400">
                          {batch.category}
                        </span>
                      </td>
                      <td className="px-4 py-2.5">
                        {batch.confidence === 'manual' ? (
                          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg bg-gray-50 text-gray-400 border border-dashed border-gray-200">
                            {I.pencil('w-3 h-3')} Set on delivery
                          </span>
                        ) : (
                          <span
                            className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg ${
                              batch.daysLeft <= 3
                                ? 'bg-gray-200 text-gray-900'
                                : batch.daysLeft <= 7
                                  ? 'bg-gray-100 text-gray-700'
                                  : 'bg-gray-50 text-gray-500'
                            }`}
                          >
                            {batch.confidence !== 'high' && '~'}
                            {batch.daysLeft}d from delivery
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2.5 text-sm text-gray-600 text-right tabular-nums">
                        {batch.qty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-2 bg-gray-50/50 border-t border-gray-100">
              <span className="text-xs text-gray-400">
                Sample of {trackedProducts} tracked products · Tilde (~) =
                estimated from default shelf life
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Info box */}
      <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-6">
        {I.info('w-4 h-4 text-gray-400 mt-0.5 shrink-0')}
        <p className="text-xs text-gray-400 leading-relaxed">
          These are starting defaults — your team can adjust any date when
          processing a delivery. You can change all of this later in Settings.
        </p>
      </div>

      {/* Summary + actions */}
      <div className="bg-gray-900 rounded-2xl p-5 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm font-semibold text-white">
              {trackedProducts} products ready
            </div>
            <div className="text-xs text-gray-400 mt-0.5">
              {autoCategories.length} auto-dated · {manualCategories.length}{' '}
              manual
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onActivate}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Activate tracking {I.zap('w-3.5 h-3.5')}
          </button>
          <button
            onClick={onBack}
            className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
          >
            Back
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onSkip}
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
        >
          {I.skipForward('w-3 h-3')} Use all defaults and go to dashboard
        </button>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// ACTIVATING ANIMATION
// ═══════════════════════════════════════════════════════

function ActivatingState({ trackedProducts }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const steps = [
      { delay: 200, value: 15 },
      { delay: 500, value: 40 },
      { delay: 900, value: 65 },
      { delay: 1300, value: 85 },
      { delay: 1700, value: 100 },
    ]
    const timers = steps.map((s) =>
      setTimeout(() => setProgress(s.value), s.delay),
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="text-center py-16">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-2xl mb-5 animate-pulse">
        {I.zap('w-7 h-7 text-gray-400')}
      </div>
      <h2 className="text-lg font-bold text-gray-900 mb-2">
        Creating your batches...
      </h2>
      <p className="text-sm text-gray-400 max-w-sm mx-auto mb-6">
        Setting up expiry tracking for {trackedProducts} products.
      </p>
      <div className="max-w-xs mx-auto">
        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gray-900 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-gray-400">Importing catalog</span>
          <span className="text-xs text-gray-400">{progress}%</span>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// SUCCESS
// ═══════════════════════════════════════════════════════

function StepSuccess({ categories }) {
  const tracked = categories.filter((c) => c.enabled)
  const trackedProducts = tracked.reduce((s, c) => s + c.productCount, 0)
  const autoMatched = tracked.filter((c) => c.mode === 'auto')
  const manual = tracked.filter((c) => c.mode === 'manual')

  const [showChecks, setShowChecks] = useState([false, false, false])

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
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const steps = [
    {
      label: 'Square catalog synced',
      detail: `${trackedProducts} products imported`,
    },
    {
      label: 'Shelf life rules applied',
      detail: `${autoMatched.length} auto, ${manual.length} manual`,
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
        Your dashboard is live with {trackedProducts} tracked products.
      </p>

      <div className="bg-white border border-gray-200 rounded-2xl p-5 text-left max-w-md mx-auto mb-8">
        <div className="space-y-3.5">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 transition-all duration-300 ${showChecks[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            >
              <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
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

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 max-w-md mx-auto mb-8 text-left">
        <p className="text-sm font-medium text-gray-700 mb-2">
          What happens next
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
            <span className="text-gray-300 mt-0.5">•</span>
            <span>
              When your next delivery arrives in Square, LIFO will auto-create
              batches with the shelf lives you just set
            </span>
          </li>
          <li className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
            <span className="text-gray-300 mt-0.5">•</span>
            <span>Adjust any category or shelf life anytime in Settings</span>
          </li>
        </ul>
      </div>

      <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors text-sm">
        Go to Dashboard {I.arrowRight('w-4 h-4')}
      </button>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// MOBILE NAV
// ═══════════════════════════════════════════════════════

function MobileStepBar({ step, completedSteps }) {
  const steps = [
    { id: 0, label: 'Square connected' },
    { id: 1, label: 'What to track' },
    { id: 2, label: 'How to track' },
  ]

  return (
    <div className="md:hidden bg-white border-b border-gray-200 px-4 py-2.5">
      <div className="flex items-center gap-2">
        {steps.map((s, i) => {
          const isComplete = completedSteps.includes(s.id)
          const isCurrent = step === s.id
          return (
            <div
              key={s.id}
              className="flex items-center gap-2"
            >
              {i > 0 && <div className="w-4 h-px bg-gray-200" />}
              <div
                className={`flex items-center gap-1.5 text-xs font-medium ${
                  isCurrent
                    ? 'text-gray-900'
                    : isComplete
                      ? 'text-gray-500'
                      : 'text-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold ${
                    isComplete && !isCurrent
                      ? 'bg-gray-900 text-white'
                      : isCurrent
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {isComplete && !isCurrent ? I.check('w-2.5 h-2.5') : s.id}
                </div>
                <span className="hidden sm:inline">{s.label}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// MAIN LAYOUT
// ═══════════════════════════════════════════════════════

export default function OnboardingSetupV8() {
  // step: 0 = square connected, 1 = what to track, 2 = how to track, 'activating', 'success'
  const [step, setStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState([0])

  const [categories, setCategories] = useState(() =>
    processSquareCatalog(SQUARE_CATALOG),
  )

  const toggleCategory = (id) => {
    setCategories((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c
        const newEnabled = !c.enabled
        return {
          ...c,
          enabled: newEnabled,
          mode: newEnabled ? (c.isFood ? 'auto' : 'auto') : 'off',
        }
      }),
    )
  }

  const updateCategoryDays = (id, days) => {
    setCategories((prev) => prev.map((c) => (c.id === id ? { ...c, days } : c)))
  }

  const toggleMode = (id) => {
    setCategories((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c
        return { ...c, mode: c.mode === 'auto' ? 'manual' : 'auto' }
      }),
    )
  }

  const goToStep0 = () => {
    setStep(0)
  }

  const goToStep1 = () => {
    setStep(1)
  }

  const goToStep2 = () => {
    setCompletedSteps((prev) => (prev.includes(1) ? prev : [...prev, 1]))
    setStep(2)
  }

  const handleActivate = () => {
    setCompletedSteps((prev) => (prev.includes(2) ? prev : [...prev, 2]))
    setStep('activating')
    setTimeout(() => setStep('success'), 2200)
  }

  const handleSkip = () => {
    setCompletedSteps([0, 1, 2])
    setStep('activating')
    setTimeout(() => setStep('success'), 2200)
  }

  const handleStepClick = (s) => {
    if (s === 0) goToStep0()
    if (s === 1) goToStep1()
    if (s === 2) goToStep2()
  }

  const tracked = categories.filter((c) => c.enabled)
  const trackedProducts = tracked.reduce((s, c) => s + c.productCount, 0)

  const renderPanel = () => {
    switch (step) {
      case 0:
        return <StepSquareConnected onNext={goToStep1} />
      case 1:
        return (
          <StepWhatToTrack
            categories={categories}
            onToggle={toggleCategory}
            onNext={goToStep2}
          />
        )
      case 2:
        return (
          <StepHowToTrack
            categories={categories}
            onUpdateDays={updateCategoryDays}
            onToggleMode={toggleMode}
            onBack={goToStep1}
            onActivate={handleActivate}
            onSkip={handleSkip}
          />
        )
      case 'activating':
        return <ActivatingState trackedProducts={trackedProducts} />
      case 'success':
        return <StepSuccess categories={categories} />
      default:
        return null
    }
  }

  const isStepPhase = step === 0 || step === 1 || step === 2

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">L</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">LIFO</span>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              {I.store('w-3.5 h-3.5 text-gray-400')}
              <span className="text-xs text-gray-400">
                {SQUARE_CATALOG.storeName}
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded hidden sm:inline">
            Wireframe v8
          </span>
        </div>
      </div>

      {/* Mobile step bar */}
      {isStepPhase && (
        <MobileStepBar
          step={step}
          completedSteps={completedSteps}
        />
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {isStepPhase ? (
          /* Desktop: sidebar + content */
          <div className="hidden md:grid md:grid-cols-[200px_1fr] gap-8">
            <div className="self-start sticky top-20">
              <Sidebar
                step={step}
                completedSteps={completedSteps}
                onStepClick={handleStepClick}
              />

              {/* Square sync indicator */}
              <div className="mt-6 px-3">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  <span>Square connected</span>
                </div>
                <div className="text-[10px] text-gray-300 mt-1 pl-3.5">
                  {TOTAL_PRODUCTS} products · {SQUARE_CATALOG.categories.length}{' '}
                  categories
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                {renderPanel()}
              </div>
            </div>
          </div>
        ) : (
          /* Activating / Success — full width, centered */
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              {renderPanel()}
            </div>
          </div>
        )}

        {/* Mobile: just the panel */}
        {isStepPhase && (
          <div className="md:hidden">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
              {renderPanel()}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
