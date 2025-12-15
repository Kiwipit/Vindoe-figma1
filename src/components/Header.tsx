import { Search } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Search className="w-8 h-8 text-[#7c3aed]" />
            <span className="text-2xl font-bold text-gray-900">Vindoe</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-[#7c3aed] transition-colors">
              Categorieën
            </a>
            <a href="#" className="text-gray-700 hover:text-[#7c3aed] transition-colors">
              Deals
            </a>
            <a href="#" className="text-gray-700 hover:text-[#7c3aed] transition-colors">
              Hoe het werkt
            </a>
          </nav>

          {/* CTA Button */}
          <button className="bg-[#7c3aed] text-white px-6 py-2 rounded-lg hover:bg-[#6d28d9] transition-colors">
            Meld je aan
          </button>
        </div>
      </div>
    </header>
  )
}
