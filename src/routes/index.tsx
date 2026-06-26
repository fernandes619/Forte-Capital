import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Rentabilidades } from "@/components/landing/Rentabilidades";
import { PontaAPonta } from "@/components/landing/PontaAPonta";
import { Planos } from "@/components/landing/Planos";
import { About } from "@/components/landing/About";
import { LeadForm } from "@/components/landing/LeadForm";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forte Capital — Alavancagem patrimonial e investimentos estratégicos" },
      {
        name: "description",
        content:
          "Ecossistema financeiro focado em construir, proteger e expandir patrimônio com soluções personalizadas, consórcios e planejamento estratégico.",
      },
      { property: "og:title", content: "Forte Capital — Alavancagem Patrimonial" },
      {
        property: "og:description",
        content: "Cuidamos da construção do seu patrimônio de ponta a ponta.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <Header />
      <main>
        <Hero />
        <Rentabilidades />
        <PontaAPonta />
        <Planos />
        <About />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster theme="dark" position="top-right" />
    </div>
  );
}
