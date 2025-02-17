export function initContato() {
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