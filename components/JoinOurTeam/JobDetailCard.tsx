import { DepartmentProp } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BsArrowRight,
  BsArrowRightShort,
  BsArrowUpRight,
} from "react-icons/bs";

type DepartmentProps = {
  departments: DepartmentProp[];
};
const colors = [
  "bg-purple-700",
  "bg-green-900",
  "bg-orange-500",
  "bg-purple-600",
  "bg-emerald-700",
  "bg-pink-600",
];

const JobDetailCard = ({ departments }: DepartmentProps) => {
  return (
    <div className="w-[90%] sm:w-[70%] mx-auto my-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 md:gap-8 py-4">
        {departments.map((dept, i) => {
          if (!dept?.jobs || dept.jobs.length === 0) return null; // skip departments with no jobs

          return (
            <div>
              <div
                className={`relative p-4 h-44 sm:h-52 md:h-60 rounded-2xl text-white flex flex-col justify-between cursor-pointer group overflow-hidden ${
                  colors[i % colors.length]
                }`}
              >
                {/* {dept.image && ( <Image src={dept.image} alt={dept.title} fill className="object-cover opacity-70 group-hover:scale-110 transition-transform duration-300" /> )} */}
                <div className="z-10 absolute bottom-4 group-hover:hidden">
                  <p className="text-xs">
                    {dept.jobs.length} opening positions
                  </p>
                  <h2 className="font-semibold text-lg">{dept.name}</h2>
                </div>
                <BsArrowUpRight className="absolute top-2 right-2 w-5 h-5 z-10" />

                {dept.jobs && (
                  <div className="absolute inset-0 bg-black/40 text-sm p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-14">
                    <p className="mb-4 text-xs">Opening positions</p>
                    <ul className="space-y-1">
                      {dept.jobs.map((job, idx) => (
                        <Link href={`/join_our_team/${job.id}`} key={idx}>
                          <li className="flex justify-between py-2">
                            <span>{job.position}</span>
                            <BsArrowRight className="w-4 h-4" />
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobDetailCard;
