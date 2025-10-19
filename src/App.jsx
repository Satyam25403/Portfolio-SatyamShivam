import { BrowserRouter } from 'react-router-dom';
import Particles from './components/canvas/Particles.jsx';

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from './components';

function App() {

  return (
    <BrowserRouter>
        {/* Particle Background */}
        <div className="fixed top-0 left-0 w-full h-screen -z-50 pointer-events-none bg-black">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      <div className="relative z-10 bg-transparent overflow-hidden">
        {/* Main Content */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative ">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;