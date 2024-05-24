import React from 'react';
import ApexCharts from 'react-apexcharts';
import './Analytics.css';

const Analytics = () => {
  // Sample street light data in JSON format
  const streetLightData = [
    { month: 'Jan', columnValue: 30, lineValue1: 50, lineValue2: 20, circleValue1: 75, circleValue2: 80 },
    { month: 'Feb', columnValue: 40, lineValue1: 60, lineValue2: 30, circleValue1: 75, circleValue2: 80 },
    { month: 'Mar', columnValue: 35, lineValue1: 55, lineValue2: 25, circleValue1: 75, circleValue2: 80 },
    { month: 'Apr', columnValue: 50, lineValue1: 70, lineValue2: 40, circleValue1: 75, circleValue2: 80 },
    { month: 'May', columnValue: 45, lineValue1: 65, lineValue2: 35, circleValue1: 75, circleValue2: 80 },
    { month: 'Jun', columnValue: 60, lineValue1: 80, lineValue2: 50, circleValue1: 75, circleValue2: 80 },
  ];

  // Extracting data for each type of chart
  const columnChartData = streetLightData.map(data => ({ x: data.month, y: data.columnValue }));
  const lineChartData1 = streetLightData.map(data => ({ x: data.month, y: data.lineValue1 }));
  const lineChartData2 = streetLightData.map(data => ({ x: data.month, y: data.lineValue2 }));
  const circleChartData = streetLightData.map(data => data.circleValue1);

  // Options for column chart
  const columnChartOptions = {
    chart: {
      height: 350,
      type: 'bar',
    },
    xaxis: {
      categories: streetLightData.map(data => data.month),
    },
  };

  // Options for line chart
  const lineChartOptions = {
    chart: {
      height: 350,
      type: 'line',
    },
    xaxis: {
      categories: streetLightData.map(data => data.month),
    },
  };

  // Options for circle chart
  const circleChartOptions = {
    chart: {
      type: 'radialBar',
      height: 350,
    },
  };

  return (
    <div className="charts-container">
      <div className="chart mr-5">
        <ApexCharts
          options={columnChartOptions}
          series={[{ data: columnChartData }]}
          type="bar"
          height={350}
        />
      </div>
      <div className="chart">
        <ApexCharts
          options={lineChartOptions}
          series={[{ name: 'Series 1', data: lineChartData1 }, { name: 'Series 2', data: lineChartData2 }]}
          type="line"
          height={350}
        />
      </div>
      <div className="chart">
        <ApexCharts
          options={circleChartOptions}
          series={circleChartData}
          type="radialBar"
          height={350}
        />
      </div>
    </div>
  );
}

export default Analytics;
