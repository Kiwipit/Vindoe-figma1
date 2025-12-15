import { Zap, Shield, Bell, TrendingDown } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'AI-gedreven zoeken',
      description: 'Slimme algoritmes vinden precies wat je zoekt, zelfs met vage omschrijvingen.'
    },
    {
      icon: TrendingDown,
      title: 'Beste prijzen gegarandeerd',
      description: 'Vergelijk 25+ webshops in realtime en zie direct waar je het meeste bespaart.'
    },
    {
      icon: Bell,
      title: 'Prijsdaling alerts',
      description: 'Ontvang email notificaties wanneer je favoriete product goedkoper wordt.'
    },
    {
      icon: Shield,
      title: 'Betrouwbare webshops',
      description: 'Alleen gecertificeerde en betrouwbare verkopers met klantbeoordelingen.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Waarom Vindoe?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bespaar tijd en geld met onze slimme prijsvergelijker
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-[#7c3aed] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#7c3aed]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
