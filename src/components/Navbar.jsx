import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const baseStyle =
    "px-6 py-2 rounded-xl border border-indigo-400/40 text-sm md:text-base font-medium transition-all duration-300 relative overflow-hidden shadow-[0_0_12px_rgba(99,102,241,0.5),inset_0_0_8px_rgba(99,102,241,0.2)]";

  const inactiveStyle =
    "text-indigo-200 hover:text-white hover:border-indigo-300 hover:bg-indigo-500/10 hover:shadow-[0_0_30px_rgba(99,102,241,0.9),0_0_60px_rgba(99,102,241,0.5),inset_0_0_12px_rgba(99,102,241,0.5)] hover:-translate-y-0.5";

  const activeStyle =
    "bg-indigo-600/20 text-white border-indigo-300 shadow-[0_0_40px_rgba(99,102,241,1),0_0_80px_rgba(99,102,241,0.6),inset_0_0_18px_rgba(99,102,241,0.7)]";

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-indigo-500/20 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-indigo-300 transition"
        >
          🚀 Kosmiczny Habitat
        </NavLink>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-white"
        >
          ☰
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-wrap gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/habitats"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Habitaty
          </NavLink>

          <NavLink
            to="/build"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Budowa
          </NavLink>

          <NavLink
            to="/plants"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Rośliny
          </NavLink>

          <NavLink
            to="/analysis"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Analiza
          </NavLink>

          <NavLink
            to="/conclusions"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Wnioski
          </NavLink>

        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6">

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/habitats"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Habitaty
          </NavLink>

          <NavLink
            to="/build"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Budowa
          </NavLink>

          <NavLink
            to="/plants"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Rośliny
          </NavLink>

          <NavLink
            to="/analysis"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Analiza
          </NavLink>

          <NavLink
            to="/conclusions"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Wnioski
          </NavLink>

        </div>
      )}
    </nav>
  );
}