import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 10) return d.replace(/(\d{0,2})(\d{0,4})(\d{0,4}).*/, (_, a, b, c) => [a && `(${a}`, a.length === 2 ? ") " : "", b, c && `-${c}`].filter(Boolean).join(""));
  return d.replace(/(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
}

export function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData(e.target as HTMLFormElement);
    
    formData.append("access_key", "fd382ffd-456b-4bc2-81a1-65c6845af024");
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        toast.success("Recebemos seu cadastro!", { 
          description: "Um especialista da Forte Capital entrará em contato em breve." 
        });
        (e.target as HTMLFormElement).reset();
        setPhone("");
      } else {
        toast.error("Erro ao enviar", { 
          description: data.message || "Por favor, tente novamente mais tarde." 
        });
      }
    } catch (error) {
      toast.error("Erro de conexão", { 
        description: "Não foi possível conectar ao servidor de envio." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="absolute inset-0 grid-lines opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 lg:sticky lg:top-28"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Cadastro</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Transforme seus planos em <span className="text-gradient">conquistas reais</span>
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            Chegou a hora de dar o próximo passo com segurança, estratégia e o suporte de quem entende de resultados. Cadastre-se agora e fale com um especialista. <span className="text-white">Seu próximo resultado começa aqui.</span>
          </p>
          <div className="mt-8 space-y-3 text-sm text-white/60">
            <p>✉️ contato@fortecapitall.com.br</p>
            <p>📞 (85) 92170-8115</p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 rounded-2xl border border-white/10 bg-card/80 p-8 backdrop-blur-xl space-y-4"
        >
          <Field label="Nome completo" name="name" type="text" required />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Telefone / WhatsApp"
              name="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(maskPhone(e.target.value))}
              placeholder="(85) 92170-8115"
            />
            <Field label="E-mail" name="email" type="email" required />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Cidade" name="city" type="text" required />
            <Field label="Estado" name="state" type="text" required placeholder="UF" />
          </div>
          <Select label="Qual seu objetivo principal?" name="goal" options={["Adquirir Imóvel", "Adquirir Veículo/Moto", "Adquirir Máquinas Agrícolas", "Expansão Empresarial", "Outros"]} />
          <Select label="Tipo de solução que procura" name="solution" options={["Consórcio", "Consultoria Estratégica", "Planejamento Patrimonial"]} />
          <div className="grid sm:grid-cols-2 gap-4">
            <Select label="Faixa de investimento desejada" name="range" options={["Até R$ 50 mil", "R$ 50 mil – R$ 150 mil", "R$ 150 mil – R$ 500 mil", "R$ 500 mil – R$ 1 Mi", "Acima de R$ 1 Mi"]} />
            <Select label="Melhor horário para contato" name="time" options={["Manhã", "Tarde", "Noite"]} />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-[oklch(0.78_0.18_235)] px-6 py-4 text-sm font-medium text-white glow transition-all disabled:opacity-60 hover:scale-[1.01]"
          >
            {loading ? "Enviando..." : "Garantir Meu Atendimento Exclusivo"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label, name, type, required, value, onChange, placeholder,
}: {
  label: string; name: string; type: string; required?: boolean;
  value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-white/70 mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg bg-input border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-xs font-medium text-white/70 mb-1.5">{label}</label>
      <select
        name={name}
        required
        defaultValue=""
        className="w-full rounded-lg bg-input border border-white/10 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
      >
        <option value="" disabled className="bg-card">Selecione...</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-card">{o}</option>
        ))}
      </select>
    </div>
  );
}
