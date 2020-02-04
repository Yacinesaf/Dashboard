import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = { 
      chartData : {
            labels: ['2014', '2015', '2016', '2017', '2018', '2019'],
            datasets:[
              {
                lineTension : 0,
                borderColor	: 'green',
                fill: false,
                label:'Population',
                data:[
                  1100,
                  747,
                  123,
                  400,
                  1145,
                  345,
                  2000,
                  
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
      },
  }
}


  render(){
    return (
      <div className="chart">
        <Line
          height={380}
          width={850}
          data={this.state.chartData}
          options={{
            elements : {
              point : {
                radius : 0
              }
            },
            responsive : true,
            legend : {display : false},
            scales: {
              xAxes: [{
                  gridLines: {
                      display:false
                  }
              }],
              yAxes: [{
                  gridLines: {
                      color : 'rgba(0,0,0,0.05)'
                  }   
              }]
          } 
          }}
        />
      </div>
    )
  }
}

export default Chart;