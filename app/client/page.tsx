"use client";

import ClientDashboard from "@/components/ClientDashboard";
import { useMode } from "@/lib/mode-context";
import { useEffect } from "react";
import LeftSidebar from "@/components/LeftSidebar";
import ModeToggle from "@/components/ModeToggle";
import { motion } from "framer-motion";

export default function ClientPage() {
  const { mode, setMode } = useMode();

  useEffect(() => {
    if (mode !== "client") {
      setMode("client");
    }
  }, [mode, setMode]);

  // Prevent render during transition
  if (mode !== "client") return null;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-[#050508] overflow-x-hidden"
    >
      <LeftSidebar />
      <ModeToggle />
      <ClientDashboard />
    </motion.main>
  );
}
