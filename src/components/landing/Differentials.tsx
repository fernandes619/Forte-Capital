import { motion } from "framer-motion";
import { UserCog, ShieldCheck, Zap, Users, Trophy } from "lucide-react";
import imgAtendimento from "@/assets/diff-atendimento.jpg";
import imgTransparencia from "@/assets/diff-transparencia.jpg";
import imgAgilidade from "@/assets/diff-agilidade.jpg";
import imgEquipe from "@/assets/diff-equipe.jpg";
import imgConquistas from "@/assets/diff-conquistas.jpg";

const items = [
  {
    icon: UserCog,
    title: "Atendimento personalizado",
    desc: "Cada cliente possui objetivos e necessidades diferentes. Por isso, o atendimento é feito de forma estratégica e individual, com foco na melhor solução para cada perfil.",
    image: imgAtendimento,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Transparência e confiança",
    desc: "Todos os processos são conduzidos com clareza, segurança e responsabilidade, garantindo mais tranquilidade em cada decisão.",
    image: imgTransparencia,
    span: "",
  },
  {
    icon: Zap,
    title: "Agilidade e eficiência",
    desc: "Valorizamos seu tempo. Processos rápidos, suporte eficiente e acompanhamento constante para entregar resultados com mais velocidade.",
    image: imgAgilidade,
    span: "",
  },
  {
    icon: Users,
    title: "Equipe especializada",
    desc: "Profissionais preparados, com experiência de mercado e visão estratégica, oferecendo soluções inteligentes e seguras para cada cliente.",
    image: imgEquipe,
    span: "",
  },
  {
    icon: Trophy,
    title: "Transformamos sonhos em conquistas reais",
    desc: "Nosso propósito vai além de oferecer serviços: ajudamos pessoas e empresas a conquistarem seus objetivos com planejamento, confiança e resultados sólidos.",
    image: imgConquistas,
    span: "md:col-span-2",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Diferenciais</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            5 Motivos para Escolher a <span className="text-gradient">Forte Capital</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 md:auto-rows-[260px] gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isFeature = i === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all ${item.span}`}
              >
                {/* Background image */}
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                />
                {/* Gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/85 to-[var(--navy)]/40" />
                {isFeature && (
                  <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
                )}
                <div className="relative flex h-full flex-col justify-between p-7">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary backdrop-blur-md group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-6">
                    <h3 className={`font-semibold text-white ${isFeature ? "text-2xl" : "text-lg"}`}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
