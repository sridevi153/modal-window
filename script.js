'use strict';
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelectorAll('.show-modal');
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
const closee = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
close.addEventListener('click', closee);
overlay.addEventListener('click', closee);

document.addEventListener('keydown', function (esc) {
  console.log(esc);
  if (esc.key === 'Escape' && !modal.classList.contains('hidden')) closee();
});
