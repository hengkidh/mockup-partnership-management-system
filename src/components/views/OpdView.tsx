import { AlertTriangle, ArrowRight, Briefcase, Clock, FileText, Inbox } from 'lucide-react';

const OpdView = () => (
    <div className="animate-in slide-in-from-right duration-500 space-y-6">
        <section>
            <h2 className="text-xl font-bold text-gray-800">Dashboard OPD — Diskominfo</h2>
            <p className="text-xs text-gray-500 mt-1">Kelola pelaksanaan kerja sama yang didisposisi ke dinas Anda</p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-linear-to-br from-[#1B4332] to-[#2D6A4F] text-white shadow-lg h-32 flex flex-col justify-between relative overflow-hidden group">
                <Briefcase size={64} className="absolute -right-4 -bottom-4 text-white opacity-10 group-hover:scale-110 transition-transform" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                <p className="text-5xl font-extrabold relative z-10 tracking-tight">8</p>
                <p className="text-xs font-bold uppercase tracking-wider relative z-10 opacity-90 drop-shadow-sm">KS aktif di dinas ini</p>
            </div>
            <div className="p-5 rounded-xl bg-linear-to-br from-[#F39C12] to-[#D68910] text-white shadow-lg h-32 flex flex-col justify-between relative overflow-hidden group">
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
                <div className="flex justify-between items-center px-1">
                    <h3 className="font-bold text-sm text-gray-800">Kerja sama aktif</h3>
                    <button className="text-xs text-gray-400 flex items-center gap-1">Lihat semua <ArrowRight size={12} /></button>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-5">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-sm text-gray-800">Kerja Sama Smart City — Telkom Indonesia</h4>
                            <p className="text-[10px] text-gray-400 mt-1">KS-2026-0031 · Mulai: 1 Mar 2026 · Berakhir: 28 Feb 2027</p>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-green-50 text-green-600">Aktif</span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold">
                            <span className="text-gray-400 uppercase">Progress pelaksanaan</span>
                            <span className="text-[#1B4332]">65%</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div className="h-full bg-[#1B4332] rounded-full" style={{ width: '65%' }}></div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-1.5 border border-[#1B4332] rounded-lg text-[10px] font-bold text-[#1B4332]">Update Progress</button>
                        <button className="px-4 py-1.5 border border-yellow-500 rounded-lg text-[10px] font-bold text-yellow-700">Kirim Laporan</button>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-5">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-sm text-gray-800">Pengembangan SDM Digital — Digitaliz</h4>
                            <p className="text-[10px] text-gray-400 mt-1">KS-2026-0028 · Mulai: 15 Feb 2026 · Berakhir: 15 Aug 2026</p>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-blue-50 text-blue-600">Diproses</span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold">
                            <span className="text-gray-400 uppercase">Progress pelaksanaan</span>
                            <span className="text-yellow-500">40%</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-500 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-1.5 border border-[#1B4332] rounded-lg text-[10px] font-bold text-[#1B4332]">Update Progress</button>
                        <button className="px-4 py-1.5 border border-yellow-500 rounded-lg text-[10px] font-bold text-yellow-700">Kirim Laporan</button>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-5">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-sm text-gray-800">Sistem Informasi Daerah — Kominfo RI</h4>
                            <p className="text-[10px] text-gray-400 mt-1">KS-2025-0094 · Berakhir: 30 Apr 2026</p>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-red-50 text-red-500">9 hari lagi</span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold">
                            <span className="text-gray-400 uppercase">Progress pelaksanaan</span>
                            <span className="text-[#1B4332]">90%</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div className="h-full bg-[#1B4332] rounded-full" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <div className="p-2.5 bg-orange-50 border border-orange-100 rounded-lg flex items-center gap-2 text-orange-700 text-[10px] font-bold">
                        <AlertTriangle size={14} />
                        <span>Segera kirim laporan akhir sebelum KS berakhir</span>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-sm text-gray-800 mb-4">Disposisi baru masuk</h3>
                    <div className="p-4 border border-dashed border-gray-300 rounded-xl bg-white space-y-2">
                        <p className="text-[11px] font-bold text-gray-800 leading-tight">KS-2026-0042 — Digitaliz (Smart City)</p>
                        <p className="text-[10px] text-gray-400">Dari: Admin TKKSD · 20 Apr 2026</p>
                        <p className="text-[11px] text-gray-600 italic">"Catatan: Koordinasikan jadwal kick-off dengan tim teknis Digitaliz minggu ini"</p>
                        <div className="flex gap-2 pt-2">
                            <button className="flex-1 py-1.5 bg-[#1B4332] text-white text-[11px] font-bold rounded-lg">Terima</button>
                            <button className="flex-1 py-1.5 border border-red-500 text-red-600 text-[11px] font-bold rounded-lg">Feedback Teknis</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-sm text-gray-800 mb-4">Deadline laporan</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="text-gray-600">Laporan bulanan — Smart City</span>
                            <span className="text-red-500 font-bold">25 Apr 2026</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="text-gray-600">Laporan akhir — Sistem Informasi</span>
                            <span className="text-red-500 font-bold">29 Apr 2026</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="text-gray-600">Laporan Q2 — SDM Digital</span>
                            <span className="text-green-700 font-bold">30 Jun 2026</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-sm text-gray-800 mb-4">Notifikasi</h3>
                    <div className="space-y-5">
                        <div className="flex gap-3 items-start">
                            <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[11px] text-gray-700 leading-tight">KS-2025-0094 berakhir dalam 9 hari — segera kirim laporan akhir</p>
                                <p className="text-[10px] text-gray-400 mt-1">Hari ini</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 shrink-0"></div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[11px] text-gray-700 leading-tight">2 disposisi baru dari Admin TKKSD menunggu konfirmasi Anda</p>
                                <p className="text-[10px] text-gray-400 mt-1">1 jam lalu</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <div className="w-2 h-2 rounded-full bg-[#1B4332] mt-1.5 shrink-0"></div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[11px] text-gray-700 leading-tight">Laporan bulan Maret berhasil dikirim ke Admin TKKSD</p>
                                <p className="text-[10px] text-gray-400 mt-1">2 Apr</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default OpdView;
