
let toggleNav = false;
let toggleNav_2 = false;

let slide = document.querySelector('.mainSlide');
let bars_2 = document.getElementById('bars_2');

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
    dropMenu.style.height = '0px';
    // bars_2.style.visibility = 'visible';
    bars_2.style.display = 'block';
});

bars_2.addEventListener('click', ()=> {
    dropMenu.style.height = '60%';
    // bars_2.style.visibility = 'hidden';
    bars_2.style.display = 'none';
});