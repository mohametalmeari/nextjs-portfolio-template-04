import { CodeXmlIcon } from "lucide-react";

const SERVICES = [
  {
    title: "Web Development",
    description:
      "I build websites that are fast, secure, and easy to manage, using the latest technologies, and best practices in the industry to ensure your website is up to date. I also provide maintenance services to keep your website running smoothly, and securely at all times so you can focus on growing your business.",
    icon: CodeXmlIcon,
  },
  {
    title: "Web Development",
    description:
      "I build websites that are fast, secure, and easy to manage, using the latest technologies, and best practices in the industry to ensure your website is up to date. I also provide maintenance services to keep your website running smoothly, and securely at all times so you can focus on growing your business.",
    icon: CodeXmlIcon,
  },
  {
    title: "Web Development",
    description:
      "I build websites that are fast, secure, and easy to manage, using the latest technologies, and best practices in the industry to ensure your website is up to date. I also provide maintenance services to keep your website running smoothly, and securely at all times so you can focus on growing your business.",
    icon: CodeXmlIcon,
  },
];

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="pt-28 pb-32 flex flex-col items-center text-center px-5"
    >
      <div className="flex flex-col items-center">
        <h2 className="uppercase text-custom-primary font-semibold xs:font-bold text-md">
          What I do
        </h2>
        <p className="text-[1.8rem] font-semibold mb-5 lg:mb-10 xs:text-4xl sm:text-[2.5rem] lg:text-[3.5rem] xs:leading-[1.5] max-w-[920px]">
          I've got everything you need to launch and grow your business
        </p>
        <div className="bg-custom-secondary/25 w-[70%] h-[1px]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-10 mt-10 lg:mt-14 px-5 w-full">
        {SERVICES.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start items-center gap-3 sm:gap-5">
      <div className="w-[50px]">
        <Icon width={50} height={50} className={"text-custom-primary"} />
      </div>
      <div className="sm:text-start">
        <h3 className="text-2xl font-semibold sm:text-3xl sm:font-semibold mb-6">
          {title}
        </h3>
        <p className="font-serif text-custom-secondary/85 leading-7 max-w-[470px] sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};
