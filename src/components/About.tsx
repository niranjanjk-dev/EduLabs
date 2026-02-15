import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" id="about">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="absolute inset-0 bg-primary-600 rounded-3xl rotate-6 opacity-10" />
                        <div className="absolute inset-0 bg-secondary-600 rounded-3xl -rotate-6 opacity-10" />
                        <img
                            src="https://placehold.co/600x700/png?text=Our+Mission"
                            alt="Team Collaboration"
                            className="relative rounded-3xl shadow-2xl w-full object-cover z-10 hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="text-4xl font-bold text-primary-600">10+</div>
                                <div className="text-sm font-medium text-charcoal-600">Years of<br />Excellence</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Who We Are</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mt-3 mb-6 leading-tight">
                                Empowering the Next Generation of <span className="text-secondary-600">Global Citizens</span>
                            </h2>
                            <p className="text-charcoal-600 text-lg leading-relaxed mb-6">
                                Founded by alumni of Ivy League universities, we understand the challenges of studying abroad firsthand. We are not just consultants; we are mentors committed to your academic and professional success.
                            </p>
                            <p className="text-charcoal-600 text-lg leading-relaxed mb-8">
                                Our mission is to democratize access to global education by providing transparent, honest, and strategic guidance to students from all backgrounds.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    "Personalized mentorship from study abroad alumni",
                                    "Transparent fee structure with no hidden costs",
                                    "End-to-end support even after you land abroad"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-primary-500 shrink-0" size={20} />
                                        <span className="text-charcoal-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="group flex items-center gap-2 text-charcoal-900 font-bold border-b-2 border-primary-500 pb-1 hover:text-primary-600 transition-colors">
                                Read Our Full Story
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
