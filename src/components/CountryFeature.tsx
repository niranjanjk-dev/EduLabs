import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const countries = [
    { id: 'usa', label: 'USA', color: 'bg-red-900', gradient: 'from-red-900 to-red-800', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800' },
    { id: 'uk', label: 'UK', color: 'bg-blue-900', gradient: 'from-blue-900 to-blue-800', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800' },
    { id: 'canada', label: 'Canada', color: 'bg-red-700', gradient: 'from-red-700 to-red-600', image: 'https://images.unsplash.com/photo-1548504787-84618e11aebd?auto=format&fit=crop&q=80&w=800' },
    { id: 'australia', label: 'Australia', color: 'bg-blue-800', gradient: 'from-blue-800 to-blue-700', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800' },
    { id: 'ireland', label: 'Ireland', color: 'bg-green-800', gradient: 'from-green-800 to-green-700', image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=800' },
];

const CountryContent = ({ activeCountry }: { activeCountry: string }) => {
    const country = countries.find(c => c.id === activeCountry);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center text-white">
            <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-5xl font-bold tracking-tight">
                    Study in {country?.label}
                </h2>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                    Unlock world-class education opportunities, diverse culture, and career growth in the {country?.label}. We guide you through universities, scholarships, and visa processes.
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-4">
                    {['Top Ranked Universities', 'Post-Study Work Visa', 'Scholarships Available'].map((tag) => (
                        <span key={tag} className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-medium">
                            {tag}
                        </span>
                    ))}
                </div>

                <button className="mt-6 md:mt-8 bg-white text-charcoal-900 px-6 py-2.5 md:px-8 md:py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white/90 transition-all text-sm md:text-base">
                    Explore {country?.label} <ChevronRight size={20} />
                </button>
            </div>

            <div className="relative h-[300px] lg:h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl transform scale-75"></div>
                <img
                    src={country?.image}
                    alt={`${country?.label} Illustration`}
                    className="relative z-10 w-full h-full object-cover rounded-2xl drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
            </div>
        </div>
    );
};

const CountryFeature = () => {
    const [activeTab, setActiveTab] = useState('usa');

    return (
        <section className="py-16 md:py-24 bg-white" id="countries">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-8 md:mb-12">
                    <span className="text-primary-600 font-semibold mb-2 md:mb-3 tracking-wider uppercase text-xs md:text-sm">Destinations</span>
                    <h2 className="text-2xl md:text-4xl font-bold text-center text-charcoal-900 mb-6 md:mb-8">
                        Choose Your Dream Destination
                    </h2>

                    <div className="flex flex-wrap justify-center gap-2 p-1 bg-charcoal-50 rounded-full">
                        {countries.map((country) => (
                            <button
                                key={country.id}
                                onClick={() => setActiveTab(country.id)}
                                className={cn(
                                    "px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                                    activeTab === country.id
                                        ? "bg-white text-charcoal-900 shadow-md"
                                        : "text-charcoal-500 hover:text-charcoal-900 hover:bg-charcoal-100"
                                )}
                            >
                                {country.label}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={cn(
                        "rounded-3xl p-6 md:p-12 lg:p-16 overflow-hidden relative shadow-2xl transition-colors duration-500",
                        `bg-gradient-to-br ${countries.find(c => c.id === activeTab)?.gradient}`
                    )}
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>

                    <CountryContent activeCountry={activeTab} />
                </motion.div>
            </div>
        </section>
    );
};

export default CountryFeature;
