import React, { useState } from 'react';
import {
  Award,
  ShieldCheck,
  QrCode,
  Copy,
  Check,
  ExternalLink,
  Download,
  Share2,
  FileBadge,
  Sparkles,
  Lock,
  Layers,
  KeyRound,
} from 'lucide-react';
import { PillarPill } from '../PillarPill';
import { CURRENT_STUDENT } from '../../data/mockData';

interface IdentitasViewProps {
  isPublicMode: boolean;
  onOpenVerifier: () => void;
}

export const IdentitasView: React.FC<IdentitasViewProps> = ({
  isPublicMode,
  onOpenVerifier,
}) => {
  const [copiedHash, setCopiedHash] = useState(false);
  const [activeTab, setActiveTab] = useState<'card' | 'proof' | 'units'>('card');
  const [qrZoomed, setQrZoomed] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CURRENT_STUDENT.merkleRootHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const handleDownloadCert = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert('Sertifikat Paspor Kriptografis SKKNI berformat PDF-JSON (Verifiable Credential) berhasil diunduh!');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Pillar 2 Header */}
      <div
        className={`rounded-3xl p-6 sm:p-8 border relative overflow-hidden transition-all ${
          isPublicMode
            ? 'bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-white border-blue-500/30 shadow-sm'
            : 'bg-gradient-to-r from-[#121A33] via-[#152044] to-[#121A33] border-blue-500/30 shadow-xl'
        }`}
      >
        <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <PillarPill pillar="p2_identitas" size="md" />
              <span className="font-mono text-xs text-blue-400 font-semibold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                VERIFIABLE CREDENTIAL & TRUST PROTOCOL
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Paspor Vokasi Digital & Sertifikasi Kriptografis SKKNI
            </h2>
            <p className={`text-sm ${isPublicMode ? 'text-slate-600' : 'text-slate-300'}`}>
              Identitas digital terdesentralisasi bagi lulusan SMK Indonesia. Menggunakan standar W3C Verifiable Credentials dan ditandatangani secara kriptografis oleh Badan Nasional Sertifikasi Profesi (BNSP).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleDownloadCert}
              disabled={downloading}
              className="px-5 py-3 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? 'Menyiapkan Berkas...' : 'Unduh Paspor Digital (JSON-LD)'}</span>
            </button>
            <button
              onClick={onOpenVerifier}
              className={`px-4 py-3 rounded-xl font-semibold text-sm border transition-all flex items-center justify-center gap-2 ${
                isPublicMode
                  ? 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                  : 'bg-[#1A2444] border-white/10 text-white hover:bg-[#25293A]'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Verifikasi Publik</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Cryptographic Card + Detail Inspection */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (5 cols): Verifiable Credential Smart Card */}
        <div className="lg:col-span-5 space-y-4">
          <div
            className="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#1E294B] via-[#16203B] to-[#0D1326] border border-blue-500/40 shadow-2xl relative overflow-hidden text-white"
            style={{
              boxShadow: '0 0 35px -5px rgba(59, 130, 246, 0.25)',
            }}
          >
            {/* Holographic lines watermark */}
            <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

            {/* Smart Card Chip & Gov Header */}
            <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-7 rounded bg-amber-400/90 border border-amber-300 flex items-center justify-center shadow-inner">
                  <div className="w-8 h-5 border border-amber-800/40 rounded-xs grid grid-cols-2 gap-0.5 p-0.5">
                    <div className="bg-amber-600/30 rounded-xs" />
                    <div className="bg-amber-600/30 rounded-xs" />
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-blue-300 font-bold">
                    REPUBLIK INDONESIA
                  </div>
                  <div className="text-xs font-bold tracking-tight">PASPOR VOKASI NASIONAL</div>
                </div>
              </div>

              <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold">
                ● STATUS: VERIFIED
              </span>
            </div>

            {/* Card Body */}
            <div className="relative z-10 mt-5 flex items-start gap-4">
              <img
                src={CURRENT_STUDENT.avatar}
                alt={CURRENT_STUDENT.name}
                className="w-20 h-24 rounded-xl object-cover ring-2 ring-blue-400/60 shadow-lg"
              />
              <div className="flex-1 min-w-0 space-y-1">
                <span className="font-mono text-[10px] text-blue-300 block">NAMA PEMILIK:</span>
                <h3 className="text-base font-extrabold truncate">{CURRENT_STUDENT.name}</h3>
                <div className="font-mono text-xs text-slate-300">
                  NISN: <span className="text-blue-300 font-bold">{CURRENT_STUDENT.nisn}</span>
                </div>
                <div className="font-mono text-[11px] text-slate-400 truncate">
                  NIK: {CURRENT_STUDENT.nik.slice(0, 8)}******
                </div>
                <div className="text-xs text-slate-300 truncate pt-1">
                  {CURRENT_STUDENT.school}
                </div>
              </div>
            </div>

            {/* Card Footer Metrics */}
            <div className="relative z-10 mt-5 pt-4 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">KUALIFIKASI STANDAR:</span>
                <span className="text-amber-300 font-bold text-xs truncate max-w-[200px]">
                  {CURRENT_STUDENT.skkniLevel}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">LEMBAGA SERTIFIKASI:</span>
                <span className="text-slate-200 font-semibold text-xs">LSP P1 SMKN 1 Cimahi / BNSP</span>
              </div>
            </div>

            {/* Cryptographic Hash Bar */}
            <div className="relative z-10 mt-4 p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between text-[10px] font-mono">
              <div className="truncate pr-2 text-slate-400">
                <span className="text-blue-400 font-bold">MERKLE:</span> {CURRENT_STUDENT.merkleRootHash.slice(0, 22)}...
              </div>
              <button
                onClick={handleCopy}
                className="text-blue-400 hover:text-white flex items-center gap-1 shrink-0"
              >
                {copiedHash ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedHash ? 'Tersalin' : 'Salin'}</span>
              </button>
            </div>
          </div>

          {/* Quick QR Scanner & Verification Link */}
          <div
            className={`p-5 rounded-2xl border flex items-center gap-4 ${
              isPublicMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#121A33] border-white/10 shadow-lg'
            }`}
          >
            <div className="p-2 rounded-xl bg-white text-slate-950 shadow-inner shrink-0">
              {/* Synthetic Clean QR Code Pattern */}
              <div className="w-16 h-16 bg-slate-900 rounded p-1 flex flex-col justify-between">
                <div className="flex justify-between">
                  <div className="w-4 h-4 bg-white rounded-xs p-0.5"><div className="w-full h-full bg-slate-900 rounded-xs" /></div>
                  <div className="w-4 h-4 bg-white rounded-xs p-0.5"><div className="w-full h-full bg-slate-900 rounded-xs" /></div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-xs" />
                </div>
                <div className="flex justify-between">
                  <div className="w-4 h-4 bg-white rounded-xs p-0.5"><div className="w-full h-full bg-slate-900 rounded-xs" /></div>
                  <div className="w-2 h-2 bg-white rounded-xs" />
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                <QrCode className="w-3.5 h-3.5 text-blue-400" />
                <span>QR Validasi Langsung HRD</span>
              </h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                Pindai QR ini melalui kamera HP untuk mengakses halaman verifikasi publik tanpa login.
              </p>
              <button
                onClick={onOpenVerifier}
                className="mt-2 text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 font-mono"
              >
                Uji Coba Validasi <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): SKKNI Competency Units & Cryptographic Inspection */}
        <div className="lg:col-span-7 space-y-6">
          <div
            className={`rounded-2xl p-6 border ${
              isPublicMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#121A33] border-white/10 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="text-lg font-bold tracking-tight">
                  Unit Kompetensi Resmi SKKNI & Penilaian LSP
                </h3>
                <p className="text-xs text-slate-400">
                  Daftar kompetensi kerja nasional terakreditasi Badan Nasional Sertifikasi Profesi (BNSP)
                </p>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30">
                4/4 TERVERIFIKASI
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {CURRENT_STUDENT.competencies.map((comp) => (
                <div
                  key={comp.code}
                  className={`p-4 rounded-xl border transition-all ${
                    isPublicMode ? 'bg-slate-50 border-slate-200' : 'bg-[#161B2B] border-white/5'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 mb-2 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                        {comp.code}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">Divalidasi: {comp.verifiedDate}</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded border border-emerald-500/30">
                      {comp.grade}
                    </span>
                  </div>

                  <h5 className="text-sm font-semibold text-white mb-2">{comp.title}</h5>

                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      Asesor: {comp.verifiedBy}
                    </span>
                    <span className="text-emerald-400 font-semibold">Tercatat di SAKTI BNSP</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Cryptographic Merkle Node Inspection */}
            <div className="mt-6 p-4 rounded-xl bg-black/30 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-slate-300 flex items-center gap-1.5">
                  <KeyRound className="w-4 h-4 text-amber-400" />
                  Struktur Bukti Merkle Tree (Anti-Tamper Layer)
                </span>
                <span className="font-mono text-[10px] text-emerald-400 font-bold">
                  SHA-256 CONGRUENT
                </span>
              </div>

              <div className="space-y-1.5 text-[11px] font-mono text-slate-400">
                <div className="p-2 rounded bg-black/40 border border-white/5 flex justify-between">
                  <span>Root Signature:</span>
                  <span className="text-blue-300 truncate max-w-[280px]">
                    BNSP-SIGN-ED25519: 9df28a7c6b54e3d1...
                  </span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5 flex justify-between">
                  <span>Registri Dapodik:</span>
                  <span className="text-emerald-400 font-semibold">NISN MATCH: 3204910284</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5 flex justify-between">
                  <span>Stempel Waktu NTP Vokasi:</span>
                  <span className="text-slate-300">2025-10-24T09:14:22+07:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
