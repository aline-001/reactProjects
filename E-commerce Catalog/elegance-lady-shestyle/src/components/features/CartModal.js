// src/components/features/CartModal.js
import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';


function CartModal({ isOpen, onClose, cartItems, onRemove, onClearCart }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false); // Toggle state

  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/50 backdrop-blur-sm">
      <div className="h-full w-full max-w-md bg-white shadow-2xl p-8 flex flex-col overflow-y-auto">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h2 className="text-2xl font-serif text-slate-900 uppercase tracking-widest">
            {isCheckingOut ? "Shipping" : "Your Bag"}
          </h2>
          <button onClick={() => { setIsCheckingOut(false); onClose(); }} className="text-slate-400 hover:text-slate-900 text-2xl">✕</button>
        </div>

        {!isCheckingOut ? (
          /* --- VIEW 1: CART ITEMS --- */
          <>
            <div className="flex-1">
              {cartItems.length === 0 ? (
                <p className="text-slate-400 italic text-center mt-10">Your bag is empty.</p>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center mb-4 border-b border-slate-50 pb-4">
                    <span className="text-slate-900">{item.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="font-bold">${item.price}</span>
                      <button onClick={() => onRemove(index)} className="text-red-400 text-xs">Remove</button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="mt-auto pt-6 border-t">
                <div className="flex justify-between text-xl font-bold mb-6">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                <button 
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full bg-black text-white py-4 font-bold tracking-widest hover:bg-yellow-600 transition"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            )}
          </>
        ) : (
          /* --- VIEW 2: THE FORM --- */
          <>
            <button 
              onClick={() => setIsCheckingOut(false)}
              className="text-xs text-slate-400 mb-4 hover:text-slate-900"
            >
              ← Back to Bag
            </button>
            <CheckoutForm 
              total={total} 
              cartItems={cartItems} 
              onClearCart={onClearCart} 
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;