import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 sm:mt-12 lg:mt-20 px-4">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-center tracking-wide font-bold">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-6 sm:mt-8 lg:mt-10 text-base sm:text-lg lg:text-xl text-center text-neutral-500 max-w-3xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex flex-col sm:flex-row justify-center my-8 sm:my-10 gap-3">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 sm:py-3 px-4 sm:px-6 rounded-md text-center"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-2 sm:py-3 px-4 sm:px-6 rounded-md border text-center"
        >
          Documentation
        </a>
      </div>
      <div className="flex flex-col sm:flex-row mt-8 sm:mt-10 justify-center gap-4 sm:gap-2">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-0 sm:mx-2 my-2"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-0 sm:mx-2 my-2"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;