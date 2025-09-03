// components/LoadingBar.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LoadingBar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);
    const handleError = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
    };
  }, [router]);

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 z-[9999]">
          <div className="h-full w-1/2 animate-pulse bg-blue-400"></div>
        </div>
      )}
    </>
  );
};

export default LoadingBar;