import React from 'react';
import { Mail, Twitter, StickyNote } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-glass-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-14 gap-10">
          <div className="text-center md:text-left">
            <h2 className="font-display text-3xl font-bold mb-4 tracking-tight">
              Kento<span className="text-accent-200">.</span>M
            </h2>
            <p className="text-glass-100 text-sm mb-2 max-w-xs leading-relaxed">
              島根を拠点に、AI・Web技術で地方のDXを実装。<br />
              確かな技術と実績で、あなたのビジネスをサポートします。
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-display font-bold text-lg text-glass-50">Contact Info</h3>
            <a href="mailto:airifubaogaochanneru@gmail.com" className="flex items-center text-glass-100 hover:text-accent-200 transition-colors">
              <Mail size={18} className="mr-3" />
              airifubaogaochanneru@gmail.com
            </a>
          </div>

          <div className="flex space-x-5 self-center md:self-start mt-4 md:mt-0">
            <a href="https://x.com/miharaeditor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-glass-500 flex items-center justify-center hover:bg-accent-400 transition-colors" title="X (Twitter)">
              <Twitter size={20} />
            </a>
            <a href="https://note.com/kavu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-glass-500 flex items-center justify-center hover:bg-accent-400 transition-colors" title="Note">
              <StickyNote size={20} />
            </a>
            <a href="mailto:airifubaogaochanneru@gmail.com" className="w-10 h-10 rounded-full bg-glass-500 flex items-center justify-center hover:bg-accent-400 transition-colors" title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-glass-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-glass-200">
          <p>&copy; {new Date().getFullYear()} Kento Mihara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
