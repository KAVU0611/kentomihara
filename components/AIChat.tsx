import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Bot, User, RefreshCw, Sparkles } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'こんにちは！AIアシスタントです。私の経歴やスキルについて、何でも聞いてください。' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Using useCallback to prevent infinite loop issues, though not strictly recursive here.
  const handleSend = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setIsLoading(true);

    // Optimistic update
    const newMessages: ChatMessage[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(newMessages);

    try {
      // Prepare history for API (excluding errors)
      const history = newMessages
        .filter(m => !m.isError)
        .map(m => ({ role: m.role, text: m.text }));

      const responseText = await generateChatResponse(history, userMessage);
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'すみません、エラーが発生しました。', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages([{ role: 'model', text: 'チャットをリセットしました。改めて何でも聞いてください！' }]);
  };

  return (
    <section id="chat" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
                <Sparkles className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Talk to my AI Persona</h2>
            <p className="mt-2 text-gray-500">Gemini 2.5 Flashを活用して、私の代わりにAIが質問にお答えします。</p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col h-[600px]">
          
          {/* Header */}
          <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base">Kenta's AI Assistant</h3>
                <p className="text-xs text-indigo-200 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button 
                onClick={handleReset}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                title="Reset Chat"
            >
                <RefreshCw size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[80%] md:max-w-[70%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end gap-2`}>
                  <div 
                    className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                        msg.role === 'user' ? 'bg-gray-200 text-gray-600' : 'bg-indigo-100 text-indigo-600'
                    }`}
                  >
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  
                  <div
                    className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gray-800 text-white rounded-br-none'
                        : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                    } ${msg.isError ? 'border-red-500 border bg-red-50 text-red-600' : ''}`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
             {isLoading && (
                <div className="flex justify-start w-full">
                   <div className="flex flex-row items-end gap-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex-shrink-0 flex items-center justify-center">
                            <Bot size={16} />
                        </div>
                        <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-bl-none shadow-sm flex space-x-2 items-center">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                   </div>
                </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex space-x-2 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="経歴やスキルについて聞いてみてください..."
                className="flex-1 bg-gray-100 border-0 text-gray-900 text-sm rounded-full focus:ring-2 focus:ring-indigo-500 focus:bg-white block w-full p-4 pr-12 transition-all placeholder-gray-400"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className={`absolute right-2 top-2 p-2 rounded-full transition-all ${
                    input.trim() && !isLoading 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-center text-gray-400 mt-2">
                AI can make mistakes. Please contact me directly for important inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;