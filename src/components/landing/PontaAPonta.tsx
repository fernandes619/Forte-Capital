import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/forte-logo.png";

const steps = [
  {
    n: "01",
    title: "Aprovação do crédito",
    desc: "Consórcio, Financiamento, Fundos de investimento, Crédito para construção e expansão.",
  },
  {
    n: "02",
    title: "Oportunidades imobiliárias para compra",
    desc: "Leilão de imóveis, Compra na planta, Imóveis abaixo do valor de mercado, Queima de estoque de construtora.",
  },
  {
    n: "03",
    title: "Locar o seu imóvel com a melhor rentabilidade possível",
    desc: "Gestão de locação, Gestão de locação por temporada, Reforma para locação estratégica.",
  },
  {
    n: "04",
    title: "Planejamento patrimonial completo",
    desc: "Estratégia de longo prazo, proteção patrimonial, sucessão e diversificação de investimentos.",
  },
];

export function PontaAPonta() {
  return (
    <section id="solucoes" className="relative py-28 bg-[var(--navy)]/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              A Forte Capital
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-[1.1]">
              Cuidamos da construção do seu patrimônio de ponta a ponta.
            </h2>
            <p className="mt-6 text-white/65 leading-relaxed max-w-xl">
              A Forte Capital é um ecossistema financeiro focado em criar soluções personalizadas para alavancagem patrimonial. Nossa missão é alavancar o crescimento patrimonial de nossos clientes democratizando o acesso às soluções financeiras mais sofisticadas do mercado com transparência.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block relative w-44 h-44"
          >
            <div className="absolute inset-0 rounded-full border border-primary/30 grid place-items-center bg-gradient-to-br from-primary/10 to-transparent">
              <img src={logo} alt="Forte Capital" className="h-20 w-auto" />
            </div>
            <svg className="absolute inset-0 w-full h-full animate-[spin_30s_linear_infinite]" viewBox="0 0 200 200">
              <defs>
                <path id="circle-text" d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
              </defs>
              <text className="fill-primary text-[11px] tracking-[0.3em] font-medium uppercase">
                <textPath href="#circle-text">
                  forte capital • patrimônio • estratégia • forte capital • patrimônio •
                </textPath>
              </text>
            </svg>
          </motion.div>
        </div>

        {/* White card with numbered list */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl bg-white text-[var(--navy-deep)] p-10 md:p-14 shadow-2xl shadow-black/30"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-10 border-b border-black/10">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--navy)]/60">
                Ponta a Ponta
              </span>
              <h3 className="mt-3 text-3xl md:text-4xl font-bold leading-tight max-w-md">
                Cuidamos da construção de patrimônio
              </h3>
            </div>
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-[oklch(0.78_0.18_235)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02]"
            >
              Agende sua consultoria
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
            </a>
          </div>

          <div className="mt-10 space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grid grid-cols-[auto_1fr] gap-5"
              >
                <div className="h-9 w-9 rounded-full border border-[var(--navy-deep)]/15 grid place-items-center text-[10px] font-bold text-[var(--navy-deep)]/70">
                  {s.n}
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold text-[var(--navy-deep)]">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-sm md:text-base text-[var(--navy)]/65 leading-relaxed max-w-3xl">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
