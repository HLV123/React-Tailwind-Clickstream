import React, { useEffect } from 'react';
import { TEAM_MEMBERS } from '../../utils/constants';
import ClickstreamLogger from '../../utils/ClickstreamLogger';

const TeamMemberCard = ({ member }) => {
  const handleClick = () => {
    ClickstreamLogger.logClick('team-card', member.name, `team-${member.id}`);
  };

  const handleHover = () => {
    ClickstreamLogger.logHover('team-card', member.name);
  };

  return (
    <div className="group text-center" onClick={handleClick} onMouseEnter={handleHover}>
      <div className="relative mb-6 overflow-hidden rounded-3xl cursor-pointer">
        <img
          src={member.img}
          alt={member.name}
          className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
          <div className="flex gap-4">
            {['linkedin', 'github', 'email'].map((social, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  ClickstreamLogger.logClick('social-link', `${member.name} - ${social}`, `social-${social}`);
                }}
                className="w-10 h-10 rounded-full bg-cream/20 backdrop-blur flex items-center justify-center text-cream hover:bg-primary transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
      <h3 className="font-display text-xl font-semibold text-charcoal">{member.name}</h3>
      <p className="text-charcoal/60 text-sm mt-1">{member.role}</p>
      <p className="text-primary text-sm mt-2">{member.social}</p>
    </div>
  );
};

const Team = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ClickstreamLogger.logSectionView('team', 'Team Section');
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('team');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-32 relative noise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-subheading">Đội ngũ</span>
          <h2 className="section-heading mt-4 mb-6">Những người tạo nên điều kỳ diệu</h2>
          <p className="text-charcoal/60 leading-relaxed">
            Đội ngũ chuyên gia giàu kinh nghiệm trong lĩnh vực công nghệ.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
