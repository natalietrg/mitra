import React, { useState } from 'react';
import {
  TrendingUp,
  BarChart3,
  MapPin,
  Download,
  Filter,
  CheckCircle2,
  PieChart,
  DollarSign,
  Briefcase,
  GraduationCap,
  Store,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import { PillarPill } from '../PillarPill';
import { TRACER_STATISTICS, REGIONAL_DATA } from '../../data/mockData';

interface TamatanViewProps {
  isPublicMode: boolean;
}

export const TamatanView: React.FC<TamatanViewProps> = ({ isPublicMode }) => {
  const [selectedMajor, setSelectedMajor] = useState<string>('Semua Kejuruan');
  const [downloadingReport, setDownloadingReport] = useState(false);

  const majors = [
    'Semua Kejuruan',
    'Teknik Otomasi & Mekatronika',
    'Rekayasa Perangkat Lunak & TIK',
    'Teknik Kendaraan Ringan & Otomotif',
    'Energi Terbarukan & Kelistrikan',
    'Logistik & Bisnis Digital',
  ];

  const handleDownload = () => {
    setDownloadingReport(true);
    setTimeout(() => {
      setDownloadingReport(false);
      alert('Laporan Komprehensif Tracer Study Vokasi Nasional 2025 (PDF) berhasil diunduh!');
    }, 900);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div
        className={`rounded-3xl p-6 sm:p-8 border relative overflow-hidden transition-all ${
          isPublicMode
            ? 'bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-white border-emerald-500/30 shadow-sm'
            : 'bg-gradient-to-r from-[#121A33] via-[#10243B] to-[#121A33] border-emerald-500/30 shadow-xl'
        }`}
      >
        <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <PillarPill pillar="p3_tamatan" size="md" />
              <span className="font-mono text-xs text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                OUTCOME ANALYTICS & BMW MODEL
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Sistem Tracer Study Tamatan SMK & Akuntabilitas Serapan DUDI
            </h2>
            <p className={`text-sm ${isPublicMode ? 'text-slate-600' : 'text-slate-300'}`}>
              Evaluasi longitudinal penyerapan lulusan pendidikan vokasi. Melacak status Bekerja, Melanjutkan studi, Wirausaha (BMW), keselarasan kompetensi (Link and Match), serta masa tunggu kerja.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleDownload}
              disabled={downloadingReport}
              className="px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{downloadingReport ? 'Menghasilkan Laporan...' : 'Unduh Rekap Eksekutif 2025'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Major Filter Selector */}
      <div
        className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
          isPublicMode ? 'bg-white border-slate-200' : 'bg-[#121A33] border-white/10'
        }`}
      >
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
          <Filter className="w-4 h-4 text-emerald-400" />
          <span>Filter Kluster Kejuruan:</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {majors.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMajor(m)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedMajor === m
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : isPublicMode
                  ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  : 'bg-[#161B2B] text-slate-300 hover:bg-[#1A2444] border border-white/5'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Pillars of BMW Telemetry Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {TRACER_STATISTICS.map((stat) => {
          const getIcon = () => {
            switch (stat.category) {
              case 'Bekerja':
                return <Briefcase className="w-5 h-5 text-emerald-400" />;
              case 'Melanjutkan':
                return <GraduationCap className="w-5 h-5 text-blue-400" />;
              case 'Wirausaha':
                return <Store className="w-5 h-5 text-amber-400" />;
              case 'Masa Tunggu':
                return <Clock className="w-5 h-5 text-purple-400" />;
            }
          };

          return (
            <div
              key={stat.category}
              className={`rounded-2xl p-5 border transition-all ${
                isPublicMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#121A33] border-white/10 shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-black/20 border border-white/5">{getIcon()}</div>
                <span
                  className="font-mono text-xs font-bold px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: `${stat.color}15`,
                    color: stat.color,
                    borderColor: `${stat.color}30`,
                  }}
                >
                  {stat.percentage}%
                </span>
              </div>

              <div className="text-xl font-bold font-mono tnum text-white">{stat.count.toLocaleString('id-ID')}</div>
              <div className="text-xs font-semibold text-slate-300 mt-0.5">Siswa ({stat.category})</div>

              <p className="text-[11px] text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                {stat.description}
              </p>

              {/* Sub categories */}
              <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                {stat.subCategories.slice(0, 2).map((sub) => (
                  <div key={sub.name} className="flex justify-between text-[10px] font-mono">
                    <span className="text-slate-400 truncate pr-2">{sub.name}</span>
                    <span className="text-white font-bold">{sub.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Dive Bento: Regional Heatmap & Link and Match Alignment */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left (7 cols): Regional Tracer Table */}
        <div
          className={`lg:col-span-7 rounded-2xl p-6 border ${
            isPublicMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#121A33] border-white/10 shadow-lg'
          }`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h3 className="text-base font-bold tracking-tight">
                Peringkat Penyerapan & Standar Upah Lulusan per Wilayah
              </h3>
              <p className="text-xs text-slate-400">
                Data verifikasi slip gaji & kontrak kerja resmi DUDI di 6 koridor industri utama
              </p>
            </div>
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              UPDATE Q3-2025
            </span>
          </div>

          <div className="mt-4 space-y-2.5">
            {REGIONAL_DATA.map((reg, index) => (
              <div
                key={reg.province}
                className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs ${
                  isPublicMode ? 'bg-slate-50 border-slate-200' : 'bg-[#161B2B] border-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-black/30 font-mono text-xs text-slate-400 flex items-center justify-center font-bold">
                    #{index + 1}
                  </span>
                  <div>
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span>{reg.province}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{reg.topSector}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 font-mono justify-between sm:justify-end">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block">RATA-RATA GAJI</span>
                    <span className="text-emerald-400 font-bold">{reg.averageSalary}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block">TINGKAT SERAPAN</span>
                    <span className="text-white font-bold">{reg.absorbedRate}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right (5 cols): Alignment Radar & Employer Feedback */}
        <div
          className={`lg:col-span-5 rounded-2xl p-6 border space-y-5 ${
            isPublicMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#121A33] border-white/10 shadow-lg'
          }`}
        >
          <div>
            <h3 className="text-base font-bold tracking-tight">
              Indeks Keselarasan Kurikulum Vokasi (Link & Match)
            </h3>
            <p className="text-xs text-slate-400">
              Survei kepuasan 3.410 mitra industri terhadap etos kerja & kecakapan teknis
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">Disiplin & Kepatuhan K3 Industri:</span>
                <span className="text-emerald-400 font-bold">94.8%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '94.8%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">Kemampuan Pemrograman PLC & Hardware:</span>
                <span className="text-blue-400 font-bold">89.2%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '89.2%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">Adaptasi Bahasa Teknis & Komunikasi Kerja:</span>
                <span className="text-amber-400 font-bold">82.5%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '82.5%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">Tingkat Retensi Setelah Masa Percobaan (6 Bln):</span>
                <span className="text-purple-400 font-bold">91.4%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '91.4%' }} />
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 text-xs space-y-1">
            <span className="font-mono text-[10px] text-emerald-400 font-bold">
              KESIMPULAN AUDIT TRACER:
            </span>
            <p className="text-slate-300 leading-relaxed font-sans text-xs">
              Model BMW membuktikan 95.3% lulusan SMK tidak menganggur, melainkan produktif dalam siklus ekonomi industri, rantai pasok teknologi, atau jenjang sarjana terapan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
