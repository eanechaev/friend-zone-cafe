"use strict";

const man = document.querySelector('.main_picture');

man.addEventListener('click', () => {
    let i = getRandomInt(8);
    man.innerHTML = '<img src="images/man_' + i + '.svg" class="shadow" alt="drinking">';
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Timer

const DEAD_LINE = '2022 Aug 01 00:00';

function getTimeRemaining(endtime) {
    const T = Date.parse(endtime) - Date.parse(new Date()),
          DAYS = Math.floor(T / (1000 * 60 * 60 * 24)),
          HOURS = Math.floor((T / (1000 * 60 * 60)) % 24),
          MINUTES = Math.floor((T / (1000 * 60)) % 60),
          SECONDS = Math.floor((T / 1000) % 60);

        //   console.log(T, DAYS, HOURS, MINUTES, SECONDS);
    return {
        'total': T,
        'days': DAYS,
        'hours': HOURS,
        'minutes': MINUTES,
        'seconds': SECONDS
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const TIMER = document.querySelector(selector),
          DAYS = TIMER.querySelector('#days'),
          HOURS = TIMER.querySelector('#hours'),
          MINUTES = TIMER.querySelector('#minutes'),
          SECONDS = TIMER.querySelector('#seconds'),
          TIME_INTERVAL = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const T = getTimeRemaining(endtime);

        DAYS.innerHTML = getZero(T.days);
        HOURS.innerHTML = getZero(T.hours);
        MINUTES.innerHTML = getZero(T.minutes);
        SECONDS.innerHTML = getZero(T.seconds);

        if (T.total <= 0) {
            clearInterval(TIME_INTERVAL);
        }
    }

}

setClock('.timer', DEAD_LINE);

// MODAL

const MODAL_TRIGGER = document.querySelector('[data-modal]'),
MODAL = document.querySelector('.modal'),
MODAL_CLOSE = document.querySelector('[data-close]');

MODAL_TRIGGER.addEventListener('click', () => {
  MODAL.classList.toggle('show');
  document.body.style.overflow = 'hidden';
});

function closeModal(x) {
x.classList.toggle('show');
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