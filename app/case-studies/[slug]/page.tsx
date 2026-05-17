// app/case-studies/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCaseStudy, getMetafieldValue } from '@/lib/cosmic'

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const projectTitle = getMetafieldValue(caseStudy.metadata?.project_title) || caseStudy.title
  const clientName = getMetafieldValue(caseStudy.metadata?.client_name)
  const industry = getMetafieldValue(caseStudy.metadata?.industry)
  const challenge = getMetafieldValue(caseStudy.metadata?.challenge)
  const solution = getMetafieldValue(caseStudy.metadata?.solution)
  const results = getMetafieldValue(caseStudy.metadata?.results)
  const heroImage = caseStudy.metadata?.hero_image
  const relatedService = caseStudy.metadata?.related_service

  return (
    <div>
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="text-primary-600 hover:text-primary-700 text-sm font-medium mb-6 inline-block">
            ← Back to Case Studies
          </Link>
          {industry && (
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
              {industry}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{projectTitle}</h1>
          {clientName && (
            <p className="text-xl text-gray-600">Client: <span className="font-semibold text-gray-900">{clientName}</span></p>
          )}
        </div>
      </section>

      {heroImage && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
          <img
            src={`${heroImage.imgix_url}?w=2000&h=1000&fit=crop&auto=format,compress`}
            alt={projectTitle}
            className="w-full rounded-2xl shadow-xl"
            width={1200}
            height={600}
          />
        </div>
      )}

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {challenge && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-2xl">🎯</div>
                <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: challenge }} />
            </div>
          )}
          {solution && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-2xl">💡</div>
                <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: solution }} />
            </div>
          )}
          {results && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-2xl">📈</div>
                <h2 className="text-2xl font-bold text-gray-900">The Results</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: results }} />
            </div>
          )}

          {relatedService && (
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Related Service</p>
              <Link href={`/services/${relatedService.slug}`} className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
                {relatedService.title} →
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}