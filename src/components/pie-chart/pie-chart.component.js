/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';

import Style from './pie-chart.module.scss';

const PieChart = ({
  id, label, data, className,
}) => {
  const [chart, setChart] = useState();
  const chartRef = React.createRef();
  const hasData = data.reduce((acc, cur) => {
    // eslint-disable-next-line no-param-reassign
    acc += cur;
    return acc;
  }, 0);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    setChart(new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Ruim', 'Regular', 'Bom'],
        datasets: [{
          label,
          data,
          backgroundColor: hasData ? [
            '#FF1654',
            '#EABE7C',
            '#70C1B3',
          ] : [],
          borderWidth: 3,
        }],
      },
      options: {
        legend: {
          display: false,
          reverse: true,
        },
        tooltips: {
          bodyFontFamily: "'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",
        },
      },
    }));

    const updateChart = () => {
      chart.resize();
    };

    window.addEventListener('resize', updateChart);

    return () => {
      chart.destroy();
      window.removeEventListener('resize', updateChart);
    };
  }, []);

  useEffect(() => {
    if (chart) {
      if (JSON.stringify(chart.data.datasets[0].data) !== JSON.stringify(data)) {
        chart.data.datasets[0].data = data;
        chart.update();
      }
    }
  }, [data]);

  return (
    <div>
      <h3 className={Style.chart__title}>
        {label}
        {' '}
        {hasData ? '' : '(Sem registros)'}
      </h3>
      <div className={Style.chart__wrapper}>
        <canvas
          className={`${className || ''}`}
          id={id}
          ref={chartRef}
        />
      </div>
    </div>
  );
};

export default PieChart;
