import { Mail } from "lucide-react";

    export default function Newsletter(){

return(
    <>
    <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl p-12 text-center hover-scale">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 gradient-animate" />
              <div className="relative z-10">
                <Mail className="w-16 h-16 text-white mx-auto mb-6 bounce-in" />
                <h2 className="text-4xl font-black text-white mb-4 slide-up">
                  Get Weekly DevOps Insights
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto slide-up" style={{animationDelay: '0.2s'}}>
                  Join 50,000+ engineers getting tutorials, tips, and news delivered to their inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto slide-up" style={{animationDelay: '0.4s'}}>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:scale-105 transition-all"
                  />
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
                    Subscribe
                  </button>
                </div>
                <p className="text-blue-100 text-sm mt-4">
                  No spam. Unsubscribe anytime. 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>


)

    }
