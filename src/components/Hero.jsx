export default function Hero({ images = [] }) {
  const heroImg = images[0]
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(1000px_600px_at_top_right,rgba(255,255,255,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-300/80 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Trusted Marketplace
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Shop the world’s best products in one place
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Discover curated collections, daily deals, and fast shipping. Everything you love, right at your fingertips.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#deals" className="px-5 py-3 rounded-md bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">Shop Deals</a>
            <a href="#categories" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition">Browse Categories</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-300/90">
            <span>Free returns</span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
            <span>Secure checkout</span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
            <span>24/7 support</span>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/40">
            <img src={heroImg || 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop'} alt="Hero" className="w-full h-[420px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur rounded-xl px-4 py-3 border border-white/20">
            <p className="text-xs text-slate-200">Daily deals updated • Over 10k products</p>
          </div>
        </div>
      </div>
    </section>
  )
}
