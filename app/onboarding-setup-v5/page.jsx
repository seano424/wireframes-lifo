// v5 of the onboarding setup

'use client'

import { useState } from 'react'

// ——— Inline SVG Icons ———————————————————————————————
const I = {
  check: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  chevronDown: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  chevronLeft: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),
  plus: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  x: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  layers: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  calendar: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  bell: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  info: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  undo: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
    </svg>
  ),
  sparkles: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  ),
  square: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  ),
  package: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 9.4 7.55 4.24" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  arrowRight: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  edit: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  ),
}

// ——— Mock Data (simulating what Square sync returns) ——

const SYNCED_CATEGORIES = [
  { id: 'dairy', name: 'Dairy & Eggs', count: 24, defaultDays: 7 },
  { id: 'bakery', name: 'Bakery', count: 18, defaultDays: 3 },
  { id: 'produce', name: 'Fresh Produce', count: 31, defaultDays: 5 },
  { id: 'meat', name: 'Meat & Seafood', count: 15, defaultDays: 4 },
  { id: 'beverages', name: 'Beverages', count: 22, defaultDays: 14 },
  { id: 'snacks', name: 'Snacks & Confectionery', count: 19, defaultDays: 30 },
  { id: 'canned', name: 'Canned Goods', count: 12, defaultDays: 365 },
  { id: 'frozen', name: 'Frozen Foods', count: 8, defaultDays: 90 },
]

const SYNCED_PRODUCTS = [
  { id: 1, name: 'Organic Whole Milk 1L', category: 'Dairy & Eggs', categoryId: 'dairy', qty: 24 },
  { id: 2, name: 'Free Range Eggs 12pk', category: 'Dairy & Eggs', categoryId: 'dairy', qty: 36 },
  { id: 3, name: 'Sourdough Bread 400g', category: 'Bakery', categoryId: 'bakery', qty: 12 },
  { id: 4, name: 'Greek Yogurt 500g', category: 'Dairy & Eggs', categoryId: 'dairy', qty: 18 },
  { id: 5, name: 'Fresh Orange Juice 1L', category: 'Beverages', categoryId: 'beverages', qty: 30 },
  { id: 6, name: 'Sliced Ham 200g', category: 'Meat & Seafood', categoryId: 'meat', qty: 15 },
  { id: 7, name: 'Croissants 4pk', category: 'Bakery', categoryId: 'bakery', qty: 20 },
  { id: 8, name: 'Butter Unsalted 250g', category: 'Dairy & Eggs', categoryId: 'dairy', qty: 40 },
]

const STORE_NAME = "Organic Corner Market"
const TOTAL_PRODUCTS = SYNCED_CATEGORIES.reduce((s, c) => s + c.count, 0)

// ——— Shared UI Primitives ————————————————————————————

function Toggle({ enabled, onChange, size = 'default' }) {
  const w = size === 'small' ? 32 : 40
  const h = size === 'small' ? 18 : 22
  const dot = size === 'small' ? 14 : 18
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onChange() }}
      className={`relative rounded-full transition-colors duration-200 shrink-0 ${enabled ? 'bg-gray-900' : 'bg-gray-200'}`}
      style={{ width: w, height: h }}
    >
      <div
        className="absolute bg-white rounded-full shadow-sm transition-transform duration-200"
        style={{ width: dot, height: dot, top: 2, transform: enabled ? `translateX(${w - dot - 2}px)` : 'translateX(2px)' }}
      />
    </button>
  )
}

