"use client";

import Image from "next/image";
import { IconLink, Navbar } from "./navbar";
import {
  ChevronDownIcon,
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useScroll, useTransform, motion } from "framer-motion";

export const HeroSection = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 500 * 2]);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={container}
      className="text-white min-h-screen w-full bg-black/60 relative overflow-hidden"
      id="home"
    >
      <motion.div className="absolute inset-0 -top-[600px] -z-50" style={{ y }}>
        <Image
          src="/images/hero.jpg"
          fill
          alt=""
          className="object-top object-cover"
        />
      </motion.div>
      <Navbar className={"z-10"} />
      <div className="flex p-5 sm:pt-28 justify-between gap-28 lg:gap-40 xl:gap-72">
        <div className="flex flex-col items-center sm:items-start sm:ml-12 md:ml-24 lg:ml-36 text-center sm:text-start mb-20 max-w-[800px]">
          <h1 className="text-custom-secondary uppercase font-bold tracking-[0.1rem] mb-3">
            Welcome to Glint
          </h1>
          <p className="text-4xl sm:text-[2.5rem] md:text-[3rem] xl:text-[4rem] sm:leading-[3.5rem] md:leading-[4rem] lg:leading-[5rem] font-semibold mb-10">
            I am a web developer with a passion for creating beautiful and
            user-friendly websites.
          </p>
          <div className="flex flex-col text-xs w-full gap-3 text-center md:flex-row md:mt-10">
            <Link
              className="border-2 p-4 uppercase font-semibold tracking-[0.1rem] hover:bg-white hover:text-custom-dark duration-700 sm:w-80 md:w-60"
              href={"#contact"}
            >
              Start a project
            </Link>
            <Link
              className="border-2 p-4 uppercase font-semibold tracking-[0.1rem] hover:bg-white hover:text-custom-dark duration-700 sm:w-80 md:w-60"
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
        <div className="hidden sm:flex flex-col justify-center gap-4">
          <div className="relative flex group">
            <IconLink
              icon={FacebookIcon}
              href={"https://fb.com"}
              color="white"
              className="md:block md:border-2 md:rounded-full md:p-2"
            />
            <p className="hidden md:flex absolute -left-2 -translate-x-[100%] h-full invisible md:group-hover:visible scale-0 origin-right group-hover:scale-100 transition-all duration-500 items-center text-sm text-custom-primary font-semibold">
              Facebook
            </p>
          </div>
          <div className="relative flex group">
            <IconLink
              icon={TwitterIcon}
              href={"https://x.com"}
              color="white"
              className="md:border-2 md:rounded-full md:p-2"
            />
            <p className="hidden md:flex absolute -left-2 -translate-x-[100%] h-full invisible md:group-hover:visible scale-0 origin-right group-hover:scale-100 transition-all duration-500 items-center text-sm text-custom-primary font-semibold">
              Twitter
            </p>
          </div>
          <div className="relative flex group">
            <IconLink
              icon={LinkedinIcon}
              href={"https://linkedin.com"}
              color="white"
              className="md:border-2 md:rounded-full md:p-2"
            />
            <p className="hidden md:flex absolute -left-2 -translate-x-[100%] h-full invisible md:group-hover:visible scale-0 origin-right group-hover:scale-100 transition-all duration-500 items-center text-sm text-custom-primary font-semibold">
              Linkedin
            </p>
          </div>
          <div className="relative flex group">
            <IconLink
              icon={GithubIcon}
              href={"https://github.com"}
              color="white"
              className="md:border-2 md:rounded-full md:p-2"
            />
            <p className="hidden md:flex absolute -left-2 -translate-x-[100%] h-full invisible md:group-hover:visible scale-0 origin-right group-hover:scale-100 transition-all duration-500 items-center text-sm text-custom-primary font-semibold">
              Github
            </p>
          </div>
          <div className="relative flex group">
            <IconLink
              icon={GitlabIcon}
              href={"https://gitlab.com"}
              color="white"
              className="md:border-2 md:rounded-full md:p-2"
            />
            <p className="hidden md:flex absolute -left-2 -translate-x-[100%] h-full invisible md:group-hover:visible scale-0 origin-right group-hover:scale-100 transition-all duration-500 items-center text-sm text-custom-primary font-semibold">
              Gitlab
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
