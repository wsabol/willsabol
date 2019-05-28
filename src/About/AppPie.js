import React from 'react';
import Chart from "react-apexcharts";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        title: {
          text: 'skillSet',
          align: 'center',
          style: {
            fontFamily: 'monospace',
            fontSize:  '18px',
            color:  '#263238'
          },
        },
        labels: props.labels,
        dataLabels: {
          enabled: true,
          formatter: (val, opts) => opts.w.config.labels[opts.seriesIndex]
        },
        legend: {
          show: false
        },
        tooltip: {
          y: {
            formatter: (val, opts) => Math.round(val)+'%'
          }
        }
      },
      series: props.series,
    }
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="pie"
      />
    );
  }
}
