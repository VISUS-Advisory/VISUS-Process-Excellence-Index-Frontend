import { useState } from "react";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
import Step4 from "./components/step4";
import Step5 from "./components/step5";
import JsonData from "./data.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [dataIndex, setDataInex] = useState(0);
  const [currentOuterIndex, setCurrentOuterIndex] = useState(0);
  const [currentInnderIndex, setCurrentInnerIndex] = useState(0);
  const totalSteps = selectedCategories.reduce(
    (acc, category) => acc + category.question.length,
    0
  );
  const renderStep = () => {
    switch (stepIndex) {
      case 0:
        return <Step1 setStepIndex={setStepIndex} />;
      case 1:
        return (
          <Step2
            JsonData={JsonData}
            setStepIndex={setStepIndex}
            setSelectedCategories={setSelectedCategories}
            selectedCategories={selectedCategories}
          />
        );
      case 2:
        return (
          <Step3
            setStepIndex={setStepIndex}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            dataIndex={dataIndex}
            setDataInex={setDataInex}
            currentOuterIndex={currentOuterIndex}
            currentInnderIndex={currentInnderIndex}
            setCurrentInnerIndex={setCurrentInnerIndex}
            setCurrentOuterIndex={setCurrentOuterIndex}
            totalSteps={totalSteps}
          />
        );
      case 3:
        return (
          <Step4
            setStepIndex={setStepIndex}
            selectedCategories={selectedCategories}
          />
        );

      default:
        return null; // Handle out-of-bounds index
    }
  };

  return (
    <div>
      {renderStep()} <ToastContainer />
    </div>
  );
}

export default App;
