const man = document.querySelector('.main_picture');

man.addEventListener('click', () => {
    let i = getRandomInt(7);
    man.innerHTML = '<img src="images/man_' + i + '.svg" class="shadow" alt="drinking">';
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}