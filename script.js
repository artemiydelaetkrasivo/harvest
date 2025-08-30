const track = document.getElementById('carouselTrack');
const items = document.querySelectorAll('.carousel-item');
let index = 0;

function showSlide(i) {
  track.style.transform = `translateX(${-i * 100}%)`;
}

document.getElementById('carouselPrev').onclick = () => {
  index = (index - 1 + items.length) % items.length;
  showSlide(index);
};
document.getElementById('carouselNext').onclick = () => {
  index = (index + 1) % items.length;
  showSlide(index);
};

showSlide(index);

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

  // Відправка на сервер
  fetch('send_to_telegram.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: 'text=' + encodeURIComponent(
      'Нове повідомлення:\n' +
      'Ім\'я: ' + name + '\n' +
      'Email: ' + email + '\n' +
      'Повідомлення: ' + message
    )
  })
  .then(res => res.text())
  .then(data => {
    if (data === "ok") {
      msgDiv.textContent = 'Дякуємо! Ваше повідомлення відправлено.';
      msgDiv.classList.add('show');
    } else {
      msgDiv.textContent = 'Сталася помилка. Спробуйте ще раз.';
      msgDiv.classList.add('show');
    }
    setTimeout(function() {
      msgDiv.classList.remove('show');
      msgDiv.textContent = '';
    }, 6000);
  })
  .catch(() => {
    msgDiv.textContent = 'Сталася помилка. Спробуйте ще раз.';
    msgDiv.classList.add('show');
    setTimeout(function() {
      msgDiv.classList.remove('show');
      msgDiv.textContent = '';
    }, 6000);
  });
});




