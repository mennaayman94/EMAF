import React, { useState,useEffect } from 'react';
import Chart from 'react-apexcharts';

const Donut=(props)=> {
    const [state,setState] = useState({
        series:[0,0,0,0],
        options: {
          labels: ['Very Good', 'Good', 'Fair', 'Poor'],
          chart: {
            width: 250,
            type: 'donut',
            // sparkline: { enabled: true }
          },
          dataLabels: {
            enabled: false,
          },
          fill: {
            type: 'gradient',
          },
          legend: {
            fontSize: '9px',
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
            tooltip: {
            enabled: true,
            }
        }
    });
    useEffect(() => {
      let arr = [props.series["1"],props.series["2"],props.series["3"],props.series["4"]];
  const sum = arr.reduce(function(a, b){
    return a + b;
    }, 0)
    const seriesArr = arr.map(x=> parseInt((x/sum) *100))
    setState({series: seriesArr})
    }, [props])
      return (
        <div className="chart">
          <Chart options={state.options} series={state.series} type="donut" />
        </div>
      );
}
export default Donut;