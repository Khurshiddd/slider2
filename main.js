window.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider'),
        activ = document.querySelector('#activ'),
        line1 = document.querySelector('#line1'),
        line2 = document.querySelector('#line2'),
        line3 = document.querySelector('#line3'),
        line4 = document.querySelector('#line4'),
        container = document.querySelector('.container');

    line1.addEventListener('click', function() {
        slider.style.transform = "translateX(0)";
        activ.style.top = 0;
        container.style.background = 'linear-gradient(45deg, #22046b, #e14e42)';
    });
    line2.addEventListener("click", function() {
        slider.style.transform = "translateX(-25%)";
        activ.style.top = "80px";
        container.style.background = 'linear-gradient(45deg, #e5f842, #4b0ce9)';;
    });
    line3.addEventListener("click", function() {
        slider.style.transform = "translateX(-50%)";
        activ.style.top = "160px";
        container.style.background = 'linear-gradient(45deg, #dc2852, #21d721)';;
    });
    line4.addEventListener("click", function() {
        slider.style.transform = "translateX(-75%)";
        activ.style.top = "240px";
        container.style.background = 'linear-gradient(45deg, #4b35c9, #fffe42)';;
    });

})