import React, { useEffect } from 'react';
import Chart from 'chart.js';

// import Style from './pie-chart.module.scss';

const PieChart = ({ label, data }) => {
  const chartRef = React.createRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    // eslint-disable-next-line no-new
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Ruim', 'Regular', 'Bom'],
        datasets: [{
          label,
          data: [7, 15, 25],
          backgroundColor: [
            '#F25022',
            '#FFB900',
            '#7FBA00',
          ],
          borderWidth: 2,
        }],
      },
      options: {},
    });
  }, [chartRef, data, label]);
  return (
    <canvas
      id="myChart"
      ref={chartRef}
    />
  );
};

export default PieChart;
