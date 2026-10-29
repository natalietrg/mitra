import React, { useState } from 'react';
import { X, Search, ShieldCheck, CheckCircle2, AlertCircle, Copy, Check, FileText, QrCode } from 'lucide-react';
import { CURRENT_STUDENT } from '../../data/mockData';

interface PublicVerifierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PublicVerifierModal: React.FC<PublicVerifierModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState('3204910284');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifiedResult, setVerifiedResult] = useState<any>(CURRENT_STUDENT);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      if (query.trim() === '3204910284' || query.toLowerCase().includes('0x7e8b') || query.toLowerCase().includes('raditya')) {
        setVerifiedResult(CURRENT_STUDENT);
      } else {
        // Return simulated valid response for any valid format NISN
        setVerifiedResult({
          ...CURRENT_STUDENT,
          nisn: query.length === 10 ? query : '3204910284',
          name: query.length === 10 ? 'Ahmad Fauzi Rahman' : query,
          merkleRootHash: '0x' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
        });
      }
    }, 600);
  };

  const handleCopyHash = () => {
    if (verifiedResult?.merkleRootHash) {
      navigator.clipboard.writeText(verifiedResult.merkleRootHash);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-2xl rounded-3xl bg-[#121A33] border border-white/15 text-[#DEE1F9] p-6 sm:p-8 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-blue-400 font-semibold uppercase tracking-wider">
                REGISTRI KRIPTOGRAFIS NASIONAL
              </span>
              <h3 className="text-xl font-bold text-white">Verifikator Keaslian Ijazah & SKKNI Siswa</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleVerify} className="mt-5">
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Masukkan Nomor Induk Siswa Nasional (NISN), NIK, atau Hash Sertifikat:
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Contoh: 3204910284 atau 0x7e8b91a24d081f938c5b..."
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#0B1020] border border-white/15 text-sm font-mono text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
            <button
              type="submit"
              disabled={isVerifying}
              className="px-5 h-11 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-500/25 active:scale-95 transition-all flex items-center gap-2"
            >
              {isVerifying ? (
                <span>Memvalidasi...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verifikasi</span>
                </>
              )}
            </button>
          </div>
          <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
            <span>Contoh cepat:</span>
            <button
              type="button"
              onClick={() => setQuery('3204910284')}
              className="text-blue-400 hover:underline"
            >
              Raditya (3204910284)
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setQuery('0x7e8b91a24d081f938c5b610c3ea1d0928f11ec49bc9842f132e094ba4521dd98')}
              className="text-blue-400 hover:underline truncate max-w-[150px]"
            >
              Merkle Root
            </button>
          </div>
        </form>

        {/* Verification Card Result */}
        {verifiedResult && (
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#0B1020] border border-emerald-500/30 space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-emerald-400 font-mono flex items-center gap-2">
                    SERTIFIKASI TERDAFTAR VALID DI REGISTRI NASIONAL
                  </div>
                  <div className="text-xs text-slate-400">
                    Diterbitkan oleh LSP P1 & Terakreditasi Badan Nasional Sertifikasi Profesi (BNSP)
                  </div>
                </div>
              </div>
              <span className="font-mono text-[10px] bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-md border border-emerald-500/30">
                STATUS: OTENTIK
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <span className="text-slate-400 text-[11px] block">NAMA LENGKAP SISWA</span>
                <span className="text-white text-sm font-bold font-sans block">{verifiedResult.name}</span>
                <span className="text-blue-300">NISN: {verifiedResult.nisn}</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <span className="text-slate-400 text-[11px] block">ASAL INSTITUSI SMK</span>
                <span className="text-white font-semibold font-sans block">{verifiedResult.school}</span>
                <span className="text-slate-300 font-sans">{verifiedResult.major}</span>
              </div>
            </div>

            {/* Cryptographic hash proof */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-slate-400 text-[11px]">MERKLE ROOT HASH (SHA-256)</span>
                <button
                  type="button"
                  onClick={handleCopyHash}
                  className="flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300 font-mono"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Tersalin' : 'Salin Hash'}</span>
                </button>
              </div>
              <div className="font-mono text-[11px] text-blue-300 break-all select-all bg-black/30 p-2 rounded border border-white/5">
                {verifiedResult.merkleRootHash}
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1">
                <span>Waktu Stempel Waktu (Timestamp): {verifiedResult.verifiedAt}</span>
                <span className="text-emerald-400 font-semibold">Tanda Tangan Digital Terkonfirmasi</span>
              </div>
            </div>

            {/* Verified Units */}
            <div>
              <div className="text-xs font-bold text-slate-300 mb-2">
                Unit Kompetensi Resmi yang Divalidasi:
              </div>
              <div className="space-y-1.5">
                {verifiedResult.competencies.map((c: any) => (
                  <div
                    key={c.code}
                    className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 text-xs"
                  >
                    <div className="flex items-center gap-2 truncate pr-2">
                      <span className="font-mono text-[10px] text-blue-400 font-bold shrink-0">{c.code}</span>
                      <span className="text-slate-200 truncate">{c.title}</span>
                    </div>
                    <span className="font-mono text-[11px] text-emerald-400 font-semibold shrink-0">
                      {c.grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors"
          >
            Tutup Pemeriksaan
          </button>
        </div>
      </div>
    </div>
  );
};
