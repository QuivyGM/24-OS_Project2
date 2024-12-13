import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/_virtualgarden.scss';
import Layout_seo from './Layout_seo.js';
import Navbar from '../Navbar';
import Footer from '../Footer';

const VirtualGarden = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    const initialPlants = [
        {id: 1, name: "1", date: "2024-09-09", time: "23:59:59", plantSrc: "", potSrc: "/images/vg-pot-example.png", plantLeft: "138px", potLeft: "128px"},
        {id: 2, name: "2", date: "2024-10-10", time: "23:59:58", plantSrc: "", potSrc: "/images/vg-pot-example.png", plantLeft: "378px", potLeft: "368px"},
        {id: 3, name: "3", date: "2024-11-11", time: "23:59:57", plantSrc: "", potSrc: "/images/vg-pot-example.png", plantLeft: "618px", potLeft: "608px"}
    ];

    const plantExampleImages = [
        "/images/vg-plant-example.png",
        "/images/woowangi-user-image.png",
        "/images/vg-plant-example.png",
        "/images/woowangi-user-image.png",
        "/images/vg-plant-example.png",
        "/images/woowangi-user-image.png",
        "/images/vg-plant-example.png",
        "/images/woowangi-user-image.png",
        "/images/vg-plant-example.png",
        "/images/vg-plant-example.png"
    ];

    const [plants, setPlants] = useState(initialPlants);
    const [nextPlantIndex, setNextPlantIndex] = useState(0); // 다음에 채울 plantSrc의 인덱스
     // 초기 값은 [0, 1, 2], 사용자 선택 식물의 빈자리를 추적하기 위한 배열
    const [availableIndexes, setAvailableIndexes] = useState([0, 1, 2]);
    const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이더의 시작 인덱스

    // 왼쪽 네비게이션 핸들러
    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex 
        );
    };

    // 오른쪽 네비게이션 핸들러
    const handleRightClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < plantExampleImages.length - 5 ? prevIndex + 1 : prevIndex

        );
    };

    // 이미지 선택 처리
    const handleImageClick = (imageSrc) => {
        if (availableIndexes.length > 0) {
            setPlants((prevPlants) => {
                const updatedPlants = [...prevPlants];
                const nextIndex = availableIndexes[0]; // 첫 번째 빈 자리 인덱스 가져오기
    
                if (nextIndex < updatedPlants.length) {
                    updatedPlants[nextIndex].plantSrc = imageSrc;
                }
    
                return updatedPlants;
            });
    
            // 사용된 인덱스를 제거
            setAvailableIndexes((prevIndexes) => prevIndexes.slice(1));
        }
    };

    // 마우스 좌클릭 -> 이미지 삭제
    const handleImageClickToDelete = (index) => {
        setPlants((prevPlants) => {
            const updatedPlants = [...prevPlants];
            updatedPlants[index].plantSrc = ""; // 선택된 이미지 삭제
            return updatedPlants;
        });
    
        // 삭제된 인덱스를 추가
        setAvailableIndexes((prevIndexes) => {
            if (!prevIndexes.includes(index)) {
                return [...prevIndexes, index].sort((a, b) => a - b); // 정렬하여 순서 유지
            }
            return prevIndexes;
        });
    };

    //--------------------------------------------
    const handleWaterClick = (index) => {
        setPlants((prevPlants) => {
            const updatedPlants = [...prevPlants];
            updatedPlants[index].time = new Date().toLocaleTimeString(); // Update time to current time
            return updatedPlants;
        });
    };

// ---------- ---------- ---------- ---------- ----------

    const [showGuide, setShowGuide] = useState(false); // guide 버튼 모달창 상태?

    // 가이드 버튼 핸들러 함수
    const handleGuideClick = () => {
        setShowGuide(true);
    }

    const handleCloseGuide = () => {
        setShowGuide(false);
    }

// ---------- ---------- ---------- ---------- ----------

