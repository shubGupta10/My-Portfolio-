'use client';

import React from 'react';
import About from '@/components/sections/About';

import Container from '@/components/ui/Container';

export default function AboutPage() {
  return (
    <div className="w-full">
      
      <main className="relative z-10 w-full">
        <About />
      </main>
    </div>
  );
}
