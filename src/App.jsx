import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Deals from './components/Deals'
import Footer from './components/Footer'

function App() {
  const screenshots = [
    'https://i.ibb.co/FZbcL75/Screenshot-2025-11-21-171245.png',
    'https://i.ibb.co/B2b8jKJk/Screenshot-2025-11-21-171355.png',
    'https://i.ibb.co/SXm5Tt1H/Screenshot-2025-11-21-171424.png',
    'https://i.ibb.co/2YqN01Sn/Screenshot-2025-11-21-171450.png',
  ]

  const customCategories = [
    { name: 'Spotlight', img: screenshots[1] },
    { name: 'Trending', img: screenshots[2] },
    { name: 'New In', img: screenshots[3] },
    { name: 'Editors’ Picks', img: screenshots[0] },
    { name: 'Recommended', img: screenshots[2] },
    { name: 'Essentials', img: screenshots[1] },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero images={[screenshots[0]]} />
      <Categories categories={customCategories} />
      <Deals />
      <Footer />
    </div>
  )
}

export default App
