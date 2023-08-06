import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import SimpleLightbox from "simplelightbox";

console.log(galleryItems);

const list = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
}

list.innerHTML = createMarkup(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  showCounter: false,
});

list.addEventListener("click", handlerClicked);

function handlerClicked(evt) {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {
    return;
  }
  lightbox.open();
}

list.addEventListener("keydown", handlerEsc);

function handlerEsc(evt) {
  if (evt.key === "Escape") {
    lightbox.close();
  }
}
