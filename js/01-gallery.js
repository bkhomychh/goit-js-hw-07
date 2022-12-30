import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

makeGalleryMarkup(galleryItems);

galleryRef.addEventListener('click', onGalleryClick);

function makeGalleryMarkup(arr) {
  galleryRef.insertAdjacentHTML(
    'beforeend',
    arr
      .map(
        item => `<div class='gallery__item'>
		<a class='gallery__link' href='${item.original}'>
			<img
				class='gallery__image'
				src='${item.preview}' 
				data-source='${item.original}'
				alt='${item.description}'>
		</a>
		</div>`,
      )
      .join(''),
  );
}

function onGalleryClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  const modalImage = basicLightbox.create(`<img src='${evt.target.dataset.source}'>`);

  modalImage.show();

  document.addEventListener(
    'keydown',
    evt => {
      if (evt.code !== 'Escape') {
        return;
      }
      modalImage.close();
    },
    { once: true },
  );
}
