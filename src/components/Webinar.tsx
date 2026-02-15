import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const Webinar = () => {
    const events = [
        {
            title: "Mastering the US Visa Interview Layout",
            date: "Oct 15, 2025",
            time: "6:00 PM EST",
            speaker: "Sarah Jenkins, Ex-Visa Officer",
            image: "https://placehold.co/400x250/png?text=Visa+Webinar",
            tag: "Free"
        },
        {
            title: "Scholarship Hacking 101: Fully Funded",
            date: "Oct 22, 2025",
            time: "7:30 PM EST",
            speaker: "Raj Patel, Scholarship Expert",
            image: "https://placehold.co/400x250/png?text=Scholarship+Webinar",
            tag: "Popular"
        }
    ];

    return (
        <section className="py-24 bg-charcoal-900 text-white" id="webinars">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-xl">
                        <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">Learning Hub</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-3">
                            Join Our <span className="text-secondary-400">Live Masterclasses</span>
                        </h2>
                        <p className="text-charcoal-400 mt-4 text-lg">
                            Get insider tips, ask questions in real-time, and learn from the experts without spending a dime.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                        View All Events <ArrowRight size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-charcoal-800 rounded-3xl overflow-hidden border border-charcoal-700 hover:border-primary-500/50 transition-all group cursor-pointer"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                    {event.tag}
                                </div>
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-6 text-sm text-charcoal-400 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-primary-400" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} className="text-secondary-400" />
                                        <span>{event.time}</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-400 transition-colors">
                                    {event.title}
                                </h3>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-8 h-8 rounded-full bg-charcoal-700 flex items-center justify-center">
                                        <User size={14} className="text-white" />
                                    </div>
                                    <span className="text-sm font-medium text-charcoal-300">{event.speaker}</span>
                                </div>
                                <button className="w-full bg-white text-charcoal-900 font-bold py-3 rounded-xl hover:bg-primary-500 hover:text-white transition-colors">
                                    Register for Free
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <button className="md:hidden mt-8 w-full flex items-center justify-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                    View All Events <ArrowRight size={18} />
                </button>
            </div>
        </section>
    );
};

export default Webinar;
