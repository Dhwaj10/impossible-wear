import React from 'react';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-blue-500 font-sans">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-black tracking-tighter uppercase italic">
          Impossible <span className="text-blue-600 underline">Wear</span>
        </h1>
        <div className="space-x-8 text-sm font-medium hidden md:flex">
          <a href="#" className="hover:text-blue-500 transition-colors uppercase">The Drop</a>
          <a href="#" className="hover:text-blue-500 transition-colors uppercase">Archive</a>
          <a href="#" className="hover:text-blue-500 transition-colors uppercase">About</a>
        </div>
        <button className="bg-white text-black px-4 py-1 text-xs font-bold uppercase hover:bg-blue-600 hover:text-white transition-all">
          Cart (0)
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Placeholder for image_3.png */}
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 opacity-60">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-[calc(-0.05em)] leading-none mb-6">
            Impossible <br /> 
            <span className="text-transparent border-t-2 border-b-2 border-white px-2">Made Real</span>
          </h2>
          <p className="text-lg md:text-xl font-light tracking-widest uppercase mb-8 text-gray-400">
            High Fashion. Affordable Price. No Exceptions.
          </p>
          <button className="group relative px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest overflow-hidden hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.8)] transition-all">
            <span className="relative z-10">Unlock the Drop</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </section>

      {/* Product Teaser Grid */}
      <section className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group border border-white/5 p-4 hover:border-blue-600 transition-colors cursor-pointer">
              <div className="bg-zinc-900 aspect-[3/4] mb-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-black text-4xl">
                  {item === 1 ? 'TEE' : item === 2 ? 'HOODIE' : 'PANTS'}
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-zinc-500 uppercase">Season 01</p>
                  <h3 className="font-bold text-lg uppercase italic tracking-tighter">Impossible Item_0{item}</h3>
                </div>
                <p className="font-mono text-blue-500">$29.99</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer (Simplified for Hype) */}
      <footer className="p-20 text-center border-t border-white/5">
        <p className="text-zinc-600 text-xs tracking-widest uppercase mb-4">Join the Lab</p>
        <input 
          type="email" 
          placeholder="ENTER EMAIL FOR DROP ACCESS" 
          className="bg-transparent border-b border-white p-2 w-full max-w-md text-center focus:outline-none focus:border-blue-500 mb-8"
        />
        <p className="text-[10px] text-zinc-800">© 2026 IMPOSSIBLE WEAR. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
