'use client'

import Link from 'next/link'

const SearchXIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-x">
    <path d="m13.5 8.5-5 5" />
    <path d="m8.5 8.5 5 5" />
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200 p-8">
    <div className="text-center bg-gray-800 p-12 rounded-3xl shadow-2xl max-w-lg w-full transform transition-transform hover:scale-105 duration-300">
      <div className="text-primary mb-6">
        <SearchXIcon />
      </div>
      <h1 className="text-7xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-100 mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-400 mb-8">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
     
      <Link
        href="/"
        className="px-6 py-3 bg-primary hover:bg-red-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Go Back Home
        </Link>
    </div>
  </div>
  )
}
