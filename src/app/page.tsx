import Image from "next/image";
import ProfilePic from "@/../public/img/mypic.png";
import ReactPic from "@/../public/img/react.svg";
import NextPic from "@/../public/img/nextdotjs.svg";
import TypescriptPic from "@/../public/img/typescript.svg";
import TailwindPic from "@/../public/img/tailwindcss.svg";
import MongoDbPic from "@/../public/img/mongodb.svg";
import FramerPic from "@/../public/img/framer.svg";

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
            <div className="grid w-full grid-cols-4 gap-y-2 px-1 py-3">
              <div className="col-span-4 w-full text-lg">
                1992. 12. 14 / Male
              </div>
              <div className="w-full">E-mail :</div>
              <div className="col-span-3 w-full">sargadil@gmail.com</div>
            </div>
          </div>

          <div className="flex w-72 flex-col items-start justify-start">
            <div className="flex h-10 items-center justify-start self-stretch bg-muted-foreground pl-3 text-muted">
              LANGUAGES
            </div>
            <div className="grid w-full grid-cols-3 gap-y-2 px-1 py-3">
              <div className="w-full">Korean :</div>
              <div className="col-span-2 w-full">Native</div>
              <div className="w-full">English :</div>
              <div className="col-span-2 w-full">intermediate</div>
            </div>
          </div>

          <div className="flex w-72 flex-col items-start justify-start">
            <div className="flex h-10 items-center justify-start self-stretch bg-muted-foreground pl-3 text-muted">
              CORE TECH STACKS
            </div>
            <div className="grid w-full grid-cols-3 gap-x-9 gap-y-2 px-3 py-6 *:w-full">
              <Image src={ReactPic} alt="React" />
              <Image src={NextPic} alt="Next.js" />
              <Image src={TypescriptPic} alt="Typescript" />
              <div className="flex justify-center text-center">React</div>
              <div className="flex justify-center text-center">Next.js</div>
              <div className="flex justify-center text-center">Typescript</div>
              <Image src={TailwindPic} alt="Tailwind CSS" className="mt-4" />
              <Image src={MongoDbPic} alt="MongoDB" className="mt-4" />
              <Image src={FramerPic} alt="Framer Motion" className="mt-4" />
              <div className="flex justify-center text-center">
                Tailwind CSS
              </div>
              <div className="flex justify-center text-center">MongoDB</div>
              <div className="flex justify-center text-center">
                Framer Motion
              </div>
            </div>
          </div>
        </div>
        <div className="centered h-20 w-64 bg-yellow-500"></div>
        <div className="centered h-20 w-64 bg-green-500"></div>
      </div>
    </section>
  );
}
