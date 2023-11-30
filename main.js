let ruBtn = document.querySelector(".lang__ru");
let enBtn = document.querySelector(".lang__en");
let heroModal = document.querySelector('.hero__modal');
let modalBtn = document.querySelector('.hero__btn');
let closeModal = document.querySelector('.modal__close');
let diagnosticBtn = document.querySelector(".diagnostic_btn");
let diagnosticModal = document.querySelector(".diagnostic__modal");
let diagnosticClose = document.querySelector('.diagnostic__close');
let wheelsBtn = document.querySelector('.wheels_btn');
let wheelsModal = document.querySelector('.wheels__modal');
let wheelsClose = document.querySelector('.wheels__close');
let enginesBtn = document.querySelector('.engines__btn');
let enginesModal = document.querySelector('.engines__modal');
let enginesClose = document.querySelector('.engines__close');
let contactsBtn = document.querySelector('.contacts__btn');
let form = document.querySelector('form');
let contactsModal = document.querySelector('.contacts__modal');
let contactsClose = document.querySelector('.contacts__close');


ruBtn.addEventListener('click', ()=>{
    ruBtn.classList.toggle('lang__font')
    enBtn.classList.remove('lang__font')
});

enBtn.addEventListener('click', ()=>{
    enBtn.classList.toggle('lang__font')
    ruBtn.classList.remove('lang__font')
});

modalBtn.addEventListener('click', ()=>{
    heroModal.style = "display: block"
});

closeModal.addEventListener('click', ()=>{
    heroModal.style = "display: none"
});

diagnosticBtn.addEventListener('click', ()=>{
    diagnosticModal.style = "display: block"
});

diagnosticClose.addEventListener('click', ()=>{
    diagnosticModal.style = "display: none"
});

wheelsBtn.addEventListener('click', ()=>{
    wheelsModal.style =  "display: block"
});

wheelsClose.addEventListener('click', ()=>{
    wheelsModal.style =  "display: none"
});

enginesBtn.addEventListener('click', ()=>{
    enginesModal.style = "display: block"
});

enginesClose.addEventListener('click', ()=>{
    enginesModal.style = "display: none"
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    form.reset();
    contactsModal.style = "display: block"
});

contactsClose.addEventListener('click', ()=>{
    contactsModal.style = "display: none"
})
