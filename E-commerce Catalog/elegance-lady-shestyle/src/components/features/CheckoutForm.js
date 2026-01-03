import React, { useState } from 'react';

function CheckoutForm({ total, cartItems, onClearCart }) {
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [errors, setErrors] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Required for delivery.";
    if (!formData.email.includes("@")) tempErrors.email = "Invalid email.";
    if (!formData.address) tempErrors.address = "Address is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsConfirmed(true);
      onClearCart();
    }
  };

  if (isConfirmed) {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4 text-yellow-600">👑</div>
        <h2 className="text-2xl font-serif text-slate-900 mb-2">Order Confirmed</h2>
        <p className="text-slate-500 text-sm mb-6">
          Thank you, {formData.name}. Your SheStyle selection is being prepared.
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="text-xs uppercase tracking-widest border-b border-black"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="text" 
        placeholder="Full Name" 
        className="w-full p-3 border border-slate-200 rounded"
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
      
      <input 
        type="email" 
        placeholder="Email" 
        className="w-full p-3 border border-slate-200 rounded"
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      
      <textarea 
        placeholder="Shipping Address" 
        className="w-full p-3 border border-slate-200 rounded"
        onChange={(e) => setFormData({...formData, address: e.target.value})}
      ></textarea>
      {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}

      <button type="submit" className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-yellow-600 transition">
        Confirm Purchase
      </button>
    </form>
  );
}

export default CheckoutForm;