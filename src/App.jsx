import React, { useState, useEffect } from "react";
import { 
  Menu, X, ArrowRight, ShieldCheck, TrendingUp, FileText, 
  ChevronRight, Building, Users, Home, Settings, LogOut, 
  Mail, Phone, MapPin, Check, Lock, Search, Map, Loader2, 
  ArrowLeft, CheckCircle2, Heart, Share2, Info, Star
} from "lucide-react";
import { supabase } from './supabaseClient';

// --- Utility: Smooth Scroll ---
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Navbar Component ---
const Navbar = ({ setView, currentView, session }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Renters', id: 'renters' },
    { name: 'Landlords', id: 'landlords' },
    { name: 'Enterprise', id: 'enterprise' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-7'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div onClick={() => setView('home')} className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-[#0D1520] rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-black/10">
            <div className="w-5 h-5 border-2 border-[#00F5A0] rounded-sm" />
          </div>
          <span className="font-jakarta text-2xl font-bold text-[#0D1520] tracking-tighter">AltRent</span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-slate-500">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => setView(link.id)} className={`hover:text-[#0D1520] transition-colors ${currentView === link.id ? 'text-[#0D1520]' : ''}`}>
              {link.name}
            </button>
          ))}
          <div className="h-4 w-px bg-slate-200" />
          <button onClick={() => setView('browse')} className="bg-[#0D1520] text-white px-7 py-3 rounded-full hover:bg-[#1a2536] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10">
            Browse Homes
          </button>
          {!session ? (
            <button onClick={() => setView('login')} className="text-[#0D1520] border-2 border-[#0D1520] px-7 py-2.5 rounded-full hover:bg-[#0D1520] hover:text-white transition-all font-bold">
              Login
            </button>
          ) : (
            <button onClick={() => setView('dashboard')} className="flex items-center gap-2 text-[#0D1520] bg-slate-100 px-5 py-2.5 rounded-full hover:bg-slate-200 transition-colors">
              <Users size={16} /> My Portal
            </button>
          )}
        </div>

        <button className="md:hidden text-[#0D1520]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-white shadow-2xl p-8 animate-in slide-in-from-top duration-300 md:hidden flex flex-col gap-6">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-xl">Menu</span>
            <X onClick={() => setMobileMenuOpen(false)} />
          </div>
          {navLinks.map(link => (
            <button key={link.id} onClick={() => { setView(link.id); setMobileMenuOpen(false); }} className="text-left text-lg font-bold text-slate-600 uppercase tracking-widest">{link.name}</button>
          ))}
          <button onClick={() => { setView('browse'); setMobileMenuOpen(false); }} className="w-full bg-[#0D1520] text-white py-4 rounded-xl font-bold">Browse Homes</button>
        </div>
      )}
    </nav>
  );
};

// --- Page: Home ---
const HomePage = ({ setView }) => (
  <div className="animate-in fade-in duration-700">
    <section className="relative pt-48 pb-32 overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/20 text-[#00F5A0] text-[11px] font-bold uppercase tracking-widest mb-8">
            <TrendingUp size={14} /> Lagos Tenancy Reform 2026 Compliant
          </div>
          <h1 className="font-jakarta text-6xl lg:text-[88px] font-bold text-[#0D1520] leading-[0.85] tracking-tighter mb-8">
            Rent Monthly. <br /><span className="text-slate-400">Live Fully.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-lg leading-relaxed font-medium">
            Stop saving for 12 months just to pay for 1. Join 10,000+ Nigerian professionals paying rent as a subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button onClick={() => setView('browse')} className="bg-[#0D1520] text-white px-10 py-6 rounded-2xl font-bold text-lg hover:bg-[#1a2536] shadow-2xl shadow-black/20 flex items-center justify-center gap-3 group transition-all hover:-translate-y-1">
              Find Your Home <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button onClick={() => scrollToSection('waitlist')} className="bg-white text-[#0D1520] border-2 border-[#E2E8F0] px-10 py-6 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-[#0D1520] transition-all">
              Join Waitlist
            </button>
          </div>
          
          <div className="mt-16 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="User" />
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-[#0D1520]">Trusted by 4k+ Tenants</p>
              <div className="flex text-[#00F5A0] gap-0.5"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00F5A0]/20 blur-[120px] rounded-full animate-pulse" />
          <div className="relative rounded-[50px] overflow-hidden shadow-2xl border-[12px] border-white transform rotate-2 hover:rotate-0 transition-transform duration-700">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" alt="Lagos Modern Living" className="w-full aspect-[4/5] object-cover scale-110 hover:scale-100 transition-transform duration-1000" />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-[#0D1520]">2-Bed, Lekki Phase 1</span>
                <span className="text-[#00F5A0] font-bold">Verified</span>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold">₦250k</span>
                <span className="text-slate-500 font-bold mb-1">/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Waitlist Form Section */}
    <section id="waitlist" className="py-32 bg-[#0D1520] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00F5A0_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Early Access batch #3.</h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          We are rolling out monthly rent in Lekki, VI, and Yaba. Be the first to know when your dream home is listed.
        </p>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-3xl flex flex-col md:flex-row gap-4 max-w-2xl mx-auto shadow-2xl">
          <input type="email" placeholder="Email address" className="flex-1 bg-transparent p-5 text-white outline-none placeholder:text-slate-500 font-bold" />
          <button className="bg-[#00F5A0] text-[#0D1520] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#00e092] transition-colors">Join Waitlist</button>
        </div>
        <p className="mt-6 text-slate-500 text-sm flex items-center justify-center gap-2">
          <ShieldCheck size={16} /> Your data is secured with AES-256 encryption.
        </p>
      </div>
    </section>
  </div>
);

