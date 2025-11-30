import React from 'react';
import { ArrowDown, Youtube, Award, Smartphone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20 lg:pt-0">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-50/50 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left pt-10 lg:pt-0 order-2 lg:order-1">
            <span className="text-indigo-600 font-semibold tracking-wider uppercase mb-4 block animate-fade-in-up">
              Video Editor & App Developer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
              Kento Mihara<br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-600 mt-2 block">
                Creating Impactful Digital Content
              </span>
            </h1>
            
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 text-sm sm:text-base text-gray-700 font-medium">
                <span className="flex items-center bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">
                    <Youtube className="w-4 h-4 mr-2" /> 200万再生達成
                </span>
                 <span className="flex items-center bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full border border-yellow-100">
                    <Award className="w-4 h-4 mr-2" /> 2021年 最優秀順位率賞
                </span>
            </div>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              登録者200万人超チャンネルの編集担当として、確かな実績を持つクリエイター。
              アプリ開発から自治体への提案営業まで、幅広いビジネススキルで課題を解決します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-lg"
              >
                制作・開発を依頼する
              </a>
              <a
                href="#experience"
                className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all"
              >
                料金プランを見る
              </a>
            </div>
          </div>

          {/* Image Content (Bust Shot) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2">
             <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[400px] lg:h-[480px]">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-transparent rounded-3xl opacity-30 blur-2xl transform translate-x-4 translate-y-4"></div>
                
                {/* Profile Image Container - Rounded Rectangle */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    {/* Self portrait served from public/miharakentojiga */}
                    <img 
                      src="/miharakentojiga/1764390895121.png"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000";
                        e.currentTarget.alt = "Please add 1764390895121.png to public/miharakentojiga";
                      }}
                      alt="Kento Mihara Self Portrait" 
                      className="w-full h-full object-cover"
                    />
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:-right-4 bg-white p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow z-20 border border-gray-50">
                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                   <div>
                       <p className="text-xs text-gray-500 font-semibold">Available for</p>
                       <p className="text-sm font-bold text-gray-900">Editing & Dev</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hidden sm:block">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
