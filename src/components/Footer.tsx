import React from 'react';
import { ShieldCheck, Heart, ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  isPublicMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isPublicMode }) => {
  return (
    <footer
      className={`mt-16 border-t transition-colors duration-200 py-12 ${
        isPublicMode
          ? 'bg-slate-100 border-slate-200 text-slate-600'
          : 'bg-[#080D1D] border-white/10 text-slate-400'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Purpose */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-xs">
                MTR
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">MITRA VOKASI</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Sistem Ekosistem Vokasi & Kesiapan Kerja SMK Nasional. Mengintegrasikan kemitraan industri, identitas digital ijazah/SKKNI, dan tracer study akuntabel.
            </p>
            <div className="pt-2">
              <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                ● STATUS SISTEM: NORMAL (99.98% UP)
              </span>
            </div>
          </div>

          {/* 4 Pillars Links */}
          <div className="space-y-2 text-xs">
            <div className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">
              Empat Pilar Vokasi
            </div>
            <ul className="space-y-1.5 font-mono text-[11px] text-slate-400">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                Pilar 01 // Magang & Presensi Lapangan
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Pilar 02 // Paspor Identitas Digital & BNSP
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Pilar 03 // Tracer Study Lulusan (BMW)
              </li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">
                Pilar 04 // Konseling & Perlindungan BKK
              </li>
            </ul>
          </div>

          {/* Governance & Compliance */}
          <div className="space-y-2 text-xs">
            <div className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">
              Regulasi & Keamanan
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li>Permendikbudristek No. 50/2020 (PKL / Magang)</li>
              <li>Standar Kompetensi Kerja Nasional (SKKNI)</li>
              <li>Kepatuhan UU Perlindungan Data Pribadi (UU PDP)</li>
              <li>Sertifikasi Keamanan Kriptografis ISO/IEC 27001</li>
            </ul>
          </div>

          {/* Institutional Partners */}
          <div className="space-y-2 text-xs">
            <div className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">
              Jejaring Pemangku Kepentingan
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Direktorat Jenderal Pendidikan Vokasi Kemendikbudristek RI, Badan Nasional Sertifikasi Profesi (BNSP), Dinas Pendidikan Provinsi, serta 3.410 Asosiasi Industri DUDI.
            </p>
            <div className="pt-2 text-[11px] font-mono text-blue-400 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verifikasi Berstandar W3C Verifiable Credentials</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2025 MITRA Vocational Gov-Tech Ecosystem • Republik Indonesia
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Kebijakan Privasi</span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Standar API Dapodik</span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Bantuan Teknis</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
