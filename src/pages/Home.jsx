import React, { useState } from "react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "My Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "JavaScript (ES6+)",
        "HTML5 / CSS3",
      ],
    },
    {
      title: "Backend & Database",
      skills: ["PHP (Laravel)", "MySQL", "RESTful APIs", "MVC Architecture"],
    },
    {
      title: "Mobile & Ecosystem",
      skills: ["React Native", "Expo Ecosystem", "Offline Storage / SQLite"],
    },
  ];

  const services = [
    {
      title: "Frontend Development",
      description:
        "Building highly responsive, fast, and interactive user interfaces using React.js and modern utility-first CSS frameworks.",
      icon: "⚛️",
    },
    {
      title: "Backend & APIs",
      description:
        "Designing secure, scalable server architecture, RESTful routing, and optimized databases using PHP Laravel and MySQL.",
      icon: "🛠️",
    },
    {
      title: "Mobile Apps",
      description:
        "Developing cross-platform applications targeted for mobile and tablet devices using React Native ecosystems.",
      icon: "📱",
    },
    {
      title: "CMS & Integrations",
      description:
        "Creating lightweight alternative backend systems, handling dynamic data through efficient third-party API solutions.",
      icon: "📊",
    },
  ];

  const projects = [
    {
      title: "School Management System (SMS)",
      category: "Web Apps",
      role: "Full-Stack Developer",
      tech: ["PHP Laravel", "MySQL", "Bootstrap", "AJAX"],
      image: "sms.png",
      desc: "A comprehensive enterprise infrastructure tailored to streamline educational administration, managing student lifecycles, institutional assets, academic scheduling, and multi-role operations.",
      longDesc:
        "An all-in-one campus logistics platform featuring automated fee tracking, payroll, teacher allocations, and dynamic classroom assignments. This expanded version integrates an automated Timetable engine with collision detection, full Exam & Grading management, and an end-of-year Student Promotion workflow. It includes Fixed Asset Management for tracking campus property, an advanced multi-role User Management system with granular permissions, and a real-time Check-In/Out Attendance tracker. Additionally, a specialized CPR Management module tracks health compliance, first-aid certifications, and emergency response readiness across campus staff.",
    },
    {
      title: "NFPE Management System",
      category: "Web Apps",
      role: "Full-Stack Developer",
      tech: [
        "PHP Laravel",
        "MySQL",
        "Tailwind CSS",
        "Alpine.js",
        "Laravel Excel (Maatwebsite)",
        "Chart.js",
      ],
      image: "nfpe.png",
      desc: "A specialized, regional information system built to track non-formal primary education analytics, student data migration, and macro-level administrative metrics.",
      longDesc:
        "An administrative web platform designed to capture granular demographic metrics for non-traditional education paths across hierarchical regional setups (States, Districts, and Townships). Features a robust data migration engine supporting large-scale Excel imports and exports for seamless student data transitions between academic years. Includes an advanced reporting module with dynamic data filtering, Chart.js visualizations for program coordinators, and optimized print layouts (PDF/Print) for generating clean, localized administrative summaries and statistical breakdowns.",
    },
    {
      title: "Ace Japan",
      category: "Website",
      role: "Frontend Developer",
      tech: ["React.js", "Tailwind CSS", "i18n"],
      image: "aceJapan.png",
      link: "https://acejapan-ltd.com/",
      desc: "A professional corporate web portal for Ace Japan, designed to showcase comprehensive IT business solutions, including outsourcing, system development, and HR support services.",
      longDesc:
        "Developed a high-performance, responsive front-end interface to represent Ace Japan’s service portfolio. The site is optimized for internationalization (i18n) to support cross-border business operations. It features clean, modular UI components that highlight key service pillars such as offshore/nearshore system development, system maintenance, and recruitment services, while maintaining a polished, professional aesthetic tailored to high-standard enterprise expectations.",
    },
    {
      title: "MMI Invest",
      category: "CMS",
      role: "Frontend & Architect",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Google Sheets API",
        "EmailJS",
        "Google Drive API",
      ],
      image: "MMInvest.png",
      link: "https://mm-invest-website.vercel.app/",
      desc: "A clever serverless architectural approach where structural client metrics are directly managed via a secure Google Sheets setup.",
      longDesc:
        "Eliminated heavyweight database overhead by turning a secure Google Sheets instance into a production-ready CMS. Client financial layouts load instantly using localized state handling and direct API pipelines.",
    },
    {
      title: "RITA Japan",
      category: "Web Apps",
      role: "Web Developer",
      tech: ["React.js", "Tailwind CSS"],
      status: "In Progress",
      image: "Rita.png",
      link: "https://tst-website.ritaitsolutionmyanmar.com/",
      desc: "A modern localization web portal engineered around high aesthetic UI design and fast route execution.",
      longDesc:
        "Currently designing a highly stylized, aesthetic portal intended to present seamless information architecture. Focused strictly on asset optimization, layout performance, and fluid micro-interactions.",
    },
    {
      title: "MOB Banking Platform",
      category: "CMS",
      role: "Frontend Developer",
      tech: ["React.js", "Bootstrap"],
      status: "In Progress",
      image:
        "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80",
      desc: "A highly secure, structurally responsive CMS corporate hub tailored specifically for clear navigational flow in the banking sector.",
      longDesc:
        "Re-engineered standard financial content patterns into a tightly secured, multi-tier navigation layout. Ensures clear user accessibility pathways while adhering strictly to sector specific visibility guidelines.",
    },
    {
      title: "Integrated Mobile POS System",
      category: "Mobile & Tablet",
      role: "Solo Creator",
      tech: ["React Native", "Expo", "Tailwind CSS"],
      image: "POS.png",
      desc: "A comprehensive point-of-sale platform providing an end-to-end business management suite across mobile and tablet devices, from product catalog to final analytics.",
      longDesc:
        "A complete business command center designed for efficiency, shown here as an integrated platform. This module features a dynamic product catalog for order building and instant checkout. It includes powerful operational tools like a digital barcode manager with label printing, shift setup with staff management controls, and real-time continuous scanning. A robust financial dashboard provides instant insights into revenue trends and cash drawer audits, all optimized with a clean UI via React Native and Tailwind CSS.",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-40 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Zin Pwint Phyu
            </span>
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  {item.name}
                </a>
              ))}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-400 hover:text-white">
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-900 px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-400 hover:text-cyan-400">
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[85vh] flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-6 border border-cyan-500/20">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />{" "}
            Ready to Build
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
            Crafting Seamless Digital Experiences from{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Frontend to Backend.
            </span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Hi, I am a Web Developer specializing in{" "}
            <strong className="text-slate-200">React.js</strong> and{" "}
            <strong className="text-slate-200">PHP/Laravel</strong>. I focus on
            engineering high-fidelity interfaces while deploying reliable,
            structure-driven backend platforms.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#works"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-all transform hover:-translate-y-0.5">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-lg transition-all">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">The Journey So Far</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I initiated my technology career path directly within{" "}
                <strong className="text-slate-200">IT Support</strong>{" "}
                workflows. While diagnosing infrastructural hardware and
                configurations was highly informative, I realized my true
                professional trajectory belonged within pure development cycles.
                I wanted to build solutions rather than troubleshoot existing
                ones.
              </p>
              <p>
                For nearly <strong className="text-slate-200">two years</strong>
                , I have worked stably as a full-time web developer. My core
                focus revolves around deploying applications with clean UI code
                inside the{" "}
                <strong className="text-slate-200">React ecosystem</strong>,
                balanced seamlessly with structured MVC operations using{" "}
                <strong className="text-slate-200">Laravel</strong> when backend
                processing calls for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Skills Section */}
      <section
        id="skills"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Technical Stack & Expertises
          </h2>
          <p className="text-slate-400">
            A structured breakdown of language architectures and frameworks I
            run daily.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl">
              <h3 className="text-base font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3 bg-cyan-500 rounded-sm" />
                {cat.title}
              </h3>
              <div className="flex flex-col gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between px-3 py-2 bg-slate-950 rounded-lg border border-slate-850 text-sm text-slate-300 font-mono">
                    {skill}
                    <span className="text-[10px] uppercase bg-slate-900 px-1.5 py-0.5 rounded text-slate-500">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What I Bring to the Table</h2>
          <p className="text-slate-400">
            Engineered strategies designed to handle projects from concept phase
            down to deployment metrics.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv) => (
            <div
              key={srv.title}
              className="p-6 rounded-xl bg-slate-900/20 border border-slate-900 hover:border-slate-800 transition-all group">
              <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform">
                {srv.icon}
              </span>
              <h3 className="text-lg font-semibold mb-2 text-slate-200">
                {srv.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {srv.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Works Gallery Section */}
      <section
        id="works"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-3">Selected Projects</h2>
            <p className="text-slate-400">
              A structured window into systems I have built or actively
              maintain. Click on any item to view detailed layouts.
            </p>
          </div>
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 bg-slate-950 p-1.5 rounded-lg border border-slate-900 self-start md:self-auto">
            {["All", "Web Apps", "CMS", "Mobile"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-cyan-500 text-slate-950 font-semibold shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Dynamic Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="flex flex-col bg-slate-950 border border-slate-900 rounded-xl overflow-hidden hover:border-cyan-500/40 hover:scale-[1.01] transition-all cursor-pointer group">
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    {project.category}
                  </span>
                  {project.status ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {project.status}
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">
                      View Details →
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 mb-4 font-medium">
                  Role: {project.role}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {project.desc}
                </p>
              </div>
              <div className="px-6 py-4 bg-slate-900/40 border-t border-slate-900 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] rounded bg-slate-900 text-slate-400 border border-slate-850">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Details Modal Pop-Up */}
      {selectedProject && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl my-auto">
            {/* Modal Image Wrapper */}
            <div className="relative h-64 sm:h-80 bg-slate-950 border-b border-slate-800 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover opacity-80"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/80 text-slate-400 hover:text-white flex items-center justify-center border border-slate-800 text-lg transition-colors">
                ✕
              </button>
              <div className="absolute bottom-4 left-4 bg-slate-950/90 border border-slate-800 px-3 py-1 rounded-md text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {selectedProject.category}
              </div>
            </div>

            {/* Modal Contents */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-100">
                  {selectedProject.title}
                </h3>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
                  {selectedProject.role}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Project Overview
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {selectedProject.desc}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {selectedProject.longDesc}
                </p>
              </div>

              <div className="border-t border-slate-800/60 pt-5">
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">
                  Technologies Stack Integration
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded-md bg-slate-950 text-slate-300 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end items-center gap-3">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-slate-950 text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/10">
                    Visit Live Site
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-colors">
                  Close Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-xl mx-auto bg-slate-900/30 p-8 rounded-2xl border border-slate-900">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Let's Build Together
          </h2>
          <p className="text-sm text-slate-400 text-center mb-8">
            Whether you want to audit a frontend prototype, scale dynamic
            Laravel solutions, or plan system migrations—send a message.
          </p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-slate-950 border border-slate-850 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500 text-slate-200 transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-slate-950 border border-slate-850 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500 text-slate-200 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Message Body
              </label>
              <textarea
                rows={4}
                className="w-full bg-slate-950 border border-slate-850 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500 text-slate-200 transition-colors resize-none"
                placeholder="Project details or questions..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold text-sm rounded-lg transition-colors shadow-lg">
              Send Secure Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-900 text-center text-xs text-slate-600">
        &copy; {new Date().getFullYear()} Developer Portfolio. All Rights
        Reserved. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}
