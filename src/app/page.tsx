
import FeaturedCourses from "@/components/featuredCourses";
import HeroSection from "@/components/HeroSection";
import ChooseUs from "@/components/ChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/instructors";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
     
      <HeroSection />
      <FeaturedCourses/>
      <ChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Instructors />
      <Footer/>
     
    </main>
  );
}
