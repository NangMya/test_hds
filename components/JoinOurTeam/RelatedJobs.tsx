import { JobProp } from "@/services/api";
import React from "react";

type JobProps = {
  jobs: JobProp[];
};

const RelatedJobs = ({ jobs }: JobProps) => {
  console.log("jon from releted job", jobs);
  return (
    <div className="">
      <h1 className="text-3xl mb-6 sm:mb-4">Other Jobs</h1>
      {jobs.length > 0 &&
        jobs.map((job, idx) => {
          return (
            <div key={idx}>
              <div className="flex justify-between">
                <div>
                  <h1 className="font-medium">{job.position}</h1>
                  <p className="text-xs opacity-50 lowercase">
                    {job.department?.name}
                  </p>
                </div>
                {job?.applicant && (
                  <p className="text-xs opacity-80">
                    ( {job.applicant.length} applicants)
                  </p>
                )}
              </div>
              <hr className="my-3" />
            </div>
          );
        })}
    </div>
  );
};

export default RelatedJobs;
