import { motion } from 'framer-motion';
import { DollarSign, Book, GraduationCap } from 'lucide-react';

const ScholarshipAssistance = () => {
    const benefits = [
        {
            title: "Merit-Based Excellence",
            description: "We identify scholarships that match your academic achievements and extracurricular accolades.",
            icon: <AwardIcon />
        },
        {
            title: "Need-Based Aid",
            description: "Guidance on financial documents to maximize your eligibility for need-based grants and waivers.",
            icon: <DollarSign className="w-6 h-6 text-green-600" />
        },
        {
            title: "University Specific",
            description: "Direct access to internal university funding pools often overlooked by general searches.",
            icon: <GraduationCap className="w-6 h-6 text-blue-600" />
        },
        {
            title: "External Grants",
            description: "Database of 500+ external foundations and government bodies specifically for international students.",
            icon: <Book className="w-6 h-6 text-purple-600" />
        }
    ];

    return (
        <section className="py-24 bg-white" id="scholarships">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-100 rounded-full blur-3xl opacity-60" />
                            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm relative z-10">
                                Financial Freedom
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mt-3 mb-6 relative z-10 leading-tight">
                                Maximize Your <br />
                                <span className="text-secondary-500">Scholarship Potential</span>
                            </h2>
                            <p className="text-charcoal-600 text-lg leading-relaxed mb-8 relative z-10">
                                Don't let finances hold you back. Our dedicated scholarship team has helped 95% of our students secure some form of financial aid, turning their study abroad dreams into debt-free reality.
                            </p>

                            <div className="flex gap-4">
                                <button className="bg-primary-500 text-white px-8 py-3.5 rounded-full font-bold hover:bg-primary-600 transition-all shadow-lg hover:shadow-primary-500/25">
                                    Get Free Assessment
                                </button>
                                <button className="bg-white text-charcoal-900 border border-charcoal-200 px-8 py-3.5 rounded-full font-bold hover:bg-charcoal-50 transition-colors">
                                    View Success Stories
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-charcoal-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl border border-transparent hover:border-primary-100 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-charcoal-900 mb-3">{benefit.title}</h3>
                                <p className="text-charcoal-500 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Custom Icon for Award
const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
);

export default ScholarshipAssistance;
