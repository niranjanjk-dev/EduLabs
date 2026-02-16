import { motion } from 'framer-motion';
import { TrendingUp, Award, Users, DollarSign } from 'lucide-react';

const ScholarshipImpact = () => {
    const stats = [
        {
            icon: <DollarSign size={32} className="text-primary-500" />,
            value: "$15M+",
            label: "Total Scholarships Secured",
            description: "We've helped students save millions in tuition fees."
        },
        {
            icon: <Users size={32} className="text-secondary-500" />,
            value: "1,200+",
            label: "Students Benefited",
            description: "From partial waivers to fully funded rides."
        },
        {
            icon: <TrendingUp size={32} className="text-blue-500" />,
            value: "95%",
            label: "Success Rate",
            description: "High success rate for merit-based financial aid applications."
        },
        {
            icon: <Award size={32} className="text-orange-500" />,
            value: "500+",
            label: "Top 50 Universities",
            description: "Admits with funding in Ivy Leagues and global elites."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-charcoal-50" id="scholarships">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <span className="text-primary-600 font-semibold tracking-wider uppercase text-xs md:text-sm">Our Impact</span>
                    <h2 className="text-2xl md:text-4xl font-bold text-charcoal-900 mt-2 mb-4">
                        Real Results, <span className="text-primary-600">Real Savings</span>
                    </h2>
                    <p className="text-charcoal-600 text-base md:text-lg leading-relaxed">
                        We don't just help you get in; we help you afford it. Our dedicated scholarship team works tirelessly to uncover funding opportunities you might miss.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-4 md:p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-3 md:mb-6">
                                {/* Wrap icon to scale down on mobile */}
                                <div className="scale-75 md:scale-100 origin-center">
                                    {stat.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-4xl font-bold text-charcoal-900 mb-1 md:mb-2">{stat.value}</h3>
                            <p className="text-xs md:text-lg font-semibold text-charcoal-800 mb-1 md:mb-2 leading-tight">{stat.label}</p>
                            <p className="text-charcoal-500 text-[10px] md:text-sm leading-relaxed hidden md:block">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Optional: Add a 'Recent Winners' ticker or list later if requested */}
            </div>
        </section>
    );
};

export default ScholarshipImpact;
