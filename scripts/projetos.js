document.addEventListener('DOMContentLoaded', function() {
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const projetos = document.querySelectorAll('.projeto');

    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const categoria = this.getAttribute('data-categoria');

            // Remove a classe 'active' de todos os botões
            filtroBtns.forEach(b => b.classList.remove('active'));
            // Adiciona a classe 'active' ao botão clicado
            this.classList.add('active');

            // Filtra os projetos
            projetos.forEach(projeto => {
                const projetoCategoria = projeto.getAttribute('data-categoria');
                if (categoria === 'todos' || projetoCategoria === categoria) {
                    projeto.style.display = 'block';
                } else {
                    projeto.style.display = 'none';
                }
            });
        });
    });
});