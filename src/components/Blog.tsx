import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Blog = () => {
    const articles = [
        {
            category: "Guide",
            date: "Sep 28, 2025",
            title: "Top 10 Universities in UK for Data Science (2026 Rankings)",
            desc: "A comprehensive analysis of curriculum, placements, and fees for aspiring data scientists.",
            image: "https://placehold.co/400x300/png?text=UK+Universities"
        },
        {
            category: "Success Story",
            date: "Sep 25, 2025",
            title: "How Ananya Cracked a Full Scholarship at Yale",
            desc: "Read about the exact profile, essays, and extracurriculars that got her fully funded.",
            image: "https://placehold.co/400x300/png?text=Success+Story"
        },
        {
            category: "Visa",
            date: "Sep 20, 2025",
            title: "Recent Changes in Canadian Student Visa Policies",
            desc: "Everything you need to know about GIC increases and work permit caps.",
            image: "https://placehold.co/400x300/png?text=Canada+Visa"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white" id="blog">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-primary-600 font-semibold tracking-wider uppercase text-xs md:text-sm">Insights & Updates</span>
                    <h2 className="text-2xl md:text-5xl font-bold text-charcoal-900 mt-2 md:mt-3 mb-4 md:mb-6">
                        Latest from the <span className="text-secondary-600">Blog</span>
                    </h2>
                    <p className="text-charcoal-600 max-w-xl mx-auto text-base md:text-lg">
                        Stay ahead of the curve with our expert analysis, student stories, and industry updates.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {articles.map((article, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8 }}
                            className="group cursor-pointer"
                        >
                            <div className="rounded-3xl overflow-hidden mb-6 relative">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight className="text-charcoal-900" size={20} />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-3">
                                <span className="text-primary-600">{article.category}</span>
                                <span className="w-1 h-1 rounded-full bg-charcoal-300" />
                                <span>{article.date}</span>
                            </div>

                            <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">
                                {article.title}
                            </h3>
                            <p className="text-charcoal-500 text-sm line-clamp-2 leading-relaxed">
                                {article.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-charcoal-50 text-charcoal-900 border border-charcoal-200 px-8 py-3 rounded-xl font-bold hover:bg-charcoal-900 hover:text-white transition-all">
                        Read All Articles
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blog;
