import React, { useState } from "react";

const portfolioImages = [
  // Maternity
  { title: "Maternity", src: "/maternity1.jpg" },
  { title: "Maternity", src: "/maternity2.jpg" },
  { title: "Maternity", src: "/maternity3.jpg" },
  { title: "Maternity", src: "/maternity4.jpg" },

  // Family
  { title: "Family", src: "/family1.jpg" },
  { title: "Family", src: "/family2.jpg" },
  { title: "Family", src: "/family3.jpg" },
  { title: "Family", src: "/family4.jpg" },
  { title: "Family", src: "/family5.jpg" },
  { title: "Family", src: "/family6.jpg" },

  // Wildlife
  { title: "Wildlife", src: "/wildlife1.jpg" },
  { title: "Wildlife", src: "/wildlife2.jpg" },
  { title: "Wildlife", src: "/wildlife3.jpg" },
  { title: "Wildlife", src: "/wildlife4.jpg" },
  { title: "Wildlife", src: "/wildlife5.jpg" },
  { title: "Wildlife", src: "/wildlife6.jpg" },

  // Landscape
  { title: "Landscape", src: "/landscape1.jpg" },
  { title: "Landscape", src: "/landscape2.jpg" },
  { title: "Landscape", src: "/landscape3.jpg" },
  { title: "Landscape", src: "/landscape4.jpg" },
  { title: "Landscape", src: "/landscape5.jpg" },
  { title: "Landscape", src: "/landscape6.jpg" },
  { title: "Landscape", src: "/landscape7.jpg" },
  { title: "Landscape", src: "/landscape8.jpg" },
  { title: "Landscape", src: "/landscape9.jpg" },
  { title: "Landscape", src: "/landscape10.jpg" },
];

export default function SecoskyClarkWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* NAV */}
      <header className="fixed w-full flex justify-between items-center px-8 py-6 bg-black/60 backdrop-blur-md z-50">
        <h1 className="text-xl tracking-widest">SecoskyClark</h1>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
          <a href="#services">Services</a>
          <a href="#book">Book</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center gap-8 text-xl z-40">
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
          <a href="#services">Services</a>
          <a href="#book">Book</a>
          <a href="#contact">Contact</a>
        </div>
      )}

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6 bg-[url('/maternity1.jpg')] bg-cover bg-center">
        <div className="bg-black/50 p-10 rounded-xl">
          <h2 className="text-4xl md:text-6xl font-light">
            Capturing real moments.
            <br /> Creating timeless memories.
          </h2>
          <div className="mt-6 flex gap-4 justify-center">
            <a href="#portfolio" className="border px-6 py-2">View Portfolio</a>
            <a href="#book" className="bg-white text-black px-6 py-2">Book a Session</a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-8">
        <h3 className="text-3xl mb-10">Portfolio</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioImages.map((img, index) => (
            <div key={index} className="relative overflow-hidden group">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-lg">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-8">
        <h3 className="text-3xl mb-10">Pricing</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Mini Session", price: "$200", desc: "20 minutes • 10 images" },
            { name: "Full Session", price: "$400", desc: "60 minutes • 30+ images" },
            { name: "Maternity Bundle", price: "$650", desc: "Maternity + Newborn" }
          ].map((pkg) => (
            <div key={pkg.name} className="p-6 border border-white/20 rounded-lg">
              <h4 className="text-xl mb-2">{pkg.name}</h4>
              <p className="text-2xl mb-2">{pkg.price}</p>
              <p className="text-sm text-white/70 mb-4">{pkg.desc}</p>
              <a href="#book" className="border px-4 py-2">Book Now</a>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-8 bg-white/5">
        <h3 className="text-3xl mb-10">Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {["Wedding Photography", "Family Sessions", "Maternity & Newborn"].map((service) => (
            <div key={service} className="p-6 border border-white/20 rounded-lg">
              <h4 className="text-xl mb-2">{service}</h4>
              <p className="text-sm text-white/70">
                Custom sessions designed to capture your story.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="py-24 px-8 bg-white/5">
        <h3 className="text-3xl mb-6">Book a Session</h3>
        <div className="w-full h-[700px] border border-white/10 rounded-xl overflow-hidden">
          <iframe
            src="https://calendly.com/secoskyclarkphotography"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-8">
        <h3 className="text-3xl mb-6">Contact</h3>
        <p className="text-white/70">your@email.com</p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} SecoskyClark Photography
      </footer>

    </div>
  );
}
