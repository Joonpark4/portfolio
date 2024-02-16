import Image from "next/image";
import ProfilePic from "@/../public/img/mypic.png";

export default function Home() {
  return (
    <section className="flex w-full flex-col items-start justify-center">
      <div className="centered flex-wrap gap-10">
        <div className="centered">
          <Image
            src={ProfilePic}
            alt="My profile picture"
            className="w-64 rounded-full px-4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-end gap-2">
            <h1 className="text-5xl font-bold">박철준</h1>
            <h2 className="text-3xl font-bold">Cheol Joon Park</h2>
          </div>
          <p className="w-52 bg-foreground pl-4 text-background">
            Front-End Developer
          </p>
        </div>
      </div>

      <div className="centered mt-6 flex flex-wrap gap-10 font-bold">
        <div className="flex flex-col items-start justify-start gap-5">
          <div className="flex w-72 flex-col items-start justify-start">
            <div className="flex h-10 items-center justify-start self-stretch bg-muted-foreground pl-3 text-muted">
              PROFILE / CONTACT
            </div>
            <div className="grid w-full grid-cols-4 grid-rows-4 gap-y-2 px-1 py-3">
              <div className="col-span-4 w-full text-lg">
                1992. 12. 14 / Male
              </div>
            </div>
          </div>

          <div className="flex w-72 flex-col items-start justify-start">
            <div className="flex h-10 items-center justify-start self-stretch bg-muted-foreground pl-3 text-muted">
              LANGUAGES
            </div>
            <div className="grid w-full grid-cols-4 grid-rows-3 gap-y-2 px-1 py-3"></div>
          </div>

          <div className="flex w-72 flex-col items-start justify-start">
            <div className="flex h-10 items-center justify-start self-stretch bg-muted-foreground pl-3 text-muted">
              CORE TECH STACKS
            </div>
            <div className="py-3place-items-center grid w-full grid-cols-3 grid-rows-4 gap-y-2 px-1">
              <div className="w-full">E-mail :</div>
              <div className="w-full">E-mail :</div>
              <div className="w-full">E-mail :</div>
              <div className="w-full">E-mail :</div>
              <div className="w-full">E-mail :</div>
              <div className="w-full">E-mail :</div>
              <div className="w-full">E-mail :</div>
              <div className="w-full">E-mail :</div>
              <div className="w-full">E-mail :</div>
              <div className="w-full">E-mail :</div>
              <div className="w-full">E-mail :</div>
              <div className="w-full">E-mail :</div>
            </div>
          </div>
        </div>
        <div className="centered h-20 w-64 bg-yellow-500"></div>
        <div className="centered h-20 w-64 bg-green-500"></div>
      </div>
    </section>
  );
}
