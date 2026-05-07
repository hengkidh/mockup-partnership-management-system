import React from 'react';
import {
  Home,
  List,
  PieChart,
  FileText,
  TrendingUp,
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
  Clock,
  User,
  PlusCircle
} from 'lucide-react';
import type { ViewMode } from '../../types';

type SidebarProps = {
  isOpen: boolean;
  viewMode: ViewMode;
  onToggle: () => void;
};

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string | number | null;
  onClick?: () => void;
  isOpen: boolean;
};

const SidebarItem = ({
  icon,
  label,
  active = false,
  badge = null,
  onClick,
  isOpen
}: SidebarItemProps) => (
  <li>
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${active ? 'bg-green-50 text-[#1B4332] font-semibold' : 'text-gray-500 hover:bg-gray-100'}`}
    >
      <div className="flex items-center gap-3">
        {icon}
        {isOpen && <span className="truncate">{label}</span>}
      </div>
      {isOpen && badge && (
        <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">{badge}</span>
      )}
    </button>
  </li>
);

const Sidebar = ({ isOpen, viewMode, onToggle }: SidebarProps) => (
  <aside className={`${isOpen ? 'w-64' : 'w-20'} bg-white border-r border-r-gray-100 transition-all duration-300 ease-in-out flex flex-col z-20 shrink-0`}>
    <div className="p-4 flex items-center gap-3 border-b h-16 bg-[#1B4332]">
      <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-white font-bold shrink-0">TL</div>
      {isOpen && (
        <div className="text-white overflow-hidden whitespace-nowrap">
          <p className="text-xs font-bold leading-tight">Badan Pemerintahan</p>
          <p className="text-[10px] opacity-80 leading-tight">& Kerja Sama</p>
        </div>
      )}
    </div>

    <nav className="flex-1 py-4 overflow-y-auto">
      <div className="px-4 mb-2">
        <p className={`text-[10px] font-bold text-gray-400 uppercase tracking-wider ${!isOpen && 'hidden'}`}>UTAMA</p>
      </div>
      <ul className="space-y-1 px-2 mb-6">
        <SidebarItem isOpen={isOpen} icon={<Home size={20} />} label="Beranda" active={true} />
        {viewMode === 'BUPATI' && (
          <>
            <SidebarItem isOpen={isOpen} icon={<List size={20} />} label="Daftar KS Aktif" />
            <SidebarItem isOpen={isOpen} icon={<PieChart size={20} />} label="Distribusi OPD" />
          </>
        )}
        {viewMode === 'OPD' && (
          <>
            <SidebarItem isOpen={isOpen} icon={<Inbox size={20} />} label="Disposisi Masuk" badge="2" />
            <SidebarItem isOpen={isOpen} icon={<Briefcase size={20} />} label="Kerja Sama Saya" />
          </>
        )}
        {viewMode === 'ADMIN' && (
          <>
            <SidebarItem isOpen={isOpen} icon={<Clock size={20} />} label="Verifikasi Pengajuan" badge="7" />
            <SidebarItem isOpen={isOpen} icon={<ArrowRight size={20} />} label="Disposisi ke OPD" />
            <SidebarItem isOpen={isOpen} icon={<PlayCircle size={20} />} label="Monitoring Pipeline" />
          </>
        )}
        {viewMode === 'MITRA' && (
          <>
            <SidebarItem isOpen={isOpen} icon={<User size={20} />} label="Profil Instansi" />
            <SidebarItem isOpen={isOpen} icon={<PlusCircle size={20} />} label="Ajukan Kerja Sama" />
            <SidebarItem isOpen={isOpen} icon={<List size={20} />} label="Riwayat Pengajuan" />
          </>
        )}
      </ul>

      <div className="px-4 mb-2">
        <p className={`text-[10px] font-bold text-gray-400 uppercase tracking-wider ${!isOpen && 'hidden'}`}>
          {viewMode === 'BUPATI' ? 'LAPORAN' : viewMode === 'ADMIN' ? 'MANAJEMEN' : 'PELAKSANAAN'}
        </p>
      </div>
      <ul className="space-y-1 px-2">
        {viewMode === 'BUPATI' && (
          <>
            <SidebarItem isOpen={isOpen} icon={<FileText size={20} />} label="Laporan Evaluasi" />
            <SidebarItem isOpen={isOpen} icon={<TrendingUp size={20} />} label="Tren Tahunan" />
          </>
        )}
        {viewMode === 'OPD' && (
          <>
            <SidebarItem isOpen={isOpen} icon={<PlayCircle size={20} />} label="Progress" />
            <SidebarItem isOpen={isOpen} icon={<ClipboardCheck size={20} />} label="Laporan" />
            <SidebarItem isOpen={isOpen} icon={<FileBox size={20} />} label="Dokumen" />
          </>
        )}
        {viewMode === 'ADMIN' && (
          <>
            <SidebarItem isOpen={isOpen} icon={<Users size={20} />} label="Manajemen User" />
            <SidebarItem isOpen={isOpen} icon={<LayoutGrid size={20} />} label="Manajemen Konten" />
            <SidebarItem isOpen={isOpen} icon={<Settings size={20} />} label="Evaluasi KS" />
          </>
        )}
        {viewMode === 'MITRA' && (
          <>
            <SidebarItem isOpen={isOpen} icon={<FileBox size={20} />} label="Dokumen Saya" />
            <SidebarItem isOpen={isOpen} icon={<MessageSquare size={20} />} label="FAQ & Konsultasi" />
          </>
        )}
      </ul>
    </nav>

    <div className="p-4 border-t border-t-gray-100">
      <button onClick={onToggle} className="w-full flex items-center justify-center p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  </aside>
);

export default Sidebar;
