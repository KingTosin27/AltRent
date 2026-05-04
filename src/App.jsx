import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, ShieldCheck, TrendingUp, FileText, 
  ChevronRight, Building, Users, Home, Settings, LogOut, 
  CreditCard, Wallet, Bell, Search, SlidersHorizontal, CheckCircle2, ChevronDown, Check, Zap, Banknote,
  Calendar, Smartphone, Scale, RefreshCw, Map, Filter, ArrowLeft, Shield, Lock, Loader2,
  Briefcase, Target, Heart, FileCheck, Building2, Key, Link as LinkIcon
} from 'lucide-react';

// --- Global Styles Injection ---
const FontStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');
    
    :root {
      --midnight: #0D1520;
      --alt-mint: #00F5A0;
      --surface: #F8FAFC;
      --enterprise: #3B82F6;
    }

    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--surface);
      color: var(--midnight);
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6, .font-jakarta {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }

    .glass-panel {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .glass-panel-dark {
      background: rgba(13, 21, 32, 0.6);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .hover-glow:hover {
      box-shadow: 0 0 20px rgba(0, 245, 160, 0.3);
      border-color: rgba(0, 245, 160, 0.5);
    }

    .input-focus-mint:focus {
      outline: none;
      border-color: var(--alt-mint);
      box-shadow: 0 0 0 1px var(--alt-mint);
    }

    /* Animated Line Hover Effects - FIXED CLIPPING */
    .hover-line-effect {
      position: relative;
    }
    .hover-line-effect::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: var(--alt-mint);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease-out;
      z-index: 10;
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    .hover-line-effect-blue {
      position: relative;
    }
    .hover-line-effect-blue::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: var(--enterprise);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease-out;
      z-index: 10;
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    /* Custom Scrollbar for a sleek look */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
  `}} />
);

// --- Landing Page Components ---

const Header = ({ setView, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0D1520]/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-[#0D1520] md:bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
          <div className="w-8 h-8 rounded-lg bg-[#00F5A0] flex items-center justify-center">
            <div className="w-3 h-3 bg-[#0D1520] rounded-sm" />
          </div>
          <span className={`font-jakarta text-xl font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-white md:text-[#0D1520]'}`}>
            AltRent<span className="text-[#00F5A0]">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10">
          {[
            { label: 'Home', path: 'home' },
            { label: 'Browse Homes', path: 'browse' },
            { label: 'For Renters', path: 'renters' },
            { label: 'For Landlords', path: 'landlords' },
            { label: 'Enterprise', path: 'hq' },
            { label: 'About Us', path: 'about' }
          ].map((item) => (
            <button 
              key={item.label} 
              onClick={() => setView(item.path)} 
              className={`text-sm px-5 py-2 rounded-full transition-all duration-300 ${
                currentView === item.path 
                  ? 'bg-[#00F5A0] text-[#0D1520] font-bold shadow-md' 
                  : isScrolled 
                    ? 'text-slate-300 hover:text-white hover:bg-white/10 font-medium' 
                    : 'text-[#0D1520] hover:bg-black/5 font-medium'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => setView('login')} className={`text-sm font-medium transition-colors hover:text-[#00F5A0] ${isScrolled ? 'text-white' : 'text-[#0D1520]'}`}>
            Login
          </button>
          <button onClick={() => setView('signup')} className="bg-[#00F5A0] text-[#0D1520] px-6 py-2.5 rounded-xl font-semibold text-sm transition-all hover:bg-[#00d68b] hover-glow shadow-sm">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0D1520] border-t border-white/10 p-6 flex flex-col gap-2 shadow-xl">
           {[
            { label: 'Home', path: 'home' },
            { label: 'Browse Homes', path: 'browse' },
            { label: 'For Renters', path: 'renters' },
            { label: 'For Landlords', path: 'landlords' },
            { label: 'Enterprise', path: 'hq' },
            { label: 'About Us', path: 'about' }
           ].map((item) => (
            <button 
              key={item.label} 
              onClick={() => { setView(item.path); setMobileMenuOpen(false); }} 
              className={`w-full px-4 py-3 text-left rounded-xl transition-colors ${
                currentView === item.path 
                  ? 'bg-[#00F5A0]/10 text-[#00F5A0] font-bold border border-[#00F5A0]/20' 
                  : 'text-slate-300 hover:bg-white/5 hover:text-white font-medium'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="h-px bg-white/10 my-4" />
          <button onClick={() => { setView('login'); setMobileMenuOpen(false); }} className="text-white text-left font-medium py-2 px-4 hover:bg-white/5 rounded-xl">Login</button>
          <button onClick={() => { setView('signup'); setMobileMenuOpen(false); }} className="bg-[#00F5A0] text-[#0D1520] rounded-xl font-semibold py-3 mt-2 w-full hover-glow">Get Started</button>
        </div>
      )}
    </header>
  );
};

const Hero = ({ setView }) => (
  <section className="relative pt-40 pb-16 overflow-hidden bg-[#F8FAFC]">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#e2e8f0] to-transparent rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
    
    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm mb-8">
        <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse" />
        <span className="text-xs font-medium text-slate-600">Disrupting Nigerian Real Estate</span>
      </div>
      
      <h1 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D1520] leading-[1.05] mb-6 tracking-tight">
        Stop Saving for a Year.<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1520] to-[#3B82F6]">Start Paying Rent Monthly.</span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
        Why pay 24 months of rent upfront when you earn your salary monthly? Secure premium apartments with flexible monthly subscriptions that fit your cash flow and build your credit score.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-16">
        <button onClick={() => setView('browse')} className="w-full sm:w-auto bg-[#00F5A0] text-[#0D1520] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-[#00d68b] hover-glow shadow-sm flex items-center justify-center gap-2">
          Browse Monthly Homes <ArrowRight size={20} />
        </button>
        <button onClick={() => setView('signup')} className="w-full sm:w-auto bg-transparent text-[#00F5A0] border-2 border-[#00F5A0] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-[#00F5A0]/10 flex items-center justify-center">
          Join the Waitlist
        </button>
      </div>
    </div>

    {/* Full Width Edge-to-Edge Image Section */}
    <div className="w-full relative z-10">
      <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[21/9] bg-[#0D1520]">
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000" alt="High-end Nigerian Interior" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1520]/60 to-transparent pointer-events-none" />
        
        {/* Constraint wrapper to keep the floating card aligned with the main layout grid */}
        <div className="absolute inset-0 max-w-[1400px] mx-auto px-6 pointer-events-none">
          {/* Floating UI Card - Value Prop Reinforcement */}
          <div className="absolute bottom-6 md:bottom-12 pointer-events-auto glass-panel-dark p-6 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-full max-w-[300px] sm:max-w-sm border border-white/20 hover-glow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-[#00F5A0] font-semibold mb-1 uppercase tracking-wider">Monthly Rent</p>
                <p className="text-white font-jakarta font-bold text-3xl">₦250,000</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#00F5A0]/20 flex items-center justify-center">
                <CheckCircle2 size={20} className="text-[#00F5A0]" />
              </div>
            </div>
            <div className="h-px w-full bg-white/10 mb-4" />
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <ShieldCheck size={16} className="text-[#00F5A0]" />
              <span>Verified Listing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CoreVision = () => (
  <section className="py-24 bg-[#0D1520] text-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00F5A0]/50 to-transparent" />
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/20 text-[#00F5A0] text-xs font-bold uppercase tracking-wider mb-6">
          The Why
        </div>
        <h2 className="font-jakarta text-3xl md:text-5xl font-bold mb-6">Rethinking the Nigerian Rental Economy.</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">We’ve replaced the traditional rent trap with a modern monthly subscription. No more bulk payments holding your life back.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <CreditCard size={32} className="text-[#0D1520]" />, title: "Pay as You Earn", desc: "Align your biggest expense with your monthly income. Move in without depleting your life savings.", bg: "bg-[#00F5A0]" },
          { icon: <TrendingUp size={32} className="text-white" />, title: "Credit Growth", desc: "Every monthly payment is reported to credit bureaus, helping you qualify for future mortgages.", bg: "bg-white/10 border border-white/10" },
          { icon: <ShieldCheck size={32} className="text-white" />, title: "Legal Shield", desc: "Built on the Lagos TRPB 2025/2026 Bill for automated protections and fast-track peace of mind.", bg: "bg-white/10 border border-white/10" }
        ].map((feat, i) => (
          <div key={i} className={`p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,245,160,0.1)] hover-line-effect ${i === 0 ? 'bg-[#00F5A0] text-[#0D1520]' : 'glass-panel text-white'}`}>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${feat.bg}`}>
              {feat.icon}
            </div>
            <h3 className="font-jakarta text-2xl font-bold mb-4">{feat.title}</h3>
            <p className={`leading-relaxed ${i === 0 ? 'text-[#0D1520]/80' : 'text-slate-400'}`}>{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ForTenants = () => (
  <section className="py-24 bg-white overflow-hidden" id="renters">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1 relative group">
        <div className="aspect-square md:aspect-[4/5] rounded-3xl bg-[#F8FAFC] overflow-hidden border border-[#E2E8F0] relative shadow-lg group-hover:shadow-2xl transition-all duration-500">
          <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800" alt="Tenant moving in" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          
          {/* Mockup Element */}
          <div className="absolute top-8 left-8 right-8 bg-white/90 backdrop-blur rounded-2xl p-6 shadow-xl border border-white group-hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <Banknote size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0D1520]">Income Verified</p>
                <p className="text-xs text-slate-500">via Mono API</p>
              </div>
              <div className="ml-auto text-[#00F5A0]">
                <CheckCircle2 size={24} />
              </div>
            </div>
            <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
              <div className="h-full bg-[#00F5A0] w-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="order-1 lg:order-2">
        <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#0D1520] text-white text-xs font-bold uppercase tracking-wider mb-6">
          For Tenants
        </div>
        <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#0D1520] mb-6 leading-tight">Move In Today. Flow Every Month.</h2>
        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
          Stop letting "annual rent" hold your life back. Access the best homes in Lagos and Abuja with a verified payment plan.
        </p>
        
        <ul className="space-y-6 mb-10">
          {[
            { title: "Verified Listings", desc: "Only properties from vetted, legitimate owners." },
            { title: "Instant Verification", desc: "Approve your monthly payments in under 15 minutes via Mono." },
            { title: "Secure Deposit", desc: "Your security deposit is held in escrow and is fully refundable upon exit." }
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-[#E2E8F0]">
              <div className="w-8 h-8 rounded-full bg-[#00F5A0]/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Check size={16} className="text-[#0D1520]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0D1520] mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <button className="bg-[#00F5A0] text-[#0D1520] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-[#00d68b] hover-glow shadow-sm flex items-center gap-2">
          Find My Monthly Rental <ArrowRight size={20} />
        </button>
      </div>
    </div>
  </section>
);

const ForLandlords = () => (
  <section className="py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]" id="landlords">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/20 text-[#00F5A0] text-xs font-bold uppercase tracking-wider mb-6">
          For Landlords
        </div>
        <h2 className="font-jakarta text-4xl lg:text-5xl font-bold text-[#0D1520] mb-6 leading-tight">Annual Security. Monthly Remittance. Zero Arrears.</h2>
        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
          Stop chasing tenants for bulk payments. Onboard elite professionals who pay monthly via automated systems.
        </p>
        
        <ul className="space-y-6 mb-10">
          {[
            { title: "Certified Professionals", desc: "Only tenants with a high AltRent Trust Score can apply." },
            { title: "Automated Collections", desc: "BVN-linked direct debits push funds to your account instantly." },
            { title: "Fast-Track Legal", desc: "Automated 7-day notices compliant with 2025/2026 fast-track eviction laws." }
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#E2E8F0]">
              <div className="w-8 h-8 rounded-full bg-[#0D1520] flex items-center justify-center flex-shrink-0 mt-1">
                <Check size={16} className="text-[#00F5A0]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0D1520] mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <button className="bg-[#0D1520] text-[#00F5A0] border border-[#0D1520] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-[#1a2536] shadow-sm flex items-center gap-2">
          List Your Property <ArrowRight size={20} />
        </button>
      </div>

      <div className="relative group">
        <div className="aspect-square md:aspect-[4/5] rounded-3xl bg-[#0D1520] overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 relative">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" alt="Landlord Property" className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
          
          <div className="absolute bottom-8 left-8 right-8 glass-panel-dark rounded-2xl p-6 shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
            <p className="text-xs text-slate-300 uppercase tracking-widest font-bold mb-4">Remittance Status</p>
            <div className="bg-[#0D1520] border border-white/10 rounded-xl p-4 flex justify-between items-center mb-3">
              <div>
                <p className="text-white font-bold">Apt 4B, Lekki</p>
                <p className="text-xs text-[#00F5A0]">Auto-Collected via BVN</p>
              </div>
              <p className="text-xl font-jakarta font-bold text-white">₦250k</p>
            </div>
            <div className="bg-[#0D1520] border border-white/10 rounded-xl p-4 flex justify-between items-center opacity-70">
              <div>
                <p className="text-white font-bold">Unit 12, Ikoyi</p>
                <p className="text-xs text-[#00F5A0]">Auto-Collected via BVN</p>
              </div>
              <p className="text-xl font-jakarta font-bold text-white">₦400k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    { title: "Find Your Home", desc: "Select a verified property and choose the Monthly Flow option." },
    { title: "Verify via Mono", desc: "Connect your bank account for an instant, paperless affordability scan." },
    { title: "Pay & Move In", desc: "Sign your digital lease, pay your first month + deposit, and collect your keys." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/20 text-[#00F5A0] text-xs font-bold uppercase tracking-wider mb-4">
            How It Works
          </div>
          <h2 className="font-jakarta text-3xl md:text-5xl font-bold text-[#0D1520] mb-4">A Seamless 3-Step Process</h2>
        </div>

        {/* Re-engineered with perfectly connected lines and disconnected cards */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-10 left-[16.66%] w-[66.66%] h-[2px] bg-gradient-to-r from-[#E2E8F0] via-[#00F5A0] to-[#E2E8F0] z-0" />
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="group flex flex-col items-center">
                {/* Elevated Circle */}
                <div className="w-20 h-20 bg-[#F8FAFC] border-2 border-[#E2E8F0] text-[#0D1520] rounded-full flex items-center justify-center font-jakarta font-bold text-2xl mb-8 relative z-10 group-hover:bg-[#00F5A0] group-hover:border-[#00F5A0] group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(0,245,160,0.4)] transition-all duration-300">
                  {i + 1}
                </div>
                {/* Text Card */}
                <div className="bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 w-full text-center hover-line-effect flex-1">
                  <h3 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section className="py-24 bg-[#F8FAFC]" id="tiers">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/20 text-[#00F5A0] text-xs font-bold uppercase tracking-wider mb-4">
          Plans & Pricing
        </div>
        <h2 className="font-jakarta text-3xl md:text-5xl font-bold text-[#0D1520] mb-4">Select the Plan That Fits Your Rhythm.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
        {/* Pulse (Quarterly) */}
        <div className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover-line-effect">
          <h3 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-2">AltRent Pulse</h3>
          <p className="text-slate-500 text-sm mb-6">Align rent with 90-day business or project cycles.</p>
          <div className="mb-6 pb-6 border-b border-slate-100">
            <span className="text-4xl font-bold text-[#0D1520]">Quarterly</span>
          </div>
          <ul className="space-y-4 mb-8 text-sm text-slate-600">
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0D1520]" /> Standard Credit Building</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0D1520]" /> Standard Legal Coverage</li>
          </ul>
          <button className="w-full py-4 rounded-xl border-2 border-[#0D1520] text-[#0D1520] font-bold hover:bg-[#0D1520] hover:text-white transition-colors">Select Pulse</button>
        </div>

        {/* Flow (Monthly) - Highlighted */}
        <div className="bg-[#0D1520] border border-[#00F5A0]/50 p-8 rounded-3xl shadow-2xl transform md:-translate-y-4 relative hover:-translate-y-6 transition-all duration-300 hover-line-effect">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00F5A0] text-[#0D1520] px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
            Most Popular
          </div>
          <h3 className="font-jakarta text-2xl font-bold text-white mb-2">AltRent Flow</h3>
          <p className="text-slate-400 text-sm mb-6">Our most popular plan for total flexibility.</p>
          <div className="mb-6 pb-6 border-b border-white/10">
            <span className="text-4xl font-bold text-[#00F5A0]">Monthly</span>
          </div>
          <ul className="space-y-4 mb-8 text-sm text-white">
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#00F5A0]" /> Accelerated Credit Building</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#00F5A0]" /> Comprehensive Legal Protection</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#00F5A0]" /> Priority App Access</li>
          </ul>
          <button className="w-full py-4 rounded-xl bg-[#00F5A0] text-[#0D1520] font-bold text-lg hover:bg-[#00d68b] transition-colors shadow-[0_0_20px_rgba(0,245,160,0.3)]">Choose Monthly Flow</button>
        </div>

        {/* Prime (Bi-Annual) */}
        <div className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover-line-effect">
          <h3 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-2">AltRent Prime</h3>
          <p className="text-slate-500 text-sm mb-6">Premium bi-annual payments for corporate stays.</p>
          <div className="mb-6 pb-6 border-b border-slate-100">
            <span className="text-4xl font-bold text-[#0D1520]">Bi-Annual</span>
          </div>
          <ul className="space-y-4 mb-8 text-sm text-slate-600">
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0D1520]" /> Basic Credit Building</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0D1520]" /> Standard Legal Coverage</li>
          </ul>
          <button className="w-full py-4 rounded-xl border-2 border-[#0D1520] text-[#0D1520] font-bold hover:bg-[#0D1520] hover:text-white transition-colors">Select Prime</button>
        </div>
      </div>
    </div>
  </section>
);

const Waitlist = () => (
  <section className="py-24 bg-gradient-to-br from-[#0D1520] to-[#1a2536] relative border-t border-white/5" id="waitlist">
    <div className="max-w-4xl mx-auto px-6">
      <div className="glass-panel-dark p-10 md:p-14 rounded-3xl text-center relative overflow-hidden border border-white/10 shadow-2xl transition-transform hover:-translate-y-2 duration-500 hover-glow">
        {/* Accent block */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00F5A0] to-[#3B82F6]" />
        
        <h2 className="font-jakarta text-3xl md:text-5xl font-bold text-white mb-4">The Future of Renting is Monthly.</h2>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          Join over 5,000 professionals and landlords waiting to break the annual rent cycle. Get early access to monthly listings in your preferred neighborhood.
        </p>

        <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div>
            <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-wider mb-2 ml-1">Full Name</label>
            <input type="text" placeholder="e.g. Tunde Alabi" className="w-full bg-[#0D1520]/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-wider mb-2 ml-1">Email Address</label>
            <input type="email" placeholder="tunde@example.com" className="w-full bg-[#0D1520]/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-wider mb-2 ml-1">I am a...</label>
            <select className="w-full bg-[#0D1520]/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-colors appearance-none cursor-pointer">
              <option>Tenant (Looking to rent)</option>
              <option>Landlord (Property Owner)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-wider mb-2 ml-1">Preferred Location</label>
            <input type="text" placeholder="e.g. Lekki Phase 1, Lagos" className="w-full bg-[#0D1520]/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-colors" />
          </div>
          <div className="col-span-1 md:col-span-2 mt-6">
            <button type="button" className="w-full bg-[#00F5A0] text-[#0D1520] py-4 rounded-xl font-bold text-lg hover:bg-[#00d68b] transition-colors hover-glow">
              Secure My Monthly Spot
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

const Footer = ({ setView }) => (
  <footer className="bg-[#0D1520] py-16 border-t border-white/10 text-white">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Renters */}
        <div>
          <h4 className="font-jakarta font-bold text-lg mb-6 text-white">Renters</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><button onClick={() => setView('renters')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Monthly Flow</button></li>
            <li><button onClick={() => setView('renters')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Credit Building</button></li>
            <li><button onClick={() => setView('renters')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Renter FAQ</button></li>
            <li><button onClick={() => setView('home')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Waitlist</button></li>
          </ul>
        </div>

        {/* Column 2: Landlords */}
        <div>
          <h4 className="font-jakarta font-bold text-lg mb-6 text-white">Landlords</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><button onClick={() => setView('landlords')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">List Your Property</button></li>
            <li><button onClick={() => setView('landlords')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Legal Shield</button></li>
            <li><button onClick={() => setView('landlords')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">TRPB 2026 Guide</button></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="font-jakarta font-bold text-lg mb-6 text-white">Company</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><button onClick={() => setView('about')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">About AltRent</button></li>
            <li><button className="text-slate-400 hover:text-[#00F5A0] transition-colors">Contact Us</button></li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div>
          <h4 className="font-jakarta font-bold text-lg mb-6 text-white">Legal</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><button className="text-slate-400 hover:text-[#00F5A0] transition-colors">Privacy Policy</button></li>
            <li><button className="text-slate-400 hover:text-[#00F5A0] transition-colors">Terms of Service</button></li>
            <li><button className="text-slate-400 hover:text-[#00F5A0] transition-colors">Cookie Policy</button></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-slate-500 text-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#00F5A0] flex items-center justify-center">
            <div className="w-3 h-3 bg-[#0D1520] rounded-sm" />
          </div>
          <span className="font-jakarta font-bold text-white text-xl">AltRent.</span>
        </div>
        <p>AltRent: Making premium living affordable through monthly flow.</p>
        <p>&copy; 2026 AltRent Ltd. Lagos, Nigeria.</p>
      </div>
    </div>
  </footer>
);

// --- Dedicated Pages ---

const EnterprisePage = ({ setView }) => {
  return (
    <div className="animate-in fade-in duration-500 bg-[#F8FAFC]">
      {/* Enterprise Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-6">
            AltRent HQ
          </div>
          <h1 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D1520] mb-6 tracking-tight leading-[1.05]">
            Housing as a <span className="text-[#3B82F6]">High-Performance</span> Benefit.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Attract, retain, and empower your best talent by removing the stress of annual rent. Manage staff relocation and bulk rental payments through one seamless portal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setView('dashboard')} className="w-full sm:w-auto bg-[#00F5A0] text-[#0D1520] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00d68b] hover-glow shadow-sm transition-all flex items-center justify-center gap-2">
              Schedule an HQ Demo <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-[#0D1520] text-[#0D1520] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <FileText size={20} /> Download the Enterprise Guide
            </button>
          </div>
        </div>

        {/* Full Width Edge-to-Edge Image Section */}
        <div className="w-full relative z-10">
          <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[21/9] bg-[#0D1520]">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" alt="Premium Corporate Office" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1520]/60 to-transparent pointer-events-none" />
            
            <div className="absolute inset-0 max-w-[1400px] mx-auto px-6 pointer-events-none">
              <div className="absolute bottom-6 md:bottom-12 pointer-events-auto glass-panel-dark p-6 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 w-full max-w-[300px] sm:max-w-sm border border-white/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-[#3B82F6] font-semibold mb-1 uppercase tracking-wider">Active Staff Leases</p>
                    <p className="text-white font-jakarta font-bold text-3xl">42 Employees</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#3B82F6]/20 flex items-center justify-center">
                    <Building2 size={20} className="text-[#3B82F6]" />
                  </div>
                </div>
                <div className="h-px w-full bg-white/10 mb-4" />
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <ShieldCheck size={16} className="text-[#00F5A0]" />
                  <span>Managed by AltRent HQ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Corporate Problem */}
      <section className="py-24 bg-[#0D1520] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="hover:-translate-y-2 transition-transform duration-300">
            <h2 className="font-jakarta text-3xl font-bold text-slate-400 mb-4">The Burden</h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6 border-l-4 border-slate-600 pl-6 text-white">
              70% of Nigerian professionals struggle with the "Annual Rent Wall," leading to financial stress and reduced productivity.
            </p>
          </div>
          <div className="hover:-translate-y-2 transition-transform duration-300">
            <h2 className="font-jakarta text-3xl font-bold text-[#00F5A0] mb-4">The Solution</h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed border-l-4 border-[#00F5A0] pl-6 text-white">
              AltRent HQ allows companies to offer Monthly Rent as a staff benefit, ensuring your team lives in premium housing without the upfront financial drain.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-[#0D1520] mb-4">Key Features for Companies</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Building2 size={24} />, title: "Bulk Rental Management", desc: "Manage multiple employee leases across Lagos and Abuja from a single interface." },
              { icon: <FileCheck size={24} />, title: "Tax-Compliant Billing", desc: "Receive consolidated, tax-ready invoices for all staff housing expenses." },
              { icon: <Zap size={24} />, title: "Rapid Relocation", desc: "Get new hires moved into verified, high-end apartments in under 48 hours." },
              { icon: <ShieldCheck size={24} />, title: "Verified Inventory", desc: "Every apartment listed for your staff is pre-vetted for safety, quality, and ownership legitimacy." }
            ].map((f, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-2xl flex items-start gap-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 hover-line-effect-blue">
                <div className="w-14 h-14 bg-[#3B82F6]/10 text-[#3B82F6] rounded-xl flex items-center justify-center shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-jakarta text-xl font-bold text-[#0D1520] mb-2">{f.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-[#0D1520] mb-4">How It Works</h2>
          </div>
          
          {/* Connected Steps Flow */}
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-10 left-[16.66%] w-[66.66%] h-[2px] bg-gradient-to-r from-[#E2E8F0] via-[#3B82F6] to-[#E2E8F0] z-0" />
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {[
                { title: "Onboard Your Team", desc: "Add employees to your AltRent HQ account." },
                { title: "Select Housing", desc: "Employees choose from our verified 'Monthly Flow' inventory." },
                { title: "Automated Payments", desc: "AltRent handles the monthly remittances, while you receive a single monthly report." }
              ].map((step, i) => (
                <div key={i} className="group flex flex-col items-center">
                  <div className="w-20 h-20 bg-white border-2 border-[#E2E8F0] text-[#0D1520] rounded-full flex items-center justify-center font-jakarta font-bold text-2xl mb-8 relative z-10 group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6] group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                    {i + 1}
                  </div>
                  <div className="bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 w-full text-center hover-line-effect-blue flex-1">
                    <h3 className="font-jakarta text-xl font-bold text-[#0D1520] mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Benefits */}
      <section className="py-24 bg-[#0D1520] text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-jakarta text-3xl md:text-4xl font-bold mb-16">The Benefits</h2>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              { icon: <Heart size={32} />, title: "Boost Retention", desc: "Reduce employee churn by solving their biggest living expense." },
              { icon: <Target size={32} />, title: "Attract Top Talent", desc: "Stand out in the job market with a benefit that actually changes lives." },
              { icon: <TrendingUp size={32} />, title: "Predictable Cash Flow", desc: "Move staff housing from a massive upfront cost to a manageable monthly line item." }
            ].map((ben, i) => (
              <div key={i} className="flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#3B82F6] mb-6">
                  {ben.icon}
                </div>
                <h3 className="font-jakarta text-xl font-bold mb-3">{ben.title}</h3>
                <p className="text-slate-400">{ben.desc}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setView('signup')} className="bg-[#00F5A0] text-[#0D1520] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00d68b] hover-glow shadow-sm transition-all">
            Schedule an HQ Demo
          </button>
        </div>
      </section>
    </div>
  );
};

const AboutPage = ({ setView }) => {
  return (
    <div className="animate-in fade-in duration-500 bg-[#F8FAFC]">
      {/* About Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#0D1520]/5 border border-[#0D1520]/10 text-[#0D1520] text-xs font-bold uppercase tracking-wider mb-6">
            The AltRent Story
          </div>
          <h1 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D1520] mb-6 tracking-tight leading-[1.05]">
            Breaking the Cycle.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1520] to-[#00F5A0]">Building the Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            We are on a mission to destroy the "Annual Rent Wall" and give every Nigerian professional the financial dignity they deserve.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setView('browse')} className="w-full sm:w-auto bg-[#00F5A0] text-[#0D1520] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00d68b] hover-glow shadow-sm transition-all flex items-center justify-center gap-2">
              Browse Monthly Homes <ArrowRight size={20} />
            </button>
            <button onClick={() => setView('home')} className="w-full sm:w-auto bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00F5A0]/10 transition-all flex items-center justify-center gap-2">
              Join the Waitlist
            </button>
          </div>
        </div>

        {/* Full Width Edge-to-Edge Image Section */}
        <div className="w-full relative z-10">
          <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[21/9] bg-[#0D1520]">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" alt="Team collaborating" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1520]/60 to-transparent pointer-events-none" />
            
            <div className="absolute inset-0 max-w-[1400px] mx-auto px-6 pointer-events-none">
              <div className="absolute bottom-6 md:bottom-12 pointer-events-auto glass-panel-dark p-6 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-full max-w-[300px] sm:max-w-sm border border-white/20 hover-glow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-[#00F5A0] font-semibold mb-1 uppercase tracking-wider">Our Mission</p>
                    <p className="text-white font-jakarta font-bold text-xl">Financial Dignity</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#00F5A0]/20 flex items-center justify-center">
                    <Target size={20} className="text-[#00F5A0]" />
                  </div>
                </div>
                <div className="h-px w-full bg-white/10 mb-4" />
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <TrendingUp size={16} className="text-[#00F5A0]" />
                  <span>Empowering Professionals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Why We Exist & Image */}
      <section className="py-24 px-6 bg-[#0D1520] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-[#0D1520] shadow-2xl border border-white/10 group">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" alt="Nigerian Professionals" className="w-full h-full object-cover opacity-80 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div>
            <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/20 text-[#00F5A0] text-xs font-bold uppercase tracking-wider mb-6">
              Why We Exist
            </div>
            <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              In Nigeria, the rent system is broken.
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              Landlords demand 12–24 months of rent upfront, while professionals earn their income monthly. This mismatch forces thousands into debt or substandard living conditions. AltRent was built to fix this.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Core Pillars */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-[#0D1520]">Our Core Pillars</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Wallet size={32} />, title: "Liquidity", desc: "We believe you shouldn't have to empty your life savings just to have a roof over your head." },
              { icon: <ShieldCheck size={32} />, title: "Security", desc: "By integrating the Lagos TRPB 2025/2026 Bill, we provide a legal shield that protects both the tenant and the landlord." },
              { icon: <TrendingUp size={32} />, title: "Dignity", desc: "We transform rent from a 'debt' into a 'subscription' that builds your credit score for the future." }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-[#E2E8F0] text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover-line-effect">
                <div className="w-16 h-16 bg-[#00F5A0]/20 text-[#0D1520] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {pillar.icon}
                </div>
                <h3 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-4">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Tech-Legal Bridge */}
      <section className="py-24 bg-[#0D1520] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-16 h-16 bg-[#00F5A0] rounded-full flex items-center justify-center text-[#0D1520] mx-auto mb-8 shadow-[0_0_30px_#00F5A0] hover:scale-110 transition-transform">
            <Scale size={32} />
          </div>
          <h2 className="font-jakarta text-3xl md:text-5xl font-bold mb-8">The Tech-Legal Bridge</h2>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium">
            We aren't just a listing site; we are a trust protocol. By combining AI-driven underwriting (via Mono) with the latest Nigerian Tenancy Laws, we create a secure environment where monthly rent is finally possible, safe, and scalable.
          </p>
        </div>
      </section>

      {/* Section 4: Transparency */}
      <section className="py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-[#0D1520] mb-4">Our Commitment to Transparency</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Vetted Listings", desc: "We only work with landlords who pass our rigorous verification process." },
              { title: "Escrowed Deposits", desc: "Your security deposit is never 'lost'; it is held in a secure vault and returned when you move out." },
              { title: "Credit Building", desc: "We are the first platform in Nigeria to report monthly rent to credit bureaus, helping you qualify for your first mortgage." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#00F5A0] mb-4">
                  <Check size={20} className="text-[#0D1520]" />
                </div>
                <h3 className="font-jakarta text-xl font-bold text-[#0D1520] mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Join the Movement */}
      <section className="py-24 bg-[#F8FAFC] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-[#0D1520] mb-6">Join the Movement</h2>
          <p className="text-xl text-slate-600 mb-10">
            Whether you are a tenant looking for freedom or a landlord looking for security, you belong here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setView('browse')} className="w-full sm:w-auto bg-[#00F5A0] text-[#0D1520] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00d68b] shadow-sm transition-all hover-glow">
              Browse Monthly Homes
            </button>
            <button onClick={() => setView('home')} className="w-full sm:w-auto bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00F5A0]/10 transition-all">
              Join the Waitlist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const RentersPage = ({ setView }) => {
  const [openFaq, setOpenFaq] = useState(null);
  
  const faqs = [
    { q: "Do I need a guarantor?", a: "No; your AltRent Trust Score (derived via Mono) serves as your primary credential." },
    { q: "How does the security deposit work?", a: "We escrow 1–2 months of rent as a refundable deposit to cover damages, ensuring you get your money back when you exit." },
    { q: "Is this a loan?", a: "No. This is a periodic rental subscription. You aren't taking on debt; you are paying for your stay as you go." }
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-[#F8FAFC]">
      {/* Renter Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/20 text-[#00F5A0] text-xs font-bold uppercase tracking-wider mb-6">
            Housing as a Subscription
          </div>
          <h1 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D1520] mb-6 tracking-tight leading-[1.05]">
            Your Home, Your Terms.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1520] to-[#3B82F6]">No Annual Walls.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Break free from the 2-year upfront rent trap. Secure your next home with monthly or quarterly subscriptions that build your credit score while you live.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setView('browse')} className="w-full sm:w-auto bg-[#00F5A0] text-[#0D1520] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00d68b] hover-glow shadow-sm transition-all flex items-center justify-center gap-2">
              Browse Available Homes <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00F5A0]/10 transition-all">
              Join the Waitlist
            </button>
          </div>
        </div>

        {/* Full Width Edge-to-Edge Image Section */}
        <div className="w-full relative z-10">
          <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[21/9] bg-[#0D1520]">
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2000" alt="Premium Renter Apartment" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1520]/60 to-transparent pointer-events-none" />
            
            <div className="absolute inset-0 max-w-[1400px] mx-auto px-6 pointer-events-none">
              <div className="absolute bottom-6 md:bottom-12 pointer-events-auto glass-panel-dark p-6 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-full max-w-[300px] sm:max-w-sm border border-white/20 hover-glow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-[#00F5A0] font-semibold mb-1 uppercase tracking-wider">Trust Score</p>
                    <p className="text-white font-jakarta font-bold text-3xl">85 / 100</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#3B82F6]/20 flex items-center justify-center">
                    <TrendingUp size={20} className="text-[#3B82F6]" />
                  </div>
                </div>
                <div className="h-px w-full bg-white/10 mb-4" />
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <ShieldCheck size={16} className="text-[#00F5A0]" />
                  <span>Pre-Approved for Flow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renter Features */}
      <section className="py-24 bg-[#0D1520] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-jakarta text-3xl md:text-4xl font-bold mb-4">The AltRent Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <RefreshCw size={24} className="text-[#0D1520]" />, title: "AltRent Flow (Monthly)", desc: "The ultimate flexibility—pay your rent the same way you earn your salary.", bg: "bg-[#00F5A0]", text: "text-[#0D1520]" },
              { icon: <Calendar size={24} className="text-[#00F5A0]" />, title: "AltRent Pulse (Quarterly)", desc: "Perfect for entrepreneurs; align your housing costs with your 90-day business cycles.", bg: "bg-white/5 border border-white/10", text: "text-white" },
              { icon: <TrendingUp size={24} className="text-[#00F5A0]" />, title: "Rent-to-Credit", desc: "We report your on-time payments to credit bureaus, building your path to future homeownership.", bg: "bg-white/5 border border-white/10", text: "text-white" },
              { icon: <Smartphone size={24} className="text-[#00F5A0]" />, title: "Mono-Instant Verification", desc: "No physical paperwork; link your bank account for a 15-minute approval.", bg: "bg-white/5 border border-white/10", text: "text-white" }
            ].map((f, i) => (
              <div key={i} className={`p-8 rounded-2xl ${f.bg} ${f.text} hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,245,160,0.1)] transition-all duration-300 hover-line-effect`}>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="font-jakarta text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renter How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-[#0D1520] mb-4">The 4-Step Move-In</h2>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Line (4 steps) */}
            <div className="hidden md:block absolute top-10 left-[12.5%] w-[75%] h-[2px] bg-gradient-to-r from-[#E2E8F0] via-[#00F5A0] to-[#E2E8F0] z-0" />

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { title: "Find Your Space", desc: "Filter through verified properties in Lekki, Yaba, or Abuja based on your preferred payment tier." },
                { title: "Verify via Mono", desc: "Connect your bank account to generate your AltRent Trust Score instantly." },
                { title: "Sign Digitally", desc: "Execute a TRPB 2025-compliant digital lease that protects your rights as a tenant." },
                { title: "Pay & Flow", desc: "Pay your first month and a refundable security deposit to get your keys." }
              ].map((step, i) => (
                <div key={i} className="group flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#F8FAFC] border-2 border-[#E2E8F0] text-[#0D1520] rounded-full flex items-center justify-center font-jakarta font-bold text-xl mb-8 relative z-10 group-hover:bg-[#00F5A0] group-hover:border-[#00F5A0] group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(0,245,160,0.4)] transition-all duration-300">
                    {i + 1}
                  </div>
                  <div className="bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 w-full text-center hover-line-effect flex-1">
                    <h3 className="font-jakarta text-lg font-bold text-[#0D1520] mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Renter Benefits */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Capital Preservation", desc: "Keep your bulk savings for investments or emergencies instead of locking them in a landlord’s account." },
              { title: "Financial Dignity", desc: "End the 'borrowing to pay rent' cycle with predictable, automated monthly installments." },
              { title: "Vetted Security", desc: "Live in homes managed by professional landlords who respect the 2025/2026 legal framework." }
            ].map((ben, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover-line-effect">
                <div className="w-10 h-10 rounded-full bg-[#00F5A0]/20 flex items-center justify-center mb-6">
                  <Check size={20} className="text-[#0D1520]" />
                </div>
                <h3 className="font-jakarta text-xl font-bold text-[#0D1520] mb-3">{ben.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renter FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-jakarta text-3xl font-bold text-[#0D1520]">Renters’ FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-jakarta font-semibold text-sm md:text-base ${openFaq === i ? 'text-[#00F5A0]' : 'text-[#0D1520]'}`}>{faq.q}</span>
                  <ChevronDown size={20} className={`text-slate-400 transition-transform ${openFaq === i ? 'rotate-180 text-[#00F5A0]' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-[#E2E8F0] pt-4">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const LandlordsPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  
  const faqs = [
    { q: "What happens if a tenant stops paying?", a: "AltRent’s Legal Shield automatically triggers a 7-day notice and initiates the fast-track eviction process under the 2025/2026 law." },
    { q: "How do I get my bulk rent?", a: "While the MVP focuses on monthly remittance, our V1 AltRent Advance feature allows you to request 6–12 months of rent upfront via our financial partners." },
    { q: "Are there management fees?", a: "We charge a small service fee deducted from the monthly remittance to cover the credit reporting and legal shield features." }
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-[#F8FAFC]">
      {/* Landlord Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-6">
            Secure, Passive Property Income
          </div>
          <h1 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D1520] mb-6 tracking-tight leading-[1.05]">
            Annual Security. Monthly Flexibility.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1520] to-[#00F5A0]">Zero Arrears.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop chasing rent. Onboard high-quality, vetted tenants and protect your property with the AltRent Legal Shield—built for the 2025/2026 Lagos Tenancy Laws.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#0D1520] text-[#00F5A0] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1a2536] shadow-sm transition-all flex items-center justify-center gap-2 hover-glow">
              List Your Property <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-[#E2E8F0] text-[#0D1520] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#E2E8F0]/50 transition-all">
              Calculate My Advance <span className="text-xs bg-slate-200 px-2 py-1 rounded ml-2">V1 Pilot</span>
            </button>
          </div>
        </div>

        {/* Full Width Edge-to-Edge Image Section */}
        <div className="w-full relative z-10">
          <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[21/9] bg-[#0D1520]">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000" alt="Premium Investment Property" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1520]/60 to-transparent pointer-events-none" />
            
            <div className="absolute inset-0 max-w-[1400px] mx-auto px-6 pointer-events-none">
              <div className="absolute bottom-6 md:bottom-12 pointer-events-auto glass-panel-dark p-6 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-full max-w-[300px] sm:max-w-sm border border-white/20 hover:shadow-[0_0_20px_rgba(0,245,160,0.3)]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-[#00F5A0] font-semibold mb-1 uppercase tracking-wider">Monthly Remittance</p>
                    <p className="text-white font-jakarta font-bold text-3xl">₦1,250,000</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#00F5A0]/20 flex items-center justify-center">
                    <RefreshCw size={20} className="text-[#00F5A0]" />
                  </div>
                </div>
                <div className="h-px w-full bg-white/10 mb-4" />
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <ShieldCheck size={16} className="text-[#3B82F6]" />
                  <span>Legal Shield Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landlord Features */}
      <section className="py-24 bg-[#0D1520] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-jakarta text-3xl md:text-4xl font-bold mb-4">The Landlord Shield</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Scale size={24} className="text-[#00F5A0]" />, title: "The Legal Shield", desc: "Automated 7-day default notices and fast-track eviction support under the TRPB 2025/2026 bill." },
              { icon: <Users size={24} className="text-[#00F5A0]" />, title: "Certified Renter Pool", desc: "Access only the top 10% of professionals who pass our AI-driven financial underwriting." },
              { icon: <RefreshCw size={24} className="text-[#00F5A0]" />, title: "Automated Remittance", desc: "BVN-linked direct debits pull rent automatically, pushing funds to your account on schedule." },
              { icon: <Banknote size={24} className="text-[#00F5A0]" />, title: "Receivables Discounting", desc: "The option to 'sell' future rent to AltRent for an immediate lump sum payout (Coming Soon)." }
            ].map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl text-white hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,245,160,0.1)] transition-all duration-300 hover-line-effect">
                <div className="w-12 h-12 rounded-xl bg-[#00F5A0]/10 flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="font-jakarta text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landlord How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-[#0D1520] mb-4">How It Works</h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Line (4 steps) */}
            <div className="hidden md:block absolute top-10 left-[12.5%] w-[75%] h-[2px] bg-gradient-to-r from-[#E2E8F0] via-[#3B82F6] to-[#E2E8F0] z-0" />

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { title: "Onboard Units", desc: "List your property and specify your preference for Flow (Monthly) or Pulse (Quarterly) tiers." },
                { title: "Vet Applicants", desc: "Review the detailed Trust Score and income analysis for every prospective tenant." },
                { title: "Automated Execution", desc: "The platform manages the first payment, security deposit escrow, and digital signatures." },
                { title: "Passive Management", desc: "Monitor your portfolio via the dashboard while we handle the collections and legal compliance." }
              ].map((step, i) => (
                <div key={i} className="group flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#F8FAFC] border-2 border-[#E2E8F0] text-[#0D1520] rounded-full flex items-center justify-center font-jakarta font-bold text-xl mb-8 relative z-10 group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6] group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                    {i + 1}
                  </div>
                  <div className="bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 w-full text-center hover-line-effect flex-1">
                    <h3 className="font-jakarta text-lg font-bold text-[#0D1520] mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Landlord Benefits */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Eliminate Payment Delays", desc: "Our direct-debit engine ensures you never have to make a 'rent is due' phone call again." },
              { title: "Lower Vacancy Rates", desc: "By accepting periodic rent, you open your doors to thousands of salaried professionals who can’t pay 2 years upfront." },
              { title: "Faster Legal Recovery", desc: "If a default occurs, our system triggers the 2025/2026 fast-track process to recover your property in months, not years." }
            ].map((ben, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover-line-effect-blue">
                <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mb-6">
                  <ShieldCheck size={20} className="text-[#3B82F6]" />
                </div>
                <h3 className="font-jakarta text-xl font-bold text-[#0D1520] mb-3">{ben.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landlord FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-jakarta text-3xl font-bold text-[#0D1520]">Landlords’ FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-jakarta font-semibold text-sm md:text-base ${openFaq === i ? 'text-[#3B82F6]' : 'text-[#0D1520]'}`}>{faq.q}</span>
                  <ChevronDown size={20} className={`text-slate-400 transition-transform ${openFaq === i ? 'rotate-180 text-[#3B82F6]' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-[#E2E8F0] pt-4">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const BrowsePage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [paymentTier, setPaymentTier] = useState('monthly');
  const [maxPrice, setMaxPrice] = useState(500000);
  const [verifyStep, setVerifyStep] = useState(0); // 0: off, 1: intro, 2: loading, 3: success

  // Mock Property Data
  const properties = [
    { id: 1, title: 'Luxury 2-Bed Apartment', type: 'Apartment', loc: 'Lekki Phase 1, Lagos', rent: 250000, beds: 2, baths: 2, score: 75, img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Modern Studio Suite', type: 'Studio', loc: 'Yaba, Lagos', rent: 150000, beds: 1, baths: 1, score: 65, img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Premium 3-Bed Terrace', type: 'Terrace', loc: 'Gwarinpa, Abuja', rent: 400000, beds: 3, baths: 4, score: 80, img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Executive 1-Bed Flat', type: 'Apartment', loc: 'Victoria Island, Lagos', rent: 300000, beds: 1, baths: 2, score: 70, img: 'https://images.unsplash.com/photo-1502672260266-1c1e5240980c?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Spacious 4-Bed Duplex', type: 'Duplex', loc: 'Ikoyi, Lagos', rent: 800000, beds: 4, baths: 5, score: 85, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'Cozy 2-Bed Flat', type: 'Apartment', loc: 'Surulere, Lagos', rent: 180000, beds: 2, baths: 2, score: 65, img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800' },
  ];

  // Handle fake verification process
  const startVerification = () => {
    setVerifyStep(1);
  };

  const proceedToMono = () => {
    setVerifyStep(2);
    setTimeout(() => {
      setVerifyStep(3);
    }, 2500); // Simulate API call delay
  };

  const renderGrid = () => (
    <div className="max-w-[1400px] mx-auto px-6 py-8 animate-in fade-in">
      {/* Step 1: Search & Discovery Header */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E2E8F0] mb-8 sticky top-24 z-30">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          
          <div className="flex-1 w-full relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Search by Area (e.g. Lekki, Yaba) or Property Type..." className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-colors" />
          </div>

          <div className="flex-1 w-full flex flex-col md:flex-row items-center gap-6">
            <div className="w-full">
              <div className="flex justify-between text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
                <span>Max Monthly Price</span>
                <span className="text-[#0D1520]">₦{maxPrice.toLocaleString()}/mo</span>
              </div>
              <input 
                type="range" min="100000" max="1000000" step="50000" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#00F5A0]"
              />
            </div>

            <div className="flex bg-[#F8FAFC] p-1.5 rounded-xl border border-[#E2E8F0] w-full md:w-auto shrink-0">
              {['monthly', 'quarterly', 'bi-annual'].map((tier) => (
                <button 
                  key={tier} onClick={() => setPaymentTier(tier)}
                  className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-bold capitalize transition-all ${paymentTier === tier ? 'bg-white text-[#0D1520] shadow-sm border border-[#E2E8F0]' : 'text-slate-500 hover:text-[#0D1520]'}`}
                >
                  {tier}
                </button>
              ))}
            </div>

            <button className="hidden md:flex items-center justify-center gap-2 w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-slate-500 hover:text-[#0D1520] hover:border-[#0D1520] transition-colors shrink-0">
              <Map size={20} />
            </button>
          </div>

        </div>
      </div>

      {/* Step 2: Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.filter(p => p.rent <= maxPrice).map((prop) => (
          <div key={prop.id} onClick={() => setSelectedProperty(prop)} className="bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col hover-line-effect">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={prop.img} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#0D1520] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                <ShieldCheck size={14} className="text-[#00F5A0]" /> Verified
              </div>
              <div className="absolute top-4 right-4 bg-[#0D1520]/80 backdrop-blur text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {prop.type}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-jakarta text-lg font-bold text-[#0D1520] group-hover:text-[#00F5A0] transition-colors">{prop.title}</h3>
                  <p className="text-sm text-slate-500">{prop.loc}</p>
                </div>
              </div>
              
              <div className="flex gap-4 mb-4 text-sm text-slate-600 font-medium border-b border-slate-100 pb-4">
                <span>{prop.beds} Beds</span>
                <span>•</span>
                <span>{prop.baths} Baths</span>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F8FAFC] border border-[#E2E8F0] text-slate-500 px-2 py-1 rounded-md">No Annual Upfront</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F8FAFC] border border-[#E2E8F0] text-slate-500 px-2 py-1 rounded-md">Credit-Building Enabled</span>
                </div>
                
                <div className="flex items-end justify-between">
                  <div className="bg-[#00F5A0] text-[#0D1520] px-4 py-2 rounded-xl group-hover:shadow-[0_0_15px_rgba(0,245,160,0.3)] transition-all">
                    <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">AltRent Flow</p>
                    <p className="font-jakarta font-bold text-xl">₦{prop.rent.toLocaleString()}<span className="text-xs font-medium opacity-80">/mo</span></p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-[#F8FAFC] flex items-center justify-center text-slate-400 group-hover:bg-[#0D1520] group-hover:text-[#00F5A0] transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDetail = () => {
    if (!selectedProperty) return null;
    const prop = selectedProperty;
    const deposit = prop.rent; // 1 month refundable deposit
    const serviceFee = prop.rent * 0.05; // 5% service fee
    const totalDue = prop.rent + deposit + serviceFee;

    return (
      <div className="max-w-[1200px] mx-auto px-6 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button onClick={() => setSelectedProperty(null)} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#0D1520] transition-colors mb-6">
          <ArrowLeft size={16} /> Back to Grid
        </button>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Column: Images & Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#0D1520]">
              <img src={prop.img} alt={prop.title} className="w-full h-full object-cover" />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-[#0D1520] text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <ShieldCheck size={18} className="text-[#00F5A0]" /> Verified by AltRent
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="font-jakarta text-3xl md:text-4xl font-bold text-[#0D1520] mb-2">{prop.title}</h1>
                  <p className="text-lg text-slate-500 flex items-center gap-2"><Map size={18} /> {prop.loc}</p>
                </div>
              </div>

              <div className="flex gap-6 py-6 border-y border-[#E2E8F0] mb-8">
                <div className="text-center">
                  <p className="text-2xl font-jakarta font-bold text-[#0D1520]">{prop.beds}</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bedrooms</p>
                </div>
                <div className="w-px bg-[#E2E8F0]" />
                <div className="text-center">
                  <p className="text-2xl font-jakarta font-bold text-[#0D1520]">{prop.baths}</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bathrooms</p>
                </div>
                <div className="w-px bg-[#E2E8F0]" />
                <div className="text-center">
                  <p className="text-2xl font-jakarta font-bold text-[#0D1520]">{prop.type}</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Property Type</p>
                </div>
              </div>

              <div>
                <h3 className="font-jakarta text-xl font-bold text-[#0D1520] mb-4">About this property</h3>
                <p className="text-slate-600 leading-relaxed">
                  Experience premium living in this highly sought-after location. This property has been fully vetted by AltRent inspectors and meets all TRPB 2025 structural and legal requirements. Ready for immediate move-in with zero annual upfront stress.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Flow Calculator & Verification */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              
              {/* Trust Score Requirement */}
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-3xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center shrink-0 text-white">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0D1520] text-sm mb-1">Trust Score Requirement</h4>
                  <p className="text-xs text-slate-600 mb-2">This premium property requires a minimum AltRent Trust Score to unlock the monthly flow tier.</p>
                  <div className="inline-flex items-center gap-1.5 bg-white border border-blue-100 px-3 py-1.5 rounded-lg text-xs font-bold text-[#3B82F6]">
                    Requires {prop.score}+ Score
                  </div>
                </div>
              </div>

              {/* The Flow Calculator */}
              <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 md:p-8 shadow-xl">
                <h3 className="font-jakarta text-xl font-bold text-[#0D1520] mb-6">The "Flow" Calculator</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">First Month's Rent</span>
                    <span className="font-bold text-[#0D1520]">₦{prop.rent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 flex items-center gap-1 border-b border-dashed border-slate-300 pb-0.5 cursor-help" title="Fully refundable at end of lease">Security Deposit <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 ml-1">Refundable</span></span>
                    <span className="font-bold text-[#0D1520]">₦{deposit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Service & Legal Shield Fee (5%)</span>
                    <span className="font-bold text-[#0D1520]">₦{serviceFee.toLocaleString()}</span>
                  </div>
                </div>

                <div className="h-px bg-[#E2E8F0] w-full mb-6" />

                <div className="flex justify-between items-end mb-8">
                  <span className="text-sm font-bold text-[#0D1520]">Total Due Today</span>
                  <div className="text-right">
                    <span className="block font-jakarta text-3xl font-bold text-[#00F5A0]">₦{totalDue.toLocaleString()}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">To get keys</span>
                  </div>
                </div>

                <button onClick={startVerification} className="w-full bg-[#00F5A0] text-[#0D1520] py-4 rounded-xl font-bold text-lg hover:bg-[#00d68b] transition-colors shadow-[0_0_20px_rgba(0,245,160,0.3)] flex items-center justify-center gap-2 hover-glow">
                  Apply with AltRent Flow <ArrowRight size={20} />
                </button>
                <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                  <Lock size={12} /> Bank-level security. No paperwork.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-[#F8FAFC]">
      {!selectedProperty ? renderGrid() : renderDetail()}

      {/* The Verification Modal Flow (The "Mono" Moment) */}
      {verifyStep > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0D1520]/80 backdrop-blur-sm" onClick={() => verifyStep === 1 && setVerifyStep(0)} />
          
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Step 1: Intro */}
            {verifyStep === 1 && (
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-blue-50 text-[#3B82F6] rounded-xl flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <button onClick={() => setVerifyStep(0)} className="text-slate-400 hover:text-[#0D1520]"><X size={20} /></button>
                </div>
                <h3 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-2">Instant Verification</h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                  No paperwork. Just a 15-minute digital scan to verify your monthly flow. Connect your primary salary account securely via Mono.
                </p>
                <button onClick={proceedToMono} className="w-full bg-[#0D1520] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1a2536] transition-colors">
                  <Lock size={16} /> Connect Bank (via Mono)
                </button>
              </div>
            )}

            {/* Step 2: Loading (Mono API Simulation) */}
            {verifyStep === 2 && (
              <div className="p-12 flex flex-col items-center text-center justify-center h-[350px]">
                <Loader2 size={48} className="text-[#3B82F6] animate-spin mb-6" />
                <h3 className="font-jakarta text-xl font-bold text-[#0D1520] mb-2">Analyzing Cash Flow...</h3>
                <p className="text-slate-500 text-sm">Securely fetching data from your bank to generate your AltRent Trust Score.</p>
              </div>
            )}

            {/* Step 3: Success State */}
            {verifyStep === 3 && (
              <div className="p-8 text-center bg-[#0D1520] text-white">
                <div className="w-20 h-20 bg-[#00F5A0]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-14 h-14 bg-[#00F5A0] rounded-full flex items-center justify-center shadow-[0_0_30px_#00F5A0]">
                    <Check size={32} className="text-[#0D1520]" />
                  </div>
                </div>
                <h3 className="font-jakarta text-3xl font-bold mb-2 text-white">You're Pre-Approved!</h3>
                <p className="text-slate-300 mb-6 text-sm">
                  Your Trust Score is <span className="text-[#00F5A0] font-bold">82</span>. Our Legal Shield is generating your digital lease right now.
                </p>
                
                <div className="space-y-3">
                  <button onClick={() => { setVerifyStep(0); setSelectedProperty(null); }} className="w-full bg-[#00F5A0] text-[#0D1520] py-4 rounded-xl font-bold hover:bg-[#00d68b] transition-colors shadow-[0_0_20px_rgba(0,245,160,0.3)] hover-glow">
                    Sign Digital Lease
                  </button>
                  <button onClick={() => setVerifyStep(0)} className="w-full bg-transparent border border-white/20 text-white py-4 rounded-xl font-bold hover:bg-white/5 transition-colors">
                    Schedule Inspection First
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Dashboard Components ---

const DashboardSidebar = ({ role, setRole, setView }) => {
  const menuItems = {
    tenant: [
      { icon: <Home size={20} />, label: 'My Home', active: true },
      { icon: <CreditCard size={20} />, label: 'Payments', active: false },
      { icon: <TrendingUp size={20} />, label: 'Credit Path', active: false },
      { icon: <Settings size={20} />, label: 'Settings', active: false },
    ],
    landlord: [
      { icon: <Building size={20} />, label: 'Properties', active: true },
      { icon: <Wallet size={20} />, label: 'Liquidity Advance', active: false },
      { icon: <FileText size={20} />, label: 'Contracts', active: false },
      { icon: <Settings size={20} />, label: 'Settings', active: false },
    ],
    enterprise: [
      { icon: <Users size={20} />, label: 'Staff Housing', active: true },
      { icon: <FileText size={20} />, label: 'Billing & Invoices', active: false },
      { icon: <Building size={20} />, label: 'Company Profile', active: false },
      { icon: <Settings size={20} />, label: 'Settings', active: false },
    ]
  };

  return (
    <div className="w-64 bg-[#0D1520] h-screen fixed left-0 top-0 text-slate-300 flex flex-col border-r border-white/5 z-50">
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={() => setView('home')}>
          <div className="w-8 h-8 rounded-lg bg-[#00F5A0] flex items-center justify-center">
            <div className="w-3 h-3 bg-[#0D1520] rounded-sm" />
          </div>
          <span className="font-jakarta text-xl font-bold text-white tracking-tight">AltRent.</span>
        </div>

        {/* Prototype Role Switcher (For Demo Purposes) */}
        <div className="bg-white/5 p-1 rounded-lg flex text-xs font-medium mb-2 border border-white/10">
          <button onClick={() => setRole('tenant')} className={`flex-1 py-1.5 rounded-md text-center transition-colors ${role === 'tenant' ? 'bg-[#00F5A0] text-[#0D1520]' : 'hover:text-white'}`}>Tenant</button>
          <button onClick={() => setRole('landlord')} className={`flex-1 py-1.5 rounded-md text-center transition-colors ${role === 'landlord' ? 'bg-[#00F5A0] text-[#0D1520]' : 'hover:text-white'}`}>Owner</button>
          <button onClick={() => setRole('enterprise')} className={`flex-1 py-1.5 rounded-md text-center transition-colors ${role === 'enterprise' ? 'bg-[#3B82F6] text-white' : 'hover:text-white'}`}>Corp</button>
        </div>
        <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest">Demo Mode Switcher</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems[role].map((item, i) => (
          <button 
            key={i} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
              ${item.active 
                ? (role === 'enterprise' ? 'bg-[#3B82F6]/10 text-[#3B82F6]' : 'bg-[#00F5A0]/10 text-[#00F5A0]') 
                : 'hover:bg-white/5 hover:text-white'}`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-sm">
            {role === 'enterprise' ? 'AC' : 'TA'}
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-bold text-white">
              {role === 'tenant' ? 'Tunde Alabi' : role === 'landlord' ? 'Alabi Properties' : 'Acme Corp'}
            </p>
            <p className="text-xs text-slate-500 capitalize">{role}</p>
          </div>
          <button onClick={() => setView('home')} className="text-slate-500 hover:text-white transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

const DashboardTopNav = ({ title }) => (
  <header className="bg-white border-b border-[#E2E8F0] h-20 flex items-center justify-between px-8 sticky top-0 z-10">
    <h1 className="font-jakarta text-2xl font-bold text-[#0D1520]">{title}</h1>
    <div className="flex items-center gap-6">
      <div className="relative hidden md:block">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input type="text" placeholder="Search..." className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-all w-64" />
      </div>
      <button className="relative text-slate-400 hover:text-[#0D1520] transition-colors">
        <Bell size={22} />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
    </div>
  </header>
);

const TenantDashboard = () => (
  <div className="p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-gradient-to-r from-[#0D1520] to-[#1a2536] rounded-2xl p-8 text-white relative overflow-hidden shadow-lg hover:-translate-y-1 transition-transform duration-300">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F5A0]/10 rounded-full blur-[50px]" />
        <h2 className="font-jakarta text-2xl font-bold mb-2">Welcome back, Tunde.</h2>
        <p className="text-slate-400 text-sm mb-6 max-w-md">Your next monthly rent payment of ₦150,000 for your Lekki Phase 1 apartment is due in 14 days.</p>
        <button className="bg-[#00F5A0] text-[#0D1520] px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#00d68b] transition-colors hover-glow">
          Pay Now
        </button>
      </div>
      
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm flex flex-col justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-slate-700 text-sm">Credit Score Growth</h3>
          <TrendingUp size={18} className="text-[#00F5A0]" />
        </div>
        <div className="flex items-end gap-2 mb-4">
          <span className="font-jakarta text-4xl font-bold text-[#0D1520]">750</span>
          <span className="text-sm font-medium text-[#00F5A0] mb-1">+12 this month</span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#0D1520] to-[#00F5A0] w-[75%] rounded-full"></div>
        </div>
        <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
          <span>Fair</span>
          <span>Excellent</span>
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-jakarta text-lg font-bold text-[#0D1520] mb-4">Recent Activity</h3>
      <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
        {[
          { date: 'Apr 01, 2026', desc: 'Rent Payment - Flow Tier', amount: '₦150,000', status: 'Success' },
          { date: 'Mar 01, 2026', desc: 'Rent Payment - Flow Tier', amount: '₦150,000', status: 'Success' },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#00F5A0]/10 flex items-center justify-center">
                <CheckCircle2 size={18} className="text-[#00F5A0]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0D1520]">{item.desc}</p>
                <p className="text-xs text-slate-500">{item.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-[#0D1520]">{item.amount}</p>
              <p className={`text-xs font-medium ${item.status === 'Success' ? 'text-[#00F5A0]' : 'text-slate-500'}`}>{item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LandlordDashboard = () => (
  <div className="p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
    <div className="grid md:grid-cols-4 gap-6">
      <div className="md:col-span-3 bg-white border border-[#E2E8F0] rounded-2xl p-8 flex items-center justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <div>
          <h2 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-1">Portfolio Value Overview</h2>
          <p className="text-sm text-slate-500">Active properties: 3 units</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500 mb-1">Total Monthly Yield</p>
          <p className="font-jakarta text-3xl font-bold text-[#00F5A0]">₦1,250,000</p>
        </div>
      </div>

      <div className="bg-[#0D1520] rounded-2xl p-6 text-white shadow-lg flex flex-col justify-center relative overflow-hidden hover:-translate-y-1 transition-transform duration-300">
        <div className="absolute -right-4 -bottom-4 opacity-10">
          <Wallet size={100} />
        </div>
        <h3 className="font-semibold text-sm mb-4 relative z-10">Advance Liquidity</h3>
        <label className="flex items-center cursor-pointer relative z-10 mb-2">
          <div className="relative">
            <input type="checkbox" className="sr-only" defaultChecked />
            <div className="block bg-[#1a2536] w-12 h-7 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-[#00F5A0] w-5 h-5 rounded-full transition transform translate-x-5 shadow-[0_0_10px_#00F5A0]"></div>
          </div>
          <div className="ml-3 text-sm font-bold text-[#00F5A0]">Active</div>
        </label>
        <p className="text-xs text-slate-400 relative z-10">Receiving annual bulk payouts for 2/3 properties.</p>
      </div>
    </div>

    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-jakarta text-lg font-bold text-[#0D1520]">My Properties</h3>
        <button className="flex items-center gap-2 text-sm font-medium text-[#00F5A0] hover:text-[#00d68b] transition-colors">
          <SlidersHorizontal size={16} /> Filters
        </button>
      </div>
      <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-[#E2E8F0] text-xs uppercase tracking-wider text-slate-500 font-semibold">
              <th className="p-4">Property</th>
              <th className="p-4">Tenant</th>
              <th className="p-4">Monthly Rent</th>
              <th className="p-4">Liquidity Status</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              { name: '4B Bourdillon Rd, Ikoyi', tenant: 'Tunde Alabi', rent: '₦800,000', liq: 'Advanced (Paid)' },
              { name: 'Apt 12, 1004 Estate, VI', tenant: 'Sarah Johnson', rent: '₦450,000', liq: 'Advanced (Paid)' },
              { name: 'Unit 3, Chevron Dr, Lekki', tenant: 'Vacant', rent: '₦350,000', liq: 'Eligible' },
            ].map((prop, i) => (
              <tr key={i} className="border-b border-[#E2E8F0] last:border-0 hover:bg-slate-50 transition-colors">
                <td className="p-4 font-medium text-[#0D1520]">{prop.name}</td>
                <td className="p-4 text-slate-600">{prop.tenant}</td>
                <td className="p-4 font-semibold text-[#0D1520]">{prop.rent}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${prop.liq === 'Eligible' ? 'bg-slate-100 text-slate-600' : 'bg-[#00F5A0]/10 text-[#00F5A0]'}`}>
                    {prop.liq}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-slate-400 hover:text-[#0D1520] transition-colors"><ChevronRight size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const EnterpriseDashboard = () => (
  <div className="p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-[#3B82F6] text-white rounded-2xl p-6 shadow-lg shadow-blue-500/20 hover:-translate-y-1 transition-transform duration-300">
        <h3 className="font-semibold text-sm mb-4 opacity-90">Total Staff Housed</h3>
        <div className="flex items-end gap-2">
          <span className="font-jakarta text-4xl font-bold">42</span>
          <span className="text-sm opacity-90 mb-1">employees</span>
        </div>
      </div>
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <h3 className="font-semibold text-sm text-slate-500 mb-4">Monthly Corporate Bill</h3>
        <div className="flex items-end gap-2">
          <span className="font-jakarta text-3xl font-bold text-[#0D1520]">₦12.5M</span>
        </div>
      </div>
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm flex items-center justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <div>
          <h3 className="font-semibold text-sm text-slate-500 mb-1">New Allocation</h3>
          <p className="text-xs text-slate-400">Add staff to housing plan</p>
        </div>
        <button className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors shadow-md">
          <span className="text-2xl leading-none mb-1">+</span>
        </button>
      </div>
    </div>

    <div>
      <h3 className="font-jakarta text-lg font-bold text-[#0D1520] mb-4">Staff Occupancy Status</h3>
      <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse font-inter">
          <thead>
            <tr className="bg-slate-50 border-b border-[#E2E8F0] text-xs uppercase tracking-wider text-slate-500 font-semibold">
              <th className="p-4">Employee</th>
              <th className="p-4">Department</th>
              <th className="p-4">Location</th>
              <th className="p-4">Plan Tier</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              { name: 'Adekunle Gold', dept: 'Engineering', loc: 'Lekki Phase 1', plan: 'Flow (Monthly)', status: 'Active' },
              { name: 'Simi Kosoko', dept: 'Design', loc: 'Victoria Island', plan: 'Prime (Bi-Annual)', status: 'Active' },
              { name: 'Burna Boy', dept: 'Marketing', loc: 'Ikoyi', plan: 'Flow (Monthly)', status: 'Pending Move-in' },
            ].map((staff, i) => (
              <tr key={i} className="border-b border-[#E2E8F0] last:border-0 hover:bg-slate-50 transition-colors">
                <td className="p-4 font-medium text-[#0D1520] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                    {staff.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  {staff.name}
                </td>
                <td className="p-4 text-slate-600">{staff.dept}</td>
                <td className="p-4 text-slate-600">{staff.loc}</td>
                <td className="p-4 text-slate-600">{staff.plan}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${staff.status === 'Active' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                    {staff.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// --- Auth & Onboarding Flows ---

const LoginPage = ({ setView, setDashboardRole }) => {
  const [mockRole, setMockRole] = useState('tenant'); // For demo routing

  const handleLogin = (e) => {
    e.preventDefault();
    setDashboardRole(mockRole);
    setView('dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0D1520] flex items-center justify-center p-6 relative overflow-hidden animate-in fade-in duration-500">
      {/* Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#00F5A0]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 cursor-pointer mb-6" onClick={() => setView('home')}>
            <div className="w-10 h-10 rounded-xl bg-[#00F5A0] flex items-center justify-center shadow-[0_0_20px_rgba(0,245,160,0.3)]">
              <div className="w-4 h-4 bg-[#0D1520] rounded-sm" />
            </div>
            <span className="font-jakarta text-2xl font-bold tracking-tight text-white">
              AltRent<span className="text-[#00F5A0]">.</span>
            </span>
          </div>
          <h1 className="font-jakarta text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400">Log in to manage your monthly flow.</p>
        </div>

        <div className="glass-panel-dark p-8 rounded-3xl border border-white/10 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Email Address</label>
              <input 
                type="email" 
                defaultValue="tunde@example.com"
                className="w-full bg-[#0D1520] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-all" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Password</label>
              <input 
                type="password" 
                defaultValue="••••••••"
                className="w-full bg-[#0D1520] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-all" 
              />
            </div>

            {/* Mock Role Selector for Demo purposes */}
            <div className="pt-2 pb-2">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 text-center">Simulate Login As:</label>
              <div className="flex bg-[#0D1520] p-1 rounded-lg border border-white/10">
                {['tenant', 'landlord', 'enterprise'].map(r => (
                  <button 
                    type="button" 
                    key={r} 
                    onClick={() => setMockRole(r)}
                    className={`flex-1 py-1.5 rounded-md text-xs font-bold capitalize transition-colors ${mockRole === r ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-white'}`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="w-full bg-[#00F5A0] text-[#0D1520] py-4 rounded-xl font-bold text-lg hover:bg-[#00d68b] transition-colors hover-glow mt-4">
              Sign In
            </button>
          </form>

          <div className="flex items-center gap-4 my-8 opacity-50">
            <div className="h-px bg-white flex-1" />
            <span className="text-xs font-bold text-white uppercase">Or continue with</span>
            <div className="h-px bg-white flex-1" />
          </div>

          <div className="space-y-3">
            <button className="w-full bg-transparent border border-white/20 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-white/5 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
              Google
            </button>
            <button className="w-full bg-transparent border border-white/20 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-white/5 transition-colors">
              <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </button>
          </div>
        </div>
        
        <p className="text-center text-slate-500 text-sm mt-8">
          Don't have an account? <button onClick={() => setView('signup')} className="text-[#00F5A0] font-bold hover:underline">Get Started</button>
        </p>
      </div>
    </div>
  );
};

const SignUpFlow = ({ setView, setDashboardRole }) => {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isProcessingMono, setIsProcessingMono] = useState(false);

  const handleMonoAuth = () => {
    setIsProcessingMono(true);
    // Simulate Mono processing time
    setTimeout(() => {
      setIsProcessingMono(false);
      setStep(4); // Move to success state
    }, 3000);
  };

  const handleFinalRedirect = () => {
    setDashboardRole(selectedRole);
    setView('dashboard'); // Fade to black/portal handled by top-level state switch
  };

  return (
    <div className={`min-h-screen bg-[#0D1520] flex flex-col items-center justify-center p-6 relative overflow-hidden transition-all duration-1000 ${step === 4 ? 'bg-[#00F5A0]/10' : ''}`}>
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00F5A0]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-4xl relative z-10">
        
        {/* Header Nav inside flow */}
        <div className="absolute top-[-80px] left-0 right-0 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <div className="w-8 h-8 rounded-xl bg-[#00F5A0] flex items-center justify-center">
              <div className="w-3 h-3 bg-[#0D1520] rounded-sm" />
            </div>
            <span className="font-jakarta text-xl font-bold text-white">AltRent.</span>
          </div>
          <button onClick={() => setView('login')} className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Log In Instead</button>
        </div>

        {/* --- STEP 1: Role Selection --- */}
        {step === 1 && (
          <div className="animate-in slide-in-from-bottom-8 duration-500">
            <div className="text-center mb-12">
              <h1 className="font-jakarta text-4xl md:text-5xl font-bold text-white mb-4">How do you want to use AltRent?</h1>
              <p className="text-slate-400 text-lg">Select your primary account type to customize your experience.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { id: 'tenant', icon: <Home size={32} />, title: "I am a Renter", desc: "Pay monthly and build credit." },
                { id: 'landlord', icon: <Key size={32} />, title: "I am a Landlord", desc: "List properties and get upfront liquidity." },
                { id: 'enterprise', icon: <Building2 size={32} />, title: "I am a Corporate Partner", desc: "Manage staff housing as a benefit." }
              ].map(role => (
                <div 
                  key={role.id} 
                  onClick={() => setSelectedRole(role.id)}
                  className={`p-8 rounded-3xl border cursor-pointer transition-all duration-300 flex flex-col items-center text-center ${
                    selectedRole === role.id 
                      ? 'bg-[#00F5A0]/10 border-[#00F5A0] shadow-[0_0_30px_rgba(0,245,160,0.2)] scale-105' 
                      : 'glass-panel-dark border-white/10 hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${selectedRole === role.id ? 'bg-[#00F5A0] text-[#0D1520]' : 'bg-white/10 text-white'}`}>
                    {role.icon}
                  </div>
                  <h3 className="font-jakarta text-xl font-bold text-white mb-2">{role.title}</h3>
                  <p className="text-slate-400 text-sm">{role.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => setStep(2)}
                disabled={!selectedRole}
                className={`px-12 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2 ${
                  selectedRole 
                    ? 'bg-[#00F5A0] text-[#0D1520] hover:bg-[#00d68b] hover-glow cursor-pointer' 
                    : 'bg-white/10 text-slate-500 cursor-not-allowed'
                }`}
              >
                Continue {selectedRole && <ArrowRight size={20} />}
              </button>
            </div>
          </div>
        )}

        {/* --- STEP 2: Basic KYC --- */}
        {step === 2 && (
          <div className="max-w-md mx-auto animate-in slide-in-from-right-8 duration-500">
            <button onClick={() => setStep(1)} className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-bold mb-8">
              <ArrowLeft size={16} /> Back
            </button>
            <div className="text-center mb-8">
              <h2 className="font-jakarta text-3xl font-bold text-white mb-2">Create Your Profile</h2>
              <p className="text-slate-400">Let's get your basic details securely set up.</p>
            </div>

            <div className="glass-panel-dark p-8 rounded-3xl border border-white/10 shadow-xl">
              <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-wider mb-2 ml-1">Full Name</label>
                  <input required type="text" className="w-full bg-[#0D1520] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-wider mb-2 ml-1">Phone Number</label>
                  <input required type="tel" className="w-full bg-[#0D1520] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-all" />
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-wider mb-2 ml-1">Email Address</label>
                  <input required type="email" className="w-full bg-[#0D1520] border border-white/10 rounded-xl px-4 py-4 pr-10 text-white focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-all" />
                  <CheckCircle2 size={16} className="absolute right-4 top-[42px] text-[#00F5A0]" /> {/* Mock instant validation */}
                </div>
                
                <div className="flex items-start gap-3 pt-4">
                  <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-white/20 bg-[#0D1520] text-[#00F5A0] focus:ring-[#00F5A0] focus:ring-offset-[#0D1520]" />
                  <p className="text-xs text-slate-400 leading-relaxed">
                    I agree to the <a href="#" className="text-white hover:text-[#00F5A0] underline">Terms of Service</a> and the <a href="#" className="text-white hover:text-[#00F5A0] underline">TRPB 2026 Legal Guidelines</a>.
                  </p>
                </div>

                <button type="submit" className="w-full bg-[#00F5A0] text-[#0D1520] py-4 rounded-xl font-bold text-lg hover:bg-[#00d68b] transition-colors hover-glow mt-4">
                  Create Profile
                </button>
              </form>
            </div>
          </div>
        )}

        {/* --- STEP 3: The Mono Trust Engine --- */}
        {step === 3 && (
          <div className="max-w-md mx-auto text-center animate-in zoom-in-95 duration-500">
            {!isProcessingMono ? (
              <>
                <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <LinkIcon size={32} />
                </div>
                <h2 className="font-jakarta text-3xl font-bold text-white mb-4">Verify Your Monthly Flow in 15 Minutes</h2>
                <p className="text-slate-400 mb-10 leading-relaxed">
                  We use <span className="text-white font-bold">Mono</span> to securely analyze your income history. No physical statements or pay slips required. Read-only access.
                </p>
                
                <div className="glass-panel-dark p-6 rounded-3xl border border-white/10 mb-8">
                  <button onClick={handleMonoAuth} className="w-full bg-[#0D1520] border-2 border-white text-white py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#0D1520] transition-colors flex items-center justify-center gap-3">
                    <Lock size={18} /> Authenticate with Mono
                  </button>
                  <p className="text-xs text-slate-500 mt-4 flex justify-center items-center gap-1">
                    <Shield size={12} /> Bank-grade 256-bit encryption
                  </p>
                </div>
                
                <button onClick={() => setStep(2)} className="text-slate-500 hover:text-white text-sm font-bold">Go Back</button>
              </>
            ) : (
              <div className="py-20 flex flex-col items-center justify-center animate-in fade-in">
                <Loader2 size={64} className="text-[#00F5A0] animate-spin mb-8" />
                <h3 className="font-jakarta text-2xl font-bold text-white mb-2">Analyzing your monthly flow...</h3>
                <p className="text-slate-400">Securely connecting to your primary bank account.</p>
              </div>
            )}
          </div>
        )}

        {/* --- STEP 4: Success/Activation State --- */}
        {step === 4 && (
          <div className="max-w-md mx-auto text-center animate-in zoom-in-90 duration-700">
            <div className="w-24 h-24 bg-[#00F5A0] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_#00F5A0]">
              <Check size={48} className="text-[#0D1520]" />
            </div>

            {selectedRole === 'tenant' && (
              <>
                <h2 className="font-jakarta text-4xl font-bold text-white mb-4">Congratulations!<br/>You are Pre-Approved.</h2>
                <p className="text-slate-300 text-lg mb-10">Your AltRent Trust Score is verified. You're ready to flow.</p>
                <button onClick={handleFinalRedirect} className="w-full bg-[#00F5A0] text-[#0D1520] py-4 rounded-xl font-bold text-lg hover:bg-[#00d68b] transition-colors hover-glow">
                  Go to Tenant Dashboard
                </button>
              </>
            )}

            {selectedRole === 'landlord' && (
              <>
                <h2 className="font-jakarta text-4xl font-bold text-white mb-4">Identity Verified.</h2>
                <p className="text-slate-300 text-lg mb-10">Your owner profile is active and secured by the Legal Shield.</p>
                <button onClick={handleFinalRedirect} className="w-full bg-[#00F5A0] text-[#0D1520] py-4 rounded-xl font-bold text-lg hover:bg-[#00d68b] transition-colors hover-glow">
                  Go to Landlord Dashboard
                </button>
              </>
            )}

            {selectedRole === 'enterprise' && (
              <>
                <h2 className="font-jakarta text-4xl font-bold text-white mb-4">HQ Account Created.</h2>
                <p className="text-[#3B82F6] font-bold text-lg mb-2">Status: Pending HQ Review</p>
                <p className="text-slate-300 mb-10">Our corporate team will activate your bulk portal within 2 hours.</p>
                <button onClick={handleFinalRedirect} className="w-full bg-[#3B82F6] text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  Go to Enterprise Dashboard
                </button>
              </>
            )}
            
            <button onClick={handleFinalRedirect} className="mt-6 text-slate-500 hover:text-white text-sm font-medium">Skip to Dashboard</button>
          </div>
        )}

      </div>
    </div>
  );
};

// --- Main Application Wrapper ---
export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'renters', 'landlords', 'browse', 'hq', 'about', 'login', 'signup', 'dashboard'
  const [dashboardRole, setDashboardRole] = useState('tenant'); // 'tenant', 'landlord', 'enterprise'

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <FontStyles />
      
      {/* Root Router logic handles fading into the dark screens for auth, or light screens for pages */}
      {['login', 'signup', 'dashboard'].includes(currentView) ? (
        <>
          {currentView === 'login' && <LoginPage setView={setCurrentView} setDashboardRole={setDashboardRole} />}
          {currentView === 'signup' && <SignUpFlow setView={setCurrentView} setDashboardRole={setDashboardRole} />}
          {currentView === 'dashboard' && (
            <div className="flex h-screen overflow-hidden bg-[#F8FAFC] animate-in fade-in duration-700">
              <DashboardSidebar role={dashboardRole} setRole={setDashboardRole} setView={setCurrentView} />
              <div className="flex-1 ml-64 overflow-y-auto">
                <DashboardTopNav title={
                  dashboardRole === 'tenant' ? 'My Home' : 
                  dashboardRole === 'landlord' ? 'Properties Overview' : 
                  'Corporate Housing'
                } />
                {dashboardRole === 'tenant' && <TenantDashboard />}
                {dashboardRole === 'landlord' && <LandlordDashboard />}
                {dashboardRole === 'enterprise' && <EnterpriseDashboard />}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="animate-in fade-in duration-500">
          <Header setView={setCurrentView} currentView={currentView} />
          <main>
            {currentView === 'home' && (
              <>
                <Hero setView={setCurrentView} />
                <CoreVision />
                <ForTenants />
                <ForLandlords />
                <HowItWorks />
                <Pricing />
                <Waitlist />
              </>
            )}
            {currentView === 'renters' && <RentersPage setView={setCurrentView} />}
            {currentView === 'landlords' && <LandlordsPage />}
            {currentView === 'browse' && <BrowsePage />}
            {currentView === 'hq' && <EnterprisePage setView={setCurrentView} />}
            {currentView === 'about' && <AboutPage setView={setCurrentView} />}
          </main>
          <Footer setView={setCurrentView} />
        </div>
      )}
    </div>
  );
}