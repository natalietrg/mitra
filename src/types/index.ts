export type PillarId = 'p1_magang' | 'p2_identitas' | 'p3_tamatan' | 'p4_rujukan';

export type UserRole = 'gov_official' | 'student' | 'industry_partner' | 'bkk_coordinator';

export interface StudentProfile {
  nisn: string;
  nik: string;
  name: string;
  school: string;
  major: string;
  grade: string;
  academicYear: string;
  avatar: string;
  statusMagang: 'Aktif' | 'Selesai' | 'Persiapan' | 'Menunggu Verifikasi';
  currentCompany?: string;
  mentorName?: string;
  merkleRootHash: string;
  verifiedAt: string;
  skkniLevel: string;
  competencies: {
    code: string;
    title: string;
    grade: 'Kompeten (A)' | 'Sangat Kompeten (A+)' | 'Memenuhi Syarat (B+)';
    verifiedBy: string;
    verifiedDate: string;
  }[];
}

export interface ApprenticeshipSlot {
  id: string;
  companyName: string;
  companyLogo: string;
  companyCategory: 'Manufaktur & Otomasi' | 'Teknologi Informasi & Digital' | 'Elektronika & Robotika' | 'Logistik & Maritim' | 'Energi Terbarukan';
  roleTitle: string;
  location: string;
  region: string;
  stipendAmount: string;
  quotaTotal: number;
  quotaFilled: number;
  durationMonths: number;
  k3Standard: string;
  verifiedBadge: boolean;
  requiredSkills: string[];
  intakePeriod: string;
}

export interface LogbookEntry {
  id: string;
  date: string;
  activityTitle: string;
  description: string;
  hoursWorked: number;
  supervisorName: string;
  status: 'Disetujui Mentor' | 'Menunggu Review' | 'Perlu Revisi';
  geoTag: string;
  coordinates: string;
  competencyCovered: string;
  k3Compliance: boolean;
}

export interface TracerStatistic {
  category: 'Bekerja' | 'Melanjutkan' | 'Wirausaha' | 'Masa Tunggu';
  percentage: number;
  count: number;
  color: string;
  description: string;
  subCategories: { name: string; pct: number }[];
}

export interface RegionalAbsorption {
  province: string;
  totalGraduates: number;
  absorbedRate: number;
  topSector: string;
  averageSalary: string;
}

export interface CounselingSlot {
  id: string;
  counselorName: string;
  title: string;
  specialization: 'Persiapan Masuk Industri' | 'Konseling Karir & CV BKK' | 'Advokasi Hak & Upah Magang' | 'Kesehatan Mental & Adaptasi Kerja';
  rating: number;
  sessionsConducted: number;
  availableDays: string[];
  avatar: string;
  affiliation: 'BKK Nasional' | 'Praktisi Industri Astra' | 'Psikolog Vokasi' | 'Schneider Electric Academy';
}

export interface SystemTelemetry {
  activeStudents: number;
  verifiedCredentials: number;
  partnerCompanies: number;
  tracerResponseRate: number;
  averageAbsorptionMonths: number;
  simulatedLivePings: number;
}
