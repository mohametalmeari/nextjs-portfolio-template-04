"use client";

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
    title: "Project 1",
    category: "Web Development",
    image: "/images/project-1.jpg",
    link: "#",
  },
  {
    title: "Project 1",
    category: "Web Development",
    image: "/images/project-1.jpg",
    link: "#",
  },
  {
    title: "Project 1",
    category: "Web Development",
    image: "/images/project-1.jpg",
    link: "#",
  },
];

export const WorksSection = () => {
  return (
    <section className="w-full text-white pt-28 pb-32 relative px-5">
      <div className="bg-custom-dark absolute top-0 left-0 right-0 h-[33rem] -z-10" />
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <h2 className="uppercase text-custom-primary font-semibold text-sm">
            Recent works
          </h2>
          <p className="text-[1.8rem] font-semibold mb-5 text-white text-center">
            I love what I do, check out some of my latest works
          </p>
        </div>
        <div>
          {PROJECTS.map((project, index) => (
            <WorkCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkCard = ({ title, category, image, link }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(link)}
      className="h-[33rem] w-full relative group cursor-pointer overflow-hidden"
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
