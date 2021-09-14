import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
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
    padding: "0px 0px",
    display: "flex",
    marginBottom: "30px",
    height: "300px",
    width: "100%",
    color: "White",
  },
}));
