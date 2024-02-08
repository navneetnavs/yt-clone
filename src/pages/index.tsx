import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      hi there
      <VideoCard
        title={"Learn with me"}
        image={'photo.jpg'}
        thumbimage = {"photo.jpg"}
        author = {"Navneet Singh"}
        views = {"122k"}
        tmestamp = {"2 days ago"}
        ></VideoCard>
    </div>
  );
}
