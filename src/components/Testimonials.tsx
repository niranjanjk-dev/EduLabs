import { Play, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const stories = [
        { name: 'Sarah M.', university: 'Stanford University', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300' },
        { name: 'Rahul K.', university: 'Imperial College London', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300' },
        { name: 'Emily R.', university: 'University of Toronto', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300' },
        { name: 'David L.', university: 'Melbourne University', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300' },
    ];

    return (
        <section className="py-16 md:py-24 bg-white" id="stories">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-primary-600 font-semibold tracking-wider uppercase text-xs md:text-sm">Success Stories</span>
                    <h2 className="text-2xl md:text-4xl font-bold text-charcoal-900 mt-2">
                        We help you <span className="text-primary-600">study abroad!</span>
                    </h2>
                </div>

                {/* Video Cards Grid */}
                <div className="flex overflow-x-auto pb-6 md:pb-0 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 mb-12 md:mb-24 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
                    {stories.map((story, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer shadow-lg min-w-[260px] md:min-w-0 flex-shrink-0"
                        >
                            <img
                                src={story.image}
                                alt={story.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play fill="white" className="text-white ml-1 w-5 h-5 md:w-6 md:h-6" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 p-5 md:p-6 text-white text-left">
                                <h3 className="font-bold text-lg">{story.name}</h3>
                                <p className="text-xs md:text-sm opacity-80">{story.university}</p>
                                <button className="mt-3 bg-primary-500 hover:bg-primary-600 px-4 py-1.5 rounded-xl text-xs font-bold transition-colors">
                                    Watch Story
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Success Story */}
                <div className="bg-primary-50 rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full blur-2xl opacity-50" />
                        <img
                            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600"
                            alt="Success Story"
                            className="rounded-2xl shadow-xl w-full object-cover relative z-10"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                        <Quote className="text-primary-400 w-10 h-10 md:w-12 md:h-12" />
                        <h3 className="text-xl md:text-3xl font-bold text-charcoal-900 leading-tight">
                            "EduLabs made my dream of studying at Oxford a reality. Their guidance on scholarship applications was a game-changer."
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
