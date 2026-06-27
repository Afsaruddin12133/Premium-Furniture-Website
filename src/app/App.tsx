import { useState, useEffect, useRef } from "react";
import {
  Menu, X, Star, ArrowRight, Phone, MapPin, MessageCircle,
  Zap, Ruler, Truck, Factory, Headphones, Shield, Users,
  TrendingUp, Monitor, ChevronDown, Send, Heart, Package,
  CheckCircle, Wrench, LifeBuoy, Layers, Instagram,
  Facebook, Linkedin, ExternalLink, Clock, Play,
} from "lucide-react";

import logoImg from "../assets/logo.jpg";
import m1Product from "../assets/m1product.png";
import m1White from "../assets/m1white.png";
import m1Black from "../assets/m1black.png";
import m1ProProduct from "../assets/m1pro product.png";
import m1ProWhite from "../assets/m1prowhite.png";
import m1Premium from "../assets/m1premeum.png";
import m1PremiumWhite from "../assets/m1primiumWhite.png";
import m1PremiumBlack from "../assets/m1primiumblack.png";

const WA_LINK = "https://wa.me/8801630411689";
const WA_NUMBER = "+880 1630-411689";

/* ─── DATA ─────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Home", id: "hero" },
  { label: "Products", id: "products" },
  { label: "Why Us", id: "about" },
  { label: "Process", id: "process" },
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
  { icon: Shield, title: "Premium Materials", desc: "We source only the finest materials, powder-coated steel frames, and premium tops for lasting durability." },
  { icon: Heart, title: "Ergonomic Design", desc: "Scientifically engineered to reduce strain, support healthy posture, and keep you comfortable all day long." },
  { icon: Truck, title: "Fast Delivery", desc: "Efficient production pipelines and on-time delivery ensure your premium workspace is ready when you need it." },
  { icon: Factory, title: "Local Manufacturing", desc: "Proudly crafted in Bangladesh by skilled artisans under strict quality control standards." },
  { icon: Headphones, title: "After-Sales Support", desc: "Our team is available for assembly, maintenance, and any post-delivery concerns you might have." },
];

const PRODUCTS = [
  {
    id: "m1",
    title: "Model M1",
    badge: "Standard",
    badgeColor: "#7C3AED",
    desc: "The perfect entry-level height-adjustable desk. Clean minimalist design with a sturdy single-motor frame, available in black or white frame with matching desktop.",
    specs: ["4 \u00d7 2 feet tabletop", "Single-motor lift", "Frame: Black / White", "Desktop: Black / White", "Height adjustable"],
    prices: [{ label: "4 \u00d7 2 feet", price: "\u09f310,500" }],
    image: m1Product,
    altImages: [m1White, m1Black],
    videoId: "AYodck3HjCI",
    videoLink: "https://www.youtube.com/watch?v=AYodck3HjCI&t=8s",
  },
  {
    id: "m1pro",
    title: "Model M1 Pro",
    badge: "Pro",
    badgeColor: "#059669",
    desc: "An upgraded version with a cable management hole in the desktop and enhanced frame rigidity. Ideal for professionals who demand more from their workspace.",
    specs: ["2 \u00d7 4 feet tabletop", "Single-motor lift", "Frame: Black / White", "Desktop: Black / White", "Built-in cable hole"],
    prices: [{ label: "2 \u00d7 4 feet", price: "\u09f311,700" }],
    image: m1ProProduct,
    altImages: [m1ProWhite],
    videoId: "9GhyZT_RfHs",
    videoLink: "https://www.youtube.com/watch?v=9GhyZT_RfHs",
  },
  {
    id: "m1premium",
    title: "Model M1 Premium",
    badge: "Best Seller",
    badgeColor: "#DC2626",
    desc: "Our flagship model — the best-selling premium height-adjustable desk. Available in stunning Albino and Havna wood finishes plus classic Black & White. Multiple size options.",
    specs: ["Multiple size options", "Premium frame", "Frame: Black / White", "Desktop: Albino / Havna / Black / White", "Built-in cable hole", "Best-in-class stability"],
    prices: [
      { label: "4 \u00d7 2 feet", price: "\u09f315,400" },
      { label: "5 \u00d7 2 feet", price: "\u09f317,700" },
    ],
    image: m1Premium,
    altImages: [m1PremiumWhite, m1PremiumBlack],
    videoId: "uVdztHWivVk",
    videoLink: "https://www.youtube.com/watch?v=uVdztHWivVk",
  },
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
  { num: "02", icon: Layers, title: "Design", desc: "Our designers create detailed renders and drawings for your review and approval." },
  { num: "03", icon: Wrench, title: "Manufacturing", desc: "Skilled craftsmen build your desk using premium materials in our controlled facility." },
  { num: "04", icon: Package, title: "Installation", desc: "Our team delivers and installs your desk on-site with precision, testing every mechanism." },
  { num: "05", icon: LifeBuoy, title: "Support", desc: "We stay with you post-delivery for maintenance, adjustments, and any after-sales care." },
];

const GALLERY = [
  { src: m1Product, alt: "Model M1 \u2014 Height Adjustable Desk" },
  { src: m1White, alt: "Model M1 \u2014 White Frame & White Desktop" },
  { src: m1Black, alt: "Model M1 \u2014 Black Frame & Black Desktop" },
  { src: m1ProProduct, alt: "Model M1 Pro \u2014 Professional Desk" },
  { src: m1Premium, alt: "Model M1 Premium \u2014 Flagship Desk" },
  { src: m1PremiumWhite, alt: "Model M1 Premium \u2014 Albino Finish" },
];

const TESTIMONIALS = [
  { name: "Rafiqul Islam", company: "TechNova BD", role: "Chief Executive Officer", quote: "The quality of the desks far exceeded our expectations. Our entire team is noticeably more productive and the office looks absolutely stunning.", rating: 5, initials: "RI", color: "#7C3AED" },
  { name: "Tasnim Hossain", company: "Pixel Creative Studio", role: "Design Director", quote: "I ordered a custom M1 Premium desk for my home studio and it is absolutely perfect. The craftsmanship is world-class, delivery was ahead of schedule.", rating: 5, initials: "TH", color: "#A855F7" },
  { name: "Ariful Karim", company: "Startup Hub Dhaka", role: "Co-founder", quote: "We furnished our entire co-working space with their desks. Incredible build quality, premium finish, and outstanding post-sales support.", rating: 5, initials: "AK", color: "#6D28D9" },
];

const FAQS = [
  { q: "What is the delivery time for a custom desk?", a: "Standard orders are completed and delivered within 7\u201314 working days. Complex multi-desk or enterprise configurations may take 3\u20134 weeks. We confirm your exact timeline during the consultation call." },
  { q: "What sizes are available for the M1 Premium?", a: "The M1 Premium is available in 4\u00d72 feet (\u09f315,400) and 5\u00d72 feet (\u09f317,700). Custom sizes are also available on request \u2014 contact us for a personalized quote." },
  { q: "What are the frame and desktop color options?", a: "All models come with Black or White frame options. The M1 Premium additionally offers Albino and Havna premium wood-effect desktop finishes for a more luxurious look." },
  { q: "Do you deliver outside of Dhaka city?", a: "Yes, we deliver nationwide across Bangladesh including Chittagong, Sylhet, Rajshahi, Khulna, and all major cities. Delivery charges outside Dhaka vary by distance \u2014 contact us for a quote." },
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

/* ─── HELPERS ───────────────────────────────────────────────── */

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

