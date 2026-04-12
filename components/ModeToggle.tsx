"use client";

import { motion } from "framer-motion";
import { useMode } from "@/lib/mode-context";
import { UserSearch, Briefcase, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ModeToggle() {
  const { mode, setMode } = useMode();
  const router = useRouter();

  if (mode === "idle") return null;

  const handleModeChange = (newMode: "recruiter" | "client" | "idle") => {
    window.scrollTo(0, 0);
    setMode(newMode);
    if (newMode === "idle") {
      router.push("/entry");
    } else {
      router.push(`/${newMode}`);
    }
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 inset-x-0 z-[999] flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto">
        <div className="mode-toggle-pill flex items-center gap-1 p-1.5">
          {/* Recruiter Tab */}
          <button
            onClick={() => handleModeChange("recruiter")}
            className={`relative flex items-center gap-1.5 md:gap-2.5 px-3.5 md:px-5 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 ${
              mode === "recruiter"
                ? "text-[#03030a]"
                : "text-gray-500 hover:text-cyan-400"
            }`}
          >
            {mode === "recruiter" && (
              <motion.div
                layoutId="mode-active-bg"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                style={{ boxShadow: "0 0 20px rgba(6,182,212,0.5), 0 0 40px rgba(6,182,212,0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <UserSearch className="w-3.5 h-3.5 relative z-10" />
            <span className="relative z-10">Recruiter</span>
          </button>
 
          {/* Client Tab */}
          <button
            onClick={() => handleModeChange("client")}
            className={`relative flex items-center gap-1.5 md:gap-2.5 px-3.5 md:px-5 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 ${
              mode === "client"
                ? "text-[#03030a]"
                : "text-gray-500 hover:text-cyan-400"
            }`}
          >
            {mode === "client" && (
              <motion.div
                layoutId="mode-active-bg"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                style={{ boxShadow: "0 0 20px rgba(6,182,212,0.5), 0 0 40px rgba(6,182,212,0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Briefcase className="w-3.5 h-3.5 relative z-10" />
            <span className="relative z-10">Client</span>
          </button>

          {/* Divider */}
          <div className="w-px h-4 bg-white/8 mx-1" />

          {/* Reset */}
          <motion.button
            whileHover={{ rotate: -180 }}
            transition={{ duration: 0.35 }}
            onClick={() => handleModeChange("idle")}
            className="p-2.5 rounded-full text-gray-600 hover:text-cyan-400 transition-colors"
            title="Return to Entry"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
