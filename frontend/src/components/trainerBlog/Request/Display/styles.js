import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  gridn:{
    margin: "auto" ,
    padding: "50px 50px  " ,
  },
  pname: {
    height: "200",
    width:"600",
   
    borderRadius:"12px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  
  vcard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "2px",
    height: "100%",
    position: "relative",
    
  },
  
  grid: {
    display: "flex",
  },
  root: {
    minWidth:" 275",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "14",
  },
  pos: {
    marginBottom: "12",
  },
  tipo:{
    color:"White"
  },
  chart:{
    color:"white"
  }
});
