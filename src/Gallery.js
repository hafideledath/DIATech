import bentoLarge from './events/bento_large.webp';
import bentoSmall from './events/bento_small.webp';

import './Gallery.css';

function Gallery() {
  return (
    <div className="Gallery">
      <main>
        <h2 style={{marginTop: '120px'}}>Gallery</h2>
        <picture>
          <source media="(min-width: 821px)" srcset={bentoLarge} alt='gallery' id='gallery' />
          <img src={bentoSmall} alt="gallery" id='gallery' />
        </picture>
      </main>
      <footer>©2023 DI@Tech</footer>
    </div>
  );
}

export default Gallery;