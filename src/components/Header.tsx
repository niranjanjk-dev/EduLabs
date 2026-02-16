import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        {
            name: 'Services',
            href: '#services',
            dropdown: [
                { name: 'Scholarship Assistance', href: '#scholarships' },
                { name: 'Visa Counseling', href: '#visa' },
                { name: 'University Admissions', href: '#admissions' },
                { name: 'Accommodation', href: '#accommodation' }
            ]
        },
        {
            name: 'Resources',
            href: '#resources',
            dropdown: [
                { name: 'Downloads & Guides', href: '#downloads' },
                { name: 'Success Stories', href: '#stories' },
                { name: 'Webinars', href: '#webinars' },
                { name: 'Blog', href: '#blog' }
            ]
        },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-lg shadow-primary-500/20">
                        E
                    </div>
                    <span className={cn("text-xl md:text-2xl font-bold tracking-tight transition-colors", isScrolled ? "text-charcoal-900" : "text-charcoal-900")}>
                        EduLabs
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group"
                        >
                            <a
                                href={link.href}
                                className="text-charcoal-600 hover:text-primary-600 font-medium transition-colors flex items-center gap-1"
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                            </a>

                            {/* Dropdown Menu */}
                            {link.dropdown && (
                                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 w-56 flex flex-col gap-1 overflow-hidden">
                                        {link.dropdown.map((subItem) => (
                                            <a
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="px-4 py-2.5 text-sm text-charcoal-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
                                            >
                                                {subItem.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className="bg-charcoal-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-600 transition-colors shadow-lg hover:shadow-primary-500/25">
                        Free Consultation
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-charcoal-900 absolute right-6"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col gap-4 md:hidden">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-base font-medium text-charcoal-900 block mb-2"
                                    onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                                {/* Mobile Submenu */}
                                {link.dropdown && (
                                    <div className="pl-4 border-l-2 border-primary-100 flex flex-col gap-2 mb-2">
                                        {link.dropdown.map(subItem => (
                                            <a
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="text-charcoal-500 text-sm font-medium py-1"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {subItem.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <button className="bg-primary-500 text-white w-full py-3 rounded-xl font-bold mt-4 shadow-lg shadow-primary-500/30">
                            Get Started Now
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
