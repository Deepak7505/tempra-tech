import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const steps = [
  { label: "Step 1", description: "Start by selecting your preferred option." },
  { label: "Step 2", description: "Fill in the required details carefully." },
  { label: "Step 3", description: "Review your input before proceeding." },
  { label: "Step 4", description: "Submit and confirm your choices." },
];

export default function AnimatedStepper() {
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-advance stepper every 3000ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : 0));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : steps.length - 1));
  };

  return (
    <div className="flex flex-col  items-center justify-start space-y-6  p-6 w-full max-w-lg ">
      {/* Stepper UI */}
      <div className="relative flex m-0 items-center w-full">
        {/* Left Arrow */}
        <button onClick={prevStep} className="p-2 relative right-8 text-gray-600 hover:text-blue-500">
          <FaArrowLeft size={24} />
        </button>

        {/* Stepper Line */}
        <div className="relative flex-1 mx-4 flex items-center">
          {steps.map((step, index) => (
            <div key={index} className="relative flex-1 flex items-center">
              {/* Progress Line */}
              {index < 3 &&(
                <motion.div
                  className="absolute top-1/2 left-0 h-1 z-10 bg-blue-600"  // Changed to gray
                  initial={{ width: "0%" }}
                  animate={{ width: currentStep >= index ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                  style={{ transform: "translateY(-50%)" }}
                />
              )}

              {/* Step Circle */}
              <div
                className={`w-12 z-50 h-12 flex items-center justify-center rounded-full border-2 bg-white font-bold ${
                  index <= currentStep ? "border-blue-500 text-blue-500" : "border-gray-400 text-gray-400"
                }`}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={nextStep} className="p-2 text-gray-600 hover:text-blue-500">
          <FaArrowRight size={24} />
        </button>
      </div>

      {/* Step Description */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center text-lg font-medium text-gray-700"
      >
        {steps[currentStep].description}
      </motion.div>
    </div>
  );
}
