import React from 'react';
import {
  LayoutDashboard,
  Briefcase,
  Award,
  TrendingUp,
  HeartHandshake,
  ShieldAlert,
} from 'lucide-react';
import { PillarId } from '../types';

export type ActiveTab = 'overview' | PillarId;

interface NavigationProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  isPublicMode: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  isPublicMode,
}) => {
  const tabs: {
    id: ActiveTab;
    label: string;
    sublabel: string;
    icon: React.ReactNode;
    color: string;
    activeBorder: string;
    glow: string;
  }[] = [
    {
      id: 'overview',
      label: 'Command Center',
      sublabel: 'Telemetri Nasional',
      icon: <LayoutDashboard className="w-4 h-4" />,
      color: 'text-slate-300',
      activeBorder: 'border-blue-400 bg-blue-500/10 text-blue-400',
      glow: 'shadow-[0_0_15px_-3px_rgba(59,130,246,0.25)]',
    },
    {
      id: 'p1_magang',
      label: 'Pilar 01 // Magang',
      sublabel: 'DUDI & Presensi Lapangan',
      icon: <Briefcase className="w-4 h-4" />,
      color: 'text-amber-400',
      activeBorder: 'border-amber-400 bg-amber-500/15 text-amber-300',
      glow: 'shadow-[0_0_16px_-2px_rgba(245,158,11,0.35)]',
    },
    {
      id: 'p2_identitas',
      label: 'Pilar 02 // Identitas',
      sublabel: 'Paspor Digital & SKKNI',
      icon: <Award className="w-4 h-4" />,
      color: 'text-blue-400',
      activeBorder: 'border-blue-400 bg-blue-500/15 text-blue-300',
      glow: 'shadow-[0_0_16px_-2px_rgba(59,130,246,0.35)]',
    },
    {
      id: 'p3_tamatan',
      label: 'Pilar 03 // Tamatan',
      sublabel: 'Tracer Study BMW',
      icon: <TrendingUp className="w-4 h-4" />,
      color: 'text-emerald-400',
      activeBorder: 'border-emerald-400 bg-emerald-500/15 text-emerald-300',
      glow: 'shadow-[0_0_16px_-2px_rgba(16,185,129,0.35)]',
    },
    {
      id: 'p4_rujukan',
      label: 'Pilar 04 // Rujukan',
      sublabel: 'Konseling BKK & Karir',
      icon: <HeartHandshake className="w-4 h-4" />,
      color: 'text-purple-400',
      activeBorder: 'border-purple-400 bg-purple-500/15 text-purple-300',
      glow: 'shadow-[0_0_16px_-2px_rgba(139,92,246,0.35)]',
    },
  ];

  return (
    <nav className="w-full py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none rounded-2xl p-1.5 border ${
            isPublicMode
              ? 'bg-white border-slate-200 shadow-sm'
              : 'bg-[#121A33] border-white/10 shadow-lg shadow-black/30'
          }`}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-left transition-all whitespace-nowrap border ${
                  isActive
                    ? `${tab.activeBorder} ${tab.glow} font-semibold ring-1 ring-white/10`
                    : isPublicMode
                    ? 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-[#1A2444]'
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg ${
                    isActive
                      ? 'bg-white/10'
                      : isPublicMode
                      ? 'bg-slate-100 text-slate-600'
                      : 'bg-black/30 text-slate-400'
                  }`}
                >
                  {tab.icon}
                </div>
                <div>
                  <div className="text-xs sm:text-sm leading-tight flex items-center gap-1.5 font-mono">
                    {tab.label}
                  </div>
                  <div className="text-[11px] opacity-70 font-sans">{tab.sublabel}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
