// src/components/layout/Header.js
import React from 'react';
import logo from '../../assets/elegance-logo.png'; 

function Header({ cartCount, onOpenCart }) {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center px-10 shadow-xl sticky top-0 z-50">
      <div className="flex items-center">
        <img src={logo} alt="Élégance Lady" className="h-12 w-auto" />
      </div>
      
      <div className="flex gap-8 items-center font-serif tracking-widest uppercase text-xs">
        <a href="/" className="hover:text-yellow-600 transition">Collection</a>
        
      
        <button 
          onClick={onOpenCart} 
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <span className="group-hover:text-yellow-600 transition">Bag</span>
          <span className="bg-yellow-600 text-black rounded-full h-5 w-5 flex items-center justify-center font-bold text-[10px]">
            {cartCount}
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Header;