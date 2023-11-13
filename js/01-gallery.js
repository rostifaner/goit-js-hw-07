import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
gallery.addEventListener("click", handleEvent);
function createMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
  <li class="gallery__item"> <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a>
        </li>`
    )
    .join("");
}
function handleEvent(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  event.preventDefault();
  const product = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${product}">`);
  instance.show();
}
