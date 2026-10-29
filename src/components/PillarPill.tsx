import React from 'react';
import { PillarId } from '../types';

interface PillarPillProps {
  pillar: PillarId;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  showCodePrefix?: boolean;
}

export const PillarPill: React.FC<PillarPillProps> = ({
  pillar,
  label,
  size = 'md',
  showCodePrefix = true,
}) => {
  const getPillarConfig = (p: PillarId) => {
    switch (p) {
      case 'p1_magang':
        return {
          code: 'PILAR 01 // MAGANG',
          defaultLabel: 'Magang Industri',
          bg: 'bg-amber-500/15',
          text: 'text-amber-400',
          border: 'border-amber-500/30',
          glow: 'shadow-[0_0_12px_-2px_rgba(245,158,11,0.35)]',
          dot: 'bg-amber-400',
        };
      case 'p2_identitas':
        return {
          code: 'PILAR 02 // IDENTITAS',
          defaultLabel: 'Identitas Digital',
          bg: 'bg-blue-500/15',
          text: 'text-blue-400',
          border: 'border-blue-500/30',
          glow: 'shadow-[0_0_12px_-2px_rgba(59,130,246,0.35)]',
          dot: 'bg-blue-400',
        };
      case 'p3_tamatan':
        return {
          code: 'PILAR 03 // TAMATAN',
          defaultLabel: 'Tracer Tamatan',
          bg: 'bg-emerald-500/15',
          text: 'text-emerald-400',
          border: 'border-emerald-500/30',
          glow: 'shadow-[0_0_12px_-2px_rgba(16,185,129,0.35)]',
          dot: 'bg-emerald-400',
        };
      case 'p4_rujukan':
        return {
          code: 'PILAR 04 // RUJUKAN',
          defaultLabel: 'Rujukan & Asistensi',
          bg: 'bg-purple-500/15',
          text: 'text-purple-400',
          border: 'border-purple-500/30',
          glow: 'shadow-[0_0_12px_-2px_rgba(139,92,246,0.35)]',
          dot: 'bg-purple-400',
        };
    }
  };

  const config = getPillarConfig(pillar);

  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider',
    md: 'text-xs px-2.5 py-1 tracking-wide',
    lg: 'text-sm px-3.5 py-1.5 tracking-wide',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-mono font-medium border ${config.bg} ${config.text} ${config.border} ${config.glow} ${sizeClasses[size]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot} animate-pulse`} />
      <span>{showCodePrefix ? config.code : (label || config.defaultLabel)}</span>
      {label && showCodePrefix && (
        <span className="opacity-80 font-sans font-normal border-l border-current pl-1.5 ml-0.5">
          {label}
        </span>
      )}
    </span>
  );
};
