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
  sliders: (c) => (
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
        x1="4"
        y1="21"
        x2="4"
        y2="14"
      />
      <line
        x1="4"
        y1="10"
        x2="4"
        y2="3"
      />
      <line
        x1="12"
        y1="21"
        x2="12"
        y2="12"
      />
      <line
        x1="12"
        y1="8"
        x2="12"
        y2="3"
      />
      <line
        x1="20"
        y1="21"
        x2="20"
        y2="16"
      />
      <line
        x1="20"
        y1="12"
        x2="20"
        y2="3"
      />
      <line
        x1="1"
        y1="14"
        x2="7"
        y2="14"
      />
      <line
        x1="9"
        y1="8"
        x2="15"
        y2="8"
      />
      <line
        x1="17"
        y1="16"
        x2="23"
        y2="16"
      />
    </svg>
  ),
  edit: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
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
  sparkle: (c) => (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
    </svg>
  ),
}

// ——— Mock Data ———————————————————————————————————————

const CATEGORIES = [
  { id: 'dairy', name: 'Dairy & Eggs', count: 24, enabled: true },
  { id: 'bakery', name: 'Bakery', count: 18, enabled: true },
  { id: 'produce', name: 'Fresh Produce', count: 31, enabled: false },
  { id: 'meat', name: 'Meat & Seafood', count: 15, enabled: false },
  { id: 'beverages', name: 'Beverages', count: 22, enabled: true },
  { id: 'snacks', name: 'Snacks & Confectionery', count: 19, enabled: false },
  { id: 'canned', name: 'Canned Goods', count: 12, enabled: false },
  { id: 'frozen', name: 'Frozen Foods', count: 8, enabled: false },
]

const PRODUCTS = [
  {
    id: 1,
    name: 'Organic Whole Milk 1L',
    category: 'Dairy & Eggs',
    barcode: '8710400000112',
    tracked: true,
  },
  {
    id: 2,
    name: 'Free Range Eggs 12pk',
    category: 'Dairy & Eggs',
    barcode: '8710400000129',
    tracked: true,
  },
  {
    id: 3,
    name: 'Sourdough Bread 400g',
    category: 'Bakery',
    barcode: '8710400000136',
    tracked: true,
  },
  {
    id: 4,
    name: 'Greek Yogurt 500g',
    category: 'Dairy & Eggs',
    barcode: '8710400000143',
    tracked: true,
  },
  {
    id: 5,
    name: 'Fresh Orange Juice 1L',
    category: 'Beverages',
    barcode: '8710400000150',
    tracked: false,
  },
  {
    id: 6,
    name: 'Sliced Ham 200g',
    category: 'Meat & Seafood',
    barcode: '8710400000167',
    tracked: false,
  },
  {
    id: 7,
    name: 'Croissants 4pk',
    category: 'Bakery',
    barcode: '8710400000174',
    tracked: true,
  },
  {
    id: 8,
    name: 'Butter Unsalted 250g',
    category: 'Dairy & Eggs',
    barcode: '8710400000181',
    tracked: true,
  },
]

const AUTOMATION_RULES = [
  {
    id: 1,
    name: 'Dairy & Eggs',
    type: 'category',
    threshold: 5,
    action: 'discount',
    status: true,
    products: 24,
  },
  {
    id: 2,
    name: 'Bakery',
    type: 'category',
    threshold: 2,
    action: 'donate',
    status: true,
    products: 18,
  },
  {
    id: 3,
    name: 'Sourdough Bread 400g',
    type: 'product',
    threshold: 3,
    action: 'discount',
    status: false,
    products: 1,
  },
]

const OVERRIDES = [
  {
    id: 1,
    product: 'Organic Whole Milk 1L',
    category: 'Dairy & Eggs',
    defaultDays: 5,
    overrideDays: 3,
    reason: 'Sells slower',
  },
  {
    id: 2,
    product: 'Croissants 4pk',
    category: 'Bakery',
    defaultDays: 2,
    overrideDays: 1,
    reason: 'Very short shelf life',
  },
  {
    id: 3,
    product: 'Greek Yogurt 500g',
    category: 'Dairy & Eggs',
    defaultDays: 5,
    overrideDays: 7,
    reason: 'Longer actual shelf life',
  },
]

// ——— Sub-components ————————————————————————————————————

