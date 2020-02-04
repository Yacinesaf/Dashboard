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
                data:[
                  1100,
                  747,
                  123,
                  400,
                  845,
                  345,
                  2000,
                ],
              }
            ]
      },
  }
}


  render(){
    return (
      <div className="chart">
        <Line
          height={250}
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