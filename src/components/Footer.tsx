import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/80 text-sm">
            © {currentYear} Seego Design. All rights reserved.
          </div>
          <div className="text-white/80 text-sm">
            Building better frontends for growing businesses.
          </div>
        </div>
      </div>
    </footer>
  );
}