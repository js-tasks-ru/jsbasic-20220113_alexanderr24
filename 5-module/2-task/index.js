function toggleText() {
  // ваш код...
  let btn = document.querySelector('.toggle-text-button');
  let text = btn.nextElementSibling;

  btn.addEventListener('click', () => {
    text.hidden = !text.hidden;
  });
}
