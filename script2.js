/*
const paragrafos = document.querySelectorAll('p')


paragrafos.forEach((item) => console.log(item));
paragrafos.forEach((item) => console.log(item.innerText));

*/


/*
Adicione a Classe ativo a todos os itens do menu 

const menu = document.querySelectorAll('.menu a');

menu.forEach((item) => item.classList.add('ativo'));
*/

// Verifique se os imagens possuem o atributo alt
/*
const imgs = document.querySelectorAll('img')

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt');
  console.log(possuiAtributo);
})

*/

// Verique a distância da primeira imagem em relação ao topo da página. 
/*
const primeiriaImg = document.querySelector('img');

const imgTop = primeiriaImg.offsetTop;

console.log(imgTop);
*/

// Retorne a soma da largura de todas as imagens
/*
function somaImagens () {
  const imgLargura = document.querySelectorAll('img');
  let soma = 0;
  imgLargura.forEach((img) => {
    const imgWidth = img.offsetWidth;
    soma = soma + imgWidth;
  });
  console.log(soma);
}

window.onload = function() {
  somaImagens();
}
*/
/*
const links = document.querySelectorAll('a');

links.forEach((item) => {
  const reactLinks = item.getBoundingClientRect();
  
  if(reactLinks.height >= 48 && reactLinks.width >= 48) {
    console.log('Links da página possuem o mínimo recomendado');
  } else {
    console.log('Links da página não possuem o mínimo recomendado');
  }
});
*/
/*
const browserSmall = window.matchMedia('(max-width: 720px').matches;

if(browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
*/

/*
const linkExterno = document.querySelector('a[href^="http"]');


function handleLinkExterno (event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', handleLinkExterno);
*/
/*
const imgs = document.querySelectorAll('img');

function handleImg (event) {
  console.log(event.currentTarget.getAttribute('src'));

}

imgs.forEach((img)  => {
  img.addEventListener('click', handleImg);
})
*/
/*
const links = document.querySelectorAll('a');

function handleLink (event) {
  event.preventDefault();
  links.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}

links.forEach((link) => {
  link.addEventListener('click', handleLink);
})
*/

/*
const elementosAll = document.querySelectorAll('body *');

function handleElement(event) {
  event.target.remove();
}

elementosAll.forEach((elemento) => {
  elemento.addEventListener('click', handleElement);
})

const copy = document.querySelector('.copy');
const menu = document.querySelector('.menu');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

*/


// Mude a cor da tela para azul e depois para vermelho a cada 2s. 
/*
function mudarCor() {
  document.body.classList.toggle('active');
}

setTimeout(mudarCor, 2000);
*/