// --- Sub-Pages (Restored Full Design) ---

const RentersPage = ({ setView }) => (
  <div className="animate-in fade-in pt-40 pb-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mb-20">
        <h1 className="text-7xl font-bold text-[#0D1520] tracking-tighter leading-[0.9] mb-8">Pay as you earn. <br />Live as you please.</h1>
        <p className="text-2xl text-slate-500 leading-relaxed">Annual rent is a relic of the past. AltRent lets you subscribe to housing just like you subscribe to Netflix or Gym.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {[
          { title: 'Zero Upfront', desc: 'No more "2-years advance." Pay your first month and move in.', icon: <Building /> },
          { title: 'Credit Building', desc: 'Every on-time payment boosts your AltRent Trust Score.', icon: <TrendingUp /> },
          { title: 'Fast Approval', desc: 'Get verified in 15 minutes via our Mono integration.', icon: <ShieldCheck /> }
        ].map((feat, i) => (
          <div key={i} className="p-10 bg-slate-50 rounded-[40px] hover:bg-[#00F5A0]/5 transition-colors group">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">{feat.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{feat.title}</h3>
            <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LandlordsPage = ({ setView }) => (
  <div className="animate-in fade-in pt-40 pb-20 bg-[#0D1520] text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <h1 className="text-7xl font-bold tracking-tighter leading-[0.9] mb-8">Guaranteed Income.<br /><span className="text-[#00F5A0]">Zero Arrears.</span></h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">We vet tenants so you don't have to. Get your annual value paid out in automated, secured monthly chunks—backed by our Legal Shield.</p>
          <button onClick={() => setView('browse')} className="bg-[#00F5A0] text-[#0D1520] px-10 py-5 rounded-2xl font-bold text-lg">List Your Property</button>
        </div>
        <div className="bg-white/5 rounded-[50px] p-10 border border-white/10">
           <div className="space-y-8">
              <div className="flex justify-between items-center pb-8 border-b border-white/10">
                <span className="text-slate-400">Default Protection</span>
                <Check className="text-[#00F5A0]" />
              </div>
              <div className="flex justify-between items-center pb-8 border-b border-white/10">
                <span className="text-slate-400">Automated Remittance</span>
                <Check className="text-[#00F5A0]" />
              </div>
              <div className="flex justify-between items-center pb-8 border-b border-white/10">
                <span className="text-slate-400">Legal Recovery Shield</span>
                <Check className="text-[#00F5A0]" />
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Auth Components (Integrated) ---

const LoginPage = ({ setView, setDashboardRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    const { data: profile } = await supabase.from('profiles').select('role').eq('id', data.user.id).single();
    if (profile) setDashboardRole(profile.role);
    setLoading(false);
    setView('dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-12 rounded-[40px] shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-500">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#0D1520] mb-2 tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 font-medium">Log in to your AltRent portal</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          {error && <div className="p-4 bg-red-50 text-red-500 rounded-2xl text-sm font-bold border border-red-100">{error}</div>}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 ml-1">Email Address</label>
            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#00F5A0] focus:bg-white transition-all font-medium" />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 ml-1">Password</label>
            <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#00F5A0] focus:bg-white transition-all font-medium" />
          </div>
          <button disabled={loading} className="w-full bg-[#0D1520] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#1a2536] transition-all mt-4 flex items-center justify-center">
            {loading ? <Loader2 className="animate-spin" /> : "Sign In"}
          </button>
        </form>
        <p className="mt-10 text-center text-slate-500 font-medium">
          New here? <button onClick={() => setView('signup')} className="text-[#0D1520] font-bold hover:underline">Create Account</button>
        </p>
      </div>
    </div>
  );
};

const SignUpFlow = ({ setView, setDashboardRole }) => {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async () => {
    setLoading(true);
    const { data: auth, error: authErr } = await supabase.auth.signUp({ email: form.email, password: form.password });
    if (authErr) { setError(authErr.message); setLoading(false); return; }
    
    if (auth.user) {
      await supabase.from('profiles').insert([{ id: auth.user.id, full_name: form.name, role: selectedRole, email: form.email, phone: form.phone }]);
    }
    setLoading(false);
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-[#0D1520] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl relative">
        {step === 1 && (
          <div className="animate-in slide-in-from-bottom-10">
             <h1 className="text-5xl font-bold text-white text-center mb-16 tracking-tighter">I want to...</h1>
             <div className="grid md:grid-cols-2 gap-8">
                <div onClick={() => { setSelectedRole('tenant'); setStep(2); }} className="p-12 bg-white/5 border border-white/10 rounded-[40px] hover:bg-[#00F5A0] hover:text-[#0D1520] transition-all cursor-pointer group">
                  <Home className="mb-6 group-hover:scale-125 transition-transform" size={40} />
                  <h3 className="text-3xl font-bold">Rent a Home</h3>
                </div>
                <div onClick={() => { setSelectedRole('landlord'); setStep(2); }} className="p-12 bg-white/5 border border-white/10 rounded-[40px] hover:bg-[#3B82F6] hover:text-white transition-all cursor-pointer group">
                  <Building className="mb-6 group-hover:scale-125 transition-transform" size={40} />
                  <h3 className="text-3xl font-bold">List a Property</h3>
                </div>
             </div>
          </div>
        )}
        {step === 2 && (
          <div className="max-w-md mx-auto bg-white p-10 rounded-[40px] animate-in zoom-in-95">
            <h2 className="text-2xl font-bold mb-8">Secure Your Profile</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" onChange={(e)=>setForm({...form, name: e.target.value})} className="w-full p-4 bg-slate-50 border rounded-2xl" />
              <input type="email" placeholder="Email" onChange={(e)=>setForm({...form, email: e.target.value})} className="w-full p-4 bg-slate-50 border rounded-2xl" />
              <input type="password" placeholder="Password" onChange={(e)=>setForm({...form, password: e.target.value})} className="w-full p-4 bg-slate-50 border rounded-2xl" />
              <button onClick={handleSignup} disabled={loading} className="w-full bg-[#0D1520] text-white py-4 rounded-2xl font-bold">
                {loading ? <Loader2 className="animate-spin mx-auto" /> : "Create Account"}
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="text-center text-white animate-in zoom-in-90">
             <div className="w-24 h-24 bg-[#00F5A0] rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_#00F5A0]"><Check size={48} className="text-[#0D1520]" /></div>
             <h1 className="text-5xl font-bold mb-4">You're in.</h1>
             <p className="text-slate-400 mb-10">Welcome to the future of Nigerian housing.</p>
             <button onClick={() => { setDashboardRole(selectedRole); setView('dashboard'); }} className="bg-[#00F5A0] text-[#0D1520] px-12 py-5 rounded-2xl font-bold text-lg">Go to Dashboard</button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App Controller ---

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [dashboardRole, setDashboardRole] = useState('tenant');
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setSession(session));
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch(currentView) {
      case 'home': return <HomePage setView={setCurrentView} />;
      case 'renters': return <RentersPage setView={setCurrentView} />;
      case 'landlords': return <LandlordsPage setView={setCurrentView} />;
      case 'login': return <LoginPage setView={setCurrentView} setDashboardRole={setDashboardRole} />;
      case 'signup': return <SignUpFlow setView={setCurrentView} setDashboardRole={setDashboardRole} />;
      default: return <HomePage setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-jakarta selection:bg-[#00F5A0] selection:text-[#0D1520]">
      {currentView !== 'login' && currentView !== 'signup' && (
        <Navbar setView={setCurrentView} currentView={currentView} session={session} />
      )}
      
      <main>
        {renderView()}
      </main>

      {/* Footer */}
      {currentView !== 'login' && currentView !== 'signup' && (
        <footer className="bg-white border-t border-slate-100 py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#0D1520] rounded-lg" />
                <span className="font-bold text-xl">AltRent</span>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed">Built for the next generation of Nigerian city dwellers. Rent on your terms.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
               <div className="flex flex-col gap-4">
                 <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Platform</span>
                 <button onClick={() => setCurrentView('browse')} className="text-left font-bold text-slate-600 hover:text-[#0D1520]">Browse</button>
                 <button onClick={() => setCurrentView('landlords')} className="text-left font-bold text-slate-600 hover:text-[#0D1520]">List Property</button>
               </div>
               <div className="flex flex-col gap-4">
                 <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Legal</span>
                 <button className="text-left font-bold text-slate-600 hover:text-[#0D1520]">Privacy</button>
                 <button className="text-left font-bold text-slate-600 hover:text-[#0D1520]">Terms</button>
               </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-100 flex justify-between items-center text-slate-400 text-sm font-bold">
            <p>© 2026 AltRent Nigeria. All Rights Reserved.</p>
            <div className="flex gap-6"><Share2 size={18} /><Heart size={18} /></div>
          </div>
        </footer>
      )}
    </div>
  );
}