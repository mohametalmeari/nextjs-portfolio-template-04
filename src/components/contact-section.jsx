"use client";

import {
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { IconLink } from "./navbar";
import { useToast } from "@/components/ui/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const jsonData = JSON.stringify(formData);
    const url = "/api/send";
    const options = {
      method: "POST",
      body: jsonData,
    };

    const res = await fetch(url, options);

    if (res.status === 200) {
      toast({
        title: "Message sent successfully",
        description: "I will get back to you soon.",
      });
      e.target.reset();
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="contact"
      className="h-fit w-full flex flex-col items-center text-center bg-[url('/images/contact-bg.jpg')] bg-cover relative"
    >
      <div className="absolute h-16 w-[2px] bg-custom-primary top-0" />
      <div className="flex flex-col items-stretch z-10">
        <div className="bg-custom-secondary/5 pt-28 pb-8">
          <h2 className="uppercase text-custom-primary font-semibold text-sm sm:text-lg">
            Contact me
          </h2>
          <p className="text-[1.8rem] font-semibold mb-5 text-white text-center px-5 xs:text-[2rem] sm:text-[2.5rem] lg:text-[3rem] max-w-[58rem]">
            Reach out for a new project or just say hello
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-custom-dark/80 flex flex-col pt-16 px-5 sm:px-10 md:bg-custom-dark/20 md:w-[40rem] md:mb-32"
          >
            <h3 className="uppercase text-white text-sm font-semibold mb-16 md:text-start">
              Send me a message
            </h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-transparent py-4 placeholder:text-sm placeholder:text-white/25 mb-2 border-b border-white/10 outline-none text-white text-sm focus:border-custom-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-transparent py-4 placeholder:text-sm placeholder:text-white/25 mb-2 border-b border-white/10 outline-none text-white text-sm focus:border-custom-primary"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-transparent py-4 placeholder:text-sm placeholder:text-white/25 mb-2 border-b border-white/10 outline-none text-white text-sm focus:border-custom-primary"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="bg-transparent py-4 placeholder:text-sm placeholder:text-white/25 mb-2 border-b border-white/10 h-60 outline-none text-white text-sm focus:border-custom-primary"
            />
            <button
              type="submit"
              className="bg-custom-primary text-white uppercase font-semibold tracking-[0.15rem] text-xs py-4 mt-10"
            >
              Submit
            </button>
          </form>
          <div className="md:w-[22rem] md:mb-32">
            <div className="w-full bg-custom-dark/80 flex flex-col pt-16 px-5 sm:px-10 gap-3 sm:text-start">
              <h3 className="uppercase text-white text-sm font-semibold mb-16 md:text-start hidden md:block">
                Contact info
              </h3>
              <h3 className="capitalize text-custom-primary font-semibold">
                Where to find me
              </h3>
              <p className="text-white/40 text-sm">1234 Green Street</p>
              <p className="text-white/40 text-sm">Middletown, NY</p>
              <p className="text-white/40 text-sm">11222 US</p>
            </div>
            <div className="w-full bg-custom-dark/80 flex flex-col pt-16 px-5 sm:px-10 gap-3 sm:text-start">
              <h3 className="capitalize text-custom-primary font-semibold">
                Email me at
              </h3>
              <p className="text-white/40 text-sm">name@example.com</p>
              <p className="text-white/40 text-sm">contact@example.com</p>
            </div>
            <div className="w-full bg-custom-dark/80 flex flex-col pt-16 px-5 sm:px-10 gap-3  sm:text-start">
              <h3 className="capitalize text-custom-primary font-semibold">
                Call me at
              </h3>
              <p className="text-white/40 text-sm">Phone: +1 123 456 7980</p>
              <p className="text-white/40 text-sm">Mobile: +1 123 456 7980</p>
              <p className="text-white/40 text-sm">Fax: +1 123 456 7980</p>
            </div>
            <div className="w-full bg-custom-dark/80 flex justify-center gap-2 pt-16 pb-32 px-5 sm:px-10 sm:justify-start">
              <IconLink
                icon={FacebookIcon}
                href={"https://fb.com"}
                color="white"
                hoverColor="rgb(57 181 74)"
              />
              <IconLink
                icon={TwitterIcon}
                href={"https://x.com"}
                color="white"
                hoverColor="rgb(57 181 74)"
              />
              <IconLink
                icon={LinkedinIcon}
                href={"https://linkedin.com"}
                color="white"
                hoverColor="rgb(57 181 74)"
              />
              <IconLink
                icon={GithubIcon}
                href={"https://github.com"}
                color="white"
                hoverColor="rgb(57 181 74)"
              />
              <IconLink
                icon={GitlabIcon}
                href={"https://gitlab.com"}
                color="white"
                hoverColor="rgb(57 181 74)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
