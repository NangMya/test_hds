"use client";

import AOS from 'aos';
import { useEffect } from 'react';

interface AOSProviderProps {
  children: React.ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    AOS.init({
      offset: 100, 
      delay: 0,
      duration: 2000,
      easing: 'ease-in-out', 
      once: false, 
    });
    AOS.refresh(); 
  }, []);

  return <>{children}</>;
}