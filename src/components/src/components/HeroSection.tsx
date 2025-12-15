import { Search } from 'lucide-react'
import { useState } from 'react'

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Zoeken naar:', searchQuery)
    // TODO: Implement search functionality
  }

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Vind de beste deals op <span className="text-[#7c3aed]">alles</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Vergelijk prijzen van 25+ webshops in één keer. AI-gedreven zoeken voor de goedkoopste en snelste opties.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Waar ben je naar op zoek?"
              className="w-full pl-16 pr-6 py-5 text-lg rounded-2xl border-2 border-gray-200 focus:border-[#7c3aed] focus:outline-none shadow-lg transition-all"
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full md:w-auto md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:mt-0 bg-[#7c3aed] text-white px-8 py-3 rounded-xl hover:bg-[#6d28d9] transition-colors shadow-md"
          >
            Zoeken
          </button>
        </form>

        {/* Popular Searches */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="text-gray-500">Populair:</span>
          {['iPhone 15', 'AirPods Pro', 'PlayStation 5', 'Nike Air Max'].map((term) => (
            <button
              key={term}
              onClick={() => setSearchQuery(term)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
