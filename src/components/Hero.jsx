export default function Hero({ images = [] }) {
  const heroImg = images[0]
  return (
    <section className="relative bg-white">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-50 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-indigo-50 blur-3xl opacity-60 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-10 sm:py-16">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200 mb-4">
              New season
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
              Best picks
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Discover everyday essentials at unbeatable prices
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl">
              Shop top brands and trending products with fast delivery and easy returns. Your one‑stop marketplace for everything you love.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#deals" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
                Shop deals
              </a>
              <a href="#categories" className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                Browse categories
              </a>
            </div>
            <div className="mt-6 flex items-center gap-5 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Free shipping over $50
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
                24/7 support
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {heroImg ? (
                <img src={heroImg} alt="Featured" className="w-full h-[440px] object-cover" />
              ) : (
                <div className="h-[440px] w-full bg-slate-100" />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
