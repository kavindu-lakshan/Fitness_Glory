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

          <Paper>Personal Trainer Packages</Paper>
        </Container>
      </div>
    </div>
  );
};
const backImg = {
  backgroundColor: "black",
};
export default MemForm;
