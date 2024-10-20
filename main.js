const burger = document.querySelector('.burger');
const navMobile = document.querySelector('.nav-mobile');
const navLink = document.querySelectorAll('.nav-list a'); // Получаем все ссылки в меню

// Обработчик клика для кнопки гамбургера
burger.addEventListener('click', () => {
  navMobile.classList.toggle('active');
  burger.classList.toggle('active');
});

// Обработчик клика для ссылок в меню
navLink.forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('active'); // Закрываем меню
    burger.classList.remove('active'); // Изменяем состояние кнопки
  });
});






// прокрутка

const navLinks = document.querySelectorAll('.nav-link-color');

// Обработайте клик по каждой ссылке
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение ссылки

    // Получаем ID элемента, к которому нужно перейти
    const targetId = this.href.split('#')[1];

    // Получаем элемент с соответствующим ID
    const targetElement = document.getElementById(targetId);

    // Плавная прокрутка к элементу
    targetElement.scrollIntoView({ 
      behavior: 'smooth' 
    }); 
  });
});

// прокрутка вверх 

window.addEventListener('scroll', function() {
  let btnUp = document.querySelector('.btn_up');
  if (window.pageYOffset > 100) { // Проверяем, прокрутили ли мы вниз на 100 пикселей
      btnUp.style.display = 'block'; 
  } else {
      btnUp.style.display = 'none';
  }
});







