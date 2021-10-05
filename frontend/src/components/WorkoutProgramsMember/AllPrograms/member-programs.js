import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Workoutprogramcard from "./workoutprogram-card";
import Myprograms from "./my-programs";

function AllprogramsMemer(props) {
  const [programs, setPrograms] = useState([]);
  const [enrolls, setEnrolls] = useState([]);
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    retrievePrograms();
  }, []);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const member_id = userInfo._id;

  const retrieveEnrolls = async (programs_) => {
    if (enrolls.length !== 0){
      setEnrolls([]);
    }
    await axios
      .get("http://localhost:5000/enroll-programs")
      .then((res) => {
        if (res.data.success) {
          res.data.enrolls.map((enroll) => {
            if (member_id === enroll.member_id) {
              programs_.map((program) => {
                if (program._id === enroll.programName) {
                  var newItem = [program.name, enroll.enroll_datetime];
                  enrolls.push(newItem);
                }
              });
            }
          });
        } else {
          console.log("error retrieving from database");
        }
      })
      .then(() => {
        setIsloaded(true);
        console.log(enrolls)
      });
  };

  const filterData = (programs, searchKey) => {
    const result = programs.filter(
      (program) =>
        program.name.toLowerCase().includes(searchKey) ||
        program.description.toLowerCase().includes(searchKey) ||
        program.conducted_by.toLowerCase().includes(searchKey) ||
        program.name.toLowerCase().includes(searchKey) ||
        program.day.toLowerCase().includes(searchKey)
    );
    setPrograms(result);
  };

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();

    axios.get("http://localhost:5000/programs").then((res) => {
      if (res.data.success) {
        filterData(res.data.existingPrograms, searchKey);
      }
    });
  };

  const retrievePrograms = async () => {
    await axios.get("http://localhost:5000/programs").then((res) => {
      if (res.data.success) {
        setPrograms(res.data.existingPrograms);
        retrieveEnrolls(res.data.existingPrograms);
      } else {
        console.log("error retrieving from database");
      }
    });
  };

  const isAlreadyEnrolled = async (mem_id, program_id) => {
    var result = false;

    await axios.get("http://localhost:5000/enroll-programs").then((res) => {
      if (res.data.success) {
        res.data.enrolls.map((enroll) => {
          if (
            mem_id === enroll.member_id &&
            program_id === enroll.programName
          ) {
            result = true;
          }
        });
      } else {
        console.log("error retrieving from database");
      }
    });
    return result;
  };

  const EnrollController = async (id, programName) => {
    var IsEnorolled = await isAlreadyEnrolled(id, programName);

    if (IsEnorolled) {
      alert("You have already enrolled in this program!");
    } else {
      var proceed = window.confirm("Are you sure you want to enroll?");
      if (proceed) {
        const myCurrentTime = new Date().toLocaleString();

        const data = {
          programName: programName,
          member_id: id,
          enroll_datetime: myCurrentTime,
          activeness: true,
        };
  
        axios
          .post("http://localhost:5000/enroll-program/save", data)
          .then((res) => {
            if (res.data.success) {
              alert("Enrolled successfully");
              window.location.reload(false);
            }
          });
      }

    }
  };
  if (!isLoaded) {
    return <div />;
  }

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          "https://res.cloudinary.com/fitness-glory/image/upload/v1630854420/outlook-photography-and-studio-CvvF9lPJy6U-unsplash_cmxfi8.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h1 className="text-light">Workout Programs</h1>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={handleSearchArea}
            />
          </div>
          <hr />
        </div>
        <div style={{ marginTop: "30px" }}>
          <div className="row">
            <div className="col-md-3">
              <p className="text-white text-center">ENROLLED PROGRAMS</p>
              {enrolls.map((enroll, index) => (
                <div className="" key={index}>
                  <Myprograms
                    enroll={enroll}
                  />
                </div>
              ))}
            </div>

            <div className="col-md-9">
              <div className="row">
                {programs.map((program, index) => (
                  <div className="col-md-6 col-sm-6" key={index}>
                    <Workoutprogramcard
                      program={program}
                      EnrollController={EnrollController}
                      member_id={member_id}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllprogramsMemer;
