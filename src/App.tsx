/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShoppingBag, 
  MessageSquare, 
  Clock, 
  Heart, 
  Star, 
  CheckCircle2, 
  Truck, 
  Gift, 
  Menu, 
  X,
  Coffee,
  Zap,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Product Data
const TREAT_BOXES = [
  {
    id: 'daily-cravings',
    name: 'Daily Cravings Box',
    tagline: 'The "I deserve this" pick-me-up',
    price: '₦5,500',
    description: 'Stop settling for boring snacks. This box is hand-curated for the solo snacker who needs a premium sugar rush to power through the afternoon slump.',
    includes: ['2 Gourmet Choc-Chip Cookies', '1 Signature Fudgy Brownie', '1 Glazed Sweet Pastry'],
    bestFor: 'Individual busy workers & students',
    upsell: 'Add an extra Brownie for ₦1,200',
    color: 'bg-white',
    hoverColor: 'hover:border-[#4A2C2A]',
    textColor: 'text-[#4A2C2A]',
    icon: '🍫',
    badge: 'INDIVIDUALS'
  },
  {
    id: 'chill-hangout',
    name: 'Chill & Hangout Box',
    tagline: 'The office bestie essential',
    price: '₦13,500',
    description: 'Transform any gathering into a party. Perfect for weekend vibes, movie nights, or that long-overdue catch-up with friends.',
    includes: ['6 Assorted XL Cookies', '4 Signature Brownies', '4 Mini Velvet Cupcakes', '2 Savory Puff Pastries'],
    bestFor: 'Groups of 2–4 people / Office teams',
    upsell: 'Double the savory bites for ₦3,000',
    color: 'bg-white',
    hoverColor: 'hover:border-[#4A2C2A]',
    textColor: 'text-[#4A2C2A]',
    icon: '🥨',
    featured: true,
    badge: 'GHOST BESTIE'
  },
  {
    id: 'surprise-package',
    name: 'Surprise Package',
    tagline: 'A high-value gift for special moments',
    price: '₦22,000',
    description: 'The "G.O.A.T" of gifting. We don\'t just deliver treats; we deliver emotions. Premium presentation that screams "You are special".',
    includes: ['Premium Mix (10+ Items)', 'Hand-written Custom Note', 'Signature Ribbon & Luxury Box', 'Scented Packaging'],
    bestFor: 'Hampers, Anniversaries, & Special Gifts',
    upsell: 'Add a "Happy Birthday" Balloon for ₦2,500',
    color: 'bg-white',
    hoverColor: 'hover:border-[#4A2C2A]',
    textColor: 'text-[#4A2C2A]',
    icon: '🎁',
    badge: 'GIFTING'
  }
];

