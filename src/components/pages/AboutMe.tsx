import Image from "next/image";
import ProfilePic from "@/../public/img/mypic.png";

export default function AboutMePage() {
  return (
    <section className="w-full min-h-full p-10">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex w-full gap-5 items-center">
          <Image src={ProfilePic} alt="My profile picture" width={110} />
          <div className="flex flex-col gap-2">
            <div className="flex items-end gap-2">
              <h1 className="text-3xl font-bold">박철준</h1>
              <h2 className="text-lg font-bold">Cheol Joon Park</h2>
            </div>
            <p className="px-3 w-52 bg-muted text-muted-foreground">
              Front-End Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
