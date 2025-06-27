import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-center mt-6 sm:mt-8 lg:mt-10 tracking-wide font-bold">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>
      <div className="max-w-7xl mx-auto mt-8 sm:mt-10 lg:mt-12">
        <div className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-8">
          <div className="w-full lg:w-1/2 p-4 sm:p-6 flex justify-center">
            <div className="relative aspect-w-4 aspect-h-3 sm:aspect-w-16 sm:aspect-h-9 max-w-[500px] w-full">
              <img
                src={codeImg}
                alt="Coding"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-8 sm:mb-10 lg:mb-12">
                <div className="text-green-400 mx-4 sm:mx-6 bg-neutral-900 h-8 sm:h-10 w-8 sm:w-10 p-2 flex justify-center items-center rounded-full">
                  <CheckCircle2 className="h-5 sm:h-6 w-5 sm:w-6" />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-base sm:text-lg lg:text-xl font-semibold">
                    {item.title}
                  </h5>
                  <p className="text-sm sm:text-base lg:text-md text-neutral-500 max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;