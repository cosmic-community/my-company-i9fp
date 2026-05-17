import { getTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>
        {testimonials.length === 0 ? (
          <p className="text-center text-gray-500">No testimonials available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}