function Checkbox({ checked, onChange }) {
  return (
    <div
      onClick={(e) => { e.stopPropagation(); onChange() }}
      className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors cursor-pointer shrink-0 ${checked ? 'bg-gray-900 border-gray-900' : 'border-gray-300 hover:border-gray-400'}`}
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
          <button onClick={onDiscard} className="text-sm px-3 py-1.5 text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1.5">
            {I.undo('w-3 h-3')} Discard
          </button>
          <button onClick={onSave} className="text-sm font-semibold px-4 py-1.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// SIDEBAR NAV
// ═══════════════════════════════════════════════════════

function SidebarNav({ activeSection, onSelect, summaries }) {
  const sections = [
    { id: 'overview', icon: 'sparkles', label: "What we found" },
    { id: 'tracking', icon: 'layers', label: 'What to Track', summary: summaries.tracking },
    { id: 'automation', icon: 'calendar', label: 'Shelf Life Rules', summary: summaries.automation },
    { id: 'notifications', icon: 'bell', label: 'Notifications', badge: 'Soon', disabled: true },
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
            className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-3 transition-all duration-150 group ${isActive ? 'bg-gray-900 text-white shadow-sm' : s.disabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
          >
            <div className={`p-1.5 rounded-lg shrink-0 transition-colors ${isActive ? 'bg-white/15' : s.disabled ? 'bg-gray-50' : 'bg-gray-100 group-hover:bg-gray-200/70'}`}>
              {I[s.icon](`w-3.5 h-3.5 ${isActive ? 'text-white' : s.disabled ? 'text-gray-300' : 'text-gray-500'}`)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium truncate ${isActive ? 'text-white' : ''}`}>{s.label}</span>
                {s.badge && (
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white/80' : 'bg-gray-100 text-gray-400'}`}>{s.badge}</span>
                )}
              </div>
              {s.summary && (
                <span className={`text-xs truncate block mt-0.5 ${isActive ? 'text-white/60' : 'text-gray-400'}`}>{s.summary}</span>
              )}
            </div>
          </button>
        )
      })}
    </nav>
  )
}

// ═══════════════════════════════════════════════════════
// OVERVIEW — "Here's what we found"
// ═══════════════════════════════════════════════════════

