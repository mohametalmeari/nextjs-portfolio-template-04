"use client";

import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CORPS_DATA = [
  {
    name: "Apple",
    iconImage: "/images/apple.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    iconImage: "/images/apple.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    iconImage: "/images/apple.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    iconImage: "/images/apple.png",
    link: "https://www.apple.com",
  },
  {
    name: "Apple",
    iconImage: "/images/apple.png",
    link: "https://www.apple.com",
  },
];

const REVIEW_DATA = [
  {
    name: "Jack Anderson",
    title: "CEO of Apple",
    image: "/images/profile.png",
    content:
      "This company is the best in the industry. They have helped me grow my business and I am very happy with the results. I would recommend them to anyone looking for a reliable partner.",
  },
  {
    name: "Jack Anderson",
    title: "CEO of Apple",
    image: "/images/profile.png",
    content:
      "This company is the best in the industry. They have helped me grow my business and I am very happy with the results. I would recommend them to anyone looking for a reliable partner.",
  },
  {
    name: "Jack Anderson",
    title: "CEO of Apple",
    image: "/images/profile.png",
    content:
      "This company is the best in the industry. They have helped me grow my business and I am very happy with the results. I would recommend them to anyone looking for a reliable partner.",
  },
];

export const ClientsSection = () => {
  const router = useRouter();

  const corps = CORPS_DATA.map((corp, index) => (
    <Image
      key={index}
      className="cursor-pointer contrast-0 hover:contrast-100 duration-500"
      src={corp.iconImage}
      alt={corp.name}
      width={100}
      height={100}
      onClick={() => router.push(corp.link)}
    />
  ));

  const reviews = REVIEW_DATA.map((review, index) => (
    <div key={index} className="flex flex-col items-center">
      <p className="mx-10 mb-10 font-serif text-custom-secondary/80 leading-8 text-lg">
        {review.content}
      </p>
      <Image
        width={100}
        height={100}
        src={review.image}
        alt={review.name}
        className="rounded-full mb-2 aspect-square object-cover object-top bg-white"
      />
      <h3 className="font-bold mb-2">{review.name}</h3>
      <h4 className="text-sm text-custom-secondary">{review.title}</h4>
    </div>
  ));

  return (
    <section
      id="clients"
      className="pt-28 pb-32 flex flex-col items-center text-center px-5 bg-custom-secondary/20 relative"
    >
      <div className="flex flex-col items-center">
        <h2 className="uppercase text-custom-primary font-semibold text-sm">
          My clients
        </h2>
        <p className="text-[1.8rem] font-semibold">
          I has been honored to partner up with these clients
        </p>
      </div>
      <div className="flex flex-col w-full items-center gap-20 mt-20">
        <Swiper data={corps} step={2} inView={2} />
        <div className="bg-custom-secondary/25 w-[70%] h-[1px]" />
      </div>
      <div className="flex flex-col w-full items-center gap-10 mt-20">
        <Swiper data={reviews} step={1} inView={1} />
      </div>
      <div className="absolute h-16 w-[2px] bg-custom-primary bottom-0" />
    </section>
  );
};

const Swiper = ({ data, step = 1, inView = 2 }) => {
  const [current, setCurrent] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [move, setMove] = useState("");
  const views = Array(Math.ceil(data.length / inView)).fill();

  useEffect(() => {
    setMove("");
  }, [current]);

  const beforeSlide = data.slice(current * step - step, current * step);
  const afterSlide = data.slice(
    current * step + inView,
    current * step + inView + step
  );
  const currentSlide = data.slice(current * step, current * step + inView);

  if (afterSlide.length < step) {
    afterSlide.push(...data.slice(0, step - afterSlide.length));
  }

  if (currentSlide.length < inView) {
    currentSlide.push(...data.slice(0, inView - currentSlide.length));
  }

  const handleNext = () => {
    if (current * step < data.length - 1) {
      setMove("left");
      setCurrentIndex(current + 1);
      setTimeout(() => {
        setCurrent(current + 1);
      }, 500);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setMove("right");
      setCurrentIndex(current - 1);
      setTimeout(() => {
        setCurrent(current - 1);
      }, 500);
    }
  };

  return (
    <>
      <div className="relative w-full overflow-hidden flex items-center">
        <button onClick={handlePrev} className="absolute left-0 z-10">
          <ArrowRightIcon className="rotate-180" />
        </button>
        <div
          className={cn(
            "flex justify-around w-full absolute top-0 left-0 z-0",
            move === "right" && "duration-500 translate-x-0",
            move !== "right" && "duration-0 -translate-x-[100%]"
          )}
        >
          {beforeSlide.map((item) => item)}
        </div>
        <div
          className={cn(
            "flex justify-around w-full",
            move === "left" && "duration-500 -translate-x-[100%]",
            move === "right" && "duration-500 translate-x-[100%]",
            move === "" && "duration-0 translate-x-0"
          )}
        >
          {currentSlide.map((item) => item)}
        </div>
        <div
          className={cn(
            "flex justify-around w-full absolute top-0 right-0",
            move === "left" && "duration-500 translate-x-0",
            move !== "left" && "duration-0 translate-x-[100%]"
          )}
        >
          {afterSlide.map((item) => item)}
        </div>
        <button onClick={handleNext} className="absolute right-0 z-10">
          <ArrowRightIcon />
        </button>
      </div>
      <div className="flex self-center gap-2 items-center">
        {views.map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-3 h-3 rounded-full duration-500",
              index === currentIndex
                ? "bg-custom-primary"
                : "bg-custom-secondary/50"
            )}
          />
        ))}
      </div>
    </>
  );
};
