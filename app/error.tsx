"use client"
import React from "react";
import Link from "next/link";

const XOctagonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-x-octagon"
  >
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200 p-8">
      <div className="text-center bg-gray-800 p-12 rounded-3xl shadow-2xl max-w-lg w-full transform transition-transform hover:scale-105 duration-300">
        <div className="text-yellow-500 mb-6">
          <XOctagonIcon />
        </div>
        <h1 className="text-7xl font-extrabold text-yellow-500 mb-4">Error</h1>
        <h2 className="text-3xl font-bold text-gray-100 mb-2">
          Something Went Wrong
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          We're sorry, but an unexpected error has occurred. Please try again
          later.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
