import TrainerMainScreen from "../../components/TrainerMainScreen";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Trainerhome.css";
const TrainerHomePage = () => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("adminInfo")) {
      history.push("/admin/login");
    }
  }, [adminInfo]);

  return (
    <TrainerMainScreen title={"Welcome" + " " + adminInfo?.name}>
      Admin Home Page
    </TrainerMainScreen>
  );
};

export default TrainerHomePage;
