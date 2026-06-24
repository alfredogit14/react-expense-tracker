export const CATEGORIES = [
  { id: 'food',          label: 'Food',          color: '#f59e0b' },
  { id: 'transport',     label: 'Transport',     color: '#3b82f6' },
  { id: 'shopping',      label: 'Shopping',      color: '#8b5cf6' },
  { id: 'entertainment', label: 'Entertainment', color: '#ec4899' },
  { id: 'health',        label: 'Health',        color: '#10b981' },
  { id: 'housing',       label: 'Housing',       color: '#f97316' },
  { id: 'salary',        label: 'Salary',        color: '#1de075' },
  { id: 'other',         label: 'Other',         color: '#94a3b8' },
]

export const getCategoryById = (id) =>
  CATEGORIES.find(c => c.id === id) ?? CATEGORIES[CATEGORIES.length - 1]
