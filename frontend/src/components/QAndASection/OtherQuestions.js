import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Button } from "@material-ui/core";
import { allQuestions } from "../../api/apiFBQA";
import gymBg from "../ImagesD/testImg.png";
import { NavBar } from "./NavBar";

export const OtherQuestions = () => {
  const match = useRouteMatch();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const displayQuestion = async () => {
      const question = await allQuestions();
      setQuestions(question);
    };
    displayQuestion();
  }, []);

  return (
    <div>
      <div style={bgImg}>
        <div className="container">
          <div className="mt-3">
            <br />
            <NavBar />
          </div>
        </div>
        <div className="container">
          <div className="mt-3">
            <br />
            <h3 style={labelStyle} className="text-center">
              All Questions
            </h3>
            <table style={textStyle} class="table">
              <thead>
                <tr>
                  <th scope="col">Topic of Question</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((row) => (
                  <tr>
                    <td>{row.qTopic}</td>
                    <td>
                      <Link
                        to={`/a/createA/${row._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          style={btn}
                          color="Secondary"
                          variant="contained"
                        >
                          Select Question
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const bgImg = {
  background: `linear-gradient( rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.58)) ,url(${gymBg})`,
  backgroundSize: "cover",
  position: "center",
  marginTop: "-20px",
  right: "0%",
  left: "0%",
  width: "100%",
  height: "100%",
  opacity: "1",
};

const labelStyle = {
  color: "white",
  fontFamily: "Helvetica",
  fontWeight: "bold",
};

const textStyle = {
  background: "transparent",
  color: "white",
  fontFamily: "Helvetica",
  fontWeight: "bold",
};

const btn = {
  backgroundColor: "#04938b",
  border: "2px solid #04938b",
  color: "white",
};
