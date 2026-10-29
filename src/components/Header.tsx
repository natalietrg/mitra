import React from 'react';
import { ShieldCheck, Search, Moon, Sun, RefreshCw, UserCheck, Activity } from 'lucide-react';
import { UserRole } from '../types';

interface HeaderProps {
  isPublicMode: boolean;
  setIsPublicMode: (val: boolean) => void;
  isSimulated: boolean;
  setIsSimulated: (val: boolean) => void;
  activeRole: UserRole;
  setActiveRole: (role: UserRole) => void;
  onOpenVerifier: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isPublicMode,
  setIsPublicMode,
  isSimulated,
  setIsSimulated,
  activeRole,
  setActiveRole,
  onOpenVerifier,
}) => {
  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 border-b backdrop-blur-md ${
        isPublicMode
          ? 'bg-slate-50/90 border-slate-200/80 text-slate-800'
          : 'bg-[#0B1020]/90 border-white/10 text-[#DEE1F9]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand & Gov Emblem */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-amber-500 shadow-md shadow-blue-500/20 text-white font-bold text-xl ring-1 ring-white/20">
              <span className="tracking-tighter font-extrabold text-sm sm:text-base">MTR</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                  GovTech Vokasi RI
                </span>
                <span className="hidden sm:inline-block text-[11px] text-slate-400 font-mono">
                  v3.8-NATIONAL
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-extrabold tracking-tight flex items-center gap-2">
                <span>MITRA</span>
                <span className="text-xs sm:text-sm font-normal text-slate-400 hidden md:inline">
                  | Sistem Ekosistem Kesiapan Kerja Vokasi
                </span>
              </h1>
            </div>
          </div>

          {/* Quick Actions & Mode Toggles */}
          <div className="flex items-center gap-3">
            {/* Simulation pill */}
            <button
              onClick={() => setIsSimulated(!isSimulated)}
              className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
                isSimulated
                  ? 'bg-amber-500/15 text-amber-400 border-amber-500/30 shadow-[0_0_12px_-2px_rgba(245,158,11,0.25)] hover:bg-amber-500/25'
                  : 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30 shadow-[0_0_12px_-2px_rgba(16,185,129,0.25)] hover:bg-emerald-500/25'
              }`}
              title="Klik untuk beralih antara Data Simulasi Pilot dan Registri Nasional Live"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isSimulated ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400 animate-ping'
                }`}
              />
              <span className="font-semibold">
                {isSimulated ? '● DATA SIMULASI PILOT' : '● REGISTRI NASIONAL LIVE'}
              </span>
              <RefreshCw className="w-3 h-3 ml-1 opacity-70" />
            </button>

            {/* Verifier Trigger */}
            <button
              onClick={onOpenVerifier}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-blue-200" />
              <span className="hidden sm:inline">Verifikasi NISN / Ijazah</span>
              <span className="sm:hidden">Verifikasi</span>
            </button>

            {/* Role Switcher */}
            <div className="hidden md:flex items-center text-xs font-mono rounded-xl border p-1 bg-black/20 border-white/10">
              <span className="px-2 text-slate-400 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" /> Peran:
              </span>
              <select
                value={activeRole}
                onChange={(e) => setActiveRole(e.target.value as UserRole)}
                className={`bg-transparent text-xs font-sans rounded-lg px-2 py-1 outline-none cursor-pointer ${
                  isPublicMode ? 'text-slate-800 bg-white shadow-xs' : 'text-blue-300 bg-[#161B2B]'
                }`}
              >
                <option value="gov_official" className="bg-[#121A33] text-white">
                  🏛️ Ditjen Vokasi (Pusat)
                </option>
                <option value="student" className="bg-[#121A33] text-white">
                  🎓 Siswa Magang (Raditya)
                </option>
                <option value="industry_partner" className="bg-[#121A33] text-white">
                  🏢 Mitra Industri (Schneider/Astra)
                </option>
                <option value="bkk_coordinator" className="bg-[#121A33] text-white">
                  📋 Koordinator BKK SMK
                </option>
              </select>
            </div>

            {/* Dark / Public Portal Switch */}
            <button
              onClick={() => setIsPublicMode(!isPublicMode)}
              className={`p-2 rounded-xl border transition-all ${
                isPublicMode
                  ? 'bg-slate-200 text-slate-700 border-slate-300 hover:bg-slate-300'
                  : 'bg-[#161B2B] text-slate-300 border-white/10 hover:bg-[#1A2444] text-amber-300'
              }`}
              title={isPublicMode ? 'Beralih ke Dashboard Operasional Konsol' : 'Beralih ke Mode Portal Publik'}
            >
              {isPublicMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
