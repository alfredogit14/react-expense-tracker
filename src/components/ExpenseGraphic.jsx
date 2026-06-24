import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'
import { useGlobalState } from '../context/GlobalState'
import { CATEGORIES } from '../utils/categories'

function ExpenseGraphic() {
    const { transactions } = useGlobalState()

    const totalIncome = transactions
        .filter(t => t.amount > 0)
        .reduce((acc, t) => acc + t.amount, 0)

    const totalExpenses = transactions
        .filter(t => t.amount < 0)
        .reduce((acc, t) => acc + t.amount, 0) * -1

    const expensePercentOfIncome = totalIncome > 0
        ? Math.round((totalExpenses / totalIncome) * 100)
        : 0

    const summaryData = [
        { x: 1, name: 'Income',   amount: totalIncome,   color: '#1de075' },
        { x: 2, name: 'Expenses', amount: totalExpenses, color: '#ef4747' },
    ]

    const categoryTotals = CATEGORIES
        .map(cat => {
            const total = transactions
                .filter(t => t.category === cat.id && t.amount < 0)
                .reduce((acc, t) => acc + Math.abs(t.amount), 0)
            return { ...cat, total }
        })
        .filter(cat => cat.total > 0)
        .sort((a, b) => b.total - a.total)

    return (
        <div className="w-full">
            <div className="mb-2 text-center text-slate-300 text-lg font-medium">Income vs Expenses</div>
            <VictoryChart
                width={340} height={320}
                domain={{ x: [0.5, 2.5] }}
                padding={{ top: 20, bottom: 45, left: 55, right: 55 }}
            >
                <VictoryAxis
                    tickValues={[1, 2]}
                    tickFormat={['Income', 'Expenses']}
                    style={{
                        axis: { stroke: 'transparent' },
                        tickLabels: { fill: 'white', fontSize: 12, padding: 8 },
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => x === 0 ? '$0' : `$${Math.round(x / 1000)}k`}
                    style={{
                        axis: { stroke: 'rgba(255,255,255,0.2)' },
                        grid: { stroke: 'rgba(255,255,255,0.08)' },
                        tickLabels: { fill: 'white', fontSize: 10, padding: 6 },
                    }}
                />
                <VictoryBar
                    data={summaryData}
                    x="x"
                    y="amount"
                    barWidth={90}
                    style={{ data: { fill: ({ datum }) => datum.color } }}
                />
            </VictoryChart>

            {totalExpenses > 0 && (
                <p className="text-center text-slate-400 text-xs mb-6">
                    Expenses are {expensePercentOfIncome}% of income
                </p>
            )}

            {categoryTotals.length > 0 && (
                <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                        Expenses by Category
                    </p>
                    <div className="space-y-2">
                        {categoryTotals.map(cat => (
                            <div key={cat.id}>
                                <div className="flex justify-between text-xs mb-1">
                                    <span style={{ color: cat.color }}>{cat.label}</span>
                                    <span className="text-slate-300">${Math.round(cat.total)}</span>
                                </div>
                                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-500"
                                        style={{
                                            width: `${Math.min((cat.total / totalExpenses) * 100, 100)}%`,
                                            backgroundColor: cat.color,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ExpenseGraphic