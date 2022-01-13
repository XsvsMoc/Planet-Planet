// code by tedy xsvs

let Imgbumi = document.getElementsByClassName("img-bumi")[0];
let Imgmid = document.getElementsByClassName("img-mid")[0];
let Imgforeground = document.getElementsByClassName("img-foreground")[0];
let Imgbatu = document.getElementsByClassName("img-batu")[0];
let Imgroket = document.getElementsByClassName("img-roket")[0];

window.addEventListener('scroll', function (){
    let value = window.scrollY;

    Imgbumi.style.left = value * 0.6 + 'px';
    Imgbumi.style.top = value * 1 + 'px';
    Imgmid.style.top = value * 0.3 + 'px';
    Imgforeground.style.left = value * 0.2+ 'px';
    Imgbatu.style.left = value * 2 + 'px';
    Imgroket.style.right = value * 1 + 'px';
    Imgroket.style.top = value * -1 + 'px';

})


const loader = document.querySelector('.loader');
const landing = document.querySelector('.landing');
const content = document.querySelector('.content');
const footer = document.querySelector('.footer');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        landing.style.display = 'block';
        setTimeout(() => (landing.style.opacity = 1), 50);

        content.style.display = 'block';
        setTimeout(() => (content.style.opacity = 1), 50);

        footer.style.display = 'block';
        setTimeout(() => (footer.style.opacity = 1), 50);
    }, 4000);
}

init();

