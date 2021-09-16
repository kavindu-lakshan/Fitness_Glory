
// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(4),
//     },
//   },
//   paper: {
//     padding: theme.spacing(2),
//   },
//   form: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   fileInput: {
//     width: '97%',
//     margin: '10px 0',
//   },
//   buttonSubmit: {
//     marginBottom: 10,
//   },
// }));
import { makeStyles } from "@material-ui/core/styles";
export default  makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        // color: 'rgba(0,183,255, 1)',
        color: 'rgba(13, 13, 1, 0.88)',
        


      },
      image: {
        marginLeft: '15px',
      },
      
}));