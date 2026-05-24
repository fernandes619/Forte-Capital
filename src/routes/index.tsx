import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Differentials } from "@/components/landing/Differentials";
import { Services } from "@/components/landing/Services";
import { About } from "@/components/landing/About";
import { LeadForm } from "@/components/landing/LeadForm";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forte Capital — Transformando sonhos em conquistas reais" },
      {
        name: "description",
        content:
          "Investimentos estratégicos, consórcios inteligentes e planejamento patrimonial para você e sua empresa crescerem com segurança.",
      },
      { property: "og:title", content: "Forte Capital — Soluções Financeiras & Consórcios" },
      {
        property: "og:description",
        content: "Estratégia, consórcios e planejamento patrimonial premium para pessoas e empresas.",
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
        <Differentials />
        <Services />
        <About />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster theme="dark" position="top-right" />
    </div>
  );
}
