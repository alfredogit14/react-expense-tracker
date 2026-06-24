import { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState'
import { CATEGORIES } from '../../utils/categories'

function TransactionForm() {
  const { addTransaction } = useGlobalState()
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('other')

  const handleAmountChange = (e) => {
    const value = e.target.value
    if (value === '' || value === '-' || !isNaN(value)) {
      setAmount(value)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const numAmount = parseFloat(amount)
    if (description.trim() && amount !== '' && !isNaN(numAmount) && numAmount !== 0) {
      addTransaction({
        id: window.crypto.randomUUID(),
        description,
        amount: numAmount,
        category,
      })
      setDescription('')
      setAmount('')
      setCategory('other')
    }
  }

  return (
    <div className="w-full">
      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Add Transaction</h3>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-600/30 border border-slate-600/50 text-white px-4 py-3 rounded-lg block w-full placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
        <input
          type="text"
          placeholder="Amount (- for expense)"
          value={amount}
          onChange={handleAmountChange}
          className="bg-slate-600/30 border border-slate-600/50 text-white px-4 py-3 rounded-lg block w-full placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-slate-600/30 border border-slate-600/50 text-white px-4 py-3 rounded-lg block w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.id} className="bg-slate-800">
              {cat.label}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-3 rounded-lg block w-full font-semibold transition shadow-lg hover:shadow-blue-500/25"
        >
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default TransactionForm