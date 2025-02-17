export function initHabilidades() {
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