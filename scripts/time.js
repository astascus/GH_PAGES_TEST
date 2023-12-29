let now = new Date();


document.querySelector('.js-time-span').innerHTML=now.getFullYear();
document.querySelector('.js-time-span').innerHTML+='-';
document.querySelector('.js-time-span').innerHTML+=now.getMonth();
document.querySelector('.js-time-span').innerHTML+='-';
document.querySelector('.js-time-span').innerHTML+=now.getDate();
document.querySelector('.js-time-span').innerHTML+=',   ';
document.querySelector('.js-time-span').innerHTML+=now.getHours();
document.querySelector('.js-time-span').innerHTML+=':';
document.querySelector('.js-time-span').innerHTML+=now.getMinutes();
document.querySelector('.js-time-span').innerHTML+=':';
document.querySelector('.js-time-span').innerHTML+=now.getSeconds();