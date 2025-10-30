import { ChevronRight } from "lucide-react";
import { topics } from "../datas/topics";

export default function TopicSection(){
    return(
        <>
           <section id="topics" className="py-20 relative">
                <div className="container mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 slide-up">
                      What You'll Master
                    </h2>
                    <p className="text-xl text-gray-400 slide-up" style={{animationDelay: '0.2s'}}>
                      Cutting-edge technologies and battle-tested practices
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {topics.map((topic, index) => (
                      <div key={index} className="group glass-effect rounded-2xl p-6 hover-scale cursor-pointer bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                          <topic.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {topic.name}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {topic.description}
                        </p>
                        <div className="mt-4 flex items-center text-blue-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                          Explore <ChevronRight size={16} className="ml-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
        </>
    )
}