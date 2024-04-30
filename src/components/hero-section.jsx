import Image from "next/image";
import { Navbar } from "./navbar";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section
      className="text-white h-screen w-full bg-black/60 relative"
      id="home"
    >
      <div className=" absolute inset-0 -z-50 ">
        <Image src="/images/hero.jpg" fill alt="" />
      </div>
      <Navbar className={"z-10"} />
      <div className="flex flex-col items-center p-5">
        <h1 className="text-custom-secondary uppercase font-bold tracking-[0.1rem] mb-3">
          Welcome to Glint
        </h1>
        <p className="text-4xl text-center font-semibold mb-10">
          I am a web developer with a passion for creating beautiful and
          user-friendly websites.
        </p>
        <div className="flex flex-col text-xs w-full gap-3">
          <Link
            className="border-2 p-4 uppercase font-semibold tracking-[0.1rem] hover:bg-white hover:text-custom-dark duration-700"
            href={"#contact"}
          >
            Start a project
          </Link>
          <Link
            className="border-2 p-4 uppercase font-semibold tracking-[0.1rem] hover:bg-white hover:text-custom-dark duration-700"
            href={"#about"}
          >
            More about me
          </Link>
        </div>
        <div className="flex justify-end items-start gap-4 absolute bottom-0 right-10">
          <Link
            className="uppercase font-bold text-xs  tracking-[0.1rem] flex items-center"
            href={"#about"}
          >
            <ChevronDownIcon
              className="text-custom-primary"
              width={20}
              height={20}
            />
            Scroll down
          </Link>
          <div className="h-16 w-[2px] bg-custom-primary mt-2" />
        </div>
      </div>
    </section>
  );
};
