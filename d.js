//SEARCH BUTTON

const search=document.querySelector('.search');
const bt=document.querySelector('.bt');
const input=document.querySelector('.input');

bt.addEventListener('click',()=>{
    search.classList.toggle('active');
    input.focus()
})

