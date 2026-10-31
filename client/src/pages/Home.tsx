import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  ExternalLink,
  Menu,
  MessageCircle,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

type Product = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
  imageAspectRatio?: "landscape";
  href: string;
  tag: string;
  bullets: string[];
  author?: string;
};

const whatsappBase = "https://wa.me/5527995126041?text=";
const whatsappFor = (title?: string) =>
  `${whatsappBase}${encodeURIComponent(
    `Olá! Vim pela DigitalQuintino e gostaria de saber mais sobre${title ? ` o e-book “${title}”` : " os e-books disponíveis"}. Vi na DigitalQuintino e gostaria de receber ajuda.`,
  )}`;

const products: Product[] = [
  {
    id: 1,
    title: "Vá cuidar da sua vida",
    category: "RESPONSABILIDADE PESSOAL",
    description: "Um livro direto, provocador e sem anestesia para quem cansou de esperar a vida acontecer.",
    image: "vacuidar_2f64436f.webp",
    href: "https://go.hotmart.com/E107584023H",
    tag: "NOVO NA COLEÇÃO",
    author: "Pablo Marçal",
    bullets: ["31 confrontos para transformar consciência em atitude", "Exercícios práticos para recuperar foco e clareza", "Leitura digital em português com acesso imediato"],
  },
  {
    id: 2,
    title: "Ensinando a Criança a Orar",
    category: "GUIA PRÁTICO PARA PAIS",
    description: "Um caminho simples, amoroso e possível para fazer da oração um momento especial na rotina da sua família.",
    image: "orar_330d0d6f.webp",
    href: "https://go.hotmart.com/P107153571O",
    tag: "MAIS ACOLHEDOR",
    bullets: ["Atividades para o dia a dia", "Orações simples para cada idade", "Acesso imediato e garantia de 7 dias"],
  },
  {
    id: 3,
    title: "A Paz do Diabo",
    category: "SABEDORIA CRISTÃ ATEMPORAL",
    description: "Descubra como reconhecer a falsa paz, fortalecer sua vigilância e descansar na paz que só Deus oferece.",
    image: "paz_79a26faf.webp",
    href: "https://go.hotmart.com/R106774018S",
    tag: "OFERTA ESPECIAL",
    bullets: ["6 capítulos transformadores", "Guia de estudo + plano de 30 dias", "Devocional e audiobook inclusos"],
  },
  {
    id: 4,
    title: "Os 5 Princípios do Filho Pródigo",
    category: "ESTUDO BÍBLICO APLICADO",
    description: "Uma leitura profunda e prática de Lucas 15 para transformar culpa em consciência, distância em retorno e fé em um novo começo.",
    image: "os-5-principios-enviado_302c28f6.webp",
    href: "https://go.hotmart.com/M107485063L",
    tag: "NOVO NA COLEÇÃO",
    bullets: ["Leitura guiada de Lucas 15:11–32", "Perguntas para reflexão pessoal", "Aplicações práticas para decisões"],
  },
  {
    id: 5,
    title: "Detox Perfeito",
    category: "HÁBITOS NATURAIS E BEM-ESTAR",
    description: "Um guia direto para criar uma rotina mais leve, ativa e saudável com receitas e passos que cabem na vida real.",
    image: "detox_544e70c0.webp",
    href: "https://go.hotmart.com/K106566519N",
    tag: "PARA COMEÇAR HOJE",
    bullets: ["8 capítulos de desintoxicação natural", "Receitas fáceis e plano passo a passo", "Cupom DETOXAGORA: 15% OFF"],
  },
  {
    id: 6,
    title: "A Bíblia que Você Não Leu",
    category: "LEITURA BÍBLICA E PENSAMENTO CRÍTICO",
    description: "Uma leitura para revisitar temas bíblicos com curiosidade, respeito e pensamento crítico.",
    image: "biblia_083fc417.webp",
    href: "https://pay.hotmart.com/U107490929E",
    tag: "LEITURA REFLEXIVA",
    bullets: ["Perguntas para olhar a Bíblia por outro ângulo", "Interpretações e reflexões com respeito", "Acesso digital imediato após a compra"],
  },
  {
    id: 7,
    title: "METANOIA",
    category: "JORNADA CRISTÃ DE TRANSFORMAÇÃO",
    description: "Um caminho de 30 capítulos para sair do automático, reencontrar direção e caminhar com mais fé, propósito e esperança.",
    image: "metanoia_20553865.webp",
    href: "https://go.hotmart.com/X107511300K",
    tag: "NOVO COMEÇO",
    bullets: ["30 capítulos para caminhar no seu ritmo", "Reflexões sobre fé, propósito e esperança", "Leitura no celular, tablet ou computador"],
  },
  {
    id: 8,
    title: "Graça Pura para Todos",
    category: "SABEDORIA CRISTÃ ATEMPORAL",
    description: "Uma pausa necessária para voltar ao essencial — menos peso, mais verdade e uma fé que acolhe.",
    image: "graca-pura-para-todos_e05f53e3.webp",
    href: "https://go.hotmart.com/X107766876V",
    tag: "PARA RESPIRAR",
    bullets: ["Reflexões curtas e profundas", "Leitura para momentos de silêncio", "Acesso imediato"],
  },
  {
    id: 9,
    title: "Devocional Diário em Provérbios",
    category: "DEVOCIONAL · SABEDORIA BÍBLICA",
    description: "Sabedoria para viver. Uma reflexão de cada vez, com espaço para presença e prática.",
    image: "devocional-proverbios-capa_f6b73a74.webp",
    href: "https://go.hotmart.com/V107767990Y",
    tag: "RITUAL DIÁRIO",
    bullets: ["Leituras para 31 dias", "Perguntas de aplicação", "Um ritmo possível para sua rotina"],
  },
  {
    id: 10,
    title: "Antimedo",
    category: "CORAGEM POSSÍVEL E MOVIMENTO",
    description: "Para reconhecer o medo sem deixar que ele escolha o tamanho da sua vida.",
    image: "antimedo-enviado_072f517e.webp",
    href: "https://go.hotmart.com/B107533955S",
    tag: "CORAGEM POSSÍVEL",
    bullets: ["Exercícios de ação consciente", "Perguntas para sair da paralisia", "Leitura direta e prática"],
  },
  {
    id: 11,
    title: "Sai do Caixão",
    category: "DESPERTAR E AUTOGOVERNO",
    description: "Um chamado para voltar a ocupar a própria vida com decisão, clareza e movimento.",
    image: "caixao_5fa3991f.webp",
    href: "https://go.hotmart.com/S107541237F",
    tag: "DESPERTAR",
    bullets: ["Reflexões para quebrar a inércia", "Práticas de autogoverno", "Acesso imediato"],
  },
  {
    id: 12,
    title: "As 7 Leis Espirituais do Sucesso",
    category: "CONSCIÊNCIA, PROPÓSITO E PROSPERIDADE",
    description: "Uma leitura para alinhar intenção, ação e prosperidade sem perder o que realmente importa.",
    image: "sete-leis_1ad2cddf.webp",
    href: "https://go.hotmart.com/T107544097M",
    tag: "PROPÓSITO",
    bullets: ["7 princípios para refletir", "Aplicações para a vida real", "Formato digital e imediato"],
  },
  {
    id: 13,
    title: "Quebrando o Hábito de Ser Você Mesmo",
    category: "LEITURA GUIADA · AUTOCONHECIMENTO",
    description: "Um convite para perceber padrões, abrir novas possibilidades e experimentar outro jeito de estar no mundo.",
    image: "quebrando_a851a4a0.webp",
    href: "https://go.hotmart.com/U107546962B",
    tag: "AUTOCONHECIMENTO",
    bullets: ["Perguntas para observar padrões", "Guias de reflexão", "Leitura no seu ritmo"],
  },
  {
    id: 14,
    title: "10 Sucos Detox Exterminadores de Gordura",
    category: "HÁBITOS NATURAIS E BEM-ESTAR",
    description: "Receitas simples para adicionar frescor, cor e intenção aos pequenos hábitos do dia.",
    image: "10-sucos-enviado_f80bf5fa.webp",
    href: "https://go.hotmart.com/F107560667W",
    tag: "BEM-ESTAR",
    bullets: ["10 receitas fáceis", "Ingredientes acessíveis", "Plano para começar hoje"],
  },
  {
    id: 15,
    title: "Guerra Cultural",
    category: "FÉ, CULTURA E PENSAMENTO",
    description: "Leia, entenda e reflita sobre as ideias que moldam o nosso tempo.",
    image: "guerra_4523fd12.webp",
    href: "https://go.hotmart.com/N107588055G",
    tag: "PENSAMENTO",
    bullets: ["Reflexões sobre cultura e fé", "Leitura provocadora", "Acesso imediato"],
  },
  {
    id: 16,
    title: "Jesus Ama as Crianças",
    category: "FÉ EM FAMÍLIA · INFÂNCIA",
    description: "Pequenas verdades. Grandes sementes para uma fé viva, compartilhada e cheia de ternura.",
    image: "jesus_abe8e523.webp",
    href: "https://go.hotmart.com/V107625668R",
    tag: "EM FAMÍLIA",
    bullets: ["Conteúdo para conversar com crianças", "Histórias e atividades", "Um momento para compartilhar"],
  },
  {
    id: 17,
    title: "O Código Secreto da Mente Masculina",
    category: "CASAMENTO, FÉ E CONEXÃO",
    description: "Um caminho de volta ao diálogo, à confiança e à parceria.",
    image: "codigo-mente-masculina_c180a497.webp",
    href: "https://go.hotmart.com/H107627067J",
    tag: "CONEXÃO",
    bullets: ["Reflexões sobre relacionamento", "Perguntas para o diálogo", "Leitura prática"],
  },
  {
    id: 18,
    title: "A Sutil Arte de Ligar o Foda-se",
    category: "CLAREZA, LIMITES E ESCOLHAS",
    description: "Menos ruído. Mais clareza para escolher o que realmente importa.",
    image: "foda-se_f367cc73.webp",
    href: "https://go.hotmart.com/U107657954K",
    tag: "CLAREZA",
    bullets: ["Limites mais honestos", "Exercícios de escolha", "Leitura direta"],
  },
  {
    id: 19,
    title: "Mindset: A Nova Psicologia do Sucesso",
    category: "PSICOLOGIA · APRENDIZADO · EVOLUÇÃO",
    description: "Comece pela lente. Deixe o crescimento fazer o resto.",
    image: "mindset-enviado_108263c6.webp",
    href: "https://go.hotmart.com/G107687059T?dp=1",
    tag: "MAIS POPULAR",
    bullets: ["Aprendizado e evolução", "Reflexões para mudar perspectivas", "Acesso digital imediato"],
  },
  {
    id: 20,
    title: "21 Dias",
    category: "AUTOCONHECIMENTO · BEM-ESTAR",
    description: "Um dia de cada vez para olhar para si com mais amor, presença e gentileza.",
    image: "21-dias-enviado_aa325515.webp",
    href: "https://go.hotmart.com/E107724838F",
    tag: "BEM-ESTAR",
    bullets: ["21 práticas diárias", "Perguntas para se escutar", "Ritmo simples e possível"],
  },
  {
    id: 21,
    title: "Salmos Explicados",
    category: "ESTUDO BÍBLICO APLICADO",
    description: "Da leitura à compreensão: um salmo de cada vez.",
    image: "salmos-novo_cf504a57.webp",
    href: "https://go.hotmart.com/V107769727G",
    tag: "LEITURA GUIADA",
    bullets: ["Contexto e aplicação", "Estudo para a rotina", "Leitura no seu tempo"],
  },
  {
    id: 22,
    title: "Forças para Recomeçar",
    category: "JORNADA CRISTÃ DE TRANSFORMAÇÃO",
    description: "Quando o amor encontra as provas da vida, ainda existe um caminho de volta para a esperança.",
    image: "/assets/forcas-para-recomecar-enviado.jpg",
    imageFit: "contain",
    href: "https://go.hotmart.com/L107929370L",
    tag: "RECOMEÇO",
    bullets: ["Reflexões para dias difíceis", "Práticas de esperança", "Acesso imediato"],
  },
  {
    id: 23,
    title: "Mais Esperto que o Diabo",
    category: "CONSCIÊNCIA, PROPÓSITO E PROSPERIDADE",
    description: "Perguntas mais precisas são o começo de uma mente mais livre.",
    image: "/assets/mais-esperto-que-o-diabo-enviado.jpg",
    imageFit: "contain",
    imageAspectRatio: "landscape",
    href: "https://go.hotmart.com/Q107892470J",
    tag: "MENTE LIVRE",
    bullets: ["Reflexões sobre propósito", "Perguntas para decidir melhor", "Leitura digital imediata"],
  },
  {
    id: 24,
    title: "O Efeito Composto",
    category: "AUTOCONHECIMENTO · BEM-ESTAR",
    description: "A vida que você quer também se constrói em pequenos passos.",
    image: "efeito-novo_553926f4.webp",
    href: "https://go.hotmart.com/M107928910P",
    tag: "PEQUENOS PASSOS",
    bullets: ["Princípios para consistência", "Aplicações para a vida real", "Acesso imediato"],
  },
  {
    id: 25,
    title: "Limite Zero",
    category: "AUTOCONHECIMENTO · PAZ E BEM-ESTAR",
    description: "Uma leitura sobre Ho'oponopono, consciência e os padrões mentais que podem limitar a vida.",
    image: "limite-zero-capa.jpg",
    href: "https://kiwify.app/gaRRf1c",
    tag: "NOVA SELEÇÃO",
    author: "Joe Vitale e Ihaleakala Hew Len",
    bullets: ["Reflexões sobre consciência e transformação pessoal", "Introdução ao método havaiano Ho'oponopono", "Atendimento para informações e disponibilidade"],
  },
  {
    id: 26,
    title: "Viver em Paz para Morrer em Paz",
    category: "VIDA · REFLEXÃO",
    description: "Uma reflexão de Mario Sergio Cortella sobre o que torna a vida importante e significativa.",
    image: "viver-em-paz-para-morrer-em-paz-capa.jpg",
    href: "https://go.hotmart.com/U108118072R",
    tag: "NOVA SELEÇÃO",
    author: "Mario Sergio Cortella",
    bullets: ["Reflexões sobre presença, propósito e legado", "Leitura para repensar o que importa", "Atendimento para informações e disponibilidade"],
  },
  {
    id: 27,
    title: "Liderança com Propósito",
    category: "LIDERANÇA · PROPÓSITO",
    description: "Princípios práticos para liderar com clareza, responsabilidade e sentido.",
    image: "lideranca-com-proposito-capa.jpg",
    href: "https://go.hotmart.com/J108122629V",
    tag: "NOVA SELEÇÃO",
    author: "Rick Warren",
    bullets: ["Princípios para liderar com propósito", "Reflexões para decisões e responsabilidades", "Atendimento para informações e disponibilidade"],
  },
  {
    id: 28,
    title: "Como Fazer Amigos e Influenciar Pessoas",
    category: "COMUNICAÇÃO · RELACIONAMENTOS",
    description: "Um guia clássico e atemporal para conversar com mais presença, criar vínculos verdadeiros e influenciar pessoas com respeito.",
    image: "como-fazer-amigos-e-influenciar-pessoas-lite.webp",
    href: "/como-fazer-amigos-e-influenciar-pessoas",
    tag: "NOVA LEITURA",
    author: "Dale Carnegie",
    bullets: ["Conversas mais claras e interessantes", "Relações com mais confiança", "Leitura digital com checkout pela Kiwify"],
  },
  {
    id: 29,
    title: "A Tríade do Tempo",
    category: "PRODUTIVIDADE · GESTÃO DO TEMPO",
    description: "Uma metodologia para observar as atividades urgentes, importantes e circunstanciais e organizar a rotina de acordo com suas prioridades.",
    image: "triade-do-tempo-cover-lite.webp",
    href: "/triade-do-tempo",
    tag: "NOVA LEITURA",
    author: "Christian Barbosa",
    bullets: ["As três esferas da Tríade do Tempo", "Cinco etapas para organizar a rotina", "Leitura digital com checkout pela Kiwify"],
  },
  {
    id: 30,
    title: "101 Sucos Detox",
    category: "HÁBITOS NATURAIS · BEM-ESTAR",
    description: "Um guia digital com 101 receitas naturais e um roteiro de 10 dias para trazer mais variedade e praticidade à rotina.",
    image: "101-sucos-detox-cover-lite.webp",
    href: "/101-sucos-detox",
    tag: "NOVA LEITURA",
    author: "Danielle Pereira",
    bullets: ["101 receitas de sucos naturais", "Roteiro prático de 10 dias", "Material em PDF com checkout pela Kiwify"],
  },
];

