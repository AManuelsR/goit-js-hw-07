import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galeriaFotos = document.querySelector('.gallery');

const galeria = galleryItems
    .map(({preview, description, original}) =>
    `<div class="galeriaItem">
        <a class="galeriaLink" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
</div>`)

.join('');

galeriaFotos.insertAdjacentHTML('beforeend', galeria)
galeriaFotos.addEventListener('click', imgClick)

function imgClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const modal = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`,

        {onShow: () => window.addEventListener('keydown', salida),
         onClose: () => window.removeEventListener('keydown', salida),
        }
    );
    
    modal.show();

    function salida(event) {   
        if (event.code === "Escape") {
            modal.close();
        }
    }
}