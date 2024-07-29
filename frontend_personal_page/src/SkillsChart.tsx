import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface SkillsChartProps {
  skillsSelected: string;
  skillsData: Array<{ skill: string, score: number }>;
  languagesData: Array<{ language: string, score: number }>;
}

const SkillsChart: React.FC<SkillsChartProps> = ({ skillsSelected, skillsData, languagesData }) => {
  const labels = skillsData.map(s => s.skill);
  const labelLanguages = languagesData.map(l => l.language);

  const options = {
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        display: false
      },
    },
    scales: {
      y: {
        ticks: {
          font: {
            size: 20,
          }
        },
        grid: {
          display: false
        }
      }
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Rating',
        data: skillsData.map(skill => skill.score),
        borderColor: '#7FFFD4',
        backgroundColor: '#7FFFD4',
      }
    ],
  };

  const dataLanguages = {
    labels: labelLanguages,
    datasets: [
      {
        label: 'Rating',
        data: languagesData.map(language => language.score),
        borderColor: '#7FFFD4',
        backgroundColor: '#7FFFD4',
      }
    ],
  };

  return (
    <div className='skill__plot'>
      <Bar options={options} data={skillsSelected === "coding" ? data : dataLanguages} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default SkillsChart;