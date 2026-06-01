import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Tetap dibiarkan jika sewaktu-waktu lu butuh

function App() {
  // 1. STATE: Buat ngingat apakah layar udah di-scroll atau belum
  const [isScrolled, setIsScrolled] = useState(false);

  // TAMBAHAN STATE: Buat pemicu buka-tutup hamburger menu di Android/HP
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {/* ==================== SEKSI NAVBAR MODIFIKASI ==================== */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-8 md:px-16 transition-all duration-500 ease-in-out ${
          isScrolled || isMenuOpen
            ? "py-2 bg-black/90 backdrop-blur-md border-b border-neutral-900/50"
            : "py-8 bg-transparent border-b border-transparent"
        }`}>
        {/* Baris Utama Logo + Menu */}
        <div className="flex justify-between items-center w-full">
          <h1 className="text-sm font-bold tracking-[0.3em] uppercase">
            PORTO.LU
          </h1>

          {/* MENU DESKTOP: Sekarang dikasih 'hidden md:flex' biar otomatis ngumpet pas di layar HP */}
          <nav className="hidden md:flex space-x-6 text-xs uppercase tracking-widest text-neutral-400">
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
              href="#credentials"
              className="hover:text-white transition-colors duration-300">
              Skills & Certs
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* TOMBOL HAMBURGER: Cuma muncul di layar HP / Android ('md:hidden') */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-neutral-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Menu">
            {isMenuOpen ? (
              // Icon Silang (X) yang elegan saat menu terbuka
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Icon Garis Tiga Minimalis saat menu tertutup
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* MENU DROPDOWN MOBILE: Meluncur halus ke bawah pakai animasi transisi */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen
              ? "max-h-64 opacity-100 pt-6"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}>
          <nav className="flex flex-col space-y-4 text-xs uppercase tracking-widest text-neutral-400 pb-2">
            {/* Setiap link dikasih onClick={() => setIsMenuOpen(false)} supaya dropdown menutup otomatis begitu menunya di-klik */}
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-white transition-colors duration-300">
              Home
            </a>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-white transition-colors duration-300">
              Projects
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-white transition-colors duration-300">
              About
            </a>
            <a
              href="#credentials"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-white transition-colors duration-300">
              Skills & Certs
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-white transition-colors duration-300">
              Contact
            </a>
          </nav>
        </div>
      </header>
      {/* ==================== AKHIR SEKSI NAVBAR ==================== */}

      {/* MAIN CONTENT */}
      <main className="max-w-5xl w-full mx-auto px-8 md:px-16 space-y-40 pt-32 pb-20 flex-1">
        {/* ==================== HERO SECTION UPGRADED ==================== */}
        <section
          id="home"
          className="relative space-y-8 pt-16 md:pt-28 min-h-[75vh] flex flex-col justify-center items-start text-left overflow-hidden">
          {/* Efek Pendaran Cahaya Halus di Background (RAM Friendly, No Lagging) */}
          <div className="absolute top-1/3 left-0 -z-10 w-72 h-72 bg-neutral-900/40 rounded-full blur-[130px] pointer-events-none" />

          {/* Indikator Status Aktif (Blinking Badge) */}
          <div className="inline-flex items-center gap-2.5 border border-neutral-800 bg-neutral-950/60 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-mono">
              Available for full-time / projects
            </p>
          </div>

          {/* Nama & Tipografi Judul Utama - Pakai text-left */}
          <div className="space-y-4 max-w-4xl text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 font-semibold text-left">
              Haqqi Hanum — Based in Indonesia
            </p>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-tight leading-[1.05] uppercase text-left">
              Crafting Clean <br />
              <span className="font-normal text-neutral-400">Code </span>
              <span className="font-serif italic text-neutral-500 lowercase font-medium">
                &
              </span>{" "}
              Minimal <br />
              <span className="font-semibold tracking-tighter text-white bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                Interfaces.
              </span>
            </h2>
          </div>

          {/* Deskripsi Singkat Singkat & Padat - Pakai text-left */}
          <p className="text-neutral-400 max-w-xl text-sm md:text-base leading-relaxed font-light text-left">
            Saya adalah Frontend Developer yang berfokus pada performa tinggi,
            slicing desain yang presisi, serta arsitektur kode yang rapi.
            Mengubah kompleksitas menjadi pengalaman digital yang intuitif.
          </p>

          {/* Pasangan Tombol Call to Action (CTA) */}
          <div className="pt-2 flex flex-wrap gap-4 items-center justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] bg-white text-black font-medium px-6 py-3.5 hover:bg-neutral-200 transition-all duration-300">
              View My Work
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] border border-neutral-800 px-6 py-3.5 text-neutral-400 hover:border-neutral-500 hover:text-white transition-all duration-300">
              Let's Talk
            </a>
          </div>
        </section>
        {/* ==================== AKHIR HERO SECTION UPGRADED ==================== */}

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
                    <p className="text-xs text-neutral-400 text-left">
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
          className="scroll-mt-24 border-t border-neutral-900 pt-16 flex flex-col items-left text-left">
          <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-6 text-left">
            About Me
          </h3>
          <p className="text-neutral-400 max-w-2xl text-sm leading-relaxed">
            Ganti pake cerita singkat lu di sini, bro. Desain minimalis ini
            sengaja dibikin biar fokus utama pengunjung langsung tertuju ke
            tulisan dan karya-karya lu.
          </p>
        </section>

        {/* SKILLS & CERTIFICATES SECTION */}
        <section
          id="credentials"
          className="scroll-mt-24 border-t border-neutral-900 pt-16 space-y-20">
          {/* SUB-SECTION: TECH STACK */}
          <div className="space-y-8">
            <div className="flex justify-between items-end border-b border-neutral-900 pb-4">
              <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Capabilities
              </h3>
              <span className="text-[10px] text-neutral-600 font-mono">
                My Tech Stack & Expertise
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* SKILL 1: JAVASCRIPT */}
              <div className="border border-neutral-950 p-6 bg-neutral-950/20 hover:border-neutral-800 hover:bg-neutral-950/60 transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                      className="w-6 h-6 grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200">
                      JavaScript (ES6+)
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Menguasai logika dasar hingga tingkat lanjut, manipulasi
                    DOM, pemrosesan data Array/Object, serta pemrograman
                    asynchronous (Fetch API / Axios).
                  </p>
                </div>
              </div>

              {/* SKILL 2: REACT */}
              <div className="border border-neutral-950 p-6 bg-neutral-950/20 hover:border-neutral-800 hover:bg-neutral-950/60 transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React"
                      className="w-6 h-6 grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200">
                      React.js
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Bisa membangun aplikasi web Single Page Application (SPA)
                    yang dinamis, menerapkan konsep reusable components, React
                    Hooks, dan efisiensi state management.
                  </p>
                </div>
              </div>

              {/* SKILL 3: TAILWIND CSS */}
              <div className="border border-neutral-950 p-6 bg-neutral-950/20 hover:border-neutral-800 hover:bg-neutral-950/60 transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                      alt="Tailwind CSS"
                      className="w-6 h-6 grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200">
                      Tailwind CSS
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Mampu melakukan slicing desain UI (dari Figma) menjadi kode
                    web yang presisi, responsive (mobile-first), dengan
                    penulisan utility classes yang rapi.
                  </p>
                </div>
              </div>

              {/* SKILL 4: NODE.JS */}
              <div className="border border-neutral-950 p-6 bg-neutral-950/20 hover:border-neutral-800 hover:bg-neutral-950/60 transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                      alt="Node.js"
                      className="w-6 h-6 grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200">
                      Node & Express
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Bisa membuat server backend dengan arsitektur RESTful API,
                    mengelola routing, sistem middleware, serta menangani proses
                    autentikasi dasar.
                  </p>
                </div>
              </div>

              {/* SKILL 5: GIT & GITHUB */}
              <div className="border border-neutral-950 p-6 bg-neutral-950/20 hover:border-neutral-800 hover:bg-neutral-950/60 transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                      alt="Git"
                      className="w-6 h-6 grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200">
                      Version Control
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Terbiasa menggunakan Git untuk manajemen versi kode, proses
                    pencabangan (branching), dokumentasi commit yang rapi, dan
                    kolaborasi via GitHub.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SERTIFIKAT GAMELAB - FRONTEND */}
          <div className="py-5 flex justify-between items-start group text-left">
            <div>
              <h4 className="text-sm font-medium text-white group-hover:text-neutral-400 transition-colors duration-300">
                Industrial Internship / PKL — Frontend Web Developer
              </h4>
              <p className="text-xs text-neutral-500 mt-1">
                Gamelab Indonesia — 2025
              </p>
              <p className="text-[11px] text-neutral-400 mt-2 max-w-xl leading-relaxed">
                Sertifikasi kompetensi atas penyelesaian program magang industri
                secara intensif. Berhasil menyelesaikan proyek berbasis web
                dengan fokus pada implementasi logika JavaScript, *responsive
                design*, serta penerapan *Git version control* sesuai standar
                industri.
              </p>
            </div>
            <a
              href="public/certificate/sertifikat.png"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-neutral-500 hover:text-white flex items-center gap-1 font-mono transition-colors duration-300 pt-1">
              VERIFY{" "}
              <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                ↗
              </span>
            </a>
          </div>
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
