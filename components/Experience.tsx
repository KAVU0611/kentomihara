import React from 'react';
import { Video, Smartphone, Globe } from 'lucide-react';
import Reveal from './Reveal';

const Experience: React.FC = () => {
  const experiences = [
    {
      year: "Project",
      title: "AI開発・自治体提案",
      company: "Matsue Sunset AI",
      desc: (
        <>
          「<a href="https://matsuesunsetai.com/" target="_blank" rel="noopener noreferrer" className="text-sunset-600 hover:underline">Matsue Sunset AI</a>」を企画・開発し、自治体への提案営業を実施。地方DXの実装に取り組む。
        </>
      )
    },
    {
      year: "2021",
      title: "プロ競技リーグ 最優秀順位率賞",
      company: "Professional Mind Sports League",
      desc: "年間順位率 2.08 という歴代最高記録を樹立し、タイトルを獲得。確率と選択の精度を競う厳しい環境で結果を残しました。"
    },
    {
      year: "Current",
      title: "YouTube Channel Editor",
      company: "Freelance",
      desc: "登録者200万人超の大手チャンネルの編集を担当。200万再生を超える動画制作に貢献。"
    },
  ];

  const services = [
    {
      icon: <Smartphone className="w-7 h-7 text-neutral-900" />,
      title: "AI・Webシステム開発",
      price: "応相談",
      descText: "React等の最新技術とAIを活用し、業務ツールや地方DXのためのWebシステムを構築します。アプリのような使い心地のサイトから、AIを組み込んだ業務効率化まで対応可能です。",
      visual: (
        <div className="rounded-lg overflow-hidden h-32 border border-neutral-100 group">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            alt="Web System Analysis"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )
    },
    {
      icon: <Globe className="w-7 h-7 text-neutral-900" />,
      title: "サイト制作",
      price: "150,000円〜",
      subPrice: "運用保守: 月10,000円〜",
      descText: "レスポンシブ対応、SEO対策。（予算に応じてファイアーウォールも付ける事が可能です）",
      visual: (
        <div>
          <p className="text-xs text-neutral-500 mb-1 font-semibold">制作実績:</p>
          <a href="https://miharads.com/" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-lg border border-neutral-200 hover:shadow-md transition-all">
            <div className="relative h-32 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600"
                alt="Dental Clinic Website"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
            </div>
            <div className="p-2 bg-neutral-50 flex justify-between items-center">
              <span className="text-xs text-neutral-600 font-medium truncate">Mihara Dental Service</span>
              <span className="text-xs text-sunset-600 font-bold">Visit Site &rarr;</span>
            </div>
          </a>
        </div>
      )
    },
    {
      icon: <Video className="w-7 h-7 text-neutral-900" />,
      title: "YouTubeマーケティング",
      price: "準備中",
      descText: "大手チャンネル（登録者200万人規模）での実務経験と、200万回再生を叩き出した実績に基づき、感覚に頼らない「論理的なYouTube運用」をサポートします。企画立案、視聴維持率の分析、そしてAIを活用した効率化まで、エンジニア視点を取り入れたマーケティング戦略を構築中です。",
      visual: (
        <div className="rounded-lg overflow-hidden h-32 border border-neutral-100 group">
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
            alt="Video Editing Workspace"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )
    }
  ];

  const skills = [
    { name: "Certifications", tags: ["Java Silver", "AWS SAA"] },
    { name: "Development", tags: ["Java", "App Development", "Web Development"] },
    { name: "Creative", tags: ["Video Editing (Premiere Pro)", "Thumbnail Design", "Photoshop"] },
  ];

  return (
    <section id="experience" className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Pricing / Menu Section */}
        <div className="mb-28">
          <Reveal className="text-center mb-14">
            <p className="font-display text-sunset-600 font-semibold tracking-[0.2em] uppercase text-sm mb-3">Service Menu</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900">提供可能なサービスと料金目安</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {services.map((service, idx) => (
              <Reveal key={idx} delay={idx * 100} className="w-full max-w-sm h-full">
                <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                  <div className="px-7 pt-8 pb-2 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold text-neutral-900">{service.title}</h3>
                  </div>
                  <div className="px-7 pb-7 pt-3 flex-1 flex flex-col">
                    <div className="flex items-baseline mb-1">
                      <span className="font-display text-2xl font-bold text-sunset-600">{service.price}</span>
                    </div>
                    {service.subPrice && (
                      <p className="text-sm text-neutral-500 mb-2">{service.subPrice}</p>
                    )}
                    <p className="text-neutral-600 text-sm leading-relaxed mt-2 mb-6">
                      {service.descText}
                    </p>

                    {/* Visual Content anchored to bottom */}
                    <div className="mt-auto pt-2">
                      {service.visual}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <Reveal>
            <h3 className="font-display text-2xl font-bold text-neutral-900 mb-10 flex items-center">
              <span className="w-1.5 h-7 bg-sunset-500 mr-3 rounded-full"></span>
              Experience &amp; Achievements
            </h3>
            <div className="space-y-8 border-l border-neutral-200 ml-2 pl-8 relative">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-4 border-neutral-50 bg-sunset-500"></span>
                  <div className="bg-white p-6 rounded-xl border border-neutral-100 hover:shadow-md transition-shadow">
                    <span className="font-display text-sm text-sunset-600 font-semibold">{exp.year}</span>
                    <h4 className="text-xl font-bold text-neutral-900 mt-1">{exp.title}</h4>
                    <p className="text-neutral-500 text-sm mb-3">{exp.company}</p>
                    <div className="text-neutral-600 text-sm leading-relaxed">{exp.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Skills Grid */}
          <Reveal delay={120}>
            <h3 className="font-display text-2xl font-bold text-neutral-900 mb-10 flex items-center">
              <span className="w-1.5 h-7 bg-neutral-900 mr-3 rounded-full"></span>
              Certifications &amp; Skills
            </h3>
            <div className="space-y-5">
              {skills.map((skill, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-neutral-100 hover:shadow-md transition-shadow">
                  <h4 className="font-display text-lg font-bold text-neutral-900 mb-3">{skill.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Additional Contact Call to Action */}
              <div className="bg-neutral-900 p-7 rounded-xl mt-6">
                <p className="font-display text-white font-semibold mb-2">ご相談・お見積もりはこちら</p>
                <p className="text-sm text-neutral-300 mb-5">
                  AI・システム開発やサイト制作、長期の動画編集案件など、お気軽にご相談ください。
                </p>
                <a href="mailto:sakazuki080@gmail.com" className="inline-block bg-sunset-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-sunset-600 transition-colors">
                  メールを送る
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;
