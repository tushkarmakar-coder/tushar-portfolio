"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, TrendingUp } from "lucide-react";
import { Database, FileSearch, Shield, Activity, HardDrive, Terminal, Settings } from "lucide-react";
import React from "react";

interface ImpactPanelProps {
  selectedSkill: string;
}

const skillData: Record<string, { usedFor: string[]; impact: string; icon: React.ReactNode }> = {
  SQL: {
    usedFor: ["Production issue debugging", "Data validation & investigation", "Log querying"],
    impact: "Reduced RCA cycle time by 30%",
    icon: <Database className="w-5 h-5 text-cyan-400" />,
  },
  "SLA Compliance": {
    usedFor: ["Maintained 95% threshold", "Incident tracking & reporting", "Performance monitoring"],
    impact: "Consistent high-tier compliance status",
    icon: <Shield className="w-5 h-5 text-emerald-400" />,
  },
  "P1/P2 Incident Handling": {
    usedFor: ["Managed critical production failures", "Coordinated cross-team bridge calls", "Stakeholder communication"],
    impact: "Achieved ~25% reduction in MTTR",
    icon: <Activity className="w-5 h-5 text-red-400" />,
  },
  "Escalation Handling": {
    usedFor: ["Governance of high-tier tickets", "Vendor coordination", "Senior leadership reporting"],
    impact: "Zero unplanned escalation breaches",
    icon: <HardDrive className="w-5 h-5 text-blue-400" />,
  },
  RCA: {
    usedFor: ["Root Cause Identification", "Bug fix coordination", "Defect tracking"],
    impact: "Eliminated 10+ recurring production issues",
    icon: <FileSearch className="w-5 h-5 text-amber-400" />,
  },
  "REST API": {
    usedFor: ["API log analysis (Splunk/Postman)", "Integration troubleshooting", "Architecture monitoring"],
    impact: "Optimization of platform communications",
    icon: <Terminal className="w-5 h-5 text-purple-400" />,
  },
  "Log Analysis": {
    usedFor: ["Stack trace debugging", "Server log interrogation", "Performance bottleneck ID"],
    impact: "Proactive bug detection before user impact",
    icon: <FileSearch className="w-5 h-5 text-cyan-300" />,
  },
  JIRA: {
    usedFor: ["Ticketing lifecycle governance", "Agile sprint support", "SLA metrics tracking"],
    impact: "Standardized operational reporting",
    icon: <Settings className="w-5 h-5 text-blue-300" />,
  },
  Cherwell: {
    usedFor: ["Asset management", "Incident lifecycles", "Service request handling"],
    impact: "100% data integrity in ITSM tool",
    icon: <Shield className="w-5 h-5 text-cyan-500" />,
  },
  "Oracle B2C": {
    usedFor: ["Console administration", "Service management troubleshooting", "User workflow optimization"],
    impact: "Expert-level enterprise console governance",
    icon: <Database className="w-5 h-5 text-amber-400" />,
  },
};

export default function ImpactPanel({ selectedSkill }: ImpactPanelProps) {
  const data = skillData[selectedSkill] || skillData["SQL"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel p-8 w-full max-w-[400px] space-y-8 border-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.05)]"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <TrendingUp className="w-4 h-4 text-cyan-400" />
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
          Production Impact
        </h3>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedSkill}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {/* Impact Quote */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              {data.icon}
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                Key Result
              </span>
            </div>
            <div className="border-l-2 border-cyan-500/40 pl-4">
              <p className="text-lg font-bold text-white italic leading-snug">
                &quot;{data.impact}&quot;
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5" />

          {/* Real-world Usage */}
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
              Real-World Usage
            </span>
            <ul className="space-y-3">
              {(data.usedFor || []).map((use, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                  <Sparkles className="w-3 h-3 text-cyan-400/60 mt-0.5 shrink-0" />
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Glow Tag */}
          <div className="pt-4 border-t border-white/5">
            <span className="text-[10px] font-black text-cyan-500/40 uppercase tracking-[0.4em]">
              @ Infogain — Jan 2020–Present
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