function Toggle({ enabled, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`relative w-10 h-5.5 rounded-full transition-colors duration-200 ${
        enabled ? 'bg-gray-900' : 'bg-gray-200'
      }`}
      style={{ width: 40, height: 22 }}
    >
      <div
        className={`absolute top-0.5 w-4.5 h-4.5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
          enabled ? 'translate-x-5' : 'translate-x-0.5'
        }`}
        style={{
          width: 18,
          height: 18,
          top: 2,
          transform: enabled ? 'translateX(20px)' : 'translateX(2px)',
        }}
      />
    </button>
  )
}

function RadioOption({ selected, onSelect, label, description, children }) {
  return (
    <div
      onClick={onSelect}
      className={`border rounded-xl p-4 cursor-pointer transition-all duration-200 ${
        selected
          ? 'border-gray-900 bg-gray-50 ring-1 ring-gray-900'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
            selected ? 'border-gray-900' : 'border-gray-300'
          }`}
          style={{ width: 18, height: 18 }}
        >
          {selected && <div className="w-2 h-2 rounded-full bg-gray-900" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-gray-900">{label}</div>
          <div className="text-xs text-gray-400 mt-0.5">{description}</div>
          {selected && children && <div className="mt-3">{children}</div>}
        </div>
      </div>
    </div>
  )
}

function SectionCard({
  icon,
  title,
  subtitle,
  badge,
  children,
  defaultOpen = true,
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-center gap-4 hover:bg-gray-50/50 transition-colors"
      >
        <div className="bg-gray-100 p-2 rounded-xl shrink-0">
          {I[icon]('w-4.5 h-4.5 text-gray-600')}
        </div>
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
            {badge && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
        </div>
        <div
          className={`transition-transform duration-200 ${open ? 'rotate-0' : '-rotate-90'}`}
        >
          {I.chevronDown('w-4 h-4 text-gray-400')}
        </div>
      </button>
      {open && <div className="border-t border-gray-100">{children}</div>}
    </div>
  )
}

function ChecklistItem({ done, label, optional }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
          done ? 'bg-gray-900' : 'border-2 border-gray-200'
        }`}
      >
        {done && I.check('w-3 h-3 text-white')}
      </div>
      <span
        className={`text-sm ${done ? 'text-gray-400 line-through' : 'text-gray-700'}`}
      >
        {label}
      </span>
      {optional && !done && (
        <span className="text-xs text-gray-300 italic">optional</span>
      )}
    </div>
  )
}

function EmptyState({ icon, title, description, action, onAction }) {
  return (
    <div className="py-8 px-6 text-center">
      <div className="bg-gray-100 p-3 rounded-2xl inline-flex mb-3">
        {I[icon]('w-5 h-5 text-gray-400')}
      </div>
      <p className="text-sm font-medium text-gray-600">{title}</p>
      <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto">
        {description}
      </p>
      {action && (
        <button
          onClick={onAction}
          className="mt-3 text-sm font-medium text-gray-900 hover:text-gray-700 inline-flex items-center gap-1.5 transition-colors"
        >
          {I.plus('w-3.5 h-3.5')}
          {action}
        </button>
      )}
    </div>
  )
}

// ——— Section 1: Product Scope ————————————————————————

function ProductScopeSection({
  scope,
  setScope,
  categories,
  setCategories,
  products,
  setProducts,
}) {
  const [productSearch, setProductSearch] = useState('')
  const enabledCount = categories.filter((c) => c.enabled).length
  const trackedCount = products.filter((p) => p.tracked).length

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(productSearch.toLowerCase()),
  )

  return (
    <SectionCard
      icon="layers"
      title="Product Scope"
      subtitle="Choose which products to track with batch-level expiry intelligence"
      badge={
        scope === 'all'
          ? `${products.length} products`
          : scope === 'category'
            ? `${enabledCount} categories`
            : `${trackedCount} products`
      }
    >
      <div className="p-6 space-y-3">
        <RadioOption
          selected={scope === 'all'}
          onSelect={() => setScope('all')}
          label="All products"
          description={`Track all ${products.length} products in your catalog. Recommended for getting started.`}
        />

        <RadioOption
          selected={scope === 'category'}
          onSelect={() => setScope('category')}
          label="Select by category"
          description="Choose specific categories to track. Ideal for focusing on high-waste areas first."
        >
          <div className="space-y-1.5 max-h-52 overflow-y-auto">
            {categories.map((cat) => (
              <label
                key={cat.id}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                      cat.enabled
                        ? 'bg-gray-900 border-gray-900'
                        : 'border-gray-300 group-hover:border-gray-400'
                    }`}
                  >
                    {cat.enabled && I.check('w-2.5 h-2.5 text-white')}
                  </div>
                  <span className="text-sm text-gray-700">{cat.name}</span>
                </div>
                <span className="text-xs text-gray-400">{cat.count} items</span>
              </label>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400">
              {enabledCount} of {categories.length} categories selected
            </span>
            <button className="text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Select all
            </button>
          </div>
        </RadioOption>

        <RadioOption
          selected={scope === 'individual'}
          onSelect={() => setScope('individual')}
          label="Select individual products"
          description="Hand-pick specific products. Best for small or targeted tracking setups."
        >
          <div onClick={(e) => e.stopPropagation()}>
            <div className="relative mb-3">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                {I.search('w-3.5 h-3.5 text-gray-400')}
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-0.5 max-h-52 overflow-y-auto">
              {filteredProducts.map((product) => (
                <label
                  key={product.id}
                  className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                        product.tracked
                          ? 'bg-gray-900 border-gray-900'
                          : 'border-gray-300 group-hover:border-gray-400'
                      }`}
                    >
                      {product.tracked && I.check('w-2.5 h-2.5 text-white')}
                    </div>
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
                {trackedCount} of {products.length} products selected
              </span>
            </div>
          </div>
        </RadioOption>
      </div>
    </SectionCard>
  )
}

// ——— Section 2: Automation Rules ————————————————————

function AutomationRulesSection({
  rules,
  setRules,
  showAddForm,
  setShowAddForm,
}) {
  const activeCount = rules.filter((r) => r.status).length

  const toggleRule = (id) => {
    setRules(rules.map((r) => (r.id === id ? { ...r, status: !r.status } : r)))
  }

  const deleteRule = (id) => {
    setRules(rules.filter((r) => r.id !== id))
  }

  return (
    <SectionCard
      icon="zap"
      title="Automation Rules"
      subtitle="Define when Lifo should automatically suggest discounts or donations"
      badge={activeCount > 0 ? `${activeCount} active` : null}
    >
      {rules.length === 0 && !showAddForm ? (
        <EmptyState
          icon="zap"
          title="No automation rules yet"
          description="Lifo will notify you manually for each expiring batch. Add rules to automate discount and donation recommendations."
          action="Add first rule"
          onAction={() => setShowAddForm(true)}
        />
      ) : (
        <div>
          {/* Rule list */}
          <div className="divide-y divide-gray-50">
            {rules.map((rule) => (
              <div
                key={rule.id}
                className="px-6 py-3.5 flex items-center justify-between hover:bg-gray-50/50 transition-colors group"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <Toggle
                    enabled={rule.status}
                    onChange={() => toggleRule(rule.id)}
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-medium ${rule.status ? 'text-gray-900' : 'text-gray-400'}`}
                      >
                        {rule.name}
                      </span>
                      <span className="text-xs text-gray-300 bg-gray-50 px-1.5 py-0.5 rounded">
                        {rule.type}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      When ≤ {rule.threshold} days left → suggest {rule.action}
                      {rule.type === 'category' &&
                        ` · ${rule.products} products`}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600">
                    {I.edit('w-3.5 h-3.5')}
                  </button>
                  <button
                    onClick={() => deleteRule(rule.id)}
                    className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                  >
                    {I.trash('w-3.5 h-3.5')}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Inline add form */}
          {showAddForm && (
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">
                  New automation rule
                </span>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {I.x('w-4 h-4')}
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-1 block">
                    Apply to
                  </label>
                  <select className="w-full text-sm px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900">
                    <option>Dairy & Eggs</option>
                    <option>Bakery</option>
                    <option>Fresh Produce</option>
                    <option>Meat & Seafood</option>
                    <option>Beverages</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-1 block">
                    Days before expiry
                  </label>
                  <input
                    type="number"
                    defaultValue={3}
                    className="w-full text-sm px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-1 block">
                    Action
                  </label>
                  <select className="w-full text-sm px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900">
                    <option>Suggest discount</option>
                    <option>Suggest donation</option>
                    <option>Alert only</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 mt-3">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-sm px-3 py-1.5 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-sm font-medium px-4 py-1.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Add rule
                </button>
              </div>
            </div>
          )}

          {/* Add rule trigger */}
          {!showAddForm && (
            <div className="px-6 py-3 border-t border-gray-100">
              <button
                onClick={() => setShowAddForm(true)}
                className="text-sm text-gray-500 hover:text-gray-900 font-medium flex items-center gap-1.5 transition-colors"
              >
                {I.plus('w-3.5 h-3.5')}
                Add rule
              </button>
            </div>
          )}
        </div>
      )}
    </SectionCard>
  )
}

