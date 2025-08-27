"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CTA from "../CTA";
import WavyCard1 from "../WavyCard1";
import allTeamMembers, { TeamMember } from "../../data/teamMembers";

const getRandomMembers = (
  members: TeamMember[],
  count: number
): TeamMember[] => {
  if (members.length <= count) {
    return members;
  }
  const shuffled = [...members].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const MeetTheTeam = () => {
  const [displayedMembers, setDisplayedMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    // 1. initial selection
    const initialMembers = getRandomMembers(allTeamMembers, 4);
    setDisplayedMembers(initialMembers);

    // 2. setup the timer to update the members every 1 second (6,000 millisecond)
    const interval = setInterval(() => {
      const newMembers = getRandomMembers(allTeamMembers, 4);
      setDisplayedMembers(newMembers);
    }, 60 * 100); // 6 * 100 ms = 1 second

    //3. clear interval
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" overflow-hidden py-12 sm:py-16 md:py-1  z-0 mt-2 ">
      <WavyCard1>
        <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16 h-full text-center pt-0 sm:pt-10">
          <h2 className="font-lora text-primaryTextColor text-3xl sm:text-5xl  font-normal sm:pt-0 text-left">
            Meet The <span className="text-primary">Team</span>
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-2 gap-4">
            <div className="flex flex-col relative">
              <div className="mt-8 lg:mt-16">
                <Image
                  src="/images/our_people/meet_the_team.png"
                  alt="3D running character"
                  width={300}
                  height={300}
                  className="h-auto w-full max-w-md lg:max-w-md absolute bottom-10 sm:-bottom-4 -left-20 scale-[200%] sm:scale-100"
                />
                <Image
                  src="/images/home/team/heart.webp"
                  alt="3D running character"
                  width={10}
                  height={10}
                  className="w-8 max-w-md lg:max-w-md absolute top-32 left-20 scale-[200%] block sm:hidden"
                />
              </div>
            </div>


            <div className="grid grid-cols-2 gap-2 md:gap-2 max-w-md sm:max-w-sm mx-auto   mt-0 col-span-2 sm:col-span-1">
              {displayedMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col  text-left odd:mt-8 sm:odd:mt-12 w-40 h-auto"
                >
                  <div className="relative h-32 w-32 overflow-hidden rounded-lg bg-gray-100 md:h-36 md:w-36">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="grayscale"
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-gray-800 text-left">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-600 text-left">
                    {member.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="mt-6">
            <CTA url="#" label="More About Us" />
          </div> */}
        </div>
      </WavyCard1>
    </section>
  );
};

export default MeetTheTeam;
