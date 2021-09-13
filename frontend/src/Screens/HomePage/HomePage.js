import React from "react";
import MainScreen from "../../components/MainScreen";
import BMI from "../../components/BMICalc/ClacBMI";

const HomePage = () => {
  return (
    <MainScreen title="Welcome...">
      <BMI />
    </MainScreen>
  );
};

export default HomePage;