// ——— Section 3: Product Overrides ———————————————————

function ProductOverridesSection({ overrides }) {
  return (
    <SectionCard
      icon="sliders"
      title="Product Overrides"
      subtitle="Override category-level defaults for specific products"
      badge={overrides.length > 0 ? `${overrides.length} custom` : null}
      defaultOpen={false}
    >
      {overrides.length === 0 ? (
        <EmptyState
          icon="sliders"
          title="No product overrides"
          description="All products are using their category's default settings. Add overrides for products that need custom alert timing."
          action="Add override"
        />
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  <th className="px-6 py-3">Product</th>
                  <th className="px-6 py-3">Category Default</th>
                  <th className="px-6 py-3">Override</th>
                  <th className="px-6 py-3">Reason</th>
                  <th className="px-6 py-3 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {overrides.map((o) => (
                  <tr
                    key={o.id}
                    className="hover:bg-gray-50/50 transition-colors group"
                  >
                    <td className="px-6 py-3">
                      <div className="text-sm font-medium text-gray-900">
                        {o.product}
                      </div>
                      <div className="text-xs text-gray-400">{o.category}</div>
                    </td>
                    <td className="px-6 py-3">
                      <span className="text-sm text-gray-400 line-through">
                        {o.defaultDays} days
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <span className="text-sm font-semibold text-gray-900">
                        {o.overrideDays} days
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <span className="text-xs text-gray-400 italic">
                        {o.reason}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                          {I.edit('w-3.5 h-3.5')}
                        </button>
                        <button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                          {I.trash('w-3.5 h-3.5')}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 border-t border-gray-100">
            <button className="text-sm text-gray-500 hover:text-gray-900 font-medium flex items-center gap-1.5 transition-colors">
              {I.plus('w-3.5 h-3.5')}
              Add override
            </button>
          </div>
        </div>
      )}
    </SectionCard>
  )
}

