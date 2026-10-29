/*
 * Cardápio fictício de exemplo — nomes e preços genéricos, criados só para esta demonstração.
 * Preços em centavos. `preco: null` = preço não definido (o caixa avisa e não deixa vender).
 */
window.LOJA = {
  nome: 'Lanchonete Demo',
  rodape: 'Obrigado pela preferência!'
};

window.CATEGORIAS = [
  { id: 'tradicional', nome: 'Lanches',    icone: 'pao' },
  { id: 'doces',       nome: 'Doces',      icone: 'doce' },
  { id: 'adicionais',  nome: 'Adicionais', icone: 'mais' },
  { id: 'salgados',    nome: 'Salgados',   icone: 'salgado' },
  { id: 'bebidas',     nome: 'Bebidas',    icone: 'bebida' },
  { id: 'sucos',       nome: 'Sucos',      icone: 'suco' },
  { id: 'outros',      nome: 'Porções',    icone: 'pacote' }
];

/* Adicionais que podem ser escolhidos ao tocar num lanche */
window.ADICIONAIS = [
  { id: 'add-bacon',  nome: 'Bacon',        preco: 400 },
  { id: 'add-queijo', nome: 'Queijo extra', preco: 300 },
  { id: 'add-ovo',    nome: 'Ovo',          preco: 250 }
];

window.PRODUTOS = [
  // Lanches (aceitam adicionais)
  { id: 'ln-misto',   cat: 'tradicional', nome: 'Misto quente', curto: 'Misto quente', sub: 'na chapa', preco: 1200, adicionais: true },
  { id: 'ln-xburger', cat: 'tradicional', nome: 'X-burger',     curto: 'X-burger',     sub: 'pão, carne e queijo', preco: 1800, adicionais: true },
  { id: 'ln-xsalada', cat: 'tradicional', nome: 'X-salada',     curto: 'X-salada',     sub: 'com alface e tomate', preco: 2000, adicionais: true },
  { id: 'ln-xbacon',  cat: 'tradicional', nome: 'X-bacon',      curto: 'X-bacon',      sub: 'com bacon', preco: 2400, adicionais: true },
  { id: 'ln-xfrango', cat: 'tradicional', nome: 'X-frango',     curto: 'X-frango',     sub: 'filé de frango', preco: 2200, adicionais: true },

  // Doces
  { id: 'dc-brigadeiro', cat: 'doces', nome: 'Brigadeiro',               curto: 'Brigadeiro', preco: 400 },
  { id: 'dc-bolo',       cat: 'doces', nome: 'Bolo de chocolate (fatia)', curto: 'Bolo de chocolate', sub: 'fatia', preco: 900 },
  { id: 'dc-pudim',      cat: 'doces', nome: 'Pudim (fatia)',            curto: 'Pudim', sub: 'fatia', preco: 800 },

  // Adicionais avulsos
  { id: 'av-bacon',  cat: 'adicionais', nome: 'Adicional Bacon',        curto: 'Bacon',        sub: 'adicional', preco: 400 },
  { id: 'av-queijo', cat: 'adicionais', nome: 'Adicional Queijo extra', curto: 'Queijo extra', sub: 'adicional', preco: 300 },
  { id: 'av-ovo',    cat: 'adicionais', nome: 'Adicional Ovo',          curto: 'Ovo',          sub: 'adicional', preco: 250 },

  // Salgados
  { id: 'sg-coxinha', cat: 'salgados', nome: 'Coxinha',          curto: 'Coxinha', preco: 700 },
  { id: 'sg-pastel',  cat: 'salgados', nome: 'Pastel de carne',  curto: 'Pastel de carne', preco: 900 },
  { id: 'sg-esfiha',  cat: 'salgados', nome: 'Esfiha de frango', curto: 'Esfiha de frango', preco: 700 },
  { id: 'sg-paoq',    cat: 'salgados', nome: 'Pão de queijo',    curto: 'Pão de queijo', preco: 500 },

  // Bebidas
  { id: 'bb-lata',     cat: 'bebidas', nome: 'Refrigerante lata',     curto: 'Refri lata', sub: '350 ml', preco: 600 },
  { id: 'bb-2l',       cat: 'bebidas', nome: 'Refrigerante 2 litros', curto: 'Refri 2 litros', preco: 1400 },
  { id: 'bb-agua',     cat: 'bebidas', nome: 'Água sem gás',          curto: 'Água sem gás', preco: 400 },
  { id: 'bb-agua-gas', cat: 'bebidas', nome: 'Água com gás',          curto: 'Água com gás', preco: 450 },
  { id: 'bb-cafe',     cat: 'bebidas', nome: 'Café expresso',         curto: 'Café expresso', preco: 500 },

  // Sucos
  { id: 'sc-laranja',  cat: 'sucos', nome: 'Suco de laranja',  curto: 'Laranja',  preco: 900 },
  { id: 'sc-limao',    cat: 'sucos', nome: 'Suco de limão',    curto: 'Limão',    preco: 800 },
  { id: 'sc-maracuja', cat: 'sucos', nome: 'Suco de maracujá', curto: 'Maracujá', preco: 900 },

  // Porções
  { id: 'pc-batata',   cat: 'outros', nome: 'Porção de batata frita', curto: 'Batata frita', sub: 'porção', preco: 1500 },
  { id: 'pc-mandioca', cat: 'outros', nome: 'Porção de mandioca frita', curto: 'Mandioca frita', sub: 'porção', preco: 1600 }
];
