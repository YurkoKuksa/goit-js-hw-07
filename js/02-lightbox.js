import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Вибираємо HTML-елемент з класом "gallery"
const namesElements = document.querySelector(".gallery");

// Генеруємо HTML-розмітку для кожного елементу галереї за допомогою функції map
const markup = galleryItems
  .map((el) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${el.original}">
      <img class="gallery__image"
      src="${el.preview}"

      alt="${el.description}" >
      </a>
    </li>`;
  })
  .join(""); // Об'єднуємо масив рядків HTML в один рядок

// Вставляємо згенеровану HTML-розмітку на початок елементу "gallery"
namesElements.insertAdjacentHTML("afterbegin", markup);

// Ініціалізуємо SimpleLightbox на посиланнях всередині елемента "gallery"
new SimpleLightbox(".gallery a", {
  captionsData: "alt", // Відображення підписів на основі атрибута "alt" зображень

  captionPosition: "bottom", // Позиціонування підписів знизу

  captionDelay: 250, // Затримка (у мілісекундах) перед відображенням підписів
});
