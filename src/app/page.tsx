import Image from "next/image";
import ProfilePic from "@/../public/img/mypic.png";

export default function Home() {

  return (
      <section className="w-full flex flex-col justify-center items-start">
        <div className="flex gap-10 items-center justify-center flex-wrap">
          <div className="flex items-center justify-center">
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
            <p className="w-52 bg-foreground text-background pl-4">
              Front-End Developer
            </p>
          </div>
        </div>

        <div className="flex gap-10 items-center justify-center flex-wrap mt-6 font-bold">
          <div className="flex flex-col items-start justify-start gap-5">
            <div className="flex flex-col items-start justify-start w-72">
              <div className="flex items-center justify-start bg-muted-foreground text-muted pl-3 h-10 self-stretch">
                PROFILE / CONTACT
              </div>
              <div className="w-full grid grid-cols-4 grid-rows-4 gap-y-2 px-1 py-3">
                <div className="w-full col-span-4 text-lg">
                  1992. 12. 14 / Male
                </div>
                
              </div>
            </div>

            <div className="flex flex-col items-start justify-start w-72">
              <div className="flex items-center justify-start bg-muted-foreground text-muted pl-3 h-10 self-stretch">
                LANGUAGES
              </div>
              <div className="w-full grid grid-cols-4 grid-rows-3 gap-y-2 px-1 py-3">
                {/* <div className="w-full">E-mail :</div>
                <div className="w-full col-span-3">{`sargadil@gmail.com`}</div>
                <div className="w-full">Mobile :</div>
                <div className="w-full col-span-3">{`+82) 10-8668-5503`}</div>
                <div className="w-full">GitHub :</div>
                <div className="w-full col-span-3">{`github.com/Joonpark4`}</div> */}
              </div>
            </div>

            <div className="flex flex-col items-start justify-start w-72">
              <div className="flex items-center justify-start bg-muted-foreground text-muted pl-3 h-10 self-stretch">
                CORE TECH STACKS
              </div>
              <div className="w-full grid grid-cols-3 grid-rows-4 gap-y-2 px-1 py-3place-items-center">
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
          <div className="flex items-center justify-center bg-yellow-500 h-20 w-64"></div>
          <div className="flex items-center justify-center bg-green-500 h-20 w-64"></div>
        </div>
      </section>
  );
}
