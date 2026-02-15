import { useState } from 'react';
import { FileText, Download, Lock, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Downloads = () => {
    const [unlocked, setUnlocked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [pendingDownload, setPendingDownload] = useState<string | null>(null);

    const resources = [
        {
            title: "Ultimate Scholarship Guide 2025",
            type: "PDF Guide",
            size: "2.4 MB",
            locked: false,
            id: "guide-2025"
        },
        {
            title: "Visa Interview Checklist",
            type: "Checklist",
            size: "1.1 MB",
            locked: false,
            id: "visa-checklist"
        },
        {
            title: "SOP Writing Masterclass",
            type: "E-Book",
            size: "5.8 MB",
            locked: true,
            id: "sop-masterclass"
        },
        {
            title: "University Comparison Sheet",
            type: "Template",
            size: "0.5 MB",
            locked: true,
            id: "uni-sheet"
        }
    ];

    const handleDownloadClick = (res: any) => {
        if (res.locked && !unlocked) {
            setPendingDownload(res.title);
            setShowModal(true);
        } else {
            // Simulate download
            alert(`Downloading ${res.title}...`);
        }
    };

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        if (phoneNumber.length >= 10) {
            setUnlocked(true);
            setShowModal(false);
            alert(`Unlocked! Downloading ${pendingDownload}...`);
            setPhoneNumber('');
        } else {
            alert("Please enter a valid phone number.");
        }
    };

    return (
        <section className="py-24 bg-white" id="downloads">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-secondary-600 font-semibold tracking-wider uppercase text-sm">Free Resources</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mt-2">
                            Download Your <span className="text-primary-600">Success Kit</span>
                        </h2>
                        <p className="text-charcoal-600 mt-4 text-lg">
                            Expert-curated guides, checklists, and templates to kickstart your study abroad journey.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((res, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            onClick={() => handleDownloadClick(res)}
                            className="group p-6 rounded-2xl border border-charcoal-100 bg-charcoal-50/50 hover:bg-white hover:shadow-xl hover:border-primary-100 transition-all duration-300 cursor-pointer relative overflow-hidden"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-primary-50 transition-colors">
                                    <FileText size={24} className="text-primary-600" />
                                </div>
                                {res.locked && !unlocked ? (
                                    <Lock size={20} className="text-charcoal-400 group-hover:text-red-500 transition-colors" />
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Download size={16} className="text-primary-600" />
                                    </div>
                                )}
                            </div>

                            <h3 className="font-bold text-charcoal-900 mb-2 group-hover:text-primary-700 transition-colors">{res.title}</h3>
                            <div className="flex items-center gap-3 text-xs font-medium text-charcoal-500 uppercase tracking-wide">
                                <span>{res.type}</span>
                                <span className="w-1 h-1 rounded-full bg-charcoal-300"></span>
                                <span>{res.size}</span>
                            </div>

                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Unlock Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-charcoal-900/60 backdrop-blur-sm"
                            onClick={() => setShowModal(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-3xl p-8 max-w-md w-full relative z-10 shadow-2xl"
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-charcoal-400 hover:text-charcoal-600"
                            >
                                <X size={24} />
                            </button>

                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                                    <Lock size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-charcoal-900 mb-2">Unlock Premium Resources</h3>
                                <p className="text-charcoal-500">
                                    Enter your phone number to gain instant access to all locked guides and templates.
                                </p>
                            </div>

                            <form onSubmit={handleUnlock} className="space-y-4">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="+1 (555) 000-0000"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 bg-charcoal-50"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-primary-500/25"
                                >
                                    Unlock & Download
                                </button>
                                <p className="text-xs text-center text-charcoal-400">
                                    We respect your privacy. No spam, ever.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Downloads;
