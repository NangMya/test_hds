import JobTitle from "@/components/JobTitle";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import { splitToArray } from "@/lib/helps";
import { api, JobProp } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

interface JobDetailProps {
  params: {
    id: string;
  };
}
export async function generateStaticParams() {
  const jobs: JobProp[] = await api.getJobs();
  return jobs.map((job) => ({
    id: job.id?.toString(),
  }));
}
const page = async ({ params }: JobDetailProps) => {
  const [info, job] = await Promise.all([
    api.getInfo(),
    api.getJobById(params.id),
  ]);
  const duties = job?.duties ? splitToArray(job?.duties) : [];
  const requirements = job?.requirements ? splitToArray(job?.requirements) : [];
  return (
    <WebsiteLayout footerData={info}>
      <section className="pt-12 w-full sm:w-[90%] mx-auto font-lora px-10 sm:px-6 relative">
        <JobTitle title={job?.position} description={job?.description} />
        <div className=" flex flex-col sm:flex-row justify-between w-full py-6 items-start sm:items-center ">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            <div className=" font-lora">
              <h1 className="text-sm font-medium">Experience</h1>
              <p className=" opacity-50 text-xs py-2 lowercase">
                {job?.experiences}
              </p>
            </div>
            <div className=" font-lora">
              <h1 className="text-sm font-medium">Seniority Level</h1>
              <p className=" opacity-50 text-xs py-2 lowercase">
                {job?.level} level
              </p>
            </div>
            <div className=" font-lora">
              <h1 className="text-sm font-medium">Employment Type</h1>
              <p className=" opacity-50 text-xs py-2 lowercase">
                {job?.job_type}
              </p>
            </div>
            <div className=" font-lora">
              <h1 className="text-sm font-medium">Salary</h1>
              <p className=" opacity-50 text-xs py-2 lowercase">
                {job?.salary}
              </p>
            </div>
          </div>
          <div className="mt-6 sm:mt-0">
            <Link
              href={`/join_our_team/${params.id}/apply`}
              className="bg-primary py-2 px-8 sm:px-4 text-sm text-white rounded"
            >
              Apply Job
            </Link>
          </div>
        </div>
        <div className="py-6">
          <h1 className="text-3xl">
            Role Overview{" "}
            <span>
              <Image
                src="/images/join_our_team/icon.webp"
                alt="icon"
                width={65}
                height={65}
                className="inline"
              />
            </span>
          </h1>
          <p className="text-xs sm:text-sm opacity-80 leading-relaxed py-2 text-justify">
            {job?.overview}
          </p>
        </div>
        <div className="py-6">
          <h1 className="text-3xl mb-3">
            Duties & Responsibilities
            <span>
              <Image
                src="/images/join_our_team/tick.webp"
                alt="icon"
                width={65}
                height={65}
                className="inline"
              />
            </span>
          </h1>
          <ul>
            {duties.length > 0 &&
              duties.map((duty, idx) => {
                return (
                  <li className="pb-4" key={idx}>
                    <div className="flex flex-row gap-2">
                      <HiOutlineShoppingBag
                        size={20}
                        className="text-primary inline"
                      />
                      <p className="leading-normal opacity-80 text-xs sm:text-sm">
                        {duty}
                      </p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="pt-6 pb-24 sm:pt-6 sm:pb-6">
          <h1 className="text-3xl mb-6">Requirements</h1>
          <ul>
            {requirements.length > 0 &&
              requirements.map((req, idx) => {
                return (
                  <li className="pb-4" key={idx}>
                    <div className="flex flex-row gap-2">
                      <BsArrowUpRight
                        size={20}
                        className="text-primary inline"
                      />
                      <p className="leading-normal opacity-80 text-xs sm:text-sm">
                        {req}
                      </p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>

        <Image
          priority={true}
          src="/images/join_our_team/job_img.webp"
          alt="image"
          width={400}
          height={400}
          className="absolute -bottom-20 right-0 w-40 sm:-bottom-40 sm:-right-28 -z-20 sm:w-96 h-auto contain"
        />
      </section>
    </WebsiteLayout>
  );
};

export default page;
