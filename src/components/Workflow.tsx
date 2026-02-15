import { UserCheck, Search, FileText } from 'lucide-react';

const Workflow = () => {
    const steps = [
        {
            icon: <UserCheck size={40} className="text-primary-600" />,
            title: 'Profile Evaluation',
            description: 'We analyze your academic background, test scores, and interests to identify the best-fit universities and programs.',
            points: ['In-depth profile analysis', 'Career goal alignment', 'Scholarship eligibility check']
        },
        {
            icon: <Search size={40} className="text-primary-600" />,
            title: 'University Shortlisting',
            description: 'Our AI-driven system combined with expert counselors helps you select the perfect mix of ambitious, target, and safe universities.',
            points: ['AI-powered recommendations', 'Course curriculum comparison', 'ROI & placement analysis']
        },
        {
            icon: <FileText size={40} className="text-primary-600" />,
            title: 'Application Assistance',
            description: 'We guide you through every step of the application process, ensuring your SOPs and LORs stand out from the competition.',
            points: ['SOP & LOR editing', 'Application review', 'Interview preparation']
        }
    ];

    return (
        <section className="py-24 bg-white" id="how-we-work">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Our Process</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mt-2">
                        How We Work
                    </h2>
                    <p className="text-charcoal-500 mt-4 max-w-2xl mx-auto">
                        A structured, transparent, and personalized approach to ensure your admission success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-primary-50/50 hover:bg-primary-50 rounded-3xl p-8 transition-colors duration-300 border border-primary-100/50 hover:border-primary-200"
                        >
                            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 text-primary-600">
                                {step.icon}
                            </div>

                            <h3 className="text-xl font-bold text-charcoal-900 mb-4 tracking-tight">
                                {step.title}
                            </h3>

                            <p className="text-charcoal-600 mb-6 leading-relaxed text-sm">
                                {step.description}
                            </p>

                            <ul className="space-y-3">
                                {step.points.map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-charcoal-700 text-sm font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
