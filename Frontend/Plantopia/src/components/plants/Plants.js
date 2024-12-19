import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/pages/_plants.scss";

const weeklyTopPlants = [
    { id: 1, image: "/images/top-1.jpg", title: "Narcissus", likes: 100, medal: "silver", yOffset: 20 },
    { id: 2, image: "/images/top-2.jpg", title: "Red Rose", likes: 120, medal: "gold", yOffset: 0 },
    { id: 3, image: "/images/top-3.jpg", title: "White Rose", likes: 80, medal: "bronze", yOffset: 40 },
];

const medalMap = {
    gold: "/icons/gold.png",
    silver: "/icons/silver.png",
    bronze: "/icons/bronze.png",
};

const Plants = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        type: "",
        difficulty: "",
    });
    const [dataList, setDataList] = useState([]);
    const [showList, setShowList] = useState([]);
    const [selectedPlant, setSelectedPlant] = useState(null); // Stores the clicked plant
    const [showModal, setShowModal] = useState(false); // Controls modal visibility

    const plantsPerPage = 8;

    useEffect(() => {
        fetch("http://localhost:8080/Plants")
            .then((res) => res.json())
            .then((res) => {
                setDataList(res);
                setShowList(res.slice(0, plantsPerPage)); // Show initial page
            });
    }, []);

    useEffect(() => {
        const indexOfLastPlant = currentPage * plantsPerPage;
        const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
        const filtered = dataList.filter((plant) => {
            return (
                (filters.type === "" || plant.type.toLowerCase() === filters.type.toLowerCase()) &&
                (filters.difficulty === "" || plant.difficulty.toLowerCase() === filters.difficulty.toLowerCase())
            );
        });
        setShowList(filtered.slice(indexOfFirstPlant, indexOfLastPlant));
    }, [filters, currentPage, dataList]);

    const handlePlantClick = (plant) => {
        setSelectedPlant(plant); // Store the clicked plant's data
        setShowModal(true); // Show the modal
    };

    const closeModal = () => {
        setShowModal(false); // Hide the modal
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(dataList.length / plantsPerPage)) {
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
        setCurrentPage(1); // Reset to the first page on filter change
    };

    return (
        <div className="plants-page">
            <Navbar />

            <main className="product-page">
                <h1 className="title-text">
                    Find Your Perfect Plant!
                    <img src="/images/plants_icon.png" alt="Shop Icon" className="shop-icon" />
                </h1>
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
                                <div className="medal">
                                    <img src={medalMap[plant.medal]} alt={`${plant.medal} Medal`} />
                                </div>
                                <img src={plant.image} alt={plant.title} className="plant-image" />
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
                        {showList.map((plant) => (
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
                            {currentPage} of {Math.ceil(dataList.length / plantsPerPage)}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === Math.ceil(dataList.length / plantsPerPage)}
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