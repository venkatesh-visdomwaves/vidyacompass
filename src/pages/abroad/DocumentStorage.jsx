import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaCloudUploadAlt, FaFileAlt, FaLock, FaTrash, FaDownload,
    FaCheckCircle, FaClock, FaExclamationTriangle, FaSearch, FaFilter,
    FaArrowLeft, FaShieldAlt, FaHistory, FaFingerprint, FaKey
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DocumentStorage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    // Mock data for documents
    const [documents, setDocuments] = useState([
        { id: 1, name: 'Passport_India_2026.pdf', type: 'PDF', size: '1.2 MB', category: 'Identity', status: 'Verified', date: '2026-02-10' },
        { id: 2, name: 'Bachelor_Final_Transcripts.pdf', type: 'PDF', size: '4.5 MB', category: 'Academic', status: 'Pending', date: '2026-02-12' },
        { id: 3, name: 'IELTS_Official_ScoreCard.pdf', type: 'PDF', size: '0.8 MB', category: 'Exam', status: 'Verified', date: '2026-01-15' },
        { id: 4, name: 'Bank_Statement_HDFC_6M.zip', type: 'ZIP', size: '12.4 MB', category: 'Financial', status: 'In Review', date: '2026-02-15' },
        { id: 5, name: 'SOP_LSE_Master_Final.docx', type: 'DOCX', size: '0.8 MB', category: 'Academic', status: 'Rejected', date: '2026-02-14' },
    ]);

    const categories = ['All', 'Academic', 'Identity', 'Financial', 'Exam', 'Professional'];

    const filteredDocs = documents.filter(doc => {
        const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || doc.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const getStatusStyles = (status) => {
        switch (status) {
            case 'Verified': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
            case 'Pending': return 'bg-orange-50 text-orange-600 border-orange-100';
            case 'In Review': return 'bg-blue-50 text-blue-600 border-blue-100';
            case 'Rejected': return 'bg-rose-50 text-rose-600 border-rose-100';
            default: return 'bg-gray-50 text-gray-600 border-gray-100';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Verified': return <FaCheckCircle />;
            case 'Pending': return <FaClock />;
            case 'In Review': return <FaCloudUploadAlt className="animate-bounce" />;
            case 'Rejected': return <FaExclamationTriangle />;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen bg-[#FBFCFE] selection:bg-blue-50">
            {/* 🔹 Enhanced Security Hero Section */}
            <section className="relative pt-32 pb-24 bg-black overflow-hidden border-b-4 border-transparent">
                {/* Security Grid Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-emerald-600/30 to-blue-600/20 rounded-full blur-[150px] -mr-48 -mt-48 animate-pulse text-gray-900"></div>
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-16">
                    <div className="flex-1 text-center md:text-left">
                        <button
                            onClick={() => navigate('/abroad')}
                            className="inline-flex items-center gap-3 text-gray-500 hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.4em] mb-10 group italic"
                        >
                            <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Global Mobility Dashboard
                        </button>

                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-xl mb-8 backdrop-blur-md italic">
                            <FaLock size={12} className="animate-pulse" /> Decentrally Encrypted Vault
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter italic leading-none uppercase">
                            Document <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                                Global Vault
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed italic border-l-2 border-emerald-500/30 pl-6 mb-12">
                            Secure cryptographic storage for your 2026 academic applications.
                            Automated vetting for immigration compliance.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-8">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <FaFingerprint size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-white uppercase tracking-widest italic leading-none uppercase">Biometric Integration</div>
                                    <div className="text-[8px] font-black text-gray-400 mt-2 uppercase tracking-widest leading-none uppercase">Active Multi-Factor</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                    <FaKey size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-white uppercase tracking-widest italic leading-none uppercase">AES-256 Protocol</div>
                                    <div className="text-[8px] font-black text-gray-400 mt-2 uppercase tracking-widest leading-none uppercase">Zero-Knowledge Storage</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Upload Module */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full md:w-[450px] bg-gradient-to-br from-gray-900 to-black rounded-[4rem] p-12 border-4 border-white/10 shadow-2xl relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent" />
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-32 h-32 rounded-[2.5rem] bg-white/5 border-2 border-dashed border-white/20 flex items-center justify-center text-5xl mb-8 group-hover:border-emerald-500 transition-colors">
                                <FaCloudUploadAlt className="text-emerald-500 animate-bounce" />
                            </div>
                            <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-4 uppercase">Neural File Injection</h4>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest italic mb-10 uppercase">PDF, DOCX, ZIP (MAX 256MB)</p>

                            <label className="w-full cursor-pointer">
                                <input type="file" className="hidden" />
                                <div className="w-full py-6 bg-white text-black rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.4em] hover:bg-emerald-500 hover:text-white transition-all shadow-2xl active:scale-95 italic uppercase">
                                    Initiate Secure Upload
                                </div>
                            </label>

                            <p className="mt-8 text-[9px] text-white/30 font-black uppercase tracking-[0.2em] italic uppercase">Authorized node identification required</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 🔹 Document Management Console */}
            <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-12 text-gray-900">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-lg mb-6 italic uppercase">
                            Digital Asset Management
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter italic leading-none mb-6 uppercase">
                            Vault <br />
                            <span className="text-blue-600">Explorer.</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-medium max-w-xl italic uppercase">
                            Managing institutional verified assets and application footprints.
                        </p>
                    </div>

                    <div className="w-full lg:w-auto space-y-6">
                        <div className="relative group">
                            <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-blue-600 transition-colors" />
                            <input
                                type="text"
                                placeholder="QUERY VAULT REPOSITORY..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full lg:w-[450px] h-16 pl-16 pr-6 rounded-2xl bg-white border-2 border-gray-100 focus:border-blue-500/30 transition-all font-black text-xs uppercase tracking-widest shadow-sm placeholder:text-gray-300"
                            />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {categories.map(c => (
                                <button
                                    key={c}
                                    onClick={() => setActiveCategory(c)}
                                    className={`px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] transition-all italic border-2 ${activeCategory === c ? 'bg-gray-900 border-gray-900 text-white shadow-xl shadow-black/20' : 'bg-white border-gray-100 text-gray-400 hover:border-blue-500/20 hover:text-blue-600'}`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Secure Table Hub */}
                <div className="bg-white rounded-[4rem] border-2 border-gray-50 shadow-2xl shadow-gray-100/50 overflow-hidden text-gray-900">
                    <div className="overflow-x-auto no-scrollbar">
                        <table className="w-full text-left">
                            <thead className="bg-[#FBFCFE]">
                                <tr>
                                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">Biological Identification / Asset</th>
                                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">Class</th>
                                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">Security Clearance</th>
                                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.4em] text-gray-400 text-right">Utility</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 text-gray-900">
                                <AnimatePresence mode="popLayout">
                                    {filteredDocs.map((doc) => (
                                        <motion.tr
                                            key={doc.id}
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="hover:bg-blue-50/20 transition-all group cursor-default"
                                        >
                                            <td className="px-10 py-10">
                                                <div className="flex items-center gap-6">
                                                    <div className="w-16 h-16 rounded-[1.5rem] bg-gray-50 flex items-center justify-center text-3xl text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner group-hover:rotate-6">
                                                        <FaFileAlt />
                                                    </div>
                                                    <div>
                                                        <div className="text-xl font-black italic uppercase tracking-tighter text-gray-900 group-hover:text-blue-600 transition-colors uppercase">{doc.name}</div>
                                                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-1 italic uppercase leading-none">{doc.type} • {doc.size} • SYNCED {doc.date}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-10 py-10">
                                                <span className="px-5 py-2 rounded-xl bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-100 italic uppercase">{doc.category} Protocol</span>
                                            </td>
                                            <td className="px-10 py-10">
                                                <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusStyles(doc.status)} shadow-sm italic uppercase`}>
                                                    {getStatusIcon(doc.status)}
                                                    {doc.status}
                                                </div>
                                            </td>
                                            <td className="px-10 py-10">
                                                <div className="flex justify-end items-center gap-4">
                                                    <button className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-all shadow-sm hover:shadow-xl">
                                                        <FaDownload size={16} />
                                                    </button>
                                                    <button className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-rose-500 hover:text-white transition-all shadow-sm hover:shadow-xl">
                                                        <FaTrash size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Storage Health & AI Analysis Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="p-10 bg-white border-2 border-gray-50 rounded-[4rem] shadow-xl text-gray-900">
                        <div className="flex justify-between items-center mb-10">
                            <h4 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.4em] italic uppercase">Storage Yield</h4>
                            <FaShieldAlt className="text-blue-600" />
                        </div>
                        <div className="relative h-6 bg-gray-50 rounded-full overflow-hidden mb-6 p-1">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '65%' }}
                                transition={{ duration: 1.5 }}
                                className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                            />
                        </div>
                        <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.3em] uppercase">
                            <span className="text-blue-600 italic">6.2 GB OCCUPIED</span>
                            <span className="text-gray-400">10 GB CEILING</span>
                        </div>
                    </div>

                    <div className="p-10 bg-gray-900 rounded-[4rem] text-white flex flex-col justify-between relative overflow-hidden group border-4 border-white shadow-2xl">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px]" />
                        <h4 className="text-[11px] font-black text-emerald-400 uppercase tracking-[0.4em] mb-10 italic uppercase">Security Audit 2026</h4>
                        <div className="flex items-center gap-8 relative z-10">
                            <div className="text-6xl font-black italic tracking-tighter text-white uppercase">100%</div>
                            <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em] leading-relaxed uppercase">Neural patterns verified across all node repositories.</p>
                        </div>
                    </div>

                    <div className="p-10 bg-blue-600 rounded-[4rem] text-white flex items-center gap-8 group hover:bg-blue-700 cursor-pointer transition-all shadow-2xl shadow-blue-500/30 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-24 h-24 rounded-[2rem] bg-white/10 flex items-center justify-center text-5xl group-hover:rotate-12 transition-transform shadow-inner border border-white/5">
                            🤖
                        </div>
                        <div className="relative z-10">
                            <h5 className="text-xl font-black italic uppercase tracking-tighter mb-2 uppercase">AI Audit Request</h5>
                            <p className="text-[9px] text-blue-100 font-bold uppercase tracking-[0.3em] uppercase leading-relaxed">Auto-verify SOP & LOR with <br /> GPT-4 Neural Analytics</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DocumentStorage;
