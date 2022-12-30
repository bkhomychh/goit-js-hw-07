import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

makeGalleryMarkup(galleryItems);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function makeGalleryMarkup(arr) {
  galleryRef.insertAdjacentHTML(
    'beforeend',
    arr
      .map(
        item => `<a class='gallery__item' href='${item.original}'>
			<img
				class='gallery__image'
				src='${item.preview}'
				alt='${item.description}'></a>`,
      )
      .join(''),
  );
}
