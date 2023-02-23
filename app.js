const close = document.getElementById('close');
const navigation= document.querySelector('.navigation');
const menu = document.getElementById('menu');


menu.addEventListener('click', function(){
    navigation.classList.toggle('open');
});

close.addEventListener('click', function(){
    navigation.classList.remove('open');
});