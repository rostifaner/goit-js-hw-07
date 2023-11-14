import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const createMarkup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
          ></img>
        </a>
      </li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", createMarkup);
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
//   closeText: "Close",
//   download: "Download",
//   navText: ["prev", "next"],
//   overlayOpacity: 0.85,
// });
// const handleEvent = (event) => {
//   if (event.target === event.currentTarget) {
//     return;
//   }
//   event.preventDefault();
//       const sizeBtn = document.querySelectorAll("button");
//   sizeBtn.forEach((button) => {
//     button.style.fontSize = "20px";
//   });
//   const colorBtn = document.querySelector(".sl-download a");
//   colorBtn.style.color = "black";
//   lightbox.open();
// };

// gallery.addEventListener("click", handleEvent);
