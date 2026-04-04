"use client";

import { motion } from "framer-motion";
import { useMode } from "@/lib/mode-context";
import { useEffect, useState } from "react";
import { 
  Home, 
  User, 
  Briefcase, 
  Code, 
  Award, 
  Mail, 
  Layers, 
  FolderGit2, 
  Tag 
} from "lucide-react";

export default function LeftSidebar() {
  const { mode } = useMode();
  const [activeSection, setActiveSection] = useState("home");

  // Declare nav items BEFORE useEffect so they are not in the TDZ
  const isRecruiter = mode === "recruiter";

  const recruiterNav = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "achievements", label: "Achievements", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const clientNav = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "services", label: "Services", icon: Layers },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "pricing", label: "Pricing", icon: Tag },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const currentNav = isRecruiter ? recruiterNav : clientNav;

  // Scroll spy logic
  useEffect(() => {
    if (!mode || mode === "idle") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = currentNav[0].id;

      for (const item of currentNav) {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          current = item.id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentNav, mode]);

  if (!mode) return null;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (mode === "idle") return null;

  return (
    <>
      {/* Desktop Navigation (Vertically Centered on Left) */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-[100] flex-col gap-4 p-3 rounded-full border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
        style={{
          background: "rgba(11, 15, 23, 0.65)",
          backdropFilter: "blur(12px)",
        }}
      >
        {(currentNav || []).map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => scrollTo(item.id)}
                className={`p-3 rounded-full transition-all duration-300 flex items-center justify-center relative ${
                  isActive 
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] scale-110" 
                    : "text-gray-500 hover:text-cyan-400 hover:bg-white/5 border border-transparent scale-100"
                }`}
              >
                <Icon className="w-5 h-5" />
              </button>
              
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1.5 rounded-lg bg-[#0b0f17] border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-xl whitespace-nowrap">
                {item.label}
              </div>
            </div>
          );
        })}
      </motion.nav>

      {/* Mobile Navigation (Bottom Bar) */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="md:hidden fixed bottom-6 left-6 right-6 z-[100] flex justify-between items-center px-6 py-4 rounded-3xl border border-cyan-500/40 shadow-[0_10px_40px_-10px_rgba(6,182,212,0.4)] backdrop-blur-xl gap-2"
        style={{
          background: "linear-gradient(135deg, rgba(8, 8, 20, 0.9) 0%, rgba(15, 23, 42, 0.8) 100%)",
        }}
      >
        {(currentNav || []).map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`p-3 rounded-2xl transition-all duration-300 flex-shrink-0 flex items-center justify-center relative ${
                isActive 
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-110" 
                  : "text-gray-500 hover:text-white border border-transparent"
              }`}
            >
              <Icon className="w-5 h-5" />
              {isActive && (
                <motion.div
                  layoutId="mobile-active-glow"
                  className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-sm -z-10"
                />
              )}
            </button>
          );
        })}
      </motion.nav>
    </>
  );
}
