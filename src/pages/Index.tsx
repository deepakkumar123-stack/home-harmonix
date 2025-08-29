import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestListings from "@/components/LatestListings";
import HowToFindHomes from "@/components/HowToFindHomes";
import FeaturedCommunities from "@/components/FeaturedCommunities";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LatestListings />
      <HowToFindHomes />
      <FeaturedCommunities />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
