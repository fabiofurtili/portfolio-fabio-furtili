document.addEventListener("DOMContentLoaded", function () {
    console.log("Página carregada!");

    // Menu ativo
    const menuItems = document.querySelectorAll(".navegacao ul li");

    // Define o item ativo ao carregar a página
    function setActiveMenuItem() {
        const currentPage = window.location.pathname.split("/").pop();

        menuItems.forEach((item) => {
            const link = item.querySelector("a").getAttribute("href");
            if (link === currentPage) {
                item.classList.add("active");
            }
        });
    }

    setActiveMenuItem();

    // Adiciona o evento de clique para alternar a classe 'active'
    menuItems.forEach((item) => {
        item.addEventListener("click", function () {
            menuItems.forEach((menuItem) => {
                menuItem.classList.remove("active");
            });
            this.classList.add("active");
        });
    });

    // Menu mobile
    const menuHamburger = document.getElementById('menu-hamburger');
    const navegacao = document.querySelector('.navegacao');

    // Verifica a largura da tela ao carregar a página
    function ajustarMenuMobile() {
        if (window.innerWidth <= 768) {
            navegacao.style.width = '75px'; // Inicia recolhido em dispositivos móveis
            navegacao.classList.remove('expandido');
        } else {
            navegacao.style.width = '250px'; // Inicia expandido em desktop
            navegacao.classList.add('expandido');
        }
    }

    // Ajusta o menu ao carregar a página
    ajustarMenuMobile();

    // Ajusta o menu ao redimensionar a janela
    window.addEventListener('resize', ajustarMenuMobile);

    // Abrir/fechar o menu lateral e animar o botão hamburger
    if (menuHamburger) {
        menuHamburger.addEventListener('click', function () {
            // Alternar a classe "active" no botão hamburger
            menuHamburger.classList.toggle('active');

            // Alternar a classe "expandido" no menu lateral
            navegacao.classList.toggle('expandido');

            // Alternar a largura do menu lateral
            if (navegacao.classList.contains('expandido')) {
                navegacao.style.width = '250px'; // Expandir o menu
            } else {
                navegacao.style.width = '75px'; // Recolher o menu
            }
        });
    }

    // Fechar o menu ao clicar em um link (opcional)
    const linksMenu = document.querySelectorAll('.navegacao ul li a');
    linksMenu.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) { // Apenas em dispositivos móveis
                navegacao.style.width = '75px'; // Recolher o menu
                navegacao.classList.remove('expandido');
                menuHamburger.classList.remove('active');
            }
        });
    });

    // Interações específicas por página (mantido igual)
    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "servicos.html") {
        console.log("Página de Serviços carregada!");

        // Exemplo de interação: Adicionar um efeito ao clicar em um serviço
        const servicos = document.querySelectorAll(".servico");
        servicos.forEach(servico => {
            servico.addEventListener("click", () => {
                alert(`Você clicou no serviço: ${servico.querySelector("h2").textContent}`);
            });
        });
    }

    if (currentPage === "projetos.html") {
        console.log("Página de Projetos carregada!");

        // Exemplo de interação: Adicionar um efeito ao clicar no botão "Ver Detalhes"
        const botoes = document.querySelectorAll(".btn");
        botoes.forEach(botao => {
            botao.addEventListener("click", (e) => {
                e.preventDefault();
                alert(`Você clicou no projeto: ${botao.closest(".projeto").querySelector("h2").textContent}`);
            });
        });
    }

    if (currentPage === "habilidades.html") {
        console.log("Página de Habilidades carregada!");

        // Exemplo de animação para as barras de progresso
        const barras = document.querySelectorAll(".progresso");
        barras.forEach(barra => {
            const porcentagem = barra.style.width;
            barra.style.width = "0"; // Inicia com 0%
            setTimeout(() => {
                barra.style.width = porcentagem; // Anima até a porcentagem definida
            }, 500);
        });
    }

    if (currentPage === "contato.html") {
        console.log("Página de Contato carregada!");

        // Exemplo de validação e envio do formulário
        const formulario = document.getElementById("formulario-contato");
        if (formulario) {
            formulario.addEventListener("submit", function (e) {
                e.preventDefault(); // Impede o envio padrão do formulário

                // Captura os dados do formulário
                const nome = document.getElementById("nome").value;
                const email = document.getElementById("email").value;
                const mensagem = document.getElementById("mensagem").value;

                // Validação simples
                if (nome && email && mensagem) {
                    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
                    formulario.reset(); // Limpa o formulário
                } else {
                    alert("Por favor, preencha todos os campos.");
                }
            });
        }
    }
});