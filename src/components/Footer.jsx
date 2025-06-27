import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-12 sm:mt-16 lg:mt-20 py-6 sm:py-8 lg:py-10 border-t border-neutral-700 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex justify-center"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
          <div className="flex flex-col pl-10"> 
            <h3 className="text-sm sm:text-base lg:text-md font-semibold mb-3 sm:mb-4 text-left">Resources</h3>
            <ul className="space-y-2 sm:space-y-3 text-left"> 
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white text-sm sm:text-base"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col pl-10"> 
            <h3 className="text-sm sm:text-base lg:text-md font-semibold mb-3 sm:mb-4 text-left">Platform</h3>
            <ul className="space-y-2 sm:space-y-3 text-left"> 
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white text-sm sm:text-base"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col pl-10"> 
            <h3 className="text-sm sm:text-base lg:text-md font-semibold mb-3 sm:mb-4 text-left">Community</h3>
            <ul className="space-y-2 sm:space-y-3 text-left"> 
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white text-sm sm:text-base"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
