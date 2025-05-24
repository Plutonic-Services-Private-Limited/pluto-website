import { siteContent } from '@/data/content';

const Stats = () => {
  const { stats } = siteContent;

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{stats.projectsCompleted}+</div>
            <div className="text-blue-100">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{stats.happyClients}+</div>
            <div className="text-blue-100">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{stats.teamMembers}+</div>
            <div className="text-blue-100">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{stats.yearsExperience}+</div>
            <div className="text-blue-100">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 