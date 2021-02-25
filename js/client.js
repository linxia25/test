import { furnitures } from './furnitures.js';

let output = '';

const gallery = document.querySelector('.gallery');

furnitures.forEach(function(animal) {

console.log(animal);
  
output +=
    `<figure class="card">
      <img src="images/${furnitures.title}.jpg" alt="pexels:${furnitures.title}" width='${furnitures.width}'>
      <figcaption>
        <h1>${furnitures.title}</h1>
        <h2>${furnitures.credit}</h2>
        <a href="${furnitures.url}">Pexels Link</a>
      </figcaption>
    </figure>`;
});
gallery.innerHTML = output;
