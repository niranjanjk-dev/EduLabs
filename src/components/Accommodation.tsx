import { motion } from 'framer-motion';
// import { Home, Users, MapPin, Wifi } from 'lucide-react'; // Unused

const Accommodation = () => {
    const options = [
        {
            title: "On-Campus Dorms",
            price: "$$",
            features: ["Proximity to classes", "Meal plans included", "Community life"],
            image: "https://placehold.co/400x300/png?text=Dorms"
        },
        {
            title: "Private Apartments",
            price: "$$$",
            features: ["Privacy & Freedom", "Own kitchen", "No curfew"],
            image: "https://placehold.co/400x300/png?text=Apartments"
        },
        {
            title: "Managed Student Housing",
            price: "$$",
            features: ["Fully furnished", "All bills included", "Social events"],
            image: "https://placehold.co/400x300/png?text=Student+Housing"
        }
    ];

    return (
        <section className="py-24 bg-charcoal-50" id="accommodation">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Home Away From Home</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-charcoal-900 mt-3 mb-6">
                        Seamless <span className="text-secondary-600">Accommodation</span> Support
                    </h2>
                    <p className="text-charcoal-600 max-w-2xl mx-auto text-lg">
                        We partner with trusted housing providers globally to ensure you have a safe, comfortable, and affordable place to stay from day one.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {options.map((option, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={option.image}
                                    alt={option.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-charcoal-900">
                                    {option.price}
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-xl font-bold text-charcoal-900 mb-4">{option.title}</h3>
                                <ul className="space-y-3 mb-8">
                                    {option.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-charcoal-600 text-sm">
                                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-3 border border-charcoal-200 rounded-xl font-bold text-charcoal-900 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-colors">
                                    Check Availability
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
                    {['Amber', 'UniPlaces', 'Casita', 'Spotahome'].map(provider => (
                        <span key={provider} className="text-xl font-bold text-charcoal-400 uppercase tracking-widest">{provider}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accommodation;
