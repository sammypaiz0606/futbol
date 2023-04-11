
let toggleNav = false;
let toggleNav_2 = false;

let slide = document.querySelector('.mainSlide');

let slideBar = document.getElementById('slideBar');
let x_icon = document.getElementById('x_icon');

let dropMenu = document.getElementById('dropMenu');

slide.addEventListener('click', ()=> {

    console.log('it worked');

    if(toggleNav === false) {
        list.style.visibility = 'visible';
        list.style.width = '300px';

        toggleNav = true;
    }
    else {
        list.style.width = '0px';
        // slideBar.style.visibility = 'hidden';

        toggleNav = false;

    }
});

x_icon.addEventListener('click', ()=> {
    if(toggleNav_2 === false) {
        dropMenu.style.display = 'none';
        dropMenu.style.visibility = 'hidden';
        toggleNav_2 = true;
    } else {
        dropMenu.style.visiblity = 'visible';

        toggleNav_2 = false;
    }
});