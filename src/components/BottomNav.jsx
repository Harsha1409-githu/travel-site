import { useState } from "react";

export default function BottomNav() {
  const [active, setActive] = useState("home");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  const item = "flex flex-col items-center text-xs";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-black/80 backdrop-blur-md text-white flex justify-around py-3 border-t border-white/10">

        <button onClick={() => scrollTo("home")} className={item}>
          <span className={active === "home" ? "text-yellow-400" : ""}>🏠</span>
          Home
        </button>

        <button onClick={() => scrollTo("services")} className={item}>
          <span className={active === "services" ? "text-yellow-400" : ""}>🧳</span>
          Services
        </button>

        <button onClick={() => scrollTo("fleet")} className={item}>
          <span className={active === "fleet" ? "text-yellow-400" : ""}>🚗</span>
          Fleet
        </button>

        <button onClick={() => scrollTo("booking")} className={item}>
          <span className={active === "booking" ? "text-yellow-400" : ""}>📅</span>
          Book
        </button>

        <button onClick={() => scrollTo("contact")} className={item}>
          <span className={active === "contact" ? "text-yellow-400" : ""}>📞</span>
          Contact
        </button>

      </div>
    </div>
  );
}