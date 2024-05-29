import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import CategorySelection from './CategorySelection';
import EvaluationForm from './EvaluationForm';

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/select-categories"
            element={<CategorySelection setSelectedCategories={setSelectedCategories} />}
          />
          <Route
            path="/evaluate"
            element={
              selectedCategories.length === 0 ? (
                <CategorySelection setSelectedCategories={setSelectedCategories} />
              ) : (
                <EvaluationForm selectedCategories={selectedCategories} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
