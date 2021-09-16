import TrainerMainScreen from "../../components/TrainerMainScreen";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Trainerhome.css";

export default function TrainerHomePage() {
  const trainerLogin = useSelector((state) => state.trainerLogin);
  const { trainerInfo } = trainerLogin;
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("trainerInfo")) {
      history.push("/employee/trainer-login");
    }
  }, [trainerInfo]);

  // return (
  //   <TrainerMainScreen title={"Welcome" + " " + trainerInfo?.username}>
  //     Home Page
  //   </TrainerMainScreen>
  // );
  // };

  // export default TrainerHomePage;

  return (
    <div>
      <div style={{background:'#3a3a3a'}}>
      <div style={style1}>
        <h1 style={headingStyle}>View Your Account</h1>
        <p style={paraStyle}>
          If you are already an ACE Gym Trainer, Group Fitness Instructor,
          Health Coach, or Medical <br />
          Exercise Specialist, you have a My ACE Account. Within this account
          the trainer can access
          <br /> all the materials required to prepare, process and record
          training. Personalized your account
          <br /> as you want Now!
        </p>
        <div className="btnAma">
          <a href="/employee/trainer-profile">
            <span>View Profile</span>
          </a>
        </div>
      </div>

      <div style={style2}>
        <h1 style={headingStyle}>Publish Events</h1>
        <p style={paraStyle}>
          A large chunk of event attendees end up turning into paying customers.
          With the potential <br />
          to boost sales and engagement, fitness events are a no-brainer. Events
          can take on a ton of
          <br /> different formats. Depending on your budget and objective, you
          can organize an event that
          <br /> your members will love. Create Events which develop members'
          Lifestyles Now!
        </p>
        <div className="btnAma">
          <a href="/employee/eventspage">
            <span>Create Events</span>
          </a>
        </div>
      </div>

      <div style={style3}>
        <h1 style={headingStyle}>Manage Events</h1>
        <p style={paraStyle}>
          It makes sense that a successful event takes time and planning. When
          organizing a fitness event,<br></br> multiple factors need to be
          considered from invitations and budget to logistics and location.
          Event
          <br /> planning is a task in itself. Here’s a breakdown of the steps
          you need to take to plan and organize <br />a fitness event.{" "}
        </p>
        <div className="btnAma">
          <a href="/employee/allevents">
            <span>All Events</span>
          </a>
        </div>
        {/* <div className="btnAma1">
          <a href="#">
            <span>Manage Events</span>
          </a>
        </div> */}
      </div>

      <div style={style4}>
        <h1 style={headingStyle}>Requests Management</h1>
        <p style={paraStyle}>
          Personal trainers assess their customers' bodily strengths and
          weaknesses and create
          <br /> customized workout plans. They provide physical and mental
          guidance and monitor
          <br /> customers' progress on a regular basis. They also make sure
          that customers don't <br /> get injured while training.
        </p>
        <div className="btnAma">
          <a href="#">
            <span>View Requests</span>
          </a>
        </div>
      </div>

      <div style={style5}>
        <h1 style={headingStyle}>Create Workout Schedules</h1>
        <p style={paraStyle}>
          In general, most beginners have been lifting for less than a year,
          intermediates for at least 1 year,
          <br /> and advanced trainees for at least 2 years. Keep in mind that
          your members' advanced workouts
          <br /> should not be attempted unless you have appropriate strength
          training experience. You can create
          <br /> your own schedules from here!
        </p>
        <div className="btnAma">
          <a href="/employee/PreAdmin">
            <span style={{ fontSize: "13px" }}>Create Schedules</span>
          </a>
        </div>
      </div>

      <div style={style6}>
        <h1 style={headingStyle}>View Blogs</h1>
        <p style={paraStyle}>
          Whether your client at the beginning of his/her fitness journey or in
          desperate need of some
          <br /> motivation and kick to keep going, they will find it that on
          these blogs — and in their educational,
          <br /> inspirational, and empowering content. As a busy clients you
          they have time to exercise. Our goal is <br />
          to help them to find ways to be more active and fit.
        </p>
        <div className="btnAma">
          <a href="/employee/trainerblog/Admin">
            <span>View Blogs</span>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

const headingStyle = {
  marginTop: "80px",
  fontSize: "45px",
  fontWeight: "bold",
  color: "#d6d6d6",
  marginLeft: "50px",
  fontFamily: 'calibri',
};

const paraStyle = {
  marginLeft: "50px",
  fontWeight: "300",
  fontSize: "20px",
  marginTop: "30px",
  fontFamily: "calibri",
  fontWeight: "initial",
  color: "#c0bdbd",
  textAlign: 'justify',
  lineHeight: 1.3,

};

const style1 = {
  background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) ,url("https://res.cloudinary.com/fitness-glory/image/upload/v1631702027/Image1_zhdkqz.jpg")`,
  padding: "1.5rem",
  width: "100%",
  height: "500px",
  backgroundPosition: "0px -100px",
  backgroundSize: "cover",
  color: "#f5f5f5",
};

const style2 = {
  background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url("https://res.cloudinary.com/fitness-glory/image/upload/v1631702026/Image3_t1npd5.jpg")`,
  color: "white",
  padding: "1.5rem",
  width: "100%",
  height: "500px",
  marginTop: "10px",
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
};

const style3 = {
  background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url("https://res.cloudinary.com/fitness-glory/image/upload/v1631702026/Image5_xwbapt.jpg")`,
  color: "white",
  padding: "1.5rem",
  width: "100%",
  height: "500px",
  marginTop: "10px",

  backgroundPosition: "0px -100px",
  backgroundSize: "cover",
};

const style4 = {
  background: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url("https://res.cloudinary.com/fitness-glory/image/upload/v1631702026/Image6_jsyhvs.jpg")`,
  color: "white",
  padding: "1.5rem",
  width: "100%",
  height: "500px",
  marginTop: "10px",
  backgroundPosition: "0px -100px",
  backgroundSize: "cover",
};

const style5 = {
  background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url("https://res.cloudinary.com/fitness-glory/image/upload/v1631593901/young-woman-drinking-water-gym-exercise-concept_fomgjh.jpg")`,
  color: "white",
  padding: "1.5rem",
  marginTop: "10px",
  backgroundPosition: "0px -200px",
  backgroundSize: "cover",
  height: "500px",
};

const style6 = {
  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url("https://res.cloudinary.com/fitness-glory/image/upload/v1631702027/Image8_jatste.jpg")`,
  color: "white",
  padding: "1.5rem",
  marginTop: "10px",
  backgroundPosition: "0px -100px",
  backgroundSize: "cover",
  height: "500px",
};
