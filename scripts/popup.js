document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links que possuem extensões de imagem no final do href
    const imageLinks = document.querySelectorAll(
      'a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]'
    );
    
    imageLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede a abertura em outra página
        const imageUrl = this.getAttribute('href');
        openImagePopup(imageUrl);
      });
    });
  
    function openImagePopup(imageUrl) {
      // Cria o overlay que servirá de fundo para o popup
      const overlay = document.createElement('div');
      overlay.className = 'image-popup-overlay';
      
      // Cria o container do popup
      const popupContainer = document.createElement('div');
      popupContainer.className = 'image-popup-container';
      
      // Cria a imagem a ser exibida
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Imagem';
      
      // Insere a imagem dentro do container
      popupContainer.appendChild(img);
      // Insere o container dentro do overlay
      overlay.appendChild(popupContainer);
      
      // Adiciona o overlay no body
      document.body.appendChild(overlay);
      
      // Fecha o popup ao clicar fora da imagem
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
          document.body.removeChild(overlay);
        }
      });
    }
  });
  