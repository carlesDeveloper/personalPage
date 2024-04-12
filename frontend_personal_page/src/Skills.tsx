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
import "./assets/skills.css"

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
            display: false
          },
        },
    };

    const data = {
        labels,
        datasets: [
          {
            label: 'Rating',
            data: skillsData.map(skill => skill.score),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
      };
    return(
      <>
        <div className="skills__content" id='skills'>
          <div className="skills__title">
              Skills
          </div>
          <div className='skill__plot'>
            <Bar options={options} data={data} style={{"width": "100%", "height": "100%"}}/>
          </div>
        </div>

      </>
    )
}

export default Skills;