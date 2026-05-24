import { motion } from "framer-motion";
import robsonImg from "@/assets/robson.png";
import alineImg from "@/assets/aline.png";

const founders = [
  {
    name: "Robson Forte",
    role: "Sócio-Fundador",
    photo: robsonImg,
    bio: "A visão de Robson Forte sempre foi clara: construir uma empresa sólida, moderna e confiável, capaz de gerar impacto real na vida das pessoas. Seu foco está em transformar o mercado por meio de relacionamentos duradouros, estratégias inteligentes e uma cultura baseada em excelência, ética e alta performance. Para ele, crescimento não acontece por acaso — ele é resultado de planejamento, disciplina e decisões certas.",
  },
  {
    name: "Aline Oliveira",
    role: "Sócia-Fundadora",
    photo: alineImg,
    bio: "Ao seu lado, Aline Oliveira compartilha da mesma visão de inovação, proximidade com o cliente e fortalecimento de conexões humanas dentro dos negócios. Sua atuação reforça o compromisso da empresa com um atendimento mais sensível, estratégico e eficiente, trazendo equilíbrio entre gestão, relacionamento e expansão. Juntos, lideram a Forte Capital para ir além de serviços financeiros e comerciais: uma marca que inspira confiança, gera oportunidades e constrói conquistas reais.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-28 bg-[var(--navy)]/30">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Quem Somos</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Liderança e <span className="text-gradient">Propósito</span>
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            A Forte Capital nasceu com o propósito de transformar sonhos em conquistas reais, oferecendo soluções inteligentes, seguras e estratégicas para pessoas e empresas que desejam crescer com planejamento, segurança e confiança. Mais do que uma empresa, somos parceiros de resultados. Atuamos com transparência, credibilidade e um atendimento verdadeiramente personalizado, entendendo que cada cliente possui objetivos únicos e merece uma solução construída de forma exclusiva.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-card/50 p-8 backdrop-blur-sm hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-5">
                <div className="relative h-24 w-24 rounded-full border border-primary/30 overflow-hidden shrink-0 ring-2 ring-primary/20">
                  <img
                    src={f.photo}
                    alt={`${f.name}, ${f.role} da Forte Capital`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{f.name}</h3>
                  <p className="text-sm text-primary">{f.role}</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-white/70 leading-relaxed">{f.bio}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center text-white/70 max-w-3xl mx-auto leading-relaxed"
        >
          Nossa missão é simplificar processos, abrir caminhos e entregar resultados sólidos, sempre com agilidade, excelência e compromisso. Na Forte Capital, acreditamos que <span className="text-white font-medium">grandes conquistas começam com escolhas certas</span> — e estamos aqui para construir esse caminho ao seu lado.
        </motion.p>
      </div>
    </section>
  );
}
