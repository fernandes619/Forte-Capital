import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Started",
    patrimony: "R$ 300.000,00",
    //income: "R$ 9.140,00",
    monthly: "R$ 800,00",
    featured: false,
  },
  {
    name: "Platinum",
    patrimony: "R$ 500.000,00",
    //income: "R$ 16.080,00",
    monthly: "R$ 1.200,00",
    featured: true,
  },
  {
    name: "Gold",
    patrimony: "R$ 1.000.000,00",
    //income: "R$ 21.440,00",
    monthly: "R$ 2.200,00",
    featured: false,
  },
];

export function Planos() {
  return (
    <section id="planos" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
            Estratégia de Alavancagem
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            Nossos planos de investimento
          </h2>
          <p className="mt-4 text-white/65 max-w-xl">
            Escolha o plano que combina com o seu momento e dê o próximo passo na construção do seu patrimônio.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-7 flex flex-col ${
                p.featured
                  ? "border-primary/60 bg-gradient-to-b from-primary/15 to-card/80 shadow-2xl shadow-primary/20"
                  : "border-white/10 bg-card/60"
              } backdrop-blur-sm`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Mais escolhido
                </span>
              )}
              <p className="text-sm font-semibold text-white">{p.name}</p>

              <div className="mt-6 pb-6 border-b border-white/10">
                <p className="text-sm text-white/60">Alcance um patrimônio de:</p>
                <p className="mt-2 text-3xl md:text-[32px] font-bold text-white leading-tight">
                  {p.patrimony}
                </p>
              </div>

              <ul className="mt-6 space-y-5 text-sm flex-1">
                {/* <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-primary/20 grid place-items-center shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <div>
                    <p className="text-white/70">Gere uma renda passiva de:</p>
                    <p className="text-white font-semibold mt-0.5">{p.income}</p>
                  </div>
                </li> */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-primary/20 grid place-items-center shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <div>
                    <p className="text-white/70">Investimento mensal:</p>
                    <p className="text-white font-semibold mt-0.5">{p.monthly}</p>
                  </div>
                </li>
              </ul>

              <a
                href="#contato"
                className={`mt-8 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all ${
                  p.featured
                    ? "bg-white text-[var(--navy-deep)] hover:bg-white/90"
                    : "bg-gradient-to-r from-primary to-[oklch(0.78_0.18_235)] text-white glow"
                }`}
              >
                Quero Investir
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
