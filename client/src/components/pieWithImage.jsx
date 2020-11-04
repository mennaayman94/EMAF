import React, { useState,useEffect } from 'react';
import Chart from 'react-apexcharts';

const PieWithImage =(props)=> {
    const [state,setState] = useState( {
      
        series: [],
        options: {
          labels: ['In-Use', 'Dismissed', 'Removed'],
          chart: {
            width: 130,
            type: 'pie',
          },
          colors: [ '#E5C6A0', '#669DB5', '#94A74A'],
          stroke: {
            width: 4
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            onItemClick: {
              toggleDataSeries: true
          },
          onItemHover: {
              highlightDataSeries: true
          },
            labels: {
              useSeriesColors: true
          },
            formatter: function(seriesName, opts) {
              return [seriesName + ' - ' +opts.w.globals.series[opts.seriesIndex]+ '%']
          }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 170
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
      })
useEffect(() => {
  let arr = [props.series["in use"],props.series["dismissed"],props.series["removed"]];
  const sum = arr.reduce(function(a, b){
    return a + b;
    }, 0)
    const seriesArr = arr.map(x=> parseInt((x/sum) *100))
    setState({series:seriesArr})
}, [props])
      return (
        

        <div id="chart">
      <Chart options={state.options} series={state.series} type="pie" />
      </div>
      
      
            );
          }

export default PieWithImage;