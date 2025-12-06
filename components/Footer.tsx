import React from 'react';
import { Mail, Phone, Twitter, StickyNote } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">Kento.M</h2>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              動画編集、Web制作、アプリ開発。<br/>
              確かな技術と実績で、あなたのビジネスをサポートします。
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
             <h3 className="font-bold text-lg text-gray-200">Contact Info</h3>
             <a href="mailto:sakazuki080@gmail.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail size={18} className="mr-3" />
                sakazuki080@gmail.com
             </a>
             <a href="tel:080-1642-0588" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone size={18} className="mr-3" />
                080-1642-0588
             </a>
          </div>

          <div className="flex space-x-6 self-center md:self-start mt-4 md:mt-0">
            <a href="https://x.com/miharaeditor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-black transition-colors" title="X (Twitter)">
              <Twitter size={20} />
            </a>
            <a href="https://note.com/kavu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors" title="Note">
              <StickyNote size={20} />
            </a>
            <a href="mailto:sakazuki080@gmail.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors" title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kento Mihara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
