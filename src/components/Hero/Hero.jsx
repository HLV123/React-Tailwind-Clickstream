import React, { useEffect } from 'react';
import { Play, Check } from 'lucide-react';
import { IMAGES, STATS } from '../../utils/constants';
import ClickstreamLogger from '../../utils/ClickstreamLogger';

const Hero = () => {
  useEffect(() => {
    ClickstreamLogger.logSectionView('home', 'Hero Section');
  }, []);

  const handleExploreClick = () => {
    ClickstreamLogger.logClick('button', 'Khám phá dự án', 'hero-explore');
  };

  const handleShowreelClick = () => {
    ClickstreamLogger.logClick('button', 'Xem showreel', 'hero-showreel');
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden noise">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '-4s' }} />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-sand/50 px-4 py-2 rounded-full animate-fade-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-charcoal/70">Solutions Provider since 2020</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-charcoal leading-tight animate-fade-up stagger-1" style={{ opacity: 0 }}>
              Chúng tôi tạo ra
              <span className="block gradient-text">giải pháp</span>
              mà số ít mang lại
            </h1>

            <p className="text-lg text-charcoal/60 max-w-md leading-relaxed animate-fade-up stagger-2" style={{ opacity: 0 }}>
              Kết hợp công nghệ tiên tiến và kinh nghiệm thực tiễn để mang đến những giải pháp xuất sắc.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up stagger-3" style={{ opacity: 0 }}>
              <button onClick={handleExploreClick} className="btn-primary">
                Khám phá dự án
              </button>
              <button onClick={handleShowreelClick} className="group flex items-center gap-3 px-8 py-4 text-charcoal font-medium">
                <span className="w-12 h-12 rounded-full border-2 border-charcoal/20 flex items-center justify-center group-hover:bg-charcoal group-hover:text-cream transition-all duration-300">
                  <Play size={16} fill="currentColor" />
                </span>
                Xem showreel
              </button>
            </div>

            <div className="flex gap-12 pt-8 border-t border-charcoal/10 animate-fade-up stagger-4" style={{ opacity: 0 }}>
              {STATS.map((stat, index) => (
                <div key={index}>
                  <div className="font-display text-3xl font-bold text-charcoal">{stat.number}</div>
                  <div className="text-sm text-charcoal/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up stagger-5" style={{ opacity: 0 }}>
            <div className="relative z-10">
              <img src={IMAGES.hero} alt="Đội ngũ LeVanHung" className="rounded-3xl shadow-2xl image-hover w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Dự án mới</div>
                    <div className="text-sm text-charcoal/50">Hoàn thành hôm nay</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-24 h-24 border-2 border-primary/30 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
