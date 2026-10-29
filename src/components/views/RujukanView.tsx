import React, { useState } from 'react';
import {
  HeartHandshake,
  Calendar,
  MessageSquare,
  ShieldAlert,
  Star,
  CheckCircle2,
  Clock,
  Send,
  HelpCircle,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';
import { PillarPill } from '../PillarPill';
import { COUNSELORS } from '../../data/mockData';
import { CounselingSlot } from '../../types';

interface RujukanViewProps {
  isPublicMode: boolean;
  onOpenBookingModal: (counselor: CounselingSlot) => void;
  bookedSessions: { counselor: string; date: string; time: string; topic: string }[];
}

export const RujukanView: React.FC<RujukanViewProps> = ({
  isPublicMode,
  onOpenBookingModal,
  bookedSessions,
}) => {
  const [reportType, setReportType] = useState('Uang Saku / Honor Tertunda');
  const [reportDetail, setReportDetail] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);

  // Psychometric readiness quiz state
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [q1, setQ1] = useState<number | null>(null);
  const [q2, setQ2] = useState<number | null>(null);
  const [q3, setQ3] = useState<number | null>(null);

  const handleCalculateReadiness = (e: React.FormEvent) => {
    e.preventDefault();
    if (q1 !== null && q2 !== null && q3 !== null) {
      const total = Math.round(((q1 + q2 + q3) / 15) * 100);
      setQuizScore(total);
    }
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportDetail) return;
    setReportSubmitted(true);
    setTimeout(() => {
      alert('Pengaduan Anda telah tercatat dengan enkripsi satu arah dan diteruskan ke Tim Satgas Advokasi BKK & Kemendikbudristek!');
      setReportSubmitted(false);
      setReportDetail('');
    }, 900);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div
        className={`rounded-3xl p-6 sm:p-8 border relative overflow-hidden transition-all ${
          isPublicMode
            ? 'bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-white border-purple-500/30 shadow-sm'
            : 'bg-gradient-to-r from-[#121A33] via-[#21163B] to-[#121A33] border-purple-500/30 shadow-xl'
        }`}
      >
        <div className="absolute right-0 top-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <PillarPill pillar="p4_rujukan" size="md" />
              <span className="font-mono text-xs text-purple-400 font-semibold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                MENTORSHIP, PSYCHOSOCIAL CARE & ADVOCACY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Pusat Rujukan BKK, Konseling Karir & Bantuan Perlindungan Siswa
            </h2>
            <p className={`text-sm ${isPublicMode ? 'text-slate-600' : 'text-slate-300'}`}>
              Layanan pendampingan holistik: bimbingan wawancara kerja, penguatan mental adaptasi industri, uji kesiapan psikometrik, dan kanal pengaduan hak siswa magang secara aman dan terlindungi.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-purple-300 bg-purple-500/15 p-3 rounded-2xl border border-purple-500/30">
            <Clock className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Hotline Satgas Vokasi: 1500-SMK (Bebas Pulsa 24 Jam)</span>
          </div>
        </div>
      </div>

      {/* Booked Sessions Notification (if any) */}
      {bookedSessions.length > 0 && (
        <div className="p-4 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-white space-y-2">
          <div className="flex items-center gap-2 text-purple-300 text-xs font-mono font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>JADWAL KONSULENSI ANDA YANG AKTIF ({bookedSessions.length})</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bookedSessions.map((s, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/30 border border-white/10 text-xs">
                <div className="font-bold text-white">{s.counselor}</div>
                <div className="text-purple-300 text-[11px] font-mono mt-0.5">
                  {s.date} • {s.time}
                </div>
                <div className="text-slate-300 text-[11px] mt-1 italic">"{s.topic}"</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Counselor Grid */}
      <div
        className={`rounded-2xl p-6 border ${
          isPublicMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#121A33] border-white/10 shadow-lg'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
          <div>
            <h3 className="text-lg font-bold tracking-tight">
              Pakar Karir & Konselor Vokasi Tersertifikasi
            </h3>
            <p className="text-xs text-slate-400">
              Pilih mentor industri atau psikolog karir untuk bimbingan langsung tatap muka daring
            </p>
          </div>
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-purple-500/15 text-purple-400 border border-purple-500/30">
            LAYANAN 100% BEBAS BIAYA
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COUNSELORS.map((c) => (
            <div
              key={c.id}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                isPublicMode ? 'bg-slate-50 border-slate-200' : 'bg-[#161B2B] border-white/5 hover:border-purple-400/30'
              }`}
            >
              <div>
                <div className="flex items-start gap-3.5 mb-3">
                  <img
                    src={c.avatar}
                    alt={c.counselorName}
                    className="w-14 h-14 rounded-xl object-cover ring-2 ring-purple-500/30 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded font-bold">
                      {c.specialization}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1 truncate">{c.counselorName}</h4>
                    <div className="text-xs text-slate-400 truncate">{c.title}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-4 bg-black/20 p-2.5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-1 text-amber-300 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{c.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{c.sessionsConducted} Sesi Selesai</span>
                  <span>•</span>
                  <span className="text-purple-300">{c.affiliation}</span>
                </div>

                <div className="text-xs text-slate-400 mb-4">
                  <span className="font-semibold text-slate-300">Hari Layanan:</span>{' '}
                  {c.availableDays.join(', ')}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400">● Slot Minggu Ini Tersedia</span>
                <button
                  onClick={() => onOpenBookingModal(c)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white shadow-md shadow-purple-500/20 active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reservasi Sesi</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Grid: Psychometric Readiness Quiz & Intern Grievance Hotline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left (6 cols): Psychometric Vocational Readiness Self-Check */}
        <div
          className={`lg:col-span-6 rounded-2xl p-6 border space-y-4 ${
            isPublicMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#121A33] border-white/10 shadow-lg'
          }`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Cek Cepat Kesiapan Mental Kerja (Psikometrik)</span>
            </h3>
            <span className="font-mono text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
              SELF-ASSESSMENT
            </span>
          </div>

          <p className="text-xs text-slate-400">
            Jawab 3 parameter sikap kerja untuk mengetahui tingkat kesiapan memasuki budaya industri:
          </p>

          <form onSubmit={handleCalculateReadiness} className="space-y-3 text-xs">
            {/* Q1 */}
            <div className="p-3 rounded-xl bg-black/20 border border-white/5 space-y-1.5">
              <div className="text-slate-200 font-semibold">
                1. Kesiapan bekerja di bawah SOP ketat & pergantian shift:
              </div>
              <div className="grid grid-cols-3 gap-2 text-center font-mono">
                {[
                  { label: 'Butuh Bimbingan', val: 2 },
                  { label: 'Cukup Siap', val: 4 },
                  { label: 'Sangat Siap (Prima)', val: 5 },
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.val}
                    onClick={() => setQ1(opt.val)}
                    className={`py-1.5 px-2 rounded-lg border text-[11px] transition-all ${
                      q1 === opt.val
                        ? 'bg-purple-600 text-white border-purple-400 font-bold'
                        : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q2 */}
            <div className="p-3 rounded-xl bg-black/20 border border-white/5 space-y-1.5">
              <div className="text-slate-200 font-semibold">
                2. Keterbukaan menerima kritik evaluasi dari supervisor lapangan:
              </div>
              <div className="grid grid-cols-3 gap-2 text-center font-mono">
                {[
                  { label: 'Rentan Tertekan', val: 2 },
                  { label: 'Bisa Menerima', val: 4 },
                  { label: 'Resilien & Adaptif', val: 5 },
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.val}
                    onClick={() => setQ2(opt.val)}
                    className={`py-1.5 px-2 rounded-lg border text-[11px] transition-all ${
                      q2 === opt.val
                        ? 'bg-purple-600 text-white border-purple-400 font-bold'
                        : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q3 */}
            <div className="p-3 rounded-xl bg-black/20 border border-white/5 space-y-1.5">
              <div className="text-slate-200 font-semibold">
                3. Kemampuan bekerja sama dalam regu lintas divisi pabrik/kantor:
              </div>
              <div className="grid grid-cols-3 gap-2 text-center font-mono">
                {[
                  { label: 'Sering Ragu', val: 2 },
                  { label: 'Koperatif', val: 4 },
                  { label: 'Pemimpin Tim', val: 5 },
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.val}
                    onClick={() => setQ3(opt.val)}
                    className={`py-1.5 px-2 rounded-lg border text-[11px] transition-all ${
                      q3 === opt.val
                        ? 'bg-purple-600 text-white border-purple-400 font-bold'
                        : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={q1 === null || q2 === null || q3 === null}
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-semibold text-xs shadow-md shadow-purple-500/25 transition-all"
            >
              Hitung Skor Kesiapan Vokasi
            </button>

            {quizScore !== null && (
              <div className="p-4 rounded-xl bg-purple-500/20 border border-purple-500/40 text-center space-y-1 animate-fade-in">
                <span className="text-[11px] font-mono text-purple-300 uppercase">
                  SKOR KESIAPAN PSIKOMETRIK ANDA:
                </span>
                <div className="text-3xl font-extrabold text-white font-mono">{quizScore}%</div>
                <p className="text-xs text-slate-200">
                  {quizScore >= 80
                    ? '🎉 Luar biasa! Sikap kerja Anda sangat siap memasuki atmosfer pabrik presisi / kantor multinasional.'
                    : '💡 Baik! Disarankan mengikuti sesi konseling adaptasi budaya kerja bersama BKK.'}
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Right (6 cols): Anonymous Intern Advocacy & Grievance Form */}
        <div
          className={`lg:col-span-6 rounded-2xl p-6 border space-y-4 ${
            isPublicMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#121A33] border-white/10 shadow-lg'
          }`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold tracking-tight flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Kanal Advokasi & Pengaduan Hak Siswa Magang</span>
            </h3>
            <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
              ENKRIPSI PRIVAT
            </span>
          </div>

          <p className="text-xs text-slate-400">
            Dipersiapkan khusus untuk melindungi siswa dari pelanggaran jam kerja (overtime tidak wajar), kendala uang saku, perlakuan tidak adil, atau bahaya keselamatan kerja tanpa APD.
          </p>

          <form onSubmit={handleReportSubmit} className="space-y-3 text-xs">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Kategori Masalah Lapangan
              </label>
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="w-full h-10 px-3 rounded-xl bg-[#0B1020] border border-white/15 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                <option value="Uang Saku / Honor Tertunda">Uang Saku / Stipend Tertunda</option>
                <option value="Jam Kerja Berlebih (Overtime Melebihi Aturan Magang)">Jam Kerja Berlebih Tanpa Izin</option>
                <option value="Tidak Diberikan APD / Bahaya K3 Lingkungan Kerja">Tidak Diberikan APD / Bahaya K3</option>
                <option value="Tugas Tidak Sesuai Kejuruan / Eksploitasi">Tugas Tidak Sesuai Kejuruan / Linieritas</option>
                <option value="Kenyamanan & Perlakuan di Tempat Kerja">Kenyamanan & Perlakuan di Tempat Kerja</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Uraian Kejadian / Kronologi Singkat
              </label>
              <textarea
                required
                rows={4}
                value={reportDetail}
                onChange={(e) => setReportDetail(e.target.value)}
                placeholder="Tuliskan secara objektif tanggal kejadian, nama divisi / tempat praktik, serta kondisi yang dialami..."
                className="w-full p-3 rounded-xl bg-[#0B1020] border border-white/15 text-xs text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>

            <div className="p-3 rounded-xl bg-black/20 border border-white/5 text-[11px] text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Identitas pelapor dijamin anonim di hadapan industri, ditangani langsung tim Satgas Vokasi Provinsi.</span>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Kirim Laporan Pengaduan Terproteksi</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
