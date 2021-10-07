import React from "react";
import MainScreen from "../../components/MainScreen";
import BMI from "../../components/BMICalc/ClacBMI";
import Notices from "../../Screens/CreateNote/showNotes";
import Schedule from "../../components/Schedule/Schedule";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundColor: "#2d3436",
        backgroundImage: "linear-gradient(315deg, #2d3436 0%, #d3d3d3 74%)",
      }}
    >
      <MainScreen title="Welcome...">
        <Notices />
        <hr />
        <BMI />
        <Schedule />
      </MainScreen>
    </div>
  );
};

export default HomePage;
