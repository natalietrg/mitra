import React, { useState } from 'react';
import { X, Calendar, Clock, User, MessageSquare, CheckCircle, Shield } from 'lucide-react';
import { CounselingSlot } from '../../types';

interface CounselingModalProps {
  isOpen: boolean;
  onClose: () => void;
  counselor: CounselingSlot | null;
  onBookingSuccess: (details: { counselor: string; date: string; time: string; topic: string }) => void;
}

export const CounselingModal: React.FC<CounselingModalProps> = ({
  isOpen,
  onClose,
  counselor,
  onBookingSuccess,
}) => {
  const [selectedDate, setSelectedDate] = useState('2025-11-03');
  const [selectedTime, setSelectedTime] = useState('10:00 - 11:00 WIB');
  const [topic, setTopic] = useState('Review Portofolio SKKNI & Kesiapan Wawancara Astra');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen || !counselor) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => {
      onBookingSuccess({
        counselor: counselor.counselorName,
        date: selectedDate,
        time: selectedTime,
        topic,
      });
      setIsBooked(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg rounded-2xl bg-[#121A33] border border-white/10 text-[#DEE1F9] p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-44 h-44 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="font-mono text-[10px] text-purple-400 font-semibold uppercase tracking-wider">
              PILAR 04 // KLINIK BKK & ASISTENSI KARIR
            </span>
            <h3 className="text-lg font-bold text-white">Reservasi Sesi Konseling 1-on-1</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isBooked ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/40 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white">Sesi Berhasil Dikonfirmasi!</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Undangan Zoom dan notifikasi telah dikirim ke nomor WhatsApp & email terdaftar di Dapodik.
            </p>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="mt-4 space-y-4">
            {/* Counselor Snapshot */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0B1020] border border-white/10">
              <img
                src={counselor.avatar}
                alt={counselor.counselorName}
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-purple-500/40"
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold truncate text-white">{counselor.counselorName}</div>
                <div className="text-xs text-purple-300">{counselor.title}</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  Afiliasi: {counselor.affiliation} • Rating: ⭐ {counselor.rating}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Pilih Tanggal Sesi
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full h-11 px-3 rounded-xl bg-[#0B1020] border border-white/15 text-xs text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Pilih Slot Jam
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full h-11 px-3 rounded-xl bg-[#0B1020] border border-white/15 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <option value="09:00 - 10:00 WIB">09:00 - 10:00 WIB</option>
                  <option value="10:00 - 11:00 WIB">10:00 - 11:00 WIB</option>
                  <option value="13:30 - 14:30 WIB">13:30 - 14:30 WIB</option>
                  <option value="15:30 - 16:30 WIB">15:30 - 16:30 WIB</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Fokus Topik Bimbingan
              </label>
              <input
                type="text"
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl bg-[#0B1020] border border-white/15 text-xs text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Catatan Tambahan / Dokumen yang Ingin Di-review (Opsional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Misal: Sudah memiliki sertifikasi PLC BNSP, ingin konsultasi negosiasi upah magang..."
                className="w-full p-3 rounded-xl bg-[#0B1020] border border-white/15 text-xs text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>

            <div className="p-3 rounded-xl bg-[#0B1020] border border-white/10 text-xs flex items-center gap-2 text-slate-300">
              <Shield className="w-4 h-4 text-purple-400 shrink-0" />
              <span>
                Layanan konseling difasilitasi gratis oleh Direktorat SMK & Kemendikbudristek RI.
              </span>
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
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white shadow-lg shadow-purple-500/25 active:scale-95 transition-all"
              >
                Konfirmasi Jadwal Konseling
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
