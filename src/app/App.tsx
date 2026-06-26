import { useState, useEffect } from "react";
import {
  Menu, X, Star, ArrowRight, Phone, MapPin, MessageCircle,
  Zap, Ruler, Truck, Factory, Headphones, Shield, Users,
  TrendingUp, Monitor, ChevronDown, Send, Heart, Package,
  CheckCircle, Wrench, LifeBuoy, Layers, Instagram,
  Facebook, Linkedin, ExternalLink, Clock,
} from "lucide-react";

const WA_LINK = "https://wa.me/8801630411689";
const WA_NUMBER = "+880 1630-411689";

/* ─── DATA ──────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Home", id: "hero" },
  { label: "Products", id: "products" },
  { label: "Custom Solutions", id: "process" },
  { label: "About", id: "about" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

const TRUST_STATS = [
  { number: "500+", label: "Custom Tables Built" },
  { number: "98%", label: "Customer Satisfaction" },
  { number: "5+", label: "Years Experience" },
  { number: "100%", label: "Custom Solutions" },
];

const WHY_CARDS = [
  { icon: Ruler, title: "Custom Design", desc: "Every desk is built to your exact dimensions, style, and workspace vision — zero off-the-shelf compromises." },
  { icon: Shield, title: "Premium Materials", desc: "We source only the finest hardwood, premium MDF, and powder-coated steel for lasting durability and elegance." },
  { icon: Heart, title: "Ergonomic Design", desc: "Scientifically engineered to reduce strain, support healthy posture, and keep you comfortable all day long." },
  { icon: Truck, title: "Fast Delivery", desc: "Efficient production pipelines and on-time delivery ensure your premium workspace is ready when you need it." },
  { icon: Factory, title: "Local Manufacturing", desc: "Proudly crafted in Gazipur, Bangladesh by skilled artisans under strict quality control standards." },
  { icon: Headphones, title: "After-Sales Support", desc: "Our team is available for assembly, maintenance, and any post-delivery concerns you might have." },
];

const PRODUCTS = [
  { title: "Standing Desk Pro", desc: "Electric height-adjustable with memory presets for seamless sit-stand transitions throughout the day.", price: "From ৳35,000", image: "https://images.unsplash.com/photo-1762983870490-63e5ba07105b?w=700&h=480&fit=crop&auto=format", badge: "Best Seller", badgeBg: "bg-[#2563EB]" },
  { title: "Executive Office Desk", desc: "Large-format executive desk with premium wood veneer finish and integrated cable management system.", price: "From ৳55,000", image: "https://images.unsplash.com/photo-1590212151175-e58edd96185b?w=700&h=480&fit=crop&auto=format", badge: "Premium", badgeBg: "bg-[#7C3AED]" },
  { title: "L-Shaped Adjustable Desk", desc: "Corner configuration with dual-motor height adjustment, perfect for dual-monitor power setups.", price: "From ৳65,000", image: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?w=700&h=480&fit=crop&auto=format", badge: "Popular", badgeBg: "bg-[#059669]" },
  { title: "Dual Workstation Desk", desc: "Collaborative desk built for two with independent height controls per workstation side.", price: "From ৳85,000", image: "https://images.unsplash.com/photo-1542315192-1f61a1792f33?w=700&h=480&fit=crop&auto=format", badge: "New", badgeBg: "bg-[#DC2626]" },
  { title: "Creator Desk", desc: "Built for content creators with integrated monitor arm mounts and accessory mounting rails.", price: "From ৳42,000", image: "https://images.unsplash.com/photo-1610366398516-46da9dec5931?w=700&h=480&fit=crop&auto=format", badge: "Creator Pick", badgeBg: "bg-[#D97706]" },
  { title: "Custom Office Setup", desc: "Fully bespoke multi-desk office configuration with matching storage and premium finishes throughout.", price: "Custom Quote", image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=700&h=480&fit=crop&auto=format", badge: "Enterprise", badgeBg: "bg-[#111827]" },
];

const BENEFITS = [
  { icon: Heart, title: "Reduce Back Pain", desc: "Alternating between sitting and standing reduces spinal compression and chronic back fatigue by up to 54%." },
  { icon: TrendingUp, title: "Increase Productivity", desc: "Height-adjustable desks improve worker focus and daily output by 46% compared to fixed-height alternatives." },
  { icon: Users, title: "Improve Posture", desc: "Ergonomic desk height keeps your spine neutral, shoulders relaxed, and reduces musculoskeletal tension." },
  { icon: Monitor, title: "Boost Focus", desc: "A well-designed workspace eliminates distraction cues and keeps you in deep, productive work states longer." },
  { icon: Zap, title: "Create Modern Workspaces", desc: "Impress clients, energize your team, and build an office that reflects your brand's quality and ambition." },
];

const STEPS = [
  { num: "01", icon: MessageCircle, title: "Consultation", desc: "We meet to understand your space, workflow, style preferences, and budget in detail." },
  { num: "02", icon: Layers, title: "Design", desc: "Our designers create detailed 3D renders and technical drawings for your review and approval." },
  { num: "03", icon: Wrench, title: "Manufacturing", desc: "Skilled craftsmen build your desk using premium materials in our controlled Gazipur facility." },
  { num: "04", icon: Package, title: "Installation", desc: "Our team delivers and installs your desk on-site with precision, testing every mechanism." },
  { num: "05", icon: LifeBuoy, title: "Support", desc: "We stay with you post-delivery for maintenance, adjustments, and any after-sales care." },
];

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1762983870490-63e5ba07105b?w=500&h=660&fit=crop&auto=format", alt: "Modern home office desk setup" },
  { src: "https://images.unsplash.com/photo-1760278041881-e64e501d009c?w=500&h=370&fit=crop&auto=format", alt: "Dual monitor gaming desk" },
  { src: "https://images.unsplash.com/photo-1651602856872-598a1db9c574?w=500&h=430&fit=crop&auto=format", alt: "Standing desk closeup" },
  { src: "https://images.unsplash.com/photo-1630283017751-76e1fbb14d91?w=500&h=620&fit=crop&auto=format", alt: "Executive wooden desk setup" },
  { src: "https://images.unsplash.com/photo-1760278042167-2e42c883e087?w=500&h=410&fit=crop&auto=format", alt: "Freelancer workstation" },
  { src: "https://images.unsplash.com/photo-1542315192-1f61a1792f33?w=500&h=500&fit=crop&auto=format", alt: "Team office setup" },
];

const TESTIMONIALS = [
  { name: "Rafiqul Islam", company: "TechNova BD", role: "Chief Executive Officer", quote: "The quality of the desks far exceeded our expectations. Our entire team is noticeably more productive and the office looks absolutely stunning. Adjustable Table Builder transformed our workspace completely.", rating: 5, initials: "RI", color: "bg-[#2563EB]" },
  { name: "Tasnim Hossain", company: "Pixel Creative Studio", role: "Design Director", quote: "I ordered a custom L-shaped desk for my home studio and it is absolutely perfect. The craftsmanship is world-class, delivery was ahead of schedule, and the team was professional from start to finish.", rating: 5, initials: "TH", color: "bg-[#7C3AED]" },
  { name: "Ariful Karim", company: "Startup Hub Dhaka", role: "Co-founder", quote: "We furnished our entire co-working space with their desks. Incredible build quality, premium finish, and outstanding post-sales support. The best furniture investment our company has ever made.", rating: 5, initials: "AK", color: "bg-[#059669]" },
];

const FAQS = [
  { q: "What is the delivery time for a custom desk?", a: "Standard orders are completed and delivered within 7–14 working days. Complex multi-desk or enterprise configurations may take 3–4 weeks. We confirm your exact timeline during the consultation call." },
  { q: "Can I order a desk with fully custom dimensions?", a: "Absolutely. Every desk we build is made to your exact specifications. You choose the width, depth, height adjustment range, tabletop material, edge profile, leg style, and finish color." },
  { q: "Do you deliver outside of Dhaka city?", a: "Yes, we deliver nationwide across Bangladesh including Chittagong, Sylhet, Rajshahi, Khulna, and all major cities. Delivery charges outside Dhaka vary by distance — contact us for a quote." },
  { q: "What materials do you use for the tabletops?", a: "We offer premium MDF with veneer, solid sheesham wood, bamboo composite, and engineered hardwood for tabletops, paired with powder-coated steel frames with anti-wobble feet." },
  { q: "Do you provide professional on-site installation?", a: "Yes. Our trained installation team delivers, assembles, and sets up your desk on-site, tests all height-adjustment mechanisms, and ensures everything is perfect before they leave." },
];

const CLIENTS = [
  { label: "TechNova BD", sub: "Technology" },
  { label: "Pixel Studio", sub: "Design Agency" },
  { label: "Startup Hub", sub: "Co-working" },
  { label: "Delta Corp", sub: "Corporate" },
  { label: "BuilderX", sub: "Software" },
  { label: "NexGen Office", sub: "Interior" },
  { label: "Remote Co.", sub: "Remote Work" },
  { label: "CreatorBase", sub: "Content" },
];

/* ─── HELPERS ───────────────────────────────────────────────────── */

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
      ))}
    </div>
  );
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/* ─── APP ───────────────────────────────────────────────────────── */

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const [popup, setPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setPopup(true), 7000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setSlide((s) => (s + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="antialiased overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ══ 1. ANNOUNCEMENT BAR ══════════════════════════════ */}
      <div className="bg-[#2563EB] text-white text-sm font-medium py-2.5 px-4 flex flex-wrap items-center justify-center gap-3 text-center">
        <span className="hidden sm:inline">✦</span>
        <span>Custom Adjustable Tables Built for Modern Workspaces</span>
        <span className="hidden sm:inline">✦</span>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-white text-[#2563EB] text-xs font-bold px-4 py-1.5 rounded-full hover:bg-blue-50 transition-colors whitespace-nowrap"
        >
          Get Free Consultation <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      {/* ══ 2. NAVIGATION ════════════════════════════════════ */}
      <nav className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? "bg-white/96 backdrop-blur-md shadow-sm" : "bg-white"} border-b border-gray-100`}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <button className="flex items-center gap-3" onClick={() => scrollTo("hero")}>
              <div className="w-9 h-9 bg-[#111827] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-black tracking-tight">ATB</span>
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-[#111827] font-extrabold text-[15px] leading-tight">Adjustable Table</div>
                <div className="text-[#64748B] text-[10px] font-semibold tracking-[0.15em] uppercase">Builder · Gazipur, BD</div>
              </div>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map(({ label, id }) => (
                <button key={id} onClick={() => scrollTo(id)} className="text-[#374151] hover:text-[#2563EB] text-sm font-medium transition-colors">
                  {label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href={`tel:${WA_NUMBER}`} className="flex items-center gap-2 text-[#374151] hover:text-[#2563EB] text-sm font-medium transition-colors">
                <Phone className="w-4 h-4" />
                {WA_NUMBER}
              </a>
              <button
                onClick={() => setPopup(true)}
                className="flex items-center gap-2 bg-[#111827] hover:bg-[#1F2937] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-300"
              >
                Get a Quote <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#374151] hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${mobileOpen ? "max-h-[26rem]" : "max-h-0"}`}>
          <div className="px-5 py-4 space-y-1">
            {NAV_LINKS.map(({ label, id }) => (
              <button key={id} onClick={() => { scrollTo(id); setMobileOpen(false); }} className="block w-full text-left px-4 py-2.5 text-[#374151] hover:text-[#2563EB] hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors">
                {label}
              </button>
            ))}
            <div className="pt-3 space-y-2">
              <button onClick={() => { setPopup(true); setMobileOpen(false); }} className="w-full bg-[#111827] text-white text-sm font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
                Get a Quote <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white text-sm font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ══ 3. HERO ══════════════════════════════════════════ */}
      <section id="hero" className="relative bg-[#0F172A] overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#2563EB]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/6 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28 xl:py-36">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 border border-[#2563EB]/40 bg-[#2563EB]/10 text-[#93C5FD] text-xs font-semibold px-4 py-2 rounded-full mb-7 backdrop-blur-sm">
                <Zap className="w-3 h-3" />
                Premium Custom Desks — Crafted in Bangladesh
              </div>

              <h1 className="text-[40px] sm:text-5xl lg:text-6xl xl:text-[68px] font-black text-white leading-[1.05] tracking-tight mb-6">
                Build Your
                <span className="block text-[#2563EB]">Perfect</span>
                Workspace.
              </h1>

              <p className="text-[#94A3B8] text-[18px] leading-relaxed mb-8 max-w-lg">
                Premium height-adjustable desks and custom workspace solutions designed for productivity, comfort, and modern office environments.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => setPopup(true)}
                  className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 text-sm"
                >
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo("products")}
                  className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-300 hover:bg-white/5 text-sm"
                >
                  View Products
                </button>
              </div>

              {/* Feature badges */}
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: Zap, label: "Electric Height Adjustment" },
                  { icon: Ruler, label: "Custom Sizes" },
                  { icon: Shield, label: "Premium Materials" },
                  { icon: CheckCircle, label: "Built in Bangladesh" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-white/7 backdrop-blur-sm border border-white/10 text-white/75 text-xs font-medium px-3.5 py-2 rounded-full">
                    <Icon className="w-3 h-3 text-[#60A5FA] flex-shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                <img
                  src="https://images.unsplash.com/photo-1762983870490-63e5ba07105b?w=900&h=700&fit=crop&auto=format"
                  alt="Premium adjustable standing desk home office setup"
                  className="w-full h-[400px] lg:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 to-transparent pointer-events-none" />
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
                <div className="text-[#111827] font-black text-3xl leading-none">500+</div>
                <div className="text-[#64748B] text-[11px] font-medium mt-1 max-w-[120px] leading-snug">Premium desks delivered across Bangladesh</div>
              </div>

              {/* Floating review */}
              <div className="absolute -top-5 -right-4 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 max-w-[200px]">
                <Stars n={5} />
                <div className="text-[#111827] text-xs font-semibold mt-2 leading-snug">"Transformed our entire office. Incredible quality."</div>
                <div className="text-[#64748B] text-[10px] mt-1.5">— CEO, TechNova BD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. TRUST STATS ═══════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {TRUST_STATS.map(({ number, label }) => (
              <div key={label} className="text-center group cursor-default">
                <div className="text-4xl lg:text-5xl font-black text-[#111827] mb-1.5 group-hover:text-[#2563EB] transition-colors duration-300">{number}</div>
                <div className="text-[#64748B] text-sm font-medium">{label}</div>
                <div className="mt-3 mx-auto h-0.5 w-8 bg-[#2563EB] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. WHY CHOOSE US ═════════════════════════════════ */}
      <section id="about" className="bg-[#F8FAFC] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] mb-4 leading-tight">
              Built Different.<br />
              <span className="text-[#2563EB]">Built for You.</span>
            </h2>
            <p className="text-[#64748B] text-lg max-w-xl mx-auto">
              We combine local craftsmanship with international design standards to deliver desks that last decades.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CARDS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#2563EB]/30 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 group cursor-default">
                <div className="w-12 h-12 bg-[#EFF6FF] group-hover:bg-[#2563EB] rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[#111827] font-bold text-lg mb-2">{title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. FEATURED PRODUCTS ═════════════════════════════ */}
      <section id="products" className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
                Our Products
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] leading-tight">
                Premium Desk<br />Collection
              </h2>
            </div>
            <p className="text-[#64748B] lg:max-w-sm text-base">
              Each piece is crafted with precision and built to elevate your work environment to an entirely new level.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map(({ title, desc, price, image, badge, badgeBg }) => (
              <div key={title} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden h-52 bg-gray-100">
                  <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-3 left-3 ${badgeBg} text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wide`}>
                    {badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#111827] text-lg mb-2">{title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#111827] font-black text-base">{price}</span>
                    <button onClick={() => setPopup(true)} className="flex items-center gap-1.5 text-[#2563EB] text-sm font-semibold hover:gap-3 transition-all duration-200">
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setPopup(true)}
              className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#1F2937] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-sm"
            >
              Request Custom Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ══ 7. BENEFITS ══════════════════════════════════════ */}
      <section className="bg-[#0F172A] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2563EB]/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#2563EB]/40 bg-[#2563EB]/10 text-[#93C5FD] text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-wide uppercase">
                Health & Performance
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
                Work Better.<br />
                <span className="text-[#2563EB]">Feel Better.</span>
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
                A premium adjustable desk is not just furniture — it is a daily investment in your health, energy, and career performance.
              </p>
              <button
                onClick={() => setPopup(true)}
                className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 text-sm"
              >
                Start Building Yours <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {BENEFITS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-[#2563EB]/30 rounded-2xl transition-all duration-300 group cursor-default">
                  <div className="flex-shrink-0 w-11 h-11 bg-[#2563EB]/20 group-hover:bg-[#2563EB] rounded-xl flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#60A5FA] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 8. BUILD PROCESS ═════════════════════════════════ */}
      <section id="process" className="bg-[#F8FAFC] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] mb-4 leading-tight">
              Your Desk in<br />
              <span className="text-[#2563EB]">5 Simple Steps</span>
            </h2>
            <p className="text-[#64748B] text-lg max-w-lg mx-auto">
              From first conversation to final installation — our process is seamless and completely transparent.
            </p>
          </div>

          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden lg:block absolute top-9 left-[calc(10%+40px)] right-[calc(10%+40px)] h-px bg-gradient-to-r from-gray-200 via-[#2563EB]/30 to-gray-200" />

            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
              {STEPS.map(({ num, icon: Icon, title, desc }) => (
                <div key={num} className="flex flex-col items-center text-center group">
                  <div className="relative w-[72px] h-[72px] bg-white border-2 border-gray-100 group-hover:border-[#2563EB] rounded-full flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:shadow-blue-100 transition-all duration-300 z-10 mb-5">
                    <Icon className="w-6 h-6 text-[#64748B] group-hover:text-[#2563EB] transition-colors duration-300" />
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-[#2563EB] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-sm">
                      {num.slice(1)}
                    </span>
                  </div>
                  <h4 className="text-[#111827] font-bold text-base mb-2">{title}</h4>
                  <p className="text-[#64748B] text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 9. GALLERY ═══════════════════════════════════════ */}
      <section id="gallery" className="bg-[#111827] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
              Project Gallery
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">
              Spaces We Have<br />
              <span className="text-[#2563EB]">Transformed</span>
            </h2>
            <p className="text-[#94A3B8] text-base max-w-md mx-auto">Every project is a collaboration — your vision, our craftsmanship.</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {GALLERY.map(({ src, alt }) => (
              <div key={alt} className="break-inside-avoid mb-4 rounded-2xl overflow-hidden group relative cursor-pointer bg-gray-800">
                <img src={src} alt={alt} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white text-sm font-medium">{alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 10. TESTIMONIALS ════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
              Client Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] mb-3 leading-tight">
              Trusted by Hundreds<br />
              <span className="text-[#2563EB]">Across Bangladesh</span>
            </h2>
          </div>

          {/* Active slide */}
          <div className="max-w-2xl mx-auto mb-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`transition-all duration-500 ${i === slide ? "block" : "hidden"}`}>
                <div className="bg-[#F8FAFC] border border-gray-100 rounded-3xl p-8 lg:p-10 text-center">
                  <div className="text-[#2563EB] text-7xl font-black leading-none mb-2 select-none">&ldquo;</div>
                  <p className="text-[#111827] text-lg lg:text-xl font-medium leading-relaxed mb-6">{t.quote}</p>
                  <Stars n={t.rating} />
                  <div className="flex items-center justify-center gap-4 mt-5">
                    <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-sm">{t.initials}</span>
                    </div>
                    <div className="text-left">
                      <div className="text-[#111827] font-bold">{t.name}</div>
                      <div className="text-[#64748B] text-sm">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-5">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${i === slide ? "w-8 h-2.5 bg-[#2563EB]" : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"}`} />
              ))}
            </div>
          </div>

          {/* Three mini cards */}
          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} onClick={() => setSlide(i)}
                className={`rounded-2xl p-5 border cursor-pointer transition-all duration-300 ${i === slide ? "border-[#2563EB]/30 bg-[#EFF6FF] shadow-sm" : "border-gray-100 bg-[#F8FAFC] hover:border-gray-200"}`}>
                <Stars n={t.rating} />
                <p className="text-[#374151] text-sm leading-relaxed mt-3 mb-4 line-clamp-2">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${t.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-xs">{t.initials}</span>
                  </div>
                  <div>
                    <div className="text-[#111827] font-semibold text-sm">{t.name}</div>
                    <div className="text-[#64748B] text-xs">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 11. CORPORATE CLIENTS ════════════════════════════ */}
      <section className="bg-[#F8FAFC] py-14 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-center text-[#94A3B8] text-xs font-bold tracking-[0.2em] uppercase mb-8">
            Trusted by Leading Companies Across Bangladesh
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {CLIENTS.map(({ label, sub }) => (
              <div key={label} className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl px-3 py-4 hover:border-[#2563EB]/30 hover:shadow-sm transition-all duration-300 group cursor-default">
                <div className="text-[#111827] font-bold text-sm text-center group-hover:text-[#2563EB] transition-colors leading-tight">{label}</div>
                <div className="text-[#94A3B8] text-[10px] font-medium mt-1">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 12. FAQ ══════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] leading-tight">
              Got Questions?<br />
              <span className="text-[#2563EB]">We Have Answers.</span>
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? "border-[#2563EB]/30 shadow-sm bg-[#F8FAFC]" : "border-gray-100 bg-white"}`}>
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[#111827] font-semibold text-[15px]">{q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#2563EB] transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-48" : "max-h-0"}`}>
                  <p className="px-6 pb-6 text-[#64748B] text-sm leading-relaxed">{a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#64748B] text-sm mb-4">Still have questions? We are happy to help.</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ══ 13. FINAL CTA ════════════════════════════════════ */}
      <section className="relative bg-[#0F172A] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#1E3A5F] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2563EB]/12 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-[#2563EB]/40 bg-[#2563EB]/10 text-[#93C5FD] text-xs font-bold px-4 py-2 rounded-full mb-7 tracking-wide uppercase">
            Start Today
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Ready to Build Your<br />
            <span className="text-[#2563EB]">Dream Workspace?</span>
          </h2>
          <p className="text-[#94A3B8] text-lg mb-3 max-w-xl mx-auto">
            Contact us today for a free consultation and receive a custom quote within 24 hours.
          </p>
          <a href={`tel:${WA_NUMBER}`} className="block text-white/50 hover:text-white text-lg font-medium transition-colors mb-10">
            {WA_NUMBER}
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25 hover:-translate-y-0.5 text-sm">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
            <button onClick={() => setPopup(true)}
              className="flex items-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-0.5 text-sm">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </button>
            <a href={`tel:${WA_NUMBER}`}
              className="flex items-center gap-2.5 border border-white/20 hover:border-white/50 text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 hover:bg-white/5 text-sm">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ══ 14. CONTACT ══════════════════════════════════════ */}
      <section id="contact" className="bg-[#F8FAFC] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Form */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-wide uppercase">
                Get In Touch
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#111827] mb-3 leading-tight">
                Let&apos;s Build Something<br />
                <span className="text-[#2563EB]">Great Together</span>
              </h2>
              <p className="text-[#64748B] text-base mb-8">
                Fill out the form and our team will reach out within 24 hours to discuss your workspace needs.
              </p>

              {submitted ? (
                <div className="bg-white border border-[#10B981]/30 rounded-2xl p-10 text-center shadow-sm">
                  <CheckCircle className="w-14 h-14 text-[#10B981] mx-auto mb-4" />
                  <h3 className="text-[#111827] font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-[#64748B] text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#374151] text-sm font-semibold mb-2">Full Name</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                        placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-[#374151] text-sm font-semibold mb-2">Phone Number</label>
                      <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                        placeholder="+880 ..." />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#374151] text-sm font-semibold mb-2">Email Address</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                      placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-[#374151] text-sm font-semibold mb-2">Your Message</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all resize-none"
                      placeholder="Tell us about your workspace needs, dimensions, or any questions..." />
                  </div>
                  <button type="submit"
                    className="w-full bg-[#111827] hover:bg-[#1F2937] text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 text-sm">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 text-sm">
                    <MessageCircle className="w-4 h-4" /> Or WhatsApp Us Directly
                  </a>
                </form>
              )}
            </div>

            {/* Info panel */}
            <div className="space-y-5">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-5">
                <h3 className="text-[#111827] font-bold text-lg">Contact Information</h3>
                {[
                  { icon: Phone, label: "Phone / WhatsApp", value: WA_NUMBER, href: `tel:${WA_NUMBER}` },
                  { icon: MessageCircle, label: "WhatsApp Chat", value: "Chat with us now →", href: WA_LINK },
                  { icon: MapPin, label: "Location", value: "Gazipur, Dhaka, Bangladesh", href: "#" },
                  { icon: Clock, label: "Business Hours", value: "Sat–Thu, 9:00 AM – 8:00 PM", href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-[#EFF6FF] group-hover:bg-[#2563EB] rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Icon className="w-4 h-4 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-[#94A3B8] text-xs font-medium">{label}</div>
                      <div className="text-[#111827] font-semibold text-sm mt-0.5 group-hover:text-[#2563EB] transition-colors">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] border border-blue-100 rounded-2xl overflow-hidden h-60 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center shadow-xl shadow-blue-200">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-[#111827] font-bold text-base">Gazipur, Bangladesh</p>
                  <p className="text-[#64748B] text-sm mt-0.5">Our manufacturing facility</p>
                </div>
                <a href="https://maps.google.com/?q=Gazipur,Bangladesh" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#111827] text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-[#1F2937] transition-colors">
                  <ExternalLink className="w-3 h-3" /> Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 15. FOOTER ════════════════════════════════════════ */}
      <footer className="bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-black">ATB</span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-tight">Adjustable Table Builder</div>
                  <div className="text-[#94A3B8] text-[10px]">Gazipur, Bangladesh</div>
                </div>
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                Premium custom adjustable desks and workspace solutions. Crafted with precision. Delivered with care.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map(({ icon: Icon, href }, i) => (
                  <a key={i} href={href}
                    className="w-9 h-9 bg-white/10 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors duration-300" aria-label="Social link">
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-xs mb-5 tracking-[0.15em] uppercase">Quick Links</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map(({ label, id }) => (
                  <li key={id}>
                    <button onClick={() => scrollTo(id)}
                      className="text-[#94A3B8] hover:text-white text-sm transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-xs mb-5 tracking-[0.15em] uppercase">Our Services</h4>
              <ul className="space-y-3">
                {["Standing Desks", "Executive Desks", "L-Shaped Desks", "Dual Workstations", "Creator Setups", "Corporate Orders", "Custom Furniture"].map((s) => (
                  <li key={s}>
                    <span className="text-[#94A3B8] hover:text-white text-sm cursor-default transition-colors">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-xs mb-5 tracking-[0.15em] uppercase">Contact</h4>
              <div className="space-y-4">
                <a href={`tel:${WA_NUMBER}`} className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                  <span className="text-[#94A3B8] group-hover:text-white text-sm transition-colors">{WA_NUMBER}</span>
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  <span className="text-[#94A3B8] group-hover:text-white text-sm transition-colors">WhatsApp Chat</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span className="text-[#94A3B8] text-sm">Gazipur, Dhaka, Bangladesh</span>
                </div>
                <div className="pt-1">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                    <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#64748B] text-sm text-center sm:text-left">
              © 2024 Adjustable Table Builder. All rights reserved. Made with ❤️ in Bangladesh.
            </p>
            <div className="flex gap-5">
              {["Privacy Policy", "Terms of Service"].map((l) => (
                <a key={l} href="#" className="text-[#64748B] hover:text-[#94A3B8] text-xs transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ══ FLOATING WHATSAPP ════════════════════════════════ */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group" aria-label="Chat on WhatsApp">
        <span className="hidden group-hover:flex items-center bg-[#111827] text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl whitespace-nowrap gap-1.5">
          <MessageCircle className="w-3 h-3" /> Chat with us
        </span>
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
          <MessageCircle className="w-7 h-7 text-white fill-white relative z-10" />
        </div>
      </a>

      {/* ══ INQUIRY POPUP ════════════════════════════════════ */}
      {popup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setPopup(false)} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 z-10">
            <button onClick={() => setPopup(false)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <X className="w-4 h-4 text-gray-500" />
            </button>
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-bold px-3 py-1.5 rounded-full mb-5">
              <Zap className="w-3 h-3" /> Free Consultation — No Obligation
            </div>
            <h3 className="text-2xl font-black text-[#111827] mb-2">Get Your Free Workspace Quote</h3>
            <p className="text-[#64748B] text-sm mb-6">Tell us about your dream workspace and we will send you a detailed quote within 24 hours.</p>
            <div className="space-y-3">
              <input className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all" placeholder="Your full name" />
              <input className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all" placeholder="Phone number" />
              <textarea className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all resize-none h-[80px]" placeholder="Describe your workspace needs..." />
              <button
                onClick={() => setPopup(false)}
                className="w-full bg-[#111827] hover:bg-[#1F2937] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                <Send className="w-4 h-4" /> Send My Request
              </button>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us Instead
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
