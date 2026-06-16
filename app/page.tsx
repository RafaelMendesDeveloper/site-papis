import { display, body, FB } from "./fonts";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Diferenciais } from "./components/Diferenciais";
import { Servicos } from "./components/Servicos";
import { Portfolio } from "./components/Portfolio";
import { Sobre } from "./components/Sobre";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function Page() {
  return (
    <main className={`min-h-screen bg-white text-slate-900 antialiased ${display.variable} ${body.variable} ${FB}`}>
      <Header />
      <Hero />
      <Diferenciais />
      <Servicos />
      <Portfolio />
      <Sobre />
      <Contato />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
