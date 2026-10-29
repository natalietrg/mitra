/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation, ActiveTab } from './components/Navigation';
import { NationalCommandOverview } from './components/views/NationalCommandOverview';
import { MagangView } from './components/views/MagangView';
import { IdentitasView } from './components/views/IdentitasView';
import { TamatanView } from './components/views/TamatanView';
import { RujukanView } from './components/views/RujukanView';
import { PublicVerifierModal } from './components/views/PublicVerifierModal';
import { LogbookModal } from './components/modals/LogbookModal';
import { CounselingModal } from './components/modals/CounselingModal';
import { Footer } from './components/Footer';
import { INITIAL_LOGBOOKS } from './data/mockData';
import { UserRole, LogbookEntry, CounselingSlot } from './types';

export default function App() {
  const [isPublicMode, setIsPublicMode] = useState<boolean>(false);
  const [isSimulated, setIsSimulated] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [activeRole, setActiveRole] = useState<UserRole>('gov_official');

  // Modals & User Interactivity state
  const [isVerifierOpen, setIsVerifierOpen] = useState<boolean>(false);
  const [isLogbookModalOpen, setIsLogbookModalOpen] = useState<boolean>(false);
  const [logbooks, setLogbooks] = useState<LogbookEntry[]>(INITIAL_LOGBOOKS);
  const [selectedCounselor, setSelectedCounselor] = useState<CounselingSlot | null>(null);
  const [bookedSessions, setBookedSessions] = useState<{ counselor: string; date: string; time: string; topic: string }[]>([
    {
      counselor: 'Dra. Endang Purwaningsih, M.Psi',
      date: '2025-11-03',
      time: '10:00 - 11:00 WIB',
      topic: 'Review Portofolio SKKNI & Strategi Wawancara Astra',
    },
  ]);

  const handleAddLogbook = (entry: LogbookEntry) => {
    setLogbooks([entry, ...logbooks]);
  };

  const handleApproveLogbook = (id: string) => {
    setLogbooks((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: 'Disetujui Mentor' } : l))
    );
  };

  const handleBookingSuccess = (details: { counselor: string; date: string; time: string; topic: string }) => {
    setBookedSessions([details, ...bookedSessions]);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 flex flex-col ${
        isPublicMode
          ? 'bg-[#F8FAFC] text-slate-900'
          : 'bg-[#0B1020] text-[#DEE1F9]'
      }`}
    >
      {/* Top Gov-Tech Navigation Bar */}
      <Header
        isPublicMode={isPublicMode}
        setIsPublicMode={setIsPublicMode}
        isSimulated={isSimulated}
        setIsSimulated={setIsSimulated}
        activeRole={activeRole}
        setActiveRole={setActiveRole}
        onOpenVerifier={() => setIsVerifierOpen(true)}
      />

      {/* 4 Pillars Tab Navigation */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isPublicMode={isPublicMode}
      />

      {/* Main View Port Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'overview' && (
          <NationalCommandOverview
            isPublicMode={isPublicMode}
            onNavigateTab={(tab) => setActiveTab(tab)}
            activeRole={activeRole}
            onOpenVerifier={() => setIsVerifierOpen(true)}
          />
        )}

        {activeTab === 'p1_magang' && (
          <MagangView
            isPublicMode={isPublicMode}
            onOpenLogbookModal={() => setIsLogbookModalOpen(true)}
            logbooks={logbooks}
            onApproveLogbook={handleApproveLogbook}
          />
        )}

        {activeTab === 'p2_identitas' && (
          <IdentitasView
            isPublicMode={isPublicMode}
            onOpenVerifier={() => setIsVerifierOpen(true)}
          />
        )}

        {activeTab === 'p3_tamatan' && (
          <TamatanView isPublicMode={isPublicMode} />
        )}

        {activeTab === 'p4_rujukan' && (
          <RujukanView
            isPublicMode={isPublicMode}
            onOpenBookingModal={(c) => setSelectedCounselor(c)}
            bookedSessions={bookedSessions}
          />
        )}
      </main>

      {/* Institutional Gov-Tech Footer */}
      <Footer isPublicMode={isPublicMode} />

      {/* Global Interactive Modals */}
      <PublicVerifierModal
        isOpen={isVerifierOpen}
        onClose={() => setIsVerifierOpen(false)}
      />

      <LogbookModal
        isOpen={isLogbookModalOpen}
        onClose={() => setIsLogbookModalOpen(false)}
        onSubmit={handleAddLogbook}
      />

      <CounselingModal
        isOpen={selectedCounselor !== null}
        onClose={() => setSelectedCounselor(null)}
        counselor={selectedCounselor}
        onBookingSuccess={handleBookingSuccess}
      />
    </div>
  );
}
