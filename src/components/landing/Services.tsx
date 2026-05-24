import { motion } from "framer-motion";
import { Compass, Handshake, Landmark, Building2, BadgeCheck, Target } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Consultoria Estratégica Personalizada",
    desc: "Analisamos o perfil e a necessidade de cada cliente para apresentar as melhores oportunidades, com planejamento inteligente e soluções sob medida.",
    bg: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
  },
  {
    icon: Handshake,
    title: "Consórcios Inteligentes",
    desc: "Estratégias que ajudam nossos clientes a conquistarem bens (imóveis, veículos, motos, máquinas agrícolas) de forma planejada, segura e sem comprometer a saúde financeira.",
    bg: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
  },
  {
    icon: Landmark,
    title: "Planejamento Patrimonial",
    desc: "Auxiliamos na construção, proteção e expansão do patrimônio, oferecendo segurança financeira e visão de longo prazo.",
    bg: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    icon: Building2,
    title: "Soluções para Empresas",
    desc: "Atendemos empresários que buscam crescimento estruturado, organização financeira, expansão de capital e novas oportunidades de investimento.",
    bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    icon: BadgeCheck,
    title: "Atendimento Premium e Acompanhamento Completo",
    desc: "Não entregamos apenas uma solução, mas todo o suporte necessário durante o processo, com acompanhamento próximo, transparência e agilidade.",
    bg: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
  },
  {
    icon: Target,
    title: "Estratégias para Realização de Grandes Conquistas",
    desc: "Para aquisição de imóveis, veículos, máquinas agrícolas, expansão empresarial ou novos investimentos — transformamos objetivos em conquistas reais.",
    bg: "https://images.unsplash.com/photo-1605338803155-8b6ff4e9d2f8?w=800&q=80",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Serviços</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Soluções que a <span className="text-gradient">Forte Capital</span> oferece
          </h2>
          <p className="mt-4 text-white/60">
            Estratégia, inteligência e planejamento para cada etapa do seu crescimento.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all"
              >
                <div
                  className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.18] transition-opacity bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.bg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-card/40" />
                <div className="relative p-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.78_0.18_235)] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
