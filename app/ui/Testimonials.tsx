// "use client";
// import React, { useState, useEffect } from "react";
// import { testimonials } from "../datas/testiomonials";

// const TestimonialsSection = () => {
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-black text-white mb-4 slide-up">
//               Loved by DevOps Engineers
//             </h2>
//             <p
//               className="text-xl text-gray-400 slide-up"
//               style={{ animationDelay: "0.2s" }}
//             >
//               Join thousands who've transformed their careers
//             </p>
//           </div>

//           <div className="relative min-h-[200px]">
//             {testimonials.map((testimonial, i) => (
//               <div
//                 key={i}
//                 className={`glass-effect rounded-2xl p-8 transition-all duration-500 ${
//                   i === activeTestimonial
//                     ? "opacity-100 scale-100 relative"
//                     : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
//                 }`}
//               >
//                 <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
//                   "{testimonial.text}"
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4 animate-pulse-glow">
//                     {testimonial.name.charAt(0)}
//                   </div>
//                   <div>
//                     <div className="font-bold text-white">
//                       {testimonial.name}
//                     </div>
//                     <div className="text-gray-400 text-sm">
//                       {testimonial.role}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <div className="flex justify-center mt-6 space-x-2">
//               {testimonials.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setActiveTestimonial(i)}
//                   className={`h-2 rounded-full transition-all hover:scale-125 ${
//                     i === activeTestimonial
//                       ? "bg-blue-500 w-8"
//                       : "bg-gray-600 w-2"
//                   }`}
//                   aria-label={`View testimonial ${i + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
