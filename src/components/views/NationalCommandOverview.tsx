import React from 'react';
import {
  Users,
  ShieldCheck,
  TrendingUp,
  Headphones,
  ArrowUpRight,
  MapPin,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { PillarPill } from '../PillarPill';
import {
  INITIAL_TELEMETRY,
  TRACER_STATISTICS,
  REGIONAL_DATA,
  RECENT_TELEMETRY_STREAM,
  CURRENT_STUDENT,
} from '../../data/mockData';
import { PillarId, UserRole } from '../../types';

interface OverviewProps {
  isPublicMode: boolean;
  onNavigateTab: (tab: PillarId) => void;
  activeRole: UserRole;
  onOpenVerifier: () => void;
}

export const NationalCommandOverview: React.FC<OverviewProps> = ({
  isPublicMode,
  onNavigateTab,
  activeRole,
  onOpenVerifier,
}) => {
  return (
    <div className="space-y-6">
      {/* Hero Civic Banner / Bento Header */}
      <div
        className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 border transition-all ${
          isPublicMode
            ? 'bg-gradient-to-br from-white via-slate-50 to-blue-50/50 border-slate-200 shadow-sm'
            : 'bg-gradient-to-br from-[#121A33] via-[#0E152A] to-[#1A2444] border-white/10 shadow-2xl'
        }`}
      >
        <div className="absolute -right-12 -top-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-32 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] font-semibold uppercase px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-400 border border-blue-500/30 tracking-wider">
                ● SATU DATA VOKASI NASIONAL
              </span>
              <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-md border border-white/5">
                <Clock className="w-3.5 h-3.5 text-blue-400" /> Sinkronisasi Dapodik & BNSP: Real-Time
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Ekosistem Terpadu Kesiapan Kerja & Sertifikasi SMK RI
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${isPublicMode ? 'text-slate-600' : 'text-slate-300'}`}>
              Platform operasional Gov-Tech yang mengintegrasikan rekam jejak magang industri (DUDI), paspor kompetensi terverifikasi berstandar SKKNI, tracer study BMW (Bekerja, Melanjutkan, Wirausaha), dan asistensi karir BKK.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <button
              onClick={() => onNavigateTab('p1_magang')}
              className="px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Jelajahi Magang Industri</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenVerifier}
              className={`px-5 py-3 rounded-xl font-semibold text-sm border transition-all flex items-center justify-center gap-2 ${
                isPublicMode
                  ? 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                  : 'bg-[#1A2444] border-white/10 text-white hover:bg-[#25293A]'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Cek Bukti Kriptografis</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Core Pillars Bento Grid (12-column layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Pillar 1 Card */}
        <div
          onClick={() => onNavigateTab('p1_magang')}
          className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative group overflow-hidden ${
            isPublicMode
              ? 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-md'
              : 'bg-[#121A33] border-white/10 hover:border-amber-400/50 hover:bg-[#161F3D] shadow-lg'
          }`}
        >
          <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
          <div className="flex items-center justify-between mb-4">
            <PillarPill pillar="p1_magang" size="sm" showCodePrefix={false} />
            <span className="font-mono text-[11px] text-slate-400">PILAR 01</span>
          </div>
          <div className="space-y-1 mb-4">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-amber-400 tnum">
              {INITIAL_TELEMETRY.activeStudents.toLocaleString('id-ID')}
            </div>
            <div className="text-xs font-semibold text-slate-300">Siswa Magang Terdaftar Aktif</div>
          </div>
          <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
            Terhubung dengan 3.410 mitra industri manufaktur, robotika, dan teknologi informasi.
          </p>
          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-amber-400 font-medium">
            <span>Buka Portal Magang</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Pillar 2 Card */}
        <div
          onClick={() => onNavigateTab('p2_identitas')}
          className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative group overflow-hidden ${
            isPublicMode
              ? 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-md'
              : 'bg-[#121A33] border-white/10 hover:border-blue-400/50 hover:bg-[#161F3D] shadow-lg'
          }`}
        >
          <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
          <div className="flex items-center justify-between mb-4">
            <PillarPill pillar="p2_identitas" size="sm" showCodePrefix={false} />
            <span className="font-mono text-[11px] text-slate-400">PILAR 02</span>
          </div>
          <div className="space-y-1 mb-4">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-blue-400 tnum">
              {INITIAL_TELEMETRY.verifiedCredentials.toLocaleString('id-ID')}
            </div>
            <div className="text-xs font-semibold text-slate-300">Paspor SKKNI Kriptografis</div>
          </div>
          <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
            Sertifikasi kompetensi resmi berstandar BNSP dengan verifikasi Merkle Root Hash anti-pemalsuan.
          </p>
          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-blue-400 font-medium">
            <span>Buka Paspor Siswa</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Pillar 3 Card */}
        <div
          onClick={() => onNavigateTab('p3_tamatan')}
          className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative group overflow-hidden ${
            isPublicMode
              ? 'bg-white border-slate-200 hover:border-emerald-400 hover:shadow-md'
              : 'bg-[#121A33] border-white/10 hover:border-emerald-400/50 hover:bg-[#161F3D] shadow-lg'
          }`}
        >
          <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
          <div className="flex items-center justify-between mb-4">
            <PillarPill pillar="p3_tamatan" size="sm" showCodePrefix={false} />
            <span className="font-mono text-[11px] text-slate-400">PILAR 03</span>
          </div>
          <div className="space-y-1 mb-4">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-emerald-400 tnum">
              68.4%
            </div>
            <div className="text-xs font-semibold text-slate-300">Lulusan Bekerja & Linier (BMW)</div>
          </div>
          <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
            Masa tunggu rata-rata 2.4 bulan dengan tingkat respons survei tracer mencapai 91.4%.
          </p>
          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-emerald-400 font-medium">
            <span>Buka Data Tracer</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Pillar 4 Card */}
        <div
          onClick={() => onNavigateTab('p4_rujukan')}
          className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative group overflow-hidden ${
            isPublicMode
              ? 'bg-white border-slate-200 hover:border-purple-400 hover:shadow-md'
              : 'bg-[#121A33] border-white/10 hover:border-purple-400/50 hover:bg-[#161F3D] shadow-lg'
          }`}
        >
          <div className="absolute top-0 right-0 w-28 h-28 bg-purple-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
          <div className="flex items-center justify-between mb-4">
            <PillarPill pillar="p4_rujukan" size="sm" showCodePrefix={false} />
            <span className="font-mono text-[11px] text-slate-400">PILAR 04</span>
          </div>
          <div className="space-y-1 mb-4">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-purple-400 tnum">
              12.410+
            </div>
            <div className="text-xs font-semibold text-slate-300">Konseling & Rujukan BKK</div>
          </div>
          <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
            Klinik karir 1-on-1, uji psikometrik kesiapan mental kerja, dan advokasi keselamatan magang.
          </p>
          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-purple-400 font-medium">
            <span>Buka Pusat Konseling</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Main Bento Sections: BMW Tracer Distribution & Live National Telemetry Stream */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (7 cols): BMW Tracer Model & Regional Absorption */}
        <div className="lg:col-span-7 space-y-6">
          {/* BMW Model Card */}
          <div
            className={`rounded-2xl p-6 border ${
              isPublicMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#121A33] border-white/10 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-lg font-bold tracking-tight">
                  Status Kelulusan Siswa SMK (Model BMW Nasional)
                </h3>
                <p className="text-xs text-slate-400">
                  Target Kemendikbudristek: Penyerapan Bekerja, Melanjutkan, Wirausaha &gt; 85%
                </p>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                TOTAL TERSERAP: 95.3%
              </span>
            </div>

            {/* Visual Multi-Segment Bar */}
            <div className="space-y-2 mb-6">
              <div className="h-4 w-full rounded-full overflow-hidden flex bg-slate-800/50 p-0.5">
                <div style={{ width: '68.4%' }} className="bg-emerald-500 h-full rounded-l-full" title="Bekerja: 68.4%" />
                <div style={{ width: '18.2%' }} className="bg-blue-500 h-full" title="Melanjutkan: 18.2%" />
                <div style={{ width: '8.7%' }} className="bg-amber-500 h-full" title="Wirausaha: 8.7%" />
                <div style={{ width: '4.7%' }} className="bg-purple-500 h-full rounded-r-full" title="Masa Tunggu: 4.7%" />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                <span>0%</span>
                <span>50%</span>
                <span>100% Target Nasional</span>
              </div>
            </div>

            {/* BMW Breakdown Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TRACER_STATISTICS.map((item) => (
                <div
                  key={item.category}
                  className={`p-3 rounded-xl border ${
                    isPublicMode ? 'bg-slate-50 border-slate-200' : 'bg-[#161B2B] border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-xs font-semibold">{item.category}</span>
                  </div>
                  <div className="text-xl font-bold font-mono tnum" style={{ color: item.color }}>
                    {item.percentage}%
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {item.count.toLocaleString('id-ID')} siswa
                  </div>
                </div>
              ))}
            </div>

            {/* Regional Table Preview */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Distribusi Penyerapan Wilayah Unggulan
                </span>
                <button
                  onClick={() => onNavigateTab('p3_tamatan')}
                  className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
                >
                  Lihat Seluruh 38 Provinsi <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2">
                {REGIONAL_DATA.slice(0, 3).map((reg) => (
                  <div
                    key={reg.province}
                    className={`flex items-center justify-between p-2.5 rounded-xl text-xs ${
                      isPublicMode ? 'bg-slate-50 border border-slate-100' : 'bg-[#161B2B] border border-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span className="font-semibold">{reg.province}</span>
                      <span className="text-slate-400 hidden sm:inline">({reg.topSector})</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono">
                      <span className="text-slate-300">Gaji Rerata: {reg.averageSalary}</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold">
                        {reg.absorbedRate}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Real-Time Telemetry Stream & Student Highlight */}
        <div className="lg:col-span-5 space-y-6">
          {/* Active Student Quick Card */}
          <div
            className={`rounded-2xl p-5 border relative overflow-hidden ${
              isPublicMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#121A33] border-white/10 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                PROFIL SISWA AKTIF DI SIMULASI
              </span>
              <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                STATUS MAGANG: AKTIF
              </span>
            </div>

            <div className="flex items-center gap-3.5">
              <img
                src={CURRENT_STUDENT.avatar}
                alt={CURRENT_STUDENT.name}
                className="w-14 h-14 rounded-xl object-cover ring-2 ring-blue-500/40"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm sm:text-base font-bold truncate">{CURRENT_STUDENT.name}</h4>
                <div className="text-xs text-slate-400 truncate">{CURRENT_STUDENT.school}</div>
                <div className="text-xs font-mono text-blue-400 mt-0.5">NISN: {CURRENT_STUDENT.nisn}</div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-black/20 border border-white/5 text-xs space-y-1.5 font-mono">
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Industri Penempatan:</span>
                <span className="text-amber-300 font-semibold truncate ml-2">PT Schneider Electric</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Sertifikasi BNSP:</span>
                <span className="text-emerald-400 font-semibold truncate ml-2">Level III KKNI Otomasi</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Hash Merkle:</span>
                <span className="text-slate-400 font-mono text-[10px] truncate ml-2">
                  {CURRENT_STUDENT.merkleRootHash.slice(0, 18)}...
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={() => onNavigateTab('p2_identitas')}
                className="flex-1 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-all text-center"
              >
                Lihat Paspor Lengkap
              </button>
              <button
                onClick={() => onNavigateTab('p1_magang')}
                className="flex-1 py-2 rounded-xl text-xs font-semibold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 transition-all text-center"
              >
                Isi Logbook Magang
              </button>
            </div>
          </div>

          {/* Live Telemetry Stream Card */}
          <div
            className={`rounded-2xl p-5 border ${
              isPublicMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#121A33] border-white/10 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-sm font-bold tracking-tight">Telemetri Lapangan Nasional</h4>
              </div>
              <span className="font-mono text-[10px] text-slate-400">LIVE FEED</span>
            </div>

            <div className="space-y-3">
              {RECENT_TELEMETRY_STREAM.map((stream) => (
                <div
                  key={stream.id}
                  className={`p-3 rounded-xl border transition-all text-xs space-y-1 ${
                    isPublicMode ? 'bg-slate-50 border-slate-200' : 'bg-[#161B2B] border-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-blue-400 font-semibold">{stream.type}</span>
                    <span className="text-slate-400">{stream.time} WIB</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-sans text-xs">{stream.text}</p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-mono text-[10px] text-slate-500">{stream.id}</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {stream.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
