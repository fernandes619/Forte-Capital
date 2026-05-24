import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-mesh pt-24 pb-16">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <svg className="absolute right-0 top-0 h-full w-1/2 opacity-25 pointer-events-none" viewBox="0 0 600 800" fill="none">
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1={100 + i * 30} y1={0} x2={600} y2={500 - i * 30} stroke="oklch(0.65 0.20 250)" strokeWidth="1" />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--navy-deep)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur"
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Soluções Financeiras & Consórcios Premium
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05] text-white"
          >
            Forte Capital —{" "}
            <span className="text-gradient">Transformando sonhos em conquistas reais</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-white/70 max-w-xl"
          >
            Investimentos estratégicos, consórcios inteligentes e planejamento patrimonial para você e sua empresa crescerem com segurança.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[oklch(0.78_0.18_235)] px-7 py-3.5 text-base font-medium text-white glow transition-all hover:scale-[1.02]"
            >
              Falar com um Especialista
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 to-transparent rounded-3xl blur-3xl" />
          <div className="relative grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80"
              alt="Casa moderna de alto padrão"
              className="rounded-2xl border border-white/10 h-64 w-full object-cover shadow-2xl"
            />
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80"
              alt="Carro executivo"
              className="rounded-2xl border border-white/10 h-64 w-full object-cover mt-10 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
