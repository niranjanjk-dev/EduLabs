import { GraduationCap, FileCheck, Banknote, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
    const features = [
        {
            icon: <Banknote size={32} className="text-white" />,
            title: "Scholarship Assistance",
            description: "We help you identify and apply for merit-based and need-based scholarships, maximizing your financial aid.",
            color: "bg-primary-500"
        },
        {
            icon: <FileCheck size={32} className="text-white" />,
            title: "Visa Application",
            description: "Our experts guide you through the complex visa process, ensuring error-free documentation and interview prep.",
            color: "bg-indigo-500",
            id: "visa"
        },
        {
            icon: <GraduationCap size={32} className="text-white" />,
            title: "University Admit",
            description: "Get accepted into your dream university with our strategized application approach and essay editing services.",
            color: "bg-pink-500",
            id: "admissions"
        },
        {
            icon: <ShieldCheck size={32} className="text-white" />,
            title: "Pre-Departure",
            description: "From accommodation to forex and travel insurance, we ensure you settle in comfortably in your new country.",
            color: "bg-orange-500",
            id: "accommodation"
        }
    ];

    return (
        <section className="py-24 bg-white" id="services">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="text-secondary-600 font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mt-2 mb-6 leading-tight">
                            Making Your Study Abroad Journey <span className="text-primary-600">Seamless</span>
                        </h2>
                        <p className="text-charcoal-600 text-lg mb-8 leading-relaxed">
                            We understand that studying abroad is a big decision. That's why we streamline every step of the process, from finding the right funding to securing your visa, so you can focus on your education.
                        </p>

                        <button className="bg-secondary-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary-600 transition-colors shadow-lg">
                            Get Free Assessment
                        </button>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                id={feature.id}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-3xl bg-charcoal-50 hover:bg-white border border-transparent hover:border-primary-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${feature.color}`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-charcoal-900 mb-3">{feature.title}</h3>
                                <p className="text-charcoal-500 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
