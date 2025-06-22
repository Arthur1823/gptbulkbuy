import React from 'react';

function Header() {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-heading text-blue-600">
        GPTBulkBuy
      </div>

      {/* Language Selector */}
      <div className="flex gap-2 items-center">
        <select className="border px-2 py-1 rounded text-sm">
          <option value="en">🇬🇧 English</option>
          <option value="tr">🇹🇷 Türkçe</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
