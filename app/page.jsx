'use client';

import LoadingScreen from '@/components/LoadingScreen';
import Contact from '@/components/sections/Contact';
import Home from '@/components/sections/Home';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className={`relative w-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <main className="w-full">
          <Container>
            <Home />
            <hr className="border-border" />
            <Projects />
            <hr className="border-border" />
            <Testimonials />
            <hr className="border-border" />
            <Contact />
          </Container>
        </main>
      </div>
    </>
  );
}

export default App;