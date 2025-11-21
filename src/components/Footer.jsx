export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="text-slate-900 font-semibold mb-3">Shop</div>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-blue-700">New Arrivals</a></li>
              <li><a href="#" className="hover:text-blue-700">Best Sellers</a></li>
              <li><a href="#" className="hover:text-blue-700">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <div className="text-slate-900 font-semibold mb-3">Help</div>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-blue-700">Shipping</a></li>
              <li><a href="#" className="hover:text-blue-700">Returns</a></li>
              <li><a href="#" className="hover:text-blue-700">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-slate-900 font-semibold mb-3">Company</div>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-blue-700">About</a></li>
              <li><a href="#" className="hover:text-blue-700">Careers</a></li>
              <li><a href="#" className="hover:text-blue-700">Press</a></li>
            </ul>
          </div>
          <div>
            <div className="text-slate-900 font-semibold mb-3">Get updates</div>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <div>© {new Date().getFullYear()} World Shop. All rights reserved.</div>
          <div className="mt-2 sm:mt-0 flex items-center gap-4">
            <a href="#" className="hover:text-blue-700">Privacy</a>
            <a href="#" className="hover:text-blue-700">Terms</a>
            <a href="#" className="hover:text-blue-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
