import { useGlobalState } from "../../context/GlobalState";
import { getCategoryById } from "../../utils/categories";

function TransactionItem({ transaction }) {
    const { deleteTransaction } = useGlobalState()
    const cat = getCategoryById(transaction.category)

    return (
    <li className="bg-slate-600/20 border border-slate-600/30 hover:border-slate-500/50 hover:bg-slate-600/30 text-white px-4 py-3 rounded-lg w-full flex justify-between items-center transition group">
        <div className="flex-1">
            <div className="flex items-center gap-2">
                <p className="font-medium text-sm text-slate-100 group-hover:text-white transition">{transaction.description}</p>
                <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ backgroundColor: cat.color + '33', color: cat.color }}
                >
                    {cat.label}
                </span>
            </div>
            <p className={`text-xs font-bold mt-1 ${ transaction.amount > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {transaction.amount > 0 ? '+' : ''}${Math.round(Math.abs(transaction.amount))}
            </p>
        </div>
        <button
            onClick={() => deleteTransaction(transaction.id)}
            className="ml-4 bg-rose-500/80 hover:bg-rose-600 text-white px-3 py-1 rounded text-xs font-semibold transition opacity-0 group-hover:opacity-100"
        >
            Delete
        </button>
    </li>
    )
}

export default TransactionItem;
