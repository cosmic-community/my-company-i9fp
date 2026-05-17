import { getCaseStudies } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real clients
          </p>
        </div>
        {caseStudies.length === 0 ? (
          <p className="text-center text-gray-500">No case studies available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}