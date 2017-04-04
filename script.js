window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
})


function removeTransition(e) {
    this.classList.remove('playing');
}