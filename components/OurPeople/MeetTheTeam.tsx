"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import WavyCard1 from "../WavyCard1";
import { MemberProp } from "@/services/api";

const getRandomMembers = (
  members: MemberProp[],
  count: number
): MemberProp[] => {
  if (members.length <= count) {
    return members;
  }
  const shuffled = [...members].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
interface MeetTheTeamProps {
  members: MemberProp[];
}
const MeetTheTeam: React.FC<MeetTheTeamProps> = ({ members }) => {
  const [displayedMembers, setDisplayedMembers] = useState<MemberProp[]>([]);
  useEffect(() => {
    const initialMembers = getRandomMembers(members, 4);
    setDisplayedMembers(initialMembers);

    const interval = setInterval(() => {
      const newMembers = getRandomMembers(members, 4);
      setDisplayedMembers(newMembers);
    }, 60 * 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" overflow-hidden py-12 sm:py-16 md:py-1  z-0 mt-2 ">
      <WavyCard1>
        <div className="container relative z-10 mx-auto px-0 sm:px-4 md:px-8 lg:px-16 h-full text-center pt-0 sm:pt-10">
          <h2 className="font-lora text-primaryTextColor text-3xl sm:text-5xl  font-normal sm:pt-0 text-left px-4">
            Meet The <span className="text-primary">Team</span>
          </h2>
          <div className="grid grid-cols-5 sm:grid-cols-2 gap-0 sm:gap-4">
            <div className="flex flex-col relative">
              <Image
                src="/images/our_people/meet_the_team.png"
                alt="3D running character"
                fill
                className="h-auto min-w-xs sm:min-w-xs max-w-md sm:max-w-lg absolute -bottom-10 sm:-bottom-4 -left-20 sm:-left-20 object-cover scale-75 sm:scale-100"
              />
              <div className="mt-8 lg:mt-16 xs:block">
                <Image
                  src="/images/home/team/heart.webp"
                  alt="Heart"
                  width={10}
                  height={10}
                  className="w-8 max-w-md lg:max-w-md absolute top-5 left-4 sm:left-20 scale-[200%] block sm:hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 md:gap-2 max-w-md sm:max-w-sm mx-auto   mt-0 col-span-4 sm:col-span-1">
              {displayedMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col  text-left odd:mt-8 sm:odd:mt-12 h-auto"
                >
                  <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-lg bg-gray-100 border md:h-36 md:w-36">
                    <Image
                      src={member.profile as string}
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
                    {member.position}
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
