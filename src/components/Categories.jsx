const defaultCategories = [
  { name: 'Home & Living', img: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Electronics', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Fashion', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Beauty', img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Sports', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Toys', img: 'https://images.unsplash.com/photo-1605003173406-86f6309f18f8?q=80&w=1200&auto=format&fit=crop' },
]

export default function Categories({ title = 'Browse Categories', categories = defaultCategories }) {
  return (
    <section id="categories" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700">See all</a>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((cat, idx) => (
            <a key={idx} href="#" className="group relative rounded-xl overflow-hidden border border-slate-200 bg-white">
              <img src={cat.img} alt={cat.name} className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white font-semibold drop-shadow">{cat.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
