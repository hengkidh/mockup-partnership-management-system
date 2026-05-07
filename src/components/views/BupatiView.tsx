import React from 'react';
import { AlertTriangle, ExternalLink, MonitorPlay, TrendingUp } from 'lucide-react';
import type { DistributionItem, OpdStat, PipelineItem, PotentialPartner, StatCard } from '../../types';

type BupatiViewProps = {
  statsBupati: StatCard[];
  distributionData: DistributionItem[];
  pipelineData: PipelineItem[];
  opdStats: OpdStat[];
  potentialPartners: PotentialPartner[];
  onStartPresentation: () => void;
};

const BupatiView = ({
  statsBupati,
  distributionData,
  pipelineData,
  opdStats,
  potentialPartners,
  onStartPresentation
}: BupatiViewProps) => {
  const sortedOpdStats = opdStats.slice().sort((a, b) => (b.active / b.target) - (a.active / a.target));

  return (
    <div className="animate-in fade-in duration-500 space-y-6">
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Selamat datang, Bapak Bupati</h2>
          <p className="text-xs text-gray-500 mt-1">Ringkasan kerja sama daerah Kabupaten Tanah Laut — data per 21 April 2026</p>
        </div>
        <button
          onClick={onStartPresentation}
          className="flex items-center justify-center gap-2 bg-[#1B4332] text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto"
        >
          <MonitorPlay size={16} /> Mode Presentasi TV
        </button>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsBupati.map((s, i) => (
          <div key={i} className={`p-5 rounded-2xl ${s.color} shadow-lg h-36 flex flex-col justify-between relative overflow-hidden group`}>
            <div className={`absolute -right-4 -bottom-4 transform rotate-12 group-hover:scale-125 transition-transform duration-500 delay-75 ${i > 1 ? 'opacity-10' : 'opacity-20'}`}>
              {React.cloneElement(s.icon as React.ReactElement<any>, { size: 80 })}
            </div>
            <div className="absolute -left-6 -top-6 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
            <div className="flex justify-between items-start relative z-10 w-full mb-2">
              <div className="flex items-baseline gap-1">
                <p className="text-5xl font-extrabold tracking-tight drop-shadow-sm">{s.value}</p>
                {s.max && <p className="text-2xl font-bold opacity-50">{s.max}</p>}
              </div>
              {i > 1 && <ExternalLink size={16} className="opacity-40" />}
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-wider opacity-90 drop-shadow-sm line-clamp-1">{s.title}</p>
              {s.progress !== undefined && (
                <div className="w-full bg-gray-200 rounded-full h-1 mt-2 mb-1">
                  <div className="bg-green-500 h-1 rounded-full" style={{ width: `${s.progress}%` }}></div>
                </div>
              )}
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
        <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-[350px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-sm text-gray-800">Progres Target SKPD/OPD</h3>
            <button className="text-[9px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded">Lihat Semua</button>
          </div>
          <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-1">
            {sortedOpdStats.map((opd, i) => {
              const perc = Math.round((opd.active / opd.target) * 100);
              return (
                <div key={i} className="space-y-1 group hover:bg-gray-50/50 p-1.5 -ml-1.5 rounded-lg transition-colors">
                  <div className="flex justify-between text-[10px] font-bold text-gray-600">
                    <span className="truncate mr-2 text-gray-700" title={opd.name}>{opd.name}</span>
                    <span className="shrink-0 text-green-700">{opd.active} / {opd.target}</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-500 group-hover:opacity-80 ${perc >= 100 ? 'bg-green-500' : perc >= 70 ? 'bg-yellow-400' : 'bg-red-400'}`} style={{ width: `${Math.min(perc, 100)}%` }}></div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[8px] text-gray-400 font-medium">Pencapaian target tahun ini</span>
                    <span className="text-[8px] font-extrabold text-gray-500">{perc}%</span>
                  </div>
                </div>
              );
            })}
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
  );
};

export default BupatiView;
