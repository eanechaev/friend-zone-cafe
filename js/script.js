
// jshint esversion: 6

// if (document.body.contains(document.querySelector('.media'))) {
//     const man = document.querySelector('.media');

//     man.addEventListener('click', () => {
//      let i = getRandomInt(17);
//      man.innerHTML = '<img src="images/man_' + i + '.svg" class="shadow" alt="random funny image">';
//     });
    
//     function getRandomInt(max) {
//      return Math.floor(Math.random() * max);
//     }
// };

// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
};

// Open menu
const menuOpenIcon = selectElement('.open-menu-icon'),
      menuCloseIcon = selectElement('.close-menu-icon');

const openMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.add('activated');
};

const closeMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.remove('activated');
};

menuOpenIcon.addEventListener('click', () => {
    openMenu();
});

menuCloseIcon.addEventListener('click', () => {
    closeMenu();
});

window.addEventListener('click', (e) => {
    console.log(e.target);
});

// MODAL

const MODAL_TRIGGER = document.querySelector('.btn-modal'),
      MODAL_MENU_TRIGGER = document.querySelector('.btn-list-item'),
      MODAL = document.querySelector('.overlay'),
      MODAL_CLOSE = document.querySelector('.modal__close');


MODAL_TRIGGER.addEventListener('click', (e) => {
    console.log(e.target);
    MODAL.classList.add('show');
    document.body.style.overflow = 'hidden';
});

MODAL_MENU_TRIGGER.addEventListener('click', (e) => {
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

// join us text

if (document.body.contains(document.querySelector('.join_us'))) {
    const MODAL_TEXT_TRIGGER = document.querySelector('.join_us');

    MODAL_TEXT_TRIGGER.addEventListener('click', (e) => {
        console.log(e.target);
        MODAL.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
}

// funny dialog

if (document.body.contains(document.querySelector('.dialog'))) {

    const DIALOG = document.querySelector('.dialog');
    const MAN = document.querySelector('.hello_animation');

    console.log(MAN);

    function showDialog() {
        DIALOG.showModal();
    };

    function closeDialog() {
        DIALOG.close();
    };

    setTimeout(showDialog, 10500);
    setTimeout(closeDialog, 14000);

    function goodbyeMan() {
        MAN.classList.add('goodbye_animation');
    }

    setTimeout(goodbyeMan, 13000);

    // if (DIALOG.hasAttribute('open')) {
    // document.addEventListener('click', {
    //     closeDialog();
    // });

    // function changeDisplay(item) {
    //     item.css('display', 'block');
    // }
    
    // setTimeout(changeDisplay(DIALOG), 1000);
}

