import TopicSection from "./TopicsSection";
import NavigationPage from "./NavigationPage";
import Featured from "./Featured";
import TechnologiesSection from "./Technology";
// import TestimonialsSection from "./Testimonials";
import Newsletter from "./NewsLetter";
import Footer from "./FooterPage";
import HeroSections from "./HearoSection";
import Aboutpage from "./AboutSection";

export default function DevOpsBlogLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <HeroSections />
      {/* Topics Section */}
      <TopicSection />
      {/* Featured Content Section */}
      <Featured />
      {/* Technologies Section */}
      <TechnologiesSection />
      {/* Testimonials Section */}
      {/* <TestimonialsSection /> */}
      {/* Newsletter CTA */}
      <Newsletter />
      {/* About Section */}
      <Aboutpage />
      {/* Footer */}
      <Footer />
    </div>
  );
}
