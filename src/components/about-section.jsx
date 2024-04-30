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
      <h2 className="uppercase font-semibold tracking-[0.1rem]">Hello there</h2>
      <h3 className="text-white text-4xl font-semibold pb-5 mb-10 border-b-2 border-b-white/25">
        I am Mohamad
      </h3>
      <p className="text-center font-serif mb-7 text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
        mollitia expedita, libero reprehenderit tempore, consequuntur harum
        consectetur at voluptates corrupti molestiae. Voluptatem, laborum.
        Provident, voluptate aperiam officia fugiat eos praesentium. Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Pariatur mollitia
        expedita, libero reprehenderit tempore, consequuntur harum consectetur.
      </p>
      <div>
        {STATS.map((stat, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col items-center justify-center gap-2 border-white/25 p-8",
              index < STATS.length - 1 && " border-b-2"
            )}
          >
            <h4 className="text-7xl text-white font-bold">{stat.number}</h4>
            <p className="text-lg font-bold">{stat.text}</p>
          </div>
        ))}
      </div>

      <div className="h-16 w-[2px] bg-white absolute top-0 right-10" />
    </section>
  );
};
