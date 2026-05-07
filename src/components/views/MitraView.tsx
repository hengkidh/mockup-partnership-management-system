import React from 'react';
import { ArrowRight, Check, Download, FileText, MessageSquare, PlusCircle } from 'lucide-react';
import type { MitraNotification, MitraStat } from '../../types';

type MitraViewProps = {
    statsMitra: MitraStat[];
    mitraNotifications: MitraNotification[];
};

const MitraView = ({ statsMitra, mitraNotifications }: MitraViewProps) => (
    <div className="animate-in fade-in duration-500 space-y-6">
        <section>
            <h2 className="text-xl font-bold text-gray-800">Halo, Digitaliz!</h2>
            <p className="text-xs text-gray-500 mt-1">Pantau status kerja sama dan pengajuan Anda di sini</p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statsMitra.map((s, i) => (
                <div key={i} className={`p-6 rounded-2xl ${s.color} shadow-lg h-36 flex flex-col justify-between relative overflow-hidden group`}>
                    <div className="absolute -right-6 -bottom-6 opacity-20 transform rotate-12 group-hover:scale-125 transition-transform duration-500 delay-100">
                        {React.cloneElement(s.icon as React.ReactElement<any>, { size: 90 })}
                    </div>
                    <div className="absolute -left-6 -top-6 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
                    <p className="text-6xl font-extrabold relative z-10 tracking-tight drop-shadow-sm">{s.value}</p>
                    <p className="text-xs font-bold uppercase tracking-wider relative z-10 opacity-90 drop-shadow-sm">{s.title}</p>
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-4">
                <div className="flex justify-between items-center px-1">
                    <h3 className="font-bold text-sm text-gray-800">Status pengajuan terbaru</h3>
                    <button className="text-[11px] text-gray-400 flex items-center gap-1 hover:text-[#1B4332]">
                        Lihat semua <ArrowRight size={12} />
                    </button>
                </div>

                <div className="bg-white p-6 rounded-xl border border-yellow-200 bg-yellow-50/20 shadow-sm space-y-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-sm text-[#B7791F]">KS-2026-0042 — Kerja Sama Smart City</h4>
                            <p className="text-[10px] text-gray-400 mt-1">Diajukan 20 April 2026 · Jenis: Swasta</p>
                        </div>
                    </div>

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

            <div className="lg:col-span-4 space-y-6">
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
);

export default MitraView;
