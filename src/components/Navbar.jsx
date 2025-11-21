import { Menu, ShoppingCart, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="h-16 flex items-center gap-4">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-blue-600 text-white grid place-items-center font-bold">WS</div>
            <span className="text-slate-900 font-semibold tracking-tight">World Shop</span>
          </a>

          {/* Search */}
          <div className="hidden md:flex flex-1 items-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search products, brands and more"
                className="w-full rounded-full border border-slate-200 bg-slate-50 focus:bg-white pl-10 pr-4 h-10 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-2">
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
              <Search className="h-5 w-5" />
            </button>
            <button className="relative inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden lg:inline">Cart</span>
              <span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 rounded-full bg-amber-500 text-white text-[10px] grid place-items-center shadow">0</span>
            </button>
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Nav row */}
        <div className="hidden md:flex items-center h-11 text-sm text-slate-700 gap-6">
          <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#categories" className="hover:text-blue-600 transition-colors">Categories</a>
          <a href="#deals" className="hover:text-blue-600 transition-colors">Deals</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </div>
    </header>
  )
}
