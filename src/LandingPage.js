import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/select-categories');
    };

    return (
        <div>
            <h1>Welcome to the Process Evaluation App</h1>
            <p>Click the button below to start evaluating processes.</p>
            <button onClick={handleClick}>Start Evaluation</button>
        </div>
    );
}

export default LandingPage;
