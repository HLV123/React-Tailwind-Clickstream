import React, { useState, useEffect } from 'react';
import { PROJECTS, PROJECT_FILTERS } from '../../utils/constants';
import ClickstreamLogger from '../../utils/ClickstreamLogger';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ClickstreamLogger.logSectionView('portfolio', 'Portfolio Section');
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('portfolio');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    ClickstreamLogger.logClick('filter-button', filter, `filter-${filter}`);
  };

  const handleProjectClick = (project) => {
    ClickstreamLogger.logClick('project-card', project.title, `project-${project.id}`);
  };

  const filteredProjects = activeFilter === 'Tất cả' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-primary font-medium tracking-widest text-sm">DỰ ÁN</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mt-4">Dự án nổi bật</h2>
          </div>

          <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
            {PROJECT_FILTERS.map((filter, index) => (
              <button
                key={index}
                onClick={() => handleFilterClick(filter)}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeFilter === filter ? 'bg-primary text-white' : 'bg-cream/10 text-cream/60 hover:bg-cream/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-sm font-medium">{project.category}</span>
                  <h3 className="font-display text-2xl font-semibold text-cream mt-1">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => ClickstreamLogger.logClick('button', 'Xem tất cả dự án', 'view-all-projects')}
            className="bg-cream text-charcoal px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Xem tất cả dự án
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
