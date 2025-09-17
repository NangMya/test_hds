
import CaseStudy from "./CaseStudy";
import MeetingPoint from "./MeetingPoint";
import { api } from "@/services/api";

const CaseStudyWrapper = async() => {
  const works = await api.getOurWorks();

  return (
    <CaseStudy works={works} />
  );
};

export default CaseStudyWrapper;
