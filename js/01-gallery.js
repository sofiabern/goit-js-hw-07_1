import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join("");
}

list.innerHTML = createMarkup(galleryItems);

list.addEventListener("click", handlerClicked);

let instance;

function handlerClicked(evt) {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {
    return;
  }
  const currentImgSrc = evt.target.dataset.source;
  // const currentAlt = evt.target.

  instance = basicLightbox.create(`	<div class="modal">
    <img src="${currentImgSrc}" alt="">
    </div>
`);
  instance.show();
}

list.addEventListener("keydown", handlerEsc);

function handlerEsc(evt) {
  if (evt.key === "Escape") {
    if (instance) {
      instance.close();
    }
  }
}
