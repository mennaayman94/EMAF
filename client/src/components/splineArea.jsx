import React, { useState,useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import '../assets/css/style.css'

const SplineArea =(props)=> {
  console.log(props)
    const [state,setState] = useState(
        {
      
            series: [],
            options: {
              chart: {
                toolbar: {
                  show: true,
                  offsetX: 0,
                  offsetY: 0,
                  tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true | '<img src="/static/icons/reset.png" width="20">',
                    customIcons: []
                  },
                  export: {
                    csv: {
                      filename: undefined,
                      columnDelimiter: ',',
                      headerCategory: 'category',
                      headerValue: 'value',
                      dateFormatter(timestamp) {
                        return new Date(timestamp).toDateString()
                      }
                    }
                  },
                  autoSelected: 'zoom' 
                },
                height: 350,
                type: 'area'
              },tooltip: {
                enabled: true,
                enabledOnSeries: undefined,
                shared: true,
                followCursor: false,
                intersect: false,
                inverseOrder: false,
                custom: undefined,
                fillSeriesColor: false,
                theme: false,
                style: {
                  fontSize: '12px',
                  fontFamily: undefined,
                },
                onDatasetHover: {
                    highlightDataSeries: false,
                },
                x: {
                    show: true,
                    formatter: undefined,
                },
                y: {
                    formatter: undefined,
                    title: {
                        formatter: (seriesName) => seriesName,
                    },
                },
                marker: {
                    show: true,
                },
                fixed: {
                    enabled: false,
                    position: 'topRight',
                    offsetX: 0,
                    offsetY: 0,
                },
            },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              yaxis:{
                  labels:{
                    style: {
                        colors: "#9e9e9e",
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label',
                    }
                  }
              },
              xaxis: {
                type: 'string',
                categories: [],
                labels: {
                    show: true,
                    rotate: -45,
                    rotateAlways: false,
                    hideOverlappingLabels: true,
                    showDuplicates: false,
                    trim: false,
                    minHeight: undefined,
                    maxHeight: 120,
                    style: {
                        colors: "#9e9e9e",
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 300,
                        cssClass: 'apexcharts-xaxis-label',
                    }
                },
              },
              
  legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: 'bottom',
    horizontalAlign: 'center', 
    floating: false,
    fontSize: '14px',
    fontFamily: 'Helvetica, Arial',
    fontWeight: 400,
    formatter: undefined,
    inverseOrder: false,
    width: undefined,
    height: undefined,
    tooltipHoverFormatter: false,
    offsetX: 0,
    offsetY: 5,
    labels: {
        colors: ["#9e9e9e"],
        useSeriesColors: false
    },
    markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
    },
    itemMargin: {
        horizontal: 5,
        vertical: 0
    },
    onItemClick: {
        toggleDataSeries: true
    },
    onItemHover: {
        highlightDataSeries: true
    },
  }}})
  useEffect(() => {
    setState({
      series : [{
        name: props.factor1.name,
        data: props.factor1.data
      }, {
        name: props.factor2.name,
        data: props.factor2.data
      },{
        name: props.factor3.name,
        data: props.factor3.data
        }],
        options : {
          xaxis: {
            type: 'string',
            categories: props.assetName
        }
      }
    })
  }, [props])

        return (
            <div id="chart">
            <Chart options={state.options} series={state.series} type="area" height={325} />
            </div>
        )
}


export default SplineArea;