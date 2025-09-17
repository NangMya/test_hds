import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import Department from "@/components/OurPeople/Department";
import FounderSection from "@/components/OurPeople/FounderSection";
import MeetTheTeam from "@/components/OurPeople/MeetTheTeam";
import TeamActivity from "@/components/OurPeople/TeamActivity";
import TeamReward from "@/components/OurPeople/TeamReward";
export const metadata = {
  title: "Our People | HDS",
  description: "Learn about our mission and team.",
};
const page = () => {
  return (
    <WebsiteLayout>
      <section className="pt-14 pb-2">
        <FounderSection />
        <MeetTheTeam />
        <Department />
        <TeamReward />
        <TeamActivity />
      </section>
    </WebsiteLayout>
  );
};

export default page;
