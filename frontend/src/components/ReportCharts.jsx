import React, { useState} from 'react'
import Chart from 'react-apexcharts'

const ReportCharts = () => {

    const [chartData, setChartData] = useState({
        series: [{
            name: 'Sales',
            data: [30, 40, 35, 50, 49, 60, 70],
        },
        {
            name: 'Expenses',
            data: [20, 29, 37, 36, 44, 45, 50],
        },
        {   
            name: 'Profit',
            data: [10, 11, 12, 15, 20, 25, 30],
        },
    ],
        options: {
            chart: {
                type: 'area',
                height: 400,
                toolbar: {
                    show: false,
                },
            },
            markers: {
                size: 4,
            },
            colors: ['#008FFB', '#00E396', '#FEB019'],
            fill: {
                type: 'gradient',
                gradient: {
                    opacityFrom: 0.3,
                    shadowIntensity: 1,
                    opacityTo: 0.4,
                    stops: [0, 90, 100],
                },
            },
            dataLabels: {
                enabled: false,
            },
            strokes: {
                width: 2,
                curve: 'smooth',
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-09-19T00:00:00.000Z',
                    '2018-09-19T01:00:00.000Z',
                    '2018-09-19T02:00:00.000Z',
                    '2018-09-19T03:00:00.000Z',
                    '2018-09-19T04:00:00.000Z',
                    '2018-09-19T05:00:00.000Z',
                    '2018-09-19T06:00:00.000Z'
                ],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
        },
    })

  return (
        <Chart
            options={chartData.options}
            series={chartData.series}
            type={chartData.options.chart.type}
            height={chartData.options.chart.height}
        />
  )
}

export default ReportCharts