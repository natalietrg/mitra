import React, { useState } from 'react';
import { X, CheckCircle, MapPin, ShieldCheck, Clock, Camera } from 'lucide-react';
import { LogbookEntry } from '../../types';

interface LogbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (entry: LogbookEntry) => void;
}

export const LogbookModal: React.FC<LogbookModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('8');
  const [competency, setCompetency] = useState('ELM.TO02.001.01 - Pemrograman PLC & SCADA');
  const [k3Compliance, setK3Compliance] = useState(true);
  const [geoVerified, setGeoVerified] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    const newEntry: LogbookEntry = {
      id: `LOG-2025-${Date.now().toString().slice(-4)}`,
      date: '29 Oktober 2025',
      activityTitle: title,
      description,
      hoursWorked: parseFloat(hours) || 8,
      supervisorName: 'Ir. Bambang Sujatmiko, ST',
      status: 'Menunggu Review',
      geoTag: 'Plant 2 Cikarang Assembly Bay 4',
      coordinates: '-6.312948, 107.143920 (Akurasi: ±2.5m)',
      competencyCovered: competency,
      k3Compliance,
    };

    onSubmit(newEntry);
    onClose();
    setTitle('');
    setDescription('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg rounded-2xl bg-[#121A33] border border-white/10 text-[#DEE1F9] p-6 shadow-2xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="font-mono text-[10px] text-amber-400 font-semibold uppercase tracking-wider">
              PILAR 01 // FORM LOGBOOK HARIAN
            </span>
            <h3 className="text-lg font-bold text-white">Input Presensi & Jurnal Magang Industri</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Judul Aktivitas / Tugas Lapangan
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Contoh: Kalibrasi Sensor Proximity & Wiring Relay Interlock"
              className="w-full h-11 px-3.5 rounded-xl bg-[#0B1020] border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Jam Kerja Efektif
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="12"
                  step="0.5"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-[#0B1020] border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
                <span className="absolute right-3 top-3 text-xs text-slate-400 font-mono">Jam</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Unit Kompetensi SKKNI
              </label>
              <select
                value={competency}
                onChange={(e) => setCompetency(e.target.value)}
                className="w-full h-11 px-3 rounded-xl bg-[#0B1020] border border-white/15 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              >
                <option value="ELM.TO02.001.01 - Pemrograman PLC & SCADA">
                  ELM.TO02.001.01 - PLC & SCADA
                </option>
                <option value="ELM.TO02.004.01 - Sensor Pneumatik & Hidrolik">
                  ELM.TO02.004.01 - Pneumatik & Hidrolik
                </option>
                <option value="TIK.FO01.008.01 - Modbus TCP & IoT Gateway">
                  TIK.FO01.008.01 - IoT Gateway
                </option>
                <option value="K3.IND.001.01 - Keselamatan & Kesehatan Kerja K3">
                  K3.IND.001.01 - K3 Industri
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Deskripsi Prosedur Kerja & Kendala Lapangan
            </label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Jelaskan langkah kerja, alat ukur yang digunakan, parameter yang dicapai, serta evaluasi hasil kerja..."
              className="w-full p-3 rounded-xl bg-[#0B1020] border border-white/15 text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>

          {/* Geo-tagging and K3 verification pill */}
          <div className="p-3.5 rounded-xl bg-[#0B1020] border border-white/10 space-y-2 text-xs">
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                <MapPin className="w-4 h-4" /> Geofence Presensi:
              </span>
              <span className="font-mono text-[11px] text-slate-300">
                Plant 2 Cikarang (Tervalidasi GPS)
              </span>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/5">
              <span className="text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Kepatuhan APD / K3 Lengkap:
              </span>
              <label className="flex items-center gap-2 cursor-pointer font-mono text-[11px]">
                <input
                  type="checkbox"
                  checked={k3Compliance}
                  onChange={(e) => setK3Compliance(e.target.checked)}
                  className="rounded text-amber-500 focus:ring-0"
                />
                <span className="text-emerald-400 font-semibold">Tersertifikasi APD</span>
              </label>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white shadow-lg shadow-amber-500/25 active:scale-95 transition-all"
            >
              Simpan & Kirim ke Mentor Industri
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
