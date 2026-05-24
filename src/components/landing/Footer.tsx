import logo from "@/assets/forte-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--navy-deep)]">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <img src={logo} alt="Forte Capital" className="h-10 w-auto" />
          <p className="mt-4 text-sm text-white/50 max-w-sm">
            Transformando sonhos em conquistas reais. Soluções financeiras, consórcios inteligentes e planejamento patrimonial.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#diferenciais" className="hover:text-primary">Diferenciais</a></li>
            <li><a href="#servicos" className="hover:text-primary">Soluções</a></li>
            <li><a href="#sobre" className="hover:text-primary">Quem Somos</a></li>
            <li><a href="#contato" className="hover:text-primary">Cadastro</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Contato</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <a href="mailto:contato@fortecapitall.com.br" className="hover:text-primary">
                contato@fortecapitall.com.br
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5585921708115"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                WhatsApp: (85) 92170-8115
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-white/40">
        © 2026 Forte Capital. Todos os direitos reservados.
      </div>
    </footer>
  );
}
