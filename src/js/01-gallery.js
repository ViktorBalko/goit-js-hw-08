import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items.js';


const galleryList = document.querySelector(".gallery");
const galleryCreate = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryCreate);

function createGalleryMarkup(elements) {
  return elements.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href='${original}'>
        <img class="gallery__image"
          src='${preview}'
          alt='${description}'
        />
      </a>
    `;
  }).join("");
};

const lightbox = new SimpleLightbox(".gallery a",
  {
    captionsData: `alt`,
    captionDelay: 250,
  });