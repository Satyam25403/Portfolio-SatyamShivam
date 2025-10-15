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
        <div className="absolute inset-0 -z-10">
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
      <div className="relative z-0 bg-primary">
        {/* Main Content */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        {/* <About />
        <Experience />
        <Tech />
        <Works /> */}
        <div className="relative z-0">
          {/* <Contact /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;