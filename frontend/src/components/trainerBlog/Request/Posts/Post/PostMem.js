import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core/";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import useStyles from "./memstyles";
import { useHistory } from "react-router";
const PostMem = ({ blogpost, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const openPost = (e) => {
    // dispatch(getPost(post._id, history));

    history.push(`member/blogposts/${blogpost._id}`);
  };
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          blogpost.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={blogpost.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{blogpost.creator}</Typography>
        <Typography variant="body2">
          {moment(blogpost.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <MoreHorizIcon onClick={openPost} fontSize="default" />
      </div>
      <div className={classes.details}>
        <br />
        <Typography variant="body2" color="textSecondary" component="h2">
          {blogpost.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {blogpost.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {blogpost.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}></CardActions>
    </Card>
  );
};

export default PostMem;
