import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const About: React.FC = () => {
  const highlights = [
    { label: "AI・DX開発", desc: "自治体向け『Matsue Sunset AI』を企画・開発・提案" },
    { label: "YouTube編集", desc: "200万再生達成 / 登録者200万人超のチャンネル担当" },
    { label: "競技実績", desc: "プロリーグ 2021年最優秀順位率賞 (2.08 歴代最高)" },
    { label: "サムネイル制作", desc: "200枚以上の制作実績" },
  ];

  return (
    <section id="about" className="py-28 bg-glass-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Standing Image Side */}
          <Reveal className="relative order-2 md:order-1">
            <div className="relative h-[600px] w-full max-w-md mx-auto md:max-w-full rounded-2xl overflow-hidden shadow-2xl glass-card group">
              <img
                src="/miharakentojiga/1000005188.png"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                  e.currentTarget.alt = "Please add 1000005188.png to public/miharakentojiga";
                }}
                alt="Kento Mihara Full Body"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-glass-900/80 to-transparent"></div>

              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-display text-sm font-light tracking-[0.2em] uppercase mb-1 text-accent-200">Professional</p>
                <p className="text-2xl font-bold text-glass-50">Kento Mihara</p>
                <p className="text-sm text-glass-100">三原 健人</p>
              </div>
            </div>

            {/* Decorative Box */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-400/20 rounded-2xl -z-10 hidden md:block border border-accent-400/20"></div>
          </Reveal>

          {/* Content Side */}
          <Reveal delay={120} className="order-1 md:order-2">
            <p className="font-display text-accent-200 font-semibold tracking-[0.2em] uppercase text-sm mb-4">About</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-glass-50 mb-7 leading-tight">
              AI &amp; Web Engineering,<br />
              <span className="text-accent-200">rooted in Shimane.</span>
            </h2>
            <p className="text-glass-100 text-lg leading-relaxed mb-6">
              島根を拠点に、AIとWeb技術で地方のDXを実装するエンジニアです。
              自治体向けプロダクト『Matsue Sunset AI』の企画・開発・提案を行い、
              地域に根ざした課題解決に取り組んでいます。
            </p>
            <p className="text-glass-100 leading-relaxed mb-9">
              YouTube動画編集では登録者200万人規模のチャンネルを担当し、確かな数字を残してきました。
              統計が必要な競技で培った「状況判断力」と「勝負強さ」を、開発と運用の両面に活かしています。
            </p>

            <div className="grid grid-cols-1 gap-3 mb-9">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 py-2">
                  <CheckCircle2 className="text-accent-200 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-glass-50 font-bold text-sm">{item.label}</span>
                    <span className="text-glass-100 text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-8 border-t border-glass-300 pt-8">
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-glass-50">200<span className="text-accent-200 text-xl">+</span></span>
                <span className="text-sm text-glass-100">Thumbnails Created</span>
              </div>
              <div className="w-px bg-glass-300 self-stretch"></div>
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-glass-50">200<span className="text-accent-200 text-xl">M+</span></span>
                <span className="text-sm text-glass-100">YouTube Views</span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default About;
