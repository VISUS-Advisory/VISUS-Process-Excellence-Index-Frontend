import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
    "Controlling", "Einkauf", "Finanzbuchhaltung", "HR", "IT",
    "Marketing", "Projektmanagement", "Unternehmensstrategie", "Vertrieb"
];

function CategorySelection({ setSelectedCategories }) {
    const [selected, setSelected] = useState([]);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { value, checked } = event.target;
        setSelected((prevSelected) =>
            checked ? [...prevSelected, value] : prevSelected.filter((category) => category !== value)
        );
    };

    const handleSubmit = () => {
        setSelectedCategories(selected);
        navigate('/evaluate');
    };

    return (
        <div>
            <h2>Select Categories</h2>
            {categories.map((category) => (
                <div key={category}>
                    <input
                        type="checkbox"
                        value={category}
                        onChange={handleChange}
                    />
                    <label>{category}</label>
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default CategorySelection;