const categories = Array.from(new Set(products.map((product) => product.category)));
const featured = [products[18], products[19], products[17]];

function Cover({ product, variant = "card" }: { product: Product; variant?: "card" | "hero" | "detail" }) {
  return (
    <div className={`cover cover-${variant}${product.imageFit === "contain" ? " cover-image-contain" : ""}${product.imageAspectRatio === "landscape" ? " cover-image-landscape" : ""}`}>
      <img src={product.image.startsWith("/") ? product.image : `/assets/${product.image}`} alt={`Capa do e-book ${product.title}`} />
      <span className="cover-gloss" />
    </div>
  );
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [filter, setFilter] = useState("Todas as categorias");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = filter === "Todas as categorias" || product.category === filter;
      const matchesQuery = !normalizedQuery || `${product.title} ${product.category}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [filter, query]);

  const scrollToCatalog = () => {
    document.querySelector("#colecao")?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="announcement">CONTEÚDO QUE CABE NA VIDA REAL <span>•</span> ACESSO DIGITAL IMEDIATO <span>•</span> COMPRA SEGURA</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Digital Quintino, início">
          <span className="brand-mark">D</span>
          <span className="brand-name">Digital <em>Quintino</em></span>
        </a>
        <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`}>
          <a href="#colecao" onClick={() => setMobileOpen(false)}>Coleção</a>
          <a href="#curadoria" onClick={() => setMobileOpen(false)}>Curadoria</a>
          <a href="#sobre" onClick={() => setMobileOpen(false)}>Sobre</a>
          <a className="nav-cta" href={whatsappFor()} target="_blank" rel="noreferrer">Falar com a gente <ArrowUpRight size={15} /></a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
          title={theme === "dark" ? "Tema claro" : "Tema escuro"}
        >
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <button className="menu-toggle" aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMobileOpen((open) => !open)}>
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> LEITURAS QUE DEIXAM MARCAS BONITAS</div>
            <h1>Um bom livro pode mudar o jeito de <i>viver o dia.</i></h1>
            <p className="hero-text">Escolha uma leitura para cuidar da sua fé, da sua família ou do seu bem-estar. E-books práticos, profundos e feitos para acompanhar você.</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={scrollToCatalog}>Explorar a coleção <ArrowDown size={16} /></button>
              <a className="text-link" href={whatsappFor()} target="_blank" rel="noreferrer">Tirar uma dúvida <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-proof"><div className="proof-avatars"><span>J</span><span>M</span><span>A</span><b>+</b></div><span>Leituras escolhidas por famílias reais</span></div>
          </div>
          <div className="hero-art" aria-label="Capas selecionadas da coleção">
            <div className="hero-caption caption-left">feito<br />para você</div>
            <div className="hero-card hero-card-back"><Cover product={products[1]} variant="hero" /></div>
            <div className="hero-card hero-card-front"><Cover product={products[0]} variant="hero" /></div>
            <div className="hero-card hero-card-small"><Cover product={products[9]} variant="hero" /></div>
            <div className="hero-caption caption-right">leitura<br />com propósito</div>
            <span className="hero-dot dot-one" /><span className="hero-dot dot-two" />
          </div>
        </section>

        <section className="curation section-wrap" id="curadoria">
          <div className="section-heading section-heading-wide">
            <div><div className="eyebrow">CURADORIA DA SEMANA</div><h2>Os mais <i>populares.</i></h2></div>
            <p>Comece pelas leituras que mais despertam interesse na coleção — escolhidas para diferentes momentos da vida.</p>
          </div>
          <div className="featured-grid">
            {featured.map((product, index) => (
              <article className={`featured-card featured-${index + 1}`} key={product.id} onClick={() => setSelected(product)}>
                <span className="feature-number">0{index + 1}</span>
                <Cover product={product} variant="card" />
                <div className="featured-info"><span className="product-category">{product.category}</span><h3>{product.title}</h3><button className="mini-link">Ver detalhes <ArrowUpRight size={14} /></button></div>
              </article>
            ))}
          </div>
        </section>

        <section className="catalog section-wrap" id="colecao">
          <div className="catalog-intro">
            <div><div className="eyebrow">A COLEÇÃO DIGITALQUINTINO</div><h2>Escolha a próxima <i>virada.</i></h2></div>
            <p>Trinta leituras para alinhar o que você sente com o que quer construir. Explore por tema, encontre a que conversa com seu momento e leia no seu ritmo.</p>
          </div>
          <div className="catalog-tools">
            <label className="select-wrap"><span>Filtrar por categoria</span><select value={filter} onChange={(event) => setFilter(event.target.value)}><option>Todas as categorias</option>{categories.map((category) => <option key={category}>{category}</option>)}</select><ChevronDown size={16} /></label>
            <label className="search-wrap"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar uma leitura" aria-label="Buscar uma leitura" /></label>
            <div className="result-count"><strong>{filtered.length}</strong> leituras para explorar</div>
          </div>
          <div className="catalog-hint"><BookOpen size={15} /><span>Comece pelo que você quer transformar hoje.</span><span className="hint-rule" /></div>
          <div className="quick-filters"><span>Comece por:</span>{categories.slice(0, 5).map((category) => <button className={filter === category ? "active" : ""} key={category} onClick={() => setFilter(category)}>{category}</button>)}</div>
          <div className="product-grid">
            {filtered.map((product) => (
              <article className="product-card" key={product.id}>
                <button className="product-cover-button" onClick={() => setSelected(product)} aria-label={`Visualização rápida de ${product.title}`}><Cover product={product} variant="card" /><span className="quick-view">Visualização rápida <ArrowUpRight size={14} /></span></button>
                <div className="product-info"><span className="product-category">{product.category}</span><span className="product-tag">{product.tag}</span><h3>{product.title}</h3><p>{product.description}</p><div className="product-footer"><button className="details-link" onClick={() => setSelected(product)}>Conhecer esta leitura <ArrowRight size={15} /></button><a href={product.href} target="_blank" rel="noreferrer" aria-label={`Comprar ${product.title}`}><ArrowUpRight size={17} /></a></div></div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <div className="empty-state"><BookOpen size={28} /><h3>Nenhuma leitura encontrada</h3><p>Tente outra palavra ou volte para todas as categorias.</p><button className="button button-outline" onClick={() => { setFilter("Todas as categorias"); setQuery(""); }}>Ver todos os e-books</button></div>}
        </section>

        <section className="detail-feature section-wrap" id="sobre">
          <div className="detail-image"><div className="detail-stamp">NOVO<br />NA COLEÇÃO</div><Cover product={products[0]} variant="detail" /><span className="detail-shadow" /></div>
          <div className="detail-copy"><div className="eyebrow">RESPONSABILIDADE PESSOAL</div><h2>Vá cuidar da<br /><i>sua vida.</i></h2><p className="detail-lede">A frase que parece um corte. Mas pode ser o começo da sua liberdade.</p><p>Um convite para sair do ruído e assumir o comando da própria história.</p><ul className="benefit-list">{products[0].bullets.map((bullet) => <li key={bullet}><Check size={15} />{bullet}</li>)}</ul><div className="detail-meta"><div><span>Autor</span><strong>{products[0].author}</strong></div><div><span>Formato</span><strong>E-book digital</strong></div><div><span>Acesso</span><strong>Imediato</strong></div></div><div className="detail-actions"><a className="button button-accent" href={products[0].href} target="_blank" rel="noreferrer">Quero este e-book <ArrowUpRight size={16} /></a><a className="text-link" href={whatsappFor(products[0].title)} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Tirar uma dúvida</a></div></div>
        </section>

        <section className="chapters section-wrap"><div className="chapters-intro"><div className="eyebrow">O QUE VOCÊ LEVA</div><h2>Uma leitura que<br /><i>puxa para a vida.</i></h2></div><div className="chapters-list"><div className="chapters-label">Capítulos</div>{["Onde tudo começou", "O seu maior inimigo", "A prosperidade é natural", "Bloqueios emocionais", "Seja o seu próprio coach", "A arte de ser ridículo", "Vá para a guerra!", "Máscara social", "O leme do navio", "O que fazer agora?"].map((chapter, index) => <div className="chapter-row" key={chapter}><span>{String(index + 1).padStart(2, "0")}</span><strong>{chapter}</strong><ArrowUpRight size={15} /></div>)}</div></section>

        <section className="closing-cta section-wrap"><div className="closing-mark">D</div><div><div className="eyebrow">LEITURA COM PROPÓSITO</div><h2>Tem uma pergunta?<br /><i>Fale com a gente.</i></h2></div><a className="button button-light" href={whatsappFor()} target="_blank" rel="noreferrer">Chamar no WhatsApp <MessageCircle size={16} /></a></section>
      </main>

      <footer className="site-footer section-wrap"><div className="footer-brand"><span className="brand-mark">D</span><div><strong>Digital <em>Quintino</em></strong><span>Leituras para viver melhor.</span></div></div><div className="footer-links"><a href="#colecao">Coleção</a><a href="#curadoria">Curadoria</a><a href={whatsappFor()} target="_blank" rel="noreferrer">WhatsApp</a></div><span className="footer-note">© 2026 DigitalQuintino</span></footer>

      {selected && <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}><div className="product-modal" role="dialog" aria-modal="true" aria-label={`Detalhes de ${selected.title}`} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Fechar"><X size={19} /></button><div className="modal-cover"><Cover product={selected} variant="detail" /></div><div className="modal-copy"><span className="product-category">{selected.category}</span><h2>{selected.title}</h2><p>{selected.description}</p><ul className="benefit-list">{selected.bullets.map((bullet) => <li key={bullet}><Check size={15} />{bullet}</li>)}</ul><div className="modal-actions"><a className="button button-accent" href={selected.href} target="_blank" rel="noreferrer">Quero este e-book <ExternalLink size={15} /></a><a className="text-link" href={whatsappFor(selected.title)} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Tirar uma dúvida</a></div></div></div></div>}
    </div>
  );
}
