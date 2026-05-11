import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, ShieldCheck, TrendingUp, FileText, 
  ChevronRight, Building, Users, Home, Settings, LogOut, 
  CreditCard, Wallet, Bell, Search, SlidersHorizontal, CheckCircle2, ChevronDown, Check, Zap, Banknote,
  Calendar, Smartphone, Scale, RefreshCw, Map, Filter, ArrowLeft, Shield, Lock, Loader2,
  Briefcase, Target, Heart, FileCheck, Building2, Key, Link as LinkIcon, Mail, Phone, MapPin
} from 'lucide-react';

// --- BRAND CONFIGURATION ---
const LOGO_IMAGE_URL = null; 

// --- Shared Logo Component ---
const Logo = ({ variant = 'dark', className = "" }) => {
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
      </span>
    </div>
  );
};

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
    .hover-line-effect:hover::after {
      transform: scaleX(1);
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
    .hover-line-effect-blue:hover::after {
      transform: scaleX(1);
    }

    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-gradient-x {
      animation: gradient-x 5s ease infinite;
    }

    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
  `}} />
);

// --- Modals ---

const WaitlistModal = ({ isOpen, onClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  
  if (!isOpen) return null;
  
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    setShowSuccess(true); 
  };
  
  const handleClose = () => {
    setShowSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-[#0D1520]/90 backdrop-blur-md" onClick={handleClose} />
      <div className="bg-white max-w-xl w-full rounded-[2.5rem] p-10 relative z-10 animate-in zoom-in-95 shadow-2xl overflow-hidden">
        {!showSuccess ? (
          <>
            <button onClick={handleClose} className="absolute top-6 right-6 text-slate-400 hover:text-[#0D1520] transition-colors z-20">
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold text-[#0D1520] mb-4 font-jakarta">Join the Waitlist</h2>
            <p className="text-slate-500 mb-8">Get early access to monthly rentals in your preferred neighborhood.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-[#00F5A0]" />
              <input required type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-[#00F5A0]" />
              <button type="submit" className="w-full bg-[#00F5A0] text-[#0D1520] py-4 rounded-2xl font-bold hover:bg-[#00d68b] transition-all">Submit</button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-20 h-20 bg-[#00F5A0]/20 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={40} className="text-[#00F5A0]" /></div>
            <h2 className="text-3xl font-bold text-[#0D1520] mb-4 font-jakarta">You're on the list!</h2>
            <button onClick={handleClose} className="w-full bg-[#0D1520] text-white py-4 rounded-2xl font-bold mt-4 hover:bg-black transition-colors">Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

const PolicyModal = ({ type, onClose }) => {
  if (!type) return null;
  const content = {
    privacy: { title: "Privacy Policy", text: "At AltRent, your privacy is our priority. We use Mono's secure, read-only API to assess your eligibility. We never store your bank login credentials. Your data is encrypted using 256-bit AES standards and used solely for the AltRent Trust Score calculation." },
    terms: { title: "Terms of Service", text: "By using AltRent, you agree to comply with the Lagos Tenancy Reform and Protection Bill (TRPB) 2025. Monthly flow tenants agree to automated deductions via linked accounts. Failure to meet obligations triggers fast-track mediation." },
    cookie: { title: "Cookie Policy", text: "We use essential cookies to maintain your active session, secure the dashboard, and ensure your identity during checkout and API integrations." }
  };
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-[#0D1520]/90 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-white max-w-xl w-full rounded-[2.5rem] p-10 relative z-10 animate-in zoom-in-95 shadow-2xl">
        <h2 className="text-3xl font-bold text-[#0D1520] mb-6 font-jakarta">{content[type]?.title}</h2>
        <p className="text-slate-600 leading-relaxed mb-8">{content[type]?.text}</p>
        <button onClick={onClose} className="w-full bg-[#0D1520] text-white py-4 rounded-2xl font-bold hover:bg-black transition-colors">I Understand</button>
      </div>
    </div>
  );
};

// --- Navigation & Shared Components ---

const Header = ({ setView, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Find a home', path: 'browse' },
    { label: 'For Renters', path: 'renters' },
    { label: 'For Landlords', path: 'landlords' },
    { label: 'Enterprise', path: 'hq' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0D1520]/95 backdrop-blur-md py-4 shadow-xl border-b border-white/5' : 'bg-[#0D1520] md:bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => setView('home')} className="cursor-pointer outline-none group transition-transform hover:scale-105 active:scale-95">
          <Logo variant={isScrolled ? 'light' : 'dark'} />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10">
          {navItems.map((item) => (
            <button 
              key={item.label} 
              onClick={() => setView(item.path)} 
              className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
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

          {/* Company Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button 
              className={`flex items-center gap-1 text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                ['about', 'contact'].includes(currentView)
                  ? 'bg-[#00F5A0] text-[#0D1520] font-bold shadow-md' 
                  : isScrolled 
                    ? 'text-slate-300 hover:text-white hover:bg-white/10 font-medium' 
                    : 'text-[#0D1520] hover:bg-black/5 font-medium'
              }`}
            >
              Company <ChevronDown size={14} className={`transition-transform duration-300 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full right-0 pt-2 transition-all duration-300 origin-top ${aboutDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
              <div className={`flex flex-col p-2 rounded-2xl shadow-xl border w-40 ${isScrolled ? 'bg-[#0D1520]/95 backdrop-blur-md border-white/10' : 'bg-white border-[#E2E8F0]'}`}>
                <button 
                  onClick={() => { setView('about'); setAboutDropdownOpen(false); }}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${currentView === 'about' ? 'text-[#00F5A0] bg-[#00F5A0]/10' : isScrolled ? 'text-slate-300 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-[#0D1520] hover:bg-slate-50'}`}
                >
                  About Us
                </button>
                <button 
                  onClick={() => { setView('contact'); setAboutDropdownOpen(false); }}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${currentView === 'contact' ? 'text-[#00F5A0] bg-[#00F5A0]/10' : isScrolled ? 'text-slate-300 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-[#0D1520] hover:bg-slate-50'}`}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => setView('login')} className={`text-sm font-medium transition-colors hover:text-[#00F5A0] ${isScrolled ? 'text-white' : 'text-[#0D1520]'}`}>
            Login
          </button>
          <button onClick={() => setView('signup')} className="bg-[#00F5A0] text-[#0D1520] px-6 py-2.5 rounded-xl font-bold text-sm transition-all hover:bg-[#00d68b] hover-glow shadow-sm active:scale-95">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-white' : 'text-[#0D1520]'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0D1520] border-t border-white/10 p-6 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-4">
           {[
            { label: 'Find a home', path: 'browse' },
            { label: 'For Renters', path: 'renters' },
            { label: 'For Landlords', path: 'landlords' },
            { label: 'Enterprise', path: 'hq' },
            { label: 'About Us', path: 'about' },
            { label: 'Contact Us', path: 'contact' }
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
          <button onClick={() => { setView('signup'); setMobileMenuOpen(false); }} className="bg-[#00F5A0] text-[#0D1520] rounded-xl font-bold py-3 mt-2 w-full hover-glow active:scale-95 transition-transform">Get Started</button>
        </div>
      )}
    </header>
  );
};

