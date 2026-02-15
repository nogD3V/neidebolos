
# 🎂 Neide Bolos — Site de Vendas de Bolos via WhatsApp

## Visão Geral
Landing page única, moderna, clean e acolhedora para a confeitaria da Neide. O site funciona como um catálogo digital com carrinho de compras, onde o checkout envia o pedido formatado direto pro WhatsApp da Neide.

**Paleta de cores:** Lilás suave + branco + toques de lavanda, transmitindo delicadeza e modernidade.

---

## Estrutura da Página (seções em scroll)

### 1. Header / Topo
- Logo: ilustração estilo cartoon de uma velhinha simpática segurando um bolo, ao lado do título **"Neide Bolos"** em tipografia elegante
- Menu simples com scroll para as seções: Cardápio, Sobre, Contato
- Ícone do carrinho com contador de itens no canto superior direito

### 2. Hero / Banner
- Frase de destaque tipo *"Bolos feitos com amor e tradição"*
- Fundo suave lilás/lavanda com ilustração decorativa
- Botão CTA: "Ver Cardápio"

### 3. Cardápio / Produtos
- **Categorias em abas:** Bolos Inteiros | Fatias & Doces | Encomendas Personalizadas
- **Cards de produto** com:
  - Foto do produto (placeholder bonito inicialmente)
  - Nome do bolo
  - Descrição curta
  - Preço (quando houver) ou tag "Sob consulta"
  - Botão "Adicionar ao carrinho" (ou "Consultar" para itens sob consulta)
- Os produtos serão cadastrados diretamente no código (dados estáticos, sem banco de dados)

### 4. Encomendas Personalizadas
- Seção especial explicando que a Neide aceita encomendas sob medida
- Botão "Fazer encomenda pelo WhatsApp" que abre uma conversa direta

### 5. Sobre a Neide
- Pequeno texto contando a história da Neide e seus bolos
- Tom acolhedor e pessoal

### 6. Contato / Footer
- Número do WhatsApp
- Instagram (se houver)
- Endereço/região de entrega
- Horário de funcionamento

---

## Carrinho de Compras
- Painel lateral (drawer) que abre ao clicar no ícone do carrinho
- Lista dos itens adicionados com quantidade editável
- Total do pedido calculado automaticamente
- Botão **"Enviar Pedido pelo WhatsApp"** que:
  - Monta uma mensagem formatada com todos os itens, quantidades e total
  - Abre o WhatsApp (wa.me) com a mensagem pronta pro número da Neide
  - Campo para o cliente digitar o nome antes de enviar

---

## Design & Experiência
- **Visual:** Clean, minimalista, tons de lilás/lavanda com branco e cinza claro
- **Tipografia:** Elegante mas legível
- **Responsivo:** Funciona perfeitamente no celular (maioria dos clientes vai acessar pelo celular)
- **Animações sutis:** Cards com hover suave, transições delicadas
- **Sem login, sem cadastro** — experiência direta e sem fricção

---

## Dados Técnicos
- Sem backend — todos os produtos ficam no código
- Carrinho gerenciado via estado local (React state)
- Integração WhatsApp via link `wa.me` com mensagem pré-formatada
- Número do WhatsApp configurável facilmente no código