// ——— First-Run Banner ————————————————————————————————

function FirstRunBanner({ scope, rulesCount, overridesCount, onDismiss }) {
  const scopeDone = scope !== null
  const rulesDone = rulesCount > 0
  const overridesDone = overridesCount > 0
  const completedCount = [scopeDone, rulesDone, overridesDone].filter(
    Boolean,
  ).length

  return (
    <div className="bg-gray-900 text-white rounded-2xl px-6 py-5 mb-6">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="bg-white/10 p-2.5 rounded-xl mt-0.5">
            {I.sparkle('w-5 h-5')}
          </div>
          <div>
            <h2 className="text-base font-semibold">Set up batch tracking</h2>
            <p className="text-sm text-gray-400 mt-1">
              Configure how Lifo tracks your inventory. This usually takes about
              2 minutes.
            </p>
            <div className="flex items-center gap-6 mt-4">
              <ChecklistItemDark
                done={scopeDone}
                label="Choose products to track"
              />
              <ChecklistItemDark
                done={rulesDone}
                label="Set automation rules"
                optional
              />
              <ChecklistItemDark
                done={overridesDone}
                label="Add product overrides"
                optional
              />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="w-32 bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-white h-full rounded-full transition-all duration-500"
                  style={{ width: `${(completedCount / 3) * 100}%` }}
                />
              </div>
              <span className="text-xs text-gray-400">
                {completedCount} of 3
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={onDismiss}
          className="text-gray-500 hover:text-white transition-colors p-1 shrink-0"
        >
          {I.x('w-4 h-4')}
        </button>
      </div>
    </div>
  )
}

