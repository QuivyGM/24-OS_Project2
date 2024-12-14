import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/pages/_plants.scss";

import plantsData from "./plantsData";

const weeklyTopPlants = [
    
    { id: 1, image: "/images/2.jpg", title: "Snake Plant", likes: 100 },
    { id: 2, image: "/images/1.jpg", title: "Fiddle Leaf Fig", likes: 120 },
    { id: 3, image: "/images/3.jpg", title: "Peace Lily", likes: 80 },
];

const allPlants = Array.from({ length: 36 }, (_, index) => ({
    id: index + 4,
    image: `/images/${(index % 5) + 1}.jpg`,
    title: `Chamaedorea Elegans ${index + 4}`,
    rating: 4.5,
    reviews: 10,
    type: index % 2 === 0 ? "Indoor" : "Outdoor",
    waterNeeds: index % 3 === 0 ? "Low" : "Medium",
    size: index % 4 === 0 ? "Small" : "Large",
}));

const Plants = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        type: "",
        waterNeeds: "",
        size: "",
    });

    const [selectedPlant, setSelectedPlant] = useState(null); // Stores the clicked plant
    const [showModal, setShowModal] = useState(false); // Controls modal visibility

    const handlePlantClick = (plant) => {
        setSelectedPlant(plant); // Store the clicked plant's data
        setShowModal(true); // Show the modal
    };

    const closeModal = () => {
        setShowModal(false); // Hide the modal
    };


    const plantsPerPage = 8;

    const filteredPlants = allPlants.filter((plant) => {
        return (
            (filters.type === "" || plant.type === filters.type) &&
            (filters.waterNeeds === "" || plant.waterNeeds === filters.waterNeeds) &&
            (filters.size === "" || plant.size === filters.size)
        );
    });

    const indexOfLastPlant = currentPage * plantsPerPage;
    const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
    const currentPlants = filteredPlants.slice(indexOfFirstPlant, indexOfLastPlant);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredPlants.length / plantsPerPage)) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
        setCurrentPage(1); 
    };

    const yOffsets = [20, 0, 40];
    const rankNum=[2, 1, 3];

    return (
        <div className="plants-page">
            <Navbar />
            <main className="product-page">
                <section className="weekly-plants">
                    <h2 className="section-title">Top Weekly Plants</h2>
                    <div className="top-plants">
                        {weeklyTopPlants.map((plant, index) => (
                            <div
                                key={plant.id}
                                className={`top-plant-card rank-${index + 1}`}
                                onClick={() => handlePlantClick(plant)}
                                style={{ transform: `translateY(${yOffsets[index]}px)` }}
                            >
                                <div className="medal">
                                    {index === 0 && <img src="/icons/silver.png" alt="Silver Medal" />} 
                                    {index === 1 && <img src="/icons/gold.png" alt="Gold Medal" />}
                                    {index === 2 && <img src="/icons/bronze.png" alt="Bronze Medal" />}
                                </div>
                                <img src={plant.image} alt={plant.title} className="plant-image" />
                                <div className="plant-info">
                                    <span className="rank">{rankNum[index]}</span>
                                    <h3>{plant.title}</h3>
                                    <p>{plant.likes} likes</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="other-plants">
                    <h2 className="section-title">Explore More Plants</h2>
                    <div className="filters">
                        <select name="type" value={filters.type} onChange={handleFilterChange}>
                            <option value="">All Types</option>
                            <option value="Indoor">Indoor</option>
                            <option value="Outdoor">Outdoor</option>
                        </select>
                        <select name="waterNeeds" value={filters.waterNeeds} onChange={handleFilterChange}>
                            <option value="">All Water Needs</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                        </select>
                        <select name="size" value={filters.size} onChange={handleFilterChange}>
                            <option value="">All Sizes</option>
                            <option value="Small">Small</option>
                            <option value="Large">Large</option>
                        </select>
                    </div>
                    <div className="plants-grid">
                        {currentPlants.map((plant) => (
                            <div
                                key={plant.id}
                                className="plant-card"
                                onClick={() => handlePlantClick(plant)}
                            >
                                <img src={plant.image} alt={plant.title} className="plant-image" />
                                <h4>{plant.title}</h4>
                                <p>{plant.rating} ★ ({plant.reviews} reviews)</p>
                            </div>
                        ))}
                    </div>

                    <div className="pagination">
                        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                            &lt; Previous
                        </button>
                        <span>
                            {currentPage} of {Math.ceil(filteredPlants.length / plantsPerPage)}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === Math.ceil(filteredPlants.length / plantsPerPage)}
                        >
                            Next &gt;
                        </button>
                    </div>
                </section>
            </main>

            <Footer />

            {showModal && selectedPlant && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {/* Image Section */}
                        <img src={selectedPlant.image} alt={selectedPlant.title} className="modal-image" />
                        
                        {/* Text Section */}
                        <div className="modal-text">
                            <h3>{selectedPlant.title}</h3>
                            <p>Type: {selectedPlant.type}</p>
                            <p>Water Needs: {selectedPlant.waterNeeds}</p>
                            <p>Size: {selectedPlant.size}</p>
                            <p>Rating: {selectedPlant.rating} ★ ({selectedPlant.reviews} reviews)</p>
                        </div>
                    </div>
            </div>
            
            )}

        </div>
    );
};

export default Plants;
