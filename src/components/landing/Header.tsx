import { useEffect, useState } from "react";
import logo from "@/assets/forte-logo.png";

const links = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#servicos", label: "Soluções" },
  { href: "#sobre", label: "Quem Somos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--navy-deep)]/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Forte Capital" className="h-9 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-white glow transition-all"
        >
          Falar com um Especialista
        </a>
      </div>
    </header>
  );
}
