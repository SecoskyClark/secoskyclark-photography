export default function SecoskyClarkWebsite() {
  const images = [
    "/landscape1.jpg",
    "/landscape2.jpg",
    "/landscape3.jpg"
  ];

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "white", fontFamily: "Helvetica, Arial" }}>
      
      {/* NAV */}
      <div style={{
        position: "fixed",
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(10px)",
        zIndex: 10
      }}>
        <h1 style={{ letterSpacing: "3px" }}>SecoskyClark</h1>
      </div>

      {/* HERO */}
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: "url('/landscape1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div style={{ background: "rgba(0,0,0,0.5)", padding: "40px" }}>
          <h2 style={{ fontSize: "48px", fontWeight: "300" }}>
            Capturing real moments.<br />Creating timeless memories.
          </h2>
        </div>
      </div>

      {/* GALLERY */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "10px",
        padding: "40px"
      }}>
        {images.map((src, i) => (
          <img key={i} src={src} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
        ))}
      </div>

    </div>
  );
}
