import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingContact = () => {
    return (
        <motion.a
            href="https://wa.me/1234567890" // User should replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="fixed bottom-8 right-8 z-50 group"
        >
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 duration-2000"></div>
            <div className="relative bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                <MessageCircle size={32} fill="white" className="mr-0" />
            </div>

            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl shadow-lg text-charcoal-900 text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat with us!
                <div className="absolute top-1/2 -translate-y-1/2 -right-1 border-4 border-transparent border-l-white"></div>
            </div>
        </motion.a>
    );
};

export default FloatingContact;
