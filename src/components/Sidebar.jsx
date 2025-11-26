import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineViewGrid, HiOutlineBell, HiOutlineCog } from 'react-icons/hi';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-blue-700 to-blue-900 text-white shadow-lg flex flex-col rounded-r-2xl">
      <div className="p-6 font-bold text-2xl tracking-wide flex items-center gap-2">
        <span className="bg-white text-blue-700 rounded-full px-2 py-1 font-black">S</span>
        SecureCoda
      </div>
      <nav className="flex-1 mt-4 space-y-2">
        <NavLink to="/" className={({ isActive }) =>
          `flex items-center gap-3 px-6 py-3 rounded-lg transition-colors duration-200 ${isActive ? 'bg-blue-800 font-bold' : 'hover:bg-blue-600'}`}
        >
          <HiOutlineViewGrid className="text-xl" /> Dashboard
        </NavLink>
        <NavLink to="/alerts" className={({ isActive }) =>
          `flex items-center gap-3 px-6 py-3 rounded-lg transition-colors duration-200 ${isActive ? 'bg-blue-800 font-bold' : 'hover:bg-blue-600'}`}
        >
          <HiOutlineBell className="text-xl" /> Alerts
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) =>
          `flex items-center gap-3 px-6 py-3 rounded-lg transition-colors duration-200 ${isActive ? 'bg-blue-800 font-bold' : 'hover:bg-blue-600'}`}
        >
          <HiOutlineCog className="text-xl" /> Settings
        </NavLink>
      </nav>
    </aside>
  );
}
