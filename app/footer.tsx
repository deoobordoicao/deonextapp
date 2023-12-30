import { FiGithub, FiYoutube, FiLinkedin, FiFacebook } from "react-icons/fi";

export default function FinalFooter() {
  return (
    <footer className="bg-gray-800 flex items-center justify-center w-full mx-auto">
      <div className="container mx-auto px-2 py-8">
        <div className="flex justify-between items-center">
          <div>
            <a href="https://www.facebook.com/deocodetech" target="_blank">
              <h2 className="text-lg font-bold text-white tracking-wider">DeoCodingTech</h2>
            </a>
            <p className="text-gray-400 text-sm">President M.A. Roxas, PH</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://deoobordoicao.github.io/typingtime/"
              target="_blank"
              className="text-white hover:text-gray-400 transition-colors duration-200"
            >
              <FiGithub className="lg:w-6 lg:h-6 w-3 h-3" />
            </a>
            <a
              href="https://www.youtube.com/@deoforlife?sub_confirmation=1"
              target="_blank"
              className="text-white hover:text-gray-400 transition-colors duration-200"
            >
              <FiYoutube className="lg:w-6 lg:h-6 w-3 h-3" />
            </a>
            <a
              href="https://www.linkedin.com/in/deo-obordo-icao-7b76411ba/"
              target="_blank"
              className=" text-white hover:text-gray-400 transition-colors duration-200"
            >
              <FiLinkedin className="lg:w-6 lg:h-6 w-3 h-3" />
            </a>
            <a href="https://www.facebook.com/deocodetech" target="_blank" className="text-white hover:text-gray-400 transition-colors duration-200">
              <FiFacebook className="lg:w-6 lg:h-6 w-3 h-3" />
            </a>
          </div>
        </div>
        <hr className="my-4 border-gray-700" />
        <p className="text-gray-400 text-sm text-center">&copy; {new Date().getFullYear()} DeoCodingTech. All rights reserved.</p>
      </div>
    </footer>
  );
};



