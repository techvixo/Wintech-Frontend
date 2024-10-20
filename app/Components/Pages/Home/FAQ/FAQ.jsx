const FAQ = () => {
  const data = [
    {
      title: "How often should elevators be inspected and maintained?",
      dis: "How often should elevators be inspected and maintained? How often should elevators be inspected and maintained? How often should elevators be inspected and maintained? How often should elevators be inspected and maintained?",
    },
    {
      title: "How often should elevators be inspected and maintained?",
      dis: "How often should elevators be inspected and maintained? How often should elevators be inspected and maintained? How often should elevators be inspected and maintained? How often should elevators be inspected and maintained?",
    },
    {
      title: "How often should elevators be inspected and maintained?",
      dis: "How often should elevators be inspected and maintained? How often should elevators be inspected and maintained? How often should elevators be inspected and maintained? How often should elevators be inspected and maintained?",
    },
    {
      title: "How often should elevators be inspected and maintained?",
      dis: "How often should elevators be inspected and maintained? How often should elevators be inspected and maintained? How often should elevators be inspected and maintained? How often should elevators be inspected and maintained?",
    },
    {
      title: "How often should elevators be inspected and maintained?",
      dis: "How often should elevators be inspected and maintained? How often should elevators be inspected and maintained? How often should elevators be inspected and maintained? How often should elevators be inspected and maintained?",
    },
  ];

  return (
    <section id="faq_section" className="">
      <div className="main_container bg-white py-5 md:py-10 rounded-md shadow-md">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
          Frequently Asked Questions
        </h2>
        {/* All faq here  */}
        <div className="faq_container m-4 md:mx-16 lg:mx-28 md:pt-5">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="collapse rounded-none collapse-arrow bg-white border-b-2"
              >
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-base text-[#000000] p-0 py-4 ">
                  {item.title}
                </div>
                <div className="collapse-content text-sm md:text-base">
                  <p>{item.dis}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
