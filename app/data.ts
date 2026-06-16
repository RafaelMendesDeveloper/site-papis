import { Icons } from "./icons";

export const especialidades = [
  { label: "Pintura", icon: Icons.paint },
  { label: "Elétrica", icon: Icons.bolt },
  { label: "Hidráulica", icon: Icons.drop },
  { label: "Alvenaria", icon: Icons.brick },
];

export const diferenciais = [
  { title: "Atendimento rápido e pontual", text: "Chegamos na hora combinada e resolvemos com agilidade." },
  { title: "Preço justo e transparente", text: "Orçamento claro, sem surpresas e sem taxas escondidas." },
  { title: "Serviço limpo e organizado", text: "Cuidamos do seu espaço e deixamos tudo impecável." },
  { title: "Experiência comprovada", text: "Atuação em diversos tipos de manutenção e reforma." },
  { title: "Garantia nos serviços", text: "Trabalho realizado com garantia e total responsabilidade." },
];

export const servicos = [
  { icon: Icons.bolt, title: "Elétrica Residencial", text: "Tomadas, disjuntores, chuveiros, fiação e correção de falhas elétricas." },
  { icon: Icons.drop, title: "Hidráulica", text: "Vazamentos, troca de torneiras, válvulas, sifões e desentupimentos." },
  { icon: Icons.paint, title: "Pintura", text: "Pintura interna e externa, textura, massa corrida e acabamento fino." },
  { icon: Icons.fan, title: "Instalações", text: "Ventiladores de teto, luminárias, lustres e suportes com segurança." },
  { icon: Icons.sofa, title: "Montagem de Móveis", text: "Montagem e desmontagem de móveis, armários, estantes e guarda-roupas." },
  { icon: Icons.wrench, title: "Reparos Gerais", text: "Pequenos consertos, fixações, regulagens e manutenção em geral." },
];

export const portfolio = [
  { titulo: "Pintura de Sala", antes: "/salaantes.png", depois: "/saladepois.png" },
  { titulo: "Reforma de Cozinha", antes: "/cozinhaantes.png", depois: "/cozinhadepois.png" },
  { titulo: "Banheiro Renovado", antes: "/banheiroantes.png", depois: "/banheirodepois.png" },
];

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];
