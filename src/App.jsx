import React, { useState, useEffect } from "react";
import { 
  Menu, X, ArrowRight, ShieldCheck, TrendingUp, FileText, 
  ChevronRight, Building, Users, Home, Settings, LogOut, 
  Mail, Phone, MapPin, Check, Lock, Search, Map, Loader2, 
  ArrowLeft, CheckCircle2 
} from "lucide-react";
import { supabase } from './supabaseClient';

// --- Helper: Smooth Scroll ---
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Components: Navigation ---
const Navbar = ({ setView, currentView, session }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div onClick={() => setView('home')} className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-[#0D1520] rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
            <div className="w-5 h-5 border-2 border-[#00F5A0] rounded-sm" />
          </div>
          <span className="font-jakarta text-2xl font-bold text-[#0D1520] tracking-tighter">AltRent</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <button onClick={() => setView('renters')} className="hover:text-[#0D1520] transition-colors">Renters</button>
          <button onClick={() => setView('landlords')} className="hover:text-[#0D1520] transition-colors">Landlords</button>
          <button onClick={() => setView('enterprise')} className="hover:text-[#0D1520] transition-colors">Enterprise</button>
          <button onClick={() => setView('browse')} className="bg-[#0D1520] text-white px-6 py-2.5 rounded-full hover:bg-[#1a2536] transition-all">Browse Homes</button>
          {!session ? (
            <button onClick={() => setView('login')} className="text-[#0D1520] border-2 border-[#0D1520] px-6 py-2 rounded-full hover:bg-[#0D1520] hover:text-white transition-all">Login</button>
          ) : (
            <button onClick={() => setView('dashboard')} className="flex items-center gap-2 text-[#0D1520]"><Users size={18} /> Dashboard</button>
          )}
        </div>

        <button className="md:hidden text-[#0D1520]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

// --- Page: Contact Us ---
const ContactPage = ({ setView }) => {
  const [formSent, setFormSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => { setFormSent(false); setView('home'); }, 3000);
  };

  return (
    <div className="animate-in fade-in pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-bold text-[#0D1520] mb-6">Let's Talk.</h1>
          <p className="text-slate-600 mb-10 text-lg">Have questions about the monthly rental bill? Our team is here to help you bridge the gap.</p>
          <div className="space-y-6">
            <div className="flex gap-4"><Mail className="text-[#00F5A0]" /> <span>hello@altrent.com</span></div>
            <div className="flex gap-4"><Phone className="text-[#00F5A0]" /> <span>+234 800 ALTR ENT</span></div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
          {!formSent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 rounded-xl outline-none border focus:border-[#00F5A0]" />
              <input required type="email" placeholder="Email" className="w-full p-4 bg-slate-50 rounded-xl outline-none border focus:border-[#00F5A0]" />
              <textarea rows="4" placeholder="How can we help?" className="w-full p-4 bg-slate-50 rounded-xl outline-none border focus:border-[#00F5A0]"></textarea>
              <button className="w-full bg-[#0D1520] text-white py-4 rounded-xl font-bold">Send Message</button>
            </form>
          ) : (
            <div className="text-center py-10"><Check size={48} className="mx-auto text-[#00F5A0] mb-4" /> <h3 className="text-2xl font-bold">Message Sent!</h3></div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Page: Home (Landing) ---
const HomePage = ({ setView }) => (
  <div className="animate-in fade-in duration-700">
    {/* Hero Section */}
    <section className="relative pt-40 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/20 text-[#00F5A0] text-xs font-bold uppercase tracking-wider mb-6">
            <TrendingUp size={14} /> Lagos Tenancy Reform 2026 Ready
          </div>
          <h1 className="font-jakarta text-6xl lg:text-8xl font-bold text-[#0D1520] leading-[0.9] tracking-tighter mb-8">
            Rent Monthly. <br /><span className="text-slate-400">Live Fully.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Stop saving for 12 months just to pay for 1. Join 10,000+ Nigerians paying rent as a subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setView('browse')} className="bg-[#0D1520] text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-[#1a2536] shadow-xl flex items-center justify-center gap-2 group">
              Find Your Home <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => scrollToSection('waitlist')} className="bg-white text-[#0D1520] border-2 border-[#0D1520] px-8 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50">
              Join Waitlist
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00F5A0]/20 blur-[120px] rounded-full" />
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" alt="Modern Nigerian Home" className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Waitlist Section */}
    <section id="waitlist" className="py-24 bg-[#0D1520] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Join the Waitlist</h2>
        <p className="text-slate-400 mb-10">We are rolling out in batches. Secure your spot today.</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="flex-1 p-4 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-[#00F5A0]" />
          <button className="bg-[#00F5A0] text-[#0D1520] px-8 py-4 rounded-xl font-bold">Join Now</button>
        </div>
      </div>
    </section>
  </div>
);

// --- Auth Components (Supabase Integrated) ---
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
    <div className="min-h-screen bg-[#0D1520] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/5 p-8 rounded-3xl border border-white/10">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-4 rounded-xl bg-[#0D1520] border border-white/10 text-white" />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-4 rounded-xl bg-[#0D1520] border border-white/10 text-white" />
          <button disabled={loading} className="w-full bg-[#00F5A0] py-4 rounded-xl font-bold text-[#0D1520]">
            {loading ? <Loader2 className="animate-spin mx-auto" /> : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

// --- Integrated SignUpFlow, BrowsePage, etc would go here... (Condensed for brevity but keep your logic) ---

// --- Main App Export ---
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
      // Add other cases as needed
      default: return <HomePage setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-jakarta">
      <Navbar setView={setCurrentView} currentView={currentView} session={session} />
      {renderView()}
      
      {/* Footer (Simplified) */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-bold text-2xl">AltRent</div>
          <div className="flex gap-8 text-sm font-bold text-slate-500">
            <button onClick={() => setCurrentView('contact')}>Contact Us</button>
            <button onClick={() => scrollToSection('waitlist')}>Waitlist</button>
          </div>
          <div className="text-slate-400 text-sm">© 2026 AltRent Nigeria.</div>
        </div>
      </footer>
    </div>
  );
}