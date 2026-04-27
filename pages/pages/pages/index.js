import React, { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const portfolioImages = [
    { title: "Maternity", src: "/maternity1.jpg" },
    { title: "Family", src: "/family1.jpg" },
    { title: "Wildlife", src: "/wildlife1.jpg" },
    { title: "Landscape", src: "/landscape1.jpg" },
  ];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAV */}
      <header className="fixed w-full flex justify-between px-8 py-6 bg-black/60">
        <h1>SecoskyClark</h1>
        <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </header>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center">
        <div>
          <h2 className="text-4xl">
            Capturing real moments.
            <br /> Creating timeless memories.
          </h2>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="p-10">
        <h3>Portfolio</h3>
        <div className="grid grid-cols-2 gap-4">
          {portfolioImages.map((img, i) => (
            <img key={i} src={img.src} alt="" />
          ))}
        </div>
      </section>

    </div>
  );
}
