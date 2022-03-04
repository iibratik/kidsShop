// VARIBLES
let btnSwitch = document.querySelector('.switch-theme'),
    themeSwitchSec = document.querySelector('.light-theme'),
    logo           = document.querySelector('.logo'),
    person         = document.querySelector('.person'),
    favourite      = document.querySelector('.favourite'),
    bag            = document.querySelector('.bag'),
    clothes        = document.querySelector('.clothes'),
    payCard        = document.querySelector('.pay-card'),
    btnMinus       = document.querySelector('.minus'),
    btnPlus        = document.querySelector('.plus'),
    countSec       = document.querySelector('.input__count'),
    count = 1;

//BTN ACTIONS
btnSwitch.addEventListener('click', function name() 
{
    darkFun();
})
btnMinus.addEventListener("click", ()=>{
    count--;
    countSec.innerHTML = count;
})
btnPlus.addEventListener("click", ()=>{
    count++;
    countSec.innerHTML = count;
})



//FUNCTIONS
function darkFun(params) {
    themeSwitchSec.classList.toggle("dark-theme");
    btnSwitch.classList.toggle("dark-btn");
    if (btnSwitch.className == "nav__list switch-theme dark-btn") {
        btnSwitch.innerHTML = '<i class="fas fa-toggle-on"></i>';
        clothes.innerHTML = '<img src="img/dark/clothes.svg" alt=""> Описание товара';
        payCard.innerHTML = '<img src="img/dark/pay-card.svg" alt=""> Способы оплаты';
        logo.innerHTML = '<img src="img/dark/LOGO.svg" alt="">';
        person.innerHTML = '<img src="img/dark/person.svg" alt="">';
        bag.innerHTML = '<img src="img/dark/bag.svg" alt="">';
        favourite.innerHTML = '<img src="img/dark/favourite.svg" alt=""></a>';
    }else{
        btnSwitch.innerHTML = '<i class="fas fa-toggle-off"></i>';
        logo.innerHTML = '<img src="img/nav/LOGO.svg" alt="">';
        person.innerHTML = '<img src="img/nav/person.svg" alt="">';
        bag.innerHTML = '<img src="img/nav/card-icon.svg" alt=""></a>';
        favourite.innerHTML = '<img src="img/nav/favorite.svg" alt=""></a>';
        clothes.innerHTML = '<img src="img/main/Closes.svg" alt=""> Описание товара';
        payCard.innerHTML = '<img src="img/main/pay.svg" alt=""> Способы оплаты';
    }

  }