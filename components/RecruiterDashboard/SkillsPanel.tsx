"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Code, Settings } from "lucide-react";

interface SkillsPanelProps {
  selectedSkill: string;
  onSelect: (skill: string) => void;
}

export default function SkillsPanel({ selectedSkill, onSelect }: SkillsPanelProps) {
  const skillGroups = [
    {
      title: "Incident Management",
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      skills: ["SLA Compliance", "P1/P2 Incident Handling", "Escalation Handling", "RCA"]
    },
    {
      title: "Technical Skills",
      icon: <Code className="w-5 h-5 text-blue-400" />,
      skills: ["SQL", "REST API", "Log Analysis"]
    },
    {
      title: "Tools",
      icon: <Settings className="w-5 h-5 text-cyan-400" />,
      skills: ["JIRA", "Cherwell", "Oracle B2C"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel p-8 w-full max-w-[400px] space-y-8 border-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.05)]"
    >
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Skill Matrix</h3>
      </div>

      <div className="space-y-8">
        {(skillGroups || []).map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-4">
            <div className="flex items-center gap-3">
              {group.icon}
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">{group.title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {(group.skills || []).map((skill, skillIdx) => (
                <motion.button
                  key={skillIdx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelect(skill)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    selectedSkill === skill
                      ? "bg-cyan-500/20 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                      : "bg-white/[0.03] border-white/5 text-gray-500 hover:text-white hover:border-white/20"
                  }`}
                >
                  [{skill}]
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