/* ─── VIDEO MODAL ───────────────────────────────────────────── */
function VideoModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  const _ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" ref={_ref}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-4xl z-10">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Product Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── PRODUCT CARD ──────────────────────────────────────────── */
function ProductCard({ product, onVideoClick, onQuoteClick }: {
  product: typeof PRODUCTS[0];
  onVideoClick: (id: string) => void;
  onQuoteClick: () => void;
}) {
  const [imgIdx, setImgIdx] = useState(0);
  const allImages = [product.image, ...product.altImages];

  return (
    <div className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-2 transition-all duration-300 flex flex-col">
      {/* Image area */}
      <div className="relative overflow-hidden bg-gray-50 h-64">
        <img
          src={allImages[imgIdx]}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge */}
        <span
          className="absolute top-4 left-4 text-white text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wide shadow-lg"
          style={{ background: product.badgeColor }}
        >
          {product.badge}
        </span>
        {/* Play button */}
        <button
          onClick={() => onVideoClick(product.videoId)}
          className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/95 hover:bg-white text-[#7C3AED] font-bold text-xs px-3.5 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-200"
        >
          <Play className="w-3.5 h-3.5 fill-[#7C3AED]" /> Watch Video
        </button>
        {/* Image dots */}
        {allImages.length > 1 && (
          <div className="absolute bottom-4 left-4 flex gap-1.5">
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIdx(i)}
                className={`rounded-full transition-all duration-200 ${i === imgIdx ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/50 hover:bg-white/80"}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-black text-[#1A0A2E] text-xl mb-2">{product.title}</h3>
        <p className="text-[#64748B] text-sm leading-relaxed mb-4">{product.desc}</p>

        {/* Specs */}
        <ul className="space-y-1.5 mb-5">
          {product.specs.map((s) => (
            <li key={s} className="flex items-center gap-2 text-xs text-[#374151]">
              <CheckCircle className="w-3.5 h-3.5 text-[#7C3AED] flex-shrink-0" />
              {s}
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="mt-auto space-y-2 mb-5">
          {product.prices.map(({ label, price }) => (
            <div key={label} className="flex items-center justify-between bg-[#F5F3FF] rounded-xl px-4 py-2.5">
              <span className="text-[#6D28D9] text-xs font-semibold">{label}</span>
              <span className="text-[#1A0A2E] font-black text-lg">{price}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={onQuoteClick}
            className="flex-1 flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-3 rounded-xl text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5"
          >
            Order Now <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <a
            href={product.videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 border-2 border-[#7C3AED]/30 hover:border-[#7C3AED] rounded-xl text-[#7C3AED] transition-all duration-200 hover:bg-[#F5F3FF]"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── APP ───────────────────────────────────────────────────── */

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const [popup, setPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setPopup(true), 9000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setSlide((s) => (s + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="antialiased overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ══ 1. ANNOUNCEMENT BAR ══════════════════════════════ */}
      <div className="bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#A855F7] text-white text-sm font-medium py-2.5 px-4 flex flex-wrap items-center justify-center gap-3 text-center">
        <span className="hidden sm:inline">&#10022;</span>
        <span>Premium Height-Adjustable Desks &#8212; Made in Bangladesh &#127475;&#127465;</span>
        <span className="hidden sm:inline">&#10022;</span>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-white text-[#7C3AED] text-xs font-bold px-4 py-1.5 rounded-full hover:bg-purple-50 transition-colors whitespace-nowrap"
        >
          Get Free Quote <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      {/* ══ 2. NAVIGATION ════════════════════════════════════ */}
      <nav className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? "bg-white/96 backdrop-blur-md shadow-md shadow-purple-50" : "bg-white"} border-b border-purple-50`}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <button className="flex items-center gap-3" onClick={() => scrollTo("hero")}>
              <img
                src={logoImg}
                alt="Brand Logo"
                className="w-10 h-10 rounded-xl object-cover shadow-sm border border-purple-100"
              />
              <div className="hidden sm:block text-left">
                <div className="text-[#1A0A2E] font-extrabold text-[15px] leading-tight">Adjustable Table</div>
                <div className="text-[#7C3AED] text-[10px] font-bold tracking-[0.15em] uppercase">Builder &#183; Bangladesh</div>
              </div>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map(({ label, id }) => (
                <button key={id} onClick={() => scrollTo(id)} className="text-[#374151] hover:text-[#7C3AED] text-sm font-medium transition-colors">
                  {label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href={`tel:${WA_NUMBER}`} className="flex items-center gap-2 text-[#374151] hover:text-[#7C3AED] text-sm font-medium transition-colors">
                <Phone className="w-4 h-4" />
                {WA_NUMBER}
              </a>
              <button
                onClick={() => setPopup(true)}
                className="flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-200"
              >
                Get a Quote <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#374151] hover:bg-purple-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-purple-50 ${mobileOpen ? "max-h-[26rem]" : "max-h-0"}`}>
          <div className="px-5 py-4 space-y-1">
            {NAV_LINKS.map(({ label, id }) => (
              <button key={id} onClick={() => { scrollTo(id); setMobileOpen(false); }} className="block w-full text-left px-4 py-2.5 text-[#374151] hover:text-[#7C3AED] hover:bg-purple-50 rounded-xl text-sm font-medium transition-colors">
                {label}
              </button>
            ))}
            <div className="pt-3 space-y-2">
              <button onClick={() => { setPopup(true); setMobileOpen(false); }} className="w-full bg-[#7C3AED] text-white text-sm font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
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
      <section id="hero" className="relative bg-[#0D0A1A] overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#7C3AED]/15 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#A855F7]/8 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28 xl:py-36">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 border border-[#7C3AED]/40 bg-[#7C3AED]/10 text-[#C4B5FD] text-xs font-semibold px-4 py-2 rounded-full mb-7 backdrop-blur-sm">
                <Zap className="w-3 h-3" />
                Premium Height-Adjustable Desks &#8212; Crafted in Bangladesh
              </div>

              <h1 className="text-[40px] sm:text-5xl lg:text-6xl xl:text-[68px] font-black text-white leading-[1.05] tracking-tight mb-6">
                Elevate Your
                <span className="block bg-gradient-to-r from-[#A855F7] to-[#7C3AED] bg-clip-text text-transparent">
                  Workspace.
                </span>
                Elevate Your Life.
              </h1>

              <p className="text-[#A78BFA] text-[18px] leading-relaxed mb-8 max-w-lg">
                Precision-built height-adjustable desks with premium finishes. Three models &#8212; M1, M1 Pro &amp; M1 Premium &#8212; designed for every workspace need.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => setPopup(true)}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-0.5 text-sm"
                >
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo("products")}
                  className="flex items-center gap-2 border border-[#7C3AED]/40 hover:border-[#A855F7] text-white font-semibold px-7 py-4 rounded-xl transition-all duration-300 hover:bg-[#7C3AED]/10 text-sm"
                >
                  View Products
                </button>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: Zap, label: "Height Adjustable" },
                  { icon: Ruler, label: "Custom Sizes" },
                  { icon: Shield, label: "Premium Materials" },
                  { icon: CheckCircle, label: "Made in Bangladesh" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white/75 text-xs font-medium px-3.5 py-2 rounded-full">
                    <Icon className="w-3 h-3 text-[#A855F7] flex-shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/40">
                <img
                  src={m1Premium}
                  alt="Model M1 Premium Height Adjustable Desk"
                  className="w-full h-[400px] lg:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A1A]/50 to-transparent pointer-events-none" />
              </div>

              {/* Play overlay */}
              <button
                onClick={() => setVideoId("uVdztHWivVk")}
                className="absolute inset-0 flex items-center justify-center group/play"
                aria-label="Play product video"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover/play:scale-110 transition-transform duration-300 shadow-2xl">
                  <Play className="w-7 h-7 text-white fill-white ml-1" />
                </div>
              </button>

              {/* Floating stat */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-2xl p-4 border border-purple-100">
                <div className="text-[#1A0A2E] font-black text-3xl leading-none">500+</div>
                <div className="text-[#64748B] text-[11px] font-medium mt-1 max-w-[120px] leading-snug">Premium desks delivered across Bangladesh</div>
              </div>

              {/* Floating review */}
              <div className="absolute -top-5 -right-4 bg-white rounded-2xl shadow-2xl p-4 border border-purple-100 max-w-[200px]">
                <Stars n={5} />
                <div className="text-[#1A0A2E] text-xs font-semibold mt-2 leading-snug">&ldquo;Transformed our entire office. Incredible quality.&rdquo;</div>
                <div className="text-[#64748B] text-[10px] mt-1.5">&#8212; CEO, TechNova BD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. TRUST STATS ═══════════════════════════════════ */}
      <section className="bg-white border-b border-purple-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {TRUST_STATS.map(({ number, label }) => (
              <div key={label} className="text-center group cursor-default">
                <div className="text-4xl lg:text-5xl font-black text-[#1A0A2E] mb-1.5 group-hover:text-[#7C3AED] transition-colors duration-300">{number}</div>
                <div className="text-[#64748B] text-sm font-medium">{label}</div>
                <div className="mt-3 mx-auto h-0.5 w-8 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. WHY CHOOSE US ═════════════════════════════════ */}
      <section id="about" className="bg-[#FAFAFF] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#F5F3FF] text-[#7C3AED] text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A0A2E] mb-4 leading-tight">
              Built Different.<br />
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">Built for You.</span>
            </h2>
            <p className="text-[#64748B] text-lg max-w-xl mx-auto">
              We combine local craftsmanship with international design standards to deliver desks that last decades.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CARDS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-purple-50 hover:border-[#7C3AED]/30 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-50 transition-all duration-300 group cursor-default">
                <div className="w-12 h-12 bg-[#F5F3FF] group-hover:bg-gradient-to-br group-hover:from-[#7C3AED] group-hover:to-[#A855F7] rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#7C3AED] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[#1A0A2E] font-bold text-lg mb-2">{title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. PRODUCTS ══════════════════════════════════════ */}
      <section id="products" className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F5F3FF] text-[#7C3AED] text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
                Our Products
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A0A2E] leading-tight">
                3 Models.<br />
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
                  Endless Possibilities.
                </span>
              </h2>
            </div>
            <p className="text-[#64748B] lg:max-w-sm text-base">
              From entry-level to premium &#8212; each model is precision-engineered for height adjustment, stability, and style.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onVideoClick={(id) => setVideoId(id)}
                onQuoteClick={() => setPopup(true)}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setPopup(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-200 text-sm"
            >
              Request Custom Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ══ 7. BENEFITS ══════════════════════════════════════ */}
      <section className="bg-[#0D0A1A] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#A855F7]/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#7C3AED]/40 bg-[#7C3AED]/10 text-[#C4B5FD] text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-wide uppercase">
                Health &amp; Performance
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
                Work Better.<br />
                <span className="bg-gradient-to-r from-[#A855F7] to-[#7C3AED] bg-clip-text text-transparent">Feel Better.</span>
              </h2>
              <p className="text-[#A78BFA] text-lg leading-relaxed mb-8">
                A premium adjustable desk is not just furniture &#8212; it is a daily investment in your health, energy, and career performance.
              </p>
              <button
                onClick={() => setPopup(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:from-[#6D28D9] hover:to-[#7C3AED] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 text-sm"
              >
                Start Building Yours <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {BENEFITS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-[#7C3AED]/40 rounded-2xl transition-all duration-300 group cursor-default">
                  <div className="flex-shrink-0 w-11 h-11 bg-[#7C3AED]/20 group-hover:bg-gradient-to-br group-hover:from-[#7C3AED] group-hover:to-[#A855F7] rounded-xl flex items-center justify-center transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#A855F7] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
                    <p className="text-[#A78BFA] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 8. BUILD PROCESS ═════════════════════════════════ */}
      <section id="process" className="bg-[#FAFAFF] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#F5F3FF] text-[#7C3AED] text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A0A2E] mb-4 leading-tight">
              Your Desk in<br />
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">5 Simple Steps</span>
            </h2>
            <p className="text-[#64748B] text-lg max-w-lg mx-auto">
              From first conversation to final installation &#8212; our process is seamless and completely transparent.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-9 left-[calc(10%+40px)] right-[calc(10%+40px)] h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />

            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
              {STEPS.map(({ num, icon: Icon, title, desc }) => (
                <div key={num} className="flex flex-col items-center text-center group">
                  <div className="relative w-[72px] h-[72px] bg-white border-2 border-purple-100 group-hover:border-[#7C3AED] rounded-full flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:shadow-purple-100 transition-all duration-300 z-10 mb-5">
                    <Icon className="w-6 h-6 text-[#64748B] group-hover:text-[#7C3AED] transition-colors duration-300" />
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-gradient-to-br from-[#7C3AED] to-[#A855F7] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-sm">
                      {num.slice(1)}
                    </span>
                  </div>
                  <h4 className="text-[#1A0A2E] font-bold text-base mb-2">{title}</h4>
                  <p className="text-[#64748B] text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 9. GALLERY ═══════════════════════════════════════ */}
      <section id="gallery" className="bg-[#1A1033] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
              Product Gallery
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">
              See Our Desks<br />
              <span className="bg-gradient-to-r from-[#A855F7] to-[#7C3AED] bg-clip-text text-transparent">In Action</span>
            </h2>
            <p className="text-[#A78BFA] text-base max-w-md mx-auto">Every finish, every frame option &#8212; crafted with precision and passion.</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {GALLERY.map(({ src, alt }) => (
              <div key={alt} className="break-inside-avoid mb-4 rounded-2xl overflow-hidden group relative cursor-pointer bg-[#2D1B6B]">
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
            <div className="inline-flex items-center gap-2 bg-[#F5F3FF] text-[#7C3AED] text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
              Client Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A0A2E] mb-3 leading-tight">
              Trusted by Hundreds<br />
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">Across Bangladesh</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`transition-all duration-500 ${i === slide ? "block" : "hidden"}`}>
                <div className="bg-[#FAFAFF] border border-purple-100 rounded-3xl p-8 lg:p-10 text-center">
                  <div className="text-[#7C3AED] text-7xl font-black leading-none mb-2 select-none">&ldquo;</div>
                  <p className="text-[#1A0A2E] text-lg lg:text-xl font-medium leading-relaxed mb-6">{t.quote}</p>
                  <Stars n={t.rating} />
                  <div className="flex items-center justify-center gap-4 mt-5">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: t.color }}>
                      <span className="text-white font-bold text-sm">{t.initials}</span>
                    </div>
                    <div className="text-left">
                      <div className="text-[#1A0A2E] font-bold">{t.name}</div>
                      <div className="text-[#64748B] text-sm">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center gap-2 mt-5">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${i === slide ? "w-8 h-2.5 bg-[#7C3AED]" : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"}`} />
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} onClick={() => setSlide(i)}
                className={`rounded-2xl p-5 border cursor-pointer transition-all duration-300 ${i === slide ? "border-[#7C3AED]/30 bg-[#F5F3FF] shadow-sm" : "border-gray-100 bg-[#FAFAFF] hover:border-purple-100"}`}>
                <Stars n={t.rating} />
                <p className="text-[#374151] text-sm leading-relaxed mt-3 mb-4 line-clamp-2">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: t.color }}>
                    <span className="text-white font-bold text-xs">{t.initials}</span>
                  </div>
                  <div>
                    <div className="text-[#1A0A2E] font-semibold text-sm">{t.name}</div>
                    <div className="text-[#64748B] text-xs">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 11. CORPORATE CLIENTS ════════════════════════════ */}
      <section className="bg-[#FAFAFF] py-14 border-y border-purple-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-center text-[#94A3B8] text-xs font-bold tracking-[0.2em] uppercase mb-8">
            Trusted by Leading Companies Across Bangladesh
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {CLIENTS.map(({ label, sub }) => (
              <div key={label} className="flex flex-col items-center justify-center bg-white border border-purple-50 rounded-xl px-3 py-4 hover:border-[#7C3AED]/30 hover:shadow-sm transition-all duration-300 group cursor-default">
                <div className="text-[#1A0A2E] font-bold text-sm text-center group-hover:text-[#7C3AED] transition-colors leading-tight">{label}</div>
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
            <div className="inline-flex items-center gap-2 bg-[#F5F3FF] text-[#7C3AED] text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A0A2E] leading-tight">
              Got Questions?<br />
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">We Have Answers.</span>
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? "border-[#7C3AED]/30 shadow-sm bg-[#FAFAFF]" : "border-gray-100 bg-white"}`}>
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[#1A0A2E] font-semibold text-[15px]">{q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#7C3AED] transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
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
      <section className="relative bg-[#0D0A1A] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0A1A] via-[#1A1033] to-[#0D0A1A] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7C3AED]/12 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-[#7C3AED]/40 bg-[#7C3AED]/10 text-[#C4B5FD] text-xs font-bold px-4 py-2 rounded-full mb-7 tracking-wide uppercase">
            Start Today
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Ready to Build Your<br />
            <span className="bg-gradient-to-r from-[#A855F7] to-[#7C3AED] bg-clip-text text-transparent">Dream Workspace?</span>
          </h2>
          <p className="text-[#A78BFA] text-lg mb-3 max-w-xl mx-auto">
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
              className="flex items-center gap-2.5 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:from-[#6D28D9] hover:to-[#7C3AED] text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-0.5 text-sm">
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
      <section id="contact" className="bg-[#FAFAFF] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            <div>
              <div className="inline-flex items-center gap-2 bg-[#F5F3FF] text-[#7C3AED] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-wide uppercase">
                Get In Touch
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#1A0A2E] mb-3 leading-tight">
                Let&apos;s Build Something<br />
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">Great Together</span>
              </h2>
              <p className="text-[#64748B] text-base mb-8">
                Fill out the form and our team will reach out within 24 hours to discuss your workspace needs.
              </p>

              {submitted ? (
                <div className="bg-white border border-[#7C3AED]/20 rounded-2xl p-10 text-center shadow-sm">
                  <CheckCircle className="w-14 h-14 text-[#7C3AED] mx-auto mb-4" />
                  <h3 className="text-[#1A0A2E] font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-[#64748B] text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#374151] text-sm font-semibold mb-2">Full Name</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition-all"
                        placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-[#374151] text-sm font-semibold mb-2">Phone Number</label>
                      <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition-all"
                        placeholder="+880 1XXX-XXXXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#374151] text-sm font-semibold mb-2">Which model interests you?</label>
                    <select className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition-all text-[#374151]">
                      <option>Model M1 &#8212; &#2547;10,500 (4&#215;2 ft)</option>
                      <option>Model M1 Pro &#8212; &#2547;11,700 (2&#215;4 ft)</option>
                      <option>Model M1 Premium &#8212; &#2547;15,400 (4&#215;2 ft)</option>
                      <option>Model M1 Premium &#8212; &#2547;17,700 (5&#215;2 ft)</option>
                      <option>Not sure &#8212; need consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#374151] text-sm font-semibold mb-2">Message (optional)</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition-all resize-none h-[100px]"
                      placeholder="Any specific requirements &#8212; size, color, delivery location..." />
                  </div>
                  <button type="submit"
                    className="w-full bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:shadow-lg hover:shadow-purple-200">
                    <Send className="w-4 h-4" /> Send My Request
                  </button>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us Instead
                  </a>
                </form>
              )}
            </div>

            <div className="space-y-5">
              <div className="bg-white border border-purple-50 rounded-2xl p-6 space-y-5">
                <h3 className="text-[#1A0A2E] font-bold text-lg">Contact Information</h3>
                {[
                  { icon: Phone, label: "Phone / WhatsApp", value: WA_NUMBER, href: `tel:${WA_NUMBER}` },
                  { icon: MessageCircle, label: "WhatsApp Chat", value: "Chat with us now \u2192", href: WA_LINK },
                  { icon: MapPin, label: "Location", value: "Gazipur, Dhaka, Bangladesh", href: "#" },
                  { icon: Clock, label: "Business Hours", value: "Sat\u2013Thu, 9:00 AM \u2013 8:00 PM", href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-[#F5F3FF] group-hover:bg-gradient-to-br group-hover:from-[#7C3AED] group-hover:to-[#A855F7] rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <Icon className="w-4 h-4 text-[#7C3AED] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-[#94A3B8] text-xs font-medium">{label}</div>
                      <div className="text-[#1A0A2E] font-semibold text-sm mt-0.5 group-hover:text-[#7C3AED] transition-colors">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] border border-purple-100 rounded-2xl overflow-hidden h-60 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#A855F7] rounded-full flex items-center justify-center shadow-xl shadow-purple-200">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-[#1A0A2E] font-bold text-base">Gazipur, Bangladesh</p>
                  <p className="text-[#64748B] text-sm mt-0.5">Our manufacturing facility</p>
                </div>
                <a href="https://maps.google.com/?q=Gazipur,Bangladesh" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1A0A2E] text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-[#0D0A1A] transition-colors">
                  <ExternalLink className="w-3 h-3" /> Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 15. FOOTER ════════════════════════════════════════ */}
      <footer className="bg-[#0D0A1A] text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            <div>
              <div className="flex items-center gap-3 mb-5">
                <img src={logoImg} alt="Logo" className="w-10 h-10 rounded-xl object-cover border border-purple-800/30" />
                <div>
                  <div className="text-white font-bold text-sm leading-tight">Adjustable Table Builder</div>
                  <div className="text-[#A78BFA] text-[10px]">Gazipur, Bangladesh</div>
                </div>
              </div>
              <p className="text-[#A78BFA] text-sm leading-relaxed mb-6">
                Premium custom height-adjustable desks. Crafted with precision. Delivered with care.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map(({ icon: Icon, href }, i) => (
                  <a key={i} href={href}
                    className="w-9 h-9 bg-white/10 hover:bg-gradient-to-br hover:from-[#7C3AED] hover:to-[#A855F7] rounded-lg flex items-center justify-center transition-all duration-300" aria-label="Social link">
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs mb-5 tracking-[0.15em] uppercase">Quick Links</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map(({ label, id }) => (
                  <li key={id}>
                    <button onClick={() => scrollTo(id)}
                      className="text-[#A78BFA] hover:text-white text-sm transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs mb-5 tracking-[0.15em] uppercase">Our Models</h4>
              <ul className="space-y-3">
                {[
                  "Model M1 \u2014 \u09f310,500",
                  "Model M1 Pro \u2014 \u09f311,700",
                  "Model M1 Premium \u2014 \u09f315,400+",
                  "Custom Sizes Available",
                  "Corporate Orders",
                ].map((s) => (
                  <li key={s}>
                    <span className="text-[#A78BFA] hover:text-white text-sm cursor-default transition-colors">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs mb-5 tracking-[0.15em] uppercase">Contact</h4>
              <div className="space-y-4">
                <a href={`tel:${WA_NUMBER}`} className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-[#A855F7] flex-shrink-0" />
                  <span className="text-[#A78BFA] group-hover:text-white text-sm transition-colors">{WA_NUMBER}</span>
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  <span className="text-[#A78BFA] group-hover:text-white text-sm transition-colors">WhatsApp Chat</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#A855F7] flex-shrink-0 mt-0.5" />
                  <span className="text-[#A78BFA] text-sm">Gazipur, Dhaka, Bangladesh</span>
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
              &copy; 2024 Adjustable Table Builder. All rights reserved. Made with &#10084;&#65039; in Bangladesh.
            </p>
            <div className="flex gap-5">
              {["Privacy Policy", "Terms of Service"].map((l) => (
                <a key={l} href="#" className="text-[#64748B] hover:text-[#A78BFA] text-xs transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ══ FLOATING WHATSAPP ════════════════════════════════ */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group" aria-label="Chat on WhatsApp">
        <span className="hidden group-hover:flex items-center bg-[#1A0A2E] text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl whitespace-nowrap gap-1.5">
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
            <div className="inline-flex items-center gap-2 bg-[#F5F3FF] text-[#7C3AED] text-xs font-bold px-3 py-1.5 rounded-full mb-5">
              <Zap className="w-3 h-3" /> Free Consultation &#8212; No Obligation
            </div>
            <h3 className="text-2xl font-black text-[#1A0A2E] mb-2">Get Your Free Workspace Quote</h3>
            <p className="text-[#64748B] text-sm mb-6">Tell us about your dream workspace and we will send you a detailed quote within 24 hours.</p>
            <div className="space-y-3">
              <input className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition-all" placeholder="Your full name" />
              <input className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition-all" placeholder="Phone number" />
              <select className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition-all text-[#374151]">
                <option>Model M1 &#8212; &#2547;10,500</option>
                <option>Model M1 Pro &#8212; &#2547;11,700</option>
                <option>Model M1 Premium &#8212; &#2547;15,400 (4&#215;2 ft)</option>
                <option>Model M1 Premium &#8212; &#2547;17,700 (5&#215;2 ft)</option>
                <option>Not sure yet</option>
              </select>
              <textarea className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition-all resize-none h-[80px]" placeholder="Describe your workspace needs..." />
              <button
                onClick={() => setPopup(false)}
                className="w-full bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:shadow-lg hover:shadow-purple-200">
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

      {/* ══ VIDEO MODAL ════════════════════════════════════════ */}
      {videoId && <VideoModal videoId={videoId} onClose={() => setVideoId(null)} />}

    </div>
  );
}
