import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPrePost } from "../../../../actions/preposts";
import useStyles from "./styles";
import { Paper, Typography, Divider } from "@material-ui/core";


const Predisplay = () => {
  const {prepost} = useSelector((state)=> state.preposts);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPrePost(id));
  }, [id, dispatch]);

  if (!prepost) return null;

  return (
    <div className="container">
      &nbsp;
      <Paper
        style={{ padding: "20px", borderRadius: "15px", marginBottom: "30px" }}
        elevation={4}
      >
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h6" component="h6">
              {prepost.name}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="h2"
            >
              Created By - {prepost.creator}
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="body1">
              <strong>Main Goal- {prepost.goal}</strong>
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="body1">
              <strong>Type {prepost.type}</strong>
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="body1">
              <strong>Level - {prepost.level}</strong>
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="body1">
              <strong>No of weeks - {prepost.noWeeks}</strong>
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="body1">
              <strong>Equipments - {prepost.equipment}</strong>
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="body1">
              <strong>Supplimetns - {prepost.sups}</strong>
            </Typography>
          </div>
          <div className={classes.imageSection}>
            <img
              className={classes.media}
              src={prepost.selectedFile}
              alt="Pre Schedule"
            />
            
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Predisplay;