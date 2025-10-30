"use client"
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";


export default function HeroSections() {
      const stats = [
    { value: "100+", label: "Blog Posts" },
    { value: "50K+", label: "Monthly Readers" },
    { value: "25+", label: "DevOps Topics" },
    { value: "Weekly", label: "New Content" },
  ];

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 mb-8 hover-scale bounce-in">
              <Zap className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-gray-300 text-sm font-medium">
                🚀 New posts every week — practical DevOps tutorials, CI/CD
                pipelines, and cloud-native tips.
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight slide-up">
              <span className="text-white">Master Modern</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent gradient-animate">
                DevOps Engineering
              </span>
            </h1>

            <p
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              From cloud infrastructure to CI/CD pipelines, learn
              production-ready DevOps practices that scale
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link href="/Devops-Blogs">
                <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 cursor-pointer rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover-scale flex items-center">
                  Start Learning
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
              </Link>
              {/* <button className="glass-effect text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all hover-scale">
                View Tutorials
              </button> */}
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-effect rounded-xl p-4 hover-scale bounce-in"
                  style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                >
                  <div className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
