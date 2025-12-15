import { Search } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-6 h-6 text-[#7c3aed]" />
              <span className="text-xl font-bold text-gray-900">Vindoe</span>
            </div>
            <p className="text-gray-600 text-sm">
              De slimste manier om prijzen te vergelijken en deals te vinden.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#7c3aed] text-sm">Categorieën</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#7c3aed] text-sm">Deals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#7c3aed] text-sm">Prijsalerts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#7c3aed] text-sm">Hoe het werkt</a></li>
            </ul>
          </div>

          {/* Bedrijf */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Bedrijf</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#7c3aed] text-sm">Over ons</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#7c3aed] text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#7c3aed] text-sm">Partnerprogramma</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#7c3aed] text-sm">Webshops</a></li>
            </ul>
          </div>

          {/* Juridisch */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Juridisch</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#7c3aed] text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#7c3aed] text-sm">Voorwaarden</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#7c3aed] text-sm">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © 2024 Vindoe.eu - Alle rechten voorbehouden
        </div>
      </div>
    </footer>
  )
}
