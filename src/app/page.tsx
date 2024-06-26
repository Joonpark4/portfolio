import Image from "next/image";
import ProfilePic from "@/../public/img/mypic.png";
import { CoreTechStacks } from "./_assets/coreTechStacks";
import { MyPR } from "./_assets/myPR";
import { History } from "./_assets/history";

export default function Home() {
  return (
    <section className="flex w-full flex-col items-start justify-center gap-4">
      <div className="centered flex-wrap gap-9">
        <div className="centered">
          <Image
            src={ProfilePic}
            alt="My profile picture"
            className="w-64 rounded-full px-4"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-2">
            <h1 className="text-3xl md:text-5xl font-bold">박철준</h1>
            <h2 className="text-xl md:text-3xl font-bold">Cheol Joon Park</h2>
          </div>
          <p className="w-52 bg-foreground pl-4 text-background">
            Front-End Developer
          </p>
        </div>
      </div>

      <div className="mt-6 flex">
        <div className="centered flex-wrap lg:flex-nowrap gap-8">
          <div className="flex flex-col items-start justify-start gap-4 w-full md:flex-row lg:flex-col lg:w-64 lg:shrink-0">
            <div className="w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex h-10 w-full items-center justify-start self-stretch bg-muted-foreground pl-3 font-bold text-muted">
                  PROFILE / CONTACT
                </div>
                <div className="grid w-full grid-cols-3 gap-y-1 px-1 py-2">
                  <div className="col-span-3 w-full text-lg">
                    1992. 12. 14 / Male
                  </div>
                  <div className="w-full">E-mail :</div>
                  <div className="col-span-2 w-full">sargadil@gmail.com</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex h-10 items-center justify-start self-stretch bg-muted-foreground pl-3 font-bold text-muted">
                  LANGUAGES
                </div>
                <div className="grid w-full grid-cols-3 gap-y-1 px-1 py-2">
                  <div className="w-full">Korean :</div>
                  <div className="col-span-2 w-full">Native</div>
                  <div className="w-full">English :</div>
                  <div className="col-span-2 w-full">intermediate</div>
                </div>
              </div>
            </div>
            <CoreTechStacks />
          </div>
          <MyPR />
        </div>
      </div>
      <History />
    </section>
  );
}
