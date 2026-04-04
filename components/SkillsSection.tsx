"use client";

import { motion } from "framer-motion";
import { useMode } from "@/lib/mode-context";
import { ShieldCheck, Cpu, Terminal, Sparkles } from "lucide-react";

export default function SkillsSection() {
  const { mode } = useMode();
  if (!mode) return null;
  const isRecruiter = mode === "recruiter";

  const recruiterGroups = [
    {
      title: "Incident Management",
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      skills: ["SLA", "P1/P2 Escalations", "Bridge Calls", "RCA", "ITIL"]
    },
    {
      title: "Technical Stack",
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      skills: ["REST API", "SQL", "Log Analysis", "Oracle B2C", "App Support"]
    },
    {
      title: "Workplace Tools",
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      skills: ["JIRA", "Cherwell", "Postman", "ServiceNow", "Splunk"]
    }
  ];

  const clientSkills = [
    "AI Video Production", "Thumbnail Engineering", "Social Growth Strategy", 
    "Viral Frameworks", "CapCut / Premiere", "Midjourney Artist", 
    "High-CTR Design", "Audience Analytics"
  ];

  return (
    <div id="skills" className="w-full">
      <div className="text-center mb-20">
        <span className={`${isRecruiter ? 'text-cyan-400' : 'text-cyan-400'} text-xs font-black uppercase tracking-[0.4em] mb-4 block`}>
          Technical Matrix
        </span>
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight">
          {isRecruiter ? "Operational Skills" : "Crafting Solutions"}
        </h2>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        {isRecruiter ? (
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {(recruiterGroups || []).map((group, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-white/[0.02] border border-white/5 p-8 rounded-[32px] flex flex-col items-start group hover:bg-white/[0.04] transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-500/40 transition-colors`}>
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-6 tracking-wide">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(group.skills || []).map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-gray-400 text-xs font-bold uppercase tracking-widest group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all duration-300"
                    >
                      [{skill}]
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(clientSkills || []).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass-panel p-8 text-center flex flex-col items-center justify-center gap-4 group"
              >
                <Sparkles className="w-5 h-5 text-cyan-400/40 group-hover:text-cyan-400 transition-colors" />
                <span className="text-white font-bold tracking-wide text-lg">{skill}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
