import { ArrowDown, ArrowLeft, ArrowRight, Check, ChevronDown, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { Link, useLocation } from "wouter";
import "./BookLanding.css";

type LandingData = {
  path: string;
  eyebrow: string;
  title: string;
  accent: string;
  author: string;
  description: string;
  image: string;
  checkout: string;
  introTitle: string;
  intro: string;
  benefits: { title: string; text: string }[];
  bullets: string[];
  faq: { question: string; answer: string }[];
};

const landings: LandingData[] = [
  {
    path: "/como-fazer-amigos-e-influenciar-pessoas",
    eyebrow: "RELAÇÕES QUE FAZEM DIFERENÇA",
    title: "Ser ouvido começa por",
    accent: "ouvir melhor.",
    author: "Dale Carnegie",
    description: "Um guia direto e atemporal para conversar com mais presença, criar vínculos verdadeiros e influenciar pessoas com respeito.",
    image: "/assets/como-fazer-amigos-e-influenciar-pessoas-lite.webp",
    checkout: "https://pay.kiwify.com.br/MQpLgSg",
    introTitle: "Você não precisa falar mais alto. Precisa fazer mais sentido.",
    intro: "Existe uma diferença enorme entre estar em uma conversa e realmente estar presente nela. Esta leitura reúne princípios simples para observar melhor as pessoas, escolher melhor as palavras e construir relações mais conscientes.",
    benefits: [
      { title: "Conversas que aproximam", text: "Aprenda a ouvir melhor, fazer perguntas interessantes e deixar a conversa fluir com naturalidade." },
      { title: "Relações com mais confiança", text: "Pequenos ajustes no jeito de tratar as pessoas podem mudar a qualidade dos seus vínculos." },
      { title: "Influência sem forçar", text: "Expresse suas ideias com clareza e conquiste cooperação sem precisar parecer outra pessoa." },
    ],
    bullets: ["Demonstrar interesse genuíno sem soar artificial", "Lidar com discordâncias sem transformar tudo em disputa", "Fazer com que suas ideias sejam mais bem recebidas", "Criar conexões mais leves no trabalho e na vida pessoal"],
    faq: [
      { question: "Para quem este e-book é indicado?", answer: "Para quem deseja se comunicar melhor em relações pessoais ou profissionais e construir conversas com mais confiança." },
      { question: "Preciso ter experiência com comunicação?", answer: "Não. A leitura parte de situações comuns e apresenta princípios que podem ser praticados desde a primeira conversa." },
      { question: "Como recebo o acesso?", answer: "Depois da confirmação do pagamento, a Kiwify apresenta as instruções de acesso na página da compra." },
    ],
  },
  {
    path: "/triade-do-tempo",
    eyebrow: "UM LIVRO SOBRE ESCOLHAS E PRIORIDADES",
    title: "Sua agenda está cheia.",
    accent: "O que merece o seu tempo?",
    author: "Christian Barbosa",
    description: "Uma metodologia para observar a rotina por três esferas: o urgente, o importante e o circunstancial.",
    image: "/assets/triade-do-tempo-cover-lite.webp",
    checkout: "https://pay.kiwify.com.br/geaafqF",
    introTitle: "Nem tudo que ocupa o dia tem o mesmo peso.",
    intro: "Gerenciar o tempo começa por perceber onde suas escolhas estão levando você. A metodologia propõe identificar a natureza das atividades que consomem seu tempo e organizar a rotina de acordo com aquilo que realmente importa.",
    benefits: [
      { title: "Urgente", text: "O que pede atenção imediata e costuma trazer um prazo curto ou uma consequência próxima." },
      { title: "Importante", text: "O que se conecta com objetivos, valores e resultados que têm significado para você." },
      { title: "Circunstancial", text: "O que aparece no cotidiano sem contribuir de forma relevante para suas prioridades." },
    ],
    bullets: ["As três esferas da Tríade do Tempo", "Cinco etapas: identidade, metas, planejamento, organização e execução", "Aplicação com caderno, agenda, smartphone ou software"],
    faq: [
      { question: "O que significa a Tríade do Tempo?", answer: "É uma forma de observar como o tempo se divide entre atividades urgentes, importantes e circunstanciais." },
      { question: "Preciso usar um aplicativo específico?", answer: "Não. A metodologia pode ser aplicada com ferramentas que você já usa, como caderno, agenda, smartphone ou software." },
      { question: "Quais etapas o livro apresenta?", answer: "Identidade, metas, planejamento, organização e execução." },
    ],
  },
  {
    path: "/101-sucos-detox",
    eyebrow: "UM RITUAL SIMPLES PARA A SUA ROTINA",
    title: "Mais sabor.",
    accent: "Mais leveza.",
    author: "Danielle Pereira",
    description: "Um e-book para quem quer colocar mais ingredientes naturais no dia a dia, sem complicar a cozinha.",
    image: "/assets/101-sucos-detox-cover-lite.webp",
    checkout: "https://pay.kiwify.com.br/p7Zu3B7",
    introTitle: "Quando a receita certa está à mão, cuidar da rotina fica mais fácil.",
    intro: "O 101 Sucos Detox reúne ideias para experimentar combinações com frutas, folhas, legumes, sementes e ingredientes frescos. É um material de consulta rápida, feito para acompanhar a vida real.",
    benefits: [
      { title: "101 receitas", text: "Opções diferentes para consultar no café da manhã, no lanche ou sempre que quiser variar." },
      { title: "10 dias de roteiro", text: "Um ponto de partida simples para explorar os sucos naturais e criar ritmo." },
      { title: "Prepare sem complicar", text: "Ingredientes conhecidos e combinações fáceis de testar no seu dia a dia." },
    ],
    bullets: ["101 receitas de sucos naturais", "Roteiro prático de 10 dias", "Material em PDF para ler no celular, tablet ou computador"],
    faq: [
      { question: "O que vem no e-book?", answer: "Você recebe um PDF digital com 101 receitas de sucos e uma proposta de programa de 10 dias." },
      { question: "Posso ler pelo celular?", answer: "Sim. O PDF pode ser consultado no celular, tablet ou computador." },
      { question: "O e-book substitui uma consulta?", answer: "Não. O material é informativo e não substitui orientação de nutricionista, médico ou outro profissional habilitado." },
    ],
  },
];

export default function BookLanding() {
  const [location] = useLocation();
  const data = landings.find((landing) => location.replace(/\/$/, "") === landing.path) ?? landings[0];

  return (
    <main className="book-landing">
      <div className="book-topline">DIGITALQUINTINO <span>•</span> LEITURAS PARA VIVER MELHOR</div>
      <header className="book-header section-wrap">
        <Link href="/" className="book-brand"><span className="book-brand-mark">D</span><span>Digital<span>Quintino</span></span></Link>
        <Link href="/" className="book-back"><ArrowLeft size={15} /> Voltar para a coleção</Link>
      </header>

      <section className="book-hero">
        <div className="section-wrap book-hero-grid">
          <div className="book-copy">
            <p className="book-eyebrow"><Sparkles size={14} /> {data.eyebrow}</p>
            <h1>{data.title}<br /><i>{data.accent}</i></h1>
            <p className="book-lede">{data.description}</p>
            <p className="book-author">Uma leitura de <strong>{data.author}</strong></p>
            <div className="book-actions"><a className="button button-accent" href={data.checkout} target="_blank" rel="noreferrer">Quero acessar o e-book <ArrowRight size={16} /></a><a className="book-text-link" href="#proposta">Conhecer a proposta <ArrowDown size={15} /></a></div>
            <p className="book-secure"><ShieldCheck size={15} /> Checkout seguro pela Kiwify</p>
          </div>
          <div className="book-visual"><div className="book-glow" /><div className="book-cover"><img src={data.image} alt={`Capa do e-book ${data.title} ${data.accent}`} /></div><span className="book-note book-note-top">LEITURA<br /><strong>APLICADA</strong></span><span className="book-note book-note-bottom">E-BOOK<br /><strong>DIGITAL</strong></span></div>
        </div>
      </section>

      <section className="book-intro section-wrap" id="proposta"><span className="book-number">01 <small>O ponto de partida</small></span><div><h2>{data.introTitle}</h2><p>{data.intro}</p></div></section>
      <section className="book-benefits"><div className="section-wrap"><p className="book-eyebrow"><Sparkles size={14} /> O que você encontra</p><h2>Ideias para levar <i>para a vida real.</i></h2><div className="book-benefit-grid">{data.benefits.map((benefit, index) => <article key={benefit.title}><span>0{index + 1}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div></div></section>
      <section className="book-content section-wrap"><div><p className="book-eyebrow">DENTRO DO MATERIAL</p><h2>Um conteúdo para consultar no seu ritmo.</h2><p>Conheça os principais pontos desta leitura e descubra como ela pode conversar com a sua rotina.</p></div><ul>{data.bullets.map((bullet) => <li key={bullet}><Check size={15} /> {bullet}</li>)}</ul></section>
      <section className="book-offer"><div className="section-wrap book-offer-grid"><div><p className="book-eyebrow">SUA PRÓXIMA LEITURA</p><h2>Comece pela escolha que faz sentido para você.</h2><p>Tenha acesso ao material digital e volte a ele sempre que precisar.</p></div><div className="book-checkout"><img src={data.image} alt={`Capa de ${data.title}`} /><div><strong>{data.title}</strong><small>{data.author} · e-book digital</small><a className="button button-accent" href={data.checkout} target="_blank" rel="noreferrer">Continuar para o pagamento <ExternalLink size={14} /></a><span><ShieldCheck size={13} /> Compra segura pela Kiwify</span></div></div></div></section>
      <section className="book-faq section-wrap"><div><p className="book-eyebrow">ANTES DE COMEÇAR</p><h2>Ficou com alguma dúvida?</h2></div><div>{data.faq.map((item) => <details key={item.question}><summary>{item.question}<ChevronDown size={16} /></summary><p>{item.answer}</p></details>)}</div></section>
      <footer className="book-footer"><div className="section-wrap"><Link href="/" className="book-brand"><span className="book-brand-mark">D</span><span>Digital<span>Quintino</span></span></Link><p>Conteúdo digital para desenvolver novas possibilidades.</p></div></footer>
      <a className="book-mobile-cta" href={data.checkout} target="_blank" rel="noreferrer">Quero acessar o e-book <ArrowRight size={15} /></a>
    </main>
  );
}
