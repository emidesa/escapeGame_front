import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import PropTypes from "prop-types";
import '../Carousel.css';

const CustomCarousel = ({ images }) => {
    return (
        <div className="carousel-section">
          <BootstrapCarousel>
            {images.map((image, index) => (
              <BootstrapCarousel.Item key={index}>
                <div className="carousel-card">
                  <img
                    className="carousel-image"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </BootstrapCarousel.Item>
            ))}
          </BootstrapCarousel>
        </div>
      );
    };
    
    CustomCarousel.propTypes = {
      images: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
        })
      ).isRequired,
    };

export default CustomCarousel;