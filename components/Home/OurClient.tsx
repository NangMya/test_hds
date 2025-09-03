import { Client } from "@/services/api";
import Image from "next/image";
import React from "react";


interface OurClientProps {
  clients: Client[];
}

const OurClient = ({clients}: OurClientProps) => {
  const rows = [1, 2, 3, 4];

  return (
    <section className=" min-h-[300px] sm:min-h-[660px] overflow-x-hidden px-4">
      
      <div className="relative pt-4 sm:pt-10 flex flex-col justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-normal leading-snug font-lora">
          Partners Who <span className="text-primary">Trust Us</span>
        </h1>
       

         <div className="grid grid-cols-12 gap-2 py-4 sm:py-7 px-2 sm:px-8 mt-2 sm:mt-10">
          <div className="col-start-3"></div>
          {clients && clients.map((client:any) => {
            return (
              <div key={client.id} className="">
                <Image
                  priority={true}
                  src={client.logo}
                  alt={`client_${client.id}`}
                  width={70}
                  height={70}
                  className="object-contain h-8 sm:h-12 grayscale hover:grayscale-0 shadow-lg cursor-pointer hover:scale-125 transition-all duration-500"
                />
              </div>
            );
          })}
        </div> 
      </div>
    </section>
  );
};

export default OurClient;
