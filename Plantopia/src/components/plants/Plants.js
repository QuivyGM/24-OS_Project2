import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/pages/_plants.scss";

import plantsData from "./plantsData";

const weeklyTopPlants = [
    { id: 1, image: "/images/2.jpg", title: "Snake Plant", likes: 100, medal: "silver", yOffset: 20 },
    { id: 2, image: "/images/1.jpg", title: "Fiddle Leaf Fig", likes: 120, medal: "gold", yOffset: 0 },
    { id: 3, image: "/images/3.jpg", title: "Peace Lily", likes: 80, medal: "bronze", yOffset: 40 },
];

const medalMap = {
    gold: "/icons/gold.png",
    silver: "/icons/silver.png",
    bronze: "/icons/bronze.png",
};



// const allPlants = Array.from({ length: 36 }, (_, index) => ({
//     id: index + 4,
//     image: `/images/${(index % 5) + 1}.jpg`,
//     title: `Chamaedorea Elegans ${index + 4}`,
//     rating: 4.5,
//     reviews: 10,
//     type: index % 2 === 0 ? "Indoor" : "Outdoor",
//     waterNeeds: index % 3 === 0 ? "Low" : "Medium",
//     size: index % 4 === 0 ? "Small" : "Large",
// }));

const Plants = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        type: "",
        difficulty: "",
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

    const filteredPlants = plantsData.filter((plant) => {
        return (
            (filters.type === "" || plant.type === filters.type) &&
            (filters.difficulty === "" || plant.difficulty === filters.difficulty)
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
                            style={{
                                transform: `translateY(${plant.yOffset}px)`,
                            }}
                        >
                            {/* Medal Section */}
                            <div className="medal">
                                <img src={medalMap[plant.medal]} alt={`${plant.medal} Medal`} />
                            </div>

                            {/* Plant Image */}
                            <img src={plant.image} alt={plant.title} className="plant-image" />

                            {/* Plant Info */}
                            <div className="plant-info">
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
                            <option value="indoor">Indoor</option>
                            <option value="outdoor">Outdoor</option>
                        </select>
                        <select name="difficulty" value={filters.difficulty} onChange={handleFilterChange}>
                            <option value="">All Difficulties</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div className="plants-grid">
                        {currentPlants.map((plant) => (
                            <div
                                key={plant.plant_id}
                                className="plant-card"
                                onClick={() => handlePlantClick(plant)}
                            >
                                <img src={plant.image_id} alt={plant.title} className="plant-image" />
                                <h4>{plant.name}</h4>
                                <p>Type: {plant.type.charAt(0).toUpperCase() + plant.type.slice(1)}</p>
                                <p>Difficulty: {plant.difficulty}</p>
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
                        {/* Top Section: Image and Plant Info */}
                        <div className="modal-top">
                            <img
                                src={selectedPlant.image_id}
                                alt={selectedPlant.name}
                                className="modal-image"
                            />
                            <div className="modal-text">
                                <h3>{selectedPlant.name}</h3>
                                <p>Type: {selectedPlant.type}</p>
                                <p>Difficulty: {selectedPlant.difficulty}</p>
                            </div>
                        </div>

                        {/* Bottom Section: Description */}
                        <div className="modal-description">
                            <p>{selectedPlant.description}</p>
                        </div>
                    </div>
                </div>
            )}



        </div>
    );
};

export default Plants;
