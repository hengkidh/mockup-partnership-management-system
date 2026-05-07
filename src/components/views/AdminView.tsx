import React from 'react';
import { AlertTriangle } from 'lucide-react';
import type { StatCard, SystemNotification, VerificationQueueItem } from '../../types';

type AdminViewProps = {
  statsAdmin: StatCard[];
  verificationQueue: VerificationQueueItem[];
  systemNotifications: SystemNotification[];
};

const AdminView = ({ statsAdmin, verificationQueue, systemNotifications }: AdminViewProps) => (
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
            {React.cloneElement(s.icon as React.ReactElement<any>, { size: 80 })}
          </div>
          <div className="absolute -left-6 -top-6 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
          <div className="flex justify-between items-start relative z-10 w-full mb-2">
            <div className="flex items-baseline gap-1">
              <p className="text-5xl font-extrabold tracking-tight drop-shadow-sm">{s.value}</p>
              {s.max && <p className="text-2xl font-bold opacity-50">{s.max}</p>}
            </div>
          </div>
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-wider opacity-90 drop-shadow-sm line-clamp-1">{s.title}</p>
            {s.progress !== undefined && (
              <div className="w-full bg-gray-200 rounded-full h-1 mt-2 mb-1">
                <div className="bg-green-500 h-1 rounded-full" style={{ width: `${s.progress}%` }}></div>
              </div>
            )}
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
            {[
              { v: 14, l: 'Baru', c: 'text-green-600', bg: 'bg-green-50' },
              { v: 7, l: 'Verif', c: 'text-yellow-600', bg: 'bg-yellow-50' },
              { v: 5, l: 'Disp', c: 'text-blue-600', bg: 'bg-blue-50' },
              { v: 9, l: 'Proses', c: 'text-purple-600', bg: 'bg-purple-50' },
              { v: 3, l: 'Selesai', c: 'text-emerald-600', bg: 'bg-emerald-50' }
            ].map((p, i) => (
              <div key={i} className={`${p.bg} py-3 rounded-lg text-center`}>
                <p className={`text-sm font-bold ${p.c}`}>{p.v}</p>
                <p className="text-[7px] font-bold text-gray-400 uppercase mt-1 leading-none">{p.l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-sm text-gray-800 mb-4">Notifikasi sistem</h3>
          <div className="space-y-5">
            {systemNotifications.map((n, i) => (
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
      </div>
    </section>
  </div>
);

export default AdminView;
