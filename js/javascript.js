
let toggleNav = false;

let slide = document.querySelector('.mainSlide');

let slideBar = document.getElementById('slideBar');
let list = document.getElementById('list');

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