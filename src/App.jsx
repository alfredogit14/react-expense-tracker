import {GlobalProvider} from './context/GlobalState'

import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import IncomeExpenses from './components/IncomeExpenses'
import ExpenseGraphic from './components/ExpenseGraphic'


function App(){
  return (
    <GlobalProvider>
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex justify-center items-center py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl w-full max-w-5xl mx-auto border border-slate-700/50">
          <div className="grid grid-cols-2 gap-6 p-12">

            {/* Title — col 1 */}
            <div>
              <h1 className="text-5xl font-bold text-white">Expense Tracker</h1>
              <p className="text-slate-400 text-sm mt-2">Manage your finances effortlessly</p>
            </div>

            {/* Chart — col 2, spans rows 1-3 (title + income + balance) */}
            <div className="row-span-3 bg-slate-700/50 p-8 rounded-xl border border-slate-700/50 flex justify-center items-center hover:border-slate-600/50 transition">
              <ExpenseGraphic />
            </div>

            {/* IncomeExpenses — col 1 */}
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition">
              <IncomeExpenses />
            </div>

            {/* Balance — col 1 */}
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition">
              <Balance />
            </div>

            {/* AddTransaction — col 1, row 4 */}
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition">
              <TransactionForm />
            </div>

            {/* TransactionHistory — col 2, row 4 */}
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition">
              <TransactionList />
            </div>

          </div>
        </div>
      </div>
    </div>
    </GlobalProvider>
  )
}

export default App