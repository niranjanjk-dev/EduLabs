import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-charcoal-950 text-white pt-20 pb-10" id="contact">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Address */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                E
                            </div>
                            <span className="text-xl font-bold tracking-tight">EduConsult</span>
                        </div>

                        <p className="text-charcoal-400 text-sm leading-relaxed">
                            Empowering students to achieve their global education dreams with expert guidance and personalized support.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-3 text-charcoal-400 text-sm">
                                <MapPin size={18} className="mt-1 text-primary-500" />
                                <span>123 Education Lane, Knowledge Park,<br />New York, NY 10001</span>
                            </div>
                            <div className="flex items-center gap-3 text-charcoal-400 text-sm">
                                <Phone size={18} className="text-primary-500" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-charcoal-400 text-sm">
                                <Mail size={18} className="text-primary-500" />
                                <span>hello@educonsult.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-charcoal-400 text-sm">
                            <li><a href="#" className="hover:text-primary-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Success Stories</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Events & Webinars</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Top Programs</h3>
                        <ul className="space-y-4 text-charcoal-400 text-sm">
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Computer Science</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Management (MBA)</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Engineering</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Health Sciences</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Data Analytics</a></li>
                        </ul>
                    </div>

                    {/* Other & Social */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Stay Connected</h3>
                        <p className="text-charcoal-400 text-sm mb-6">
                            Subscribe to our newsletter for the latest updates on scholarships and deadlines.
                        </p>

                        <div className="flex gap-4 mb-8">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-charcoal-900 flex items-center justify-center text-charcoal-400 hover:bg-primary-500 hover:text-white transition-all"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>

                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-charcoal-900 border border-charcoal-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-primary-500 w-full"
                            />
                            <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-charcoal-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-charcoal-600 text-xs">
                        © 2025 EduConsult. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-charcoal-600 text-xs">
                        <a href="#" className="hover:text-charcoal-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-charcoal-400 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-charcoal-400 transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
