import CounterCard from "./CounterCard";

const CounterSection = () => {
  const counterData = [
    {
      countNumber: "4 +",
      name: "Satisfied Clients",
    },
    {
      countNumber: "8 +",
      name: "Projects Completed",
    },
    {
      countNumber: "5 +",
      name: "Awards Earned",
    },
    {
      countNumber: "52 +",
      name: "Content Created",
    },
  ];
  return (
    <section id="CounterSection" className="my-4 md:my-10 py-9 md:py-24 bg-primary">
      <div className="main_container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
         <div className=" hidden md:block">
         <div
            className="single_count flex flex-col gap-2"
          >
            <h4 className="text-xl md:text-2xl font-semibold  text-white">
            Some Numbers
            </h4>
            <p className="text-[#797979] text-sm md:text-base">Our story in numbers</p>
          </div>
         </div>
          {counterData.map((data, i) => {
            return <CounterCard key={i} data={data}></CounterCard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
