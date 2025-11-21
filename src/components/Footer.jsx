export default function Footer(){
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-10 text-sm text-slate-600">
        <div>
          <div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-items-center font-bold">WS</div>
          <p className="mt-4">Global marketplace with curated products and fast worldwide shipping.</p>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold mb-3">Shop</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-slate-900">New Arrivals</a></li>
            <li><a href="#" className="hover:text-slate-900">Best Sellers</a></li>
            <li><a href="#" className="hover:text-slate-900">Gift Guides</a></li>
            <li><a href="#" className="hover:text-slate-900">Outlet</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-slate-900">Help Center</a></li>
            <li><a href="#" className="hover:text-slate-900">Shipping</a></li>
            <li><a href="#" className="hover:text-slate-900">Returns</a></li>
            <li><a href="#" className="hover:text-slate-900">Track Order</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-slate-900">About</a></li>
            <li><a href="#" className="hover:text-slate-900">Careers</a></li>
            <li><a href="#" className="hover:text-slate-900">Press</a></li>
            <li><a href="#" className="hover:text-slate-900">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} World Shop. All rights reserved.
      </div>
    </footer>
  )
}
