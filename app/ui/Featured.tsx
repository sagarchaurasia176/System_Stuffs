// export function create
"use client";
import { BookOpen, Rocket, TrendingUp, Users } from "lucide-react";
// import { features } from "process";
import DeopsImage from "../../public/Devops1.jpeg";
import Image from "next/image";

export default function Featured() {
  const features = [
    {
      icon: Rocket,
      title: "Production-Ready Code",
      desc: "Battle-tested configurations",
    },
    {
      icon: Users,
      title: "Community Driven",
      desc: "Join 10K+ active learners",
    },
    {
      icon: BookOpen,
      title: "Step-by-Step Guides",
      desc: "Never get stuck again",
    },
  ];

  return (
    <>
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center glass-effect rounded-full px-4 py-2 mb-6 bounce-in">
                  <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-sm">Most Popular</span>
                </div>
                <h2 className="text-4xl font-black text-white mb-6 slide-up">
                  Real-World Projects You Can Deploy Today
                </h2>
                <p
                  className="text-gray-400 mb-8 text-lg leading-relaxed slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  Learn by building production-grade infrastructure. Every
                  tutorial includes working code, best practices, and deployment
                  guides.
                </p>
                <div className="space-y-4">
                  {features.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start space-x-4 glass-effect rounded-xl p-4 hover-scale slide-up"
                      style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                    >
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-2 flex-shrink-0 hover:rotate-12 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-50 animate-pulse" />
                  <Image
                    src={DeopsImage}
                    alt="DevOps workspace"
                    width={800}
                    height={600}
                    className="relative rounded-2xl shadow-2xl hover-scale"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
