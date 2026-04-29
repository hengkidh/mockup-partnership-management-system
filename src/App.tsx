import React, { useState } from 'react';
import { 
  Home, 
  List, 
  PieChart, 
  FileText, 
  TrendingUp, 
  Bell, 
  User, 
  AlertTriangle,
  ExternalLink,
  Menu,
  X,
  Inbox,
  Briefcase,
  PlayCircle,
  ClipboardCheck,
  FileBox,
  MessageSquare,
  ArrowRight,
  Settings,
  Users,
  LayoutGrid,
  Download,
  PlusCircle,
  Clock,
  Check,
  ArrowLeft,
  FileUp,
  ChevronDown
} from 'lucide-react';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [viewMode, setViewMode] = useState('BUPATI'); // 'BUPATI', 'OPD', 'ADMIN', 'MITRA'
  const [isDemoDropdownOpen, setIsDemoDropdownOpen] = useState(false);

  // --- DATA MOCK BUPATI ---
  const statsBupati = [
    { title: "Total Kerja Sama", value: "857", sub: "+12% tahun ini", color: "bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] text-white border-none", icon: <Briefcase /> },
    { title: "Mitra Aktif", value: "1.024", sub: "se-Indonesia", color: "bg-gradient-to-br from-[#F39C12] to-[#D68910] text-white border-none", icon: <Users /> },
    { title: "KS Internasional", value: "23", sub: "9 negara", color: "bg-white text-gray-800 border border-gray-100", icon: <LayoutGrid className="text-[#3498DB]" /> },
    { title: "Realisasi 2026", value: "98%", sub: "Tepat waktu", color: "bg-white text-gray-800 border border-gray-100", icon: <TrendingUp className="text-[#27AE60]" /> },
  ];

  const distributionData = [
    { label: "Antar Pemerintah Daerah", count: 312, percent: 36, color: "bg-[#1B4332]" },
    { label: "Pemerintah — Swasta", count: 256, percent: 30, color: "bg-[#F39C12]" },
    { label: "Pemerintah — Perguruan Tinggi", count: 178, percent: 21, color: "bg-[#3498DB]" },
    { label: "Kerja Sama Luar Negeri", count: 64, percent: 7, color: "bg-[#9B59B6]" },
    { label: "Lembaga / Komunitas", count: 47, percent: 6, color: "bg-[#E67E22]" },
  ];

  const pipelineData = [
    { label: "Baru diajukan", count: 14, color: "text-green-600", bg: "bg-green-50" },
    { label: "Diverifikasi", count: 7, color: "text-yellow-600", bg: "bg-yellow-50" },
    { label: "Disposisi", count: 5, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Diproses", count: 9, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Selesai bulan ini", count: 3, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  const topOPD = [
    { name: "Dinas Pendidikan", count: 42 },
    { name: "Diskominfo", count: 38 },
    { name: "Dinas Kesehatan", count: 31 },
    { name: "DPUPR", count: 26 },
    { name: "BPKAD", count: 21 },
    { name: "Dinas Pertanian", count: 17 },
  ];

  const potentialPartners = [
    { name: "PT Aplikasi Karya Anak Bangsa", type: "Perusahaan Teknologi", match: 94, opd: ["Dinas Pariwisata", "Dinas Koperasi & UKM", "Diskominfo"], icon: "AK", color: "bg-green-100 text-green-700" },
    { name: "PT Bio Farma (Persero)", type: "BUMN - Kesehatan", match: 88, opd: ["Dinas Kesehatan", "RSUD Boejasin"], icon: "BF", color: "bg-blue-100 text-blue-700" },
    { name: "JICA Indonesia", type: "Lembaga Internasional", match: 85, opd: ["Bappeda", "Dinas PUPRP", "Dinas LHK"], icon: "JI", color: "bg-purple-100 text-purple-700" },
    { name: "PT Pupuk Indonesia", type: "BUMN - Agrikultur", match: 82, opd: ["Dinas Pertanian", "DKPP"], icon: "PI", color: "bg-orange-100 text-orange-700" }
  ];

  // --- DATA MOCK ADMIN TKKSD ---
  const statsAdmin = [
    { title: "Total pengajuan bulan ini", value: "38", sub: "+8 dari bulan lalu", color: "bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] text-white border-none", icon: <FileText /> },
    { title: "Menunggu verifikasi", value: "7", sub: "2 lebih dari 3 hari", color: "bg-gradient-to-br from-[#F39C12] to-[#D68910] text-white border-none", icon: <Clock /> },
    { title: "Perlu tindakan segera", value: "2", sub: "Segera tindak lanjuti", color: "bg-gradient-to-br from-[#C0392B] to-[#A93226] text-white border-none", icon: <AlertTriangle /> },
    { title: "KS aktif bulan ini", value: "14", sub: "3 selesai", color: "bg-white text-gray-800 border border-gray-100", icon: <Check className="text-[#27AE60]" /> },
  ];

  const verificationQueue = [
    { id: "KS-2026-0042", mitra: "Digitaliz", jenis: "Swasta", tgl: "20 Apr", status: "Diverifikasi", sColor: "text-yellow-600 bg-yellow-50", action: "Tinjau", aColor: "border-green-600 text-green-600" },
    { id: "KS-2026-0041", mitra: "Univ. Banjarmasin", jenis: "Perguruan Tinggi", tgl: "18 Apr", status: "Baru", sColor: "text-green-600 bg-green-50", action: "Tinjau", aColor: "border-green-600 text-green-600" },
    { id: "KS-2026-0040", mitra: "PLN UP3", jenis: "BUMN", tgl: "17 Apr", status: "Perlu Segera", sColor: "text-red-500 bg-red-50", action: "Tinjau", aColor: "border-green-600 text-green-600" },
    { id: "KS-2026-0039", mitra: "Pemkab Banjar", jenis: "Antar Daerah", tgl: "15 Apr", status: "Disposisi", sColor: "text-blue-500 bg-blue-50", action: "Pantau", aColor: "border-orange-500 text-orange-500" },
    { id: "KS-2026-0038", mitra: "Telkom Indonesia", jenis: "Swasta", tgl: "14 Apr", status: "Diproses", sColor: "text-purple-500 bg-purple-50", action: "Pantau", aColor: "border-orange-500 text-orange-500" },
  ];

  const systemNotifications = [
    { text: "KS-2026-0040 (PLN) sudah 4 hari belum diverifikasi", time: "Sekarang", color: "bg-yellow-500" },
    { text: "OPD Diskominfo mengirim laporan progres KS-2026-0031", time: "1 jam lalu", color: "bg-green-600" },
    { text: "Pengajuan baru masuk: Univ. Banjarmasin (KS-2026-0041)", time: "2 jam lalu", color: "bg-green-600" },
    { text: "KS-2025-0078 akan berakhir dalam 12 hari — koordinasi dengan OPD", time: "Kemarin", color: "bg-red-500" },
  ];

  // --- DATA MOCK MITRA (image_b4da93.png) ---
  const statsMitra = [
    { title: "Pengajuan Aktif", value: "3", color: "bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] text-white border-none", icon: <FileText size={32} className="opacity-40" /> },
    { title: "Sedang Diverifikasi", value: "1", color: "bg-gradient-to-br from-[#F39C12] to-[#D68910] text-white border-none", icon: <Clock size={32} className="opacity-40" /> },
    { title: "KS Selesai", value: "2", color: "bg-white text-gray-800 border border-gray-100", icon: <Check size={32} className="text-[#27AE60] opacity-40" /> },
  ];

  const mitraNotifications = [
    { text: "Pengajuan KS-2026-0042 sedang diverifikasi oleh Admin TKKSD", time: "2 jam lalu", color: "bg-yellow-500" },
    { text: "Dokumen lengkap — pengajuan KS-2026-0031 diteruskan ke OPD Diskominfo", time: "2 hari lalu", color: "bg-[#1B4332]" },
    { text: "KS-2025-0089 resmi selesai. MoU telah tersimpan di dokumen Anda", time: "Des 2025", color: "bg-[#1B4332]" },
  ];

  const SidebarItem = ({ 
    icon, 
    label, 
    active = false, 
    badge = null, 
    onClick = undefined 
  }: { 
    icon: React.ReactNode; 
    label: string; 
    active?: boolean; 
    badge?: string | number | null; 
    onClick?: () => void; 
  }) => (
    <li>
      <button 
        onClick={onClick}
        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${active ? 'bg-green-50 text-[#1B4332] font-semibold' : 'text-gray-500 hover:bg-gray-100'}`}
      >
        <div className="flex items-center gap-3">
          {icon}
          {isSidebarOpen && <span className="truncate">{label}</span>}
        </div>
        {isSidebarOpen && badge && (
          <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">{badge}</span>
        )}
      </button>
    </li>
  );

  // --- FORM PAGE RENDER ---
  if (viewMode === 'FORM') {
    return (
      <div className="min-h-screen bg-gray-50 font-sans p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Top Header / Back Button */}
          <div className="flex items-center justify-between relative z-50">
            <button 
              onClick={() => setViewMode('MITRA')}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-800 font-medium"
            >
              <ArrowLeft size={18} /> Kembali ke Dashboard
            </button>
            <div className="relative">
              <button 
                onClick={() => setIsDemoDropdownOpen(!isDemoDropdownOpen)}
                className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 bg-yellow-500 text-gray-900 border rounded-full hover:bg-yellow-400"
              >
                Ganti Tampilan Demo
                <ChevronDown size={14} className={`transition-transform ${isDemoDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDemoDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsDemoDropdownOpen(false)}
                  ></div>
                  <div className="absolute top-full right-0 mt-2 bg-white text-gray-800 rounded-xl shadow-xl shadow-black/10 border border-gray-100 overflow-hidden w-48 z-50">
                    <div className="px-4 py-2.5 border-b border-gray-100 bg-gray-50/50">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Tampilan Demo</p>
                    </div>
                    <div className="flex flex-col py-1">
                      {['BUPATI', 'OPD', 'ADMIN', 'MITRA', 'FORM'].map(m => (
                        <button 
                          key={m}
                          onClick={(e) => {
                            e.stopPropagation();
                            setViewMode(m);
                            setIsDemoDropdownOpen(false);
                          }}
                          className={`text-left px-4 py-2.5 text-xs transition-colors ${viewMode === m ? 'font-bold text-[#1B4332] bg-green-50' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                          Mode: {m}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Stepper Steps (01-05) */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Daftar / Masuk', sub: 'Buat akun atau masuk dengan akun Anda.' },
              { num: '02', title: 'Isi Formulir', sub: 'Lengkapi data instansi dan tujuan kerja sama.', active: true },
              { num: '03', title: 'Unggah Dokumen', sub: 'Lampirkan proposal dan dokumen pendukung.' },
              { num: '04', title: 'Verifikasi', sub: 'Tim memverifikasi dalam 5 hari kerja.' },
              { num: '05', title: 'MoU', sub: 'Penjadwalan penandatanganan kesepakatan.' },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <span className={`text-xl font-extrabold ${step.active ? 'text-[#F39C12]' : 'text-gray-300'}`}>{step.num}</span>
                <h3 className={`text-sm font-bold mt-2 ${step.active ? 'text-[#1B4332]' : 'text-gray-400'}`}>{step.title}</h3>
                <p className="text-[10px] text-gray-400 mt-1 leading-tight">{step.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Form Area */}
            <div className="lg:col-span-8 bg-white rounded-3xl shadow-sm p-8 md:p-12 space-y-8">
              <h2 className="text-2xl font-extrabold text-[#1B4332]">Formulir Pengajuan</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Nama Instansi</label>
                  <input 
                    type="text" 
                    placeholder="PT / Universitas / Pemda ..." 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Jenis Instansi</label>
                  <input 
                    type="text" 
                    placeholder="Swasta / Pemerintah / Perguruan Tinggi" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Penanggung Jawab</label>
                  <input 
                    type="text" 
                    placeholder="Nama lengkap" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email</label>
                  <input 
                    type="email" 
                    defaultValue="naviraalda68@gmail.com" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Judul Kerja Sama</label>
                <input 
                  type="text" 
                  placeholder="Contoh: Kerja sama Smart City..." 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Tujuan & Ruang Lingkup</label>
                <textarea 
                  rows={5} 
                  placeholder="Jelaskan tujuan dan ruang lingkup..." 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                ></textarea>
              </div>

              {/* Upload Section */}
              <div className="border-2 border-dashed border-gray-200 rounded-3xl p-10 flex flex-col items-center justify-center text-center space-y-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-[#1B4332] group-hover:scale-110 transition-transform">
                  <FileUp size={32} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-700">Unggah Proposal (PDF)</h4>
                  <p className="text-xs text-gray-400 mt-1">Fitur unggah dokumen segera hadir</p>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button className="bg-[#1B4332] text-white font-bold px-12 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-95">
                  Lanjutkan Pengajuan
                </button>
              </div>
            </div>

            {/* Sidebar / Requirements Area */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                
                <h3 className="text-2xl font-bold mb-8">Persyaratan</h3>
                <ul className="space-y-6">
                  {[
                    "Instansi berbadan hukum / pemerintah resmi",
                    "Proposal kerja sama (PDF, maks 10MB)",
                    "Profil singkat instansi",
                    "Surat permohonan resmi",
                    "Kontak penanggung jawab aktif"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                        <Check size={14} strokeWidth={4} className="text-white" />
                      </div>
                      <span className="text-sm font-medium leading-tight opacity-90">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#1B4332] mb-4">Butuh Bantuan?</h4>
                <p className="text-xs text-gray-500 mb-6 leading-relaxed">Jika Anda mengalami kendala dalam pengisian formulir, silakan hubungi tim kami.</p>
                <button className="w-full py-3 bg-yellow-50 text-yellow-700 font-bold text-sm rounded-xl hover:bg-yellow-100 transition-colors">
                  Hubungi Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-r-gray-100 transition-all duration-300 ease-in-out flex flex-col z-20 shrink-0`}>
        <div className="p-4 flex items-center gap-3 border-b h-16 bg-[#1B4332]">
          <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-white font-bold shrink-0">TL</div>
          {isSidebarOpen && (
            <div className="text-white overflow-hidden whitespace-nowrap">
              <p className="text-xs font-bold leading-tight">Bagian Perekonomian</p>
              <p className="text-[10px] opacity-80 leading-tight">& Kerja Sama</p>
            </div>
          )}
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          <div className="px-4 mb-2">
            <p className={`text-[10px] font-bold text-gray-400 uppercase tracking-wider ${!isSidebarOpen && 'hidden'}`}>UTAMA</p>
          </div>
          <ul className="space-y-1 px-2 mb-6">
            <SidebarItem icon={<Home size={20} />} label="Beranda" active={true} />
            {viewMode === 'BUPATI' && (
              <>
                <SidebarItem icon={<List size={20} />} label="Daftar KS Aktif" />
                <SidebarItem icon={<PieChart size={20} />} label="Distribusi OPD" />
              </>
            )}
            {viewMode === 'OPD' && (
              <>
                <SidebarItem icon={<Inbox size={20} />} label="Disposisi Masuk" badge="2" />
                <SidebarItem icon={<Briefcase size={20} />} label="Kerja Sama Saya" />
              </>
            )}
            {viewMode === 'ADMIN' && (
              <>
                <SidebarItem icon={<Clock size={20} />} label="Verifikasi Pengajuan" badge="7" />
                <SidebarItem icon={<ArrowRight size={20} />} label="Disposisi ke OPD" />
                <SidebarItem icon={<PlayCircle size={20} />} label="Monitoring Pipeline" />
              </>
            )}
            {viewMode === 'MITRA' && (
              <>
                <SidebarItem icon={<User size={20} />} label="Profil Instansi" />
                <SidebarItem icon={<PlusCircle size={20} />} label="Ajukan Kerja Sama" />
                <SidebarItem icon={<List size={20} />} label="Riwayat Pengajuan" />
              </>
            )}
          </ul>

          <div className="px-4 mb-2">
            <p className={`text-[10px] font-bold text-gray-400 uppercase tracking-wider ${!isSidebarOpen && 'hidden'}`}>
              {viewMode === 'BUPATI' ? 'LAPORAN' : viewMode === 'ADMIN' ? 'MANAJEMEN' : 'PELAKSANAAN'}
            </p>
          </div>
          <ul className="space-y-1 px-2">
             {viewMode === 'BUPATI' && <><SidebarItem icon={<FileText size={20} />} label="Laporan Evaluasi" /><SidebarItem icon={<TrendingUp size={20} />} label="Tren Tahunan" /></>}
             {viewMode === 'OPD' && <><SidebarItem icon={<PlayCircle size={20} />} label="Progress" /><SidebarItem icon={<ClipboardCheck size={20} />} label="Laporan" /><SidebarItem icon={<FileBox size={20} />} label="Dokumen" /></>}
             {viewMode === 'ADMIN' && <><SidebarItem icon={<Users size={20} />} label="Manajemen User" /><SidebarItem icon={<LayoutGrid size={20} />} label="Manajemen Konten" /><SidebarItem icon={<Settings size={20} />} label="Evaluasi KS" /></>}
             {viewMode === 'MITRA' && <><SidebarItem icon={<FileBox size={20} />} label="Dokumen Saya" /><SidebarItem icon={<MessageSquare size={20} />} label="FAQ & Konsultasi" /></>}
          </ul>
        </nav>

        <div className="p-4 border-t border-t-gray-100">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="w-full flex items-center justify-center p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Navbar */}
        <header className="h-16 bg-[#1B4332] text-white flex items-center justify-between px-6 shrink-0 z-50 relative">
          <div className="flex items-center gap-4">
             <div className="hidden sm:flex flex-col">
                <h1 className="text-sm font-bold">Bagian Perekonomian & Kerja Sama</h1>
                <p className="text-[10px] opacity-70">Kabupaten Tanah Laut — Role: {viewMode}</p>
             </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/10 rounded-full relative">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#1B4332]"></span>
            </button>
            <div className="relative">
              <div 
                className="flex items-center gap-2 bg-yellow-500 text-gray-900 px-3 py-1.5 rounded-full cursor-pointer hover:bg-yellow-400 transition-colors"
                onClick={() => setIsDemoDropdownOpen(!isDemoDropdownOpen)}
              >
                <User size={14} />
                <span className="text-[10px] font-bold uppercase">{viewMode === 'MITRA' ? 'Digitaliz' : viewMode}</span>
                <ChevronDown size={14} className={`transition-transform ${isDemoDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              
              {isDemoDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsDemoDropdownOpen(false)}
                  ></div>
                  <div className="absolute top-full right-0 mt-2 bg-white text-gray-800 rounded-xl shadow-xl shadow-black/10 border border-gray-100 overflow-hidden w-48 z-50">
                    <div className="px-4 py-2.5 border-b border-gray-100 bg-gray-50/50">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Tampilan Demo</p>
                    </div>
                    <div className="flex flex-col py-1">
                      {['BUPATI', 'OPD', 'ADMIN', 'MITRA', 'FORM'].map(m => (
                        <button 
                          key={m}
                          onClick={(e) => {
                            e.stopPropagation();
                            setViewMode(m);
                            setIsDemoDropdownOpen(false);
                          }}
                          className={`text-left px-4 py-2.5 text-xs transition-colors ${viewMode === m ? 'font-bold text-[#1B4332] bg-green-50' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                          Mode: {m}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          
          {/* VIEW: BUPATI */}
          {viewMode === 'BUPATI' && (
             <div className="animate-in fade-in duration-500 space-y-6">
                <section>
                  <h2 className="text-xl font-bold text-gray-800">Selamat datang, Bapak Bupati</h2>
                  <p className="text-xs text-gray-500 mt-1">Ringkasan kerja sama daerah Kabupaten Tanah Laut — data per 21 April 2026</p>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {statsBupati.map((s, i) => (
                    <div key={i} className={`p-5 rounded-2xl ${s.color} shadow-lg h-36 flex flex-col justify-between relative overflow-hidden group`}>
                      <div className={`absolute -right-4 -bottom-4 transform rotate-12 group-hover:scale-125 transition-transform duration-500 delay-75 ${i > 1 ? 'opacity-10' : 'opacity-20'}`}>
                        {React.cloneElement(s.icon as React.ReactElement, { size: 80 })}
                      </div>
                      <div className="absolute -left-6 -top-6 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
                      <div className="flex justify-between items-start relative z-10 w-full mb-2">
                        <p className="text-5xl font-extrabold tracking-tight drop-shadow-sm">{s.value}</p>
                        {i > 1 && <ExternalLink size={16} className="opacity-40" />}
                      </div>
                      <div className="relative z-10">
                        <p className="text-xs font-bold uppercase tracking-wider opacity-90 drop-shadow-sm line-clamp-1">{s.title}</p>
                        {s.sub && (
                          <p className={`text-[10px] mt-1.5 font-bold inline-block px-2.5 py-0.5 rounded-full ${i > 1 ? 'bg-gray-100 text-gray-600' : 'bg-black/10 text-white'}`}>
                            {s.sub}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-sm text-gray-800 mb-6">Distribusi kerja sama per jenis</h3>
                    <div className="space-y-4">
                      {distributionData.map((item, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-[10px] font-medium text-gray-600">
                            <span>{item.label}</span>
                            <span>{item.count} ({item.percent}%)</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percent}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex flex-col gap-4">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex-1 flex flex-col justify-center">
                      <h3 className="font-bold text-sm text-gray-800 mb-6">Pipeline pengajuan saat ini</h3>
                      <div className="flex items-start justify-between relative px-2">
                        {/* Connecting Line */}
                        <div className="absolute top-5 left-6 right-6 h-0.5 bg-gray-100 z-0"></div>
                        
                        {pipelineData.map((item, idx) => (
                          <div key={idx} className="relative z-10 flex flex-col items-center gap-2 group">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${item.bg} ${item.color} shadow-sm border-[3px] border-white group-hover:scale-110 transition-transform`}>
                              {item.count}
                            </div>
                            <p className="text-[9px] text-gray-500 font-bold uppercase w-16 text-center leading-tight">
                              {item.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl flex items-start gap-3">
                      <AlertTriangle size={18} className="text-orange-600 shrink-0" />
                      <div>
                        <h4 className="text-xs font-bold text-orange-800">KS akan berakhir 30 hari ke depan</h4>
                        <p className="text-[10px] text-orange-700 mt-1 leading-relaxed">6 kerja sama mendekati masa berakhir — perlu perpanjangan</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-5 border-b border-b-gray-100 flex justify-between items-center text-sm font-bold">KS aktif terbaru</div>
                    <table className="w-full text-left text-xs">
                      <thead className="bg-gray-50 text-gray-400 font-bold uppercase text-[9px]">
                        <tr><th className="px-5 py-3">Mitra</th><th className="px-5 py-3">OPD</th><th className="px-5 py-3">Status</th></tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr><td className="px-5 py-4 font-bold">Telkom Indonesia</td><td className="px-5 py-4">Diskominfo</td><td className="px-5 py-4"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[9px] font-bold">AKTIF</span></td></tr>
                        <tr><td className="px-5 py-4 font-bold">Univ. Lambung Mangkurat</td><td className="px-5 py-4">Disdik</td><td className="px-5 py-4"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[9px] font-bold">AKTIF</span></td></tr>
                        <tr><td className="px-5 py-4 font-bold">PLN UP3 Banjarmasin</td><td className="px-5 py-4">DPUPR</td><td className="px-5 py-4"><span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-[9px] font-bold">DIPROSES</span></td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-sm text-gray-800 mb-6">Top OPD pelaksana KS</h3>
                    <div className="space-y-4">
                      {topOPD.map((opd, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-[10px] font-bold text-gray-600"><span>{opd.name}</span><span>{opd.count}</span></div>
                          <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-[#1B4332] h-full rounded-full" style={{ width: `${(opd.count/topOPD[0].count)*100}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-sm text-gray-800">Rekomendasi Mitra Potensial</h3>
                    <button className="text-[11px] text-[#1B4332] font-bold hover:underline">Lihat semua kandidat</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {potentialPartners.map((partner, idx) => (
                      <div key={idx} className="p-4 border border-gray-100 rounded-xl hover:border-green-200 hover:shadow-md transition-all group bg-gray-50/50 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex justify-between items-start mb-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg shrink-0 ${partner.color}`}>
                              {partner.icon}
                            </div>
                            <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md">
                              <TrendingUp size={10} />
                              <span className="text-[10px] font-bold">{partner.match}% Cocok</span>
                            </div>
                          </div>
                          <h4 className="font-bold text-[13px] text-gray-800 leading-tight mb-1 group-hover:text-[#1B4332] transition-colors">{partner.name}</h4>
                          <p className="text-[10px] text-gray-500 font-medium mb-4">{partner.type}</p>
                        </div>
                        
                        <div className="mt-auto border-t border-gray-100 pt-3">
                          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Potensi Sinergi OPD:</p>
                          <div className="flex flex-wrap gap-1">
                            {partner.opd.map((o, i) => (
                              <span key={i} className="text-[9px] bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded shadow-sm">{o}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
             </div>
          )}

          {/* VIEW: ADMIN TKKSD */}
          {viewMode === 'ADMIN' && (
            <div className="animate-in fade-in duration-500 space-y-6">
              <section>
                <h2 className="text-xl font-bold text-gray-800">Dashboard Admin TKKSD</h2>
                <p className="text-xs text-gray-500 mt-1">Kelola verifikasi, disposisi, dan monitoring kerja sama — 21 April 2026</p>
              </section>

              <div className="bg-orange-50 border border-orange-100 p-3.5 rounded-lg flex items-center gap-3 text-orange-700 text-[11px] font-medium">
                <AlertTriangle size={16} />
                <span>7 pengajuan menunggu verifikasi — 2 di antaranya sudah lebih dari 3 hari kerja</span>
              </div>

              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {statsAdmin.map((s, i) => (
                  <div key={i} className={`p-5 rounded-2xl ${s.color} shadow-lg h-36 flex flex-col justify-between relative overflow-hidden group`}>
                    <div className={`absolute -right-4 -bottom-4 transform rotate-12 group-hover:scale-125 transition-transform duration-500 delay-75 ${i === 3 ? 'opacity-10' : 'opacity-20'}`}>
                      {React.cloneElement(s.icon as React.ReactElement, { size: 80 })}
                    </div>
                    <div className="absolute -left-6 -top-6 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
                    <div className="flex justify-between items-start relative z-10 w-full mb-2">
                      <p className="text-5xl font-extrabold tracking-tight drop-shadow-sm">{s.value}</p>
                    </div>
                    <div className="relative z-10">
                      <p className="text-xs font-bold uppercase tracking-wider opacity-90 drop-shadow-sm line-clamp-1">{s.title}</p>
                      {s.sub && (
                        <p className={`text-[10px] mt-1.5 font-bold inline-block px-2.5 py-0.5 rounded-full ${i === 3 ? 'bg-gray-100 text-gray-600' : 'bg-black/10 text-white'}`}>
                          {s.sub}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </section>

              <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-5 border-b border-b-gray-100 flex justify-between items-center text-sm font-bold text-gray-800">Antrian verifikasi pengajuan</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[11px]">
                      <thead className="bg-gray-50 text-gray-400 font-bold uppercase text-[9px]">
                        <tr><th className="px-5 py-3.5">ID</th><th className="px-5 py-3.5">Mitra</th><th className="px-5 py-3.5">Jenis</th><th className="px-5 py-3.5">Tgl Masuk</th><th className="px-5 py-3.5">Status</th><th className="px-5 py-3.5">Aksi</th></tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {verificationQueue.map((item, i) => (
                          <tr key={i} className="hover:bg-gray-50">
                            <td className="px-5 py-4 text-gray-400">{item.id}</td>
                            <td className="px-5 py-4 font-bold text-gray-700">{item.mitra}</td>
                            <td className="px-5 py-4 text-gray-500">{item.jenis}</td>
                            <td className="px-5 py-4 text-gray-500">{item.tgl}</td>
                            <td className="px-5 py-4"><span className={`px-2.5 py-1 rounded-md font-bold text-[9px] uppercase ${item.sColor}`}>{item.status}</span></td>
                            <td className="px-5 py-4"><button className={`px-4 py-1.5 border rounded-lg font-bold text-[10px] ${item.aColor}`}>{item.action}</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-sm text-gray-800 mb-4">Pipeline bulan ini</h3>
                    <div className="grid grid-cols-5 gap-1.5">
                      {[{v: 14, l: 'Baru', c: 'text-green-600', bg: 'bg-green-50'}, {v: 7, l: 'Verif', c: 'text-yellow-600', bg: 'bg-yellow-50'}, {v: 5, l: 'Disp', c: 'text-blue-600', bg: 'bg-blue-50'}, {v: 9, l: 'Proses', c: 'text-purple-600', bg: 'bg-purple-50'}, {v: 3, l: 'Selesai', c: 'text-emerald-600', bg: 'bg-emerald-50'}].map((p, i) => (
                        <div key={i} className={`${p.bg} py-3 rounded-lg text-center`}><p className={`text-sm font-bold ${p.c}`}>{p.v}</p><p className="text-[7px] font-bold text-gray-400 uppercase mt-1 leading-none">{p.l}</p></div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-sm text-gray-800 mb-4">Notifikasi sistem</h3>
                    <div className="space-y-5">
                      {systemNotifications.map((n, i) => (
                        <div key={i} className="flex gap-3 items-start"><div className={`w-2 h-2 rounded-full ${n.color} mt-1.5 shrink-0`}></div><div className="flex-1 min-w-0"><p className="text-[11px] text-gray-700 leading-tight">{n.text}</p><p className="text-[10px] text-gray-400 mt-1">{n.time}</p></div></div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* VIEW: OPD (SESUAI image_b4e93d.png) */}
          {viewMode === 'OPD' && (
            <div className="animate-in slide-in-from-right duration-500 space-y-6">
              <section>
                <h2 className="text-xl font-bold text-gray-800">Dashboard OPD — Diskominfo</h2>
                <p className="text-xs text-gray-500 mt-1">Kelola pelaksanaan kerja sama yang didisposisi ke dinas Anda</p>
              </section>

              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] text-white shadow-lg h-32 flex flex-col justify-between relative overflow-hidden group">
                  <Briefcase size={64} className="absolute -right-4 -bottom-4 text-white opacity-10 group-hover:scale-110 transition-transform" />
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  <p className="text-5xl font-extrabold relative z-10 tracking-tight">8</p>
                  <p className="text-xs font-bold uppercase tracking-wider relative z-10 opacity-90 drop-shadow-sm">KS aktif di dinas ini</p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#F39C12] to-[#D68910] text-white shadow-lg h-32 flex flex-col justify-between relative overflow-hidden group">
                  <Inbox size={64} className="absolute -right-4 -bottom-4 text-white opacity-10 group-hover:scale-110 transition-transform" />
                  <div className="absolute top-0 left-0 w-20 h-20 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  <p className="text-5xl font-extrabold relative z-10 tracking-tight">2</p>
                  <p className="text-xs font-bold uppercase tracking-wider relative z-10 opacity-90 drop-shadow-sm">Disposisi baru masuk</p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm h-32 flex flex-col justify-between relative overflow-hidden group">
                  <FileText size={64} className="absolute -right-4 -bottom-4 text-red-500 opacity-5 group-hover:scale-110 transition-transform" />
                  <p className="text-5xl font-extrabold text-gray-800 relative z-10 tracking-tight">3</p>
                  <div className="relative z-10">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-600">Laporan jatuh tempo</p>
                    <p className="text-[10px] text-red-600 font-bold mt-1.5 bg-red-50 inline-block px-2 py-0.5 rounded-full">Perlu segera dikirim</p>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm h-32 flex flex-col justify-between relative overflow-hidden group">
                  <Clock size={64} className="absolute -right-4 -bottom-4 text-orange-500 opacity-5 group-hover:scale-110 transition-transform" />
                  <p className="text-5xl font-extrabold text-gray-800 relative z-10 tracking-tight">2</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-600 relative z-10">KS berakhir bulan ini</p>
                </div>
              </section>

              <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex justify-between items-center px-1"><h3 className="font-bold text-sm text-gray-800">Kerja sama aktif</h3><button className="text-xs text-gray-400 flex items-center gap-1">Lihat semua <ArrowRight size={12}/></button></div>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-5">
                    <div className="flex justify-between items-start"><div><h4 className="font-bold text-sm text-gray-800">Kerja Sama Smart City — Telkom Indonesia</h4><p className="text-[10px] text-gray-400 mt-1">KS-2026-0031 · Mulai: 1 Mar 2026 · Berakhir: 28 Feb 2027</p></div><span className="text-[10px] font-bold px-2 py-1 rounded-md bg-green-50 text-green-600">Aktif</span></div>
                    <div className="space-y-2"><div className="flex justify-between text-[10px] font-bold"><span className="text-gray-400 uppercase">Progress pelaksanaan</span><span className="text-[#1B4332]">65%</span></div><div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><div className="h-full bg-[#1B4332] rounded-full" style={{ width: '65%' }}></div></div></div>
                    <div className="flex gap-2"><button className="px-4 py-1.5 border border-[#1B4332] rounded-lg text-[10px] font-bold text-[#1B4332]">Update Progress</button><button className="px-4 py-1.5 border border-yellow-500 rounded-lg text-[10px] font-bold text-yellow-700">Kirim Laporan</button></div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-5">
                    <div className="flex justify-between items-start"><div><h4 className="font-bold text-sm text-gray-800">Pengembangan SDM Digital — Digitaliz</h4><p className="text-[10px] text-gray-400 mt-1">KS-2026-0028 · Mulai: 15 Feb 2026 · Berakhir: 15 Aug 2026</p></div><span className="text-[10px] font-bold px-2 py-1 rounded-md bg-blue-50 text-blue-600">Diproses</span></div>
                    <div className="space-y-2"><div className="flex justify-between text-[10px] font-bold"><span className="text-gray-400 uppercase">Progress pelaksanaan</span><span className="text-yellow-500">40%</span></div><div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><div className="h-full bg-yellow-500 rounded-full" style={{ width: '40%' }}></div></div></div>
                    <div className="flex gap-2"><button className="px-4 py-1.5 border border-[#1B4332] rounded-lg text-[10px] font-bold text-[#1B4332]">Update Progress</button><button className="px-4 py-1.5 border border-yellow-500 rounded-lg text-[10px] font-bold text-yellow-700">Kirim Laporan</button></div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-5">
                    <div className="flex justify-between items-start"><div><h4 className="font-bold text-sm text-gray-800">Sistem Informasi Daerah — Kominfo RI</h4><p className="text-[10px] text-gray-400 mt-1">KS-2025-0094 · Berakhir: 30 Apr 2026</p></div><span className="text-[10px] font-bold px-2 py-1 rounded-md bg-red-50 text-red-500">9 hari lagi</span></div>
                    <div className="space-y-2"><div className="flex justify-between text-[10px] font-bold"><span className="text-gray-400 uppercase">Progress pelaksanaan</span><span className="text-[#1B4332]">90%</span></div><div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><div className="h-full bg-[#1B4332] rounded-full" style={{ width: '90%' }}></div></div></div>
                    <div className="p-2.5 bg-orange-50 border border-orange-100 rounded-lg flex items-center gap-2 text-orange-700 text-[10px] font-bold"><AlertTriangle size={14} /><span>Segera kirim laporan akhir sebelum KS berakhir</span></div>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-sm text-gray-800 mb-4">Disposisi baru masuk</h3>
                    <div className="p-4 border border-dashed border-gray-300 rounded-xl bg-white space-y-2"><p className="text-[11px] font-bold text-gray-800 leading-tight">KS-2026-0042 — Digitaliz (Smart City)</p><p className="text-[10px] text-gray-400">Dari: Admin TKKSD · 20 Apr 2026</p><p className="text-[11px] text-gray-600 italic">"Catatan: Koordinasikan jadwal kick-off dengan tim teknis Digitaliz minggu ini"</p><div className="flex gap-2 pt-2"><button className="flex-1 py-1.5 bg-[#1B4332] text-white text-[11px] font-bold rounded-lg">Terima</button><button className="flex-1 py-1.5 border border-red-500 text-red-600 text-[11px] font-bold rounded-lg">Feedback Teknis</button></div></div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-sm text-gray-800 mb-4">Deadline laporan</h3>
                    <div className="space-y-4"><div className="flex justify-between items-center text-[11px]"><span className="text-gray-600">Laporan bulanan — Smart City</span><span className="text-red-500 font-bold">25 Apr 2026</span></div><div className="flex justify-between items-center text-[11px]"><span className="text-gray-600">Laporan akhir — Sistem Informasi</span><span className="text-red-500 font-bold">29 Apr 2026</span></div><div className="flex justify-between items-center text-[11px]"><span className="text-gray-600">Laporan Q2 — SDM Digital</span><span className="text-green-700 font-bold">30 Jun 2026</span></div></div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-sm text-gray-800 mb-4">Notifikasi</h3>
                    <div className="space-y-5"><div className="flex gap-3 items-start"><div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0"></div><div className="flex-1 min-w-0"><p className="text-[11px] text-gray-700 leading-tight">KS-2025-0094 berakhir dalam 9 hari — segera kirim laporan akhir</p><p className="text-[10px] text-gray-400 mt-1">Hari ini</p></div></div><div className="flex gap-3 items-start"><div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 shrink-0"></div><div className="flex-1 min-w-0"><p className="text-[11px] text-gray-700 leading-tight">2 disposisi baru dari Admin TKKSD menunggu konfirmasi Anda</p><p className="text-[10px] text-gray-400 mt-1">1 jam lalu</p></div></div><div className="flex gap-3 items-start"><div className="w-2 h-2 rounded-full bg-[#1B4332] mt-1.5 shrink-0"></div><div className="flex-1 min-w-0"><p className="text-[11px] text-gray-700 leading-tight">Laporan bulan Maret berhasil dikirim ke Admin TKKSD</p><p className="text-[10px] text-gray-400 mt-1">2 Apr</p></div></div></div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* VIEW: MITRA (SESUAI image_b4da93.png) */}
          {viewMode === 'MITRA' && (
            <div className="animate-in fade-in duration-500 space-y-6">
               <section>
                 <h2 className="text-xl font-bold text-gray-800">Halo, Digitaliz!</h2>
                 <p className="text-xs text-gray-500 mt-1">Pantau status kerja sama dan pengajuan Anda di sini</p>
               </section>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {statsMitra.map((s, i) => (
                  <div key={i} className={`p-6 rounded-2xl ${s.color} shadow-lg h-36 flex flex-col justify-between relative overflow-hidden group`}>
                    <div className="absolute -right-6 -bottom-6 opacity-20 transform rotate-12 group-hover:scale-125 transition-transform duration-500 delay-100">
                      {React.cloneElement(s.icon as React.ReactElement, { size: 90 })}
                    </div>
                    <div className="absolute -left-6 -top-6 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
                    <p className="text-6xl font-extrabold relative z-10 tracking-tight drop-shadow-sm">{s.value}</p>
                    <p className="text-xs font-bold uppercase tracking-wider relative z-10 opacity-90 drop-shadow-sm">{s.title}</p>
                  </div>
                ))}
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                 {/* Kolom Kiri: Status Pengajuan */}
                 <div className="lg:col-span-8 space-y-4">
                   <div className="flex justify-between items-center px-1">
                     <h3 className="font-bold text-sm text-gray-800">Status pengajuan terbaru</h3>
                     <button className="text-[11px] text-gray-400 flex items-center gap-1 hover:text-[#1B4332]">
                       Lihat semua <ArrowRight size={12}/>
                     </button>
                   </div>

                   {/* Main Progress Card */}
                   <div className="bg-white p-6 rounded-xl border border-yellow-200 bg-yellow-50/20 shadow-sm space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-sm text-[#B7791F]">KS-2026-0042 — Kerja Sama Smart City</h4>
                          <p className="text-[10px] text-gray-400 mt-1">Diajukan 20 April 2026 · Jenis: Swasta</p>
                        </div>
                      </div>

                      {/* Stepper Progres */}
                      <div className="relative pt-2 pb-6 px-4">
                        <div className="absolute top-[35%] left-[10%] right-[10%] h-[1px] bg-gray-200"></div>
                        <div className="flex justify-between relative z-10">
                          {[
                            { l: 'Diajukan', active: true, done: true },
                            { l: 'Diverifikasi', active: true, current: true, n: '2' },
                            { l: 'Disposisi', active: false, n: '3' },
                            { l: 'Diproses', active: false, n: '4' },
                            { l: 'Selesai', active: false, n: '5' }
                          ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                               <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold border-2 ${step.done ? 'bg-[#1B4332] border-[#1B4332] text-white' : step.current ? 'bg-[#F39C12] border-[#F39C12] text-white' : 'bg-white border-gray-100 text-gray-300'}`}>
                                  {step.done ? <Check size={14} strokeWidth={3} /> : step.n}
                               </div>
                               <span className={`text-[10px] font-bold uppercase tracking-tighter ${step.active ? 'text-green-800' : 'text-gray-300'}`}>
                                 {step.l}
                               </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="text-[10px] text-[#B7791F] font-bold text-center italic">
                        Tim sedang memverifikasi dokumen Anda. Est. 3-5 hari kerja.
                      </p>
                   </div>

                   {/* Other Simple Cards */}
                   {[
                     { id: 'KS-2026-0031', t: 'Pengembangan SDM Digital', d: 'Diajukan 5 Maret 2026 · Diskominfo', s: 'Diproses', sc: 'text-blue-600 bg-blue-50' },
                     { id: 'KS-2025-0089', t: 'Digitalisasi Pelayanan', d: 'Selesai 10 Des 2025 · Setda', s: 'Selesai', sc: 'text-purple-600 bg-purple-50' }
                   ].map((item, i) => (
                     <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-300">
                             <FileText size={20} />
                          </div>
                          <div>
                            <h4 className="text-[11px] font-bold text-gray-700">{item.id} — {item.t}</h4>
                            <p className="text-[10px] text-gray-400">{item.d}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase ${item.sc}`}>{item.s}</span>
                     </div>
                   ))}
                 </div>

                 {/* Kolom Kanan: Notifikasi & Aksi */}
                 <div className="lg:col-span-4 space-y-6">
                    {/* Notifikasi terbaru */}
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="font-bold text-sm text-gray-800 mb-4">Notifikasi terbaru</h3>
                      <div className="space-y-5">
                        {mitraNotifications.map((n, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <div className={`w-2 h-2 rounded-full ${n.color} mt-1.5 shrink-0`}></div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] text-gray-700 leading-tight">{n.text}</p>
                              <p className="text-[10px] text-gray-400 mt-1">{n.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Aksi cepat */}
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="font-bold text-sm text-gray-800 mb-4">Aksi cepat</h3>
                      <div className="space-y-2.5">
                        <button className="w-full py-2.5 bg-[#1B4332] text-white text-[11px] font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-green-800 transition-colors">
                          <PlusCircle size={14} /> + Ajukan kerja sama baru
                        </button>
                        <button className="w-full py-2.5 bg-green-50 text-[#1B4332] text-[11px] font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-green-100 transition-colors border border-green-100">
                          <Download size={14} /> ↓ Unduh MoU terakhir
                        </button>
                        <button className="w-full py-2.5 bg-[#FEF3C7] text-[#92400E] text-[11px] font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#FDE68A] transition-colors border border-[#FDE68A]">
                          <MessageSquare size={14} /> ? Konsultasi via WhatsApp
                        </button>
                      </div>
                    </div>
                 </div>
               </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default App;