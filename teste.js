const cardsContainer = document.querySelector('.cards-container');

const produtos = [
    { title: "Camiseta de Algodão Orgânico", description: "Camiseta unissex feita 100% de algodão orgânico, com tingimento natural e corte confortável.", img: "./assets/img/produto1.webp", price: "R$ 89,90", category: "Roupas e Acessórios Sustentáveis" },
    { title: "Jaqueta de Linho Reciclado", description: "Jaqueta leve e estilosa, feita com linho reciclado e botões de madeira sustentável.", img: "./assets/img/produto2.webp", price: "R$ 249,90", category: "Roupas e Acessórios Sustentáveis" },
    { title: "Tênis de Fibras Naturais", description: "Confortável e durável, produzido com fibra de bambu e borracha natural.", img: "./assets/img/produto3.webp", price: "R$ 299,90", category: "Roupas e Acessórios Sustentáveis" },
    { title: "Bolsa de Cortiça Vegana", description: "Mochila compacta e resistente, feita com cortiça sustentável e sem materiais de origem animal.", img: "./assets/img/produto4.webp", price: "R$ 159,90", category: "Roupas e Acessórios Sustentáveis" },
    { title: "Óculos de Sol de Madeira Reflorestada", description: "Lentes UV400 em armação de madeira de reflorestamento, design moderno e sustentável.", img: "./assets/img/produto5.webp", price: "R$ 199,90", category: "Roupas e Acessórios Sustentáveis" },
    { title: "Calça Jeans Ecológica", description: "Produzida com algodão reciclado e tingimento com baixo impacto ambiental.", img: "./assets/img/produto6.webp", price: "R$ 219,90", category: "Roupas e Acessórios Sustentáveis" },
    { title: "Carteira de Papel Reciclado", description: "Compacta e resistente, feita de papel reciclado e impermeabilizado.", img: "./assets/img/produto7.jpeg", price: "R$ 89,90", category: "Roupas e Acessórios Sustentáveis" },
    { title: "Meias de Bambu", description: "Macias, respiráveis e antibacterianas, feitas com fibra de bambu natural.", img: "./assets/img/produto8.jpeg", price: "R$ 39,90", category: "Roupas e Acessórios Sustentáveis" },
    { title: "Shampoo Sólido de Carvão Ativado", description: "Shampoo natural e vegano, que limpa profundamente sem agredir os fios.", img: "./assets/img/produto9.jpeg", price: "R$ 49,90", category: "Produtos de Beleza e Cuidados Pessoais Naturais" },
    { title: "Condicionador Sólido de Coco e Argan", description: "Fórmula nutritiva e sem plásticos, ideal para cabelos ressecados.", img: "./assets/img/produto10.jpeg", price: "R$ 54,90", category: "Produtos de Beleza e Cuidados Pessoais Naturais" },
    { title: "Desodorante Natural de Lavanda", description: "Sem alumínio e parabenos, feito com óleos essenciais e bicarbonato.", img: "./assets/img/produto11.jpeg", price: "R$ 45,90", category: "Produtos de Beleza e Cuidados Pessoais Naturais" },
    { title: "Hidratante Corporal de Karité e Baunilha", description: "Nutrição profunda com manteiga de karité pura e fragrância natural de baunilha.", img: "./assets/img/produto12.jpeg", price: "R$ 79,90", category: "Produtos de Beleza e Cuidados Pessoais Naturais" },
    { title: "Protetor Solar Mineral FPS 50", description: "Fórmula 100% natural e sem químicos prejudiciais aos oceanos.", img: "./assets/img/produto13.jpeg", price: "R$ 89,90", category: "Produtos de Beleza e Cuidados Pessoais Naturais" },
    { title: "Sabonete Facial de Argila Verde", description: "Limpa e equilibra a oleosidade da pele sem ressecar.", img: "./assets/img/produto14.jpeg", price: "R$ 29,90", category: "Produtos de Beleza e Cuidados Pessoais Naturais" },
    { title: "Óleo de Rosa Mosqueta Puro", description: "Regenerador natural para pele e cabelos, rico em antioxidantes.", img: "./assets/img/produto15.jpeg", price: "R$ 99,90", category: "Produtos de Beleza e Cuidados Pessoais Naturais" },
    { title: "Escova de Dente de Bambu Biodegradável", description: "Alternativa sustentável às escovas de plástico, com cerdas macias e biodegradáveis.", img: "./assets/img/produto16.jpeg", price: "R$ 19,90", category: "Produtos de Beleza e Cuidados Pessoais Naturais" },
    { title: "Kit de Talheres de Bambu", description: "Inclui garfo, faca, colher e hashi, ideal para substituir descartáveis.", img: "./assets/img/produto17.jpeg", price: "R$ 69,90", category: "Itens para Casa Sustentáveis" },
    { title: "Filtro de Café Reutilizável de Algodão", description: "Alternativa ecológica aos filtros descartáveis, feito de algodão orgânico.", img: "./assets/img/produto18.jpeg", price: "R$ 34,90", category: "Itens para Casa Sustentáveis" },
    { title: "Velas Naturais de Cera de Abelha", description: "Aroma natural e livre de parafina, com óleos essenciais relaxantes.", img: "./assets/img/produto19.jpeg", price: "R$ 59,90", category: "Itens para Casa Sustentáveis" },
    { title: "Esponja Vegetal para Cozinha", description: "Feita de bucha vegetal, biodegradável e ideal para lavar louças.", img: "./assets/img/produto20.jpeg", price: "R$ 24,90", category: "Itens para Casa Sustentáveis" },
    { title: "Sacolas Reutilizáveis de Algodão", description: "Resistentes e estilosas, perfeitas para substituir sacolas plásticas.", img: "./assets/img/produto21.jpeg", price: "R$ 39,90", category: "Itens para Casa Sustentáveis" },
    { title: "Copo Dobrável de Silicone Ecológico", description: "Leve e prático, ideal para café e bebidas em movimento.", img: "./assets/img/produto22.jpeg", price: "R$ 49,90", category: "Itens para Casa Sustentáveis" },
    { title: "Panos de Cera Vegetal para Embalar Alimentos", description: "Substitui o plástico filme na cozinha, reutilizável e antibacteriano.", img: "./assets/img/produto23.jpeg", price: "R$ 54,90", category: "Itens para Casa Sustentáveis" },
    { title: "Filtro Purificador de Carvão Ativado", description: "Purifica a água naturalmente, removendo impurezas e cloro.", img: "./assets/img/produto24.jpeg", price: "R$ 89,90", category: "Itens para Casa Sustentáveis" }
];

produtos.forEach(produto => {
    const cardHTML = `
        <div class="card eco-card shadow-sm">
            <img src="${produto.img}" class="card-img-top" alt="${produto.title}">
            <div class="card-body">
                <h5 class="card-title">${produto.title}</h5>
                <p class="card-text">${produto.description}</p>
                <p class="card-text"><strong>Preço:</strong> ${produto.price}</p>
                <p class="card-text"><strong>Categoria:</strong> ${produto.category}</p>
                <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-buy">Comprar</a>
                    <a href="#" class="btn btn-cart"><i class="bi bi-cart-fill"></i> 🛒</a>
                </div>
            </div>
        </div>
    `;
    cardsContainer.innerHTML += cardHTML;
});