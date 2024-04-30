"use client";

import { cn } from "@/lib/utils";
import {
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  LinkedinIcon,
  MenuIcon,
  TwitterIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="px-10 py-8 flex justify-between items-center z-40">
        <Link className="text-4xl font-bold" href={"/"}>
          Logo<span className="text-custom-primary">.</span>
        </Link>
        <button
          className="flex items-center gap-2 bg-custom-dark px-2 py-1 group fixed top-8 right-10"
          onClick={() => setIsOpen(true)}
        >
          <p className="text-custom-primary uppercase text-xs font-semibold tracking-[0.2rem] group-hover:text-white duration-700 hidden sm:block">
            menu
          </p>
          <MenuIcon width={30} height={30} />
        </button>
      </div>
      <div
        className={cn(
          "bg-custom-dark w-72 fixed h-full top-0 duration-300 p-8 py-11 z-50",
          isOpen ? "right-0" : "-right-72"
        )}
      >
        <div
          className={cn(
            "delay-250 duration-1000 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-20 opacity-0"
          )}
        >
          <div className="flex justify-between mb-12">
            <p className="uppercase text-custom-primary text-xs font-semibold tracking-[0.2rem]">
              Navigation
            </p>
            <button onClick={() => setIsOpen(false)}>
              <XIcon width={18} height={18} />
            </button>
          </div>
          <div className="mb-12">
            {LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-white text-lg font-semibold bg-yellow-400d"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-[0.825rem] text-white/25 mb-8 leading-[1.4rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elitfda.{" "}
            <a href="#" className="text-white/60 hover:text-white duration-300">
              reiciendis
            </a>{" "}
            doloremque autdfs dignissimos dolorum ipsum facere eius
            voluptatumiko quofare similique.
          </p>
          <div className="flex gap-2">
            <IconLink icon={FacebookIcon} href={"https://fb.com"} />
            <IconLink icon={TwitterIcon} href={"https://x.com"} />
            <IconLink icon={LinkedinIcon} href={"https://linkedin.com"} />
            <IconLink icon={GithubIcon} href={"https://github.com"} />
            <IconLink icon={GitlabIcon} href={"https://gitlab.com"} />
          </div>
        </div>
      </div>
    </>
  );
};

const IconLink = ({ icon: Icon, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconProps = {
    width: 20,
    height: 20,
    color: "none",
  };

  return (
    <Link href={href} target="_blank">
      <Icon
        {...iconProps}
        className="duration-300 cursor-pointer"
        fill={isHovered ? "rgb(255 255 255)" : "rgb(255 255 255 / 0.25)"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </Link>
  );
};
