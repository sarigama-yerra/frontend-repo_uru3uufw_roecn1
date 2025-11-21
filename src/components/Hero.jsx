export default function Hero({ images = [] }) {
  const heroImg = images[0]
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-gradient-to-b from-blue-50 to-white" />
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Copy */}
        <div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-2 py-1">New</span>
            <span>Global marketplace</span>
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
            Discover the world’s best products
          </h1>

          <p className="mt-4 text-slate-600 text-lg">
            Curated collections, fresh drops, and daily deals. Secure checkout and fast worldwide delivery.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#deals" className="px-5 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-sm">Shop deals</a>
            <a href="#categories" className="px-5 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 transition">Browse categories</a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Free returns</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-500" /> Secure checkout</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" /> 24/7 support</span>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-[0_16px_40px_-8px_rgba(2,6,23,0.15)]">
            <img src={heroImg || 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop'} alt="Hero" className="w-full h-[420px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-xl px-4 py-3 border border-slate-200 shadow-sm">
            <p className="text-xs text-slate-600">Daily deals updated • Over 10k products</p>
          </div>
        </div>
      </div>
    </section>
  )
}
