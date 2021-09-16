import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePrePost, likePrePost} from '../../../../actions/preposts';


const PrePost = ({prepost, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
      <CardMedia className={classes.media} image={prepost.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={prepost.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{prepost.creator}</Typography>
        <Typography variant="body2">{moment(prepost.createdAt).fromNow()}</Typography>
        
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(prepost._id)}><MoreHorizIcon fontSize="default" /></Button>
       
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{prepost.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.name} gutterBottom variant="h5" component="h2">{prepost.name}</Typography>
      <CardContent>
        {/* <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography> */}
        <Typography variant="body2" color="textSecondary" component="p">Goal:{prepost.goal}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Type:{prepost.type}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Level:{prepost.level}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Duration:{prepost.noWeeks}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Equipments:{prepost.equipment}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Suppliments:{prepost.sups}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePrePost(prepost._id))}><ThumbUpAltIcon fontSize="small" /> Like {prepost.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePrePost(prepost._id))}><DeleteIcon fontSize="small" /> Delete</Button> 
        
        
      </CardActions>
    </Card>
    );
}

export default PrePost;

