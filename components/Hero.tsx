import React from 'react';
import { ArrowDown, Youtube, Award, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 lg:pt-0">
      {/* Background decoration — サンセット系の淡いグロー */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] rounded-full bg-sunset-100/60 blur-3xl"></div>
        <div className="absolute bottom-[-15%] left-[-8%] w-[600px] h-[600px] rounded-full bg-neutral-100 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left pt-10 lg:pt-0 order-2 lg:order-1">
            <span className="font-display text-sunset-600 font-semibold tracking-[0.2em] uppercase mb-5 block text-sm animate-fade-in-up">
              AI Engineer &middot; Shimane
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] mb-7 tracking-tight">
              Kento Mihara<br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-neutral-500 mt-3 block">
                地方からはじめる、AIとDXの実装。
              </span>
            </h1>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-9 text-sm text-neutral-700 font-medium">
              <span className="flex items-center bg-sunset-50 text-sunset-700 px-3.5 py-1.5 rounded-full border border-sunset-100">
                <Sparkles className="w-4 h-4 mr-2" /> AI / DX 開発
              </span>
              <span className="flex items-center bg-neutral-50 text-neutral-700 px-3.5 py-1.5 rounded-full border border-neutral-200">
                <Youtube className="w-4 h-4 mr-2" /> 200万再生達成
              </span>
              <span className="flex items-center bg-neutral-50 text-neutral-700 px-3.5 py-1.5 rounded-full border border-neutral-200">
                <Award className="w-4 h-4 mr-2" /> 2021年 最優秀順位率賞
              </span>
            </div>

            <p className="text-lg text-neutral-600 mb-9 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              島根を拠点に、AI・Web技術で地方のDXを実装するエンジニア。
              自治体向け「Matsue Sunset AI」の企画・開発から、200万人規模チャンネルの動画運用まで、
              データと論理にもとづいて課題を解決します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-sunset-500 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-neutral-900/10"
              >
                開発・制作を相談する
              </a>
              <a
                href="#experience"
                className="px-8 py-4 bg-white text-neutral-900 border border-neutral-200 rounded-full font-medium hover:border-neutral-900 transition-all"
              >
                サービスを見る
              </a>
            </div>
          </div>

          {/* Image Content (Bust Shot) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[400px] lg:h-[480px]">
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sunset-200 to-transparent rounded-3xl opacity-40 blur-2xl transform translate-x-4 translate-y-4"></div>

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-8 border-white shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
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
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:-right-4 bg-white p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow z-20 border border-neutral-50">
                <div className="w-3 h-3 bg-sunset-500 rounded-full"></div>
                <div>
                  <p className="text-xs text-neutral-500 font-semibold">Available for</p>
                  <p className="text-sm font-bold text-neutral-900">AI &amp; Web Dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-300 hidden sm:block">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
