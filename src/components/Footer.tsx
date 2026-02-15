import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, ArrowRight, ArrowLeft } from 'lucide-react';

const Footer = () => {
    const branches = [
        { city: "Mumbai", state: "Maharashtra", address: "Bandra Kurla Complex, 400051", phone: "+91 22 1234 5678", image: "https://placehold.co/600x800/2a323c/ffffff?text=Mumbai+Office" },
        { city: "Delhi", state: "Delhi NCR", address: "Connaught Place, 110001", phone: "+91 11 2345 6789", image: "https://placehold.co/600x800/2a323c/ffffff?text=Delhi+Headquarters" },
        { city: "Bangalore", state: "Karnataka", address: "Indiranagar, 100 Feet Rd, 560038", phone: "+91 80 3456 7890", image: "https://placehold.co/600x800/2a323c/ffffff?text=Bangalore+Hub" },
        { city: "Hyderabad", state: "Telangana", address: "Hitech City, Mindspace, 500081", phone: "+91 40 4567 8901", image: "https://placehold.co/600x800/2a323c/ffffff?text=Hyderabad+Center" },
        { city: "Chennai", state: "Tamil Nadu", address: "Anna Nagar, 2nd Avenue, 600040", phone: "+91 44 5678 9012", image: "https://placehold.co/600x800/2a323c/ffffff?text=Chennai+Branch" },
        { city: "Pune", state: "Maharashtra", address: "Koregaon Park, 411001", phone: "+91 20 6789 0123", image: "https://placehold.co/600x800/2a323c/ffffff?text=Pune+Office" },
        { city: "Kolkata", state: "West Bengal", address: "Park Street, 700016", phone: "+91 33 7890 1234", image: "https://placehold.co/600x800/2a323c/ffffff?text=Kolkata+Center" },
        { city: "Ahmedabad", state: "Gujarat", address: "SG Highway, 380054", phone: "+91 79 8901 2345", image: "https://placehold.co/600x800/2a323c/ffffff?text=Ahmedabad+Branch" },
        { city: "Jaipur", state: "Rajasthan", address: "C-Scheme, 302001", phone: "+91 141 9012 3456", image: "https://placehold.co/600x800/2a323c/ffffff?text=Jaipur+Office" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);

    useEffect(() => {
        if (isAutoPlayPaused) return;

        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [isAutoPlayPaused, branches.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % branches.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + branches.length) % branches.length);
    };

    const handleManualNext = () => {
        nextSlide();
    };

    const handleManualPrev = () => {
        prevSlide();
    };

    const handleManualSelect = (index: number) => {
        setCurrentIndex(index);
    };

    const currentBranch = branches[currentIndex];

    // Animation variants
    const slideVariants = {
        enter: { opacity: 0, y: 15 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -15 }
    };

    return (
        <footer className="bg-charcoal-950 text-white pt-24 pb-12" id="contact">
            <div className="container mx-auto px-6">

                {/* 1. Global Presence Section */}
                <div className="mb-24">
                    <div className="flex flex-col items-center justify-center mb-16 space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight text-center">Our Presence Across India</h3>
                        <p className="text-charcoal-400 text-sm max-w-lg text-center">
                            Visit our offices in major cities for in-person counseling and support.
                        </p>
                    </div>

                    {/* Unified 3-Column Card Container */}
                    <div className="bg-charcoal-900 rounded-[2rem] overflow-hidden border border-charcoal-800 shadow-2xl grid grid-cols-1 lg:grid-cols-3 min-h-[450px]">

                        {/* Column 1: Text Details & Controls */}
                        <div className="p-8 md:p-10 flex flex-col justify-between relative bg-gradient-to-br from-charcoal-900 to-charcoal-950 border-b lg:border-b-0 lg:border-r border-charcoal-800">
                            <div className="relative z-10 flex-grow flex flex-col justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.4 }}
                                        className="w-full"
                                    >
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-[10px] font-bold uppercase tracking-wider mb-4 border border-primary-500/20">
                                            {currentBranch.state}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                                            {currentBranch.city}
                                        </h2>

                                        <div className="space-y-4 text-charcoal-300">
                                            <div className="flex items-start gap-3">
                                                <MapPin className="text-primary-500 shrink-0 mt-1" size={18} />
                                                <span className="text-sm md:text-base leading-relaxed">{currentBranch.address}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Phone className="text-primary-500 shrink-0" size={18} />
                                                <span className="text-sm md:text-base font-medium">{currentBranch.phone}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Navigation Controls */}
                            <div className="flex items-center justify-between mt-10 pt-6 border-t border-charcoal-800/50">
                                <div className="flex gap-1.5 flex-grow mr-6">
                                    {branches.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleManualSelect(idx)}
                                            className={`rounded-full transition-all duration-300 ${idx === currentIndex ? "w-2.5 h-2.5 bg-primary-500 scale-110 shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "w-1.5 h-1.5 bg-charcoal-700 hover:bg-charcoal-500 hover:scale-110"
                                                }`}
                                            aria-label={`View ${branches[idx].city} branch`}
                                        />
                                    ))}
                                </div>
                                <div
                                    className="flex gap-2 shrink-0"
                                    onMouseEnter={() => setIsAutoPlayPaused(true)}
                                    onMouseLeave={() => setIsAutoPlayPaused(false)}
                                >
                                    <button onClick={handleManualPrev} className="w-9 h-9 rounded-full border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:text-white hover:bg-charcoal-800 transition-all active:scale-95">
                                        <ArrowLeft size={16} />
                                    </button>
                                    <button onClick={handleManualNext} className="w-9 h-9 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/20 active:scale-95">
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Dynamic Building Image */}
                        <div className="relative overflow-hidden bg-charcoal-800 border-b lg:border-b-0 lg:border-r border-charcoal-800 group h-64 lg:h-auto">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <img
                                        src={currentBranch.image}
                                        alt={`${currentBranch.city} Office`}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent"></div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Column 3: Dynamic Map */}
                        <div className="relative overflow-hidden bg-charcoal-800 group h-64 lg:h-auto">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <iframe
                                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30000!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(currentBranch.city + ", India")}!5e0!3m2!1sen!2sin!4v1645437845678!5m2!1sen!2sin`}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(0.85)' }}
                                        allowFullScreen
                                        loading="lazy"
                                        className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    ></iframe>

                                    <div className="absolute top-4 right-4">
                                        <a
                                            href={`https://maps.google.com/?q=${encodeURIComponent(currentBranch.address)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-charcoal-900/90 backdrop-blur px-3 py-1.5 rounded-lg text-[10px] font-bold text-white border border-charcoal-700 shadow-xl hover:bg-primary-500 hover:border-primary-500 transition-all"
                                        >
                                            <MapPin size={12} />
                                            Directions
                                        </a>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>

                {/* 3. Brand & Newsletter */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20 py-12 border-t border-b border-charcoal-800/50">
                    <div className="max-w-lg text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/20">
                                E
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">EduConsult</span>
                        </div>
                        <p className="text-charcoal-400 text-sm leading-relaxed mb-6">
                            Simplifying your journey from application to arrival. Expanding horizons for students across India.
                        </p>

                        <div className="flex gap-4 justify-center lg:justify-start">
                            {[
                                { Icon: Facebook, color: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white" },
                                { Icon: Twitter, color: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white" },
                                { Icon: Instagram, color: "hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-500 hover:border-pink-500 hover:text-white" },
                                { Icon: Linkedin, color: "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white" }
                            ].map(({ Icon, color }, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className={`w-10 h-10 rounded-xl bg-charcoal-900 border border-charcoal-800 flex items-center justify-center text-charcoal-400 transition-all duration-300 shadow-md hover:-translate-y-1 ${color}`}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="w-full max-w-lg bg-charcoal-900/30 p-6 rounded-2xl border border-charcoal-800/50">
                        <h3 className="font-bold text-lg text-white mb-2">Stay Updated</h3>
                        <p className="text-charcoal-400 text-xs mb-4">
                            Weekly scholarship alerts and study guides.
                        </p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email..."
                                className="bg-charcoal-950 border border-charcoal-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 w-full transition-all"
                            />
                            <button className="bg-secondary-500 hover:bg-secondary-600 text-charcoal-950 px-6 py-3 rounded-lg text-sm font-bold transition-all shadow-lg shadow-secondary-500/20 whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* 4. Links & Copyright */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 text-sm">
                    <div>
                        <h4 className="font-bold text-white text-sm mb-4">Company</h4>
                        <ul className="space-y-3 text-charcoal-400 text-xs">
                            <li><a href="#about" className="hover:text-primary-400 transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-300">About Us</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-300">Careers</a></li>
                            <li><a href="#partners" className="hover:text-primary-400 transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-300">Partners</a></li>
                            <li><a href="#contact" className="hover:text-primary-400 transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-300">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm mb-4">Services</h4>
                        <ul className="space-y-3 text-charcoal-400 text-xs">
                            <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-300">Counseling</a></li>
                            <li><a href="#programs" className="hover:text-primary-400 transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-300">Test Prep</a></li>
                            <li><a href="#visa" className="hover:text-primary-400 transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-300">Visa Help</a></li>
                            <li><a href="#scholarships" className="hover:text-primary-400 transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-300">Scholarships</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm mb-4">Resources</h4>
                        <ul className="space-y-3 text-charcoal-400 text-xs">
                            <li><a href="#blog" className="hover:text-primary-400 transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-300">Blog</a></li>
                            <li><a href="#scholarships" className="hover:text-primary-400 transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-300">Success Stories</a></li>
                            <li><a href="#webinar" className="hover:text-primary-400 transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-300">Events & Webinars</a></li>
                            <li><a href="#downloads" className="hover:text-primary-400 transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-300">Free Guides</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm mb-4">Legal</h4>
                        <ul className="space-y-3 text-charcoal-400 text-xs">
                            <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-300">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-300">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-300">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-charcoal-800 pt-8 mt-4 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-charcoal-500 text-[10px] uppercase tracking-wider font-medium">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <p>© 2025 EduConsult Inc. All rights reserved.</p>
                        <span className="hidden md:block text-charcoal-700">|</span>
                        <p className="text-charcoal-600">Powered by LbxSuite</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                        <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
                        <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
