import { Header } from './Header'
import { HeroSection } from './HeroSection'
import { FeaturesSection } from './FeaturesSection'
import { Footer } from './Footer'

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}
