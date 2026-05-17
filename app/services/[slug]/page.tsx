// app/services/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getService, getMetafieldValue } from '@/lib/cosmic'

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.name) || service.title
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const description = getMetafieldValue(service.metadata?.description)
  const price = getMetafieldValue(service.metadata?.starting_price)
  const icon = getMetafieldValue(service.metadata?.icon)
  const image = service.metadata?.featured_image
  const featuresRaw = service.metadata?.key_features
  const features: string[] = Array.isArray(featuresRaw)
    ? featuresRaw
    : typeof featuresRaw === 'string' && featuresRaw
    ? featuresRaw.split('\n').filter(Boolean)
    : []

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-primary-600 hover:text-primary-700 text-sm font-medium mb-6 inline-block">
            ← Back to Services
          </Link>
          <div className="flex items-start gap-6 mb-6">
            {icon && (
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-4xl flex-shrink-0">
                {icon}
              </div>
            )}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{name}</h1>
              {shortDesc && <p className="text-xl text-gray-600">{shortDesc}</p>}
            </div>
          </div>
          {price && (
            <div className="inline-block bg-white border border-gray-200 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-600">Starting at </span>
              <span className="font-bold text-primary-600">{price}</span>
            </div>
          )}
        </div>
      </section>

      {image && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
          <img
            src={`${image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full rounded-2xl shadow-xl"
            width={1000}
            height={500}
          />
        </div>
      )}

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {description && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About this service</h2>
                <div
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </>
            )}
          </div>
          <div>
            {features.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}