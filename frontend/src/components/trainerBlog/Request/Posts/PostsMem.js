import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import PostMem from "./Post/PostMem";
import useStyles from "./styles";

const PostsMem = ({ setCurrentId }) => {
  const blogposts = useSelector((state) => state.blogposts);
  const classes = useStyles();

  return !blogposts?.length ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.container} container spacing={3}>
      {blogposts.map((blogpost) => (
        <Grid key={blogpost._id} item xs={12} sm={3} md={3}>
          <PostMem blogpost={blogpost} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostsMem;
