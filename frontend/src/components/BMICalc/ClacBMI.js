import React, { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import "../../Screens/LoginScreen/LoginScreen.css";

export default function ClacBMI() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  const [bmiResult, setBmiResult] = useState(null);

  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }

  return (
    <div className="container">
      <CardGroup style={{ padding: 50, border: "none" }}>
        <Card style={{ padding: 50, border: "none" }}>
          <div className="frame">
            <form className="form-login">
              <h1 className="text-center mb-4 text-xl"> BMI Calculator</h1>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Height
                </label>
                <input
                  className="form-styling"
                  id="Height "
                  type="text"
                  placeholder="Height in cm"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Weight
                </label>
                <input
                  className="form-styling"
                  id="Weight"
                  type="Weight in kg"
                  placeholder="Weight in kg"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div>
                <button
                  className="btn-animate"
                  style={{ display: "flex", justifyContent: "center" }}
                  type="button"
                  onClick={calculateBMI}
                >
                  Calculate BMI
                </button>
              </div>

              {bmiResult && (
                <div className="mt-4">
                  <br /> <br /> <br />
                  <p style={{ color: "white", padding: 5 }}>
                    Your BMI is: {bmiResult}{" "}
                  </p>
                  <p style={{ color: "white", padding: 5 }}>
                    You are currently: {status}
                  </p>
                </div>
              )}
            </form>
          </div>
        </Card>
        <Card style={{ padding: 30, border: "none" }}>
          <div class="row-background left hidden-xs">
            <img
              src="http://www.mansafit.com/assets/img/icon-31.png"
              alt=""
              onContextMenu="return false"
              onClick="return false"
              onSelectstart="return false"
              onDragStart="return false"
            />
          </div>
        </Card>
      </CardGroup>
    </div>
  );
}
