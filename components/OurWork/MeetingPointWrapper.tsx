
import MeetingPoint from "./MeetingPoint";
import { api } from "@/services/api";

const MeetingPointWrapper = async() => {
  const works = await api.getOurWorks();

  return (
    <MeetingPoint works={works} />
  );
};

export default MeetingPointWrapper;
