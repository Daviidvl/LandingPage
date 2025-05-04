const menu = document.getElementById('navMobile');
  const botao = document.getElementById('hamburguer');

  botao.addEventListener('click', () => {
    menu.classList.toggle('ativo');
  });