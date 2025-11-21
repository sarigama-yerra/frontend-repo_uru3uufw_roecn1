import { useEffect, useState } from 'react'
import { ShoppingCart, Menu, Search, User, Heart } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 transition-colors ${isScrolled ? 'bg-white/85 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-slate-200' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex items-center gap-3 py-3">
          {/* Mobile menu */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50"
            aria-label="Open menu"
            onClick={() => setMobileOpen(v => !v)}
          >
            <Menu size={20} />
          </button>

          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-full bg-blue-600" />
            <span className="text-xl font-bold tracking-tight text-slate-900">World Shop</span>
          </a>

          {/* Search */}
          <div className="hidden md:flex flex-1" />
          <div className="flex-1 md:max-w-xl">
            <label className="relative block">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <Search size={18} />
              </span>
              <input
                type="search"
                placeholder="Search for products, brands and more"
                className="w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </label>
          </div>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 px-3.5 py-2 text-sm text-slate-700 hover:bg-slate-50">
              <User size={18} />
              <span className="hidden md:inline">Sign in</span>
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50">
              <Heart size={18} />
            </button>
            <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700">
              <ShoppingCart size={18} />
              <span className="absolute -top-1.5 -right-1.5 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-emerald-500 px-1.5 text-[10px] font-semibold leading-none text-white shadow-sm">2</span>
            </button>
          </div>
        </div>

        {/* Secondary nav */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-slate-700">
          <nav className="flex items-center gap-6">
            {['Home', 'Deals', 'Categories', 'Brands', 'New Arrivals'].map((item) => (
              <a key={item} href="#" className="hover:text-blue-700 transition-colors">{item}</a>
            ))}
          </nav>
          <div className="text-blue-700 font-medium">Free shipping over $50</div>
        </div>

        {/* Mobile sheet */}
        {mobileOpen && (
          <div className="md:hidden pb-4 animate-in">
            <nav className="grid gap-2 text-slate-700">
              {['Home', 'Deals', 'Categories', 'Brands', 'New Arrivals'].map((item) => (
                <a key={item} href="#" className="rounded-lg px-3 py-2 hover:bg-slate-50">{item}</a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
