import React from 'react';
import { Bell, User } from 'lucide-react';
import type { ViewMode } from '../../types';
import DemoModeDropdown from '../common/DemoModeDropdown';

type NavbarProps = {
  viewMode: ViewMode;
  isDemoDropdownOpen: boolean;
  onToggleDemoDropdown: () => void;
  onCloseDemoDropdown: () => void;
  onSelectViewMode: (mode: ViewMode) => void;
};

const Navbar = ({
  viewMode,
  isDemoDropdownOpen,
  onToggleDemoDropdown,
  onCloseDemoDropdown,
  onSelectViewMode
}: NavbarProps) => (
  <header className="h-16 bg-[#1B4332] text-white flex items-center justify-between px-6 shrink-0 z-50 relative">
    <div className="flex items-center gap-4">
      <div className="hidden sm:flex flex-col">
        <h1 className="text-sm font-bold">Badan Pemerintahan</h1>
        <p className="text-[10px] opacity-70">Kabupaten Tanah Laut — Role: {viewMode}</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <button className="p-2 hover:bg-white/10 rounded-full relative">
        <Bell size={18} />
        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#1B4332]"></span>
      </button>
      <DemoModeDropdown
        viewMode={viewMode}
        isOpen={isDemoDropdownOpen}
        label={viewMode === 'MITRA' ? 'Digitaliz' : viewMode}
        onToggle={onToggleDemoDropdown}
        onClose={onCloseDemoDropdown}
        onSelect={onSelectViewMode}
        buttonClassName="flex items-center gap-2 bg-yellow-500 text-gray-900 px-3 py-1.5 rounded-full cursor-pointer hover:bg-yellow-400 transition-colors"
        prefixIcon={<User size={14} />}
      />
    </div>
  </header>
);

export default Navbar;
