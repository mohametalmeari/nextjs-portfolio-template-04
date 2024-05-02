import { cn } from "@/lib/utils";

export const AboutSection = () => {
  const STATS = [
    {
      number: 93,
      text: "Awards Received",
    },
    {
      number: 172,
      text: "Cups of Coffee",
    },
    {
      number: 153,
      text: "Projects Completed",
    },
    {
      number: 234,
      text: "Happy Clients",
    },
  ];
  return (
    <section
      id="about"
      className="bg-custom-primary w-full flex flex-col items-center pt-28 pb-32 px-5 relative"
    >
      <h2 className="uppercase font-bold tracking-[0.1rem] md:pb-2">
        Hello there
      </h2>
      <h3 className="text-white text-4xl xs:text-5xl sm:text-6xl font-semibold pb-5 sm:pb-16 mb-10 border-b-2 border-b-white/25">
        I am Mohamad
      </h3>
      <p className="text-center font-serif mb-7 text-lg xs:text-xl xs:leading-9 sm:text-2xl md:leading-10 max-w-[980px] sm:mb-20">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
        mollitia expedita, libero reprehenderit tempore, consequuntur harum
        consectetur at voluptates corrupti molestiae. Voluptatem, laborum.
        Provident, voluptate aperiam officia fugiat eos praesentium. Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Pariatur mollitia
        expedita, libero reprehenderit tempore, consequuntur harum consectetur.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 lg:grid-cols-4">
        {STATS.map((stat, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col items-center justify-center gap-2 border-white/25 px-8 py-4 md:px-24 lg:px-12",
              index < STATS.length - 1 &&
                "border-b-2 sm:border-b-0 lg:border-r-2",
              index % 2 === 0 && "sm:border-r-2"
            )}
          >
            <h4 className="text-7xl text-white font-bold md:text-[5.5rem]">
              {stat.number}
            </h4>
            <p className="text-lg font-bold">{stat.text}</p>
          </div>
        ))}
      </div>

      <div className="h-16 w-[2px] bg-white absolute top-0 right-10" />
    </section>
  );
};
