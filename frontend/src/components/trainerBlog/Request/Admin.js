import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grow,
  Box,
  Grid,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import "./Memback.css";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import { getBlogPosts } from "../../../actions/blogposts";
import useStyles from "./reqstyles";
import { useHistory } from "react-router-dom";

const Admin = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    dispatch(getBlogPosts());
  }, [currentId, dispatch]);

  return (
    <div style={backImg}>
      <Container maxWidth="100px">
        {/*} <Button
          variant="btn btn-success"
          onClick={() => history.push("member/trainerblog/MemForm")}
        >
          Home
        </Button>
        <br />
        <Button
          variant="btn btn-success"
          onClick={() => history.push("/ReportPT/ReportPT")}
        >
          report
  </Button>*/}

        <div styele={boxn} className={classes.upcard}>
          <Typography component="div">
            <Box textAlign="center" fontSize={40} letterSpacing={16} m={5}>
              FITNESS GLORY PERSONAL TRAINERS BLOG
            </Box>
          </Typography>
        </div>
        <Grow in className="con">
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={1}
            >
              <Grid item xs={12} xs={8}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={6} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default Admin;
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
const boxn = {
  paddingBottom: "150px",
};
