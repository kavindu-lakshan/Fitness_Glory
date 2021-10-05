import React from "react";
import MainScreen from "../../components/MainScreen";
import BMI from "../../components/BMICalc/ClacBMI";
import Notices from "../../Screens/CreateNote/showNotes";
import Schedule from "../../components/Schedule/Schedule";

const HomePage = () => {
  return (
    <MainScreen title="Welcome...">
      <Notices />
      <hr />
      <BMI />
      <Schedule />
    </MainScreen>
  );
};

export default HomePage;
