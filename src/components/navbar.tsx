import { ArrowRightIcon } from "@heroicons/react/solid";
export const Navbar = () => {
  return (
    <header className="bg-white/5 backdrop-blur-md border-b border-white/10 md:sticky top-0 z-50 transition-all">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div
          className="title-font font-medium text-white mb-4 md:mb-0"
        >
          <a href="#about" className="ml-3 text-2xl font-semibold tracking-wide hover:text-green-400 transition-colors">
            Lalith Saran
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white/20 flex flex-wrap items-center text-base justify-center">
          <a href="#skills" className="mr-5 text-gray-300 hover:text-green-400 hover:scale-105 transition-all">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-white/10 border border-white/20 py-2 px-5 focus:outline-none hover:bg-white/20 hover:text-green-400 rounded-full text-base mt-4 md:mt-0 transition-all hover:shadow-lg hover:shadow-green-500/20"
        >
          Hire Me
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </a>
      </div>
    </header>
  );
};
