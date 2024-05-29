import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EvaluationForm({ selectedCategories }) {
    const [evaluations, setEvaluations] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalProcesses, setTotalProcesses] = useState(0);
    const [sortedEvaluations, setSortedEvaluations] = useState([]);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        console.log('Selected Categories:', selectedCategories);
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/static/prozesse.json');
                console.log('JSON Data:', response.data);
                const data = response.data;
                const filteredProcesses = Object.values(data).filter(
                    process => selectedCategories.includes(process.Category)
                );
                console.log('Filtered Processes:', filteredProcesses);
                setTotalProcesses(filteredProcesses.length);
                setEvaluations(filteredProcesses.map(process => ({
                    ...process,
                    reife: 1,
                    digitalisierungsstand: 1,
                    priorität: 1,
                    comments: ''
                })));
            } catch (error) {
                console.error('Error fetching processes:', error);
            }
        };

        fetchData();
    }, [selectedCategories]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        const newEvaluations = evaluations.slice();
        if (name === 'comments') {
            newEvaluations[currentIndex][name] = value; // Keep the value as a string for comments
        } else {
            newEvaluations[currentIndex][name] = parseInt(value, 10);
        }
        setEvaluations(newEvaluations);
    };

    const handleSkip = () => {
        const newEvaluations = evaluations.slice();
        newEvaluations.splice(currentIndex, 1);
        setEvaluations(newEvaluations);
        if (currentIndex >= newEvaluations.length) {
            setCurrentIndex(currentIndex - 1);
            updateProgress(currentIndex - 1, totalProcesses);
        } else {
            updateProgress(currentIndex, totalProcesses);
        }
    };

    const handleNext = () => {
        if (currentIndex < evaluations.length - 1) {
            setCurrentIndex(prevIndex => {
                const newIndex = prevIndex + 1;
                updateProgress(newIndex, totalProcesses);
                return newIndex;
            });
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => {
                const newIndex = prevIndex - 1;
                updateProgress(newIndex, totalProcesses);
                return newIndex;
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/evaluate/", { evaluations });
            setSortedEvaluations(response.data.sorted_evaluations);
            setSubmitted(true);
        } catch (error) {
            console.error("There was an error submitting the evaluations!", error);
        }
    };

    const handleEmailSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8000/send-report/", { email, evaluations: sortedEvaluations });
            alert("Report sent successfully!");
        } catch (error) {
            console.error("There was an error sending the report!", error);
        }
    };

    const getCurrentCategoryPosition = () => {
        const currentCategory = evaluations[currentIndex].Category;
        const categoryProcesses = evaluations.filter(evaluation => evaluation.Category === currentCategory);
        const positionInCategory = categoryProcesses.findIndex(evaluation => evaluation === evaluations[currentIndex]) + 1;
        return `${positionInCategory}/${categoryProcesses.length}`;
    };

    const getOverallProgress = (evals) => {
        const evaluatedProcesses = totalProcesses - evals.length;
        return (evaluatedProcesses / totalProcesses) * 100;
    };

    const updateProgress = (currentIndex, total) => {
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            const progress = ((currentIndex + 1) / total) * 100;
            progressBar.style.width = `${progress}%`;
        }
    };

    useEffect(() => {
        updateProgress(currentIndex, totalProcesses);
    }, [currentIndex, totalProcesses, evaluations]);

    return (
        <div>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label>Overall Progress:</label>
                        <div style={{ background: '#e0e0e0', borderRadius: '5px', overflow: 'hidden', height: '20px', width: '100%' }}>
                            <div id="progress-bar" style={{
                                background: '#76c7c0',
                                width: '0%',
                                height: '100%',
                                transition: 'width 0.2s'
                            }}></div>
                        </div>
                    </div>
                    {evaluations.length > 0 ? (
                        <div>
                            <div>
                                {selectedCategories.map((category, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            fontWeight: evaluations[currentIndex].Category === category ? 'bold' : 'normal',
                                            marginRight: '10px',
                                            textDecoration: evaluations[currentIndex].Category === category ? 'underline' : 'none',
                                        }}
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>
                            <h3>{evaluations[currentIndex].Process}</h3>
                            <p>{evaluations[currentIndex].Description}</p>
                            <p>Position: {getCurrentCategoryPosition()}</p>
                            <label>
                                Prozess Reife:
                                <input
                                    type="number"
                                    name="reife"
                                    value={evaluations[currentIndex].reife}
                                    onChange={handleChange}
                                    min="1"
                                    max="5"
                                />
                            </label>
                            <label>
                                Digitalisierungsstand:
                                <input
                                    type="number"
                                    name="digitalisierungsstand"
                                    value={evaluations[currentIndex].digitalisierungsstand}
                                    onChange={handleChange}
                                    min="1"
                                    max="5"
                                />
                            </label>
                            <label>
                                Priorität:
                                <input
                                    type="number"
                                    name="priorität"
                                    value={evaluations[currentIndex].priorität}
                                    onChange={handleChange}
                                    min="1"
                                    max="5"
                                />
                            </label>
                            <label>
                                Comments:
                                <input
                                    type="text"
                                    name="comments"
                                    value={evaluations[currentIndex].comments}
                                    onChange={handleChange}
                                />
                            </label>
                            <div>
                                <button type="button" onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
                                <button type="button" onClick={handleSkip}>Skip</button>
                                <button type="button" onClick={handleNext} disabled={currentIndex === evaluations.length - 1}>Next</button>
                            </div>
                        </div>
                    ) : (
                        <p>No more processes to evaluate.</p>
                    )}
                    {currentIndex === evaluations.length - 1 && (
                        <button type="submit" disabled={evaluations.length === 0}>Submit Evaluations</button>
                    )}
                </form>
            ) : (
                <div>
                    <h2>Top 5 Highest Rated Processes</h2>
                    <ul>
                        {sortedEvaluations.slice(0, 5).map((evaluation, index) => (
                            <li key={index}>
                                <h3>{evaluation.Process}</h3>
                                <p>{evaluation.Description}</p>
                                <p>Score: {evaluation.score}</p>
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={handleEmailSubmit}>
                        <label>
                            Enter your email to receive the full report:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit">Send Report</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default EvaluationForm;
