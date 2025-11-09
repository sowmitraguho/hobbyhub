import React from 'react';
import { 
    Facebook, 
    Twitter, 
    Instagram, 
    Linkedin, 
    Youtube, 
    Mail, 
    MapPin, 
    Phone,
    Heart,
    Sparkles,
    ArrowRight
} from 'lucide-react';

export default function Footer() {
    const footerLinks = {
        product: [
            { name: 'Features', href: '#features' },
            { name: 'How it Works', href: '#how-it-works' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'Testimonials', href: '#testimonials' },
            { name: 'FAQ', href: '#faq' }
        ],
        resources: [
            { name: 'Blog', href: '#blog' },
            { name: 'Help Center', href: '#help' },
            { name: 'Community Guidelines', href: '#guidelines' },
            { name: 'Success Stories', href: '#stories' },
            { name: 'Events Calendar', href: '#calendar' }
        ],
        company: [
            { name: 'About Us', href: '#about' },
            { name: 'Careers', href: '#careers' },
            { name: 'Press Kit', href: '#press' },
            { name: 'Contact', href: '#contact' },
            { name: 'Partners', href: '#partners' }
        ],
        legal: [
            { name: 'Privacy Policy', href: '#privacy' },
            { name: 'Terms of Service', href: '#terms' },
            { name: 'Cookie Policy', href: '#cookies' },
            { name: 'GDPR', href: '#gdpr' },
            { name: 'Licenses', href: '#licenses' }
        ]
    };

    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: '#', gradient: 'from-blue-500 to-blue-600' },
        { name: 'Twitter', icon: Twitter, href: '#', gradient: 'from-sky-400 to-blue-500' },
        { name: 'Instagram', icon: Instagram, href: '#', gradient: 'from-pink-500 to-rose-500' },
        { name: 'LinkedIn', icon: Linkedin, href: '#', gradient: 'from-blue-600 to-blue-700' },
        { name: 'YouTube', icon: Youtube, href: '#', gradient: 'from-red-500 to-red-600' }
    ];

    const popularCategories = [
        'Photography', 'Fitness', 'Cooking', 'Gaming', 
        'Music', 'Art', 'Reading', 'Travel'
    ];

    return (
        <footer className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                                HobbyHub
                            </h3>
                            <p className="mt-4 text-gray-300 leading-relaxed">
                                Connecting passionate people through shared hobbies. Build communities, organize events, and create lasting memories.
                            </p>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                Subscribe to our newsletter
                            </h4>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                                />
                                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-105">
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => {
                                    const SocialIcon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center hover:scale-110 transition-transform shadow-lg`}
                                            aria-label={social.name}
                                        >
                                            <SocialIcon className="w-5 h-5 text-white" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Product</h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Popular Categories */}
                <div className="py-8 border-t border-white/10">
                    <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Popular Categories</h4>
                    <div className="flex flex-wrap gap-2">
                        {popularCategories.map((category) => (
                            <a
                                key={category}
                                href={`#${category.toLowerCase()}`}
                                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-gray-300 hover:bg-white/20 hover:text-white hover:border-white/30 transition-all backdrop-blur-sm"
                            >
                                {category}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Info */}
                <div className="py-8 border-t border-white/10">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-white mb-1">Address</h5>
                                <p className="text-sm text-gray-300">
                                    123 Hobby Street<br />
                                    San Francisco, CA 94102
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-white mb-1">Phone</h5>
                                <p className="text-sm text-gray-300">
                                    +1 (555) 123-4567<br />
                                    Mon-Fri 9am-6pm PST
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-white mb-1">Email</h5>
                                <p className="text-sm text-gray-300">
                                    support@hobbyhub.com<br />
                                    info@hobbyhub.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                            <span>© 2024 HobbyHub. Made with</span>
                            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
                            <span>for hobby enthusiasts</span>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-300">
                            <a href="#sitemap" className="hover:text-white transition-colors">
                                Sitemap
                            </a>
                            <a href="#accessibility" className="hover:text-white transition-colors">
                                Accessibility
                            </a>
                            <a href="#status" className="hover:text-white transition-colors flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                System Status
                            </a>
                        </div>
                    </div>
                </div>

                {/* Decorative Bottom Element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
            </div>
        </footer>
    );
}