// 식물 이름 더블 클릭해서 바꾸기
    const [editingNameIndex, setEditingNameIndex] = useState(null); // 이름을 수정할 인덱스 추적
    const [newName, setNewName] = useState(''); // 입력된 새 이름을 추적

    // 이름 더블클릭 핸들러
    const handleNameDoubleClick = (index, currentName) => {
        setEditingNameIndex(index); // 수정할 인덱스를 저장
        setNewName(currentName); // 기존 이름을 입력 필드에 미리 표시
    };

    // 사용자가 입력하는 새 이름을 상태에 저장
    const handleNameChange = (e) => {
        setNewName(e.target.value); // 입력된 값을 newName 상태에 저장
    };

    // 이름 업데이트하고 편집 모드 종료
    const handleNameBlur = () => {
        if (editingNameIndex !== null) {
            const updatedPlants = [...plants];
            updatedPlants[editingNameIndex].name = newName; // 새 이름으로 업데이트
            setPlants(updatedPlants); // 상태 갱신
            setEditingNameIndex(null); // 편집 모드 종료
            setNewName(''); // 입력 필드 초기화
        }
    };

    // 엔터키로 이름 수정 완료
    const handleNameKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleNameBlur(); // Enter 키 누르면 수정 완료
        }
    };    

    return (
        <div className="vg-big-container">
        <Navbar />
        
        <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
            <Layout_seo />
            <div className="topline" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
                <div className="green-text">Virtual Garden</div>
                <div className="vg-container">
                    <div className="vg-inner-container">
                    {plants.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <img
                                    className="vg-pot"
                                    alt={`Pot ${item.id}`}
                                    src={item.potSrc}
                                    style={{ left: item.potLeft }}
                                />
                                {item.plantSrc && (
                                    <img
                                        className="vg-selected-plant"
                                        alt={`Plant ${item.id}`}
                                        src={item.plantSrc}
                                        style={{ left: item.plantLeft }}
                                        onClick={() => handleImageClickToDelete(index)}
                                    />
                                )}
                                <div
                                    className="vg-plant-name"
                                    style={{ left: item.potLeft }}
                                    onDoubleClick={() => handleNameDoubleClick(index, item.name)} // 더블클릭 이벤트
                                >
                                    {editingNameIndex === index ? (
                                        <input
                                            type="text"
                                            className="vg-plant-name-input"
                                            value={newName} 
                                            onChange={handleNameChange} // 입력값 변경 처리
                                            onBlur={handleNameBlur} // 입력 필드에서 포커스가 벗어나면 이름 수정
                                            onKeyDown={handleNameKeyDown} // Enter 키 처리
                                            autoFocus
                                        />
                                    ) : (
                                        item.name
                                    )}
                                </div>
                                <div
                                    className="vg-plant-date"
                                    style={{ left: item.potLeft }}
                                >
                                    {item.date}
                                </div>
                                <div
                                    className="vg-r-c-container"
                                    style={{ left: item.potLeft }}
                                >
                                    <div className="vg-circle"></div>
                                    <div className="vg-remaining-time">{item.time}</div>
                                </div>
                                <div
                                    className="vg-water-container"
                                    style={{ left: item.potLeft }}
                                >
                                    <button
                                        className="vg-water-button"
                                        onClick={() => handleWaterClick(index)} // Pass plant index
                                    >
                                        Water
                                    </button>

                                </div>
                            </React.Fragment>
                        ))}

                        <div className="vg-guide-button" onClick={handleGuideClick}>Guide</div> 

                    </div>
                    <div className="vg-pyp-text">Pick Your Plant</div>
                    <div className="vg-pyp-background"></div>
                    <div className="vg-left-nav-circle" onClick={handleLeftClick}>
                        <img className="vg-left-nav-icon" alt="Left Arrow" src="/icons/left-arrow.png"/>
                    </div>
                    <div className="vg-pyp-slider">
                        {plantExampleImages.slice(currentIndex, currentIndex + 5).map((src, index) => (
                            <img
                                key = {index}
                                src={src}
                                alt={`Plant ${index}`}
                                className="vg-pyp-plant-img"
                                onClick={() => handleImageClick(src)}
                            />
                        ))}
                    </div>
                    <div className="vg-right-nav-circle" onClick={handleRightClick}>
                        <img className="vg-right-nav-icon" alt="Right Arrow" src="/icons/right-arrow.png"/>
                    </div>
                </div>
                <div className="seo_gap" style={{ top: '24px' }}></div>
            </div>

            {/* 가이드 버튼 모달창 */}
            {showGuide && (
                <div className="guide-modal">
                    <div className="guide-content">
                        <h2>How to Use Virtual Garden</h2>
                        <p>Virtual Garden에서 식물을 관리해 보세요~</p>
                        <p>- 화분에 심을 식물을 클릭하세요.</p>
                        <p>- 식물의 이름을 더블 클릭해서 원하는 이름을 지어주세요.</p>
                        <p>- 식물에게 물을 준 후 Water 버튼을 클릭하세요.</p>
                        <p>- 마지막으로 물을 준 날짜와 시간이 기록돼요.</p>
                        <p>- 더 이상 키우지 않는 식물은 클릭해서 삭제하세요.</p>
                        <button className="close-guide-button" onClick={handleCloseGuide}>Close</button>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default VirtualGarden;
