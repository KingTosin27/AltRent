import React, { useState, useEffect } from "react";
import { 
  Menu, X, ArrowRight, ShieldCheck, TrendingUp, Building, Users, Home, 
  Mail, Phone, Check, Loader2, Heart, Share2, Star, ChevronRight
} from "lucide-react";
import { supabase } from './supabaseClient';

// --- Utility: Smooth Scroll ---
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Navbar (Premium Glassmorphism) ---
const Navbar = ({ setView, currentView, session }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-7'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div onClick={() => setView('home')} className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-[#0D1520] rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-black/10">
            <div className="w-5 h-5 border-2 border-[#00F5A0] rounded-sm" />
          </div>
          <span className="font-jakarta text-2xl font-bold text-[#0D1520] tracking-tighter uppercase">AltRent</span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <button onClick={() => setView('renters')} className="hover:text-[#0D1520] transition-colors">Renters</button>
          <button onClick={() => setView('landlords')} className="hover:text-[#0D1520] transition-colors">Landlords</button>
          <button onClick={() => setView('enterprise')} className="hover:text-[#0D1520] transition-colors">Enterprise</button>
          <div className="h-4 w-px bg-slate-200 mx-2" />
          <button onClick={() => setView('browse')} className="bg-[#0D1520] text-white px-8 py-3 rounded-full hover:bg-black transition-all hover:scale-105 shadow-xl shadow-black/10">
            Browse Homes
          </button>
          {!session ? (
            <button onClick={() => setView('login')} className="text-[#0D1520] border-2 border-[#0D1520] px-7 py-2.5 rounded-full hover:bg-[#0D1520] hover:text-white transition-all">
              Login
            </button>
          ) : (
            <button onClick={() => setView('dashboard')} className="flex items-center gap-2 text-[#0D1520] bg-slate-100 px-5 py-2.5 rounded-full hover:bg-slate-200 transition-colors">
              <Users size={16} /> Portal
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

// --- Page: Home (The Premium Hero & Waitlist) ---
const HomePage = ({ setView }) => (
  <div className="animate-in fade-in duration-1000">
    <section className="relative pt-48 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/20 text-[#00F5A0] text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
            <TrendingUp size={14} /> Lagos Tenancy Reform 2026 Ready
          </div>
          <h1 className="text-6xl lg:text-[100px] font-bold text-[#0D1520] leading-[0.82] tracking-[-0.04em] mb-10">
            Rent Monthly. <br /><span className="text-slate-300">Live Fully.</span>
          </h1>
          <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
            Join 10,000+ Nigerians who have stopped saving for 12 months just to pay for 1. Your home is now a subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button onClick={() => setView('browse')} className="bg-[#0D1520] text-white px-10 py-6 rounded-3xl font-bold text-lg hover:bg-black shadow-2xl shadow-black/20 flex items-center justify-center gap-4 group transition-all hover:-translate-y-1">
              Find Your Home <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button onClick={() => scrollToSection('waitlist')} className="bg-white text-[#0D1520] border-2 border-slate-100 px-10 py-6 rounded-3xl font-bold text-lg hover:border-[#0D1520] transition-all">
              Join Waitlist
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#00F5A0]/10 blur-[150px] rounded-full" />
          <div className="relative rounded-[60px] overflow-hidden shadow-2xl border-[16px] border-white transform rotate-1 hover:rotate-0 transition-all duration-700">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" alt="Lagos Modern Living" className="w-full aspect-[4/5] object-cover scale-110" />
            <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-xl p-8 rounded-[32px] shadow-2xl border border-white/50">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-[#0D1520] text-lg tracking-tight">2-Bed, Lekki Phase 1</span>
                <div className="px-3 py-1 bg-[#00F5A0]/20 rounded-full text-[#00F5A0] text-[10px] font-bold uppercase">Verified</div>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-3xl font-bold text-[#0D1520]">₦250k</span>
                <span className="text-slate-500 font-bold mb-1">/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Waitlist Section */}
    <section id="waitlist" className="py-40 bg-[#0D1520] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Skip the <span className="text-[#00F5A0]">annual drama.</span></h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Be the first to know when we launch in your neighborhood.
        </p>
        <div className="bg-white/5 border border-white/10 p-2.5 rounded-[32px] flex flex-col md:flex-row gap-4 max-w-2xl mx-auto backdrop-blur-md">
          <input type="email" placeholder="Email address" className="flex-1 bg-transparent p-5 text-white outline-none placeholder:text-slate-500 font-bold" />
          <button className="bg-[#00F5A0] text-[#0D1520] px-12 py-5 rounded-[24px] font-bold text-lg hover:scale-95 transition-all">Join Early Access</button>
        </div>
      </div>
    </section>
  </div>
);

// --- Page: Contact Us ---
const ContactPage = ({ setView }) => (
  <div className="animate-in fade-in pt-48 pb-32 max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-24">
      <div>
        <h1 className="text-7xl font-bold text-[#0D1520] tracking-tighter mb-8 leading-[0.9]">We're all <br /><span className="text-slate-300">ears.</span></h1>
        <p className="text-xl text-slate-500 mb-12 leading-relaxed">Need help with your application? Our support team is active 24/7.</p>
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-[#0D1520]"><Mail /></div>
            <div><p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Us</p><p className="text-xl font-bold text-[#0D1520]">hello@altrent.com</p></div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-[#0D1520]"><Phone /></div>
            <div><p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Call Us</p><p className="text-xl font-bold text-[#0D1520]">+234 (0) 800-ALTR-ENT</p></div>
          </div>
        </div>
      </div>
      <div className="bg-white p-12 rounded-[48px] shadow-2xl border border-slate-50">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <input placeholder="First Name" className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#00F5A0]/20 font-medium" />
            <input placeholder="Last Name" className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#00F5A0]/20 font-medium" />
          </div>
          <input placeholder="Email Address" className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#00F5A0]/20 font-medium" />
          <textarea rows="5" placeholder="Your Message" className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#00F5A0]/20 font-medium"></textarea>
          <button className="w-full bg-[#0D1520] text-white py-6 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">Send Message</button>
        </form>
      </div>
    </div>
  </div>
);

// --- Auth Restoration ---
const LoginPage = ({ setView, setDashboardRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError) { setError(authError.message); setLoading(false); return; }
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', data.user.id).single();
    if (profile) setDashboardRole(profile.role);
    setLoading(false); setView('dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-12 rounded-[48px] shadow-2xl border border-slate-100">
        <h1 className="text-4xl font-bold text-[#0D1520] mb-8 text-center">Welcome Back</h1>
        <form onSubmit={handleLogin} className="space-y-5">
          {error && <div className="p-4 bg-red-50 text-red-500 rounded-2xl text-xs font-bold">{error}</div>}
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:border-[#00F5A0] border border-transparent" />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:border-[#00F5A0] border border-transparent" />
          <button disabled={loading} className="w-full bg-[#0D1520] text-white py-5 rounded-2xl font-bold text-lg">
            {loading ? <Loader2 className="animate-spin mx-auto" /> : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

// --- App Root ---
export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [dashboardRole, setDashboardRole] = useState('tenant');
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setSession(session));
    return () => subscription.unsubscribe();
  }, []);

  const renderView = () => {
    switch(currentView) {
      case 'home': return <HomePage setView={setCurrentView} />;
      case 'contact': return <ContactPage setView={setCurrentView} />;
      case 'login': return <LoginPage setView={setCurrentView} setDashboardRole={setDashboardRole} />;
      default: return <HomePage setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-jakarta">
      {currentView !== 'login' && <Navbar setView={setCurrentView} currentView={currentView} session={session} />}
      <main>{renderView()}</main>
      
      {currentView !== 'login' && (
        <footer className="bg-white border-t border-slate-100 py-24 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <div className="font-bold text-2xl mb-4 uppercase">AltRent</div>
              <p className="text-slate-400 max-w-xs font-medium">The modern way to live in Lagos. Pay monthly, dream big.</p>
            </div>
            <div className="flex gap-16">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Quick Links</span>
                <button onClick={() => setCurrentView('contact')} className="text-left font-bold text-slate-600">Contact Us</button>
                <button onClick={() => scrollToSection('waitlist')} className="text-left font-bold text-slate-600">Join Waitlist</button>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}