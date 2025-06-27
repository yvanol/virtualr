import { features } from "../constants";

const FeatureSection = () => {
  const displayedFeatures = features.slice(0, 6);

  return (
    <div className="relative mt-12 sm:mt-16 lg:mt-20 border-b border-neutral-800 min-h-[600px] px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xs sm:text-sm font-medium px-3 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl mt-6 sm:mt-8 lg:mt-10 tracking-wide font-bold">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center mt-8 sm:mt-10 lg:mt-12 gap-4 sm:gap-6">
        {displayedFeatures.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 max-w-[400px] px-2">
            <div className="flex flex-row">
              <div className="flex mx-4 sm:mx-5 h-8 sm:h-10 w-8 sm:w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-4 text-base sm:text-lg lg:text-xl font-semibold">
                  {feature.text}
                </h5>
                <p className="text-sm sm:text-base lg:text-md p-2 mb-8 sm:mb-10 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;