import { Trophy, Star, Award } from 'lucide-react';

const Awards = () => {
    const awards = [
        {
            icon: <Trophy size={40} className="text-yellow-500" />,
            title: "Best Education Consultancy",
            organization: "Global Education Summit 2024"
        },
        {
            icon: <Star size={40} className="text-primary-500" />,
            title: "Top Rated by Students",
            organization: "Google & Trustpilot Reviews"
        },
        {
            icon: <Award size={40} className="text-blue-500" />,
            title: "Excellence in Counseling",
            organization: "International Career Forum"
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-gradient-to-r from-charcoal-900 to-charcoal-950 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Award-Winning Mentorship</h2>
                    <p className="text-charcoal-400 text-sm md:text-base">Recognized globally for our commitment to student success.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                    {awards.map((award, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                                {award.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                            <p className="text-charcoal-400 text-sm opacity-80">{award.organization}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
