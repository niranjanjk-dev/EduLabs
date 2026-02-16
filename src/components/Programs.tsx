

const Programs = () => {
    const programs = [
        'Computer Science', 'Data Science', 'Business Analytics', 'MBA',
        'Health Sciences', 'Engineering Management', 'Psychology', 'Artificial Intelligence',
        'Digital Marketing', 'Finance', 'Architecture', 'Biotechnology',
        'Cybersecurity', 'Law', 'International Relations', 'Cloud Computing'
    ];

    return (
        <section className="py-16 md:py-24 bg-charcoal-900 text-white" id="programs">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
                    <div className="max-w-xl">
                        <span className="text-primary-400 font-semibold tracking-wider uppercase text-xs md:text-sm">Study Areas</span>
                        <h2 className="text-2xl md:text-4xl font-bold mt-2">
                            Popular Programs
                        </h2>
                        <p className="text-charcoal-300 mt-3 md:mt-4 text-base md:text-lg">
                            Explore trending courses that offer high employability and career growth worldwide.
                        </p>
                    </div>
                    <button className="self-start md:self-auto text-white border-b border-primary-500 pb-1 hover:text-primary-400 transition-colors text-sm md:text-base">
                        View All Programs
                    </button>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3">
                    {programs.map((program) => (
                        <span
                            key={program}
                            className="px-4 py-2 md:px-6 md:py-3 rounded-xl bg-charcoal-800 hover:bg-primary-600 hover:text-white border border-charcoal-700 hover:border-primary-500 transition-all cursor-pointer text-charcoal-200 text-xs md:text-base font-medium"
                        >
                            {program}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
