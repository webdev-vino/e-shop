import React from "react";

const Shop = () => {
  const data = [
    {
      src: "/images/carousel/shoe2.png",
      name: "Yung 96 Trainer",
      price: "₹899",
    },
    {
      src: "/images/carousel/shoe3.png",
      name: "Pod-S3.1 Trainer",
      price: "₹799",
    },
    {
      src: "/images/carousel/shoe4.png",
      name: "Nike Lunar Force 1 Duckboot",
      price: "₹499",
    },
    {
      src: "/images/carousel/shoe2.png",
      name: "Air Max 95 Essential",
      price: "₹1099",
    },
    {
      src: "/images/carousel/shoe5.png",
      name: "RS-0 Toys OLD",
      price: "₹799",
    },
    {
        src: "/images/carousel/shoe3.png",
        name: "Pod-S3.1 Trainer",
        price: "₹799",
      }
  ];

  return (
    <div className="main">
      <h2>LATEST ADDED</h2>
    <div className="list">
      {data.map((data) => (
        <div className="shop-img">
 
            <button>Add Card</button>
            <button>Buy</button>
          <img src={data.src} alt="shoe" />
          <div className="name">
            <p>{data.name}</p>
            <p>{data.price}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Shop;
