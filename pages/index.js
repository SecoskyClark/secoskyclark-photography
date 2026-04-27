import { useState } from "react";

export default function SecoskyClarkWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const images = [
    "/landscape1.jpg",
    "/landscape2.jpg",
    "/landscape3.jpg",
    "/landscape4.jpg",
    "/landscape5.jpg",
    "/landscape6.jpg"
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="fixed w-full flex justify-between items-center px-8 py-6 bg-black/60 backdrop-blur-md z-50">
        <h1 className="text-xl tracking-widest">SecoskyClark</h1>
      </header>

      <section className="h-screen flex items-center justify-center text-center px-6">
        <div>
          <h2 className="text-5xl font-light">
            Capturing real moments.
            <br /> Creating timeless memories.
          </h2>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4 px-8 pb-20">
        {images.map((src, i) => (
          <img key={i} src={src} className="w-full h-[300px] object-cover" />
        ))}
      </section>
    </div>
  );
}
