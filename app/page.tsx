import HomePage from "./home/page";
export const metadata = {
  title: "HDS",
  description: "Default description for my website.",
  icons: {
    icon: "/hds.png",
  },
};


export default function Home() {
  return (
    <div>
      <HomePage/>
    </div>
  );
}
