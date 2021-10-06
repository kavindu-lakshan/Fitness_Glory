import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Chart(data){
    // const labels = ["NIC","NIC1", "2","3"]
    // const dataVal = [200,300,400,500]
    // const ChartData = {
    //     label: labels,
    //     datasets: [{
    //         label: "Salaries",
    //         backgroundColor: 'rgba(75,192,192,1)',
    //         borderColor: 'rgba(0,0,0,1)',
    //         borderWidth: 1,
    //         data: dataVal
    //     }
    //     ]
//}
const state = {
    labels: data.data.map(emp => emp.NICNumber),
    datasets: [
      {
        label: 'TOTAL SALARY',
        backgroundColor: '#6F6E6D',
        borderColor: '#6F6E6D',
        opacity: '0.1',
        borderWidth: 1,
        color: 'white',
        data: data.data.map(sal => sal.TotSalary)
      }
    ]
  }

    return(
        <div style = {barStyles}>
            <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'TOTAL SALARY DISTRIBUTION FOR THE MONTH',
              fontSize:25,
              color: 'white',
              fontColor: 'white'
            },
            legend:{
              display:true,
              position:'right'
            },
            scales : {
              yAxes: [{
                ticks:{
                  beginAtZero: true,
                  fontSize: 15,
                  fontColor: 'white',
                  color: 'white',
                  label: 'TOTAL SALARY'
                },
                
                gridLines: {
                  color: "red"
                }
              }],
              xAxes: [{
                ticks: {
                  fontSize: 15,
                  fontColor: 'white',
                  color: 'white',
                  label: 'NIC NUMBER'
                },

                gridLines: {
                  color: "red"
                }
              }]
            }
          }}
        />
        </div>
    )

}


const barStyles = {
  height: '370px',
  width: '700px',
  backgroundColor: 'white',
  marginLeft: '270px'
}