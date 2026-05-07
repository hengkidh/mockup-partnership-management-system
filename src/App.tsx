import { useEffect, useState } from 'react';
import { AlertTriangle, Briefcase, Check, Clock, FileText, LayoutGrid, Target, Users } from 'lucide-react';
import type {
  DistributionItem,
  MitraNotification,
  MitraStat,
  OpdStat,
  PipelineItem,
  PotentialPartner,
  StatCard,
  SystemNotification,
  VerificationQueueItem,
  ViewMode
} from './types';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import FormView from './components/views/FormView';
import BupatiView from './components/views/BupatiView';
import AdminView from './components/views/AdminView';
import OpdView from './components/views/OpdView';
import MitraView from './components/views/MitraView';
import PresentationOverlay from './components/views/PresentationOverlay';

const SLIDE_COUNT = 3;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>('BUPATI');
  const [isDemoDropdownOpen, setIsDemoDropdownOpen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPresentationMode) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDE_COUNT);
      }, 8000); // 8 seconds per slide
    }
    return () => clearInterval(interval);
  }, [isPresentationMode]);

  // --- DATA MOCK BUPATI ---
  const statsBupati: StatCard[] = [
    { title: "Total Kerja Sama", value: "857", sub: "+12% tahun ini", color: "bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] text-white border-none", icon: <Briefcase /> },
    { title: "Mitra Aktif", value: "1.024", sub: "se-Indonesia", color: "bg-gradient-to-br from-[#F39C12] to-[#D68910] text-white border-none", icon: <Users /> },
    { title: "KS Internasional", value: "23", sub: "9 negara", color: "bg-white text-gray-800 border border-gray-100", icon: <LayoutGrid className="text-[#3498DB]" /> },
    { title: "Target KS 2026", value: "19", max: "/ 24", sub: "79% tercapai", color: "bg-white text-gray-800 border border-gray-100", icon: <Target className="text-[#27AE60]" />, progress: 79 },
  ];

  const distributionData: DistributionItem[] = [
    { label: "Antar Pemerintah Daerah", count: 312, percent: 36, color: "bg-[#1B4332]" },
    { label: "Pemerintah — Swasta", count: 256, percent: 30, color: "bg-[#F39C12]" },
    { label: "Pemerintah — Perguruan Tinggi", count: 178, percent: 21, color: "bg-[#3498DB]" },
    { label: "Kerja Sama Luar Negeri", count: 64, percent: 7, color: "bg-[#9B59B6]" },
    { label: "Lembaga / Komunitas", count: 47, percent: 6, color: "bg-[#E67E22]" },
  ];

  const pipelineData: PipelineItem[] = [
    { label: "Baru diajukan", count: 14, color: "text-green-600", bg: "bg-green-50" },
    { label: "Diverifikasi", count: 7, color: "text-yellow-600", bg: "bg-yellow-50" },
    { label: "Disposisi", count: 5, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Diproses", count: 9, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Selesai bulan ini", count: 3, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  const opdStats: OpdStat[] = [
    { name: "Dinas Pendidikan dan Kebudayaan", active: 12, target: 15 },
    { name: "Dinas Kesehatan", active: 18, target: 20 },
    { name: "Dinas PUPRP", active: 8, target: 10 },
    { name: "DPRKPLH", active: 5, target: 8 },
    { name: "Dinas Sosial", active: 11, target: 12 },
    { name: "Satpol PP dan Damkar", active: 3, target: 5 },
    { name: "Dinas Dukcapil", active: 14, target: 15 },
    { name: "Dispora", active: 7, target: 10 },
    { name: "Dinas Ketahanan Pangan & Perikanan", active: 9, target: 12 },
    { name: "Diskominfo", active: 22, target: 25 },
    { name: "Dinas Pariwisata", active: 16, target: 18 },
    { name: "DPMD", active: 10, target: 15 },
    { name: "DP2KBP3A", active: 6, target: 8 },
    { name: "DPMPTSP", active: 25, target: 30 },
    { name: "Dinas Perhubungan", active: 4, target: 6 },
    { name: "Dinas Pertanian, Hortikultura & Perkebunan", active: 13, target: 15 },
    { name: "Disnakkeswan", active: 7, target: 10 },
    { name: "Diskopdag", active: 15, target: 20 },
    { name: "Dispersip", active: 5, target: 8 },
    { name: "Disnakerind", active: 11, target: 15 }
  ];

  const potentialPartners: PotentialPartner[] = [
    { name: "PT Aplikasi Karya Anak Bangsa", type: "Perusahaan Teknologi", match: 94, opd: ["Dinas Pariwisata", "Dinas Koperasi & UKM", "Diskominfo"], icon: "AK", color: "bg-green-100 text-green-700" },
    { name: "PT Bio Farma (Persero)", type: "BUMN - Kesehatan", match: 88, opd: ["Dinas Kesehatan", "RSUD Boejasin"], icon: "BF", color: "bg-blue-100 text-blue-700" },
    { name: "JICA Indonesia", type: "Lembaga Internasional", match: 85, opd: ["Bappeda", "Dinas PUPRP", "Dinas LHK"], icon: "JI", color: "bg-purple-100 text-purple-700" },
    { name: "PT Pupuk Indonesia", type: "BUMN - Agrikultur", match: 82, opd: ["Dinas Pertanian", "DKPP"], icon: "PI", color: "bg-orange-100 text-orange-700" }
  ];

  // --- DATA MOCK ADMIN TKKSD ---
  const statsAdmin: StatCard[] = [
    { title: "Total pengajuan bulan ini", value: "38", sub: "+8 dari bulan lalu", color: "bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] text-white border-none", icon: <FileText /> },
    { title: "Menunggu verifikasi", value: "7", sub: "2 lebih dari 3 hari", color: "bg-gradient-to-br from-[#F39C12] to-[#D68910] text-white border-none", icon: <Clock /> },
    { title: "Perlu tindakan segera", value: "2", sub: "Segera tindak lanjuti", color: "bg-gradient-to-br from-[#C0392B] to-[#A93226] text-white border-none", icon: <AlertTriangle /> },
    { title: "Target KS 2026", value: "19", max: "/ 24", sub: "79% tercapai", color: "bg-white text-gray-800 border border-gray-100", icon: <Target className="text-[#27AE60]" />, progress: 79 },
  ];

  const verificationQueue: VerificationQueueItem[] = [
    { id: "KS-2026-0042", mitra: "Digitaliz", jenis: "Swasta", tgl: "20 Apr", status: "Diverifikasi", sColor: "text-yellow-600 bg-yellow-50", action: "Tinjau", aColor: "border-green-600 text-green-600" },
    { id: "KS-2026-0041", mitra: "Univ. Banjarmasin", jenis: "Perguruan Tinggi", tgl: "18 Apr", status: "Baru", sColor: "text-green-600 bg-green-50", action: "Tinjau", aColor: "border-green-600 text-green-600" },
    { id: "KS-2026-0040", mitra: "PLN UP3", jenis: "BUMN", tgl: "17 Apr", status: "Perlu Segera", sColor: "text-red-500 bg-red-50", action: "Tinjau", aColor: "border-green-600 text-green-600" },
    { id: "KS-2026-0039", mitra: "Pemkab Banjar", jenis: "Antar Daerah", tgl: "15 Apr", status: "Disposisi", sColor: "text-blue-500 bg-blue-50", action: "Pantau", aColor: "border-orange-500 text-orange-500" },
    { id: "KS-2026-0038", mitra: "Telkom Indonesia", jenis: "Swasta", tgl: "14 Apr", status: "Diproses", sColor: "text-purple-500 bg-purple-50", action: "Pantau", aColor: "border-orange-500 text-orange-500" },
  ];

  const systemNotifications: SystemNotification[] = [
    { text: "KS-2026-0040 (PLN) sudah 4 hari belum diverifikasi", time: "Sekarang", color: "bg-yellow-500" },
    { text: "OPD Diskominfo mengirim laporan progres KS-2026-0031", time: "1 jam lalu", color: "bg-green-600" },
    { text: "Pengajuan baru masuk: Univ. Banjarmasin (KS-2026-0041)", time: "2 jam lalu", color: "bg-green-600" },
    { text: "KS-2025-0078 akan berakhir dalam 12 hari — koordinasi dengan OPD", time: "Kemarin", color: "bg-red-500" },
  ];

  // --- DATA MOCK MITRA (image_b4da93.png) ---
  const statsMitra: MitraStat[] = [
    { title: "Pengajuan Aktif", value: "3", color: "bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] text-white border-none", icon: <FileText size={32} className="opacity-40" /> },
    { title: "Sedang Diverifikasi", value: "1", color: "bg-gradient-to-br from-[#F39C12] to-[#D68910] text-white border-none", icon: <Clock size={32} className="opacity-40" /> },
    { title: "KS Selesai", value: "2", color: "bg-white text-gray-800 border border-gray-100", icon: <Check size={32} className="text-[#27AE60] opacity-40" /> },
  ];

  const mitraNotifications: MitraNotification[] = [
    { text: "Pengajuan KS-2026-0042 sedang diverifikasi oleh Admin TKKSD", time: "2 jam lalu", color: "bg-yellow-500" },
    { text: "Dokumen lengkap — pengajuan KS-2026-0031 diteruskan ke OPD Diskominfo", time: "2 hari lalu", color: "bg-[#1B4332]" },
    { text: "KS-2025-0089 resmi selesai. MoU telah tersimpan di dokumen Anda", time: "Des 2025", color: "bg-[#1B4332]" },
  ];

  const handleToggleDemoDropdown = () => {
    setIsDemoDropdownOpen((open) => !open);
  };

  const handleCloseDemoDropdown = () => {
    setIsDemoDropdownOpen(false);
  };

  const handleSelectViewMode = (mode: ViewMode) => {
    setViewMode(mode);
    setIsDemoDropdownOpen(false);
  };

  const handleStartPresentation = () => {
    setIsPresentationMode(true);
    setCurrentSlide(0);
  };

  // --- FORM PAGE RENDER ---
  if (viewMode === 'FORM') {
    return (
      <FormView
        viewMode={viewMode}
        onBackToDashboard={() => setViewMode('MITRA')}
        isDemoDropdownOpen={isDemoDropdownOpen}
        onToggleDemoDropdown={handleToggleDemoDropdown}
        onCloseDemoDropdown={handleCloseDemoDropdown}
        onSelectViewMode={handleSelectViewMode}
      />
    );
  }

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
      <Sidebar
        isOpen={isSidebarOpen}
        viewMode={viewMode}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main className="flex-1 flex flex-col overflow-hidden relative">
        <Navbar
          viewMode={viewMode}
          isDemoDropdownOpen={isDemoDropdownOpen}
          onToggleDemoDropdown={handleToggleDemoDropdown}
          onCloseDemoDropdown={handleCloseDemoDropdown}
          onSelectViewMode={handleSelectViewMode}
        />

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {viewMode === 'BUPATI' && (
            <BupatiView
              statsBupati={statsBupati}
              distributionData={distributionData}
              pipelineData={pipelineData}
              opdStats={opdStats}
              potentialPartners={potentialPartners}
              onStartPresentation={handleStartPresentation}
            />
          )}

          {viewMode === 'ADMIN' && (
            <AdminView
              statsAdmin={statsAdmin}
              verificationQueue={verificationQueue}
              systemNotifications={systemNotifications}
            />
          )}

          {viewMode === 'OPD' && <OpdView />}

          {viewMode === 'MITRA' && (
            <MitraView
              statsMitra={statsMitra}
              mitraNotifications={mitraNotifications}
            />
          )}
        </div>
      </main>

      {isPresentationMode && (
        <PresentationOverlay
          statsBupati={statsBupati}
          opdStats={opdStats}
          potentialPartners={potentialPartners}
          currentSlide={currentSlide}
          onClose={() => setIsPresentationMode(false)}
          onSelectSlide={setCurrentSlide}
        />
      )}
    </div>
  );
};

export default App;