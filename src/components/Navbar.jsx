import { Menu, ShoppingCart, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-slate-900 to-slate-700 text-white grid place-items-center font-bold">WS</div>
          <span className="text-slate-900 font-semibold tracking-tight">World Shop</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#" className="hover:text-slate-900 transition-colors">Home</a>
          <a href="#categories" className="hover:text-slate-900 transition-colors">Categories</a>
          <a href="#deals" className="hover:text-slate-900 transition-colors">Deals</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
            <Search className="h-4 w-4" />
            <span className="hidden lg:inline">Search</span>
          </button>
          <button className="relative inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden lg:inline">Cart</span>
            <span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 rounded-full bg-slate-900 text-white text-[10px] grid place-items-center">0</span>
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
