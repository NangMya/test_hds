
import Heading from "@/components/Heading";
import DepartmentCard from "@/components/JoinOurTeam/DepartmentCard";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import { api } from "@/services/api";
import React from "react";

const page = async () => {
  const [info, departments] = await Promise.all([
    api.getInfo(),
    api.getDepartmentWithJobs(),
  ]);

  return (
    <WebsiteLayout footerData={info}>
      <section className="py-14">
        <Heading firstTitle="Who " secondTitle="We Need" />
        <DepartmentCard departments={departments} />
      </section>
    </WebsiteLayout>
  );
};

export default page;
