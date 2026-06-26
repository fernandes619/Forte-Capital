import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

type Plan = {
  label: string;
  rate: string;
  total: string;
  growth: string;
  milestones: { year: string; value: string }[];
  bars: number[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    label: "Renda fixa — 1% a.m",
    rate: "1%",
    total: "R$ 944.000",
    growth: "844%",
    milestones: [
      { year: "5 anos", value: "R$ 270.110" },
      { year: "15 anos", value: "R$ 516.200" },
      { year: "20 anos", value: "R$ 944.000" },
    ],
    bars: [4, 6, 8, 10, 13, 16, 20, 24, 30, 36, 44, 54, 66, 80, 96],
  },
  {
    label: "Consórcio estratégico — 3% a.m",
    rate: "3%",
    total: "R$ 5.205.000",
    growth: "5105%",
    milestones: [
      { year: "5 anos", value: "R$ 270.110" },
      { year: "15 anos", value: "R$ 1.971.900" },
      { year: "20 anos", value: "R$ 5.205.000" },
    ],
    bars: [3, 5, 7, 10, 14, 19, 25, 32, 41, 52, 64, 78, 92, 100, 100],
    highlighted: true,
  },
  {
    label: "Ações — 1.5% a.m",
    rate: "1.5%",
    total: "R$ 3.120.000",
    growth: "3020%",
    milestones: [
      { year: "5 anos", value: "R$ 233.210" },
      { year: "15 anos", value: "R$ 1.268.270" },
      { year: "20 anos", value: "R$ 3.120.000" },
    ],
    bars: [3, 5, 7, 9, 12, 16, 21, 27, 34, 42, 52, 64, 78, 92, 100],
  },
];

function Chart({ bars, highlighted }: { bars: number[]; highlighted?: boolean }) {
  const barColor = highlighted ? "from-cyan-300 to-cyan-500" : "from-cyan-500/70 to-cyan-400";
  return (
    <div className="relative h-44 flex items-end gap-[6px]">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04, duration: 0.6, ease: "easeOut" }}
          className={`flex-1 rounded-sm bg-gradient-to-t ${barColor}`}
        />
      ))}
    </div>
  );
}

export function Rentabilidades() {
  return (
    <section id="rentabilidades" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              Alavancagem Patrimonial
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
              Melhores rentabilidades do<br />mercado de investimentos
            </h2>
            <p className="mt-5 text-white/65 max-w-xl leading-relaxed">
              Acompanhe a rentabilidade dos investimentos ao longo do tempo e veja como seu patrimônio pode crescer de forma segura e eficiente.
            </p>
          </motion.div>

          <motion.a
            href="#contato"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group inline-flex items-center gap-2 self-start rounded-lg bg-gradient-to-r from-primary to-[oklch(0.78_0.18_235)] px-6 py-3.5 text-sm font-semibold text-white glow transition-transform hover:scale-[1.02]"
          >
            Agende sua consultoria
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
          </motion.a>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-6 overflow-hidden ${
                p.highlighted
                  ? "bg-white border-white text-[var(--navy-deep)] shadow-2xl shadow-cyan-500/20"
                  : "bg-card/60 border-white/10 backdrop-blur-sm"
              }`}
            >
              {p.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-white pointer-events-none" />
              )}
              <div className="relative">
                <p className={`text-xs ${p.highlighted ? "text-[var(--navy)]/70" : "text-white/60"}`}>
                  {p.label}
                </p>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className={`text-2xl md:text-[28px] font-bold ${p.highlighted ? "text-[var(--navy-deep)]" : "text-white"}`}>
                    {p.total}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-500">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    {p.growth}
                  </span>
                </div>

                <div className="mt-8 relative">
                  <Chart bars={p.bars} highlighted={p.highlighted} />
                  <div className={`mt-3 flex justify-between text-[10px] ${p.highlighted ? "text-[var(--navy)]/60" : "text-white/45"}`}>
                    <span>Aplic.</span>
                    <span>5 anos</span>
                    <span>10 anos</span>
                    <span>15 anos</span>
                    <span>20 anos</span>
                  </div>
                </div>

                {i === 0 && (
                  <>
                    <button className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/5 border border-white/10 text-white/50 grid place-items-center hover:text-white">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                  </>
                )}
                {i === 2 && (
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/5 border border-white/10 text-white/50 grid place-items-center hover:text-white">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs italic text-white/45 max-w-4xl mx-auto">
          *Os valores acima representam a rentabilidade média dos últimos anos, isso não se configura promessa de rendimentos futuros, os valores podem variar.
        </p>
      </div>
    </section>
  );
}
