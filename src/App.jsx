import React, { useState, useEffect } from "react";

function App() {
  // STATE scroll & menu
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // STATE buat modal project
  const [selectedProject, setSelectedProject] = useState(null);

  // STATE buat nampilin semua project atau cuma preview
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ==================== DATA PROJECT (bisa lo tambahin terus) ====================
  const allProjects = [
    {
      id: 1,
      title: "Dashboard pencatatan sekolah",
      category: "Web Development",
      year: "2026",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      description:
        "Platform pencatatan nilai dan kehadiran siswa berbasis web dengan fitur export laporan Excel, grafik performa kelas, dan role management (guru, admin, wali murid).",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
        "Chart.js",
      ],
      demoLink: "https://example.com/demo-sekolah",
      githubLink: "https://github.com/haqqihanum4-dot/school-dashboard",
    },
    {
      id: 2,
      title: "CHIRON DIGITAL",
      category: "UI/UX Design",
      year: "2025",
      img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
      description:
        "Desain antarmuka untuk startup teknologi kesehatan. Meliputi wireframe, prototyping interaktif di Figma, dan sistem desain komponen yang reusable.",
      techStack: ["Figma", "Adobe XD", "Tailwind CSS", "Storybook"],
      demoLink: "https://www.figma.com/file/example",
      githubLink: "#",
    },
    {
      id: 3,
      title: "E-Commerce Sneakers",
      category: "Fullstack App",
      year: "2025",
      img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop",
      description:
        "Toko sepatu online dengan fitur keranjang, wishlist, pembayaran midtrans, dan dashboard admin untuk kelola produk.",
      techStack: ["Next.js", "Tailwind", "Node.js", "PostgreSQL", "Midtrans"],
      demoLink: "https://demo-sneakers.com",
      githubLink: "https://github.com/haqqihanum4-dot/sneakers-ecommerce",
    },
    {
      id: 4,
      title: "Portfolio Generator",
      category: "Tool",
      year: "2024",
      img: "https://images.unsplash.com/photo-1545235617-7a424c1a60cb?q=80&w=800&auto=format&fit=crop",
      description:
        "Web app yang memungkinkan developer membuat portofolio instan dengan drag-and-drop. Generate HTML/CSS siap deploy.",
      techStack: ["React", "Redux", "Tailwind", "LocalStorage"],
      demoLink: "#",
      githubLink: "https://github.com/haqqihanum4-dot/portfolio-gen",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      category: "API Integration",
      year: "2024",
      img: "https://images.unsplash.com/photo-1592210454359-904b4b2c0b3f?q=80&w=800&auto=format&fit=crop",
      description:
        "Aplikasi cuaca real-time dengan peta interaktif dan prediksi 7 hari ke depan. Menggunakan OpenWeatherMap API.",
      techStack: ["JavaScript", "Leaflet.js", "Tailwind", "Axios"],
      demoLink: "https://weather-demo.com",
      githubLink: "https://github.com/haqqihanum4-dot/weather-dash",
    },
  ];

  // Berapa project yang tampil di mode preview (featured)
  const PREVIEW_COUNT = 2; // lo bisa ganti jadi 3, 4, dsb sesuai selera
  const displayedProjects = showAllProjects
    ? allProjects
    : allProjects.slice(0, PREVIEW_COUNT);

  // Fungsi modal
  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-white selection:text-black">
      {/* ========== NAVBAR (SAMA PERSIS KAYA SEBELUMNYA) ========== */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-8 md:px-16 transition-all duration-500 ease-in-out ${
          isScrolled || isMenuOpen
            ? "py-2 bg-black/90 backdrop-blur-md border-b border-neutral-900/50"
            : "py-8 bg-transparent border-b border-transparent"
        }`}>
        <div className="flex justify-between items-center w-full">
          <h1 className="text-sm font-bold tracking-[0.3em] uppercase">
            PORTO.LU
          </h1>
          <nav className="hidden md:flex space-x-6 text-xs uppercase tracking-widest text-neutral-400">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#credentials" className="hover:text-white transition">
              Skills & Certs
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-neutral-400">
            {isMenuOpen ? (
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
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen
              ? "max-h-64 opacity-100 pt-6"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}>
          <nav className="flex flex-col space-y-4 text-xs uppercase tracking-widest text-neutral-400 pb-2">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-white">
              Home
            </a>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-white">
              Projects
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-white">
              About
            </a>
            <a
              href="#credentials"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-white">
              Skills & Certs
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl w-full mx-auto px-8 md:px-16 space-y-40 pt-32 pb-20 flex-1">
        {/* HERO SECTION (sama kayak sebelumnya) */}
        <section
          id="home"
          className="relative space-y-8 pt-16 md:pt-28 min-h-[75vh] flex flex-col justify-center items-start text-left overflow-hidden">
          <div className="absolute top-1/3 left-0 -z-10 w-72 h-72 bg-neutral-900/40 rounded-full blur-[130px] pointer-events-none" />
          <div className="inline-flex items-center gap-2.5 border border-neutral-800 bg-neutral-950/60 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-mono">
              Available for full-time / projects
            </p>
          </div>
          <div className="space-y-4 max-w-4xl text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 font-semibold">
              Haqqi Hanum — Based in Indonesia
            </p>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-tight leading-[1.05] uppercase">
              Crafting Clean <br />
              <span className="font-normal text-neutral-400">Code </span>
              <span className="font-serif italic text-neutral-500 lowercase font-medium">
                &
              </span>{" "}
              Minimal <br />
              <span className="font-semibold tracking-tighter bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                Interfaces.
              </span>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-xl text-sm md:text-base leading-relaxed font-light">
            Saya Frontend Developer fokus performa tinggi, slicing desain
            presisi, dan kode rapi. Mengubah kompleksitas jadi pengalaman
            digital intuitif.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] bg-white text-black font-medium px-6 py-3.5 hover:bg-neutral-200 transition">
              View My Work{" "}
              <span className="transform group-hover:translate-x-1.5 transition">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] border border-neutral-800 px-6 py-3.5 text-neutral-400 hover:border-neutral-500 hover:text-white transition">
              Let's Talk
            </a>
          </div>
        </section>

        {/* ==================== SECTION PROJECTS DENGAN FITUR "VIEW ALL" ==================== */}
        <section id="projects" className="space-y-12 scroll-mt-24">
          <div className="flex justify-between items-end border-b border-neutral-900 pb-4">
            <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              {showAllProjects ? "All Projects" : "Selected Works"}
            </h3>
            <span className="text-[10px] text-neutral-600 font-mono">
              {displayedProjects.length} / {allProjects.length}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openModal(project)}
                className="group cursor-pointer space-y-4">
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
                    <p className="text-xs text-neutral-400">
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

          {/* TOMBOL VIEW ALL / SHOW LESS */}
          <div className="flex justify-center pt-6">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] border border-neutral-800 px-6 py-3 text-neutral-400 hover:border-neutral-500 hover:text-white transition-all duration-300">
              {showAllProjects ? (
                <>← Show Less Projects</>
              ) : (
                <>View All Projects ({allProjects.length}) →</>
              )}
            </button>
          </div>
        </section>

        {/* ========== ABOUT, SKILLS, CONTACT (SAMA PERSIS SEPERTI SEBELUMNYA) ========== */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-neutral-900 pt-16">
          <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-6">
            About Me
          </h3>
          <p className="text-neutral-400 max-w-2xl text-sm leading-relaxed">
            Saya frontend developer dengan pengalaman magang di Gamelab
            Indonesia. Fokus pada React, Tailwind, dan desain minimalis. Kode
            bersih = pengalaman pengguna luar biasa.
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
            <a
              href="https://github.com/haqqihanum4-dot"
              target="_blank"
              className="group border border-neutral-950 p-6 h-32 hover:border-neutral-700 transition bg-neutral-950/40">
              <span className="text-[10px] text-neutral-600">
                01 / Repository
              </span>
              <div className="flex justify-between mt-8">
                <span className="text-sm uppercase">GitHub</span>
                <span className="group-hover:translate-x-1 transition">↗</span>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/username_lu"
              target="_blank"
              className="group border border-neutral-950 p-6 h-32 hover:border-neutral-700 transition bg-neutral-950/40">
              <span className="text-[10px] text-neutral-600">02 / Network</span>
              <div className="flex justify-between mt-8">
                <span className="text-sm uppercase">LinkedIn</span>
                <span className="group-hover:translate-x-1 transition">↗</span>
              </div>
            </a>
            <a
              href="mailto:email_kamu@gmail.com"
              className="group border border-neutral-950 p-6 h-32 hover:border-neutral-700 transition bg-neutral-950/40">
              <span className="text-[10px] text-neutral-600">
                03 / Inquiries
              </span>
              <div className="flex justify-between mt-8">
                <span className="text-sm uppercase">Email</span>
                <span className="group-hover:translate-x-1 transition">↗</span>
              </div>
            </a>
            <a
              href="https://wa.me/6287872464896?text=Halo"
              target="_blank"
              className="group border border-neutral-950 p-6 h-32 hover:border-neutral-700 transition bg-neutral-950/40">
              <span className="text-[10px] text-neutral-600">
                04 / Instant Message
              </span>
              <div className="flex justify-between mt-8">
                <span className="text-sm uppercase">WhatsApp</span>
                <span className="group-hover:translate-x-1 transition">↗</span>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* MODAL PROJECT (sama kaya sebelumnya) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={closeModal}>
          <div
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-black border border-neutral-800"
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-neutral-500 hover:text-white">
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
            </button>
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-light uppercase tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {selectedProject.category} • {selectedProject.year}
                </p>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] border border-neutral-800 px-2 py-1 text-neutral-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                {selectedProject.demoLink &&
                  selectedProject.demoLink !== "#" && (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      className="text-xs uppercase bg-white text-black px-5 py-2.5 hover:bg-neutral-200 transition">
                      Live Demo →
                    </a>
                  )}
                {selectedProject.githubLink &&
                  selectedProject.githubLink !== "#" && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      className="text-xs uppercase border border-neutral-700 px-5 py-2.5 text-neutral-300 hover:border-white transition">
                      GitHub
                    </a>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="w-full text-[10px] text-neutral-600 uppercase tracking-widest border-t border-neutral-950 px-8 md:px-16 py-6 flex justify-between">
        <p>© 2026 Crafted by Lu</p>
        <p>Driven by Minimalism</p>
      </footer>
    </div>
  );
}

export default App;
