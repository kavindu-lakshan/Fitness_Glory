import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Box,
  Grid,
  Button,
  responsiveFontSizes,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import "./memback.css";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import { getBlogPosts } from "../../../actions/blogposts";
import useStyles from "./reqstyles";
import { useHistory, useLocation } from "react-router-dom";

const Admin = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    dispatch(getBlogPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="100px">
      <Button
        variant="btn btn-success"
        onClick={() => history.push("member/MemForm")}
      >
        Home
      </Button>
      <br />
      <Button
        variant="btn btn-success"
        onClick={() => history.push("/ReportPT/ReportPT")}
      >
        report
      </Button>

      <div className={classes.upcard}>
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
  );
};

export default Admin;
