"use client";

import RecruiterDashboard from "@/components/RecruiterDashboard";
import { useMode } from "@/lib/mode-context";
import { useEffect } from "react";
// [MOVED TO layout.tsx] import LeftSidebar from "@/components/LeftSidebar";
// [MOVED TO layout.tsx] import ModeToggle from "@/components/ModeToggle";
import { motion } from "framer-motion";

export default function RecruiterPage() {
  const { mode, setMode } = useMode();

  useEffect(() => {
    if (mode !== "recruiter") {
      setMode("recruiter");
    }
  }, [mode, setMode]);

  // Prevent render during transition to ensure data safety
  if (mode !== "recruiter") return null;

  return (
    <>
      {/* [MOVED TO layout.tsx] <LeftSidebar /> */}
      {/* [MOVED TO layout.tsx] <ModeToggle /> */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen bg-[#050508] overflow-x-hidden"
      >
        <div className="relative recruiter-grid">
          {/* Recruiter ambient glow */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/4 blur-[100px] rounded-full" />
          </div>
          <RecruiterDashboard />
        </div>
      </motion.main>
    </>
  );
}
