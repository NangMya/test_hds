import Nav from "./Nav";
import { api } from "@/services/api";

export default async function NavbarWrapper() {
  try {
    const info = await api.getInfo();    
    return <Nav info={info} />;
  } catch (err) {
    console.error("Failed to fetch navigation data:", err);
    return <Nav  />;
  }
}