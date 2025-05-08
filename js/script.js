const carrosseis = document.querySelectorAll('.carrossel');

carrosseis.forEach(carrossel => {
  let imagens = carrossel.querySelectorAll('img');
  let index = 0;

  const mostrarImagem = i => {
    imagens.forEach(img => img.classList.remove('imagemAtiva'));
    imagens[i].classList.add('imagemAtiva');
  };

  const btnProximo = carrossel.querySelector('.proximo');
  const btnAnterior = carrossel.querySelector('.anterior');

  if (btnProximo) {
    btnProximo.onclick = () => {
      index = (index + 1) % imagens.length;
      mostrarImagem(index);
    };
  }

  if (btnAnterior) {
    btnAnterior.onclick = () => {
      index = (index - 1 + imagens.length) % imagens.length;
      mostrarImagem(index);
    };
  }

  mostrarImagem(index);
});

function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}
