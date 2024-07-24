// src/BMICalculator.jsx
import React, { useState } from 'react';
import bmiImage from './assets/bmi.png'; 
const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight === '' || height === '') {
      setMessage('Please enter valid weight and height');
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    let bmiMessage = '';
    if (bmiValue < 18.5) {
      bmiMessage = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      bmiMessage = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      bmiMessage = 'Overweight';
    } else {
      bmiMessage = 'Obesity';
    }
    setMessage(bmiMessage);
  };

  return (
    <div>
      <div className='title-container'>
        <h2>BMI Calculator</h2>
        <img src={bmiImage} alt="BMI Chart" className="bmi-image" />
      </div>
      <form onSubmit={calculateBMI}>
        <div>
          <label>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </div>
        <div>
          <label>Height (cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
