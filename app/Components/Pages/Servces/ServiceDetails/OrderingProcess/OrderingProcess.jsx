const OrderingProcess = () => {
 const steps = [
   {
     title: "Upload CAD file",
     description: "Securely upload your part design to our online quote builder.",
   },
   {
     title: "Receive instant quote",
     description: "Our engineers provide precise quotations for you.",
   },
   {
     title: "Production",
     description: "Procure materials and produce parts according to the quantity required.",
   },
   {
     title: "Quality Control",
     description: "Quality inspection department inspects the parts ",
   },
   {
     title: "Delivery",
     description: "Delivery of parts as per the timeline.",
   },
 ];

 return (
  <div className=" py-3 md:pb-8">
    <div className="main_container p-3 md:p-6 bg-white shadow md:shadow-lg rounded-md">
    <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:mb-7">
    Our Ordering Process
      </h2>
     <div className="relative flex items-center">
       {/* Horizontal line */}
       <div className="absolute inset-0 flex items-center justify-center h-0.5 bg-gray-300" />
       
       {/* Step Indicators */}
       <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-3  w-full">
         {steps.map((step, index) => (
           <div key={index} className="md:pt-5 flex flex-col items-center text-center">
             <div className="w-3 h-3 bg-gray-800 rounded-full mb-4 hidden md:block" />
             <h3 className="font-semibold text-gray-800 text-md">{step.title}</h3>
             <p className="text-gray-600 text-sm md:text-base mt-1">{step.description}</p>
           </div>
         ))}
       </div>
     </div>
   </div>
  </div>
 );
};

export default OrderingProcess;
