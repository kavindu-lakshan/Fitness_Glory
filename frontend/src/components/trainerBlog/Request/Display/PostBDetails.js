import React, { useEffect } from "react";
import "./postdetail.css";

import { Typography, Grid } from "@material-ui/core/";
import Chip from "@material-ui/core/Chip";
import { useDispatch, useSelector } from "react-redux";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import EmailIcon from "@material-ui/icons/Email";
import { useParams } from "react-router-dom";

import { getBlogPost } from "../../../../actions/blogposts";
import useStyles from "./styles";

const PostBDetails = () => {
  const { blogpost } = useSelector((state) => state.blogposts);
  const dispatch = useDispatch();

  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getBlogPost(id));
  }, [id, dispatch]);

  if (!blogpost) return null;
  {
    return (
      <div style={backImg}>
        <Grid container spacing={3} className={classes.gridn}>
          <Grid item xs={6}>
            <img
              className={classes.pname}
              src={blogpost.selectedFile}
              alt="..loading"
              style={{
                margin: "10px 30px 30px",
                width: "60%",
                display: "flex",
              }}
            />
            &nbsp; &nbsp; &nbsp;
            <br />
            <div className={classes.tipo}>
              <div style={font}>
                <Typography
                  style={{ color: "#28edf7", letterSpacing: "5" }}
                  className="ta"
                >
                  TRAINER INFO
                </Typography>
                <hr />
                &nbsp;
                <Typography style={{ color: "white" }} className="ta">
                  {blogpost.creator}
                </Typography>
                <br />
                <Typography style={{ color: "white" }} className="ta">
                  {blogpost.title}
                </Typography>
                <br />
                <Chip
                  color="secondary"
                  label={blogpost.tags}
                  variant="outlined"
                />
                <br />
                <br />
                <Typography style={{ color: "white" }} className="ta">
                  {blogpost.message}
                </Typography>
                <br />
                <div>
                  <p>
                    {" "}
                    <Typography style={{ color: "white" }}>
                      {" "}
                      <FacebookIcon /> &nbsp;{blogpost.face}
                    </Typography>
                  </p>
                </div>
                <br />
                <p>
                  <Typography style={{ color: "white" }}>
                    {" "}
                    <EmailIcon /> &nbsp;{blogpost.email}
                  </Typography>
                </p>
                <br />
                <p>
                  <Typography style={{ color: "white" }}>
                    {" "}
                    <WhatsAppIcon />
                    &nbsp;{blogpost.what}
                  </Typography>
                </p>
                {/* <Typography className="ta">Time Availability</Typography>*/}
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Typography style={{ color: "#28edf7" }} className="ta">
              TIME AVAILABILITY
            </Typography>
            <hr />
            <div className={classes.chart}>
              <p>
                {" "}
                <Typography style={{ color: "white" }}>
                  {blogpost.mon} ON MONDAY{" "}
                </Typography>
              </p>{" "}
              <p>
                <Typography style={{ color: "white" }}>
                  {blogpost.tue} ON TUESDAY{" "}
                </Typography>
              </p>
              <p>
                <Typography style={{ color: "white" }}>
                  {blogpost.wed} ON WEDNESDAY{" "}
                </Typography>
              </p>
              <p>
                <Typography style={{ color: "white" }}>
                  {blogpost.thu} ON THURSDAY{" "}
                </Typography>
              </p>
              <p>
                <Typography style={{ color: "white" }}>
                  {blogpost.fri} ON FRIDAY{" "}
                </Typography>
              </p>
              <p>
                <Typography style={{ color: "white" }}>
                  {blogpost.sat} ON SATURDAY{" "}
                </Typography>
              </p>
              <p>
                <Typography style={{ color: "white" }}>
                  {blogpost.sun} ON SUNDAY{" "}
                </Typography>
              </p>
            </div>
            <hr />
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default PostBDetails;

const backiImg =
  "https://res.cloudinary.com/maldeniya99/image/upload/v1631621169/anastase-maragos-4dlhin0ghOk-unsplash_mwpe9l.jpg";
const backImg = {
  background: `linear-gradient( rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)) ,url(${backiImg})`,
  backgroundSize: "cover",
  position: "center",
  width: "100%",
  height: "100%",
  opacity: "10",
};
const font = {
  color: "white",
  fontspacing: "3",
  height: "1000",
};
