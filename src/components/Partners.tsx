import { motion } from 'framer-motion';

const universities = [
    { name: 'Harvard University', logo: 'https://placehold.co/200x80/png?text=Harvard' },
    { name: 'Stanford University', logo: 'https://placehold.co/200x80/png?text=Stanford' },
    { name: 'MIT', logo: 'https://placehold.co/200x80/png?text=MIT' },
    { name: 'University of Oxford', logo: 'https://placehold.co/200x80/png?text=Oxford' },
    { name: 'Cambridge University', logo: 'https://placehold.co/200x80/png?text=Cambridge' },
    { name: 'Imperial College', logo: 'https://placehold.co/200x80/png?text=Imperial' },
    { name: 'ETH Zurich', logo: 'https://placehold.co/200x80/png?text=ETH+Zurich' },
    { name: 'University of Toronto', logo: 'https://placehold.co/200x80/png?text=Toronto' },
    { name: 'National University of Singapore', logo: 'https://placehold.co/200x80/png?text=NUS' },
    { name: 'University of Melbourne', logo: 'https://placehold.co/200x80/png?text=Melbourne' },
];

const UniversityCard = ({ uni }: { uni: { name: string, logo: string } }) => (
    <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-xl shadow-sm border border-charcoal-100 min-w-[300px] mx-4 grayscale hover:grayscale-0 transition-all duration-300">
        <img src={uni.logo} alt={uni.name} className="h-12 w-auto object-contain" />
        <span className="font-semibold text-charcoal-800 text-sm">{uni.name}</span>
    </div>
);

const MarqueeRow = ({ items, direction = 'left', speed = 20 }: { items: typeof universities, direction?: 'left' | 'right', speed?: number }) => {
    return (
        <div className="flex overflow-hidden py-4 mask-linear-fade">
            <motion.div
                initial={{ x: direction === 'left' ? 0 : "-33.33%" }}
                animate={{ x: direction === 'left' ? "-33.33%" : 0 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
                className="flex flex-shrink-0"
            >
                {[...items, ...items, ...items].map((uni, idx) => (
                    <UniversityCard key={`${uni.name}-${idx}`} uni={uni} />
                ))}
            </motion.div>
        </div>
    );
};

const Partners = () => {
    return (
        <section className="py-16 md:py-24 bg-charcoal-50/50 overflow-hidden border-y border-charcoal-100">
            <div className="container mx-auto px-6 text-center mb-8 md:mb-12">
                <span className="text-primary-600 font-semibold tracking-wider uppercase text-xs md:text-sm">Global Network</span>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal-900 mt-2">
                    Trusted by World's Leading Universities
                </h2>
            </div>

            <div className="flex flex-col gap-8 relative">
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-charcoal-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-charcoal-50 to-transparent z-10 pointer-events-none" />

                <MarqueeRow items={universities.slice(0, 5)} direction="left" speed={25} />
                <MarqueeRow items={universities.slice(5, 10)} direction="right" speed={25} />
            </div>
        </section>
    );
};

export default Partners;
