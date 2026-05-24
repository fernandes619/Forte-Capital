## Landing Page ForteCapital

Construirei uma landing page sofisticada single-page (com rotas separadas onde fizer sentido para SEO), seguindo a identidade visual azul marinho/cyan das imagens enviadas.

### Identidade Visual
- **Paleta**: Azul marinho `#001233` (background), azul vibrante `#007BFF` (accent/glow), branco e cinza azulado para texto secundário
- **Tipografia**: Inter (corpo) + Geist/Space Grotesk (títulos display) — sans-serif moderna
- **Logo**: Uso das imagens enviadas (logo branco em fundo escuro `IMG_1621` para header, ícone `IMG_1570/1571` para favicon)
- **Imagem de recepção** (`IMG_1625`): usada na seção Sobre Nós

### Estrutura de Seções (em `/`)

1. **Header fixo** — logo ForteCapital + navegação (Diferenciais, Sobre, Serviços, Contato) + CTA "Fale com um especialista"
2. **Hero** — fundo com gradiente mesh azul + linhas geométricas sutis (estilo `IMG_1624`); título "Investimentos que transformam o seu futuro", slogan e CTA com efeito glow
3. **Faixa de Números** — animação count-up: +R$ 100Mi sob custódia, +500 clientes, +15 anos de experiência, 98% de satisfação
4. **Diferenciais** — Bento Grid assimétrico com ícones Lucide (TrendingUp, ShieldCheck, UserCog, Award)
5. **Sobre Nós** — texto institucional + imagem da recepção (lateral)
6. **Serviços** — 3 cards detalhados: Wealth Management, Consultoria de Investimentos, Planejamento Sucessório
7. **Lead Capture** — formulário limpo (nome, email, telefone, patrimônio aproximado, mensagem)
8. **Footer** — logo, links, redes sociais, contato

### Arquitetura Técnica
- TanStack Start com rota única `/` (landing page conforme solicitado); `head()` com SEO completo (title, description, og:image usando imagem da recepção)
- Tokens de cores em `src/styles.css` (oklch) — substituindo o tema padrão pelo azul marinho da Forte
- Componentes em `src/components/landing/` (Hero, Stats, Differentials, About, Services, LeadForm, Footer, Header)
- Animações: `framer-motion` para scroll reveal e count-up; classes utilitárias do projeto para hover
- Lead form: validação client-side com toast de confirmação (placeholder, sem backend nesta etapa — pode ser integrado a Lovable Cloud depois)
- Responsividade total via Tailwind breakpoints
- Assets copiados para `src/assets/` e importados como ES modules

### Fora do escopo desta etapa
- Backend para o formulário (pode ser adicionado depois via Lovable Cloud)
- Conteúdo textual final (usarei placeholders profissionais)