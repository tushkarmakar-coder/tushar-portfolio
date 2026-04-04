"use client";
 
import { usePathname } from "next/navigation";
 
export default function Footer() {
  const pathname = usePathname();
 
  if (pathname === "/entry" || pathname === "/") return null;
 
  return (
    <footer className="w-full py-12 mt-auto border-t border-white/5 bg-[#03030a]/50 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="w-8 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] transition-colors hover:text-cyan-400 cursor-default">
          © 2026 Tushar Karmakar
        </p>
      </div>
    </footer>
  );
}
