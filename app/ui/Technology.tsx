
const TechnologiesSection = () => {
  const technologies = ['docker', 'kubernetes', 'jenkins', 'terraform', 'amazonwebservices', 'git'];
  
  return (
   <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 slide-up">
              Technologies We Cover
            </h2>
            <p className="text-xl text-gray-400 slide-up" style={{animationDelay: '0.2s'}}>
              Industry-standard tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={tech} className="glass-effect rounded-xl p-6 hover-scale text-center group cursor-pointer tech-icon bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-white rounded-lg p-3 mb-3 inline-block group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <img 
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech === 'amazonwebservices' ? 'amazonwebservices-original-wordmark' : tech === 'kubernetes' ? 'kubernetes-plain' : tech + '-original'}.svg`} 
                  alt={tech} 
                  className="w-10 h-10 mx-auto" 
                  />
                </div>
                <p className="font-bold text-white text-sm capitalize group-hover:text-blue-400 transition-colors">
                  {tech === 'amazonwebservices' ? 'AWS' : tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};
export default TechnologiesSection;
