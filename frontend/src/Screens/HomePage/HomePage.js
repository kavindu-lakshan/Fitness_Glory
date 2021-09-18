import React from "react";
import MainScreen from "../../components/MainScreen";
import BMI from "../../components/BMICalc/ClacBMI";
import Notices from "../../Screens/CreateNote/showNotes";

const HomePage = () => {
  return (
    <MainScreen title="Welcome...">
      <Notices />
      <hr />
      <BMI />
    </MainScreen>
  );
};

export default HomePage;
