// app/page.tsx
import Navbar from '@/component/Navbar'; 
import LandingPage from '@/component/landingpage';
import React from 'react';

export default function Home() {
  return (
    <>
      <Navbar /> 
      <LandingPage />
    </>
  );
}
