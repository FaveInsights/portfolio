import React from 'react'
import ThemeToggle from './ThemeToggle';
import { RxHamburgerMenu } from "react-icons/rx"



const Header = () => {
  return (
    <header className="py-3 px-4 dark:dark">
      <nav className="flex align justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="lg:hidden block">
            <RxHamburgerMenu />
          </span>
          <h1 className="font-extrabold text-sm sm:text-2xl secondary text-[#2e4053] dark:text-[#89A8B2]">
            Favour Badakin.
          </h1>
        </div>
        <div className="hidden lg:block ml-72">
          <ul className="flex justify-end gap-x-8">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#dashboards">Dashboards</a>
            </li>
          </ul>
        </div>
        <div className="space-x-4">
          <button className="btn">Get in Touch</button>
          <span>
            <ThemeToggle />
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header