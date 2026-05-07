import React from 'react';
import { ChevronDown } from 'lucide-react';
import type { ViewMode } from '../../types';

type DemoModeDropdownProps = {
  viewMode: ViewMode;
  isOpen: boolean;
  label: string;
  onToggle: () => void;
  onClose: () => void;
  onSelect: (mode: ViewMode) => void;
  buttonClassName: string;
  prefixIcon?: React.ReactNode;
  menuAlign?: 'left' | 'right';
};

const DemoModeDropdown = ({
  viewMode,
  isOpen,
  label,
  onToggle,
  onClose,
  onSelect,
  buttonClassName,
  prefixIcon,
  menuAlign = 'right'
}: DemoModeDropdownProps) => (
  <div className="relative">
    <button
      onClick={onToggle}
      className={buttonClassName}
    >
      {prefixIcon}
      <span className="text-[10px] font-bold uppercase">{label}</span>
      <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>

    {isOpen && (
      <>
        <div
          className="fixed inset-0 z-40"
          onClick={onClose}
        ></div>
        <div
          className={`absolute top-full ${menuAlign === 'right' ? 'right-0' : 'left-0'} mt-2 bg-white text-gray-800 rounded-xl shadow-xl shadow-black/10 border border-gray-100 overflow-hidden w-48 z-50`}
        >
          <div className="px-4 py-2.5 border-b border-gray-100 bg-gray-50/50">
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Tampilan Demo</p>
          </div>
          <div className="flex flex-col py-1">
            {['BUPATI', 'OPD', 'ADMIN', 'MITRA', 'FORM'].map((mode) => (
              <button
                key={mode}
                onClick={(event) => {
                  event.stopPropagation();
                  onSelect(mode as ViewMode);
                }}
                className={`text-left px-4 py-2.5 text-xs transition-colors ${viewMode === mode ? 'font-bold text-[#1B4332] bg-green-50' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                Mode: {mode}
              </button>
            ))}
          </div>
        </div>
      </>
    )}
  </div>
);

export default DemoModeDropdown;
