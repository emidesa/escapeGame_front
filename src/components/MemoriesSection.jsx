import React from "react";
import '../App.css';
const MemoriesSection  = ({memories}) => {
    return <>
    <section className="memories-section">
        <h2>Vos Souvenirs</h2>
        <div className="memories-gallery">
            {memories.map((memory, index) => (
                <div key={index} className="memory-card">
                    <img src={memory.image} alt={memory.alt} />
                </div>
            ))}
        </div>
    </section>
    </>;
}
 
export default MemoriesSection;

// components/memoriesSection

