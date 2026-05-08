import { useRef, useState, type ChangeEvent } from 'react';
import { ArrowLeft, FileUp, CheckCircle2, FileText } from 'lucide-react';
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
}: FormViewProps) => {
    const [uploadFile, setUploadFile] = useState<File | null>(null);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const uploadInputRef = useRef<HTMLInputElement | null>(null);

    const formatFileSize = (sizeInBytes: number) => {
        if (sizeInBytes < 1024) return `${sizeInBytes} B`;
        const sizeInKb = sizeInBytes / 1024;
        if (sizeInKb < 1024) return `${sizeInKb.toFixed(1)} KB`;
        return `${(sizeInKb / 1024).toFixed(2)} MB`;
    };

    const handleUploadChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;
        setUploadError(null);
        setUploadFile(file);
    };

    // const handleRemoveUpload = () => {
    //     setUploadFile(null);
    //     setUploadError(null);
    //     if (uploadInputRef.current) {
    //         uploadInputRef.current.value = '';
    //     }
    // };

    const handleOpenFileDialog = () => {
        uploadInputRef.current?.click();
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <section className="relative pt-28 pb-20 overflow-hidden bg-[linear-gradient(135deg,#1B4332_0%,#2D6A4F_55%,#14532D_100%)]">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
                        backgroundSize: "40px 40px"
                    }}
                />
                <div className="max-w-6xl mx-auto px-4 md:px-8 relative text-white text-center">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-bold tracking-widest uppercase mb-4">
                        Layanan
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Pengajuan Kerja Sama Daerah</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">Ajukan permohonan kerja sama daerah Anda secara online.</p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 space-y-12">
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
                        buttonClassName="flex items-center gap-2 text-xs font-bold px-3 py-1.5 bg-[#F39C12] text-gray-900 rounded-full hover:bg-[#F7B731]"
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
                        <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-center">
                            <div className={`text-3xl font-extrabold ${step.active ? 'text-[#F39C12]' : 'text-gray-300'}`}>{step.num}</div>
                            <div className={`font-bold mt-1 ${step.active ? 'text-[#1B4332]' : 'text-gray-400'}`}>{step.title}</div>
                            <div className="text-xs text-gray-400 mt-1">{step.sub}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
                        <div>
                            <h2 className="text-2xl font-extrabold text-[#1B4332]">Formulir Pengajuan Kerja Sama</h2>
                            <p className="text-sm text-gray-500 mt-1">Lengkapi seluruh data berikut dengan benar.</p>
                        </div>

                        <section>
                            <h3 className="font-bold text-[#1B4332] mb-4 flex items-center gap-2">
                                <span className="h-1 w-6 bg-[#F39C12] rounded-full" /> Data Pemohon
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Nama Instansi / Perusahaan</label>
                                    <input
                                        type="text"
                                        placeholder="PT / Universitas / Pemda ..."
                                        className="w-full h-11 px-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Jenis Pihak Ketiga</label>
                                    <input
                                        type="text"
                                        placeholder="Swasta / BUMN / Perguruan Tinggi / NGO"
                                        className="w-full h-11 px-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">PIC (Penanggung Jawab)</label>
                                    <input
                                        type="text"
                                        placeholder="Nama lengkap PIC"
                                        className="w-full h-11 px-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Kontak (No. HP / WhatsApp)</label>
                                    <input
                                        type="text"
                                        placeholder="+62 ..."
                                        className="w-full h-11 px-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                                    />
                                </div>
                                <div className="space-y-2 sm:col-span-2">
                                    <label className="text-sm font-bold text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        placeholder="email@instansi.id"
                                        className="w-full h-11 px-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                                    />
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-bold text-[#1B4332] mb-4 flex items-center gap-2">
                                <span className="h-1 w-6 bg-[#F39C12] rounded-full" /> Substansi Kerja Sama
                            </h3>
                            <div className="grid gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Judul Kerja Sama</label>
                                    <input
                                        type="text"
                                        placeholder="Contoh: Kerja sama Smart City Tanah Laut"
                                        className="w-full h-11 px-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Latar Belakang</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Jelaskan kondisi/permasalahan yang melatari kerja sama..."
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                                    ></textarea>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Dasar Hukum</label>
                                    <textarea
                                        rows={3}
                                        placeholder="UU / PP / Perda / Peraturan terkait"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                                    ></textarea>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Maksud & Tujuan</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Maksud dan tujuan kerja sama..."
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                                    ></textarea>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Objek Kerja Sama</label>
                                    <textarea
                                        rows={2}
                                        placeholder="Apa yang menjadi objek kerja sama"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                                    ></textarea>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Ruang Lingkup</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Batasan/lingkup kerja sama"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                                    ></textarea>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Aktivitas / Kegiatan</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Daftar kegiatan yang akan dilaksanakan"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                                    ></textarea>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Jangka Waktu</label>
                                    <input
                                        type="text"
                                        placeholder="Contoh: 3 tahun (2026 – 2029)"
                                        className="w-full h-11 px-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Analisis Manfaat & Biaya</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Manfaat yang diharapkan dan estimasi biaya"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                                    ></textarea>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Kesimpulan / Rekomendasi</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Kesimpulan dan rekomendasi pemohon"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-300"
                                    ></textarea>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-bold text-[#1B4332] mb-4 flex items-center gap-2">
                                <span className="h-1 w-6 bg-[#F39C12] rounded-full" /> Dokumen Pendukung
                            </h3>
                            <input
                                ref={uploadInputRef}
                                type="file"
                                accept="application/pdf"
                                onChange={handleUploadChange}
                                className="hidden"
                            />
                            <div
                                onClick={handleOpenFileDialog}
                                className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-[#1B4332] transition-colors cursor-pointer"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        handleOpenFileDialog();
                                    }
                                }}
                            >
                                {uploadFile ? (
                                    <div className="flex items-center justify-center gap-3">
                                        <FileText className="h-8 w-8 text-[#1B4332]" />
                                        <div className="text-left">
                                            <div className="font-semibold truncate max-w-xs">{uploadFile.name}</div>
                                            <div className="text-xs text-gray-400">{formatFileSize(uploadFile.size)} · klik untuk ganti</div>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <FileUp className="h-10 w-10 text-[#1B4332] mx-auto mb-2" />
                                        <div className="font-semibold text-gray-700">Unggah Studi Kelayakan / Proposal</div>
                                        <div className="text-xs text-gray-400 mt-1">PDF · maks 10MB</div>
                                    </>
                                )}
                            </div>
                            {uploadError && (
                                <p className="text-xs text-red-600 font-semibold mt-2">{uploadError}</p>
                            )}
                        </section>

                        <button className="bg-[linear-gradient(135deg,#F39C12_0%,#D68910_100%)] text-[#1B4332] font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                            Lanjutkan Pengajuan
                        </button>
                    </div>

                    <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-8">
                        <div className="bg-[linear-gradient(135deg,#1B4332_0%,#2D6A4F_100%)] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
                            <h3 className="text-xl font-extrabold">Persyaratan</h3>
                            <ul className="mt-5 space-y-3 text-sm">
                                {[
                                    'Instansi berbadan hukum / pemerintah resmi',
                                    'Proposal kerja sama (PDF, maks 10MB)',
                                    'Profil singkat instansi',
                                    'Surat permohonan resmi',
                                    'Kontak penanggung jawab aktif'
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#F39C12] shrink-0" />
                                        <span className="opacity-95">{text}</span>
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
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default FormView;
