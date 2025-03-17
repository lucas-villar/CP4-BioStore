
const cardsContainer = document.querySelector('.cards-container');

const produtos = [
    { title: "Produto Ecológico 1", description: "Este produto é 100% ecológico, feito de materiais sustentáveis.", img: "./assets/img/Materiais-Reutilizaveis_png.png" },
    { title: "Produto Ecológico 2", description: "Este produto é feito com materiais reciclados e biodegradáveis.", img: "./assets/img/canudo.png" },
    { title: "Produto Ecológico 3", description: "Com um design inovador, é perfeito para quem se importa com o meio ambiente.", img: "./assets/img/bag.png" },
    { title: "Produto Ecológico 4", description: "Produto feito com materiais 100% reciclados.", img: "./assets/img/casa.png" },
    { title: "Produto Ecológico 5", description: "Ideal para quem busca sustentabilidade.", img: "./assets/img/ar.png" },
    { title: "Produto Ecológico 6", description: "Design minimalista, perfeito para o meio ambiente.", img: "./assets/img/bateria.png" },
    { title: "Produto Ecológico 7", description: "Feito de materiais orgânicos.", img: "./assets/img/camisa.png" },
    { title: "Produto Ecológico 8", description: "Contribua para o futuro com este produto sustentável.", img: "./assets/img/cinto.png" },
    { title: "Produto Ecológico 9", description: "Feito de fibras naturais.", img: "./assets/img/coletor.png" },
    { title: "Produto Ecológico 10", description: "Produto ecológico para o dia a dia.", img: "./assets/img/desinf.png" },
    { title: "Produto Ecológico 11", description: "Produto sustentável e reciclável.", img: "./assets/img/detergente.png" },
    { title: "Produto Ecológico 12", description: "Pensado para quem se preocupa com o meio ambiente.", img: "./assets/img/eco.png" },
    { title: "Produto Ecológico 13", description: "Sustentável e inovador.", img: "./assets/img/embalagem.png" },
    { title: "Produto Ecológico 14", description: "Feito de materiais reciclados.", img: "./assets/img/escova.png" },
    { title: "Produto Ecológico 15", description: "Ideal para quem busca um estilo de vida sustentável.", img: "./assets/img/glitter.png" },
    { title: "Produto Ecológico 16", description: "Produto ecológico e útil para o cotidiano.", img: "./assets/img/kit.png" },
    { title: "Produto Ecológico 17", description: "Design inovador e ecológico.", img: "./assets/img/led.png" },
    { title: "Produto Ecológico 18", description: "Feito de maneira consciente e sustentável.", img: "./assets/img/liqui.png" },
    { title: "Produto Ecológico 19", description: "Produto 100% reciclável e sustentável.", img: "./assets/img/pa.png" },
    { title: "Produto Ecológico 20", description: "Ideal para quem busca uma alternativa ecológica.", img: "./assets/img/tijolo.png" }
];

produtos.forEach(produto => {
    const cardHTML = `
        <div class="card eco-card shadow-sm">
            <img src="${produto.img}" class="card-img-top" alt="${produto.title}">
            <div class="card-body">
                <h5 class="card-title">${produto.title}</h5>
                <p class="card-text">${produto.description}</p>
                <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-buy">Comprar</a>
                    <a href="#" class="btn btn-cart"><i class="bi bi-cart-fill"></i> 🛒</a>
                </div>
            </div>
        </div>
    `;
    cardsContainer.innerHTML += cardHTML;
});
