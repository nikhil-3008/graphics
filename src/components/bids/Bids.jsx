import React, { useState } from "react";
import './bids.css'
import { AiFillHeart } from "react-icons/ai";
import image1 from '../../images/Thank You Poster.png';
import image2 from '../../images/Night Club Party.png';
import image3 from '../../images/World Art Day (Poster).png';
import image4 from '../../images/Party Club Poster.png';
import image8 from '../../assets/bids1.png'
import image9 from '../../assets/bids2.png'
import image10 from '../../assets/bids3.png'
import image11 from '../../assets/bids4.png'
import image12 from '../../assets/bids5.png'
import image13 from '../../assets/bids6.png'
import image14 from '../../assets/bids7.png'
import image15 from '../../assets/bids8.png'
import { Link } from 'react-router-dom';
import { Stack, Pagination } from "@mui/material";

export const images = [
  {
    src: image1,
    theme: "Thank You Poster",
  },
  {
    src: image2,
    theme: "Night Club Party",
  },
  {
    src: image3,
    theme: "World Art Day (Poster)",
  },
  {
    src: image4,
    theme: "Party Club Poster",
  },
  {
    src: image8,
    theme: "Bids 1",
  },
  {
    src: image9,
    theme: "Bids 2",
  },
  {
    src: image10,
    theme: "Bids 3",
  },
  {
    src: image11,
    theme: "Bids 4",
  },
  {
    src: image12,
    theme: "Bids 5",
  },
  {
    src: image13,
    theme: "Bids 6",
  },
  {
    src: image14,
    theme: "Bids 7",
  },
  {
    src: image15,
    theme: "Bids 8",
  },
];



const Bids = ({ title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const cardsPerPage = 8;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setCurrentPage(1);
    setSearchTerm(event.target.value);
  };

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Filter images based on the search term
  const filteredImages = images.filter((image) =>
    image.theme.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bids section__padding">
      <div className="bids-container">
        <div className="bids-container-text">
          <h1>Available Templates</h1>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search items to buy"
              style={{
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '20px',
                width: '100%',
                justifyContent : 'center',
              }}
            />
          </div>
        </div>
        <br />
        <div className="bids-container-card">
  {filteredImages.slice(startIndex, endIndex).map((image, index) => (
    <div className="card-column" key={index}>
      <div className="bids-card">
        <div className="bids-card-top">
        <Link to={`/item/${index}`}>
          <img src={image.src} alt={image.theme} />
          <p className="bids-title">{image.theme}</p>
        </Link>
          <div className="bids-card-bottom">
            <p>Details</p>
            <p> <AiFillHeart /> 92</p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
     
        <div className="pagination-container">
          <Stack spacing={2} justifyContent="center" style={{ color: 'white' }}>
            <Pagination
              count={Math.ceil(filteredImages.length / cardsPerPage)}
              color="secondary" 
              page={currentPage}
              onChange={handlePageChange}
            />
          </Stack>
        </div>
     
    </div>
  );
};


export default Bids
