import { motion } from 'framer-motion';
import { PenTool, Search, Target, Layout } from 'lucide-react';

const UniversityAdmissions = () => {
    return (
        <section className="py-16 md:py-24 bg-white" id="admissions">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
                    <div className="max-w-2xl">
                        <span className="text-secondary-600 font-semibold tracking-wider uppercase text-xs md:text-sm">Admission Strategy</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-charcoal-900 mt-2 md:mt-3">
                            Crafting Your <span className="text-primary-600">Perfect Profile</span>
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-charcoal-500 max-w-sm text-right">
                            From university shortlisting to SOP editing, we optimize every aspect of your application.
                        </p>
                    </div>
                    {/* Mobile only description */}
                    <div className="md:hidden mt-4">
                        <p className="text-charcoal-600 text-base leading-relaxed">
                            From university shortlisting to SOP editing, we optimize every aspect of your application.
                        </p>
                    </div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
                    {/* Large Main Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 bg-charcoal-50 rounded-3xl p-6 md:p-10 flex flex-col justify-center relative overflow-hidden group border border-transparent hover:border-charcoal-200 transition-all cursor-pointer"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target size={120} />
                        </div>
                        <div className="relative z-10 max-w-md">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                <Target className="text-primary-600" size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-charcoal-900 mb-4">Strategic Shortlisting</h3>
                            <p className="text-charcoal-600 text-lg">
                                We analyze your profile, scores, and career goals to curate a personalized list of "Ambitious", "Target", and "Safe" universities with the highest ROI.
                            </p>
                        </div>
                    </motion.div>

                    {/* SOP Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-primary-500 rounded-3xl p-8 flex flex-col justify-between text-white relative overflow-hidden group cursor-pointer"
                    >
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                        <PenTool size={32} className="text-white/80" />
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Essay & SOP Editing</h3>
                            <p className="text-white/80 text-sm">
                                Craft compelling narratives that admissions officers can't ignore.
                            </p>
                        </div>
                    </motion.div>

                    {/* Application Mgmt Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-charcoal-900 rounded-3xl p-8 flex flex-col justify-between text-white relative overflow-hidden group cursor-pointer"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-400 to-primary-500" />
                        <Layout size={32} className="text-secondary-400" />
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Profile Building</h3>
                            <p className="text-charcoal-400 text-sm">
                                Guidance on internships, research papers, and projects to boost your CV.
                            </p>
                        </div>
                    </motion.div>

                    {/* Final Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 bg-secondary-100/50 rounded-3xl p-6 md:p-10 flex items-center relative overflow-hidden group border border-secondary-100 cursor-pointer"
                    >
                        <div className="w-full">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                <Search className="text-secondary-600" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal-900 mb-2">Application Tracking</h3>
                            <p className="text-charcoal-600 text-sm md:text-base">
                                Real-time updates and dedicated support for every single application you submit.
                            </p>
                        </div>
                        <div className="hidden lg:block w-1/2 h-full absolute right-0 top-0 bg-secondary-200/50 skew-x-12 translate-x-12" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default UniversityAdmissions;
