const defaultDeals = Array.from({ length: 8 }).map((_, i) => ({
  title: `Top Pick ${i + 1}`,
  price: 49.99 + i,
  img: `https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop`
}))

export default function Deals({ title = 'Today’s Top Deals', deals = defaultDeals }) {
  return (
    <section id="deals" className="bg-slate-50 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {deals.map((d, idx) => (
            <a key={idx} href="#" className="group rounded-xl overflow-hidden bg-white border border-slate-200 hover:shadow-md transition-shadow">
              <img src={d.img} alt={d.title} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-medium text-slate-800 group-hover:text-slate-900">{d.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-slate-900 font-semibold">${d.price.toFixed(2)}</span>
                  <span className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">In stock</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
