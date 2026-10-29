import React, { useState } from 'react';
import {
  Briefcase,
  Plus,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Building2,
  ChevronRight,
  Filter,
  DollarSign,
  FileCheck,
} from 'lucide-react';
import { PillarPill } from '../PillarPill';
import { APPRENTICESHIP_SLOTS, CURRENT_STUDENT, INITIAL_LOGBOOKS } from '../../data/mockData';
import { ApprenticeshipSlot, LogbookEntry } from '../../types';

interface MagangViewProps {
  isPublicMode: boolean;
  onOpenLogbookModal: () => void;
  logbooks: LogbookEntry[];
  onApproveLogbook: (id: string) => void;
}

export const MagangView: React.FC<MagangViewProps> = ({
  isPublicMode,
  onOpenLogbookModal,
  logbooks,
  onApproveLogbook,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [appliedSlotId, setAppliedSlotId] = useState<string | null>(null);

  const categories = ['Semua', 'Manufaktur & Otomasi', 'Teknologi Informasi & Digital', 'Elektronika & Robotika', 'Energi Terbarukan'];

  const filteredSlots = selectedCategory === 'Semua'
    ? APPRENTICESHIP_SLOTS
    : APPRENTICESHIP_SLOTS.filter((s) => s.companyCategory === selectedCategory);

  const handleApply = (id: string) => {
    setAppliedSlotId(id);
    setTimeout(() => {
      setAppliedSlotId(null);
      alert('Pendaftaran magang berhasil diajukan ke BKK Sekolah & Tim HR Industri!');
    }, 800);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div
        className={`rounded-3xl p-6 sm:p-8 border relative overflow-hidden transition-all ${
          isPublicMode
            ? 'bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-white border-amber-500/30 shadow-sm'
            : 'bg-gradient-to-r from-[#121A33] via-[#1A223E] to-[#121A33] border-amber-500/30 shadow-xl'
        }`}
      >
        <div className="absolute right-0 top-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <PillarPill pillar="p1_magang" size="md" />
              <span className="font-mono text-xs text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                TAHAP EKSEKUSI & PRAKTIK INDUSTRI
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Portal Magang Industri (DUDI) & Presensi Geofence
            </h2>
            <p className={`text-sm ${isPublicMode ? 'text-slate-600' : 'text-slate-300'}`}>
              Platform pencatatan logbook berbasis kompetensi riil, verifikasi presensi geofence di lokasi industri, serta kuota penempatan resmi mitra Dunia Usaha dan Dunia Industri.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onOpenLogbookModal}
              className="px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white shadow-lg shadow-amber-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Isi Logbook & Presensi Hari Ini</span>
            </button>
          </div>
        </div>
      </div>

      {/* Current Active Placement Status (Student Perspective) */}
      <div
        className={`rounded-2xl p-6 border ${
          isPublicMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#121A33] border-white/10 shadow-lg'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded font-bold">
                  PENEMPATAN AKTIF
                </span>
                <span className="text-xs text-slate-400 font-mono">ID: MTR-MAGANG-2025-088</span>
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {CURRENT_STUDENT.currentCompany}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <div className="p-2.5 rounded-xl bg-black/20 border border-white/5 text-slate-300">
              <span className="text-slate-400 block text-[10px]">MENTOR INDUSTRI</span>
              <span className="font-semibold text-white">{CURRENT_STUDENT.mentorName}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-black/20 border border-white/5 text-slate-300">
              <span className="text-slate-400 block text-[10px]">KEPATUHAN K3</span>
              <span className="font-semibold text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Zero Accident
              </span>
            </div>
          </div>
        </div>

        {/* Logbook Stream */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold tracking-tight flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-amber-400" />
              <span>Jurnal Aktivitas & Penilaian Lapangan ({logbooks.length} Catatan)</span>
            </h4>
            <span className="text-xs text-slate-400 font-mono">
              Status Sinkronisasi Server Industri: Terverifikasi
            </span>
          </div>

          <div className="space-y-3">
            {logbooks.map((log) => {
              const isApproved = log.status === 'Disetujui Mentor';
              return (
                <div
                  key={log.id}
                  className={`p-4 rounded-xl border transition-all ${
                    isPublicMode ? 'bg-slate-50 border-slate-200' : 'bg-[#161B2B] border-white/5'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 mb-2 border-b border-white/5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-amber-400">{log.id}</span>
                        <span className="text-xs text-slate-400 font-mono">• {log.date}</span>
                        <span className="text-xs font-mono text-slate-400">• {log.hoursWorked} Jam</span>
                      </div>
                      <h5 className="text-sm font-bold text-white mt-1">{log.activityTitle}</h5>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold flex items-center gap-1.5 border ${
                          isApproved
                            ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                            : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                        }`}
                      >
                        {isApproved ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" /> Disetujui Mentor
                          </>
                        ) : (
                          <>
                            <Clock className="w-3.5 h-3.5" /> Menunggu Validasi
                          </>
                        )}
                      </span>

                      {!isApproved && (
                        <button
                          onClick={() => onApproveLogbook(log.id)}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-xs"
                          title="Simulasi persetujuan oleh mentor industri"
                        >
                          Tandatangani (Mentor)
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
                    {log.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400 pt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-semibold">{log.competencyCovered}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        {log.geoTag}
                      </span>
                      <span className="text-emerald-400">APD K3: Terpenuhi</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Industry Placement Vacancies & Quota Bento */}
      <div
        className={`rounded-2xl p-6 border ${
          isPublicMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#121A33] border-white/10 shadow-lg'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold tracking-tight">
              Bursa Kuota Magang Industri Rekanan (DUDI)
            </h3>
            <p className="text-xs text-slate-400">
              Lowongan resmi terintegrasi dengan BKK Nasional & bersertifikasi ISO 45001 / K3
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : isPublicMode
                    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    : 'bg-[#161B2B] text-slate-300 hover:bg-[#1A2444] border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Vacancies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSlots.map((slot) => {
            const isFull = slot.quotaFilled >= slot.quotaTotal;
            const pct = Math.round((slot.quotaFilled / slot.quotaTotal) * 100);

            return (
              <div
                key={slot.id}
                className={`p-5 rounded-2xl border transition-all relative overflow-hidden flex flex-col justify-between ${
                  isPublicMode ? 'bg-slate-50 border-slate-200' : 'bg-[#161B2B] border-white/5 hover:border-amber-400/30'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={slot.companyLogo}
                        alt={slot.companyName}
                        className="w-12 h-12 rounded-xl object-cover ring-1 ring-white/10"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-[10px] text-amber-400 font-bold">
                            {slot.companyCategory}
                          </span>
                          {slot.verifiedBadge && (
                            <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                              <ShieldCheck className="w-3 h-3" /> Mitra Utama
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-bold text-white">{slot.companyName}</h4>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] text-amber-300 font-bold px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                      {slot.stipendAmount}
                    </span>
                  </div>

                  <h5 className="text-sm font-semibold text-slate-200 mb-2">{slot.roleTitle}</h5>

                  <div className="space-y-1.5 text-xs text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{slot.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">Standar K3: {slot.k3Standard}</span>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {slot.requiredSkills.map((sk) => (
                      <span
                        key={sk}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/30 text-slate-300 border border-white/5"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quota Progress & Action */}
                <div className="pt-3 border-t border-white/5">
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-400">Kuota Terisi:</span>
                    <span className="text-amber-400 font-bold">
                      {slot.quotaFilled} / {slot.quotaTotal} ({pct}%)
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-3">
                    <div
                      style={{ width: `${pct}%` }}
                      className={`h-full rounded-full ${
                        pct > 90 ? 'bg-amber-500' : 'bg-emerald-500'
                      }`}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-mono">{slot.intakePeriod}</span>
                    <button
                      onClick={() => handleApply(slot.id)}
                      disabled={isFull || appliedSlotId === slot.id}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                        isFull
                          ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                          : appliedSlotId === slot.id
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20 active:scale-95'
                      }`}
                    >
                      {appliedSlotId === slot.id ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Memproses...
                        </>
                      ) : isFull ? (
                        'Kuota Penuh'
                      ) : (
                        <>
                          <span>Ajukan Penempatan</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
