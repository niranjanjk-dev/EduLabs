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
        <section className="py-16 md:py-24 bg-white" id="services">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
                    <div className="lg:w-1/2">
                        <span className="text-secondary-600 font-semibold tracking-wider uppercase text-xs md:text-sm">Why Choose Us</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-charcoal-900 mt-2 mb-4 md:mb-6 leading-tight">
                            Making Your Study Abroad Journey <span className="text-primary-600">Seamless</span>
                        </h2>
                        <p className="text-charcoal-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                            We understand that studying abroad is a big decision. That's why we streamline every step of the process, from finding the right funding to securing your visa, so you can focus on your education.
                        </p>

                        <button className="bg-secondary-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary-600 transition-colors shadow-lg">
                            Get Free Assessment
                        </button>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-2 gap-3 md:gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                id={feature.id}
                                whileHover={{ y: -5 }}
                                className="p-4 md:p-8 rounded-3xl bg-charcoal-50 hover:bg-white border border-transparent hover:border-primary-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-3 md:mb-6 shadow-lg ${feature.color}`}>
                                    {/* Create a clone of the icon with new props if possible, or just accept the size diff via css/parent */}
                                    {/* Since icons are passed as nodes, we can't easily change props. Re-rendering icon here or using a wrapper. 
                                        Simpler: Wrapper div controls size? No, lucide icons have specific size. 
                                        Correction: `features` array has hardcoded icons. I'll need to update the `features` array definitions or use cloneElement. 
                                        Actually, simpler to specificy a smaller size in the features array later, OR just let them be 32 which is fine, 
                                        but 32 is a bit big for a small card. 
                                        Let's update the features array in a separate step or just use css scaling.
                                        CSS Scaling: */}
                                    <div className="scale-75 md:scale-100 origin-center">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-sm md:text-xl font-bold text-charcoal-900 mb-2 md:mb-3 leading-tight">{feature.title}</h3>
                                <p className="text-charcoal-500 text-[10px] md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
