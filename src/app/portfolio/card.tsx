import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  DoorOpenIcon,
  ArrowBigLeftDashIcon,
  GithubIcon,
  EyeOffIcon,
} from "lucide-react";
import { StaticImageData } from "next/image";
import Link from "next/link";

export const PortfolioCard = ({
  image,
  title,
  descriptions,
  pageUrl,
  githubUrl,
  repo,
}: {
  image: StaticImageData;
  title: string;
  descriptions: string[];
  pageUrl: string;
  githubUrl: string;
  repo?: boolean;
}) => {
  return (
    <Card className="flex w-[265px] flex-col justify-between bg-muted">
      <div>
        <CardHeader>
          <div className=" h-[200px] w-[200px] overflow-hidden rounded-lg">
            <Image src={image} alt={title} className=" object-bottom" />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className=" text-xl">{title}</CardTitle>
          <div className="grid w-full grid-cols-2 gap-y-1 px-1 py-2">
            {descriptions.map((description, i) => (
              <CardDescription key={i}>{description}</CardDescription>
            ))}
          </div>
        </CardContent>
      </div>
      <div>
        <CardFooter className="flex justify-around">
          <Link
            href={pageUrl}
            className="flex"
            title={`Visit the ${title} Webpage`}
            target="_blank"
          >
            <DoorOpenIcon />
            <ArrowBigLeftDashIcon />
          </Link>
          {repo !== false ? (
            <Link
              href={githubUrl}
              className="flex"
              title={`Check the ${title} github out`}
              target="_blank"
            >
              <GithubIcon />
              <ArrowBigLeftDashIcon />
            </Link>
          ) : (
            <div
              className="flex cursor-not-allowed"
              title="Private or No Repository"
            >
              <GithubIcon />
              <EyeOffIcon />
            </div>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};
