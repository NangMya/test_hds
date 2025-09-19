
import JobTitle from "@/components/JobTitle";
import JobForm from "@/components/JoinOurTeam/JobForm";
import RelatedJobs from "@/components/JoinOurTeam/RelatedJobs";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import { api, JobProp } from "@/services/api";
import Image from "next/image";
import React from "react";

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
const page = async ({params}: JobDetailProps) => {
  const [info, job,jobs] = await Promise.all([
      api.getInfo(),
      api.getJobById(params.id),
      api.getJobs()
    ]);
 
  return (
    <WebsiteLayout footerData={info}>
      <section className="pt-12 w-full sm:w-[90%] mx-auto font-lora px-10 sm:px-6 relative">
        <JobTitle title={job?.position} description={job?.description}/>
        <div className="pt-6 pb-48 sm:pt-6 sm:pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
           <JobForm/>
           <RelatedJobs jobs={jobs}/>
          </div>
        </div>

        <Image
          src="/images/join_our_team/job_form_img.webp"
          alt="image"
          width={400}
          height={400}
          className="absolute -bottom-32 -right-0 sm:-bottom-52 sm:-right-28 -z-20 w-60 sm:w-96 "
        />
      </section>
    </WebsiteLayout>
  );
};

export default page;
