import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    display: "flex",
  },
  appBar: {
    borderRadius: "25px",
    margin: "10px 0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  upcard: {
    padding: "5px 0px",
    display: "flex",
    marginBottom: "30px",
    height: "300px",
    width: "100%",
    color: "White",
  },
  root: {
    backgroundColor: "rgb(38, 38, 38)",
    minWidth: 250,

    padding: "10px 10px 10px 10px",
    marginLeft: "15px",
    marginRight: "15px",
    marginBottom: 100,
  },
  bullet: {
    display: "inline-block",
    margin: "4px 4px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
}));
