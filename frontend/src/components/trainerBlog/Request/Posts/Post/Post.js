import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteBlogPost } from "../../../../../actions/blogposts";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
const Post = ({ blogpost, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const openPost = (e) => {
    // dispatch(getPost(post._id, history));

    history.push(`member/blogposts/${blogpost._id}`);
  };
  return (
    <Card className={classes.card} raised elevation={6}>
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

      <CardActions className={classes.cardActions}>
        <Button
          style={{ color: "Blue" }}
          size="small"
          onClick={() => setCurrentId(blogpost._id)}
        >
          <EditIcon className="primary" fontSize="small" /> Edit
        </Button>
        <Button size="small" className="secondary" onClick={{}}></Button>
        <Button
          size="small"
          style={{ color: "blue" }}
          onClick={() => dispatch(deleteBlogPost(blogpost._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
{
  /*

<Card className={classes.card} raised elevation={6}>
    <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
      <Button variant="btn btn-success" onClick={() => history.push(`posts/${post._id}`)}>go</Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
      <Button
          style={{ color: "Blue" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
           <EditIcon className="primary" fontSize="small" /> Edit
         
        </Button>
        <Button size="small" className="secondary" onClick={{}}></Button>
        <Button
          size="small"
         
          style={{ color: "blue" }}
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        
      </CardActions>
    </Card>
*/
}
