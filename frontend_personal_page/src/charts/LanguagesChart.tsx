import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from "../data/languages.json"

// Componente personalizado para renderizar etiquetas del eje Y con iconos
const CustomizedYAxisTick = (props) => {
  const { x, y, payload } = props;
  const dataItem = data.find(item => item.language === payload.value);
  
  return (
    <g transform={`translate(${x},${y})`}>
      <image xlinkHref={dataItem.icon} x={-30} y={-10} height={20} width={20}/>
      {/* <text x={10} y={0} dy={4} textAnchor="end" fill="#666">{payload.value}</text> */}
    </g>
  );
};

const BarChartWithIcons = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{
          top: 20, right: 30, left: 50, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" domain={[0,10]}/>
        <YAxis type="category" dataKey="language" tick={<CustomizedYAxisTick />} />
        <Tooltip />
        <Bar dataKey="score" fill="#7FFFD4" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartWithIcons;