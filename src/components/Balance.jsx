import {useGlobalState} from '../context/GlobalState'

function Balance() {
  const {transactions} = useGlobalState()

  const amounts = transactions.map(transaction => transaction.amount)

  const total = Math.round(amounts.reduce((acc, item) => (acc += item), 0))

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Your Balance</h3>
      <h1 className="text-5xl font-bold text-white">${total}</h1>
      <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2"></div>
    </div>
  )
}

export default Balance