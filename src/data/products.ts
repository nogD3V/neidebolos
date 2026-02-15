export interface Product {
  id: string;
  name: string;
  description: string;
  price: number | null; // null = sob consulta
  category: "bolos" | "fatias" | "encomendas";
  image: string;
}

export const products: Product[] = [
  // Bolos Inteiros

    {
    id: "bolo-cenoura",
    name: "Bolo de Cenoura",
    description: "Tradicional bolo de cenoura com calda de chocolate por cima e gotas de chocolate por dentro",
    price: 48,
    category: "bolos",
    image: "🥕",
  },
  {
    id: "bolo-chocolate",
    name: "Bolo de Chocolate (Nega Maluca)",
    description: "Massa fofinha de chocolate com cobertura cremosa de brigadeiro",
    price: 49.99,
    category: "bolos",
    image: "🍫",
  },
  {
    id: "bolo-churros",
    name: "Bolo de churros com Doce de Leite",
    description: "Massa fofinha de iogurte com cobertura cremosa de doce de leite",
    price: 49.99,
    category: "bolos",
    image: "🍯",
  },
  {
    id: "bolo-ninho",
    name: "Bolo de Leite Ninho",
    description: "Massa fofinha de chocolate com cobertura cremosa de brigadeiro",
    price: 49.99,
    category: "bolos",
    image: "🥛",
  },
  {
    id: "bolo-milho",
    name: "Bolo de Milho",
    description: "Bolo de milho cremoso, receita da vovó, feito com milho fresco",
    price: 45,
    category: "bolos",
    image: "🌽",
  },
  {
    id: "bolo-fuba",
    name: "Bolo de Fubá",
    description: "Fubá com erva-doce e queijo, perfeito para o café da tarde",
    price: 40,
    category: "bolos",
    image: "🥮",
  },
  {
    id: "bolo-limao",
    name: "Bolo de Limão",
    description: "Bolo leve de limão siciliano com cobertura de glacê",
    price: 45,
    category: "bolos",
    image: "🍋",
  },
  {
    id: "bolo-laranja",
    name: "Bolo de Laranja",
    description: "Bolo leve de laranja, macio e delicioso",
    price: 45,
    category: "bolos",
    image: "🍊",
  },

  {
    id: "bolo-banana",
    name: "Bolo de banana",
    description: "Bolo leve de banana, macio e delicioso",
    price: 45,
    category: "bolos",
    image: "🍌",
  },

  {
    id: "bolo-mandioca",
    name: "Bolo de Mandioca com Coco",
    description: "Bolo delicioso de mandioca, com ingredientes selecionados",
    price: 45,
    category: "bolos",
    image: "🥔",
  },

  // Fatias & Doces
  {
    id: "fatia-chocolate",
    name: "Fatia de Bolo de Chocolate",
    description: "Generosa fatia do nosso bolo de chocolate com brigadeiro",
    price: 12,
    category: "fatias",
    image: "🍫",
  },
  {
    id: "fatia-cenoura",
    name: "Fatia de Bolo de Cenoura",
    description: "Fatia do tradicional bolo de cenoura com calda",
    price: 10,
    category: "fatias",
    image: "🥕",
  },
  {
    id: "brigadeiro-gourmet",
    name: "Brigadeiro Gourmet (6un)",
    description: "Caixa com 6 brigadeiros gourmet nos sabores tradicionais",
    price: 25,
    category: "fatias",
    image: "🍬",
  },
  {
    id: "brownie",
    name: "(EM FALTA) Brownie com Nozes",
    description: "Brownie artesanal crocante por fora e molhadinho por dentro",
    price: 10,
    category: "fatias",
    image: "🍪",
  },

  // Encomendas Personalizadas
  {
    id: "bolo-aniversario",
    name: "Bolo de Aniversário",
    description: "Bolo decorado personalizado para sua festa. Diversos sabores e tamanhos",
    price: null,
    category: "encomendas",
    image: "🎉",
  },
  {
    id: "bolo-personalizado",
    name: "Bolo Personalizado (2 recheios)",
    description: "Bolo especial com dois recheios, feito com todo carinho",
    price: null,
    category: "encomendas",
    image: "🍰",
  },
  {
    id: "mesa-doces",
    name: "(EM BREVE) Mesa de Doces",
    description: "Monte sua mesa de doces completa para festas e eventos",
    price: null,
    category: "encomendas",
    image: "🧁",
  },
  {
    id: "bolo-tematico",
    name: "(EM BREVE) Bolo Temático",
    description: "Bolo decorado com o tema a sua escolha. Infantil ou adulto",
    price: null,
    category: "encomendas",
    image: "🎨",
  },
];
