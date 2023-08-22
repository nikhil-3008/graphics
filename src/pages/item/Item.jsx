// ImageDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { images } from '../../components/bids/Bids'; // Update this path
import './item.css'; // Import your CSS file for styling

const Item = () => {
  const { index } = useParams();
  const selectedImage = images[index];

  return (
    <div className="image-detail-container">
      <div className="image-container">
        <img src={selectedImage.src} alt={selectedImage.theme} className="image" />
      </div>
      <div className="info-container">
        <h2 className="image-title" style={{color:'white'}}>{selectedImage.theme}</h2>
        <p className="image-description" style={{color:'white'}}>
          This is a beautiful artwork that represents the theme: {selectedImage.theme}.
          {/* Add more details or information here */}
        </p>
        <a href="https://buy.stripe.com/test_eVa7vJgXW9z30Lu000" className="buy-button" style={{ borderRadius: '5px' }}>
      Buy Now
    </a>
      </div>
    </div>
  );
};

export default Item;
