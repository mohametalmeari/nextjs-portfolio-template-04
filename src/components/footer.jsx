"use client";

import { useToast } from "@/components/ui/use-toast";
import { MailIcon } from "lucide-react";

export const Footer = () => {
  const { toast } = useToast();
  const year = new Date().getFullYear();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
    };
    const jsonData = JSON.stringify(formData);
    const url = "/api/subscribe";
    const options = {
      method: "POST",
      body: jsonData,
    };
    const res = await fetch(url, options);
    if (res.status === 200) {
      toast({
        description: "Thank you for subscribing! 🎉",
      });
      e.target.reset();
    } else {
      toast({
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="w-full px-5 sm:px-20 py-16 bg-custom-dark flex flex-col items-center text-custom-secondary">
      <div className="flex flex-col lg:flex-row lg:gap-20 max-w-[62rem]">
        <div>
          <div className="mb-8 text-center sm:text-start">
            <span className="text-custom-primary text-4xl font-bold">
              LOGO.
            </span>
          </div>
          <p className="leading-8 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            expedita rerum obcaecati aspernatur ducimus voluptas animi ratione,
            perferendis saepe. Aperiam assumenda optio aut deleniti dolorum
            placeat. Consectetur in accusamus beatae!
          </p>
        </div>
        <div>
          <h2 className="capitalize text-white font-semibold mb-10">
            Get notified
          </h2>
          <p className="leading-8 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            expedita rerum obcaecati aspernatur ducimus voluptas animi,
            perferendis saepe.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 sm:flex-row w-full relative"
          >
            <MailIcon
              className="absolute top-0 left-0 w-6 h-6 m-4 hidden sm:block"
              color="white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="text-white bg-white/5 placeholder:text-white/20 placeholder:text-sm text-center sm:text-start sm:pl-12 p-4 outline-none flex-1"
            />
            <button
              type="submit"
              className="bg-custom-primary text-white uppercase font-semibold tracking-[0.15rem] text-xs py-4 px-6"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center text-sm pt-28 pb-3 gap-2 sm:gap-0">
        <p className="px-3 sm:border-r border-custom-secondary/50">
          &copy; Copyright {year}
        </p>
        <p className="px-3">Portfolio Template</p>
      </div>
    </footer>
  );
};
