import { Play, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const stories = [
        { name: 'Sarah M.', university: 'Stanford University', image: 'https://placehold.co/300x400/png?text=Sarah' },
        { name: 'Rahul K.', university: 'Imperial College London', image: 'https://placehold.co/300x400/png?text=Rahul' },
        { name: 'Emily R.', university: 'University of Toronto', image: 'https://placehold.co/300x400/png?text=Emily' },
        { name: 'David L.', university: 'Melbourne University', image: 'https://placehold.co/300x400/png?text=David' },
    ];

    return (
        <section className="py-24 bg-white" id="stories">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Success Stories</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mt-2">
                        We help you <span className="text-primary-600">study abroad!</span>
                    </h2>
                </div>

                {/* Video Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {stories.map((story, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer shadow-lg"
                        >
                            <img
                                src={story.image}
                                alt={story.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play fill="white" className="text-white ml-1" size={24} />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 p-6 text-white text-left">
                                <h3 className="font-bold text-lg">{story.name}</h3>
                                <p className="text-sm opacity-80">{story.university}</p>
                                <button className="mt-3 bg-primary-500 hover:bg-primary-600 px-4 py-1.5 rounded-xl text-xs font-bold transition-colors">
                                    Watch Story
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Success Story */}
                <div className="bg-primary-50 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full blur-2xl opacity-50" />
                        <img
                            src="https://placehold.co/600x400/png?text=Featured+Story"
                            alt="Success Story"
                            className="rounded-2xl shadow-xl w-full object-cover relative z-10"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 space-y-6">
                        <Quote className="text-primary-400 w-12 h-12" />
                        <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 leading-tight">
                            "EduConsult made my dream of studying at Oxford a reality. Their guidance on scholarship applications was a game-changer."
                        </h3>

                        <div>
                            <p className="font-bold text-lg text-charcoal-900">Priya Sharma</p>
                            <div className="flex items-center gap-2 text-charcoal-500 text-sm">
                                <span>MSc Computer Science</span>
                                <span>•</span>
                                <span>University of Oxford</span>
                            </div>
                        </div>

                        <button className="text-primary-600 font-bold hover:text-primary-700 transition-colors flex items-center gap-2">
                            Read Full Story <Play size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
