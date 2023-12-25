import React, { useState, useEffect } from 'react'

const HomePage = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex +1) % 2 )
  }
  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + 2) % 2)
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className='home'>
      <div className={`slide fade ${slideIndex === 0 ? 'active' : ''}`}>
        <h1>SHOP OUR PRODUCTS</h1>
        <p>AT THE LOWEST PRICE</p>
        <img src="../images/shoe1.jpg" alt="shoe" />
      </div>
      <div className={`slide fade ${slideIndex === 1 ? 'active' : ''}`}>
        <img src="../images/shoe2.jpg" alt="shoe" />
        <h1>START YOUR DAY</h1>
        <p>WITH OUR STORE!</p>
      </div>
      <i class="fa-solid fa-chevron-left prev" onClick={prevSlide}></i>
      <i class="fa-solid fa-chevron-right next" onClick={nextSlide}></i>
    </div>
  )
}

export default HomePage