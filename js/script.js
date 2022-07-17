const man = document.querySelector('.media');

man.addEventListener('click', () => {
 let i = getRandomInt(16);
 man.innerHTML = '<img src="images/man_' + i + '.svg" class="shadow" alt="random funny image">';
});

function getRandomInt(max) {
 return Math.floor(Math.random() * max);
}


// MODAL

const MODAL_TRIGGER = document.querySelector('.btn-modal'),
      MODAL = document.querySelector('.overlay'),
      MODAL_CLOSE = document.querySelector('.modal__close');


console.log(MODAL_TRIGGER);

MODAL_TRIGGER.addEventListener('click', (e) => {
    console.log(e.target);
    MODAL.classList.add('show');
    document.body.style.overflow = 'hidden';
});

function closeModal(x) {
 x.classList.remove('show');
 document.body.style.overflow = '';
};

MODAL_CLOSE.addEventListener('click', closeModal(MODAL));

// const AREA = document.querySelector('.modal__dialog');

MODAL.addEventListener('click', (e) => {
 if (e.target === MODAL || e.target === MODAL_CLOSE) {
  closeModal(MODAL);
 }
});

document.addEventListener('keydown', (e) => {
 if (e.code === "Escape" && MODAL.classList.contains('show')) {
  closeModal(MODAL);
 }
});