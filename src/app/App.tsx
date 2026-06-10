import { useState } from 'react';
import { Header } from './components/Header';
import { Carousel3D } from './components/Carousel3D';
import { Sparkle } from './components/Sparkle';
import { LogoBanner } from './components/LogoBanner';
import { StatsSection } from './components/StatsSection';
import { ServicesAccordion } from './components/ServicesAccordion';
import { WhoWeAre } from './components/WhoWeAre';
import { Testimonials } from './components/Testimonials';
import { PortfolioSection } from './components/PortfolioSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { FAQsPage } from './components/FAQsPage';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';

export default function App() {
  const [page, setPage] = useState<'home' | 'faqs' | 'contact' | 'about'>('home');

  function handleNavigate(p: string) {
    if (['faqs', 'home', 'contact', 'about'].includes(p)) {
      setPage(p as 'home' | 'faqs' | 'contact' | 'about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header onNavigate={handleNavigate} />

      {page === 'faqs' ? (
        <FAQsPage onBack={() => handleNavigate('home')} />
      ) : page === 'contact' ? (
        <ContactPage onBack={() => handleNavigate('home')} />
      ) : page === 'about' ? (
        <AboutPage onNavigate={handleNavigate} />
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative pt-32 pb-16 px-6">
            <div className="container mx-auto max-w-6xl">
              {/* Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-2 rounded-full text-xs font-medium tracking-wide">
                  <span>✦</span>
                  GROW YOUR BRANDS USING STRATEGIES BEST KNOWN FOR RESULT
                </div>
              </div>

              {/* Main Headline */}
              <div className="text-center mb-6 relative">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                  Your Videos Slap or They
                  <br />
                  <span className="relative inline-block">
                    <span className="relative z-10">Scroll We</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="20"
                      viewBox="0 0 300 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 12C50 8 100 4 150 8C200 12 250 16 298 12"
                        stroke="#FF6B35"
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </span>{' '}
                  Make Sure They
                  <br />
                  Slap.
                </h1>

                <Sparkle top="10%" left="10%" delay={0} />
                <Sparkle top="20%" right="15%" delay={0.5} />
                <Sparkle bottom="30%" right="8%" delay={1} />
              </div>

              {/* Subheading */}
              <p className="text-center text-muted-foreground max-w-xl mx-auto mb-8">
                Cinematic edits. Scroll-stopping reels. Brand films that hit different.
                We don't just "adjust the saturation" – we make content that slaps you
                across the face and makes you hit that share button.
              </p>

              {/* Arrow and Button */}
              <div className="flex justify-center items-center gap-8 mb-16">
                <svg
                  width="80"
                  height="60"
                  viewBox="0 0 80 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform rotate-12"
                >
                  <path
                    d="M2 28C15 20 30 8 45 12C55 15 62 25 70 32"
                    stroke="#FF6B35"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M70 32L65 38M70 32L76 36"
                    stroke="#FF6B35"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <button className="bg-[#FF6B35] text-white px-8 py-3 rounded-full hover:bg-[#ff5722] transition-colors text-sm font-medium flex items-center gap-2">
                  ABOUT US
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10H16M16 10L11 5M16 10L11 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* 3D Carousel */}
            <div className="relative mb-16">
              <Carousel3D />
            </div>

            {/* Bottom Section */}
            <div className="container mx-auto max-w-4xl px-6 text-center">
              <p className="text-3xl md:text-4xl font-medium leading-relaxed mb-8">
                From viral reels to cinematic brand films – we don't just cut
                clips, we craft experiences{' '}
                <span className="inline-block w-8 h-8 align-middle bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-md">
                  🎬
                </span>{' '}
                that actually make people feel something.
              </p>

              <button className="bg-foreground text-background px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-sm font-medium flex items-center gap-2 mx-auto">
                MORE ABOUT US
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10H16M16 10L11 5M16 10L11 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </section>

          {/* Decorative Sparkles */}
          <Sparkle top="15%" left="5%" delay={0.2} />
          <Sparkle top="50%" right="10%" delay={0.8} />
          <Sparkle bottom="20%" left="12%" delay={1.2} />

          <LogoBanner />
          <StatsSection />
          <ServicesAccordion />
          <WhoWeAre />
          <Testimonials />
          <PortfolioSection />
          <TeamSection />
          <Footer />
        </>
      )}
    </div>
  );
}
