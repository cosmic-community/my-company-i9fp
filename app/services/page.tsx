import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to help your business thrive
          </p>
        </div>
        {services.length === 0 ? (
          <p className="text-center text-gray-500">No services available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}