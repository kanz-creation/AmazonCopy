import React from 'react';
import './Home.css';
import Product from './Product.js';
function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://m.media-amazon.com/images/I/510WtZHPg1L._SX1500_.jpg"
        alt=""
      ></img>
      {/* Product has id, title, price, rating and image */}
      <div className="home_row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_ML2_.jpg"
        />

        <Product
          id="12321342"
          title="Logitech M330 Silent Plus Wireless Mouse Easy Roll"
          price={19.99}
          rating={4}
          image="https://www.logitech.com/content/dam/logitech/en/products/mice/m330-wireless-silent-mouse/gallery/m330-black-gallery-1.png"
        />
      </div>

      <div className="home_row">
        <Product
          id="12321388"
          title="My Cinema Lightbox Mini Colour"
          price={44.96}
          rating={3}
          image="https://m.media-amazon.com/images/I/61NE7dT6rpL._AC_SL1500_.jpg"
        />

        <Product
          id="12321341"
          title="CeraVe SA Acid Lotion for Extremly Dry Skin"
          price={21.45}
          rating={5}
          image="https://m.media-amazon.com/images/I/71T+elvbW0L._AC_SL1500_.jpg"
        />
        <Product
          id="12321355"
          title="Womens travel bags, weekender carry on for women"
          price={32.59}
          rating={3}
          image="https://m.media-amazon.com/images/I/61QhRcw-SwL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="12321328"
          title="SAMSUNG SR35 Series 27 inch FHD 1920x1080 Flat Desktop Monitor for Working or Learning, HDMI, D-Sub, Wall mountable"
          price={211.66}
          rating={4}
          image="https://m.media-amazon.com/images/I/91Vg-6MEI2L._AC_SL1500_.jpg"
        />
      </div>
      {/* Another product */}
    </div>
  );
}

export default Home;
