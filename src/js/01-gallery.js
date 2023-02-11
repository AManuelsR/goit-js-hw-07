import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galeriaFotos = document.querySelector('.gallery');

const fotos = galleryItems
    .map(({ preview, description, original }) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
    </div>`)
    .join('');

galeriaFotos.insertAdjacentHTML('beforeend', fotos)

galeriaFotos.addEventListener('click', imgClick)

function imgClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const modal = basicLightbox.create(
        `<img src="${e.target.dataset.source}" width="800" height="600">`,
        {Show: () => window.addEventListener('keydown', salida),
        Close: () => window.removeEventListener('keydown', salida),
        }
    );
    
    modal.show();

    function salida(e) {   
        if (e.code === "Escape") {
            modal.close();
        }
    }
}
