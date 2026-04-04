"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Hand, Database, FileSearch, Shield, Activity, HardDrive, Terminal, Settings } from "lucide-react";
import React from "react";

interface CentralExplorerProps {
  selectedSkill: string;
}

const skillIcon: Record<string, React.ReactNode> = {
  SQL: <Database className="w-8 h-8 text-cyan-400" />,
  "SLA Compliance": <Shield className="w-8 h-8 text-emerald-400" />,
  "P1/P2 Incident Handling": <Activity className="w-8 h-8 text-red-400" />,
  "Escalation Handling": <HardDrive className="w-8 h-8 text-blue-400" />,
  RCA: <FileSearch className="w-8 h-8 text-amber-400" />,
  "REST API": <Terminal className="w-8 h-8 text-purple-400" />,
  "Log Analysis": <FileSearch className="w-8 h-8 text-cyan-300" />,
  JIRA: <Settings className="w-8 h-8 text-blue-300" />,
  Cherwell: <Shield className="w-8 h-8 text-cyan-500" />,
  "Oracle B2C": <Database className="w-8 h-8 text-amber-400" />,
};

export default function CentralExplorer({ selectedSkill }: CentralExplorerProps) {
  const icon = skillIcon[selectedSkill] || skillIcon["SQL"];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[500px] w-full mx-auto pointer-events-none select-none">
      {/* Rotating Orbit Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[380px] h-[380px] border border-cyan-500/10 rounded-full"
      >
        <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-dashed border-cyan-500/5 rounded-full" />
        <div className="absolute top-0 left-1/2 -ml-2 w-4 h-4 rounded-full bg-cyan-500/30 blur-sm animate-pulse" />
      </motion.div>

      {/* Counter-rotating inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200px] h-[200px] border border-cyan-500/5 rounded-full"
      >
        <div className="absolute bottom-0 left-1/2 -ml-1 w-2 h-2 rounded-full bg-cyan-400/20 blur-sm" />
      </motion.div>

      {/* Center Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedSkill}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.1, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8 z-10"
        >
          {/* Floating Skill Icon */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 4, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-28 h-28 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.15)] mb-4"
          >
            {icon}
          </motion.div>

          {/* Holographic Hand */}
          <div className="relative pointer-events-none">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full scale-150 animate-pulse" />
            <Hand className="w-14 h-14 text-cyan-400/60" />
          </div>

          {/* Big Skill Name */}
          <div className="text-center mt-2">
            <span className="text-[10px] font-black text-cyan-500/50 uppercase tracking-[0.5em] block mb-3">
              Analyzing Capability
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-widest uppercase leading-tight text-center max-w-[260px]">
              {selectedSkill}
            </h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
