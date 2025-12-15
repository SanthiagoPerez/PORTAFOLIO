import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <Helmet>
        <title>S_P | Backend Developer</title>
        <meta
          name="description"
          content="Backend Developer specializing in scalable server-side solutions, RESTful APIs, and microservices architecture. View my portfolio and get in touch."
        />
        <meta
          name="keywords"
          content="Backend Developer, Node.js, Python, PostgreSQL, API Development, Microservices"
        />
        <link rel="canonical" href="https://yoursite.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <TechStackSection />
          <PortfolioSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
