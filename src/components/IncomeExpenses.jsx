import { useGlobalState } from "../context/GlobalState"

function IncomeExpenses() {

    const {transactions} = useGlobalState()

    const amounts = transactions.map(transaction => transaction.amount)

    const income = Math.round(amounts
        .filter(amount => amount > 0)
        .reduce((acc, amount) => acc + amount, 0))

    const expense = Math.round(amounts
        .filter(amount => amount < 0)
        .reduce((acc, amount) => acc + amount, 0) * -1)

    return (
        <>
        <div className="flex justify-between items-center py-4 border-b border-slate-600/30">
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Income</h4>
              <p className="text-2xl font-bold text-emerald-400">${income}</p>
            </div>
            <div className="text-4xl text-emerald-500/20">↑</div>
        </div>
        <div className="flex justify-between items-center py-4">
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Expense</h4>
              <p className="text-2xl font-bold text-rose-400">${expense}</p>
            </div>
            <div className="text-4xl text-rose-500/20">↓</div>
        </div>
        </>
    )
}

export default IncomeExpenses