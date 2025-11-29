import React from 'react';
import { CheckCircle2, Trophy, Youtube, Image as ImageIcon, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { label: "YouTube編集", desc: "200万再生達成 / 登録者200万人超のチャンネル担当" },
    { label: "競技実績", desc: "プロリーグ 2021年最優秀順位率賞 (2.08 歴代最高)" },
    { label: "サムネイル制作", desc: "200枚以上の制作実績" },
    { label: "ビジネススキル", desc: "自治体への提案営業 / アプリ開発経験" }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Standing Image Side */}
          <div className="relative order-2 md:order-1">
             <div className="relative h-[600px] w-full max-w-md mx-auto md:max-w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 group">
                {/* 
                   Please place your standing image as 'standing_shot.jpg' in the public folder.
                */}
                <img 
                  src="/standing_shot.jpg"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                    e.currentTarget.alt = "Please add standing_shot.jpg to public folder";
                  }}
                  alt="Kento Mihara Full Body"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm font-light tracking-wider uppercase mb-1">Professional</p>
                  <p className="text-2xl font-bold">Kento Mihara</p>
                  <p className="text-sm opacity-90">三原 健人</p>
                </div>
             </div>
             
             {/* Decorative Box */}
             <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-50 rounded-2xl -z-10 hidden md:block"></div>
          </div>

          {/* Content Side */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Web, Video & <br/>
              <span className="text-indigo-600">Strategic Sales</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              クリエイティブな制作スキルと、堅実なビジネススキルを兼ね備えています。
              YouTube動画編集では登録者200万人規模のチャンネルを担当し、確かな数字を残してきました。
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              また、統計が必要な競技において培った「状況判断力」と「勝負強さ」をビジネスにも活かしています。
              自治体への提案営業からアプリ開発まで、クライアントのニーズに合わせて幅広く対応可能です。
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <CheckCircle2 className="text-indigo-500 w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="block text-gray-900 font-bold text-sm">{item.label}</span>
                    <span className="text-gray-600 text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-gray-900">200<span className="text-indigo-600 text-xl">+</span></span>
                  <span className="text-sm text-gray-500">Thumbnails Created</span>
               </div>
               <div className="w-px bg-gray-200 h-12 mx-4"></div>
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-gray-900">200<span className="text-indigo-600 text-xl">M+</span></span>
                  <span className="text-sm text-gray-500">YouTube Views</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;