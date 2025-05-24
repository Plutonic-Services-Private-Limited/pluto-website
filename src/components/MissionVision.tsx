import { siteContent } from '@/data/content';

const MissionVision = () => {
  const { mission, vision } = siteContent.company;
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              {mission}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Deliver innovative, scalable digital solutions for every client.</li>
              <li>Empower businesses to thrive in a rapidly changing digital world.</li>
              <li>Foster a culture of creativity, collaboration, and excellence.</li>
              <li>Build long-term partnerships based on trust and results.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-6">
              {vision}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Be recognized as the most trusted digital agency globally.</li>
              <li>Lead the way in technology and creative innovation.</li>
              <li>Inspire positive change for our clients, team, and community.</li>
              <li>Continuously evolve to exceed expectations and set new standards.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision; 