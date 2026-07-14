'use client';

import React from 'react';
import Experience from '@/components/sections/Experience';
import Container from '@/components/ui/Container';

export default function ExperiencePage() {
  return (
    <div className="w-full">
      <main className="relative z-10 w-full">
        <Container>
          <Experience />
        </Container>
      </main>
    </div>
  );
}