function ChecklistItemDark({ done, label, optional }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
          done ? 'bg-white' : 'border border-gray-600'
        }`}
      >
        {done && I.check('w-2.5 h-2.5 text-gray-900')}
      </div>
      <span className={`text-xs ${done ? 'text-gray-300' : 'text-gray-400'}`}>
        {label}
        {optional && !done && (
          <span className="text-gray-600 ml-1">· optional</span>
        )}
      </span>
    </div>
  )
}

// ——— Dirty State Footer ——————————————————————————————

function SaveFooter({ isDirty, isFirstRun, onSave, onDiscard }) {
  if (!isDirty && !isFirstRun) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isDirty && !isFirstRun && (
            <>
              <div className="w-2 h-2 rounded-full bg-gray-900 animate-pulse" />
              <span className="text-sm text-gray-600">Unsaved changes</span>
            </>
          )}
          {isFirstRun && (
            <>
              {I.info('w-4 h-4 text-gray-400')}
              <span className="text-sm text-gray-600">
                Configure your settings and activate when ready
              </span>
            </>
          )}
        </div>
        <div className="flex items-center gap-3">
          {isDirty && !isFirstRun && (
            <button
              onClick={onDiscard}
              className="text-sm px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              Discard
            </button>
          )}
          <button
            onClick={onSave}
            className="text-sm font-semibold px-5 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
          >
            {isFirstRun ? 'Activate Tracking' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ——— Main Component ——————————————————————————————————

export default function LifoSetupWireframe() {
  // Mode toggle for demo purposes
  const [isFirstRun, setIsFirstRun] = useState(true)
  const [showFirstRunBanner, setShowFirstRunBanner] = useState(true)

  // Section 1 state
  const [scope, setScope] = useState('all')
  const [categories, setCategories] = useState(CATEGORIES)
  const [products, setProducts] = useState(PRODUCTS)

  // Section 2 state
  const [rules, setRules] = useState(AUTOMATION_RULES)
  const [showAddForm, setShowAddForm] = useState(false)

  // Section 3 state
  const [overrides] = useState(OVERRIDES)

  // Dirty state tracking
  const [isDirty, setIsDirty] = useState(false)

  const handleScopeChange = (newScope) => {
    setScope(newScope)
    setIsDirty(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo mode toggle — would not exist in production */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
              Wireframe v2
            </span>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setIsFirstRun(true)
                  setShowFirstRunBanner(true)
                }}
                className={`text-xs px-3 py-1 rounded-lg transition-colors ${
                  isFirstRun
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                First Run
              </button>
              <button
                onClick={() => {
                  setIsFirstRun(false)
                  setShowFirstRunBanner(false)
                }}
                className={`text-xs px-3 py-1 rounded-lg transition-colors ${
                  !isFirstRun
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                Return Visit
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setRules([])
                setIsDirty(true)
              }}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Clear rules (test empty)
            </button>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="max-w-3xl mx-auto px-6 py-8 pb-24">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-900">
            {isFirstRun ? 'Batch Tracking Setup' : 'Batch Tracking Settings'}
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            {isFirstRun
              ? 'Configure how Lifo tracks your inventory and automates waste reduction.'
              : 'Manage your tracking preferences, automation rules, and product overrides.'}
          </p>
        </div>

        {/* First-run guidance banner */}
        {isFirstRun && showFirstRunBanner && (
          <FirstRunBanner
            scope={scope}
            rulesCount={rules.filter((r) => r.status).length}
            overridesCount={overrides.length}
            onDismiss={() => setShowFirstRunBanner(false)}
          />
        )}

        {/* Sections */}
        <div className="space-y-4">
          {/* Section 1: Product Scope */}
          <ProductScopeSection
            scope={scope}
            setScope={handleScopeChange}
            categories={categories}
            setCategories={setCategories}
            products={products}
            setProducts={setProducts}
          />

          {/* Section 2: Automation Rules */}
          <AutomationRulesSection
            rules={rules}
            setRules={(newRules) => {
              setRules(newRules)
              setIsDirty(true)
            }}
            showAddForm={showAddForm}
            setShowAddForm={setShowAddForm}
          />

          {/* Section 3: Product Overrides */}
          <ProductOverridesSection overrides={overrides} />
        </div>

        {/* Inline help — first run only */}
        {isFirstRun && (
          <div className="mt-6 bg-gray-50 border border-gray-200 border-dashed rounded-2xl p-5">
            <div className="flex items-start gap-3">
              {I.info('w-4 h-4 text-gray-400 mt-0.5 shrink-0')}
              <div>
                <p className="text-sm font-medium text-gray-600">
                  You can always change these later
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  These settings live at{' '}
                  <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">
                    /dashboard/settings
                  </span>{' '}
                  and can be edited anytime. Start with the defaults and refine
                  as you learn what works for your store.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Save footer */}
      <SaveFooter
        isDirty={isDirty || isFirstRun}
        isFirstRun={isFirstRun}
        onSave={() => setIsDirty(false)}
        onDiscard={() => setIsDirty(false)}
      />
    </div>
  )
}
