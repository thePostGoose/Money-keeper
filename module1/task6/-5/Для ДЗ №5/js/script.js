let menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('li');
menu.insertBefore(menuItems[2], menuItems[1]);
let fifthItem = document.createElement('li');
fifthItem.classList.add('menu-item');
fifthItem.innerHTML = 'Пятый пункт';
menu.appendChild(fifthItem);

document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

document.querySelector('#title').textContent = 'Мы продаем только подлинную технику Apple';

let adv = document.querySelector('.adv');
document.getElementsByClassName('column')[1].removeChild(adv);

document.querySelector('#prompt').textContent = prompt('отношение к технике apple', '');