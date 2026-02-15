import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Award, Users } from 'lucide-react';
import { cn } from '../lib/utils';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-primary-50/50 to-white">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-primary-100/40 via-primary-50/20 to-transparent z-0 pointer-events-none" />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-white border border-primary-100 rounded-full px-4 py-1.5 shadow-sm mb-8"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary-500"></span>
                        <span className="text-sm font-medium text-charcoal-600">Accepting Applications for Fall 2025</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-900 tracking-tight mb-6 leading-[1.1]"
                    >
                        Want to get Admission in <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">
                            World’s Top Universities?
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-charcoal-500 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        We help ambitious students achieve their dreams of studying abroad with personalized guidance, visa support, and career counseling.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-2">
                            Start Your Journey <ArrowRight size={20} />
                        </button>
                        <button className="w-full sm:w-auto bg-white hover:bg-charcoal-50 text-charcoal-700 border border-charcoal-200 px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
                            View Success Stories
                        </button>
                    </motion.div>
                </div>

                {/* Floating Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <StatCard
                        icon={<Globe className="text-primary-600" size={24} />}
                        value="50+"
                        label="Partner Countries"
                        delay={0.4}
                    />
                    <StatCard
                        icon={<Award className="text-orange-500" size={24} />}
                        value="98%"
                        label="Visa Success Rate"
                        delay={0.5}
                        highlight
                    />
                    <StatCard
                        icon={<Users className="text-blue-500" size={24} />}
                        value="10k+"
                        label="Students Placed"
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    );
};

const StatCard = ({ icon, value, label, delay, highlight }: { icon: React.ReactNode, value: string, label: string, delay: number, highlight?: boolean }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className={cn(
            "p-6 rounded-2xl flex items-center gap-4 border transition-all hover:scale-105 duration-300",
            highlight
                ? "bg-white shadow-xl shadow-primary-500/10 border-primary-100"
                : "bg-white/60 backdrop-blur-sm border-white shadow-lg"
        )}
    >
        <div className="w-12 h-12 rounded-xl bg-charcoal-50 flex items-center justify-center">
            {icon}
        </div>
        <div>
            <div className="text-2xl font-bold text-charcoal-900">{value}</div>
            <div className="text-charcoal-500 text-sm font-medium">{label}</div>
        </div>
    </motion.div>
);

export default Hero;
