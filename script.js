
// Contact form feedback (no backend, just UI for now)
document.addEventListener('DOMContentLoaded', function() {
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var msgDiv = document.getElementById('form-message');
      msgDiv.textContent = 'Дякуємо! Ваше повідомлення відправлено.';
      contactForm.reset();
      setTimeout(function() {
        msgDiv.textContent = '';
      }, 5000);
    });
  }

  // Carousel logic with animation
  var carouselImages = [
    'https://hrups.com.ua/wp-content/uploads/2017/06/vasabi-430x430.jpg',
    'https://hrups.com.ua/wp-content/uploads/2023/03/salo-girchytsja-430x430.jpg',
    'https://hrups.com.ua/wp-content/uploads/2023/03/HRUPS00013_1-430x430.jpg',
    'https://hrups.com.ua/wp-content/uploads/2023/03/HRUPS00029_1-430x430.jpg',
    'https://hrups.com.ua/wp-content/uploads/2023/09/Frame-107-7-430x430.jpg'
  ];
  var carouselIndex = 2;
  var carouselEl = document.getElementById('carousel');
  var isAnimating = false;

  function renderCarousel(direction) {
    if (!carouselEl) return;

    // Clean old images
    carouselEl.innerHTML = '';

    // Show 5 images: far-left, left, center, right, far-right
    for (var i = -2; i <= 2; i++) {
      let imgIdx = (carouselIndex + i + carouselImages.length) % carouselImages.length;
      let img = document.createElement('img');
      img.src = carouselImages[imgIdx];
      img.className = 'carousel-img';

      if (i === 0) img.classList.add('center');
      if (i === -1) img.classList.add('left');
      if (i === 1) img.classList.add('right');
      if (i === -2) img.classList.add('far-left');
      if (i === 2) img.classList.add('far-right');

      // For animation: add data-direction
      if (direction) {
        img.setAttribute('data-animate', direction);
      }

      carouselEl.appendChild(img);
    }

    // Run animation if direction is set
    if (direction) {
      isAnimating = true;
      setTimeout(function() {
        var imgs = carouselEl.querySelectorAll('img');
        imgs.forEach(function(img) {
          img.removeAttribute('data-animate');
        });
        isAnimating = false;
      }, 600);
    }
  }

  if (carouselEl) {
    renderCarousel();

    document.getElementById('carousel-prev').onclick = function() {
      if (isAnimating) return;
      carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
      renderCarousel('left');
    };
    document.getElementById('carousel-next').onclick = function() {
      if (isAnimating) return;
      carouselIndex = (carouselIndex + 1) % carouselImages.length;
      renderCarousel('right');
    };
  }
});

// Страница товара
document.addEventListener('DOMContentLoaded', function() {
  // PRODUCT PAGE LOGIC
  var productDetails = document.getElementById('product-details');
  if (productDetails) {
    // Массив товаров (позже расширите)
    var products = [
      {
        id: '1',
        name: 'Класичний картопляний снек',
        img: 'https://hrups.com.ua/wp-content/uploads/2023/09/Frame-107-9-430x430.jpg',
        taste: 'Класичний, солоний',
        weight: '50 г, 100 г, 200 г',
        pack: 'Пакет, коробка',
        description: 'Хрусткий, легкий, з насиченим смаком. Ідеально для перекусу, магазинів та HoReCa.',
        extra: 'Без ГМО. Срок зберігання: 6 місяців.'
      },
      {
        id: '2',
        name: 'Снек з паприкою',
        img: 'https://hrups.com.ua/wp-content/uploads/2023/09/Frame-107-9-430x430.jpg',
        taste: 'Паприка, легка гострота',
        weight: '50 г, 150 г',
        pack: 'Пакет',
        description: 'Яскравий смак паприки та спецій для справжніх гурманів.',
        extra: 'Підходить для вегетаріанців.'
      },
      {
        id: '3',
        name: 'Снек зі сметаною та зеленню',
        img: 'https://hrups.com.ua/wp-content/uploads/2023/09/Frame-107-9-430x430.jpg',
        taste: 'Сметана, зелень',
        weight: '70 г, 100 г',
        pack: 'Пакет',
        description: 'Ніжний смак сметани і аромат зелені у кожному шматочку.',
        extra: 'Сертифіковано ISO 22000.'
      },
      {
        id: '4',
        name: 'Гострий картопляний снек',
        img: 'https://hrups.com.ua/wp-content/uploads/2023/09/Frame-107-9-430x430.jpg',
        taste: 'Гострий, перець чілі',
        weight: '50 г, 100 г',
        pack: 'Пакет',
        description: 'Для любителів гострих відчуттів! Справжній вибух смаку.',
        extra: 'Містить натуральні спеції.'
      }
    ];

    // Получаем id из URL
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id') || '1';

    // Находим товар
    var product = products.find(p => p.id === id) || products[0];

    // Формируем HTML
    productDetails.innerHTML = `
      <div class="product-details">
        <img src="${product.img}" alt="${product.name}" class="product-details-img">
        <div class="product-details-info">
          <h1>${product.name}</h1>
          <p><strong>Смак:</strong> ${product.taste}</p>
          <p><strong>Вага фасування:</strong> ${product.weight}</p>
          <p><strong>Тип упаковки:</strong> ${product.pack}</p>
          <p><strong>Опис:</strong> ${product.description}</p>
          <p><strong>Додатково:</strong> ${product.extra}</p>
        </div>
      </div>
    `;
  }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();
  var msgDiv = document.getElementById('form-message');

  msgDiv.textContent = 'Дякуємо! Ваше повідомлення відправлено.';
  msgDiv.classList.add('show');
  this.reset();

  setTimeout(function() {
    msgDiv.classList.remove('show');
    msgDiv.textContent = '';
  }, 6000);

  // Отправка формы на сервер
  fetch('https://artemiydelaetkrasivo.github.io/harvest/send_to_telegram.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'text=' + encodeURIComponent(
      'Чшфвтуіі\n' +
      'Ім\'я: ' + name + '\n' +
      'Email: ' + email + '\n' +
      'Повідомлення: ' + message
    )
  });

});
