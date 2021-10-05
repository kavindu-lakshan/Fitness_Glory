import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { createBlogPost, updateBlogPost } from "../../../../actions/blogposts";
import "./memf.css";

const Form = ({ currentId, setCurrentId }) => {
  const [blogpostData, setBlogPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    mon: "",
    tue: "",
    wed: "",
    thu: "",
    fri: "",
    sat: "",
    sun: "",
    face: "",
    what: "",
    email: "",
  });
  const [creatorerror, setCreatorerror] = useState({});
  const [titleerror, setTitleerror] = useState({});
  const [messageerror, setMessageerror] = useState({});
  const [tagserror, setTagserror] = useState({});
  const [whaterror, setWerror] = useState({});
  const [faceerror, setFerror] = useState({});
  const [emailerror, setEerror] = useState({});
  const [monerror, setMONerror] = useState({});
  const [tueerror, setTUEerror] = useState({});
  const [wederror, setWEDerror] = useState({});
  const [thuerror, setTHUerror] = useState({});
  const [frierror, setFRIerror] = useState({});
  const [saterror, setSATerror] = useState({});
  const [sunerror, setSUNerror] = useState({});

  const blogpost = useSelector((state) =>
    currentId ? state.blogposts.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (blogpost) setBlogPostData(blogpost);
  }, [blogpost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = mformvalidation();
    if (isValid) {
      if (currentId) {
        dispatch(updateBlogPost(currentId, blogpostData));
        alert("data Updated Successfully");
        //history.push("/Admin");
      } else {
        dispatch(createBlogPost(blogpostData));
        alert("Workout Created Successfully");
        // history.push("/Admin");
      }
      clear();
    }
  };

  const mformvalidation = () => {
    let creatorerror = {};
    let titleerror = {};
    let tagserror = {};
    let messageerror = {};
    let monerror = {};
    let tueerror = {};
    let wederror = {};
    let thuerror = {};
    let frierror = {};
    let saterror = {};
    let sunerror = {};
    let whaterror = {};
    let faceerror = {};
    let emailerror = {};

    let isValid = true;

    if (blogpostData.title === "") {
      titleerror.title = " * name is required";
      isValid = false;
    }
    if (blogpostData.creator === "") {
      creatorerror.creator = "*  title is required";
      isValid = false;
    }
    if (blogpostData.message === "") {
      messageerror.message = " * description is required";
      isValid = false;
    }
    if (blogpostData.tags === "") {
      tagserror.tags = " * tags are required";
      isValid = false;
    }
    if (blogpostData.mon === "") {
      monerror.mon = " *  required";
      isValid = false;
    }
    if (blogpostData.tue === "") {
      tueerror.tue = " * required";
      isValid = false;
    }
    if (blogpostData.wed === "") {
      wederror.wed = " * required";
      isValid = false;
    }
    if (blogpostData.thu === "") {
      thuerror.thu = " *  required";
      isValid = false;
    }
    if (blogpostData.fri === "") {
      frierror.fri = " *  required";
      isValid = false;
    }
    if (blogpostData.sat === "") {
      saterror.sat = " *  required";
      isValid = false;
    }
    if (blogpostData.sun === "") {
      sunerror.sun = " *  required";
      isValid = false;
    }
    if (blogpostData.what === "") {
      whaterror.what = " *  required";
      isValid = false;
    }
    if (blogpostData.face === "") {
      faceerror.face = " *  required";
      isValid = false;
    }
    if (blogpostData.email === "") {
      emailerror.email = " *  required";
      isValid = false;
    }

    setTitleerror(titleerror);
    setCreatorerror(creatorerror);
    setMessageerror(messageerror);
    setTagserror(tagserror);
    setMONerror(monerror);
    setTUEerror(tueerror);
    setWEDerror(wederror);
    setTHUerror(thuerror);
    setFRIerror(frierror);
    setSATerror(saterror);
    setSUNerror(sunerror);
    setWerror(whaterror);
    setFerror(faceerror);
    setEerror(emailerror);
    return isValid;
  };
  const clear = () => {
    setCurrentId(0);
    setBlogPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
      mon: "",
      tue: "",
      wed: "",
      thu: "",
      fri: "",
      sat: "",
      sun: "",
      face: "",
      what: "",
      email: "",
    });
    setTitleerror({});
    setCreatorerror({});
    setMessageerror({});
    setTagserror({});
    setMONerror({});
    setTUEerror({});
    setWEDerror({});
    setTHUerror({});
    setFRIerror({});
    setSATerror({});
    setSUNerror({});
    setWerror({});
    setFerror({});
    setEerror({});
  };

  const demo = () => {
    setCurrentId(0);
    setBlogPostData({
      creator: "Anne merry",
      title: "personal trainer",
      message: "hi join with me",
      tags: "weekday",
      selectedFile: "",
      mon: "Available",
      tue: "Available",
      wed: "Available",
      thu: "Available",
      fri: "Available",
      sat: "Available",
      sun: "Available",
      face: "mnau@facebook.com",
      what: "0719535456",
      email: "manu99@gmail.com",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        style={formback}
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing ` : "Creating a Blog"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Trainer name"
          fullWidth
          value={blogpostData.creator}
          onChange={(e) =>
            setBlogPostData({ ...blogpostData, creator: e.target.value })
          }
        />
        {Object.keys(creatorerror).map((key) => {
          return <div className="error">{creatorerror[key]}</div>;
        })}
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={blogpostData.title}
          onChange={(e) =>
            setBlogPostData({ ...blogpostData, title: e.target.value })
          }
        />
        {Object.keys(titleerror).map((key) => {
          return <div className="error">{titleerror[key]}</div>;
        })}
        <TextField
          name="message"
          variant="outlined"
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={blogpostData.message}
          onChange={(e) =>
            setBlogPostData({ ...blogpostData, message: e.target.value })
          }
        />
        {Object.keys(messageerror).map((key) => {
          return <div className="error">{messageerror[key]}</div>;
        })}
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={blogpostData.tags}
          onChange={(e) =>
            setBlogPostData({
              ...blogpostData,
              tags: e.target.value.split(","),
            })
          }
        />
        {Object.keys(tagserror).map((key) => {
          return <div className="error">{tagserror[key]}</div>;
        })}
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setBlogPostData({ ...blogpostData, selectedFile: base64 })
            }
          />
        </div>
        {/*}
        <TextField
          name="mon"
          variant="outlined"
          label="monday"
          fullWidth
          value={postData.mon}
          onChange={(e) =>
            setPostData({ ...postData, mon: e.target.value })
          }

        />*/}
        <TextField
          name="face"
          variant="outlined"
          label="Facebook"
          fullWidth
          multiline
          value={blogpostData.face}
          onChange={(e) =>
            setBlogPostData({ ...blogpostData, face: e.target.value })
          }
        />
        {Object.keys(faceerror).map((key) => {
          return <div className="error">{faceerror[key]}</div>;
        })}

        <TextField
          name="what"
          variant="outlined"
          label="Whatsapp Number"
          fullWidth
          multiline
          value={blogpostData.what}
          onChange={(e) =>
            setBlogPostData({ ...blogpostData, what: e.target.value })
          }
        />
        {Object.keys(whaterror).map((key) => {
          return <div className="error">{whaterror[key]}</div>;
        })}
        <TextField
          name="email"
          variant="outlined"
          label="Email"
          fullWidth
          multiline
          value={blogpostData.email}
          onChange={(e) =>
            setBlogPostData({ ...blogpostData, email: e.target.value })
          }
        />
        {Object.keys(emailerror).map((key) => {
          return <div className="error">{emailerror[key]}</div>;
        })}
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Monday</InputLabel>
          <Select
            value={blogpostData.mon}
            onChange={(e) =>
              setBlogPostData({
                ...blogpostData,
                mon: e.target.value,
              })
            }
          >
            {" "}
            <MenuItem aria-label="None" value="" />
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Not Available">Not Available</MenuItem>
          </Select>
          {Object.keys(monerror).map((key) => {
            return <div className="error">{monerror[key]}</div>;
          })}
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Tuesday</InputLabel>
          <Select
            value={blogpostData.tue}
            onChange={(e) =>
              setBlogPostData({
                ...blogpostData,
                tue: e.target.value,
              })
            }
          >
            {" "}
            <MenuItem aria-label="None" value="" />
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Not Available">Not Available</MenuItem>
          </Select>
          {Object.keys(tueerror).map((key) => {
            return <div className="error">{tueerror[key]}</div>;
          })}
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Wednesday</InputLabel>
          <Select
            value={blogpostData.wed}
            onChange={(e) =>
              setBlogPostData({
                ...blogpostData,
                wed: e.target.value,
              })
            }
          >
            {" "}
            <MenuItem aria-label="None" value="" />
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Not Available">Not Available</MenuItem>
          </Select>
          {Object.keys(wederror).map((key) => {
            return <div className="error">{wederror[key]}</div>;
          })}
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Thursday</InputLabel>
          <Select
            value={blogpostData.thu}
            onChange={(e) =>
              setBlogPostData({
                ...blogpostData,
                thu: e.target.value,
              })
            }
          >
            <MenuItem aria-label="None" value="" />
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Not Available">Not Available</MenuItem>
          </Select>
          {Object.keys(thuerror).map((key) => {
            return <div className="error">{thuerror[key]}</div>;
          })}
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Friday</InputLabel>
          <Select
            value={blogpostData.fri}
            onChange={(e) =>
              setBlogPostData({
                ...blogpostData,
                fri: e.target.value,
              })
            }
          >
            {" "}
            <MenuItem aria-label="None" value="" />
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Not Available">Not Available</MenuItem>
          </Select>
          {Object.keys(frierror).map((key) => {
            return <div className="error">{frierror[key]}</div>;
          })}
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Saturday</InputLabel>
          <Select
            value={blogpostData.sat}
            onChange={(e) =>
              setBlogPostData({
                ...blogpostData,
                sat: e.target.value,
              })
            }
          >
            {" "}
            <MenuItem aria-label="None" value="" />
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Not Available">Not Available</MenuItem>
          </Select>
          {Object.keys(saterror).map((key) => {
            return <div className="error">{saterror[key]}</div>;
          })}
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Sunday</InputLabel>
          <Select
            value={blogpostData.sun}
            onChange={(e) =>
              setBlogPostData({
                ...blogpostData,
                sun: e.target.value,
              })
            }
          >
            {" "}
            <MenuItem aria-label="None" value="" />
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Not Available">Not Available</MenuItem>
          </Select>
          {Object.keys(sunerror).map((key) => {
            return <div className="error">{sunerror[key]}</div>;
          })}
        </FormControl>

        {/*}
        <TextField
          name="tue"
          variant="outlined"
          label="tuesday"
          fullWidth
          value={postData.tue}
          onChange={(e) =>
            setPostData({ ...postData, tue: e.target.value })
          }
        />
        <TextField
          name="wed"
          variant="outlined"
          label="wednesday"
          fullWidth
          value={postData.wed}
          onChange={(e) =>
            setPostData({ ...postData, wed: e.target.value })
          }
        />
        <TextField
          name="thu"
          variant="outlined"
          label="thursday"
          fullWidth
          value={postData.thu}
          onChange={(e) =>
            setPostData({ ...postData,thu: e.target.value })
          }
        />
        <TextField
          name="fri"
          variant="outlined"
          label="friday"
          fullWidth
          value={postData.fri}
          onChange={(e) =>
            setPostData({ ...postData,fri: e.target.value })
          }
        />
        <TextField
          name="sat"
          variant="outlined"
          label="saturday"
          fullWidth
          value={postData.sat}
          onChange={(e) =>
            setPostData({ ...postData, sat: e.target.value })
          }
        />
        <TextField
          name="sun"
          variant="outlined"
          label="sunday"
          fullWidth
          value={postData.sun}
          onChange={(e) =>
            setPostData({ ...postData, sun: e.target.value })
          }
        />*/}
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.buttonclear}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={demo}
          fullWidth
        >
          Demo
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
const formback = {
  color: "red",
};
