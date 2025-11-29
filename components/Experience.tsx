import React from 'react';
import { Video, Smartphone, PenTool, Globe } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
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
    {
      year: "Project",
      title: "App Development & Sales",
      company: "Matsue Sunset AI",
      desc: (
          <>
            「<a href="https://matsuesunsetai.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Matsue Sunset AI</a>」を企画・開発し、自治体への提案営業を実施。
          </>
      )
    }
  ];

  const services = [
    {
        icon: <Video className="w-8 h-8 text-white" />,
        title: "動画編集",
        price: "30,000円〜",
        color: "bg-red-500",
        descText: "YouTube動画、PR動画など。視聴維持率を意識した高品質な編集を提供します。",
        visual: (
            <div className="rounded-lg overflow-hidden h-32 border border-gray-100 group">
                <img
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
                    alt="Video Editing Workspace"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>
        )
    },
    {
        icon: <PenTool className="w-8 h-8 text-white" />,
        title: "デザイン制作",
        price: "5,000円〜",
        color: "bg-orange-500",
        descText: "サムネイル（実績200枚以上）、バナー、各種デザイン素材の制作。",
        visual: (
            <div className="rounded-lg overflow-hidden h-32 border border-gray-100 group">
                <img
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
                    alt="Creative Design Art"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>
        )
    },
    {
        icon: <Globe className="w-8 h-8 text-white" />,
        title: "サイト制作",
        price: "150,000円〜",
        subPrice: "運用保守: 月10,000円〜",
        color: "bg-indigo-600",
        descText: "レスポンシブ対応、SEO対策。（予算に応じてファイアーウォールも付ける事が可能です）",
        visual: (
            <div>
               <p className="text-xs text-gray-500 mb-1 font-semibold">制作実績:</p>
               <a href="https://miharads.com/" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-lg border border-gray-200 hover:shadow-md transition-all">
                  <div className="relative h-32 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600" 
                        alt="Dental Clinic Website" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                  <div className="p-2 bg-gray-50 flex justify-between items-center">
                      <span className="text-xs text-gray-600 font-medium truncate">Mihara Dental Service</span>
                      <span className="text-xs text-indigo-600 font-bold">Visit Site &rarr;</span>
                  </div>
               </a>
            </div>
        )
    },
    {
        icon: <Smartphone className="w-8 h-8 text-white" />,
        title: "Webシステム・業務ツール開発",
        price: "応相談",
        color: "bg-blue-600",
        descText: "React等の最新技術を用い、アプリのような使い心地のWebサイトを構築します。",
        visual: (
            <div className="rounded-lg overflow-hidden h-32 border border-gray-100 group">
                <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                    alt="Web System Analysis"
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
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pricing / Menu Section */}
        <div className="mb-24">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Service Menu</h2>
                <p className="mt-4 text-xl text-gray-500">提供可能なサービスと料金目安</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                        <div className={`${service.color} p-6 flex justify-center`}>
                            {service.icon}
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 min-h-[56px] flex items-center">{service.title}</h3>
                            <div className="flex items-baseline mb-2">
                                <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                            </div>
                            {service.subPrice && (
                                <p className="text-sm text-gray-500 mb-2 -mt-1">{service.subPrice}</p>
                            )}
                            <p className="text-gray-600 text-sm leading-relaxed mt-2 mb-6">
                                {service.descText}
                            </p>
                            
                            {/* Visual Content anchored to bottom */}
                            <div className="mt-auto pt-2">
                                {service.visual}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="w-2 h-8 bg-indigo-500 mr-3 rounded-full"></span>
              Experience & Achievements
            </h3>
            <div className="space-y-8 border-l-2 border-gray-200 ml-3 pl-8 relative">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-indigo-500"></span>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm text-indigo-600 font-semibold">{exp.year}</span>
                    <h4 className="text-xl font-bold text-gray-900 mt-1">{exp.title}</h4>
                    <p className="text-gray-500 text-sm mb-3">{exp.company}</p>
                    <div className="text-gray-600 text-sm">{exp.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="w-2 h-8 bg-pink-500 mr-3 rounded-full"></span>
              Certifications & Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{skill.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Additional Contact Call to Action */}
              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mt-6">
                <p className="text-indigo-800 font-medium mb-2">ご相談・お見積もりはこちら</p>
                <p className="text-sm text-gray-600 mb-4">
                    アプリ制作や長期の動画編集案件など、お気軽にご相談ください。
                </p>
                <a href="mailto:sakazuki080@gmail.com" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                    メールを送る
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;