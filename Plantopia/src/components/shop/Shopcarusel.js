import React from "react";
import "../../styles/pages/_shopcarusel.scss";


const Shopcarusel = ({ handleShopClick }) => {
  const products = [1, 2, 3, 4, 5, 6, 7]; // Example products array

  return (
    <section className="our-products py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-center mb-0">Our Products</h2>
        <button className="btn btn-primary more-button" onClick={handleShopClick}>
          More...
        </button>
      </div>

      {/* Bootstrap Carousel */}
      <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {products.map((item, index) => (
            <div
              key={item}
              className={`carousel-item ${index === 0 ? "active" : ""}`} // Make the first item active
            >
              <div className="row">
                {[...Array(4)].map((_, colIndex) => {
                  const productIndex = item + colIndex;
                  if (productIndex <= products.length) {
                    return (
                      <div key={productIndex} className="col-6 col-md-3 mb-4">
                        <div className="card product-item">
                          <img
                            src={`./images/${productIndex}.jpg`}
                            alt={`Product ${productIndex}`}
                            className="card-img-top"
                          />
                          <div className="card-body text-center">
                            <h5 className="card-title">Modern Picture</h5>
                            <p className="price">$15.99</p>
                            <button className="btn btn-outline-primary">Add to Cart</button>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Shopcarusel;
