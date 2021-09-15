import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Button,
  Box,
  TextField,
  Link,
  Paper,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { useDispatch } from "react-redux";
import "./Memback.css";

import PostsMem from "./Posts/PostsMem";
import Form from "./Form/Form";
import { getBlogPosts, getBlogPostsBySearch } from "../../../actions/blogposts";
import useStyles from "./memstyles";
import { useHistory, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const MemForm = () => {
  const query = useQuery();
  const History = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [tags, setTags] = useState([]);
  const history = useHistory();

  useEffect(() => {
    dispatch(getBlogPosts());
  }, [currentId, dispatch]);

  return (
    <div className={classes.main} style={backImg}>
      <div>
        <Container>
          <br />
          <div className={classes.upcard}>
            <Typography component="div">
              <Box textAlign="center" fontSize={40} letterSpacing={16} m={5}>
                SELECT YOUR PERSONAL TRAINER FROM US
              </Box>
            </Typography>
          </div>
          <Container>
            <Button
              variant="btn btn-success"
              onClick={() => history.push("member/Admin")}
            >
              HOME
            </Button>

            <Grid
              container
              justify="space-between"
              spacing={3}
              className={classes.gridContainer}
            >
              <Grid item xs={12}>
                <PostsMem setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
          <br />
          <br />
          <br />

          <Typography component="div">
            <Box
              style={{ color: "white" }}
              textAlign="center"
              fontSize={40}
              letterSpacing={16}
              m={5}
            >
              PERSONAL TRAINER PACKAGES
            </Box>
          </Typography>
        </Container>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    style={{ color: "white" }}
                  >
                    Starter package
                  </Typography>
                  <Typography
                    style={{ color: "white" }}
                    variant="h5"
                    component="h2"
                  >
                    {bull}STARTER{bull}
                  </Typography>
                  <Typography
                    style={{ color: "white" }}
                    className={classes.pos}
                    color="textSecondary"
                  >
                    <div class="card-body">
                      Two 30 minute sessions
                      <br />
                      Computerized personal fitness analysis
                      <br />
                      24 / 7 Access of Fitness Center 1 complimentary sessions
                    </div>
                  </Typography>
                  <Typography
                    style={{ color: "white" }}
                    variant="body2"
                    component="p"
                  >
                    The starter program is for someone starting out their
                    fitness journry THis program teaches the habits necessary to
                    have a helathy life style by joing with us ans using tools
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    style={{ color: "white" }}
                    color="textSecondary"
                    gutterBottom
                  >
                    Peremium Package
                  </Typography>
                  <Typography
                    style={{ color: "white" }}
                    variant="h5"
                    component="h2"
                  >
                    {bull}PREMIUM{bull}
                  </Typography>
                  <Typography
                    style={{ color: "white" }}
                    className={classes.pos}
                    color="textSecondary"
                  >
                    <div class="card-body">
                      Six 60 minute sessions
                      <br />
                      Computerized personal fitness analysis
                      <br />
                      24 / 7 Access of Fitness Center 1 complimentary sessions
                    </div>
                  </Typography>
                  <Typography
                    style={{ color: "white" }}
                    variant="body2"
                    component="p"
                  >
                    The Premium program is for someone with ambitious goals that
                    wants serous results this program includes accountability
                    coach instruction and it help you to stay in fit and healthy
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    style={{ color: "white" }}
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Ellite Package
                  </Typography>
                  <Typography
                    style={{ color: "white" }}
                    variant="h5"
                    component="h2"
                  >
                    {bull}ELLITE{bull}
                  </Typography>
                  <Typography
                    style={{ color: "white" }}
                    className={classes.pos}
                    color="textSecondary"
                  >
                    <div class="card-body">
                      Twelve 30 minute sessions
                      <br /> Computerized personal fitness analysis
                      <br />
                      24 / 7 Access of Fitness Center 2 complimentary sessions
                    </div>
                  </Typography>
                  <Typography
                    style={{ color: "white" }}
                    variant="body2"
                    component="p"
                  >
                    The Ellite program is for deliver you the best result while
                    having a trainer to instruct you while playing with all the
                    tools which maximize the body potentials and the fitness .
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

const backImg = {
  backgroundColor: "black",
};
const cb = {
  backgroundColor: "rgb(204, 255, 229,5)",
};
export default MemForm;