const TESTIMONIALS = [
  {
    name: 'Tunde A.',
    role: 'Lead Developer',
    text: 'ZZ’s has saved my productive afternoons. The Daily Cravings box hits DIFFERENT when those 3 PM bugs start crawling in.',
    stars: 5
  },
  {
    name: 'Chioma E.',
    role: 'Graduate Student',
    text: 'Best value for money. We got the Chill & Hangout box for my birthday, and everyone was asking where it came from!',
    stars: 5
  },
  {
    name: 'Sarah O.',
    role: 'Event Planner',
    text: 'The Surprise Package is my go-to for client gifts. The packaging is elite and the treats are always fresh.',
    stars: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOrder = (boxName?: string) => {
    const phoneNumber = '2341234567890'; // Replace with real WhatsApp number
    const baseMessage = `Hi ZZ'S Treats! I'd like to place an order.`;
    const productMessage = boxName ? ` I'm interested in the ${boxName}.` : ` I'd like to see your menu.`;
    const finalMessage = encodeURIComponent(`${baseMessage}${productMessage} Please guide me on the next steps.`);
    window.open(`https://wa.me/${phoneNumber}?text=${finalMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] font-sans text-[#4A2C2A] selection:bg-[#F8C8DC] selection:text-[#4A2C2A]">
      {/* Top Urgency Banner */}
      <div className="bg-[#4A2C2A] text-[#F8C8DC] text-center py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest fixed top-0 w-full z-[60]">
        🚨 Limited Daily Slots: 8 boxes remaining for today's delivery
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#4A2C2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#4A2C2A] rounded-lg flex items-center justify-center text-[#F8C8DC] font-black text-lg italic tracking-tighter">ZZ</div>
              <span className="font-black text-lg md:text-xl tracking-tight uppercase">ZZ'S <span className="text-[#E57399]">Treats</span></span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 font-bold text-xs tracking-widest uppercase">
              <a href="#offers" className="hover:text-[#E57399] transition-colors">Our Boxes</a>
              <a href="#how-it-works" className="hover:text-[#E57399] transition-colors">Order Flow</a>
              <a href="#testimonials" className="hover:text-[#E57399] transition-colors">Reviews</a>
              <button 
                onClick={() => handleOrder()}
                className="bg-[#25D366] text-white px-5 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-sm flex items-center gap-2 cursor-pointer font-bold text-[11px]"
              >
                <div className="w-4 h-4"><MessageSquare className="w-full h-full" /></div>
                <span>ORDER VIA WHATSAPP</span>
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 cursor-pointer text-[#4A2C2A]">
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white border-t border-[#4A2C2A]/10 overflow-hidden shadow-xl"
            >
              <div className="px-6 py-8 space-y-4 flex flex-col font-bold uppercase text-center tracking-widest text-xs">
                <a href="#offers" onClick={() => setIsMenuOpen(false)} className="py-2">Our Boxes</a>
                <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="py-2">Order Flow</a>
                <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="py-2">Reviews</a>
                <button 
                  onClick={() => handleOrder()}
                  className="w-full bg-[#25D366] text-white py-4 rounded-xl mt-4 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  Order on WhatsApp
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-7xl mx-auto pt-24 md:pt-32">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-128px)]">
          {/* Hero Section (Left) */}
          <section className="lg:w-1/2 p-6 md:p-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-[#F8C8DC] px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest mb-6">
                #1 QUICK SNACK BOX IN LAGOS
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-[#4A2C2A] leading-[1.05] tracking-tight mb-8">
                Ditch the Stress. <br />
                <span className="text-[#E57399]">Grab a Box.</span> <br />
                Get Happy.
              </h1>
              
              <p className="text-base md:text-lg text-[#4A2C2A]/80 max-w-md mb-10 leading-relaxed font-medium">
                Curated treat boxes for busy workers and students who need a sweet escape without the wait. 
                Hand-packed and delivered fresh to your desk.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                <button 
                  onClick={() => handleOrder()}
                  className="w-full sm:w-auto px-8 py-4 bg-[#4A2C2A] text-white font-black rounded-xl hover:translate-y-[-2px] active:translate-y-[0px] transition-all flex items-center justify-center gap-3 text-base shadow-lg shadow-[#4A2C2A]/20 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>VIEW TODAY'S MENU</span>
                </button>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-center gap-1 font-black text-xl">
                    <span>4.9/5</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-[#E57399] text-[#E57399]" />)}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-widest opacity-40">1,200+ Satisfied Stories</span>
                </div>
              </div>

              <div className="flex gap-10 items-center border-t border-[#4A2C2A]/10 pt-8 mt-4">
                <div className="text-center group">
                  <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">🚀</div>
                  <div className="text-[10px] font-black uppercase tracking-widest leading-none">60m Drop</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">✨</div>
                  <div className="text-[10px] font-black uppercase tracking-widest leading-none">Daily Fresh</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">💬</div>
                  <div className="text-[10px] font-black uppercase tracking-widest leading-none">Chat First</div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Product Section (Right) */}
          <section id="offers" className="lg:w-1/2 bg-[#F8C8DC]/20 p-4 md:p-8 flex flex-col gap-4 overflow-y-auto max-h-[800px] lg:max-h-none">
            <div className="text-center lg:text-left mb-4 mt-8 lg:mt-0">
              <h2 className="text-2xl font-black uppercase tracking-tight">Today's Curations</h2>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Freshly baked & ready for dispatch</p>
            </div>

            {TREAT_BOXES.map((box, idx) => (
              <motion.div 
                key={box.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleOrder(box.name)}
                className={`bg-white rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row gap-4 md:gap-6 border-2 transition-all duration-300 cursor-pointer shadow-sm group relative ${box.featured ? 'border-[#4A2C2A] shadow-md ring-4 ring-[#4A2C2A]/5' : 'border-transparent hover:border-[#4A2C2A]'}`}
              >
                {box.featured && (
                  <div className="absolute top-[-10px] right-6 bg-[#4A2C2A] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="w-full sm:w-32 h-32 bg-[#FFFDF5] rounded-xl flex items-center justify-center text-5xl shadow-inner group-hover:scale-105 transition-transform duration-500">
                  {box.icon}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#4A2C2A]">{box.name}</h3>
                    <span className="text-[#E57399] font-black text-lg">{box.price}</span>
                  </div>
                  <p className="text-xs md:text-sm font-bold italic text-[#4A2C2A]/60 mb-2">{box.tagline}</p>
                  <p className="text-[11px] md:text-xs font-medium text-[#4A2C2A]/80 mb-3 leading-relaxed">
                    {box.includes.join(', ')}.
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <span className="bg-[#4A2C2A]/5 text-[#4A2C2A] px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest leading-none flex items-center gap-1.5 whitespace-nowrap">
                      <div className="w-1 h-1 rounded-full bg-[#E57399]"></div>
                      {box.badge}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-20 group-hover:opacity-100 transition-opacity whitespace-nowrap">Click to Order</span>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="mt-4 p-6 bg-[#4A2C2A] rounded-2xl text-white text-center flex flex-col items-center justify-center gap-2">
              <Gift className="w-6 h-6 text-[#F8C8DC]" />
              <div className="font-black text-xs uppercase tracking-widest italic">All boxes include custom wrapping</div>
              <div className="text-[10px] opacity-60 font-medium">Add a message on WhatsApp</div>
            </div>
          </section>
        </div>
      </main>

      {/* Simplified Footer / How It Works */}
      <footer id="how-it-works" className="bg-white p-6 md:p-8 border-t border-[#4A2C2A]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
            {[
              { id: '1', title: 'Pick a Box', desc: 'Select craving level' },
              { id: '2', title: 'WhatsApp Us', desc: 'Chat "I\'m hungry!"' },
              { id: '3', title: 'Quick Drop', desc: 'Under 60 minutes' }
            ].map(step => (
              <div key={step.id} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-[#F8C8DC] flex items-center justify-center font-black text-xs group-hover:scale-110 transition-transform">{step.id}</div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">{step.title}</p>
                  <p className="text-[10px] font-bold opacity-40 uppercase tracking-tighter">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs font-black uppercase tracking-widest mb-1 text-[#4A2C2A]">Ready to order now?</p>
            <p className="text-[10px] font-medium opacity-60 italic">Send: "Hi ZZ, I'd like to order the Chill Box to Ikeja"</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-[#4A2C2A]/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-widest opacity-20">
          <div>© 2026 ZZ'S Treats & Delights. LAGOS, NIGERIA.</div>
          <div className="flex gap-8">
            <a href="#testimonials" className="hover:opacity-100 transition-opacity">Reviews ({TESTIMONIALS.length})</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          </div>
        </div>
      </footer>

      {/* Testimonials Section (Preserved Functionality) */}
      <section id="testimonials" className="py-20 bg-[#F8C8DC]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-[#4A2C2A]/5 shadow-sm">
                <Quote className="w-8 h-8 text-[#F8C8DC] mb-6" />
                <p className="text-sm font-bold text-[#4A2C2A] mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#4A2C2A] rounded-lg flex items-center justify-center text-[#F8C8DC] font-black text-[10px] uppercase italic">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-black text-xs uppercase tracking-tight">{t.name}</div>
                    <div className="text-[9px] font-bold uppercase tracking-widest opacity-30">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-[60]">
        <button 
          onClick={() => handleOrder()}
          className="bg-[#25D366] text-white p-5 rounded-full shadow-2xl animate-bounce hover:animate-none flex items-center justify-center cursor-pointer"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
        </button>
      </div>
    </div>
  );
}
