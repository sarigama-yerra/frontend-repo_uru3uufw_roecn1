export default function Deals() {
  const products = [
    { title: 'Wireless Headphones', price: '$59.99', badge: '20% OFF', img: 'https://images.unsplash.com/photo-1518443952240-01ea3d1b86f6?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Smart Watch', price: '$79.99', badge: 'HOT', img: 'https://images.unsplash.com/photo-1512446733611-9099a758e823?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Running Shoes', price: '$49.99', badge: 'BEST', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Coffee Maker', price: '$39.99', badge: 'SAVE', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <section id="deals" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Top Deals for You</h2>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <a key={idx} href="#" className="group rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src={p.img} alt={p.title} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute top-3 left-3 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">{p.badge}</span>
              </div>
              <div className="p-4">
                <div className="font-semibold text-slate-900">{p.title}</div>
                <div className="mt-1 text-blue-700 font-bold">{p.price}</div>
                <div className="mt-2 text-xs text-slate-500">Free returns • 2-year warranty</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
