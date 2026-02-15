export interface Flavor {
  id: string;
  name: string;
  emoji: string;
}

export const sabores: Flavor[] = [
  { id: "chocolate", name: "Mousse de Chocolate", emoji: "🍫" },
  { id: "ganache-chocolate", name: "Ganache Chocolate", emoji: "🍫✨" },
  { id: "chocorango", name: "Chocorango", emoji: "🍫🍓" },
  { id: "morango", name: "Mousse com Morango", emoji: "🍓" },
  { id: "limao", name: "Limão", emoji: "🍋" },
  { id: "churros", name: "Churros", emoji: "🍩" },
  { id: "doce-de-leite", name: "Doce de Leite", emoji: "🍮" },
  { id: "brigadeiro", name: "Brigadeiro", emoji: "🍬" },
  { id: "ninho", name: "Leite Ninho", emoji: "🥛" },
  { id: "maracuja", name: "Maracujá", emoji: "💛" },
  { id: "amendoim", name: "Amendoim", emoji: "🥜" },
  { id: "nozes", name: "Nozes", emoji: "🌰" },
  { id: "abacaxi", name: "Coco com Abacaxi", emoji: "🍍" },
];

export const massas: Flavor[] = [
  { id: "massa-branca", name: "Pão de ló (Massa padrão de Festa)", emoji: "🤍" },
  { id: "massa-chocolate", name: "Massa de Chocolate", emoji: "🍫" },
  { id: "massa-cenoura", name: "Massa de Cenoura", emoji: "🥕" },
  { id: "massa-milho", name: "Massa de Milho", emoji: "🌽" },
  { id: "massa-fuba", name: "Massa de Fubá", emoji: "🍪" },
  { id: "massa-laranja", name: "Massa de Laranja", emoji: "🍊" },
  { id: "massa-banana", name: "Massa de Banana", emoji: "🍌" },
  { id: "massa-iogurte", name: "Massa de Iogurte", emoji: "🍧" },
  { id: "massa-ninho", name: "Massa de Leite Ninho", emoji: "🥛" }
];
