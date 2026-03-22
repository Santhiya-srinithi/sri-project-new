import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Training from "@/components/Training";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <Training />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}