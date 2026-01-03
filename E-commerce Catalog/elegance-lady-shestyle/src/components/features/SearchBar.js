// src/components/features/SearchBar.js
import React from 'react';

function SearchBar({ searchQuery, setSearchQuery, activeCategory, setActiveCategory }) {
  const categories = ['All', 'Dresses', 'Jewelry', 'Accessories'];

  return (
    <div className="mb-10 space-y-6">
      {/* Search Input - Handling onChange Event */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search SheStyle Collection..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 pl-12 border-b-2 border-slate-900 focus:outline-none text-lg text-slate-900 placeholder-slate-300"
        />
        <span className="absolute left-4 top-5 text-slate-400">🔍</span>
      </div>

      {/* Category Buttons - Handling onClick Event */}
      <div className="flex gap-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border-2 transition-all font-bold text-sm
              ${activeCategory === cat 
                ? 'bg-slate-900 text-white border-slate-900' 
                : 'bg-white text-slate-900 border-slate-100 hover:border-slate-900'}`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;