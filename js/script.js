const menuToggle = document.querySelector('.menuToggle');

const navigation = document.querySelector('.navigation');

const footerMenu = document.querySelector('.footerMenu');


    menuToggle.onclick = function(){

        menuToggle.classList.toggle('active');

        navigation.classList.toggle('active');

        footerMenu.classList.toggle('active');
}


window.addEventListener('scroll', function(){

    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 0);
})

function toggleMenu(){

       menuToggle.classList.remove('active');

       navigation.classList.remove('active');

       footerMenu.classList.remove('active');
       
}