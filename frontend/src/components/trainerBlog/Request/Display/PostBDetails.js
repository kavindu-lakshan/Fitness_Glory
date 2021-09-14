import React, { useEffect } from "react";
import "./postdetail.css";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Item,
  CircularProgress,
  Divider,
} from "@material-ui/core/";
import Chip from "@material-ui/core/Chip";
import { useDispatch, useSelector } from "react-redux";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import EmailIcon from "@material-ui/icons/Email";
import { useParams, useHistory } from "react-router-dom";

import {
  getBlogPost,
  getBlogPostsBySearch,
} from "../../../../actions/blogposts";
import useStyles from "./styles";

const PostBDetails = () => {
  const { blogpost, blogposts } = useSelector((state) => state.blogposts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getBlogPost(id));
  }, [id, dispatch]);

  const bull = <span className={classes.bullet}>•</span>;
  if (!blogpost) return null;
  {
    return (
      <Grid container spacing={3} className={classes.gridn}>
        <Grid item xs={6}>
          <img
            className={classes.pname}
            src={blogpost.selectedFile}
            alt="..loading"
            style={{ margin: "10px 30px 30px", width: "60%", display: "flex" }}
          />
          &nbsp; &nbsp; &nbsp;
          <br />
          <div className={classes.tipo}>
            <Typography className="ta">Trainer Info</Typography>
            <hr />
            &nbsp;
            <p>{blogpost.creator}</p>
            <p>{blogpost.title}</p>
            <Chip color="secondary" label={blogpost.tags} variant="outlined" />
            <p>{blogpost.message}</p>
            <br />
            <div>
              <p>
                {" "}
                <FacebookIcon /> &nbsp;{blogpost.face}
              </p>
            </div>
            <br />
            <p>
              <EmailIcon />
              &nbsp;{blogpost.what}
            </p>
            <br />
            <p>
              <WhatsAppIcon />
              &nbsp;{blogpost.email}
            </p>
            <Typography className="ta">Time Availability</Typography>
          </div>
          <hr />
          <div className={classes.chart}>
            <p>{blogpost.mon} ON MONDAY</p>
            <p>{blogpost.tue} ON TUESDAY</p>
            <p>{blogpost.wed} ON WEDNESDAY</p>
            <p>{blogpost.thu} ON THURSDAY</p>
            <p>{blogpost.fri} ON FRIDAY</p>
            <p>{blogpost.sat}ON SATURDAY</p>
            <p>{blogpost.sun}ON SUNDAY</p>
          </div>
          <hr />
        </Grid>
        <Grid item xs={6}>
          <Card></Card>
        </Grid>
      </Grid>
    );
  }
};

export default PostBDetails;
{
  /* 
              
              <Grid item xs={4} >
              <div>
        <Typography className="ta">Personal Trainer Packages</Typography>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
        be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
</div>
</Grid>

*/
}