// --- Landing Page Components ---

const Hero = ({ setView, openWaitlist }) => (
  <section className="relative pt-44 pb-20 overflow-hidden bg-[#F8FAFC]">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#e2e8f0] to-transparent rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/3" />
    
    <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 shadow-sm mb-10">
        <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6]">Disrupting Nigerian Real Estate</span>
      </div>
      
      <h1 className="font-jakarta text-5xl md:text-7xl font-bold text-[#0D1520] leading-[1.05] mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700">
        Stop Saving for a Year.<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1520] via-[#3B82F6] to-[#0D1520] bg-[length:200%_auto] animate-gradient-x">Start Paying Rent Monthly.</span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
        Why pay 24 months of rent upfront when you earn your salary monthly? Secure premium apartments with flexible monthly subscriptions that fit your cash flow and build your credit history.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-5 justify-center mb-20 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
        <button onClick={() => setView('browse')} className="w-full sm:w-auto bg-[#00F5A0] text-[#0D1520] px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:bg-[#00d68b] hover-glow shadow-xl active:scale-95 flex items-center justify-center gap-2">
          Find a home <ArrowRight size={22} />
        </button>
        <button onClick={() => openWaitlist()} className="w-full sm:w-auto bg-transparent text-[#3B82F6] border-2 border-[#3B82F6] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#3B82F6]/5 transition-all flex items-center justify-center">
          Join the Waitlist
        </button>
      </div>
    </div>

    <div className="w-full relative z-10">
      <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[21/9] bg-[#0D1520] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000" 
          alt="High-end Nigerian Interior" 
          className="w-full h-full object-cover opacity-80 animate-in fade-in duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1520]/80 via-transparent to-transparent pointer-events-none" />
        
        <div className="absolute inset-0 max-w-[1400px] mx-auto px-6 pointer-events-none">
          <div className="absolute bottom-8 md:bottom-16 pointer-events-auto glass-panel-dark p-8 rounded-3xl shadow-2xl transform hover:-translate-y-3 transition-all duration-500 w-full max-w-[320px] sm:max-w-sm border border-white/20 hover-glow group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-sm text-[#00F5A0] font-bold mb-1 uppercase tracking-widest">Monthly Rent</p>
                <p className="text-white font-jakarta font-bold text-4xl">₦250,000</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#00F5A0]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle2 size={24} className="text-[#00F5A0]" />
              </div>
            </div>
            <div className="h-px w-full bg-white/10 mb-6" />
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <ShieldCheck size={20} className="text-[#00F5A0]" />
              <span className="font-medium">Verified Property Profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CoreVision = () => (
  <section className="py-32 bg-[#0D1520] text-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00F5A0]/40 to-transparent" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-24">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold uppercase tracking-widest mb-8">
          Our Mission
        </div>
        <h2 className="font-jakarta text-4xl md:text-6xl font-bold mb-8 tracking-tight">Rethinking the Rental Economy.</h2>
        <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-inter">We’ve replaced the traditional rent trap with a modern monthly subscription. No more bulk payments holding your life back.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {[
          { icon: <CreditCard size={36} className="text-[#0D1520]" />, title: "Pay as You Earn", desc: "Align your biggest expense with your monthly income. Move in without depleting your life savings.", bg: "bg-[#00F5A0]" },
          { icon: <TrendingUp size={36} className="text-white" />, title: "Credit Growth", desc: "Every monthly payment is reported to credit bureaus, helping you build a profile for future mortgages.", bg: "bg-white/10 border border-white/10" },
          { icon: <ShieldCheck size={36} className="text-white" />, title: "Legal Shield", desc: "Built on the Lagos TRPB 2025/2026 Bill for automated protections and fast-track security.", bg: "bg-white/10 border border-white/10" }
        ].map((feat, i) => (
          <div key={i} className={`p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,245,160,0.15)] hover-line-effect cursor-default ${i === 0 ? 'bg-[#00F5A0] text-[#0D1520]' : 'glass-panel text-white'}`}>
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-10 ${feat.bg} shadow-lg`}>
              {feat.icon}
            </div>
            <h3 className="font-jakarta text-3xl font-bold mb-6 tracking-tight">{feat.title}</h3>
            <p className={`text-lg leading-relaxed ${i === 0 ? 'text-[#0D1520]/80 font-medium' : 'text-slate-400'}`}>{feat.desc}</p>
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
          Find a home <ArrowRight size={20} />
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
    { title: "Find Your Home", desc: "Select a verified property and choose the 'Monthly Flow' option." },
    { title: "Verify via Mono", desc: "Connect your bank account for an instant, paperless affordability scan." },
    { title: "Pay & Move In", desc: "Sign your digital lease, pay your first month + deposit, and collect your keys." }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold uppercase tracking-widest mb-6">
            The Process
          </div>
          <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-[#0D1520] mb-6">Simple. Transparent. Secure.</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-12 left-[16.66%] w-[66.66%] h-[2px] bg-gradient-to-r from-[#E2E8F0] via-[#00F5A0] to-[#E2E8F0] z-0" />
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="group flex flex-col items-center">
                <div className="w-24 h-24 bg-[#F8FAFC] border-2 border-[#E2E8F0] text-[#0D1520] rounded-full flex items-center justify-center font-jakarta font-bold text-3xl mb-10 relative z-10 group-hover:bg-[#00F5A0] group-hover:border-[#00F5A0] group-hover:-translate-y-3 group-hover:shadow-[0_10px_30px_rgba(0,245,160,0.5)] transition-all duration-500">
                  {i + 1}
                </div>
                <div className="bg-white border border-[#E2E8F0] p-10 rounded-[2rem] shadow-sm group-hover:shadow-2xl group-hover:-translate-y-3 transition-all duration-500 w-full text-center hover-line-effect flex-1">
                  <h3 className="font-jakarta text-2xl font-bold text-[#0D1520] mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-inter">{step.desc}</p>
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
  <section className="py-24 bg-[#F8FAFC]" id="tiers">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          Plans & Pricing
        </div>
        <h2 className="font-jakarta text-3xl md:text-5xl font-bold text-[#0D1520] mb-4">Select the Plan That Fits Your Rhythm.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
        {/* Pulse (Quarterly) */}
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
          <button onClick={() => setView('signup')} className="w-full py-4 rounded-xl border-2 border-[#3B82F6] text-[#3B82F6] font-bold hover:bg-[#3B82F6] hover:text-white transition-colors">Select Pulse</button>
        </div>

        {/* Flow (Monthly) - Highlighted */}
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
          <button onClick={() => setView('signup')} className="w-full py-4 rounded-xl bg-[#00F5A0] text-[#0D1520] font-bold text-lg hover:bg-[#00d68b] transition-colors shadow-[0_0_20px_rgba(0,245,160,0.3)]">Choose Monthly Flow</button>
        </div>

        {/* Prime (Bi-Annual) */}
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
          <button onClick={() => setView('signup')} className="w-full py-4 rounded-xl border-2 border-[#3B82F6] text-[#3B82F6] font-bold hover:bg-[#3B82F6] hover:text-white transition-colors">Select Prime</button>
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
    <section className="py-32 bg-gradient-to-br from-[#0D1520] to-[#141d2a] relative overflow-hidden" id="waitlist">
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[#00F5A0]/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="glass-panel-dark p-12 md:p-20 rounded-[3rem] text-center border border-white/10 shadow-2xl transition-transform hover:-translate-y-2 duration-700 hover-glow overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00F5A0] via-[#3B82F6] to-[#00F5A0] bg-[length:200%_auto] animate-gradient-x" />
          
          <h2 className="font-jakarta text-4xl md:text-6xl font-bold text-white mb-6">Join the Future of Renting.</h2>
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-inter">
            Join over 5,000 professionals and landlords waiting to break the annual rent cycle. Get early access to monthly listings in your preferred neighborhood.
          </p>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-widest ml-1">Full Name</label>
              <input required type="text" placeholder="e.g. Tunde Alabi" className="w-full bg-[#0D1520]/70 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-all" />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-widest ml-1">Email Address</label>
              <input required type="email" placeholder="tunde@example.com" className="w-full bg-[#0D1520]/70 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-all" />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-widest ml-1">I am a...</label>
              <select className="w-full bg-[#0D1520]/70 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] appearance-none cursor-pointer transition-all">
                <option>Tenant (Looking for monthly rent)</option>
                <option>Landlord (Property Owner)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#00F5A0] uppercase tracking-widest ml-1">Preferred Location</label>
              <input required type="text" placeholder="e.g. Lekki Phase 1, Lagos" className="w-full bg-[#0D1520]/70 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] transition-all" />
            </div>
            <div className="col-span-1 md:col-span-2 mt-8">
              <button type="submit" className="w-full bg-[#00F5A0] text-[#0D1520] py-5 rounded-2xl font-bold text-xl hover:bg-[#00d68b] transition-all hover-glow active:scale-95">
                Secure My Early Access
              </button>
            </div>
          </form>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0D1520]/90 backdrop-blur-md" onClick={() => setShowSuccess(false)} />
          <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] relative z-10 p-12 text-center animate-in zoom-in-95 duration-500">
            <div className="w-24 h-24 bg-[#00F5A0]/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <div className="w-16 h-16 bg-[#00F5A0] rounded-full flex items-center justify-center shadow-[0_0_40px_#00F5A0]">
                <Check size={36} className="text-[#0D1520]" />
              </div>
            </div>
            <h3 className="font-jakarta text-3xl font-bold text-[#0D1520] mb-4">You're on the list!</h3>
            <p className="text-slate-600 mb-10 leading-relaxed font-inter">
              Welcome to the movement. We've added you to the AltRent waitlist. Watch your inbox for a special early-access invite.
            </p>
            <button onClick={() => setShowSuccess(false)} className="w-full bg-[#0D1520] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#1a2536] transition-colors active:scale-95">
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
        
        {/* Column 1: Renters */}
        <div>
          <h4 className="font-jakarta font-bold text-lg mb-6 text-white">Renters</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><button onClick={() => setView('renters')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Monthly Flow</button></li>
            <li><button onClick={() => setView('renters')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Credit Building</button></li>
            <li><button onClick={() => setView('renters')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Renter FAQ</button></li>
            <li><button onClick={() => openWaitlist()} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Waitlist</button></li>
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
            <li><button onClick={() => setView('contact')} className="text-slate-400 hover:text-[#00F5A0] transition-colors">Contact Us</button></li>
          </ul>
        </div>

        {/* Column 4: Legal */}
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

// --- Dedicated Pages ---

const ContactPage = ({ setView }) => {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setView('home');
    }, 3000);
  };

  return (
    <div className="animate-in fade-in duration-500 bg-[#F8FAFC]">
      {/* Hero */}
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

      {/* Main Content */}
      <section className="py-12 pb-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
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

          {/* Contact Form */}
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

const RentersPage = ({ setView, openWaitlist }) => {
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
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
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
              Find a home <ArrowRight size={20} />
            </button>
            <button onClick={() => openWaitlist()} className="w-full sm:w-auto bg-transparent border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all">
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

const LandlordsPage = ({ setView }) => {
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
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
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
            <button onClick={() => setView('list-property')} className="w-full sm:w-auto bg-[#00F5A0] text-[#0D1520] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00d68b] shadow-sm transition-all flex items-center justify-center gap-2 hover-glow">
              List Your Property <ArrowRight size={20} />
            </button>
            <button onClick={() => setView('signup')} className="w-full sm:w-auto bg-transparent border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all">
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
              <div className="absolute bottom-6 md:bottom-12 pointer-events-auto glass-panel-dark p-6 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-full max-w-[300px] sm:max-w-sm border border-white/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
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
              <div key={i} className="bg-[#00F5A0]/10 border border-[#00F5A0]/20 p-8 rounded-2xl text-white hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,245,160,0.15)] transition-all duration-300 hover-line-effect">
                <div className="w-12 h-12 rounded-xl bg-[#00F5A0]/20 flex items-center justify-center mb-6 text-[#00F5A0]">
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
            <div className="hidden md:block absolute top-10 left-[12.5%] w-[75%] h-[2px] bg-gradient-to-r from-[#E2E8F0] via-[#00F5A0] to-[#E2E8F0] z-0" />

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { title: "Onboard Units", desc: "List your property and specify your preference for Flow (Monthly) or Pulse (Quarterly) tiers." },
                { title: "Vet Applicants", desc: "Review the detailed Trust Score and income analysis for every prospective tenant." },
                { title: "Automated Execution", desc: "The platform manages the first payment, security deposit escrow, and digital signatures." },
                { title: "Passive Management", desc: "Monitor your portfolio via the dashboard while we handle the collections and legal compliance." }
              ].map((step, i) => (
                <div key={i} className="group flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#F8FAFC] border-2 border-[#E2E8F0] text-[#0D1520] rounded-full flex items-center justify-center font-jakarta font-bold text-xl mb-8 relative z-10 group-hover:bg-[#00F5A0] group-hover:border-[#00F5A0] group-hover:text-[#0D1520] group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(0,245,160,0.4)] transition-all duration-300">
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
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover-line-effect">
                <div className="w-10 h-10 rounded-full bg-[#00F5A0]/20 flex items-center justify-center mb-6 text-[#00F5A0]">
                  <ShieldCheck size={20} />
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

const BrowsePage = ({ setView }) => {
  const [selectedProp, setSelectedProp] = useState(null);
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

  const startVerification = () => setVerifyStep(1);

  const proceedToMono = () => {
    setVerifyStep(2);
    setTimeout(() => { setVerifyStep(3); }, 2500);
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
            <button className="hidden md:flex items-center justify-center gap-2 w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-slate-500 hover:text-[#0D1520] hover:border-[#0D1520] transition-colors shrink-0">
              <Filter size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.filter(p => p.rent <= maxPrice).map((prop) => (
          <div key={prop.id} onClick={() => setSelectedProp(prop)} className="bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col hover-line-effect">
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
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F8FAFC] border border-[#E2E8F0] text-slate-500 px-2 py-1 rounded-md">Credit-Building Enabled</span>
                </div>
                
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-500 mb-1 tracking-wide">Total: ₦{(prop.rent * 12).toLocaleString()}/yr</p>
                    <div className="bg-[#00F5A0] text-[#0D1520] px-4 py-2 rounded-xl group-hover:shadow-[0_0_15px_rgba(0,245,160,0.3)] transition-all">
                      <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">AltRent Flow</p>
                      <p className="font-jakarta font-bold text-xl">₦{prop.rent.toLocaleString()}<span className="text-xs font-medium opacity-80">/mo</span></p>
                    </div>
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
    if (!selectedProp) return null;
    const prop = selectedProp;
    
    // Rent Breakdown Logic
    const totalRent = prop.rent * 12;
    const monthlyRent = prop.rent;
    const initialPayment = totalRent * 0.20;
    const total = initialPayment;

    return (
      <div className="max-w-[1200px] mx-auto px-6 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button onClick={() => setSelectedProp(null)} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#0D1520] transition-colors mb-6">
          <ArrowLeft size={16} /> Find a home
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
                  <p className="text-lg text-slate-500 flex items-center gap-2"><MapPin size={18} /> {prop.loc}</p>
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
                  <p className="text-2xl font-jakarta font-bold text-[#0D1520]">{prop.type || 'Apartment'}</p>
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
                    Requires {prop.score || 75}+ Score
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 md:p-8 shadow-xl">
                <h3 className="font-jakarta text-xl font-bold text-[#0D1520] mb-6">The "Flow" Calculator</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Total Annual Rent</span>
                    <span className="font-bold text-[#0D1520]">₦{totalRent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Monthly Rent</span>
                    <span className="font-bold text-[#0D1520]">₦{monthlyRent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Initial Payment (20%)</span>
                    <span className="font-bold text-[#0D1520]">₦{initialPayment.toLocaleString()}</span>
                  </div>
                </div>

                <div className="h-px bg-[#E2E8F0] w-full mb-6" />

                <div className="flex justify-between items-end mb-8">
                  <span className="text-sm font-bold text-[#0D1520]">First Time Payment Total</span>
                  <div className="text-right">
                    <span className="block font-jakarta text-3xl font-bold text-[#00F5A0]">₦{total.toLocaleString()}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Due today</span>
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
      {!selectedProp ? renderGrid() : renderDetail()}

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
                  <button onClick={() => { setVerifyStep(0); setSelectedProp(null); setView('signup'); }} className="w-full bg-[#00F5A0] text-[#0D1520] py-4 rounded-xl font-bold hover:bg-[#00d68b] transition-colors shadow-[0_0_20px_rgba(0,245,160,0.3)] hover-glow">
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

// --- Wizard: List Property ---

const ListPropertyWizard = ({ setView }) => {
  const [step, setStep] = useState(1);
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 animate-in fade-in">
      <div className="max-w-3xl mx-auto px-6">
        <button onClick={() => setView('landlords')} className="flex items-center gap-2 text-slate-500 font-bold mb-8 hover:text-[#0D1520]"><ArrowLeft size={18} /> Back</button>
        <div className="bg-white rounded-[2.5rem] shadow-xl p-12 border border-[#E2E8F0]">
          <div className="flex justify-between mb-12">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-2 flex-1 rounded-full mx-1 ${step >= i ? 'bg-[#00F5A0]' : 'bg-slate-100'}`} />
            ))}
          </div>
          {step === 1 && (
            <div className="animate-in slide-in-from-right-4">
              <h2 className="text-3xl font-bold text-[#0D1520] mb-6 font-jakarta">Property Basics</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Property Address</label>
                  <input type="text" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-6 py-4 focus:border-[#00F5A0] outline-none" placeholder="e.g. 12 Admiralty Way, Lekki" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Property Type</label>
                    <select className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-6 py-4 outline-none">
                      <option>Apartment</option>
                      <option>Duplex</option>
                      <option>Studio</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Bedrooms</label>
                    <input type="number" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-6 py-4 outline-none" placeholder="2" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="animate-in slide-in-from-right-4">
              <h2 className="text-3xl font-bold text-[#0D1520] mb-6 font-jakarta">Rent Configuration</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Target Monthly Rent (₦)</label>
                  <input type="number" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-6 py-4 focus:border-[#00F5A0] outline-none" placeholder="250,000" />
                </div>
                <div className="bg-[#3B82F6]/5 p-6 rounded-2xl border border-[#3B82F6]/20">
                  <p className="text-sm text-[#3B82F6] font-medium leading-relaxed">By listing on AltRent, you opt into the automated mediation protocol. This ensures 0% arrears but requires adherence to the Lagos TRPB 2025 standard lease.</p>
                </div>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="text-center animate-in zoom-in-95 py-10">
              <div className="w-20 h-20 bg-[#00F5A0]/20 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={40} className="text-[#00F5A0]" /></div>
              <h2 className="text-3xl font-bold text-[#0D1520] mb-4 font-jakarta">Ready for Verification</h2>
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
              <button onClick={() => setStep(step - 1)} className="px-6 py-3 font-bold text-slate-500 hover:text-[#3B82F6]">Back</button>
            ) : <div />}
            
            {step < 3 ? (
              <button onClick={() => setStep(step + 1)} className="bg-[#0D1520] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1a2536] transition-colors flex items-center gap-2">
                Next Step <ArrowRight size={18} />
              </button>
            ) : (
              <button onClick={() => setView('signup')} className="bg-[#00F5A0] text-[#0D1520] px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#00d68b] transition-colors hover-glow mx-auto">
                Create Account
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Auth & Dash ---

const SignUpFlow = ({ setView }) => {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState(null);
  const [loading, setLoading] = useState(false);

  const roles = [
    { id: 'tenant', title: 'I am a Renter', icon: <Home size={36} />, desc: 'Find premium homes and pay monthly via automated flow.' },
    { id: 'landlord', title: 'I am a Landlord', icon: <Key size={36} />, desc: 'List your property and get secure remittances with legal shield.' },
    { id: 'enterprise', title: 'I am Corporate', icon: <Building2 size={36} />, desc: 'Manage housing as a staff benefit for high-performance teams.' }
  ];

  const handleNext = () => {
    if (step === 1 && selectedRole) setStep(2);
    else if (step === 2) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(3);
      }, 2000);
    } else if (step === 3) {
      setView('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1520] flex items-center justify-center p-6 relative overflow-hidden font-inter">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00F5A0]/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center mb-16">
          <button onClick={() => setView('home')} className="mb-10 transition-transform hover:scale-105">
            <Logo variant="light" />
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {step === 1 ? 'How do you want to use AltRent?' : step === 2 ? 'Create Your Account' : 'Identity Verified'}
          </h1>
          <p className="text-slate-400 text-lg">
            {step === 1 ? 'Select the profile that fits your needs.' : step === 2 ? 'We use Mono for instant, secure verification.' : 'Welcome to the future of Nigerian real estate.'}
          </p>
        </div>

        {step === 1 && (
          <div className="grid md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8">
            {roles.map(role => (
              <div 
                key={role.id} 
                onClick={() => setSelectedRole(role.id)}
                className={`p-10 rounded-[2.5rem] border transition-all duration-500 cursor-pointer flex flex-col items-center text-center ${
                  selectedRole === role.id 
                    ? 'bg-[#00F5A0]/10 border-[#00F5A0] shadow-[0_0_40px_rgba(0,245,160,0.2)]' 
                    : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                }`}
              >
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-colors ${selectedRole === role.id ? 'bg-[#00F5A0] text-[#0D1520]' : 'bg-white/10 text-white'}`}>
                  {role.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{role.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="max-w-md mx-auto glass-panel-dark p-12 rounded-[2.5rem] border border-white/10 shadow-2xl animate-in zoom-in-95">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#00F5A0] uppercase tracking-widest ml-1">Full Name</label>
                <input type="text" className="w-full bg-[#0D1520]/80 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00F5A0]" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#00F5A0] uppercase tracking-widest ml-1">Email Address</label>
                <input type="email" className="w-full bg-[#0D1520]/80 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00F5A0]" placeholder="john@company.com" />
              </div>
              <button onClick={handleNext} disabled={loading} className="w-full bg-[#00F5A0] text-[#0D1520] py-5 rounded-2xl font-bold text-xl hover:bg-[#00d68b] transition-all flex items-center justify-center gap-3 active:scale-95">
                {loading ? <Loader2 size={24} className="animate-spin" /> : 'Connect with Mono'}
              </button>
              <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest flex items-center justify-center gap-2">
                <Lock size={12} /> Secure 256-bit AES encryption
              </p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-md mx-auto text-center animate-in zoom-in-90">
            <div className="w-24 h-24 bg-[#00F5A0] rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_#00F5A0]">
              <Check size={48} className="text-[#0D1520]" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">You're Pre-Approved!</h2>
            <p className="text-slate-400 text-lg mb-12">Your AltRent Trust Score is verified. You can now unlock monthly flow on any listed home.</p>
            <button onClick={handleNext} className="w-full bg-[#00F5A0] text-[#0D1520] py-5 rounded-2xl font-bold text-xl hover:bg-[#00d68b] transition-all hover-glow shadow-lg active:scale-95">
              Enter Dashboard
            </button>
          </div>
        )}

        {step < 3 && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={handleNext} 
              disabled={step === 1 && !selectedRole} 
              className={`px-12 py-5 rounded-2xl font-bold text-xl transition-all ${selectedRole || step > 1 ? 'bg-[#00F5A0] text-[#0D1520] hover:bg-[#00d68b] hover-glow' : 'bg-white/10 text-slate-500 cursor-not-allowed'}`}
            >
              {step === 1 ? 'Continue' : 'Verify Identity'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const LoginPage = ({ setView }) => (
  <div className="min-h-screen bg-[#0D1520] flex items-center justify-center p-6 text-center">
    <div className="max-w-md w-full animate-in zoom-in-95">
      <Logo variant="light" className="justify-center mb-12" />
      <h1 className="text-4xl font-bold text-white mb-6 font-jakarta">Instant Identity.</h1>
      <p className="text-slate-400 mb-10 leading-relaxed">Connect your bank account via Mono for a 15-minute verification of your monthly rent flow. Paperless, secure, and instant.</p>
      <button onClick={() => setView('dashboard')} className="w-full bg-[#00F5A0] text-[#0D1520] py-5 rounded-2xl font-bold text-xl active:scale-95 transition-all">Connect with Mono</button>
      <button onClick={() => setView('home')} className="mt-8 text-slate-500 font-bold hover:text-white transition-colors">Cancel</button>
    </div>
  </div>
);

const Dashboard = ({ setView }) => (
  <div className="flex h-screen bg-[#F8FAFC] animate-in fade-in overflow-hidden font-inter">
    <aside className="w-80 bg-[#0D1520] h-full text-white flex flex-col p-8 shrink-0">
      <Logo variant="light" className="mb-16" />
      <nav className="flex-1 space-y-4">
        <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-[#00F5A0]/10 text-[#00F5A0] font-bold"><Home size={22} /> Dashboard</button>
        <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-slate-400 hover:text-white"><CreditCard size={22} /> Payments</button>
      </nav>
      <button onClick={() => setView('home')} className="mt-auto flex items-center gap-4 p-4 rounded-2xl text-red-400 font-bold hover:bg-red-400/10"><LogOut size={22} /> Logout</button>
    </aside>
    <main className="flex-1 overflow-y-auto p-12">
      <h1 className="text-4xl font-bold text-[#0D1520] mb-10 font-jakarta">Welcome, Tunde.</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-[#0D1520] p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
          <h3 className="text-3xl font-bold mb-4 font-jakarta">Active Flow</h3>
          <p className="text-slate-400 text-lg mb-8">Lekki Ph 1 Flat • ₦250k Due in 12 days</p>
          <button className="bg-[#00F5A0] text-[#0D1520] px-8 py-4 rounded-2xl font-bold">Pay Rent Early</button>
        </div>
        <div className="bg-white border border-slate-200 p-10 rounded-[2.5rem] text-center">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trust Score</h4>
          <p className="text-5xl font-bold text-[#0D1520] mb-2 font-jakarta">782</p>
          <p className="text-sm font-bold text-[#00F5A0] uppercase tracking-widest">Excellent</p>
        </div>
      </div>
    </main>
  </div>
);

// --- Main App Logic ---

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [policyType, setPolicyType] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, [currentView]);

  const renderView = () => {
    switch(currentView) {
      case 'browse': return <BrowsePage setView={setCurrentView} />;
      case 'renters': return <RentersPage setView={setCurrentView} openWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'landlords': return <LandlordsPage setView={setCurrentView} />;
      case 'list-property': return <ListPropertyWizard setView={setCurrentView} />;
      case 'contact': return <ContactPage setView={setCurrentView} />;
      case 'pricing': return <Pricing setView={setCurrentView} />;
      case 'hq': return (
        <div className="bg-[#F8FAFC] pt-32 pb-20 animate-in fade-in">
          <div className="max-w-7xl mx-auto px-6 text-center py-32">
            <h1 className="text-5xl md:text-7xl font-bold text-[#0D1520] mb-8 font-jakarta">Enterprise Protocol.</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">Manage team relocation via one dashboard with monthly billing.</p>
            <button onClick={() => setCurrentView('signup')} className="bg-[#3B82F6] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-600 shadow-xl transition-all">Schedule Demo</button>
          </div>
        </div>
      );
      case 'about': return (
        <div className="bg-[#F8FAFC] pt-32 pb-20 animate-in fade-in">
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <h1 className="text-5xl font-bold text-[#0D1520] mb-10 font-jakarta">Breaking the Cycle.</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">We believe the annual rent system in Nigeria is an archaic barrier to professional growth. AltRent aligns housing costs with income cycles.</p>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" className="w-full aspect-video rounded-[3rem] object-cover mb-20" alt="Team" />
          </div>
        </div>
      );
      default: return (
        <>
          <Hero setView={setCurrentView} openWaitlist={() => setIsWaitlistOpen(true)} />
          <CoreVision />
          <ForTenants setView={setCurrentView} />
          <ForLandlords setView={setCurrentView} />
          <HowItWorks />
          <Pricing setView={setCurrentView} />
          <Waitlist />
        </>
      );
    }
  };

  return (
    <div className="min-h-screen">
      <FontStyles />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      <PolicyModal type={policyType} onClose={() => setPolicyType(null)} />
      {['signup', 'login', 'dashboard'].includes(currentView) ? (
        currentView === 'dashboard' ? <Dashboard setView={setCurrentView} /> : currentView === 'signup' ? <SignUpFlow setView={setCurrentView} /> : <LoginPage setView={setCurrentView} />
      ) : (
        <>
          <Header setView={setCurrentView} currentView={currentView} />
          {renderView()}
          <Footer setView={setCurrentView} openPolicyModal={setPolicyType} openWaitlist={() => setIsWaitlistOpen(true)} />
        </>
      )}
    </div>
  );
}