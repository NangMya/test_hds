import { Client } from "@/services/api";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

interface OurClientProps {
  clients: Client[];
}

const OurClient = ({ clients }: OurClientProps) => {
  const third = Math.floor(clients.length / 3);
  const row1Logos = clients.slice(0, third);
  const row2Logos = clients.slice(third, third * 2);
  const row3Logos = clients.slice(third * 2);

  const marqueeSpeed = 40;
  return (
    <section className="  overflow-x-hidden px-4 max-w-6xl mx-auto">
      <div className="relative pt-4 sm:pt-10 flex flex-col justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-normal leading-snug font-lora">
          Partners Who <span className="text-primary">Trust Us</span>
        </h1>
        <div className=" py-4 sm:py-7 px-2 sm:px-8 mt-2 sm:mt-10">
          <div className="py-8 dark:bg-gray-800">
            <Marquee
              pauseOnHover={true}
              speed={marqueeSpeed}
              direction="right"
              gradient={true}
              gradientWidth={100}
            >
              {row1Logos.map((logo) => (
                <div
                  key={logo.id}
                  className="mx-1 sm:mx-1 mb-4 flex items-center justify-center"
                >
                  <Image
                    src={logo.logo}
                    alt={`client_${logo.id}`}
                    width={100}
                    height={50}
                    className="object-contain h-8 sm:h-12 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </Marquee>

            <Marquee
              pauseOnHover={true}
              speed={marqueeSpeed * 1.2}
              direction="left"
              gradient={true}
              gradientWidth={100}
            >
              {row2Logos.map((logo) => (
                <div
                  key={logo.id}
                  className="mx-1 sm:mx-1 mb-4 flex items-center justify-center"
                >
                  <Image
                    src={logo.logo}
                    alt={`client_${logo.id}`}
                    width={100}
                    height={50}
                    className="object-contain h-8 sm:h-12 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </Marquee>

            <Marquee
              pauseOnHover={true}
              speed={marqueeSpeed * 0.9}
              direction="right"
              gradient={true}
              gradientWidth={100}
            >
              {row3Logos.map((logo) => (
                <div
                  key={logo.id}
                  className="mx-1 sm:mx-1 mb-4 flex items-center justify-center"
                >
                  <Image
                    src={logo.logo}
                    alt={`client_${logo.id}`}
                    width={100}
                    height={50}
                    className="object-contain h-8 sm:h-12 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClient;
