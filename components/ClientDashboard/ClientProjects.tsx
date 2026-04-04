"use client";
 
import { motion, Variants } from "framer-motion";
import { Globe, ExternalLink, Play, Sparkles } from "lucide-react";
import { useState } from "react";
import PreviewModal, { PreviewItem } from "./PreviewModal";
 
/* ─── Inline Instagram SVG ─── */
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
 
/* ─── Real Projects Data ─────────────────────────────────────── */
const websiteProjects = [
  {
    title: "Litti Wale Barbil",
    subtitle: "littiwale-barbil.vercel.app",
    url: "https://littiwale-barbil.vercel.app",
    description: "Restaurant website with full menu, branding, and mobile-first design",
  },
  {
    title: "Chai Wale",
    subtitle: "chaiwale.vercel.app",
    url: "https://chaiwale.vercel.app",
    description: "Tea brand website with product showcase and online presence",
  },
];
 
const mainReels = [
  { url: "https://www.instagram.com/reel/DOqoY25E-oe/", label: "Social Media Hook" },
  { url: "https://www.instagram.com/reel/DVn8hJjk_SA/", label: "Viral Showcase" },
  { url: "https://www.instagram.com/reel/DUw79WcEvJM/", label: "Engagement Mastery" },
  { url: "https://www.instagram.com/reel/DT2tiCBkgFC/", label: "High-Retention Edit" },
];
 
const featuredWork = [
  {
    title: "Kashmiri Organic Nuts (Aly Goni)",
    description: "Premium influencer brand collaboration reel with high-production value.",
    url: "https://www.instagram.com/reel/DN7jMkjEqY7/",
    type: "instagram",
  },
  {
    title: "Animated Love Story",
    description: "Personalized animated storytelling project for digital consumption.",
    url: "https://www.instagram.com/reel/DU5RGN_ksou/",
    type: "instagram",
  },
  {
    title: "AI Baby Trend Content",
    description: "Created viral AI baby-style videos for clients. Samples available on request.",
    type: "contact",
    cta: "Request Sample",
  },
];
 
/* ─── Variants ──────────────────────────────────────────────── */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1 },
};
 
const stagger: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.1 } },
};
 
export default function ClientProjects() {
  const [modalItem, setModalItem] = useState<PreviewItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
 
  function openWebsite(project: (typeof websiteProjects)[0]) {
    setModalItem({
      title: project.title,
      description: project.description,
      type: "website",
      embedUrl: project.url,
      externalUrl: project.url,
    });
    setModalOpen(true);
  }
 
  function openExternal(url: string) {
    window.open(url, "_blank");
  }
 
  function scrollToContact() {
    const contactSec = document.getElementById("contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  }
 
  function closeModal() {
    setModalOpen(false);
    setTimeout(() => setModalItem(null), 400);
  }
 
  return (
    <>
      <div id="projects" className="w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-4 uppercase">
            AI VIDEO WORK
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Engineered for high conversion and maximum retention using professional AI workflows.
          </p>
        </motion.div>
 
        {/* ROW 1: 4 Main Reels */}
        <div className="max-w-[1400px] mx-auto px-6 mb-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {mainReels.map((reel, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                whileHover={{ y: -8 }}
                onClick={() => openExternal(reel.url)}
                className="group relative rounded-3xl border border-white/8 overflow-hidden cursor-pointer transition-all duration-500 hover:border-cyan-500/30"
                style={{ background: "rgba(8,8,20,0.6)", backdropFilter: "blur(20px)" }}
              >
                <div className="relative h-64 w-full bg-gradient-to-br from-cyan-500/10 via-black/40 to-blue-500/10 flex items-center justify-center overflow-hidden">
                   {/* Fallback Background Layer */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-cyan-500/5 transition-colors duration-500" />
                  
                  {/* Play Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all duration-500 text-white group-hover:text-black">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
 
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm">
                    <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest">Reel #{idx+1}</span>
                  </div>
 
                  {/* Instagram Label */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 group-hover:bg-white group-hover:border-white transition-all">
                    <InstagramIcon className="w-3 h-3 text-white group-hover:text-black" />
                    <span className="text-[9px] font-black text-white group-hover:text-black uppercase tracking-widest">Instagram</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
 
        {/* ROW 2: Featured Work (3 Cards) */}
        <div className="max-w-6xl mx-auto px-6 mb-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredWork.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                whileHover={{ y: -10 }}
                onClick={() => item.type === "contact" ? scrollToContact() : openExternal(item.url!)}
                className="group relative rounded-[40px] border border-white/8 p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-500 hover:border-cyan-500/30"
                style={{ background: "rgba(8,8,20,0.4)", backdropFilter: "blur(40px)" }}
              >
                <div className="w-20 h-20 rounded-[28px] bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all duration-500 text-cyan-400 group-hover:text-black shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                  <Sparkles className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow px-2">
                  {item.description}
                </p>
                
                <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] group-hover:bg-cyan-500 group-hover:border-cyan-400 group-hover:text-black transition-all shadow-xl">
                  {item.cta || "Watch on Instagram"}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
 
        {/* ── Web Solutions Section ───────────────────────────── */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Globe className="w-4 h-4 text-cyan-400" />
            </div>
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.35em]">
              High-Conversion Web Solutions
            </h3>
          </div>
 
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {websiteProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                whileHover={{ y: -8 }}
                onClick={() => openWebsite(project)}
                className="group relative rounded-3xl border border-white/8 overflow-hidden cursor-pointer transition-all duration-500 hover:border-cyan-500/30"
                style={{ background: "rgba(8,8,20,0.6)", backdropFilter: "blur(20px)" }}
              >
                <div className="p-8 flex items-start justify-between">
                  <div className="space-y-2">
                    <h4 className="text-white font-black text-2xl group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-[10px] font-mono text-cyan-500/60 tracking-[0.2em] uppercase font-bold">{project.subtitle}</p>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">{project.description}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-cyan-500/8 border border-cyan-500/15 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
                    <ExternalLink className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
 
      {/* Preview Modal — lazy-mounted */}
      <PreviewModal isOpen={modalOpen} onClose={closeModal} item={modalItem} />
    </>
  );
}
