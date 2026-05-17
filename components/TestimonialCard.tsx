import { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const clientName = getMetafieldValue(testimonial.metadata?.client_name)
  const clientRole = getMetafieldValue(testimonial.metadata?.client_role)
  const clientPhoto = testimonial.metadata?.client_photo
  const rating = testimonial.metadata?.rating

  const ratingNum = typeof rating === 'number' ? rating : parseInt(getMetafieldValue(rating) || '5', 10)

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
      {ratingNum > 0 && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < ratingNum ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}
      {quote && (
        <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
          "{quote}"
        </blockquote>
      )}
      <div className="flex items-center gap-4">
        {clientPhoto && (
          <img
            src={`${clientPhoto.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={clientName}
            className="w-14 h-14 rounded-full object-cover"
            width={56}
            height={56}
          />
        )}
        <div>
          {clientName && <div className="font-bold text-gray-900">{clientName}</div>}
          {clientRole && <div className="text-sm text-gray-600">{clientRole}</div>}
        </div>
      </div>
    </div>
  )
}