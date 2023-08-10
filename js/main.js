const openmodal = document.querySelector('.imagenp');
const modal = document.querySelector('.modal');
const closemodal = document.querySelector('.modal-close');
openmodal.addEventListener('click',()=>{
    modal.classList.add('modal--show');
});

closemodal.addEventListener('click',()=>{
    modal.classList.remove('modal--show');
});