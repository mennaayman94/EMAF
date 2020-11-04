import React, { useEffect,useState } from 'react';
import Chart from 'react-apexcharts';

const RadialChart=(props)=>{
    const [state,setState] = useState({
            series: [],
            options: {
              chart: {
                type: 'radialBar',
                offsetY: -20,
                sparkline: {
                  enabled: true
                }
              },
              plotOptions: {
                radialBar: {
                  startAngle: -90,
                  endAngle: 90,
                  hollow: {
                    size: '30%',
                  },
                  track: {
                    background: "#e7e7e7",
                    strokeWidth: '50%',
                    margin: 30, // margin is in pixels
                    dropShadow: {
                      enabled: true,
                      top: 2,
                      left: 0,
                      color: '#999',
                      opacity: 1,
                      blur: 2
                    }
                  },
                  dataLabels: {
                    name: {
                      show: false,
                    },
                    value: {
                      offsetY: -2,
                      fontSize: '20px',
                      color: "#e7e7e7"
                    }
                  }
                }
              },
              grid: {
                padding: {
                  top: -10
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'light',
                  shadeIntensity: 0.4,
                  inverseColors: false,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 50, 53, 91]
                },
              },
              labels: ['Performance'],
            },
      })

      useEffect(() => {
  const series = parseInt(props.overallPerformance)
  setState({series:[series]})
      }, [props])

    return (
        <div id="chart">
        <Chart options={state.options} series={state.series} type="radialBar" />
        </div>
    )}

  export default RadialChart;