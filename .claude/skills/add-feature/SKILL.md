---
name: add-feature
description: Use this skill whenever the user wants to add, change, or extend something on the Resolve Manutenção e Reformas one-page site — a new service, a new before/after portfolio item, a testimonial/FAQ/pricing section, a nav link, or any new section in app/page.tsx. Also use for content edits (copy, WhatsApp number, contact info) or any layout/style change that needs to match the existing gold/charcoal design system. Trigger on requests like "adiciona um serviço novo", "cria uma seção de depoimentos", "põe um FAQ aqui", "mais uma foto de antes e depois", "muda o número do WhatsApp", or "cria uma página nova".
---

# Adicionando features no site da Resolve

## Formato do projeto
- Next.js (App Router), site de uma página só. Quase tudo está em `app/page.tsx`. Não há CMS, API routes nem banco — é uma landing page estática.
- `app/layout.tsx` só tem o shell `<html>/<body>`, metadata e a configuração da fonte Geist (hoje não usada pela página em si — `page.tsx` carrega suas próprias fontes, ver abaixo).
- Tailwind v4, configurado via `@theme inline` em `app/globals.css` (não existe `tailwind.config.js` — cores/espaçamentos são valores arbitrários inline no JSX, não tokens de tema).
- Imagens ficam em `public/` direto na raiz (sem subpastas) e são referenciadas com `<img>` puro (não `next/image`).

## CRÍTICO: isto não é o Next.js que você conhece
Leia `AGENTS.md` antes de tocar em qualquer API do Next.js (fonts, metadata, imagens, rotas). O `package.json` fixa `next@16.2.9`, que tem breaking changes em relação ao que você tem em treino. Confira `node_modules/next/dist/docs/` antes de escrever código que use `next/font`, `next/image`, `metadata` ou roteamento — não assuma que a API se comporta como o Next.js que você já viu.

## Design system (precisa manter consistência)
- Cores: chumbo `#1a1a1d` / `#161618` (seções escuras), creme `#f6f4ef` (seções claras alternadas), dourado de destaque `#c9a24b` / `#b8923d` (gradiente), verde do WhatsApp `green-500`/`green-600`. Não inventar cores novas — reaproveitar essas.
- Fontes: `FD` = classe da fonte de display (Oswald, títulos, uppercase), `FB` = classe da fonte de corpo (Space Grotesk, parágrafos/labels). Ambas são definidas perto do topo de `page.tsx` como classes Tailwind arbitrárias (`[font-family:var(--font-display)]` / `[font-family:var(--font-body)]`) — reusar `FD`/`FB`, nunca hardcodar `font-family`.
- Toda seção segue o mesmo cabeçalho: `<Kicker index="0N">Label</Kicker>` (etiqueta dourada pequena com número) seguido de um `<h2>` em `FD`, uppercase, tracking-tight, com um trecho destacado em `text-[#c9a24b]`.
- Envolva conteúdo novo em `<Reveal delay={...}>` (fade/slide-up disparado no scroll, definido perto do topo do arquivo) para a seção nova animar igual ao resto da página. Ao mapear uma lista, escalone o delay em múltiplos de ~60-90ms.
- Ícones novos entram no objeto `Icons` como SVG inline, usando o spread `ip` (icon props) compartilhado para ícones de traço, no mesmo tamanho dos existentes (`width/height: 38` para ícones de feature, `22` para ícones inline de UI).

## Onde as coisas ficam em `page.tsx`
- Arrays de dados no topo do arquivo alimentam a maior parte das seções: `especialidades`, `diferenciais`, `servicos`, `portfolio`, `navItems`. Adicionar um item a uma seção existente é, quase sempre, só "adicionar um objeto ao array" — o JSX já mapeia sobre ele.
- Adicionando uma **seção nova** (não só um item):
  1. Se a seção for baseada em lista, adicione um array de dados perto dos outros.
  2. Escreva uma `function NomeDaSecao() { ... }` usando as seções existentes (`Diferenciais`, `Servicos`, `Portfolio`, `Sobre`, `Contato`) como modelo — mesmo formato de wrapper `<section id="..." className="bg-... py-20 sm:py-28">`.
  3. Dê um `id` à seção se ela precisar ser acessível pelo menu, e adicione `{ label, href: "#id" }` em `navItems` (esse único array já alimenta o menu desktop, o menu mobile e o rodapé — não precisa ligar em mais lugar nenhum).
  4. Renumere o `Kicker index="0N"` de todas as seções depois do ponto de inserção, para a numeração continuar sequencial (hoje vai de 01 Diferenciais até 05 Contato).
  5. Monte o componente na árvore dentro de `export default function Page()`, no fim do arquivo, na ordem certa de scroll.
- CTAs de WhatsApp sempre passam pelo helper `waLink(mensagem)` (monta um link `wa.me` com `WHATSAPP` + `encodeURIComponent`) — nunca hardcodar uma URL `wa.me`. Escreva uma mensagem específica para o contexto do CTA (veja como `Servicos` personaliza a mensagem por serviço).
- Constantes globais do site (`WHATSAPP`, `PHONE_DISPLAY`, `EMAIL`, `AREA`) são declaradas uma vez perto do topo — atualize ali, não inline, se o contato mudar.

## Itens de portfólio antes/depois
Cada entrada de `portfolio` precisa de duas imagens em `public/` (direto na raiz, sem subpasta), com nome descritivo (ex.: `salaantes.png` / `saladepois.png`), e uma entrada `{ titulo, antes, depois }`. O componente `BeforeAfter` já cuida do toggle — não precisa criar componente novo para um item novo.

## Depois de alterar
- Rode `npm run lint` (config flat do ESLint, `eslint-config-next`) antes de considerar a tarefa concluída.
- É uma página estática só de UI — suba `npm run dev` e confira a mudança no navegador (fluxo principal + largura mobile, já que o header tem um menu mobile separado) em vez de confiar só em lint/types.
