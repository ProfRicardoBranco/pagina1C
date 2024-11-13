// script.js

// Seleciona todos os links das imagens para abrir o player
const abrirPlayerLinks = document.querySelectorAll('.abrirPlayer');

// Seleciona o elemento do player e do iframe
const player = document.getElementById('player');
const playerIframe = document.getElementById('playerIframe');
const fecharPlayer = document.getElementById('fecharPlayer');

// Adiciona o evento de click nos links para abrir o player flutuante
abrirPlayerLinks.forEach(link => {
  link.addEventListener('click', function() {
    const videoId = this.getAttribute('data-video-id');
    // Modifica o src do iframe para o vídeo clicado
    playerIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    // Exibe o player flutuante
    player.style.display = 'flex';
  });
});

// Adiciona o evento de fechar o player
fecharPlayer.addEventListener('click', function() {
  // Limpa o iframe e fecha o player
  playerIframe.src = '';
  player.style.display = 'none';
});
