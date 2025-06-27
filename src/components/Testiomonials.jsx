import { testimonials } from "../constants";

const Testimonials = () => {
  const displayedTestimonials = testimonials.slice(0, 6);
  const leftColumn = displayedTestimonials.slice(0, 3);
  const rightColumn = displayedTestimonials.slice(3, 6);

  return (
    <div className="mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8 tracking-wide">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-center my-6 sm:my-8 lg:my-10 font-bold">
        What People are saying
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row flex-nowrap justify-center gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="w-1/2 flex flex-col gap-4 sm:gap-6">
            {leftColumn.map((testimonial, index) => (
              <div key={index} className="w-full px-2 py-2">
                <div className="bg-neutral-900 rounded-md p-4 sm:p-6 text-sm sm:text-base border border-neutral-800 font-thin">
                  <p>{testimonial.text}</p>
                  <div className="flex mt-6 sm:mt-8 items-start">
                    <img
                      className="w-10 sm:w-12 h-10 sm:h-12 mr-4 sm:mr-6 rounded-full border border-neutral-300"
                      src={testimonial.image}
                      alt={`${testimonial.user}'s avatar`}
                    />
                    <div>
                      <h6 className="text-base sm:text-lg font-semibold">
                        {testimonial.user}
                      </h6>
                      <span className="text-xs sm:text-sm font-normal italic text-neutral-600">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right Column */}
          <div className="w-1/2 flex flex-col gap-4 sm:gap-6">
            {rightColumn.map((testimonial, index) => (
              <div key={index + 3} className="w-full px-2 py-2">
                <div className="bg-neutral-900 rounded-md p-4 sm:p-6 text-sm sm:text-base border border-neutral-800 font-thin">
                  <p>{testimonial.text}</p>
                  <div className="flex mt-6 sm:mt-8 items-start">
                    <img
                      className="w-10 sm:w-12 h-10 sm:h-12 mr-4 sm:mr-6 rounded-full border border-neutral-300"
                      src={testimonial.image}
                      alt={`${testimonial.user}'s avatar`}
                    />
                    <div>
                      <h6 className="text-base sm:text-lg font-semibold">
                        {testimonial.user}
                      </h6>
                      <span className="text-xs sm:text-sm font-normal italic text-neutral-600">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;