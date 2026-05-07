import React from 'react';
import { ArrowLeft, FileUp, Check } from 'lucide-react';
import type { ViewMode } from '../../types';
import DemoModeDropdown from '../common/DemoModeDropdown';

type FormViewProps = {
  viewMode: ViewMode;
  onBackToDashboard: () => void;
  isDemoDropdownOpen: boolean;
  onToggleDemoDropdown: () => void;
  onCloseDemoDropdown: () => void;
  onSelectViewMode: (mode: ViewMode) => void;
};

const FormView = ({
  viewMode,
  onBackToDashboard,
  isDemoDropdownOpen,
  onToggleDemoDropdown,
  onCloseDemoDropdown,
  onSelectViewMode
}: FormViewProps) => (
  <div className="min-h-screen bg-gray-50 font-sans p-4 md:p-8">
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="flex items-center justify-between relative z-50">
        <button
          onClick={onBackToDashboard}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800 font-medium"
        >
          <ArrowLeft size={18} /> Kembali ke Dashboard
        </button>
        <DemoModeDropdown
          viewMode={viewMode}
          isOpen={isDemoDropdownOpen}
          label="Ganti Tampilan Demo"
          onToggle={onToggleDemoDropdown}
          onClose={onCloseDemoDropdown}
          onSelect={onSelectViewMode}
          buttonClassName="flex items-center gap-2 text-xs font-bold px-3 py-1.5 bg-yellow-500 text-gray-900 border rounded-full hover:bg-yellow-400"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { num: '01', title: 'Daftar / Masuk', sub: 'Buat akun atau masuk dengan akun Anda.' },
          { num: '02', title: 'Isi Formulir', sub: 'Lengkapi data instansi dan tujuan kerja sama.', active: true },
          { num: '03', title: 'Unggah Dokumen', sub: 'Lampirkan proposal dan dokumen pendukung.' },
          { num: '04', title: 'Verifikasi', sub: 'Tim memverifikasi dalam 5 hari kerja.' },
          { num: '05', title: 'MoU', sub: 'Penjadwalan penandatanganan kesepakatan.' }
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center p-4">
            <span className={`text-xl font-extrabold ${step.active ? 'text-[#F39C12]' : 'text-gray-300'}`}>{step.num}</span>
            <h3 className={`text-sm font-bold mt-2 ${step.active ? 'text-[#1B4332]' : 'text-gray-400'}`}>{step.title}</h3>
            <p className="text-[10px] text-gray-400 mt-1 leading-tight">{step.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
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

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>

            <h3 className="text-2xl font-bold mb-8">Persyaratan</h3>
            <ul className="space-y-6">
              {[
                'Instansi berbadan hukum / pemerintah resmi',
                'Proposal kerja sama (PDF, maks 10MB)',
                'Profil singkat instansi',
                'Surat permohonan resmi',
                'Kontak penanggung jawab aktif'
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

export default FormView;
