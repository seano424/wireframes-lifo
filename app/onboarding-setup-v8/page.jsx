'use client'

import { useState, useEffect, useRef } from 'react'

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
  helpCircle: (c) => (
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
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line
        x1="12"
        y1="17"
        x2="12.01"
        y2="17"
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
}

// ═══════════════════════════════════════════════════════
// FUZZY MATCHING ENGINE
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
      'organic veg',
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
// SIMULATED SQUARE CATALOG
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
      source: 'square',
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
      source: 'uncategorized',
    })
  }

  return processed
}

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

function ConfidenceBadge({ confidence, matchLabel }) {
  if (confidence === 'high') {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500">
        {I.check('w-2.5 h-2.5')} Matched: {matchLabel}
      </span>
    )
  }
  if (confidence === 'low') {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-400 border border-dashed border-gray-200">
        {I.clock('w-2.5 h-2.5')} 14d default — refine anytime
      </span>
    )
  }
  if (confidence === 'none') {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-400 border border-dashed border-gray-200">
        {I.package('w-2.5 h-2.5')} No category — 14d default
      </span>
    )
  }
  return null
}

// ═══════════════════════════════════════════════════════
// CATEGORY ROW
// ═══════════════════════════════════════════════════════

function CategoryRow({ category, onToggle, onUpdateDays }) {
  const [editingDays, setEditingDays] = useState(false)
  const [tempDays, setTempDays] = useState(category.days)

  const commitDays = () => {
    onUpdateDays(parseInt(tempDays) || DEFAULT_SHELF_LIFE)
    setEditingDays(false)
  }

  const isNonFood = !category.isFood && !category.enabled

  return (
    <div
      className={`border rounded-xl transition-all duration-200 ${
        category.enabled
          ? 'border-gray-200 bg-white shadow-sm'
          : 'border-gray-100 bg-gray-50/50'
      }`}
    >
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Toggle
            enabled={category.enabled}
            onChange={onToggle}
            size="small"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-sm font-medium ${category.enabled ? 'text-gray-900' : 'text-gray-400'}`}
              >
                {category.name}
              </span>
              <ConfidenceBadge
                confidence={category.confidence}
                matchLabel={category.matchLabel}
              />
            </div>
            <span
              className={`text-xs ${category.enabled ? 'text-gray-400' : 'text-gray-300'}`}
            >
              {category.productCount} product
              {category.productCount !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {category.enabled && (
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
                <span
                  className={`text-sm font-semibold ${category.confidence === 'high' ? 'text-gray-700' : 'text-gray-400'}`}
                >
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

        {isNonFood && !category.enabled && (
          <span className="text-xs text-gray-300 italic flex-shrink-0">
            No expiry tracking
          </span>
        )}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// STEP 1: REVIEW & CONFIRM (merged categories + preview)
// ═══════════════════════════════════════════════════════

function StepReviewAndConfirm({
  categories,
  onToggle,
  onUpdateDays,
  onActivate,
  onSkip,
}) {
  const tracked = categories.filter((c) => c.enabled)
  const trackedProducts = tracked.reduce((s, c) => s + c.productCount, 0)
  const totalProducts = categories.reduce((s, c) => s + c.productCount, 0)
  const highConfidence = categories.filter((c) => c.confidence === 'high')
  const needsReview = categories.filter(
    (c) => c.confidence !== 'high' && c.enabled,
  )

  const matchedCategories = categories.filter(
    (c) => c.confidence === 'high' && c.isFood,
  )
  const unmatchedCategories = categories.filter(
    (c) =>
      (c.confidence === 'low' || c.confidence === 'none') &&
      c.source !== 'uncategorized',
  )
  const uncategorizedGroup = categories.find(
    (c) => c.source === 'uncategorized',
  )
  const nonFoodCategories = categories.filter((c) => !c.isFood)

  const autoMatchedProducts = tracked
    .filter((c) => c.confidence === 'high')
    .reduce((s, c) => s + c.productCount, 0)
  const defaultedProducts = trackedProducts - autoMatchedProducts

  // Simulated preview batches
  const previewBatches = [
    {
      product: 'Yaourt Grec Nature 500g',
      category: 'Produits Laitiers',
      estimatedExpiry: 'Feb 13, 2026',
      daysLeft: 7,
      qty: 36,
      confidence: 'high',
    },
    {
      product: 'Baguette Tradition',
      category: 'Boulangerie',
      estimatedExpiry: 'Feb 9, 2026',
      daysLeft: 3,
      qty: 24,
      confidence: 'high',
    },
    {
      product: 'Filet de Saumon',
      category: 'Viandes',
      estimatedExpiry: 'Feb 10, 2026',
      daysLeft: 4,
      qty: 8,
      confidence: 'high',
    },
    {
      product: 'Chips Artisanales 150g',
      category: 'Promotions',
      estimatedExpiry: 'Feb 20, 2026',
      daysLeft: 14,
      qty: 20,
      confidence: 'low',
    },
    {
      product: 'Confiture de Fraises',
      category: 'Rayon 3',
      estimatedExpiry: 'Feb 20, 2026',
      daysLeft: 14,
      qty: 15,
      confidence: 'low',
    },
  ]

  const previewRef = useRef(null)

  return (
    <div>
      {/* Hero */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-2xl mb-4">
          {I.sparkles('w-6 h-6 text-white')}
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          We found {totalProducts} products in your Square catalog
        </h1>
        <p className="text-sm text-gray-400 max-w-lg mx-auto">
          We matched {highConfidence.length} of your categories to shelf-life
          defaults automatically.
          {needsReview.length > 0 &&
            ` ${needsReview.length} couldn't be matched and use a safe 14-day default — they'll work fine, you can refine later.`}
        </p>
      </div>

      {/* Summary bar */}
      <div className="bg-gray-900 text-white rounded-2xl px-5 py-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-2 rounded-xl flex-shrink-0">
              {I.shieldCheck('w-5 h-5')}
            </div>
            <div>
              <div className="text-sm font-semibold">
                {trackedProducts} of {totalProducts} products will be tracked
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                {highConfidence.filter((c) => c.enabled).length} auto-matched ·{' '}
                {needsReview.length} using 14d default
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-lg font-bold">{autoMatchedProducts}</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider">
                Smart-dated
              </div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="text-right hidden sm:block">
              <div className="text-lg font-bold">{defaultedProducts}</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider">
                14d default
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ——— CATEGORIES SECTION ——— */}

      {/* Matched categories */}
      {matchedCategories.length > 0 && (
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2.5 px-1">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Auto-matched categories
            </h3>
            <span className="text-[10px] text-gray-400 font-normal normal-case">
              — shelf lives pre-filled
            </span>
          </div>
          <div className="space-y-1.5">
            {matchedCategories.map((cat) => (
              <CategoryRow
                key={cat.id}
                category={cat}
                onToggle={() => onToggle(cat.id)}
                onUpdateDays={(days) => onUpdateDays(cat.id, days)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Unmatched categories — reframed language */}
      {unmatchedCategories.length > 0 && (
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2.5 px-1">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Couldn't auto-match
            </h3>
            <span className="text-[10px] text-gray-400 font-normal normal-case">
              — using 14-day default, works fine as-is
            </span>
          </div>
          <div className="space-y-1.5">
            {unmatchedCategories.map((cat) => (
              <CategoryRow
                key={cat.id}
                category={cat}
                onToggle={() => onToggle(cat.id)}
                onUpdateDays={(days) => onUpdateDays(cat.id, days)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Uncategorized products */}
      {uncategorizedGroup && (
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2.5 px-1">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              No category in Square
            </h3>
            <span className="text-[10px] text-gray-400 font-normal normal-case">
              — {uncategorizedGroup.productCount} products, 14-day default
            </span>
          </div>
          <div className="space-y-1.5">
            <CategoryRow
              category={uncategorizedGroup}
              onToggle={() => onToggle(uncategorizedGroup.id)}
              onUpdateDays={(days) => onUpdateDays(uncategorizedGroup.id, days)}
            />
          </div>
        </div>
      )}

      {/* Non-food categories */}
      {nonFoodCategories.length > 0 && (
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2.5 px-1">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Not tracked
            </h3>
            <span className="text-[10px] text-gray-400 font-normal normal-case">
              — detected as non-food
            </span>
          </div>
          <div className="space-y-1.5">
            {nonFoodCategories.map((cat) => (
              <CategoryRow
                key={cat.id}
                category={cat}
                onToggle={() => onToggle(cat.id)}
                onUpdateDays={(days) => onUpdateDays(cat.id, days)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Shelf life explainer */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-8">
        <div className="flex items-start gap-3">
          {I.info('w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0')}
          <div>
            <p className="text-sm text-gray-600 font-medium mb-1">
              How default shelf life works
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              When a delivery arrives from Square, Lifo suggests an expiry date:
              delivery date + shelf life = estimated expiry. Your team can
              adjust any date — these defaults are a starting point, not a hard
              rule.
            </p>
          </div>
        </div>
      </div>

      {/* ——— BATCH PREVIEW SECTION (merged from old step 2) ——— */}
      <div ref={previewRef}>
        <div className="flex items-center gap-2 mb-3 px-1">
          <div className="bg-gray-900 p-1.5 rounded-lg">
            {I.eye('w-3.5 h-3.5 text-white')}
          </div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Batch preview
          </h3>
          <span className="text-[10px] text-gray-400 font-normal normal-case">
            — a sample of what your dashboard will look like
          </span>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden mb-4">
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
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-xs text-gray-400">
                          {batch.category}
                        </span>
                        {batch.confidence === 'low' && (
                          <span className="text-[9px] px-1 py-0.5 rounded bg-gray-50 text-gray-400 border border-dashed border-gray-200">
                            ~estimated
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm text-gray-600">
                          {batch.confidence === 'low' ? '~' : ''}
                          {batch.estimatedExpiry}
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
                        {batch.confidence === 'low' ? '~' : ''}
                        {batch.daysLeft}d
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
          <div className="px-5 py-2.5 bg-gray-50/50 border-t border-gray-100">
            <span className="text-xs text-gray-400">
              Showing 5 of {trackedProducts} products · Tilde (~) means
              estimated from shelf-life default
            </span>
          </div>
        </div>
      </div>

      {/* ——— FOOTER CTAs ——— */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <button
          onClick={onActivate}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors text-sm w-full sm:w-auto justify-center"
        >
          Activate Tracking
          {I.zap('w-4 h-4')}
        </button>
        <button
          onClick={onSkip}
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
        >
          {I.skipForward('w-3 h-3')}
          Use all defaults and go to dashboard
        </button>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// STEP 2: ACTIVATING ANIMATION
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

      {/* Progress bar */}
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
// STEP 3: SUCCESS
// ═══════════════════════════════════════════════════════

function StepSuccess({ categories }) {
  const tracked = categories.filter((c) => c.enabled)
  const trackedProducts = tracked.reduce((s, c) => s + c.productCount, 0)
  const autoMatched = tracked.filter((c) => c.confidence === 'high')
  const defaulted = tracked.filter((c) => c.confidence !== 'high')

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
      label: 'Categories classified',
      detail: `${autoMatched.length} matched, ${defaulted.length} defaulted`,
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

      {/* Checklist */}
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

      {/* What's next — trimmed to 2 bullets */}
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
            <span>Adjust any category or shelf life anytime in Settings</span>
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
// MAIN FLOW
// ═══════════════════════════════════════════════════════

export default function OnboardingSetupFlowV8() {
  // step 0 = review & confirm
  // step 1 = activating animation
  // step 2 = success
  const [step, setStep] = useState(0)

  const [categories, setCategories] = useState(() =>
    processSquareCatalog(SQUARE_CATALOG),
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
    setStep(1)
    setTimeout(() => setStep(2), 2200)
  }

  const handleSkip = () => {
    // Skip uses all defaults and goes straight through
    setStep(1)
    setTimeout(() => setStep(2), 2200)
  }

  const tracked = categories.filter((c) => c.enabled)
  const trackedProducts = tracked.reduce((s, c) => s + c.productCount, 0)

  // Map step to progress dot index
  const progressIndex = step === 0 ? 0 : step === 1 ? 0 : 1

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
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
          <ProgressDots
            current={progressIndex}
            total={2}
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        {step === 0 && (
          <StepReviewAndConfirm
            categories={categories}
            onToggle={toggleCategory}
            onUpdateDays={updateCategoryDays}
            onActivate={handleActivate}
            onSkip={handleSkip}
          />
        )}

        {step === 1 && <ActivatingState trackedProducts={trackedProducts} />}
        {step === 2 && <StepSuccess categories={categories} />}
      </div>
    </div>
  )
}
