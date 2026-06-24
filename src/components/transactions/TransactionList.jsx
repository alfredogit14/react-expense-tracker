import { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState'
import { CATEGORIES } from '../../utils/categories'
import TransactionItem from './TransactionItem'

function TransactionList() {
    const { transactions } = useGlobalState()
    const [activeFilter, setActiveFilter] = useState('all')

    const usedCategories = CATEGORIES.filter(cat =>
        transactions.some(t => t.category === cat.id)
    )

    const filtered = activeFilter === 'all'
        ? transactions
        : transactions.filter(t => t.category === activeFilter)

    return (
        <>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Transaction History</h3>

            {usedCategories.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                    <button
                        onClick={() => setActiveFilter('all')}
                        className={`text-xs px-3 py-1 rounded-full font-medium transition ${
                            activeFilter === 'all'
                                ? 'bg-blue-500 text-white'
                                : 'bg-slate-700/50 text-slate-400 hover:text-white'
                        }`}
                    >
                        All
                    </button>
                    {usedCategories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveFilter(cat.id)}
                            className="text-xs px-3 py-1 rounded-full font-medium transition"
                            style={
                                activeFilter === cat.id
                                    ? { backgroundColor: cat.color, color: '#fff' }
                                    : { backgroundColor: cat.color + '22', color: cat.color }
                            }
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            )}

            <ul className="space-y-2 max-h-56 overflow-y-auto pr-2 custom-scroll">
                {filtered.length === 0 ? (
                    <li className="text-slate-500 text-center py-8 text-sm">No transactions yet</li>
                ) : (
                    filtered.map((transaction) => (
                        <TransactionItem transaction={transaction} key={transaction.id} />
                    ))
                )}
            </ul>
        </>
    )
}

export default TransactionList