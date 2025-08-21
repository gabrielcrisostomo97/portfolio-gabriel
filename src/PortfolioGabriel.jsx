import React from "react";
import { Menu, X } from "lucide-react"
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase } from "lucide-react";


function App() {
  return (
    <div>
      <h1> Portfólio Gabriel </h1>
    </div>
  );
}


          export default function PortfolioGabriel() {
          const [menuOpen, setMenuOpen] = useState(false);
          const projects = useMemo(() => [
          {
            title: "Projeto Cordel",
            desc: "Site temático em HTML e CSS.",
            link: "https://github.com/gabrielcrisostomo97/projeto-cordel"
          },
          {
            title: "Projeto Android",
            desc: "Página informativa em HTML/CSS.",
            link: "https://github.com/gabrielcrisostomo97/projeto-android"
          },
          {
            title: "Projeto Login",
            desc: "Tela de login responsiva.",
            link: "https://github.com/gabrielcrisostomo97/projeto-login"
          },
          {
            title: "Projeto Rocketseat",
            desc: "Layout com CSS.",
            link: "https://github.com/gabrielcrisostomo97/projeto-rocketseat"
          }
          ], []);

          const skills = [
          "HTML5", "CSS3", "JavaScript (básico)", "Git", "GitHub", "Responsividade", "Acessibilidade"
          ];

          return (
          <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <header >
              className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800"
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-lg tracking-wide">Gabriel Crisostomo</span>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#sobre" className="hover:opacity-80">Sobre</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#projetos" className="hover:opacity-80">Projetos</a>
            <a href="#contato" className="hover:opacity-80">Contato</a>
          </nav>

          {/* Botão do menu mobile */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-800 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="md:hidden bg-neutral-900 border-t border-neutral-800">
            <nav className="flex flex-col px-6 py-4 space-y-3 text-sm">
              <a href="#sobre" className="hover:opacity-80" onClick={() => setMenuOpen(false)}>Sobre</a>
              <a href="#skills" className="hover:opacity-80" onClick={() => setMenuOpen(false)}>Skills</a>
              <a href="#projetos" className="hover:opacity-80" onClick={() => setMenuOpen(false)}>Projetos</a>
              <a href="#contato" className="hover:opacity-80" onClick={() => setMenuOpen(false)}>Contato</a>
            </nav>
            </div>
               )}
            </header>

            <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    Desenvolvedor <span className="text-blue-400">Front‑End</span> Júnior
                  </h1>
                  <p className="mt-4 text-neutral-300 leading-relaxed">
                    Estudante de Análise e Desenvolvimento de Sistemas, focado em desenvolvimento Front‑End, apaixonado por tecnologia e em busca da primeira oportunidade na área.
                    Esforçado, empático, bem‑humorado, de aprendizado rápido, trago leveza ao ambiente e tenho perfil de liderança.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="https://github.com/gabrielcrisostomo97" target="_blank" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-neutral-800 hover:bg-neutral-700 transition">
                      <Github className="w-4 h-4"/> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/gabriel-crisostomo/" target="_blank" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-neutral-800 hover:bg-neutral-700 transition">
                      <Linkedin className="w-4 h-4"/> LinkedIn
                    </a>
                    <a href="mailto:biel.cristian@hotmail.com" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-blue-600 hover:bg-blue-500 transition">
                      <Mail className="w-4 h-4"/> Entrar em contato
                    </a>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                  <div className="rounded-3xl p-6 bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-lg">
                    <div className="grid grid-cols-3 gap-3">
                      {skills.slice(0,6).map((s) => (
                        <div key={s} className="rounded-2xl border border-neutral-700 px-3 py-4 text-center text-sm">
                          {s}
                        </div>
                      ))}
                      <div className="rounded-2xl border border-neutral-700 px-3 py-4 text-center text-sm">A aprender: React</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            <section id="sobre" className="max-w-6xl mx-auto px-6 py-12">
              <div className="grid md:grid-cols-3 gap-8">
          {/* Card Sobre mim */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow-lg hover:scale-105 hover:shadow-blue-500/20 transition-transform"
          >
            <h2 className="text-2xl font-bold mb-3">Sobre mim</h2>
            <p className="text-neutral-300 leading-relaxed">
              Moro em Fortaleza – CE. Sou dedicado e curioso, gosto de transformar ideias em interfaces funcionais e acessíveis.
              Busco minha primeira oportunidade como Desenvolvedor Front-End Júnior.
            </p>
          </motion.div>

          {/* Card Interesses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow-lg hover:scale-105 hover:shadow-blue-500/20 transition-transform"
          >
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-400"/> Interesses
            </h3>
            <ul className="text-sm text-neutral-300 space-y-2 list-disc list-inside">
              <li>Interfaces responsivas e acessíveis</li>
              <li>Boas práticas com Git</li>
              <li>Aprendizado contínuo em JavaScript/React</li>
            </ul>
          </motion.div>
              </div>
          </section>

            <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold mb-6">Habilidades</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-lg hover:scale-105 hover:shadow-blue-500/20 transition-transform"
            >
              <Code2 className="w-6 h-6 text-blue-400" />
              <span className="text-sm font-medium">{s}</span>
            </motion.div>
          ))}
              </div>    
            </section>

            <section id="projetos" className="max-w-6xl mx-auto px-6 py-12">
              <h2 className="text-2xl font-bold mb-6">Projetos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-2xl shadow-lg p-6 border border-neutral-800 hover:scale-105 hover:shadow-blue-500/20 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-neutral-300 mb-4">{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
              >
                Ver no GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </motion.article>
          ))}
          </div>
            </section>

            <section id="contato" className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow-lg hover:scale-105 hover:shadow-blue-500/20 transition-transform"
          >
          <h2 className="text-2xl font-bold mb-3">Contato</h2>
          <p className="text-neutral-300 mb-6">
            Aberto a oportunidades como Desenvolvedor Front-End Júnior em Fortaleza/Remoto.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href="mailto:biel.cristian@hotmail.com"
              className="flex items-center gap-2 rounded-2xl px-4 py-2 bg-neutral-800 hover:bg-blue-600 transition"
            >
              <Mail className="w-5 h-5" /> biel.cristian@hotmail.com
            </a>
            <a
              href="https://github.com/gabrielcrisostomo97"
              target="_blank"
              className="flex items-center gap-2 rounded-2xl px-4 py-2 bg-neutral-800 hover:bg-blue-600 transition"
            >
              <Github className="w-5 h-5" /> github.com/gabrielcrisostomo97
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-crisostomo/"
              target="_blank"
              className="flex items-center gap-2 rounded-2xl px-4 py-2 bg-neutral-800 hover:bg-blue-600 transition"
            >
              <Linkedin className="w-5 h-5" /> linkedin.com/in/gabriel-crisostomo
            </a>
          </div>
          </motion.div> 
          </section>
            

            <footer className="py-10 text-center text-sm text-neutral-400">
              © {new Date().getFullYear()} Gabriel Crisostomo — Portfólio.
            </footer>
          </div>
          );
          }
