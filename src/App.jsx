import React, { useState, useEffect } from "react";

function App() {
  // 1. STATE: Buat ngingat apakah layar udah di-scroll atau belum
  const [isScrolled, setIsScrolled] = useState(false);

  // 2. EFFECT: Buat mantau pergerakan scroll si user
  useEffect(() => {
    const handleScroll = () => {
      // Kalau di-scroll ke bawah lebih dari 20 pixel, set jadi true
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Pasang "kuping" buat dengerin event scroll di browser
    window.addEventListener("scroll", handleScroll);

    // Bersihin event-nya kalau komponennya udah gak dipake (biar RAM gak bocor)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Dashboard pencatatan sekolah",
      category: "Web Development",
      year: "2026",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "CHIRON DIGITAL",
      category: "UI/UX Design",
      year: "2025",
      img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-white selection:text-black">
      {/* NAVBAR: Tingginya (py) dan Background-nya bakal berubah otomatis lewat dynamic className */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-8 md:px-16 flex justify-between items-center transition-all duration-500 ease-in-out ${
          isScrolled
            ? "py-1 bg-black/80 backdrop-blur-md border-b border-neutral-900/50"
            : "py-8 bg-transparent border-b border-transparent"
        }`}>
        <h1 className="text-sm font-bold tracking-[0.3em] uppercase">
          PORTO.LU
        </h1>

        <nav className="space-x-6 text-xs uppercase tracking-widest text-neutral-400">
          <a
            href="#home"
            className="hover:text-white transition-colors duration-300">
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-colors duration-300">
            Projects
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors duration-300">
            About
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-300">
            Contact
          </a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl w-full mx-auto px-8 md:px-16 space-y-40 pt-32 pb-20 flex-1">
        {/* HERO SECTION */}
        <section
          id="home"
          className="space-y-6 pt-12 min-h-[60vh] flex flex-col justify-center items-start">
          <p className="text-xs uppercase tracking-[0.5em] text-neutral-500 font-semibold">
            Frontend Developer / Designer
          </p>
          <h2 className="text-4xl md:text-7xl font-light tracking-tight leading-none">
            BUILDING DIGITAL <br />
            <span className="font-medium text-neutral-400">EXPERIENCES.</span>
          </h2>
          <div className="pt-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] border border-neutral-800 px-6 py-3 hover:bg-white hover:text-black transition-all duration-500">
              View My Work
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-12 scroll-mt-24">
          <div className="flex justify-between items-end border-b border-neutral-900 pb-4">
            <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Selected Works
            </h3>
            <span className="text-[10px] text-neutral-600 font-mono">
              ({projects.length})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer space-y-4">
                <div className="overflow-hidden bg-neutral-950 aspect-video border border-neutral-900">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
                <div className="flex justify-between items-start pt-2">
                  <div>
                    <h4 className="text-sm font-medium tracking-wide uppercase">
                      {project.title}
                    </h4>
                    <p className="text-xs text-neutral-500 text-left">
                      {project.category}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-neutral-600">
                    {project.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-neutral-900 pt-16 flex flex-col items-center text-center">
          <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-6">
            About Me
          </h3>
          <p className="text-neutral-400 max-w-2xl text-sm leading-relaxed">
            Ganti pake cerita singkat lu di sini, bro. Desain minimalis ini
            sengaja dibikin biar fokus utama pengunjung langsung tertuju ke
            tulisan dan karya-karya lu.
          </p>
        </section>
        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-neutral-900 pt-16 space-y-8">
          <div className="flex justify-between items-end border-b border-neutral-900 pb-4">
            <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Connect With Me
            </h3>
            <span className="text-[10px] text-neutral-600 font-mono">
              Let's build something great
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* GITHUB */}
            <a
              href="https://github.com/haqqihanum4-dot"
              target="_blank"
              rel="noreferrer"
              className="group border border-neutral-950 p-6 flex flex-col justify-between h-32 hover:border-neutral-700 transition-all duration-500 bg-neutral-950/40 hover:bg-neutral-950">
              <span className="text-[10px] text-neutral-600 uppercase tracking-widest font-mono">
                01 / Repository
              </span>
              <div className="flex justify-between items-center w-full">
                <span className="text-sm font-medium tracking-wide uppercase">
                  GitHub
                </span>
                <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-neutral-600 group-hover:text-white">
                  ↗
                </span>
              </div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/username_lu"
              target="_blank"
              rel="noreferrer"
              className="group border border-neutral-950 p-6 flex flex-col justify-between h-32 hover:border-neutral-700 transition-all duration-500 bg-neutral-950/40 hover:bg-neutral-950">
              <span className="text-[10px] text-neutral-600 uppercase tracking-widest font-mono">
                02 / Network
              </span>
              <div className="flex justify-between items-center w-full">
                <span className="text-sm font-medium tracking-wide uppercase">
                  LinkedIn
                </span>
                <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-neutral-600 group-hover:text-white">
                  ↗
                </span>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:email_kamu@gmail.com"
              className="group border border-neutral-950 p-6 flex flex-col justify-between h-32 hover:border-neutral-700 transition-all duration-500 bg-neutral-950/40 hover:bg-neutral-950">
              <span className="text-[10px] text-neutral-600 uppercase tracking-widest font-mono">
                03 / Inquiries
              </span>
              <div className="flex justify-between items-center w-full">
                <span className="text-sm font-medium tracking-wide uppercase">
                  Email
                </span>
                <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-neutral-600 group-hover:text-white">
                  ↗
                </span>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/6287872464896?text=Halo,%20saya%20tertarik%20dengan%20portofolio%20Anda"
              target="_blank"
              rel="noreferrer"
              className="group border border-neutral-950 p-6 flex flex-col justify-between h-32 hover:border-neutral-700 transition-all duration-500 bg-neutral-950/40 hover:bg-neutral-950">
              <span className="text-[10px] text-neutral-600 uppercase tracking-widest font-mono">
                04 / Instant Message
              </span>
              <div className="flex justify-between items-center w-full">
                <span className="text-sm font-medium tracking-wide uppercase">
                  WhatsApp
                </span>
                <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-neutral-600 group-hover:text-white">
                  ↗
                </span>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full text-[10px] text-neutral-600 uppercase tracking-widest border-t border-neutral-950 px-8 md:px-16 py-6 flex justify-between items-center">
        <p>© 2026 Crafted by Lu</p>
        <p>Driven by Minimalism</p>
      </footer>
    </div>
  );
}

export default App;
