"use client";

import { cn } from "@/lib/utils";
import { LinkIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PROJECTS = [
  {
    title: "Project 1",
    category: "Web Development",
    image: "/images/project-1.jpg",
    link: "#",
  },
  {
    title: "Project 2",
    category: "Web Development",
    image: "/images/project-1.jpg",
    link: "#",
  },
  {
    title: "Project 3",
    category: "Web Development",
    image: "/images/project-1.jpg",
    link: "#",
  },
  {
    title: "Project 4",
    category: "Web Development",
    image: "/images/project-1.jpg",
    link: "#",
  },
  {
    title: "Project 5",
    category: "Web Development",
    image: "/images/project-1.jpg",
    link: "#",
  },
  {
    title: "Project 6",
    category: "Web Development",
    image: "/images/project-1.jpg",
    link: "#",
  },
];

export const WorksSection = () => {
  return (
    <section id="works" className="w-full text-white pt-28 pb-32 relative px-5">
      <div className="bg-custom-dark absolute top-0 left-0 right-0 h-[33rem] -z-10" />
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <h2 className="uppercase text-custom-primary font-semibold text-sm xs:text-[1rem] xs:mb-1 md:mb-3">
            Recent works
          </h2>
          <p className="text-[1.8rem] font-semibold mb-5 text-white text-center xs:text-4xl max-w-[700px] sm:text-[2.5rem] sm:leading-[1.25] md:text-[2.5rem] lg:text-5xl">
            I love what I do, check out some of my latest works
          </p>
          <div className="bg-custom-secondary/25 w-[70%] h-[1px]" />
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 max-w-[70rem] mx-auto auto-rows-fr">
          {PROJECTS.map((project, index) => (
            <WorkCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkCard = ({ title, category, image, link, index }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(link)}
      className={cn(
        "aspect-square w-full relative group cursor-pointer overflow-hidden row-span-4",
        (index === 1 || index === PROJECTS.length - 2) &&
          "row-span-5 aspect-auto"
      )}
    >
      <Image
        src={image}
        alt=""
        height={500}
        width={1000}
        className="object-cover h-full w-full"
      />
      <div className="absolute inset-0 group-hover:bg-black/80 duration-500 flex flex-col">
        <div className="flex-1 p-7 -translate-y-20 group-hover:translate-y-0 duration-500">
          <Link href={link}>
            <LinkIcon
              className="ring-1 ring-white rounded-full p-[10px] hover:bg-white hover:text-custom-dark duration-500"
              width={38}
              height={38}
            />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <PlusIcon className="opacity-0 group-hover:opacity-100 duration-700" />
        </div>
        <div className="flex-1 px-7 py-10 translate-y-20 group-hover:translate-y-0 duration-500 flex flex-col justify-end gap-2">
          <h3 className="font-semibold uppercase  tracking-[0.2rem]">
            {title}
          </h3>
          <p className="text-xs text-white/60">{category}</p>
        </div>
      </div>
    </div>
  );
};
