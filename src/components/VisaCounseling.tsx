import { motion } from 'framer-motion';
import { FileCheck, UserCheck, Plane, CalendarCheck } from 'lucide-react';

const VisaCounseling = () => {
    const steps = [
        {
            title: "Document Verification",
            desc: "Expert review of all financial and academic documents to ensure 100% compliance.",
            icon: <FileCheck className="text-indigo-600" size={24} />
        },
        {
            title: "Application Filing",
            desc: "Guidance on filling complex DS-160/visa forms accurately to avoid rejection.",
            icon: <CalendarCheck className="text-primary-600" size={24} />
        },
        {
            title: "Mock Interviews",
            desc: "One-on-one sessions with former visa officers to prepare you for every possible question.",
            icon: <UserCheck className="text-orange-600" size={24} />
        },
        {
            title: "Pre-Departure",
            desc: "Final flight and accommodation arrangements once your visa is approved.",
            icon: <Plane className="text-blue-600" size={24} />
        }
    ];

    return (
        <section className="py-24 bg-charcoal-900 text-white overflow-hidden" id="visa">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-primary-400 font-bold tracking-wider uppercase text-sm">Visa Success Rate: 99.8%</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                        Visa Approval <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Made Simple</span>
                    </h2>
                    <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
                        Navigate the complex immigration process with confidence. Our detailed timeline ensures you never miss a deadline.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-charcoal-700 to-transparent -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="group relative"
                            >
                                <div className="bg-charcoal-800 border border-charcoal-700 p-8 rounded-3xl h-full hover:border-primary-500/50 hover:bg-charcoal-800/50 transition-all duration-500">
                                    <div className="w-14 h-14 bg-charcoal-900 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">
                                        {step.title}
                                    </h4>
                                    <p className="text-charcoal-400 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Step Number Badge */}
                                <div className="absolute -top-4 -right-4 w-10 h-10 bg-charcoal-950 border border-charcoal-700 rounded-full flex items-center justify-center text-sm font-bold text-charcoal-500 group-hover:border-primary-500 group-hover:text-primary-500 transition-all">
                                    {idx + 1}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisaCounseling;
