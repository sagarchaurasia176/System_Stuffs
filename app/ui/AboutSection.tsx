"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Aboutpage() {
  return (
    <>
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="glass-effect rounded-3xl p-12 hover-scale">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-6xl font-black text-white shadow-2xl animate-pulse-glow hover:rotate-6 transition-transform duration-300">
                    <Image
                      src="https://res.cloudinary.com/dc3mdr2ol/image/upload/v1761865722/sk_iqsvtm.png"
                      width={160}
                      height={160}
                      alt="Sagar"
                      className="rounded-3xl object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-black text-white mb-4 slide-up">
                    Hi, I'm Sagar 👋
                  </h2>
                  <p
                    className="text-gray-300 mb-6 leading-relaxed text-lg slide-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    A passionate fresher with a keen interest in DevOps and
                    Cloud technologies. This platform is dedicated to sharing
                    valuable tips, tricks, and insights about cloud computing to
                    help fellow beginners and enthusiasts navigate their journey
                    in the cloud world.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://linkedin.com/in/sagar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center glass-effect text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all hover-scale"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/sagar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center glass-effect text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all hover-scale"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                    <a
                      href="https://twitter.com/sagar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center glass-effect text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all hover-scale"
                    >
                      <Twitter className="w-5 h-5 mr-2" />
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
