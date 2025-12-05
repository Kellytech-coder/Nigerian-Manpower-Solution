import React from 'react';

const leaders = [
  {
    name: 'Awa Kelechi',
    title: 'Founder & Lead Software Engineer',
    description: 'Driving operational excellence and workforce innovation.',
    imageSrc: '/images/awa-kelechi.jpg',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Nku Victor',
    title: 'Founder & Chief Product Designer',
    description: 'Empowering teams and strengthening businesses growth.',
    imageSrc: '/images/nku-victor.jpg',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
];

const LeadershipTeam: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Leadership</h2>
        <p className="text-lg text-gray-600 mt-2">Leadership Team</p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mb-16">
        {leaders.map((leader, index) => (
          <div key={index} className="max-w-xs text-center">
            <img
              src={leader.imageSrc}
              alt={leader.name}
              className="w-40 h-40 object-cover rounded-md mx-auto mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-700">{leader.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{leader.title}</p>
            <p className="text-sm text-gray-600 mb-4">{leader.description}</p>
            {/* Social media icons */}
            <div className="flex justify-center gap-4">
              <a href={leader.socials.linkedin} aria-label="LinkedIn">
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a href={leader.socials.twitter} aria-label="Twitter">
                <img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5" />
              </a>
              <a href={leader.socials.instagram} aria-label="Instagram">
                <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Left-aligned hiring section */}
      <div className="bg-gray-100 p-6 rounded-lg max-w-2xl text-left">
        <h4 className="text-xl font-bold text-gray-800 mb-2">We’re hiring!</h4>
        <p className="text-sm text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-full transition duration-300">
          Open positions
        </button>
      </div>
    </section>
  );
};

export default LeadershipTeam;
