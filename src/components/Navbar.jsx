"use client";

import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "hover:text-yellow-400 transition cursor-pointer";

  const iconClass =
    "w-5 h-5 hover:scale-110 transition duration-300";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-black/85 backdrop-blur-md shadow-lg"
          : "bg-black/40 backdrop-blur-sm"
      }`}
    >
      <div className="px-6 md:px-10 py-4 flex justify-between items-center text-white">

        {/* LOGO */}
        <h1 className="text-lg md:text-2xl font-bold text-yellow-400 tracking-wide">
          Sri Venkateswara Travels
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center text-sm md:text-base">

          <span onClick={() => scrollToSection("home")} className={linkClass}>Home</span>
          <span onClick={() => scrollToSection("services")} className={linkClass}>Services</span>
          <span onClick={() => scrollToSection("fleet")} className={linkClass}>Fleet</span>
          <span onClick={() => scrollToSection("booking")} className={linkClass}>Booking</span>
          <span onClick={() => scrollToSection("contact")} className={linkClass}>Contact</span>

          {/* SOCIAL MEDIA (PREMIUM ICONS) */}
          <div className="flex items-center gap-3 ml-2">

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank">
              <svg className={iconClass} viewBox="0 0 24 24" fill="white">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm-5 3c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank">
              <svg className={iconClass} viewBox="0 0 24 24" fill="white">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.8c0-2 1.2-3 3-3 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank">
              <svg className={iconClass} viewBox="0 0 24 24" fill="white">
                <path d="M23 7s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17.4 3.5 12 3.5 12 3.5s-5.4 0-8.1.2c-.4.1-1.3.1-2.1 1C1.2 5.4 1 7 1 7S.8 9 .8 11v2c0 2 .2 4 .2 4s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.8.2 7.8.2s5.4 0 8.1-.2c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-2 .2-4v-2c0-2-.2-4-.2-4zM10 15V9l6 3-6 3z"/>
              </svg>
            </a>

            {/* Snapchat */}
            <a href="https://snapchat.com" target="_blank">
              <svg className={iconClass} viewBox="0 0 24 24" fill="white">
                <path d="M12 2c3 0 5 2 5 5v3c0 3 2 5 3 6 1 .5 1 .5 1 1 0 .5-1 1-2 1-1 0-2 1-3 2-1 1-2 2-4 2s-3-1-4-2c-1-1-2-2-3-2-1 0-2-.5-2-1 0-.5 0-.5 1-1 1-1 3-3 3-6V7c0-3 2-5 5-5z"/>
              </svg>
            </a>

          </div>

          <DarkModeToggle />

          <button
            onClick={() => scrollToSection("booking")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold transition shadow-md"
          >
            Book Now
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-yellow-400"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-5 px-6 pb-6 text-white bg-black/90 backdrop-blur-md">

          <span onClick={() => scrollToSection("home")}>Home</span>
          <span onClick={() => scrollToSection("services")}>Services</span>
          <span onClick={() => scrollToSection("fleet")}>Fleet</span>
          <span onClick={() => scrollToSection("booking")}>Booking</span>
          <span onClick={() => scrollToSection("contact")}>Contact</span>

          {/* MOBILE SOCIAL */}
          <div className="flex gap-5 pt-2">

            <a href="https://instagram.com"><span>📸</span></a>
            <a href="https://facebook.com"><span>📘</span></a>
            <a href="https://youtube.com"><span>▶️</span></a>
            <a href="https://snapchat.com"><span>👻</span></a>

          </div>

          <DarkModeToggle />

          <button
            onClick={() => scrollToSection("booking")}
            className="bg-yellow-400 text-black text-center py-2 rounded-full font-semibold"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}