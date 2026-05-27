import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, ShieldCheck, TrendingUp, FileText, 
  ChevronRight, Building, Users, Home, Settings, LogOut, 
  CreditCard, Wallet, Bell, Search, SlidersHorizontal, CheckCircle2, ChevronDown, Check, Zap, Banknote,
  Calendar, Smartphone, Scale, RefreshCw, Map, Filter, ArrowLeft, Shield, Lock, Loader2,
  Briefcase, Target, Heart, FileCheck, Building2, Key, Link as LinkIcon, Mail, Phone, MapPin,
  Activity, Database, AlertCircle
} from 'lucide-react';

// --- BRAND CONFIGURATION ---
const LOGO_IMAGE_URL = null; 

const Logo = ({ variant = 'dark', className = "", isApp = false }) => {
  if (LOGO_IMAGE_URL) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <img src={LOGO_IMAGE_URL} alt="AltRent Logo" className="h-8 w-auto object-contain" />
      </div>
    );
  }

  const isDark = variant === 'dark';
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-[#00F5A0] flex items-center justify-center shadow-lg shadow-[#00F5A0]/20">
        <div className="w-3 h-3 bg-[#0D1520] rounded-sm" />
      </div>
      <span className={`font-jakarta text-xl font-bold tracking-tight ${isDark ? 'text-[#0D1520]' : 'text-white'}`}>
        AltRent<span className="text-[#00F5A0]">.</span>
        {isApp && <span className="text-xs font-medium ml-1 bg-white/10 text-white px-2 py-0.5 rounded-md align-middle">APP</span>}
      </span>
    </div>
  );
};

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
        <button onClick={() => setView('home')} className="cursor-pointer outline-none">
          <Logo variant={isScrolled ? 'light' : 'dark'} className={!isScrolled ? 'md:flex' : ''} />
        </button>
        {!isScrolled && !LOGO_IMAGE_URL && (
          <style dangerouslySetInnerHTML={{__html: `
            header:not(.bg-[#0D1520]) .font-jakarta { color: var(--midnight) !important; }
          `}} />
        )}

        <nav className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10">
          {[
            { label: 'Find a Home', path: 'browse' },
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

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => setView('login')} className={`text-sm font-medium transition-colors hover:text-[#00F5A0] ${isScrolled ? 'text-white' : 'text-[#0D1520]'}`}>
            Login
          </button>
          <button onClick={() => setView('signup')} className="bg-[#00F5A0] text-[#0D1520] px-6 py-2.5 rounded-xl font-semibold text-sm transition-all hover:bg-[#00d68b] hover-glow shadow-sm">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0D1520] border-t border-white/10 p-6 flex flex-col gap-2 shadow-xl">
           {[
            { label: 'Find a Home', path: 'browse' },
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

const Hero = ({ setView, openWaitlist }) => (
  <section className="relative pt-40 pb-16 overflow-hidden bg-[#F8FAFC]">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#e2e8f0] to-transparent rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
    
    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 shadow-sm mb-8">
        <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6]">Disrupting Nigerian Real Estate</span>
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
          Find a Home <ArrowRight size={20} />
        </button>
        <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto bg-transparent text-[#3B82F6] border-2 border-[#3B82F6] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#3B82F6]/5 flex items-center justify-center">
          Join the Waitlist
        </button>
      </div>
    </div>

    <div className="w-full relative z-10">
      <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[21/9] bg-[#0D1520]">
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000" alt="High-end Nigerian Interior" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1520]/60 to-transparent pointer-events-none" />
        
        <div className="absolute inset-0 max-w-[1400px] mx-auto px-6 pointer-events-none">
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
        <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-6">
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

const ForTenants = ({ setView }) => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1 relative group">
        <div className="aspect-square md:aspect-[4/5] rounded-3xl bg-[#F8FAFC] overflow-hidden border border-[#E2E8F0] relative shadow-lg group-hover:shadow-2xl transition-all duration-500">
          <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800" alt="Tenant moving in" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          
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
        <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
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

        <button onClick={() => setView('browse')} className="bg-[#00F5A0] text-[#0D1520] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-[#00d68b] hover-glow shadow-sm flex items-center gap-2">
          Find a Home <ArrowRight size={20} />
        </button>
      </div>
    </div>
  </section>
);

const ForLandlords = ({ setView }) => (
  <section className="py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
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

        <button onClick={() => setView('list-property')} className="bg-[#00F5A0] text-[#0D1520] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-[#00d68b] hover-glow shadow-sm flex items-center gap-2">
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
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            How It Works
          </div>
          <h2 className="font-jakarta text-3xl md:text-5xl font-bold text-[#0D1520] mb-4">A Seamless 3-Step Process</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-10 left-[16.66%] w-[66.66%] h-[2px] bg-gradient-to-r from-[#E2E8F0] via-[#00F5A0] to-[#E2E8F0] z-0" />
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="group flex flex-col items-center">
                <div className="w-20 h-20 bg-[#F8FAFC] border-2 border-[#E2E8F0] text-[#0D1520] rounded-full flex items-center justify-center font-jakarta font-bold text-2xl mb-8 relative z-10 group-hover:bg-[#00F5A0] group-hover:border-[#00F5A0] group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(0,245,160,0.4)] transition-all duration-300">
                  {i + 1}
                </div>
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

const Pricing = ({ setView }) => (
  <section className="py-24 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          Plans & Pricing
        </div>
        <h2 className="font-jakarta text-3xl md:text-5xl font-bold text-[#0D1520] mb-4">Select the Plan That Fits Your Rhythm.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
        <div className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover-line-effect">
          <h3 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-2">AltRent Pulse</h3>
          <p className="text-slate-500 text-sm mb-6 h-10">Align rent with 90-day business or project cycles.</p>
          <div className="mb-6 pb-6 border-b border-slate-100">
            <span className="text-4xl font-bold text-[#0D1520]">Quarterly</span>
          </div>
          <ul className="space-y-4 mb-8 text-sm text-slate-600 flex-1">
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0D1520]" /> Standard Credit Building</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0D1520]" /> Standard Legal Coverage</li>
          </ul>
          <button onClick={() => setView('pricing')} className="w-full py-4 rounded-xl border-2 border-[#3B82F6] text-[#3B82F6] font-bold hover:bg-[#3B82F6] hover:text-white transition-colors">Select Pulse</button>
        </div>

        <div className="bg-[#0D1520] border border-[#00F5A0]/50 p-8 rounded-3xl shadow-2xl transform md:-translate-y-4 relative hover:-translate-y-6 transition-all duration-300 hover-line-effect">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00F5A0] text-[#0D1520] px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
            Most Popular
          </div>
          <h3 className="font-jakarta text-2xl font-bold text-white mb-2">AltRent Flow</h3>
          <p className="text-slate-400 text-sm mb-6 h-10">Our most popular plan for total flexibility.</p>
          <div className="mb-6 pb-6 border-b border-white/10">
            <span className="text-4xl font-bold text-[#00F5A0]">Monthly</span>
          </div>
          <ul className="space-y-4 mb-8 text-sm text-white flex-1">
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#00F5A0]" /> Accelerated Credit Building</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#00F5A0]" /> Comprehensive Legal Protection</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#00F5A0]" /> Priority App Access</li>
          </ul>
          <button onClick={() => setView('pricing')} className="w-full py-4 rounded-xl bg-[#00F5A0] text-[#0D1520] font-bold text-lg hover:bg-[#00d68b] transition-colors shadow-[0_0_20px_rgba(0,245,160,0.3)]">Choose Monthly Flow</button>
        </div>

        <div className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover-line-effect">
          <h3 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-2">AltRent Prime</h3>
          <p className="text-slate-500 text-sm mb-6 h-10">Premium bi-annual payments for corporate stays.</p>
          <div className="mb-6 pb-6 border-b border-slate-100">
            <span className="text-4xl font-bold text-[#0D1520]">Bi-Annual</span>
          </div>
          <ul className="space-y-4 mb-8 text-sm text-slate-600 flex-1">
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0D1520]" /> Basic Credit Building</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0D1520]" /> Standard Legal Coverage</li>
          </ul>
          <button onClick={() => setView('pricing')} className="w-full py-4 rounded-xl border-2 border-[#3B82F6] text-[#3B82F6] font-bold hover:bg-[#3B82F6] hover:text-white transition-colors">Select Prime</button>
        </div>
      </div>
    </div>
  </section>
);

const Waitlist = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#0D1520] to-[#1a2536] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass-panel-dark p-10 md:p-14 rounded-3xl text-center relative overflow-hidden border border-white/10 shadow-2xl transition-transform hover:-translate-y-2 duration-500 hover-glow">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00F5A0] to-[#3B82F6]" />
          
          <h2 className="font-jakarta text-3xl md:text-5xl font-bold text-white mb-4">The Future of Renting is Monthly.</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Join over 5,000 professionals and landlords waiting to break the annual rent cycle. Get early access to monthly listings in your preferred neighborhood.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-wider mb-2 ml-1">Full Name</label>
              <input required type="text" placeholder="e.g. Tunde Alabi" className="w-full bg-[#0D1520]/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-wider mb-2 ml-1">Email Address</label>
              <input required type="email" placeholder="tunde@example.com" className="w-full bg-[#0D1520]/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-colors" />
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
              <input required type="text" placeholder="e.g. Lekki Phase 1, Lagos" className="w-full bg-[#0D1520]/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-colors" />
            </div>
            <div className="col-span-1 md:col-span-2 mt-6">
              <button type="submit" className="w-full bg-[#00F5A0] text-[#0D1520] py-4 rounded-xl font-bold text-lg hover:bg-[#00d68b] transition-colors hover-glow">
                Secure My Monthly Spot
              </button>
            </div>
          </form>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0D1520]/80 backdrop-blur-sm" onClick={() => setShowSuccess(false)} />
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl relative z-10 p-8 text-center animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-[#00F5A0]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-14 h-14 bg-[#00F5A0] rounded-full flex items-center justify-center shadow-[0_0_30px_#00F5A0]">
                <Check size={32} className="text-[#0D1520]" />
              </div>
            </div>
            <h3 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-2">You're on the list!</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              You have been successfully added to the AltRent waitlist. Please check your email for updates and early access details.
            </p>
            <button onClick={() => setShowSuccess(false)} className="w-full bg-[#0D1520] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1a2536] transition-colors">
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

const Footer = ({ setView, openWaitlist, openPolicyModal }) => (
  <footer className="bg-[#0D1520] py-16 border-t border-white/10 text-white">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div>
          <h4 className="font-jakarta font-bold text-lg mb-6 text-white">Renters</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><button onClick={() => setView('renters')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Monthly Flow</button></li>
            <li><button onClick={() => setView('renters')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Credit Building</button></li>
            <li><button onClick={() => setView('renters')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Renter FAQ</button></li>
            <li><button onClick={() => openWaitlist()} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Waitlist</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-jakarta font-bold text-lg mb-6 text-white">Landlords</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><button onClick={() => setView('landlords')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">List Your Property</button></li>
            <li><button onClick={() => setView('landlords')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Legal Shield</button></li>
            <li><button onClick={() => setView('landlords')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">TRPB 2026 Guide</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-jakarta font-bold text-lg mb-6 text-white">Company</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><button onClick={() => setView('about')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">About AltRent</button></li>
            <li><button onClick={() => setView('contact')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Contact Us</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-jakarta font-bold text-lg mb-6 text-white">Legal</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><button onClick={() => openPolicyModal('privacy')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Privacy Policy</button></li>
            <li><button onClick={() => openPolicyModal('terms')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Terms of Service</button></li>
            <li><button onClick={() => openPolicyModal('cookie')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Cookie Policy</button></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-slate-500 text-sm">
        <div className="flex items-center gap-3">
          <Logo variant="light" />
        </div>
        <p>AltRent: Making premium living affordable through monthly flow.</p>
        <p>&copy; 2026 AltRent Ltd. Lagos, Nigeria.</p>
      </div>
    </div>
  </footer>
);

// --- Dedicated Pages & Modals ---

const PolicyModal = ({ type, onClose }) => {
  if (!type) return null;

  const policies = {
    privacy: {
      title: "Privacy Policy",
      content: (
        <>
          <p>Last Updated: May 2026</p>
          <h4 className="font-bold text-[#0D1520] mt-4 mb-2">1. Information We Collect</h4>
          <p>AltRent collects personal information such as your name, email address, phone number, and financial data required to assess eligibility for monthly rental flow (AltRent Trust Score). Financial connections are made securely via Mono API.</p>
          <h4 className="font-bold text-[#0D1520] mt-4 mb-2">2. How We Use Your Data</h4>
          <p>Your data is strictly used to evaluate your rental eligibility, generate your AltRent Trust Score, process periodic payments, and communicate platform updates. We do not sell your data to third parties.</p>
          <h4 className="font-bold text-[#0D1520] mt-4 mb-2">3. Data Security</h4>
          <p>All sensitive information, including banking integrations, is secured using bank-level 256-bit AES encryption. We do not store your direct banking credentials.</p>
        </>
      )
    },
    terms: {
      title: "Terms of Service",
      content: (
        <>
          <p>Last Updated: May 2026</p>
          <h4 className="font-bold text-[#0D1520] mt-4 mb-2">1. The AltRent Agreement</h4>
          <p>By using AltRent, you agree to abide by the Lagos Tenancy Reform and Protection Bill (TRPB) of 2025/2026. This platform facilitates monthly and quarterly rental subscriptions rather than standard annual tenancy.</p>
          <h4 className="font-bold text-[#0D1520] mt-4 mb-2">2. Payment & Default</h4>
          <p>Tenants agree to automated monthly deductions via BVN-linked mandates. Failure to meet a payment cycle will trigger an automated 7-day default notice as mandated by TRPB 2026 fast-track eviction clauses.</p>
          <h4 className="font-bold text-[#0D1520] mt-4 mb-2">3. Landlord Protections</h4>
          <p>Property owners utilizing the "Legal Shield" agree that AltRent will act as the digital intermediary for default notices and fast-track recovery proceedings.</p>
        </>
      )
    },
    cookie: {
      title: "Cookie Policy",
      content: (
        <>
          <p>Last Updated: May 2026</p>
          <h4 className="font-bold text-[#0D1520] mt-4 mb-2">1. Essential Cookies</h4>
          <p>We use essential cookies to maintain your active session, secure the dashboard, and ensure your identity during checkout and API integrations.</p>
          <h4 className="font-bold text-[#0D1520] mt-4 mb-2">2. Performance Cookies</h4>
          <p>These help us understand how visitors interact with the AltRent platform so we can continuously improve the UI and property discovery features.</p>
          <h4 className="font-bold text-[#0D1520] mt-4 mb-2">3. Managing Preferences</h4>
          <p>You can manage or disable non-essential cookies via your browser settings, though this may limit your ability to securely use the Mono Verification flow.</p>
        </>
      )
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#0D1520]/80 backdrop-blur-sm" onClick={onClose} />
      <div className="w-full max-w-2xl bg-white rounded-3xl relative z-10 p-8 flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-300 shadow-2xl">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100 shrink-0">
          <h2 className="font-jakarta text-2xl font-bold text-[#0D1520]">{policies[type].title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-[#0D1520] transition-colors p-2 rounded-full hover:bg-slate-100">
            <X size={24} />
          </button>
        </div>
        <div className="overflow-y-auto pr-4 text-slate-600 text-sm leading-relaxed space-y-4">
          {policies[type].content}
        </div>
        <div className="pt-6 mt-4 border-t border-slate-100 shrink-0">
          <button onClick={onClose} className="w-full bg-[#0D1520] text-white py-3 rounded-xl font-bold hover:bg-[#1a2536] transition-colors">
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactPage = ({ setView }) => {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setView('home');
    }, 3000);
  };

  return (
    <div className="animate-in fade-in duration-500 bg-[#F8FAFC]">
      <section className="relative pt-40 pb-16 overflow-hidden bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            Get in Touch
          </div>
          <h1 className="font-jakarta text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1520] mb-6 tracking-tight leading-[1.05]">
            We're Here to Help.
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Have questions about the platform, your specific lease, or enterprise housing? Our team in Lagos is ready to assist you.
          </p>
        </div>
      </section>

      <section className="py-12 pb-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-jakarta text-3xl font-bold text-[#0D1520] mb-8">Reach Out directly</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm hover-line-effect">
                <div className="w-12 h-12 rounded-xl bg-[#00F5A0]/20 flex items-center justify-center text-[#0D1520] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0D1520] mb-1">Email Support</h3>
                  <p className="text-slate-500 text-sm mb-2">Our team usually responds within 2 hours.</p>
                  <a href="mailto:hello@altrent.com" className="text-[#00F5A0] font-bold hover:underline">hello@altrent.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm hover-line-effect">
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0D1520] mb-1">Call Us</h3>
                  <p className="text-slate-500 text-sm mb-2">Mon-Fri from 9am to 6pm WAT.</p>
                  <a href="tel:+2348000000000" className="text-[#3B82F6] font-bold hover:underline">+234 800 000 0000</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-[#0D1520] border border-white/10 rounded-2xl shadow-xl hover-line-effect">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">AltRent HQ</h3>
                  <p className="text-slate-400 text-sm">
                    Plot 12 Admiralty Way,<br/>
                    Lekki Phase 1,<br/>
                    Lagos, Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#E2E8F0] p-8 md:p-10 rounded-3xl shadow-lg">
            {!formSent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-6">Send a Message</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">First Name</label>
                    <input required type="text" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[#0D1520] focus:outline-none focus:border-[#00F5A0]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Last Name</label>
                    <input required type="text" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[#0D1520] focus:outline-none focus:border-[#00F5A0]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Email Address</label>
                  <input required type="email" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[#0D1520] focus:outline-none focus:border-[#00F5A0]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Message</label>
                  <textarea required rows="4" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[#0D1520] focus:outline-none focus:border-[#00F5A0] resize-none" placeholder="How can we help you today?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#00F5A0] text-[#0D1520] py-4 rounded-xl font-bold text-lg hover:bg-[#00d68b] transition-colors shadow-[0_0_20px_rgba(0,245,160,0.2)] hover-glow">
                  Send Message
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in zoom-in-95">
                <div className="w-20 h-20 bg-[#00F5A0]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-14 h-14 bg-[#00F5A0] rounded-full flex items-center justify-center shadow-[0_0_30px_#00F5A0]">
                    <Check size={32} className="text-[#0D1520]" />
                  </div>
                </div>
                <h3 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-2">Message Sent!</h3>
                <p className="text-slate-600 mb-8">Thanks for reaching out. We will get back to you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const WaitlistModal = ({ isOpen, onClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setShowSuccess(false), 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#0D1520]/80 backdrop-blur-sm" onClick={handleClose} />
      <div className="w-full max-w-2xl relative z-10 animate-in zoom-in-95 duration-300">
        {!showSuccess ? (
          <div className="glass-panel-dark p-8 md:p-10 rounded-3xl text-center border border-white/10 shadow-2xl relative overflow-hidden">
            <button onClick={handleClose} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors z-20">
              <X size={24} />
            </button>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00F5A0] to-[#3B82F6]" />
            
            <h2 className="font-jakarta text-3xl font-bold text-white mb-4">Join the Waitlist</h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto">
              Get early access to monthly listings in your preferred neighborhood.
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-wider mb-2 ml-1">Full Name</label>
                <input required type="text" placeholder="e.g. Tunde Alabi" className="w-full bg-[#0D1520]/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-wider mb-2 ml-1">Email Address</label>
                <input required type="email" placeholder="tunde@example.com" className="w-full bg-[#0D1520]/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-wider mb-2 ml-1">I am a...</label>
                <select className="w-full bg-[#0D1520]/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] appearance-none cursor-pointer">
                  <option>Tenant (Looking to rent)</option>
                  <option>Landlord (Property Owner)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-wider mb-2 ml-1">Preferred Location</label>
                <input required type="text" placeholder="e.g. Lekki Phase 1" className="w-full bg-[#0D1520]/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0]" />
              </div>
              <div className="col-span-1 md:col-span-2 mt-4">
                <button type="submit" className="w-full bg-[#00F5A0] text-[#0D1520] py-4 rounded-xl font-bold text-lg hover:bg-[#00d68b] transition-colors">
                  Secure My Spot
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white p-8 md:p-10 rounded-3xl text-center shadow-2xl relative">
            <div className="w-20 h-20 bg-[#00F5A0]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-14 h-14 bg-[#00F5A0] rounded-full flex items-center justify-center shadow-[0_0_30px_#00F5A0]">
                <Check size={32} className="text-[#0D1520]" />
              </div>
            </div>
            <h3 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-2">You're on the list!</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              You have been successfully added to the AltRent waitlist. Please check your email for updates and early access details.
            </p>
            <button onClick={handleClose} className="w-full bg-[#0D1520] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1a2536] transition-colors">
              Got it
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const PricingPage = ({ setView }) => {
  const [checkoutPlan, setCheckoutPlan] = useState(null);
  const [processing, setProcessing] = useState(false);

  const completePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setView('signup');
    }, 2000);
  };

  return (
    <div className="animate-in fade-in duration-500 bg-[#F8FAFC] min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-jakarta text-4xl md:text-5xl font-bold text-[#0D1520] mb-4">Transparent Pricing, Zero Hidden Fees.</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Select the tier that aligns perfectly with your cash flow. You can upgrade or downgrade at the end of any lease cycle.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col">
            <h3 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-2">Pulse</h3>
            <p className="text-slate-500 text-sm mb-6 h-10">Align rent with 90-day cycles.</p>
            <div className="mb-6 pb-6 border-b border-slate-100">
              <span className="text-4xl font-bold text-[#0D1520]">Quarterly</span>
            </div>
            <ul className="space-y-4 mb-8 text-sm text-slate-600 flex-1">
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0D1520]" /> Standard Credit Building</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0D1520]" /> Standard Legal Coverage</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0D1520]" /> Escrowed Deposit (1 Month)</li>
            </ul>
            <button onClick={() => setCheckoutPlan('Pulse')} className="w-full py-4 rounded-xl border-2 border-[#3B82F6] text-[#3B82F6] font-bold hover:bg-[#3B82F6] hover:text-white transition-colors">Select Pulse</button>
          </div>

          <div className="bg-[#0D1520] border border-[#00F5A0]/50 p-8 rounded-3xl shadow-2xl relative flex flex-col transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00F5A0] text-[#0D1520] px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">Most Popular</div>
            <h3 className="font-jakarta text-2xl font-bold text-white mb-2">Flow</h3>
            <p className="text-slate-400 text-sm mb-6 h-10">Total flexibility for monthly earners.</p>
            <div className="mb-6 pb-6 border-b border-white/10">
              <span className="text-4xl font-bold text-[#00F5A0]">Monthly</span>
            </div>
            <ul className="space-y-4 mb-8 text-sm text-white flex-1">
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#00F5A0]" /> Accelerated Credit Building</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#00F5A0]" /> Comprehensive Legal Protection</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#00F5A0]" /> Escrowed Deposit (2 Months)</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#00F5A0]" /> Priority App Access</li>
            </ul>
            <button onClick={() => setCheckoutPlan('Flow')} className="w-full py-4 rounded-xl bg-[#00F5A0] text-[#0D1520] font-bold text-lg hover:bg-[#00d68b] transition-colors shadow-[0_0_20px_rgba(0,245,160,0.3)]">Choose Monthly Flow</button>
          </div>

          <div className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col">
            <h3 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-2">Prime</h3>
            <p className="text-slate-500 text-sm mb-6 h-10">Premium bi-annual payments.</p>
            <div className="mb-6 pb-6 border-b border-slate-100">
              <span className="text-4xl font-bold text-[#0D1520]">Bi-Annual</span>
            </div>
            <ul className="space-y-4 mb-8 text-sm text-slate-600 flex-1">
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0D1520]" /> Basic Credit Building</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0D1520]" /> Standard Legal Coverage</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0D1520]" /> Zero Deposit Requirement</li>
            </ul>
            <button onClick={() => setCheckoutPlan('Prime')} className="w-full py-4 rounded-xl border-2 border-[#3B82F6] text-[#3B82F6] font-bold hover:bg-[#3B82F6] hover:text-white transition-colors">Select Prime</button>
          </div>
        </div>
      </div>

      {checkoutPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0D1520]/80 backdrop-blur-sm" onClick={() => setCheckoutPlan(null)} />
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl relative z-10 p-8 animate-in zoom-in-95 duration-300 text-center">
            <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock size={28} className="text-[#0D1520]" />
            </div>
            <h3 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-2">Secure Checkout</h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              You are about to subscribe to the <strong>AltRent {checkoutPlan}</strong> plan. You will be redirected to our secure payment partner (e.g., Flutterwave / Paystack) to complete your transaction.
            </p>

            <button onClick={completePayment} disabled={processing} className="w-full bg-[#0D1520] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1a2536] transition-colors flex justify-center items-center shadow-md">
              {processing ? (
                <><Loader2 size={20} className="animate-spin mr-2" /> Redirecting...</>
              ) : 'Proceed to Gateway'}
            </button>
            <button onClick={() => setCheckoutPlan(null)} disabled={processing} className="mt-4 text-slate-500 hover:text-[#0D1520] text-sm font-medium transition-colors">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ListPropertyWizard = ({ setView }) => {
  const [step, setStep] = useState(1);
  
  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));
  
  const finish = () => {
    setView('signup');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => setView('landlords')} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#3B82F6] transition-colors mb-8">
          <ArrowLeft size={16} /> Back
        </button>
        
        <div className="mb-8">
          <h1 className="font-jakarta text-3xl font-bold text-[#0D1520] mb-2">List Your Property</h1>
          <p className="text-slate-600">Join the AltRent network and get guaranteed automated remittances.</p>
        </div>

        <div className="flex items-center gap-2 mb-10">
          {[1, 2, 3].map(i => (
            <div key={i} className={`h-2 flex-1 rounded-full ${step >= i ? 'bg-[#00F5A0]' : 'bg-slate-200'}`} />
          ))}
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 shadow-sm">
          {step === 1 && (
            <div className="animate-in fade-in space-y-6">
              <h2 className="font-jakarta text-xl font-bold text-[#0D1520] mb-4">1. Property Basics</h2>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Property Address</label>
                <input type="text" placeholder="e.g. 12 Admiralty Way, Lekki Phase 1" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00F5A0]" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Property Type</label>
                  <select className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00F5A0] appearance-none">
                    <option>Apartment</option>
                    <option>Terrace</option>
                    <option>Detached Duplex</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Bedrooms</label>
                  <input type="number" placeholder="2" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00F5A0]" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 space-y-6">
              <h2 className="font-jakarta text-xl font-bold text-[#0D1520] mb-4">2. Rent & Rules</h2>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Expected Annual Value (₦)</label>
                <input type="number" placeholder="3,000,000" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00F5A0]" />
                <p className="text-xs text-slate-500 mt-2">We will automatically calculate the Monthly Flow and Pulse tiers.</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Property Images</label>
                <div className="border-2 border-dashed border-[#E2E8F0] rounded-2xl p-10 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                  <p className="text-slate-500 font-medium">Click to upload photos or drag and drop</p>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in zoom-in-95 text-center py-10">
              <div className="w-20 h-20 bg-[#00F5A0]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} className="text-[#00F5A0]" />
              </div>
              <h2 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-4">Ready for Verification</h2>
              <p className="text-slate-600 max-w-md mx-auto mb-8">
                Your property details have been saved. Our legal team will review the TRPB 2026 compliance and contact you to activate the listing.
              </p>
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl inline-block text-left text-sm text-blue-800 mb-8">
                <p className="font-bold flex items-center gap-2"><CheckCircle2 size={16} /> Fast-Track Active</p>
                <p>Usually reviewed within 24-48 hours.</p>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-10 pt-6 border-t border-slate-100">
            {step > 1 && step < 3 ? (
              <button onClick={prevStep} className="px-6 py-3 font-bold text-slate-500 hover:text-[#3B82F6]">Back</button>
            ) : <div />}
            
            {step < 3 ? (
              <button onClick={nextStep} className="bg-[#0D1520] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1a2536] transition-colors flex items-center gap-2">
                Next Step <ArrowRight size={18} />
              </button>
            ) : (
              <button onClick={finish} className="bg-[#00F5A0] text-[#0D1520] px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#00d68b] transition-colors hover-glow mx-auto">
                Create Account
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const EnterprisePage = ({ setView }) => {
  return (
    <div className="animate-in fade-in duration-500 bg-[#F8FAFC]">
      <section className="relative pt-40 pb-16 overflow-hidden bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            AltRent HQ
          </div>
          <h1 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D1520] mb-6 tracking-tight leading-[1.05]">
            Housing as a <span className="text-[#3B82F6]">High-Performance</span> Benefit.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Attract, retain, and empower your best talent by removing the stress of annual rent. Manage staff relocation and bulk rental payments through one seamless portal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setView('signup')} className="w-full sm:w-auto bg-[#3B82F6] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover-glow shadow-sm transition-all flex items-center justify-center gap-2">
              Schedule a Demo <ArrowRight size={20} />
            </button>
            <button onClick={() => setView('about')} className="w-full sm:w-auto bg-transparent border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
              <FileText size={20} /> Download the Enterprise Guide
            </button>
          </div>
        </div>

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

      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-[#0D1520] mb-4">How It Works</h2>
          </div>
          
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
            Schedule a Demo
          </button>
        </div>
      </section>
    </div>
  );
};

const BrowsePage = ({ setView }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [paymentTier, setPaymentTier] = useState('monthly');
  const [maxPrice, setMaxPrice] = useState(500000);
  const [verifyStep, setVerifyStep] = useState(0); 

  const properties = [
    { id: 1, title: 'Luxury 2-Bed Apartment', type: 'Apartment', loc: 'Lekki Phase 1, Lagos', rent: 250000, beds: 2, baths: 2, score: 75, img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Modern Studio Suite', type: 'Studio', loc: 'Yaba, Lagos', rent: 150000, beds: 1, baths: 1, score: 65, img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Premium 3-Bed Terrace', type: 'Terrace', loc: 'Gwarinpa, Abuja', rent: 400000, beds: 3, baths: 4, score: 80, img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Executive 1-Bed Flat', type: 'Apartment', loc: 'Victoria Island, Lagos', rent: 300000, beds: 1, baths: 2, score: 70, img: 'https://images.unsplash.com/photo-1502672260266-1c1e5240980c?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Spacious 4-Bed Duplex', type: 'Duplex', loc: 'Ikoyi, Lagos', rent: 800000, beds: 4, baths: 5, score: 85, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'Cozy 2-Bed Flat', type: 'Apartment', loc: 'Surulere, Lagos', rent: 180000, beds: 2, baths: 2, score: 65, img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800' },
  ];

  const startVerification = () => {
    setVerifyStep(1);
  };

  const proceedToMono = () => {
    setVerifyStep(2);
    setTimeout(() => {
      setVerifyStep(3);
    }, 2500); 
  };

  const renderGrid = () => (
    <div className="max-w-[1400px] mx-auto px-6 py-8 animate-in fade-in">
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
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-transparent border border-slate-200 text-slate-500 px-3 py-1.5 rounded-lg">Credit-Building Enabled</span>
                </div>
                
                <p className="text-sm font-bold text-slate-600 mb-2">Total: ₦{(prop.rent * 12).toLocaleString()}/yr</p>
                
                <div className="flex items-start gap-3">
                  <div className="bg-[#00F5A0] text-[#0D1520] px-4 py-2.5 rounded-xl transition-all inline-block flex-1 shadow-[0_0_15px_rgba(0,245,160,0.3)]">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5">AltRent Flow</p>
                    <p className="font-jakarta font-bold text-2xl leading-none">₦{prop.rent.toLocaleString()}<span className="text-sm font-medium">/mo</span></p>
                  </div>
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
    
    const annualRent = prop.rent * 12;
    const initialPayment = annualRent * 0.20; 

    return (
      <div className="max-w-[1200px] mx-auto px-6 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button onClick={() => setSelectedProperty(null)} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#0D1520] transition-colors mb-6">
          <ArrowLeft size={16} /> Find a Home
        </button>

        <div className="grid lg:grid-cols-3 gap-10">
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

          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              
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

              <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 md:p-8 shadow-xl">
                <h3 className="font-jakarta text-xl font-bold text-[#0D1520] mb-6">The "Flow" Calculator</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Total Annual Rent</span>
                    <span className="font-bold text-[#0D1520]">₦{annualRent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Monthly Rent</span>
                    <span className="font-bold text-[#0D1520]">₦{prop.rent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Initial Payment (20% of annual rent)</span>
                    <span className="font-bold text-[#0D1520]">₦{initialPayment.toLocaleString()}</span>
                  </div>
                </div>

                <div className="h-px bg-[#E2E8F0] w-full mb-6" />

                <div className="flex justify-between items-end mb-8">
                  <span className="text-sm font-bold text-[#0D1520]">Total</span>
                  <div className="text-right">
                    <span className="block font-jakarta text-2xl font-bold text-[#00F5A0]">₦{initialPayment.toLocaleString()}</span>
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

      {verifyStep > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0D1520]/80 backdrop-blur-sm" onClick={() => verifyStep === 1 && setVerifyStep(0)} />
          
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-300">
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

            {verifyStep === 2 && (
              <div className="p-12 flex flex-col items-center text-center justify-center h-[350px]">
                <Loader2 size={48} className="text-[#3B82F6] animate-spin mb-6" />
                <h3 className="font-jakarta text-xl font-bold text-[#0D1520] mb-2">Analyzing Cash Flow...</h3>
                <p className="text-slate-500 text-sm">Securely fetching data from your bank to generate your AltRent Trust Score.</p>
              </div>
            )}

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
                  <button onClick={() => { setVerifyStep(0); setSelectedProperty(null); setView('signup'); }} className="w-full bg-[#00F5A0] text-[#0D1520] py-4 rounded-xl font-bold hover:bg-[#00d68b] transition-colors shadow-[0_0_20px_rgba(0,245,160,0.3)] hover-glow">
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
    ],
    admin: [
      { icon: <Activity size={20} />, label: 'Platform Overview', active: true },
      { icon: <Users size={20} />, label: 'User Management', active: false },
      { icon: <Building size={20} />, label: 'Properties & KYC', active: false },
      { icon: <Banknote size={20} />, label: 'Escrow & Payouts', active: false },
      { icon: <Settings size={20} />, label: 'System Settings', active: false },
    ]
  };

  return (
    <div className="w-64 bg-[#0D1520] h-screen fixed left-0 top-0 text-slate-300 flex flex-col border-r border-white/5 z-50">
      <div className="p-6 border-b border-white/5">
        <button onClick={() => setView('home')} className="mb-8 cursor-pointer outline-none">
          <Logo variant="light" isApp={true} />
        </button>

        <div className="bg-white/5 p-1 rounded-lg grid grid-cols-2 gap-1 text-xs font-medium mb-2 border border-white/10">
          <button onClick={() => setRole('tenant')} className={`py-1.5 rounded-md text-center transition-colors ${role === 'tenant' ? 'bg-[#00F5A0] text-[#0D1520]' : 'hover:text-white'}`}>Tenant</button>
          <button onClick={() => setRole('landlord')} className={`py-1.5 rounded-md text-center transition-colors ${role === 'landlord' ? 'bg-[#00F5A0] text-[#0D1520]' : 'hover:text-white'}`}>Owner</button>
          <button onClick={() => setRole('enterprise')} className={`py-1.5 rounded-md text-center transition-colors ${role === 'enterprise' ? 'bg-[#3B82F6] text-white' : 'hover:text-white'}`}>Corp</button>
          <button onClick={() => setRole('admin')} className={`py-1.5 rounded-md text-center transition-colors ${role === 'admin' ? 'bg-purple-500 text-white' : 'hover:text-white'}`}>Admin</button>
        </div>
        <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest">Demo Mode Switcher</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems[role].map((item, i) => (
          <button 
            key={i} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
              ${item.active 
                ? (role === 'enterprise' ? 'bg-[#3B82F6]/10 text-[#3B82F6]' : role === 'admin' ? 'bg-purple-500/10 text-purple-400' : 'bg-[#00F5A0]/10 text-[#00F5A0]') 
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
            {role === 'enterprise' ? 'AC' : role === 'admin' ? 'AD' : 'TA'}
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-bold text-white">
              {role === 'tenant' ? 'Tunde Alabi' : role === 'landlord' ? 'Alabi Properties' : role === 'admin' ? 'Super Admin' : 'Acme Corp'}
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

const AdminDashboard = () => (
  <div className="p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
    <div className="grid md:grid-cols-4 gap-6">
      {[
        { label: "Total Users", val: "12,450", sub: "+124 this week", icon: <Users size={20} className="text-purple-500" /> },
        { label: "Active Leases", val: "4,210", sub: "across 3 cities", icon: <FileCheck size={20} className="text-purple-500" /> },
        { label: "Escrow Volume", val: "₦1.2B", sub: "Currently locked", icon: <Database size={20} className="text-purple-500" /> },
        { label: "Pending KYC", val: "34", sub: "Requires review", icon: <AlertCircle size={20} className="text-amber-500" /> },
      ].map((stat, i) => (
        <div key={i} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-semibold text-slate-500">{stat.label}</h3>
            {stat.icon}
          </div>
          <p className="text-3xl font-jakarta font-bold text-[#0D1520]">{stat.val}</p>
          <p className="text-xs text-slate-400 mt-2">{stat.sub}</p>
        </div>
      ))}
    </div>

    <div>
      <h3 className="font-jakarta text-lg font-bold text-[#0D1520] mb-4">Recent KYC & Approvals</h3>
      <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse font-inter">
          <thead>
            <tr className="bg-slate-50 border-b border-[#E2E8F0] text-xs uppercase tracking-wider text-slate-500 font-semibold">
              <th className="p-4">User</th>
              <th className="p-4">Role</th>
              <th className="p-4">Trust Score</th>
              <th className="p-4">Date</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              { name: 'Oluwaseun Adedayo', role: 'Tenant', score: '82', date: 'Today, 10:45 AM' },
              { name: 'Zylus Properties Ltd', role: 'Landlord', score: 'N/A', date: 'Today, 09:12 AM' },
              { name: 'Chioma Chukwuma', role: 'Tenant', score: '64', date: 'Yesterday' },
            ].map((user, i) => (
              <tr key={i} className="border-b border-[#E2E8F0] last:border-0 hover:bg-slate-50 transition-colors">
                <td className="p-4 font-medium text-[#0D1520]">{user.name}</td>
                <td className="p-4 text-slate-600">{user.role}</td>
                <td className="p-4 font-semibold text-[#0D1520]">
                  <span className={user.score >= 70 ? 'text-[#00F5A0]' : user.score !== 'N/A' ? 'text-amber-500' : 'text-slate-400'}>
                    {user.score}
                  </span>
                </td>
                <td className="p-4 text-slate-500">{user.date}</td>
                <td className="p-4">
                  <button className="text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors">Review</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const SignUpFlow = ({ setView, setDashboardRole }) => {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isProcessingMono, setIsProcessingMono] = useState(false);

  const handleMonoAuth = () => {
    setIsProcessingMono(true);
    setTimeout(() => {
      setIsProcessingMono(false);
      setStep(4); 
    }, 3000);
  };

  const handleFinalRedirect = () => {
    setDashboardRole(selectedRole);
    setView('dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0D1520] flex flex-col items-center justify-center p-6 relative overflow-hidden transition-all duration-1000">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00F5A0]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-4xl relative z-10">
        
        <div className="absolute top-[-80px] left-0 right-0 flex justify-between items-center">
          <button onClick={() => setView('home')} className="cursor-pointer outline-none">
            <Logo variant="light" />
          </button>
          <button onClick={() => setView('login')} className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Log In Instead</button>
        </div>

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
                  <CheckCircle2 size={16} className="absolute right-4 top-[42px] text-[#00F5A0]" />
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
                <h3 className="font-jakarta text-2xl font-bold text-white mb-2">Analyzing your