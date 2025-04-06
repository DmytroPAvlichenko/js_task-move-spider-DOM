'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  let clickTop = e.clientY - wallRect.top;
  let clickLeft = e.clientX - wallRect.left;

  clickLeft = Math.max(0, clickLeft);
  clickTop = Math.max(0, clickTop);

  // Перевірка меж для правої та нижньої сторін
  clickLeft = Math.min(350, clickLeft);
  clickTop = Math.min(350, clickTop);

  spider.style.top = `${clickTop}px`;
  spider.style.left = `${clickLeft}px`;
});
