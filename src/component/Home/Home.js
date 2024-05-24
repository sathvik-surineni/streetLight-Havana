import React from 'react';
import banner from '../../images/Untitled design (3).png';
import './Home.css'
const Home = () => {
  return (
    <>
    <div className='banner'>
      <img src={banner} alt="BannerImage" className='BannerImage' style={{ width: '100%',height:'40rem', objectFit: 'cover' }} />
      <h1 class="imageQuote">Be watt-wise, make a difference</h1>
    </div>
    <div className="bannerHeading">
    <h1>About</h1>
    <p>Welcome to Illuminate Your World, your ultimate destination for harnessing the power of light energy savings. We are dedicated to shedding light on innovative solutions that not only illuminate your surroundings but also contribute to a sustainable future.

At Illuminate Your World, we understand the importance of conserving energy and reducing our carbon footprint. With the rising concerns about environmental sustainability, it's imperative to adopt practices that promote energy efficiency without compromising on quality or comfort. That's where light energy savings come into play.
</p>
<p>Our website serves as a comprehensive guide to navigating the realm of light energy conservation. Whether you're a homeowner, business owner, or simply an eco-conscious individual, we provide valuable insights, tips, and resources to help you make informed decisions about lighting solutions.
</p>
    </div>
    </>
  );
}

export default Home;
