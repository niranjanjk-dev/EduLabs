import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What services does EduConsult provide?",
            answer: "We offer end-to-end guidance including profile evaluation, university shortlisting, SOP/LOR editing, visa assistance, and pre-departure briefings."
        },
        {
            question: "Do you help with scholarships?",
            answer: "Yes, we identify scholarship opportunities you are eligible for and assist you in crafting compelling applications to maximize your chances of securing funding."
        },
        {
            question: "Which countries do you cover?",
            answer: "We specialize in admissions for USA, UK, Canada, Australia, Ireland, Germany, and New Zealand."
        },
        {
            question: "How much do your services cost?",
            answer: "Our consultation fees vary based on the package you choose. We offer a free initial counseling session to understand your needs."
        },
        {
            question: "What is the success rate of your students?",
            answer: "We are proud of our 98% visa success rate and have placed over 10,000 students in top universities globally."
        }
    ];

    return (
        <section className="py-24 bg-charcoal-50" id="faq">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">FAQ</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mt-2">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "bg-white rounded-2xl overflow-hidden transition-all duration-300",
                                activeIndex === index ? "shadow-md ring-1 ring-primary-100" : "hover:bg-white/50"
                            )}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={cn("font-bold text-lg", activeIndex === index ? "text-primary-600" : "text-charcoal-900")}>
                                    {faq.question}
                                </span>
                                <span className={cn("p-2 rounded-full transition-colors", activeIndex === index ? "bg-primary-100 text-primary-600" : "bg-charcoal-100 text-charcoal-500")}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-charcoal-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
