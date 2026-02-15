import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { Forte } from '@/sections/Forte';
import { Publications } from '@/sections/Publications';
import { Skills } from '@/sections/Skills';
import { Footer } from '@/sections/Footer';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Forte />
        <Publications />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}

export default App;
