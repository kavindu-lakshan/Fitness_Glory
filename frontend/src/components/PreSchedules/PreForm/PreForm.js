import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createPrePost, updatePrePost } from '../../../actions/preposts';
import { useSelector } from 'react-redux';

    

//get the current id


const PreForm = ({currentId, setCurrentId}) => {
    const [prepostData, setPrePostData] = useState({ creator: '', name: '', equipment: '', sups: '', tags: '', goal: '', type: '', level: '', noWeeks: '', selectedFile: '',selectedFile2: '' });

    const [creatorerror, setCreatorerror] = useState({});
    const [nameeerror, setNameerror] = useState({});
    const [noWeekserror, setNoWeekserror] = useState({});
    const [tagserror, setTagserror] = useState({});

    const prepost = useSelector((state) => (currentId ? state.preposts.find((message) => message._id === currentId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (prepost) setPrePostData(prepost);
      }, [prepost]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = mformvalidation();
        if (isValid) {
        if(currentId){
            dispatch(updatePrePost(currentId,prepostData));
        }
        else{
            dispatch(createPrePost(prepostData));
        }

        clear();
    }
    }

    //validations
    const mformvalidation = () => {
        let creatorerror = {};
        let nameerror = {};
        let tagserror = {};
        let noWeekserror = {};
    
        let isValid = true;
    
        if (prepostData.name === "") {
            nameerror.name = " * name is required";
          isValid = false;
        }
        if (prepostData.creator === "") {
          creatorerror.creator = "*  name is required";
          isValid = false;
        }
        if (prepostData.noWeeks === "") {
          noWeekserror.noWeeks = " * no of weeks are required";
          isValid = false;
        }
        if (prepostData.tags === "") {
          tagserror.tags = " * tags are required";
          isValid = false;
        }
        setNameerror(nameerror);
        setCreatorerror(creatorerror);
        setNoWeekserror(noWeekserror);
        setTagserror(tagserror);
        return isValid;
      };
    //   const clear = () => {
    //     setCurrentId(0);
    //     setPrePostData({
    //       creator: "",
    //       name: "",
    //       noWeeks: "",
    //       tags: "",
    //       selectedFile: "",
    //       mon: "",
    //       tue: "",
    //       wed: "",
    //       thu: "",
    //       fri: "",
    //       sat: "",
    //       sun: "",
    //       face: "",
    //       what: "",
    //       email: "",
    //     });
    //     setNameerror({});
    //     setCreatorerror({});
    //     setNoWeekserror({});
    //     setTagserror({});
    //   };
    
      const demo = () => {
        setCurrentId(0);
        setPrePostData({
            creator:"Sandani Zoysa",
            name:"Summer Shape Up",
            goal:"FatLoss",
            type:"Split",
            level:"Beginner",
            noWeeks:"8 weeks",
            equipment:"Dumbbells,Machines",
            sups:"Multivitamin,Fishoil",
            tags:"healthy,fitness",
        });
      };





    const clear = () => {
        setCurrentId(0);
        setPrePostData({ creator: '', name: '', goal: '',type: '',level: '',noWeeks: '',equipment: '',sups: '', tags: '', selectedFile: '',selectedFile2: '' });
        setNameerror({});
        setCreatorerror({});
        setNoWeekserror({});
        setTagserror({});
      };
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? `Editing "${prepost.name}"` : 'Creating a Schedule'}</Typography> 

            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={prepostData.creator} onChange={(e) => setPrePostData({ ...prepostData, creator: e.target.value })} />
            <TextField name="name" variant="outlined" label="Name" fullWidth value={prepostData.name} onChange={(e) => setPrePostData({ ...prepostData, name: e.target.value })} />
            <TextField name="equipments" variant="outlined" label="Equipments" fullWidth multiline rows={4} value={prepostData.equipment} onChange={(e) => setPrePostData({ ...prepostData, equipment: e.target.value })} />
            <TextField name="sups" variant="outlined" label="Sups" fullWidth multiline rows={4} value={prepostData.sups} onChange={(e) => setPrePostData({ ...prepostData, sups: e.target.value })} />
            <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={prepostData.tags} onChange={(e) => setPrePostData({ ...prepostData, tags: e.target.value.split(',') })} />   
            <TextField name="goal" variant="outlined" label="Goal" fullWidth value={prepostData.goal} onChange={(e) => setPrePostData({ ...prepostData, goal: e.target.value })} />
            <TextField name="type" variant="outlined" label="Type" fullWidth value={prepostData.type} onChange={(e) => setPrePostData({ ...prepostData, type: e.target.value })} />
            <TextField name="level" variant="outlined" label="Level" fullWidth value={prepostData.level} onChange={(e) => setPrePostData({ ...prepostData, level: e.target.value })} />
            <TextField name="noWeeks" variant="outlined" label="NoWeeks" fullWidth value={prepostData.noWeeks} onChange={(e) => setPrePostData({ ...prepostData, noWeeks: e.target.value })} />
           
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPrePostData({ ...prepostData, selectedFile: base64 })} /></div>
            <div className={classes.fileInput}><FileBase type="file2" multiple={false} onDone={({ base64 }) => setPrePostData({ ...prepostData, selectedFile2: base64 })} /></div>

            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth> Submit </Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            <Button variant="contained" color="primary" size="small" onClick={demo} fullWidth> Demo </Button>
              
            </form>
        </Paper>
    );
}

export default PreForm;