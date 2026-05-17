import { getTeamMembers } from '@/lib/cosmic'
import TeamCard from '@/components/TeamCard'

export default async function TeamPage() {
  const members = await getTeamMembers()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Talented professionals dedicated to your success
          </p>
        </div>
        {members.length === 0 ? (
          <p className="text-center text-gray-500">No team members available yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {members.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}