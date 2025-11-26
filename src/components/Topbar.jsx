import React from 'react';
export default function Topbar() {
  return (
    <header className="h-16 bg-white/80 backdrop-blur border-b flex items-center px-8 justify-between shadow-md rounded-b-2xl">
      <div className="font-bold text-xl text-blue-800 tracking-wide">SecureCoda Dashboard</div>
      <div className="text-sm text-gray-600 font-medium">Monitoring Security Risks in Coda Docs</div>
    </header>
  );
}
