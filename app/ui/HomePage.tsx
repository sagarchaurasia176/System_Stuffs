"use client"
import React, { useState, useEffect } from 'react';
import { BookOpen,Rocket, ArrowRight, Zap, Users, TrendingUp, Mail, Github, Linkedin, Twitter, Menu, X, ChevronRight } from 'lucide-react';
import { topics } from '../datas/topics';
import { testimonials } from '../datas/testiomonials';
import Image from   'next/image';
import DeopsImage from '../../public/Devops1.jpeg';
import Link from 'next/link';

// Devops blog landing page
export default function DevOpsBlogLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : ''}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
                DS
              </div>
              <span className="text-xl font-bold text-white">DevOps<span className="text-blue-400">By</span>Sagar</span>
            </div>
            
            {/* <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Articles</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Topics</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                Subscribe
              </button>
            </div> */}

            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/10">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Articles</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Topics</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">About</a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 mb-8 hover-scale">
              <Zap className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-gray-300 text-sm font-medium">🚀 New posts every week — practical DevOps tutorials, CI/CD pipelines, and cloud-native tips.</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-white">Master Modern</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent gradient-animate">
                DevOps Engineering
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              From cloud infrastructure to CI/CD pipelines, learn production-ready DevOps practices that scale
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href='/blogs'>
              <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover-scale flex items-center">
                Start Learning
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              </Link>
              <button className="glass-effect text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all hover-scale">
                View Tutorials
              </button>
            </div>

            {/* Stats Bar */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "150+", label: "Tutorials" },
                { value: "75K+", label: "Monthly Readers" },
                { value: "40+", label: "Topics" },
                { value: "4.9★", label: "Rating" }
              ].map((stat, i) => (
                <div key={i} className="glass-effect rounded-xl p-4 hover-scale">
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

      {/* Topics Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              What You'll Master
            </h2>
            <p className="text-xl text-gray-400">
              Cutting-edge technologies and battle-tested practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {topics.map((topic, index) => (
              <div key={index} className="group glass-effect rounded-2xl p-6 hover-scale cursor-pointer">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
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

      {/* Featured Content Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center glass-effect rounded-full px-4 py-2 mb-6">
                  <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-sm">Most Popular</span>
                </div>
                <h2 className="text-4xl font-black text-white mb-6">
                  Real-World Projects You Can Deploy Today
                </h2>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  Learn by building production-grade infrastructure. Every tutorial includes working code, best practices, and deployment guides.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Rocket, title: "Production-Ready Code", desc: "Battle-tested configurations" },
                    { icon: Users, title: "Community Driven", desc: "Join 10K+ active learners" },
                    { icon: BookOpen, title: "Step-by-Step Guides", desc: "Never get stuck again" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-4 glass-effect rounded-xl p-4 hover-scale">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-2 flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-50"></div>
                  <Image
                    src={DeopsImage}
                    alt="DevOps workspace"
                    className="relative rounded-2xl shadow-2xl hover-scale"
                    layout="responsive"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Technologies We Cover
            </h2>
            <p className="text-xl text-gray-400">
              Industry-standard tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {['docker', 'kubernetes', 'jenkins', 'terraform', 'amazonwebservices', 'git'].map((tech) => (
              <div key={tech} className="glass-effect rounded-xl p-6 hover-scale text-center group cursor-pointer">
                <div className="bg-white rounded-lg p-3 mb-3 inline-block group-hover:scale-110 transition-transform">
                  <img 
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech === 'amazonwebservices' ? 'amazonwebservices-original-wordmark' : tech === 'kubernetes' ? 'kubernetes-plain' : tech + '-original'}.svg`} 
                    alt={tech} 
                    className="w-10 h-10 mx-auto" 
                  />
                </div>
                <p className="font-bold text-white text-sm capitalize">
                  {tech === 'amazonwebservices' ? 'AWS' : tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white mb-4">
                Loved by DevOps Engineers
              </h2>
              <p className="text-xl text-gray-400">
                Join thousands who've transformed their careers
              </p>
            </div>
            
            <div className="relative">
              {testimonials.map((testimonial, i) => (
                <div 
                  key={i}
                  className={`glass-effect rounded-2xl p-8 transition-all duration-500 ${
                    i === activeTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
                  }`}
                >
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeTestimonial ? 'bg-blue-500 w-8' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl p-12 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 gradient-animate"></div>
              <div className="relative z-10">
                <Mail className="w-16 h-16 text-white mx-auto mb-6" />
                <h2 className="text-4xl font-black text-white mb-4">
                  Get Weekly DevOps Insights
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  Join 50,000+ engineers getting tutorials, tips, and news delivered to their inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
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

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="glass-effect rounded-3xl p-12">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-6xl font-black text-white shadow-2xl animate-pulse-glow">
                    S
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-black text-white mb-4">
                    Hi, I'm Sagar 👋
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    DevOps Engineer and Cloud Architect passionate about building scalable systems. 
                    I've spent 5+ years in the trenches, working with Fortune 500 companies and startups. 
                    Now I share everything I've learned to help you level up faster.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center glass-effect text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all hover-scale">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </button>
                    <button className="flex items-center glass-effect text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all hover-scale">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </button>
                    <button className="flex items-center glass-effect text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all hover-scale">
                      <Twitter className="w-5 h-5 mr-2" />
                      Twitter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">
                    DS
                  </div>
                  <span className="font-bold text-white">DevOpsBySagar</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Your guide to modern DevOps practices and cloud technologies.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-4">Content</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">All Articles</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-4">Connect</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
              <p>© 2025 DevOpsBySagar. Built with passion for DevOps engineers.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}