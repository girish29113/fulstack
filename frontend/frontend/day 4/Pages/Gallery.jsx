import React from 'react';
import Gallery from 'react-photo-gallery';
import Footer from './Footer';
import Navbar from './Navbar';
const photos = [
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },{ src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 4, height: 3 },
  { src: 'https://m.media-amazon.com/images/I/71HH6otzCVL._AC_UF1000,1000_QL80_.jpg', width: 1, height: 1 },
];

function GalleryComponent() {
  return (
    <div>  <Navbar /><br></br><br></br>
      <h1>Image Gallery</h1>
      <Gallery photos={photos} />
      <Footer/>
    </div>
  );
}

export default GalleryComponent;
