import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  const displayedOptions = pricingOptions.slice(0, 3);

  return (
    <div className="mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-center my-6 sm:my-8 lg:my-10 tracking-wide font-bold">
        Pricing
      </h2>
      <div className="flex flex-wrap lg:flex-row lg:flex-nowrap justify-center gap-4 sm:gap-6 max-w-6xl mx-auto">
        {displayedOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 min-w-0 flex-1">
            <div className="p-6 sm:p-8 lg:p-10 border border-neutral-700 rounded-xl">
              <p className="text-3xl sm:text-4xl mb-6 sm:mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-base sm:text-lg lg:text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-6 sm:mb-8">
                <span className="text-4xl sm:text-5xl mt-4 sm:mt-6 mr-2">
                  {option.price}
                </span>
                <span className="text-neutral-400 text-sm sm:text-base tracking-tight">
                  /Month
                </span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-6 sm:mt-8 flex items-center">
                    <CheckCircle2 className="h-5 sm:h-6 w-5 sm:w-6 text-green-400" />
                    <span className="ml-2 text-sm sm:text-base lg:text-md text-neutral-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-10 sm:h-12 p-4 sm:p-5 mt-12 sm:mt-16 lg:mt-20 tracking-tight text-base sm:text-lg lg:text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;