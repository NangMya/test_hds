"use client";

import Image from "next/image";
import React from "react";
import { PiShoppingBagFill } from "react-icons/pi";

const HDSAction = () => {
  return (
    <section className="font-lora relative overflow-hidden py-6 md:py-10 min-h-[700px] md:min-h-[650px] bg-[url('/images/our_service/action_bg.webp')]  bg-no-repeat bg-center bg-cover -mt-[20%]">
      <div className="bg-white w-24 h-24 rounded-full p-1 mx-auto mb-4 mt-8">
        <Image
          src="/images/our_service/hds_action.webp"
          width={100}
          height={100}
          alt="HDS Media"
          className="object-contain rounded-full"
        />
      </div>
      <p className="text-white py-4 text-md max-w-lg mx-auto text-center">
        Below The Line Events, Concert, Live boxing, activation, trade shows,
        international artists scouting. We have proven our success through
        international concerts we accomplished for SMART Axiata, Vattanac
        Brewery, Ganzberg Group among others.
      </p>
      <div className="grid grid-cols-3 gap-8 mt-14 w-[90%] mx-auto">
        <div className="px-8">
          <div className="flex flex-row gap-2 justify-start items-center mb-4">
            <span className="w-6 h-6 bg-white rounded-full text-fifth flex justify-center items-center">
              <PiShoppingBagFill />
            </span>
            <p className="text-white text-sm">Concepts</p>
          </div>
          <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
            We happily cater special request of our clients and coordinate all
            the matters related to budgeting and organizing event in the most
            efficient way.
          </p>
        </div>
        <div className="px-8">
          <div className="flex flex-row gap-2 justify-start items-center mb-4">
            <span className="w-6 h-6 bg-white rounded-full text-fifth flex justify-center items-center">
              <PiShoppingBagFill />
            </span>
            <p className="text-white text-sm">Activations</p>
          </div>
          <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
            With vast experience of our passionate team, we can help you create
            bespoke activation ideas catered to the specific need of the brands
            and its target customers.
          </p>
        </div>
        <div className="px-8">
          <div className="flex flex-row gap-2 justify-start items-center mb-4">
            <span className="w-6 h-6 bg-white rounded-full text-fifth flex justify-center items-center">
              <PiShoppingBagFill />
            </span>
            <p className="text-white text-sm">Events</p>
          </div>
          <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
            We bring in fresh and unique approach to your events. <br />
            Our team understands that a well-planned and well-executed event in
            itself is a great accomplishment to our partnership with clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HDSAction;
