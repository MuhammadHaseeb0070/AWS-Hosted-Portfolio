
import React from 'react';
import { Send, Terminal, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="reveal-on-scroll text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">Initialize <span className="text-primary">Connection</span></h2>
          <p className="text-textDim text-lg max-w-xl mx-auto">Ready to engineer scalable solutions? Transmit your data packet below.</p>
        </div>

        <div className="reveal-on-scroll spotlight-card rounded-2xl bg-surface border border-border shadow-2xl overflow-hidden">
          <div className="spotlight-border"></div>
          
          {/* Terminal Header */}
          <div className="bg-bg px-4 py-3 border-b border-border flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-4 text-xs font-mono text-textDim flex items-center opacity-60">
              <Terminal size={12} className="mr-2" />
              usr/bin/mail-client
            </div>
          </div>

          <div className="p-8 md:p-12">
            <form action="https://formspree.io/f/xkgzqgoq" method="POST" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group relative">
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="peer w-full bg-transparent border-b border-border py-3 text-text focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                    placeholder="Name"
                    id="name"
                  />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs font-mono text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-textDim peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary cursor-text">
                    // SENDER_NAME
                  </label>
                </div>
                <div className="group relative">
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="peer w-full bg-transparent border-b border-border py-3 text-text focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                    placeholder="Email"
                    id="email"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs font-mono text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-textDim peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary cursor-text">
                    // SENDER_EMAIL
                  </label>
                </div>
              </div>
              
              <div className="group relative">
                <textarea 
                  name="message"
                  rows={4}
                  required
                  className="peer w-full bg-transparent border-b border-border py-3 text-text focus:outline-none focus:border-primary transition-colors placeholder-transparent resize-none"
                  placeholder="Message"
                  id="message"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs font-mono text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-textDim peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary cursor-text">
                  // MESSAGE_BODY
                </label>
              </div>

              <div className="flex justify-end">
                <button 
                  type="submit" 
                  className="px-8 py-4 bg-text text-bg hover:bg-primary hover:text-white font-bold rounded-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  EXECUTE TRANSMISSION
                  <Send size={18} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="mailto:muhammadhaseeb0070@gmail.com" 
            className="inline-flex items-center text-textDim hover:text-primary transition-colors font-mono group"
          >
            <span className="border-b border-transparent group-hover:border-primary transition-all">muhammadhaseeb0070@gmail.com</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
