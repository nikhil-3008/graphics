import React, { useState, useRef, useEffect } from "react";
import "./Card.css";
import image1 from '../../images/figma.png';
import image2 from '../../images/canva.png';
import image3 from '../../images/react.png';
import image4 from '../../images/blender.png';
import image5 from '../../images/galery.png';


export default function Card() {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const images = [image1, image2, image3, image4, image5];

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, images.length);
  }, [images.length]);

  function handleMouseMove(event) {
    const card = cardRefs.current;
    const { offsetWidth: width, offsetHeight: height } = card;
    const { clientX, clientY } = event;
    const x = clientX - card.offsetLeft - width / 2;
    const y = clientY - card.offsetTop - height / 2;
    var mult = 40;
    setXRotation((y / height) * mult);
    setYRotation((x / width) * mult);
  }
  function handleMouseEnter(index) {
    const imgRef = cardRefs.current[index]?.querySelector(".sneaaker-img");
    const titleRef = cardRefs.current[index]?.querySelector(".title-class");
    const sizesBoxRef = cardRefs.current[index]?.querySelector(".sizes-box-class");
    const purchaseRef = cardRefs.current[index]?.querySelector(".purchase-class");
    const descRef = cardRefs.current[index]?.querySelector(".desc-class");

    if (imgRef && titleRef && sizesBoxRef && purchaseRef && descRef) {
      // Only update styles if the refs are not null
      titleRef.style.transform = "translateZ(150px)";
      imgRef.style.transform = "translateZ(100px) rotateZ(-45deg)";
      sizesBoxRef.style.transform = "translateZ(100px)";
      purchaseRef.style.transform = "translateZ(75px)";
      descRef.style.transform = "translateZ(75px)";
    }
  }

  function handleMouseLeave(index) {
    setXRotation(0);
    setYRotation(0);

    const imgRef = cardRefs.current[index]?.querySelector(".sneaaker-img");
    const titleRef = cardRefs.current[index]?.querySelector(".title-class");
    const sizesBoxRef = cardRefs.current[index]?.querySelector(".sizes-box-class");
    const purchaseRef = cardRefs.current[index]?.querySelector(".purchase-class");

    if (imgRef && titleRef && sizesBoxRef && purchaseRef) {
      // Only update styles if the refs are not null
      titleRef.style.transform = "translateZ(0px)";
      imgRef.style.transform = "translateZ(0px) rotateZ(0deg)";
      sizesBoxRef.style.transform = "translateZ(0px)";
      purchaseRef.style.transform = "translateZ(0px)";
    }
  }

  return (
    <div className="container" style={{display: 'flex', justifyContent :'center'}}>
      {images.map((image, index) => (
        <div
          key={index}
          className="card"
          ref={(el) => (cardRefs.current[index] = el)}
          style={{
            transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <img
            src={image}
            alt={`Nike-Shoe-${index}`}
            className="sneaaker-img"
          />
          {/* Add other elements and assign appropriate classes */}
          <div className="title-class"></div>
          <div className="sizes-box-class"></div>
          <div className="purchase-class"></div>
          <div className="desc-class"></div>
        </div>
      ))}
    </div>
  );
}