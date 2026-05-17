import Link from 'next/link'
import { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const projectTitle = getMetafieldValue(caseStudy.metadata?.project_title) || caseStudy.title
  const clientName = getMetafieldValue(caseStudy.metadata?.client_name)
  const industry = getMetafieldValue(caseStudy.metadata?.industry)
  const heroImage = caseStudy.metadata?.hero_image

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary-500 transition-all duration-300"
    >
      {heroImage && (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={`${heroImage.imgix_url}?w=1000&h=560&fit=crop&auto=format,compress`}
            alt={projectTitle}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={500}
            height={280}
          />
        </div>
      )}
      <div className="p-6">
        {industry && (
          <span className="inline-block text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-3">
            {industry}
          </span>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {projectTitle}
        </h3>
        {clientName && (
          <p className="text-gray-600 text-sm">Client: {clientName}</p>
        )}
        <div className="mt-4 text-sm font-medium text-gray-900 group-hover:text-primary-600">
          Read case study →
        </div>
      </div>
    </Link>
  )
}