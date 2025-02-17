export function initServicos() {
    console.log("Página de Serviços carregada!");

    // Exemplo de interação: Adicionar um efeito ao clicar em um serviço
    const servicos = document.querySelectorAll(".servico");
    servicos.forEach(servico => {
        servico.addEventListener("click", () => {
            alert(`Você clicou no serviço: ${servico.querySelector("h2").textContent}`);
        });
    });
}