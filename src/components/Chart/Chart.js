import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
  const [ dailyData, setDailyData ] = useState([]);

  useEffect(
    () => {
      const fetchAPI = async () => {
        setDailyData(await fetchData());
      };

      fetchAPI();
    },
  );

  const lineChart = (
    dailyData.length !== 0 ? (
    <Line
      data={{ 
        labels: '',
        datasets: [ {}, {} ]
      }}
    />
    ) : null
    
  );

  return (
    <div>
      Chart Here..
    </div>
  )
};

export default Chart;
