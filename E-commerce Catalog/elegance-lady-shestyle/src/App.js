import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import ProductList from './components/features/ProductList';
import SearchBar from './components/features/SearchBar';
import CartModal from './components/features/CartModal';
import ProductDetailModal from './components/features/ProductDetailModal';
import { SHE_STYLE_PRODUCTS } from './constants';

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const clearCart = () => setCart([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('sheStyleCart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('sheStyleCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const filteredProducts = SHE_STYLE_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />
      
      <main className="max-w-7xl mx-auto p-6 md:p-10">
        
        <div className="text-center my-12 md:my-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-yellow-600 mb-4">Collection 2026</h2>
          <h1 className="text-4xl md:text-6xl font-serif mb-2">Élégance Lady</h1>
          <div className="h-[1px] w-20 bg-yellow-600 mx-auto mb-4"></div>
          <p className="text-slate-400 uppercase tracking-widest text-[10px]">The Essence of SheStyle</p>
        </div>

        
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

       
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
               
                <div 
                  onClick={() => setSelectedProduct(product)}
                  className="relative h-80 bg-slate-100 overflow-hidden mb-4"
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 z-10" />
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" 
                  />
                  <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <span className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest shadow-xl">Quick View</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl mb-1">{product.name}</h3>
                  <p className="text-yellow-700 font-bold mb-4">${product.price}</p>
                  <button 
                    onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                    className="text-[10px] uppercase tracking-widest border-b border-black pb-1 hover:text-yellow-600 hover:border-yellow-600 transition"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400 italic font-serif">
            The SheStyle vault is currently quiet.
          </div>
        )}
      </main>

      
      <ProductDetailModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onAddToCart={addToCart} 
      />

      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart}
        onRemove={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  );
}

export default App;