function OverviewPanel({ onNavigate, categories, automationCategories, automationProducts, onCreateBatches, batchesCreated }) {
  const [howItWorksOpen, setHowItWorksOpen] = useState(false)

  const trackedCategories = categories.filter(c => c.enabled)
  const trackedProducts = trackedCategories.reduce((s, c) => s + c.count, 0)
  const enabledRules = automationCategories.filter(c => c.enabled)

  return (
    <div>
      {/* Header — the discovery moment */}
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="bg-gray-900 p-1.5 rounded-lg">
            {I.sparkles('w-4 h-4 text-white')}
          </div>
          <h2 className="text-lg font-bold text-gray-900">Here's what we found</h2>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          We synced <span className="font-medium text-gray-600">{TOTAL_PRODUCTS} products</span> across <span className="font-medium text-gray-600">{SYNCED_CATEGORIES.length} categories</span> from your Square catalog. Everything is pre-configured with industry-standard shelf lives — review below and adjust anything that doesn't look right.
        </p>
      </div>

      {/* Square sync confirmation */}
      <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-5">
        <div className="bg-white p-1.5 rounded-lg border border-gray-100">
          {I.square('w-4 h-4 text-gray-500')}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-gray-700">{STORE_NAME}</div>
          <div className="text-xs text-gray-400">Synced from Square · {TOTAL_PRODUCTS} products · {SYNCED_CATEGORIES.length} categories</div>
        </div>
        <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-2.5 py-1">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
          <span className="text-xs font-medium text-gray-600">Connected</span>
        </div>
      </div>

      {/* Categories & shelf life preview — the main summary */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-5">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-xl">
              {I.layers('w-4 h-4 text-gray-500')}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Categories & shelf life rules</h3>
              <p className="text-xs text-gray-400 mt-0.5">
                {trackedCategories.length} of {categories.length} tracked · {enabledRules.length} with auto-expiry
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('tracking')}
            className="text-xs font-medium text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            {I.edit('w-3 h-3')} Customize
          </button>
        </div>
        <div className="divide-y divide-gray-50">
          {categories.map((cat) => {
            const rule = automationCategories.find(r => r.id === cat.id)
            const overrides = automationProducts.filter(p => p.categoryId === cat.id)
            return (
              <div key={cat.id} className={`px-5 py-3 flex items-center justify-between transition-opacity ${cat.enabled ? '' : 'opacity-35'}`}>
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${cat.enabled ? 'bg-gray-900' : 'bg-gray-300'}`} />
                  <div className="min-w-0">
                    <span className="text-sm text-gray-700 font-medium">{cat.name}</span>
                    <span className="text-xs text-gray-400 ml-2">{cat.count} products</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {overrides.length > 0 && (
                    <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                      {overrides.length} override{overrides.length > 1 ? 's' : ''}
                    </span>
                  )}
                  {rule && rule.enabled && cat.enabled ? (
                    <span className="text-sm font-semibold text-gray-900 tabular-nums w-16 text-right">{rule.days}d</span>
                  ) : cat.enabled ? (
                    <span className="text-xs text-gray-400 italic w-16 text-right">manual</span>
                  ) : (
                    <span className="text-xs text-gray-300 w-16 text-right">—</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Product overrides preview */}
      {automationProducts.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-5">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-xl">
                {I.package('w-4 h-4 text-gray-500')}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Product-level overrides</h3>
                <p className="text-xs text-gray-400 mt-0.5">{automationProducts.length} products with custom shelf life</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('automation')}
              className="text-xs font-medium text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-1"
            >
              {I.edit('w-3 h-3')} Edit
            </button>
          </div>
          <div className="divide-y divide-gray-50">
            {automationProducts.map(p => (
              <div key={p.id} className="px-5 py-2.5 flex items-center justify-between">
                <div className="min-w-0">
                  <span className="text-sm text-gray-700">{p.name}</span>
                  <span className="text-xs text-gray-400 ml-2">{p.category}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900 shrink-0">{p.days}d</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA — the payoff moment */}
      <div className={`border rounded-2xl transition-all ${batchesCreated ? 'bg-gray-50 border-gray-200 p-5' : 'bg-gray-900 border-gray-900 p-5'}`}>
        {batchesCreated ? (
          <div className="flex items-center gap-3">
            <div className="bg-gray-900 p-2 rounded-xl shrink-0">
              {I.check('w-4 h-4 text-white')}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900">Batches created</h3>
              <p className="text-xs text-gray-400 mt-0.5">
                {trackedProducts} products now have estimated expiry dates. Head to your dashboard to start tracking.
              </p>
            </div>
            <button className="text-sm font-semibold px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-2 shrink-0">
              Dashboard {I.arrowRight('w-3.5 h-3.5')}
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-white/10 p-2 rounded-xl shrink-0">
                {I.package('w-4 h-4 text-white')}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Ready to create your batches</h3>
                <p className="text-xs text-white/50 mt-1 leading-relaxed">
                  We'll create batches from your current Square inventory using the shelf life rules above. Estimated expiry dates are calculated from when products entered your system — you can always adjust them later.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onCreateBatches}
                className="bg-white text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                Create my batches {I.arrowRight('w-3.5 h-3.5')}
              </button>
              <span className="text-xs text-white/40">
                {trackedProducts} products · {trackedCategories.length} categories
              </span>
            </div>
          </div>
        )}
      </div>

      {/* How it works — collapsed by default */}
      <div className="mt-5 bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <button
          onClick={() => setHowItWorksOpen(!howItWorksOpen)}
          className="w-full px-5 py-3.5 flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-1.5 rounded-lg group-hover:bg-gray-200/70 transition-colors">
              {I.info('w-3.5 h-3.5 text-gray-400')}
            </div>
            <span className="text-sm font-medium text-gray-500">How does this work?</span>
          </div>
          <div className={`transition-transform duration-200 ${howItWorksOpen ? 'rotate-180' : ''}`}>
            {I.chevronDown('w-4 h-4 text-gray-400')}
          </div>
        </button>
        {howItWorksOpen && (
          <div className="px-5 pb-5 pt-0 border-t border-gray-100">
            <div className="space-y-4 pt-4">
              {[
                { n: '1', t: 'We sync your catalog', d: 'Products and categories are imported from Square automatically.' },
                { n: '2', t: 'Shelf life rules create batches', d: 'When inventory arrives (or from your current stock), we estimate expiry dates using your rules. You can always override them.' },
                { n: '3', t: 'FIFO tracks what sells', d: "We apply first-in, first-out logic to your Square sales. You'll see which batches are moving and which are sitting." },
                { n: '4', t: 'Get insights that matter', d: "See what's expiring, what to discount, and what to donate — before it's too late." },
              ].map(item => (
                <div key={item.n} className="flex items-start gap-3">
                  <span className="text-sm font-semibold text-gray-300 shrink-0 w-5">{item.n}.</span>
                  <div>
                    <p className="text-sm font-medium text-gray-700">{item.t}</p>
                    <p className="text-xs text-gray-400 leading-relaxed mt-0.5">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// WHAT TO TRACK — Simple toggle list (not radio cards)
// ═══════════════════════════════════════════════════════

function TrackingPanel({ categories, setCategories }) {
  const trackedCount = categories.filter(c => c.enabled).reduce((s, c) => s + c.count, 0)
  const trackedCats = categories.filter(c => c.enabled).length

  const toggleCategory = (id) => {
    setCategories(categories.map(c => c.id === id ? { ...c, enabled: !c.enabled } : c))
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900">What to Track</h2>
        <p className="text-sm text-gray-400 mt-1 leading-relaxed">
          We pre-selected all food categories from your Square catalog. Toggle off anything you don't need to track.
        </p>
      </div>

      {/* Tip banner */}
      <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-5">
        {I.info('w-4 h-4 text-gray-400 mt-0.5 shrink-0')}
        <p className="text-xs text-gray-500 leading-relaxed">
          <span className="font-medium text-gray-700">Tip:</span> Start with everything enabled. You can narrow it down later once you see which categories give you the most useful insights.
        </p>
      </div>

      {/* Category toggle list */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Category</span>
          <div className="flex items-center gap-6">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Products</span>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider w-12 text-center">Track</span>
          </div>
        </div>
        <div className="divide-y divide-gray-50">
          {categories.map(cat => (
            <div key={cat.id} className={`px-5 py-3.5 flex items-center justify-between transition-all duration-200 ${cat.enabled ? '' : 'opacity-40'}`}>
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-2 h-2 rounded-full shrink-0 transition-colors ${cat.enabled ? 'bg-gray-900' : 'bg-gray-300'}`} />
                <span className={`text-sm font-medium transition-colors ${cat.enabled ? 'text-gray-900' : 'text-gray-400'}`}>{cat.name}</span>
              </div>
              <div className="flex items-center gap-6 shrink-0">
                <span className="text-sm text-gray-400 tabular-nums">{cat.count}</span>
                <div className="w-12 flex justify-center">
                  <Toggle enabled={cat.enabled} onChange={() => toggleCategory(cat.id)} size="small" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="mt-4 flex items-center justify-between px-1">
        <span className="text-xs text-gray-400">
          Tracking <span className="font-medium text-gray-600">{trackedCount} products</span> across <span className="font-medium text-gray-600">{trackedCats} categories</span>
        </span>
        <button
          onClick={() => setCategories(categories.map(c => ({ ...c, enabled: true })))}
          className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors"
        >
          Enable all
        </button>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// SHELF LIFE RULES — Pre-filled, correction mode
// ═══════════════════════════════════════════════════════

function AutomationPanel({ categories, automationCategories, setAutomationCategories, automationProducts, setAutomationProducts }) {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [newProductId, setNewProductId] = useState('')
  const [newProductDays, setNewProductDays] = useState(7)

  const enabledCategories = categories.filter(c => c.enabled)

  const toggleCategoryEnabled = (id) => {
    setAutomationCategories(automationCategories.map(c => c.id === id ? { ...c, enabled: !c.enabled } : c))
  }
  const updateCategoryDays = (id, days) => {
    setAutomationCategories(automationCategories.map(c => c.id === id ? { ...c, days: parseInt(days) || 1 } : c))
  }

  const addProduct = () => {
    if (!newProductId) return
    const product = SYNCED_PRODUCTS.find(p => p.id === parseInt(newProductId))
    if (!product) return
    setAutomationProducts([...automationProducts, { id: product.id, name: product.name, category: product.category, categoryId: product.categoryId, days: newProductDays }])
    setNewProductId('')
    setNewProductDays(7)
    setShowAddProduct(false)
  }

  const removeProduct = (id) => {
    setAutomationProducts(automationProducts.filter(p => p.id !== id))
  }

  const availableProducts = SYNCED_PRODUCTS.filter(p => !automationProducts.find(ap => ap.id === p.id))
  const enabledRules = automationCategories.filter(c => c.enabled)

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900">Shelf Life Rules</h2>
        <p className="text-sm text-gray-400 mt-1 leading-relaxed">
          We've pre-filled industry-standard shelf lives for each category. Adjust the number of days for your store, or disable auto-expiry for categories you'd rather enter manually.
        </p>
      </div>

      {/* Category rules */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-5">
        <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Category rules</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">{enabledRules.length} of {automationCategories.length} enabled</span>
            <button
              onClick={() => setAutomationCategories(automationCategories.map(c => ({ ...c, enabled: true })))}
              className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors ml-2"
            >
              Enable all
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-50">
          {automationCategories.map(cat => {
            const isTracked = enabledCategories.some(c => c.id === cat.id)
            return (
              <div key={cat.id} className={`px-5 py-3 flex items-center justify-between transition-all duration-200 ${!isTracked ? 'opacity-25' : cat.enabled ? '' : 'opacity-50'}`}>
                <div className="flex items-center gap-3 min-w-0">
                  <Toggle
                    enabled={cat.enabled && isTracked}
                    onChange={() => isTracked && toggleCategoryEnabled(cat.id)}
                    size="small"
                  />
                  <span className={`text-sm transition-colors ${cat.enabled && isTracked ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>{cat.name}</span>
                  {!isTracked && <span className="text-[10px] text-gray-300 italic ml-1">not tracked</span>}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <input
                    type="number"
                    min="1"
                    value={cat.days}
                    onChange={(e) => updateCategoryDays(cat.id, e.target.value)}
                    disabled={!cat.enabled || !isTracked}
                    onClick={(e) => e.stopPropagation()}
                    className={`w-16 text-sm text-right px-2 py-1.5 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 ${
                      cat.enabled && isTracked ? 'bg-white border-gray-200 text-gray-900' : 'bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed'
                    }`}
                  />
                  <span className={`text-xs w-8 ${cat.enabled && isTracked ? 'text-gray-500' : 'text-gray-300'}`}>days</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Product overrides */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Product overrides</span>
          <span className="text-xs text-gray-400 ml-2">— these replace the category rule for specific items</span>
        </div>

        {automationProducts.length > 0 && (
          <div className="divide-y divide-gray-50">
            {automationProducts.map(p => (
              <div key={p.id} className="px-5 py-2.5 flex items-center justify-between group">
                <div className="min-w-0">
                  <span className="text-sm font-medium text-gray-700">{p.name}</span>
                  <span className="text-xs text-gray-400 ml-2">{p.category}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-sm font-semibold text-gray-900">{p.days}d</span>
                  <button
                    onClick={() => removeProduct(p.id)}
                    className="p-1 rounded hover:bg-gray-100 text-gray-300 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-all"
                  >
                    {I.x('w-3.5 h-3.5')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={`px-5 py-3 ${automationProducts.length > 0 ? 'border-t border-gray-100' : ''}`}>
          {showAddProduct ? (
            <div className="flex items-end gap-2">
              <div className="flex-1">
                <label className="text-xs font-medium text-gray-500 mb-1 block">Product</label>
                <select
                  value={newProductId}
                  onChange={(e) => setNewProductId(e.target.value)}
                  className="w-full text-sm px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
                >
                  <option value="">Select a product...</option>
                  {availableProducts.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>
              <div className="w-20">
                <label className="text-xs font-medium text-gray-500 mb-1 block">Days</label>
                <input
                  type="number" min="1" value={newProductDays}
                  onChange={(e) => setNewProductDays(parseInt(e.target.value) || 1)}
                  className="w-full text-sm px-2 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
              </div>
              <button onClick={addProduct} disabled={!newProductId} className="px-3 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">Add</button>
              <button onClick={() => setShowAddProduct(false)} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">{I.x('w-4 h-4')}</button>
            </div>
          ) : (
            <button onClick={() => setShowAddProduct(true)} className="text-sm text-gray-500 hover:text-gray-900 font-medium flex items-center gap-1.5 transition-colors">
              {I.plus('w-3.5 h-3.5')} Add product override
            </button>
          )}
        </div>
      </div>

      {/* Help text */}
      <div className="mt-5 flex items-start gap-3 px-1">
        {I.info('w-4 h-4 text-gray-300 mt-0.5 shrink-0')}
        <p className="text-xs text-gray-400 leading-relaxed">
          When new inventory arrives in Square, Lifo auto-calculates expiry dates using these rules. Categories without rules will prompt for manual date entry. Employees can always override any suggested date.
        </p>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// NOTIFICATIONS (placeholder — unchanged)
// ═══════════════════════════════════════════════════════

function NotificationsPanel() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
        <p className="text-sm text-gray-400 mt-1">Get alerts when batches are approaching expiry.</p>
      </div>
      <div className="bg-white border border-gray-200 border-dashed rounded-2xl p-10 text-center">
        <div className="bg-gray-100 p-3 rounded-2xl inline-flex mb-3">
          {I.bell('w-5 h-5 text-gray-400')}
        </div>
        <p className="text-sm font-medium text-gray-500">Coming soon</p>
        <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto">
          Configure automatic alerts when products reach a certain number of days before expiry. Get discount or donation recommendations at the right time.
        </p>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// MOBILE NAV
// ═══════════════════════════════════════════════════════

function MobileNav({ activeSection, onBack }) {
  if (activeSection !== null) {
    const labels = { overview: "What we found", tracking: 'What to Track', automation: 'Shelf Life Rules', notifications: 'Notifications' }
    return (
      <div className="md:hidden bg-white border-b border-gray-200 px-4 py-2.5">
        <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
          {I.chevronLeft('w-4 h-4')}
          <span>Setup</span>
          <span className="text-gray-300 mx-1">·</span>
          <span className="font-medium text-gray-900">{labels[activeSection]}</span>
        </button>
      </div>
    )
  }
  return null
}

function MobileOverviewList({ onSelect, summaries }) {
  const sections = [
    { id: 'overview', icon: 'sparkles', label: "What we found", summary: `${TOTAL_PRODUCTS} products synced` },
    { id: 'tracking', icon: 'layers', label: 'What to Track', summary: summaries.tracking },
    { id: 'automation', icon: 'calendar', label: 'Shelf Life Rules', summary: summaries.automation },
    { id: 'notifications', icon: 'bell', label: 'Notifications', summary: 'Coming soon', disabled: true },
  ]

  return (
    <div className="space-y-1.5">
      {sections.map(s => (
        <button
          key={s.id}
          onClick={() => !s.disabled && onSelect(s.id)}
          disabled={s.disabled}
          className={`w-full text-left bg-white border border-gray-200 rounded-xl px-4 py-3.5 flex items-center gap-3 transition-all ${s.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:border-gray-300 hover:shadow-sm'}`}
        >
          <div className="bg-gray-100 p-2 rounded-xl shrink-0">
            {I[s.icon]('w-4 h-4 text-gray-500')}
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-sm font-semibold text-gray-900">{s.label}</span>
            <span className="text-xs text-gray-400 block mt-0.5">{s.summary}</span>
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

export default function LifoOnboardingSetup() {
  const [activeSection, setActiveSection] = useState('overview')
  const [mobileSection, setMobileSection] = useState(null)
  const [batchesCreated, setBatchesCreated] = useState(false)

  // ALL categories pre-enabled — value-first
  const [categories, setCategories] = useState(
    SYNCED_CATEGORIES.map(c => ({ ...c, enabled: true }))
  )

  // ALL category rules pre-enabled with sensible defaults
  const [automationCategories, setAutomationCategories] = useState(
    SYNCED_CATEGORIES.map(c => ({ id: c.id, name: c.name, days: c.defaultDays, enabled: true }))
  )

  // A couple product overrides pre-filled to demonstrate the feature
  const [automationProducts, setAutomationProducts] = useState([
    { id: 1, name: 'Organic Whole Milk 1L', category: 'Dairy & Eggs', categoryId: 'dairy', days: 5 },
    { id: 7, name: 'Croissants 4pk', category: 'Bakery', categoryId: 'bakery', days: 2 },
  ])

  const [isDirty, setIsDirty] = useState(false)
  const markDirty = () => setIsDirty(true)

  const summaries = {
    tracking: `${categories.filter(c => c.enabled).length} of ${categories.length} categories`,
    automation: `${automationCategories.filter(c => c.enabled).length} rules active`,
  }

  const wrapDirty = (fn) => (...args) => { fn(...args); markDirty() }

  const renderPanel = (section) => {
    switch (section) {
      case 'overview':
        return (
          <OverviewPanel
            onNavigate={(s) => { setActiveSection(s); setMobileSection(s) }}
            categories={categories}
            automationCategories={automationCategories}
            automationProducts={automationProducts}
            onCreateBatches={() => setBatchesCreated(true)}
            batchesCreated={batchesCreated}
          />
        )
      case 'tracking':
        return <TrackingPanel categories={categories} setCategories={wrapDirty(setCategories)} />
      case 'automation':
        return (
          <AutomationPanel
            categories={categories}
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
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Wireframe v5</span>
            <div className="w-px h-3 bg-gray-200" />
            <span className="text-xs text-gray-400">Value-First Onboarding</span>
          </div>
          <span className="text-[10px] font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded hidden sm:inline">/onboarding/setup</span>
        </div>
      </div>

      <MobileNav activeSection={mobileSection} onBack={() => setMobileSection(null)} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Page header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-xl font-bold text-gray-900">Set up your batch tracking</h1>
            {batchesCreated && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-900 text-white">Done</span>
            )}
          </div>
          <p className="text-sm text-gray-400 hidden sm:block">
            We've analyzed your Square catalog and pre-configured everything. Review the defaults, adjust what you need, then create your batches.
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-[220px_1fr] gap-6">
          <div className="self-start sticky top-6">
            <SidebarNav activeSection={activeSection} onSelect={setActiveSection} summaries={summaries} />
          </div>
          <div className="relative min-h-[500px] pb-16">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              {renderPanel(activeSection)}
            </div>
            <StickySaveFooter isDirty={isDirty} onSave={() => setIsDirty(false)} onDiscard={() => setIsDirty(false)} />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden">
          {mobileSection === null ? (
            <MobileOverviewList onSelect={setMobileSection} summaries={summaries} />
          ) : (
            <div className="relative pb-16">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
                {renderPanel(mobileSection)}
              </div>
              <StickySaveFooter isDirty={isDirty} onSave={() => setIsDirty(false)} onDiscard={() => setIsDirty(false)} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}