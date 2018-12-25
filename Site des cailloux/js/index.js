const list = [{
  name: 'Opale',
  img: 'img/opale.jpg',
  description: 'Cette opale contient d’incroyables motifs grâce à des incrustations de jaspe botryoïde, créant une « nébuleuse » d’une beauté incroyable.',
  link: 'https://fr.wikipedia.org/wiki/Opale',
}, {
  name: 'Bismuth',
  img: 'img/Bismuth.jpg',
  description: 'Le bismuth est un élément chimique naturel. Il affiche un arc en ciel de couleurs ressemblant à du corail futuriste qui vient d’une autre dimension.',
  link: 'https://fr.wikipedia.org/wiki/Bismuth',
}, {
  name: 'Améthyste',
  img: 'img/Amethyste.jpg',
  description: 'C’est la plus grande géode d’améthyste du monde. Découverte en Uruguay, elle se trouve désormais au musée Crystal Caves en Australie.',
  link: 'https://fr.wikipedia.org/wiki/Am%C3%A9thyste',
}, {
  name: 'Labradorite',
  img: 'img/Labradorite.jpg',
  description: 'La labradorite est une pierre présente sur certaines roches. Elle est censée aider à améliorer la communication avec votre soi supérieur.',
  link: 'https://fr.wikipedia.org/wiki/Labradorite',
}, {
  name: 'Azurite',
  img: 'img/Azurite.jpg',
  description: 'L’azurite est une pierre bleue, ressemblant à un ciel étoilé. La teinte bleu profond donne généralement une sensation apaisante.',
  link: 'https://fr.wikipedia.org/wiki/Azurite_(min%C3%A9ral)',
}, {
  name: 'Bénitoite',
  img: 'img/Bénitoite.jpg',
  description: 'La bénitoite est une pierre bleue rare qui devient fluorescente sous un éclairage UV. Elle se trouve principalement dans la serpentinite.',
  link: 'https://fr.wikipedia.org/wiki/B%C3%A9nito%C3%AFte',
}];

$(document).ready(() => {
  list.forEach((elem, index) => {
    $('.grid').append(`
      <a href="${elem.link}" target="_blank">
        <div class="caillou-card">
          <img src="${elem.img}" />
          <h3>${elem.name}</h3>
          <span class="rank">#${index + 1}</span>
          <p>${elem.description}</p>
        </div>
      </a>
    `);
  });

  $('input').click(() => {
    $('body').toggleClass('nightmode');
    $('.caillou-card').toggleClass('nightmode');
  });
});
