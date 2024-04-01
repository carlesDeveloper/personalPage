import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


import { Bar } from 'react-chartjs-2';
import skillsData from "./skills.json"


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function Skills() {
    const labels = skillsData.map(s => s.skill)
    const options = {
        indexAxis: 'y' as const,
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right' as const,
          },
          title: {
            display: true,
            text: 'SKILLS CHART',
          },
        },
    };

    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: skillsData.map(skill => skill.score),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
      };
    return(
        <><Bar options={options} data={data} /></>
    )
}

export default Skills;