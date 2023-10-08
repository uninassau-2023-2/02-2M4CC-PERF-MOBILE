// seleciona o elemento main
const main = document.querySelector('main');
const arrow = document.querySelector('.arrow');
// função para checar se o elemento está na tela
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
function handleArrow(isVisible) {
    if (isInViewport(main) && isVisible) {
      arrow.classList.add('hidden');
      return false; // retorna false se o elemento ficou visível
    } else if (!isInViewport(main) && !isVisible) {
      arrow.classList.remove('hidden');
      return true; // retorna true se o elemento ficou invisível
    }
    return isVisible; // retorna o estado atual do elemento se não houver alteração
  }
  
// função que adiciona ou remove a classe fade-in dependendo do estado atual do elemento
function handleScroll(isVisible) {
    if (isInViewport(main) && !isVisible) {
      main.classList.add('fade-in');
      main.classList.remove('fade-out');
      return true; // retorna true se o elemento ficou visível
    } else if (!isInViewport(main) && isVisible) {
      main.classList.remove('fade-in');
      return false; // retorna false se o elemento ficou invisível
    }
    return isVisible; // retorna o estado atual do elemento se não houver alteração
  }
  
  // variável para manter o controle do estado atual do elemento
  let arrowVisible = true;
  let mainVisible = false;
  
  // adiciona o event listener para checar quando o usuário rolou a tela
  window.addEventListener('scroll', function() {
    mainVisible = handleScroll(mainVisible);
    arrowVisible = handleArrow(arrowVisible);
  });