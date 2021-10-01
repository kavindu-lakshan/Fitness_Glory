import React, { useState, useEffect} from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { unansweredT } from '../../api/apiFBQA'
import { NavBar } from './NavBar';
import './scrollBar.css'
import jsPDF from "jspdf";
import "jspdf-autotable";
import Logo from "../.././logo.png";
import { TextSize } from 'victory';
// import QAndABg from './ImagesD/QandABg.png'

export const ReportUnansweredQ = () =>{
    const match = useRouteMatch()
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        const displayQuestions = async() =>{
            const question = await unansweredT(match.params.weekNo)
            setQuestions(question)
        }
        displayQuestions()
    }, [])

   const filter = (button) =>{
       const filteredData = questions.filter(questions => questions.status === button)
       setQuestions(filteredData)
   }

   const pdf = () =>{
        var doc = new jsPDF();
        const tableColumn = ["Question Topic", "Question Status"];
        const tableRows = [];
        questions.map((row) => {
            const questionDetails = [
              row.qTopic,
              row.status,
            ];
            tableRows.push(questionDetails);
          });
          doc.text("Workout Report", 14, 20).setFontSize(12);
            doc.setFillColor(204, 204, 204, 0);
            doc.rect(0,0, 400, 50, "F");
            doc.addImage(Logo, "JPEG", 75, 2, 60, 30);
            doc.setTextColor(255,255,255);
            doc.setFontSize(15);
            doc.text(60, 40, 'The Questions posted by Members this week');
            doc.autoTable(tableColumn, tableRows, {
            styles: { fontSize: 12, halign: "center", backgroundColor:"transparent"},
            startY: 55,}
            
    );
    doc.save("QuestionReport.pdf");
}

    return(
        <div>
            <div style={bgImg}>
            <div className="container"> 
            </div>
            <div className="container"> 
            <div className="mt-3">
                <br/>
                <h3 style={labelStyle}className = "text-center">THIS WEEK QUESTIONS</h3>
                <Button style={btn} color="Secondary" variant="contained" onClick={()=>filter('Unanswered')}>UNANSWERED</Button>
                <Button style={btn1} color="Secondary" variant="contained" onClick={()=>pdf()}>GENERATE PDF</Button>
                <div style={hideScroll}>
                <div className="carbrQ" style={scrollable}>
                    <center>
                <table style ={textStyle} class="table">
                <thead>
                    <tr>
                        <th className="col-md-4">Topic of Question</th>
                        <th className="col-md-5">Status</th>
                        <th className="col">Action</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        questions.map((row)=>(
                        <tr>
                        <td>
                            {row.qTopic}
                        </td>
                        <td>
                            {row.status}
                        </td>
                        <td>
                        <Link to={`/employee/a/createA/${row._id}`} style={{ textDecoration: 'none' }}><Button style={btnSel} color="Secondary" variant="contained">Select Question</Button></Link>
                        </td>
                        </tr>
                        ))
                    }
                    
                </tbody>
                </table>
                </center>
                <br/><br/>
                </div>
                </div>
            </div>
            </div>
            </div>
    </div>
    )
}
const ReportBg = 'https://res.cloudinary.com/dulshan/image/upload/v1633072796/reportBg_zqb5hi.png'
const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) ,url(${ReportBg})`,
    backgroundSize: 'cover',
    position: 'center',
    marginTop:'-20px',
    right:'0%',
    left:'0%',
    width: '100%',
    height: '100%',
}

const labelStyle={
    color:'white',
    fontFamily: 'Helvetica',
    fontWeight:'bold',
    textTransform:'none' 
}

const textStyle={
    width:'80%',
    background:'transparent',
    color:'white',
    fontFamily: 'Helvetica',
    fontWeight:'bold',

}

const btn ={
    marginTop:'-60px',
    marginLeft:'20px',
    backgroundColor: 'transparent', 
    border: '2px solid #04938b',
    color:'white'
}

const btnSel ={
    backgroundColor: '#04938b', 
    border: '2px solid #04938b',
    color:'white'
}

const btn1 ={
    marginTop:'-60px',
    marginLeft:'50px',
    backgroundColor: 'transparent', 
    border: '2px solid #04938b',
    color:'white'
}

const scrollable ={
    height: '550px',
    overflowY: 'scroll',
    paddingRight:'20px'
}

const hideScroll ={
    height: '550px',
    overflow:'hidden'
}