let hamburger = document.querySelector('.hamburger');
let hamburgerClose = document.querySelector('.header__content-close');
hamburger.addEventListener('click', event => {
  hamburger.classList.add("active");
  document.querySelector('.header__content').classList.add("active");
  document.querySelector('body').classList.add("nav-open");
});
hamburgerClose.addEventListener('click', event => {
  hamburger.classList.remove("active");
  document.querySelector('.header__content').classList.remove("active");
  document.querySelector('body').classList.remove("nav-open");
});


window.addEventListener("load", onLoadFunction);

function onLoadFunction(e){
  let cartCount = '';
  setTimeout(function(){ 
    cartCount = document.querySelector('#slidecarthq .cart-count').innerText;
    if(cartCount){
      document.querySelector('.basket .cart-count').innerText = cartCount;
      document.querySelector('.basket .cart-count').style.display = "flex";
    }else{
      document.querySelector('.basket .cart-count').style.display = "none";
    }
  }, 1000);
}

window.addEventListener("click", onClickFunction);

function onClickFunction(e){
  let cartCount = '';
  cartCount = document.querySelector('#slidecarthq .cart-count').innerText;
  if(cartCount){
    document.querySelector('.basket .cart-count').innerText = cartCount;
    document.querySelector('.basket .cart-count').style.display = "flex";
  }else{
    document.querySelector('.basket .cart-count').style.display = "none";
  }
}