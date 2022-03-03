// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-lime-600 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Cole Webster
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-200	flex flex-wrap items-center text-white justify-center">
          <a href="#projects" className="mr-10 hover:text-blue-700">
            About Me
          </a>
          <a href="#skills" className="mr-10 hover:text-blue-700">
            Projects
          </a>
          <a href="#testimonials" className="mr-10 hover:text-blue-700">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}