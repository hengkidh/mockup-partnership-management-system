import React from 'react';
import { MonitorPlay, X } from 'lucide-react';
import type { OpdStat, PotentialPartner, StatCard } from '../../types';

type PresentationOverlayProps = {
    statsBupati: StatCard[];
    opdStats: OpdStat[];
    potentialPartners: PotentialPartner[];
    currentSlide: number;
    onClose: () => void;
    onSelectSlide: (slide: number) => void;
};

const PresentationOverlay = ({
    statsBupati,
    opdStats,
    potentialPartners,
    currentSlide,
    onClose,
    onSelectSlide
}: PresentationOverlayProps) => {
    const sortedOpdStats = opdStats
        .slice()
        .sort((a, b) => (b.active / b.target) - (a.active / a.target))
        .slice(0, 15);

    return (
        <div className="fixed inset-0 z-[100] bg-gray-900 text-white flex flex-col overflow-hidden animate-in fade-in duration-500">
            <div className="absolute top-0 left-0 h-1 bg-white/20 w-full z-10">
                <div
                    className="h-full bg-green-500 transition-all duration-[8000ms] ease-linear"
                    style={{ width: '100%' }}
                    key={currentSlide}
                />
            </div>

            <div className="flex-1 flex flex-col p-8 md:p-12 relative overflow-hidden">
                <div className="flex justify-between items-start mb-10 relative z-20">
                    <div>
                        <h1 className="text-3xl font-extrabold flex items-center gap-3"><MonitorPlay size={32} className="text-green-500" /> Mode Presentasi Eksekutif</h1>
                        <p className="text-gray-400 mt-2">Pemerintah Kabupaten Tanah Laut — {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 bg-white/10 hover:bg-red-500 hover:text-white rounded-full transition-colors cursor-pointer z-50 pointer-events-auto"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 relative w-full h-full flex items-center justify-center">
                    <div className={`absolute inset-0 w-full h-full flex flex-col justify-center transition-all duration-700 ${currentSlide === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                        <h2 className="text-4xl font-bold mb-12 text-center">Ringkasan Kerja Sama Utama</h2>
                        <div className="grid grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
                            {statsBupati.map((s, i) => (
                                <div key={i} className={`p-10 rounded-3xl ${s.color.includes('bg-white') ? 'bg-gray-800 border-none' : s.color} shadow-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 flex flex-col justify-center min-h-[250px]`}>
                                    <div className="absolute right-0 bottom-0 opacity-10 scale-150 transform translate-x-8 translate-y-8">
                                        {React.cloneElement(s.icon as React.ReactElement<any>, { size: 160 })}
                                    </div>
                                    <p className="text-xl font-bold uppercase tracking-wider text-gray-300 drop-shadow-sm mb-4 relative z-10">{s.title}</p>
                                    <div className="flex items-baseline gap-3 relative z-10">
                                        <p className="text-7xl font-black drop-shadow-lg text-white">{s.value}</p>
                                        {s.max && <p className="text-4xl font-bold text-white/50">{s.max}</p>}
                                    </div>
                                    {s.progress !== undefined && (
                                        <div className="w-full bg-black/30 rounded-full h-3 mt-6 relative z-10">
                                            <div className="bg-green-400 h-3 rounded-full" style={{ width: `${s.progress}%` }}></div>
                                        </div>
                                    )}
                                    {s.sub && (
                                        <p className="text-lg font-bold text-gray-400 mt-4 inline-flex items-center gap-2 relative z-10">
                                            {s.sub}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`absolute inset-0 w-full h-full flex flex-col justify-center transition-all duration-700 ${currentSlide === 1 ? 'opacity-100 translate-x-0' : currentSlide < 1 ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}`}>
                        <h2 className="text-4xl font-bold mb-8 text-center">Progres Target Tahunan SKPD / OPD</h2>
                        <div className="grid grid-cols-3 gap-6 w-full max-w-[90vw] mx-auto">
                            {sortedOpdStats.map((opd, i) => {
                                const perc = Math.round((opd.active / opd.target) * 100);
                                return (
                                    <div key={i} className="bg-gray-800 rounded-2xl p-5 border border-gray-700 flex flex-col justify-between">
                                        <div className="flex justify-between items-start mb-3">
                                            <p className="text-lg font-bold line-clamp-1 flex-1 leading-tight mr-4">{opd.name}</p>
                                            <span className={`px-3 py-1 rounded-full text-xs font-black shrink-0 ${perc >= 100 ? 'bg-green-500/20 text-green-400' : perc >= 70 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>
                                                {perc}%
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <div className="w-full mr-6">
                                                <div className="w-full bg-gray-900 rounded-full h-2 mb-1.5">
                                                    <div className={`h-2 rounded-full ${perc >= 100 ? 'bg-green-500' : perc >= 70 ? 'bg-yellow-400' : 'bg-red-400'}`} style={{ width: `${Math.min(perc, 100)}%` }}></div>
                                                </div>
                                                <p className="text-xs text-gray-400">Realisasi Target</p>
                                            </div>
                                            <p className="text-2xl font-black">{opd.active}<span className="text-sm font-normal text-gray-500">/{opd.target}</span></p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className={`absolute inset-0 w-full h-full flex flex-col justify-center transition-all duration-700 ${currentSlide === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                        <h2 className="text-4xl font-bold mb-12 text-center">Analisis Kecerdasan Buatan (AI) — Rekomendasi Calon Mitra Baru</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[90vw] mx-auto">
                            {potentialPartners.map((partner, i) => (
                                <div key={i} className="bg-gray-800 p-8 rounded-[2rem] border border-gray-700/50 shadow-xl flex flex-col items-center text-center relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-lienar-to-br from-green-500/10 to-transparent blur-3xl rounded-full"></div>
                                    <div className={`w-28 h-28 rounded-[28px] ${partner.color} mb-6 flex items-center justify-center text-4xl font-black shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                        {partner.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">{partner.name}</h4>
                                    <p className="text-sm font-medium text-gray-400 mb-6">{partner.type}</p>

                                    <div className="mt-auto w-full">
                                        <div className="bg-gray-900 rounded-xl p-4 mb-4">
                                            <p className="text-xs text-gray-500 mb-1">Rekomendasi Dinas Terkait</p>
                                            <p className="text-sm font-bold text-gray-300">{partner.opd[0]} {partner.opd.length > 1 && `+ ${partner.opd.length - 1} lainnya`}</p>
                                        </div>
                                        <div className="flex justify-between items-center bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                                            <span className="text-sm font-semibold text-green-400">Tingkat Kecocokan</span>
                                            <span className="text-2xl font-black text-green-400">{partner.match}%</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-0 w-full flex justify-center items-center gap-4 z-20">
                    {[0, 1, 2].map((idx) => (
                        <button
                            key={idx}
                            onClick={() => onSelectSlide(idx)}
                            className={`transition-all duration-300 rounded-full cursor-pointer pointer-events-auto ${currentSlide === idx ? 'w-12 h-3 bg-green-500' : 'w-3 h-3 bg-gray-600 hover:bg-gray-400'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PresentationOverlay;
