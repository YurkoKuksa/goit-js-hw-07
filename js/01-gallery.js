import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

const namesElements = document.querySelector(".gallery");

const markup = galleryItems
  .map((el) => {
    return `<li class="gallery__item"><a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image"
      src="${el.preview}" 
      data-source="${el.original}" 
      alt="${el.description}" >
      </a>
    </li>`;
    // el.preventDefault();
  })
  .join("");

namesElements.insertAdjacentHTML("afterbegin", markup);

// Реалізація делегування на ul.gallery і отримання url великого зображення.

let instance;

function pictureOn(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(
    `
		<img width="1400" height="900" src=" ${event.target.dataset.source} ">
	`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscapeClick);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscapeClick);
      },
    }
  );
  instance.show();
  //   console.log(event.target.dataset.source);
}

namesElements.addEventListener("click", pictureOn);

function onEscapeClick(event) {
  if (event.code !== "Escape") return;
  instance.close();
}
