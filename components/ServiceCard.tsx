import Link from 'next/link'
import { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.name) || service.title
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const icon = getMetafieldValue(service.metadata?.icon)
  const price = getMetafieldValue(service.metadata?.starting_price)
  const image = service.metadata?.featured_image

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-primary-500 transition-all duration-300"
    >
      {image && (
        <div className="aspect-video rounded-xl overflow-hidden mb-5 bg-gray-100">
          <img
            src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={400}
            height={225}
          />
        </div>
      )}
      {icon && !image && (
        <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center text-3xl mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
        {name}
      </h3>
      {shortDesc && (
        <p className="text-gray-600 mb-4 line-clamp-2">{shortDesc}</p>
      )}
      <div className="flex items-center justify-between">
        {price && (
          <span className="text-sm font-semibold text-primary-600">
            From {price}
          </span>
        )}
        <span className="text-sm font-medium text-gray-900 group-hover:text-primary-600 ml-auto">
          Learn more →
        </span>
      </div>
    </Link>
  )
}