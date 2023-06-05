// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   indexAxis: 'y',
//   elements: {
//     bar: {
//       borderWidth: 2,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false,
//       // position: 'bottom',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Horizontal Bar Chart',
//     },
//   },
//   scales: {
//     y: {
//       barThickness: 40, // Adjust the bar thickness
//     },
//     x: {
//       categorySpacing: 0.7, // Adjust the spacing between bars
//     },
//   },
// };

// const labels = ["1800","1801","1802","1803","1804","1805","1806","1807","1808","1809","1810","1811","1812","1813","1814","1815","1816","1817","1818","1819","1820","1821","1822","1823","1824","1830"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       barThickness: 'flex',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     // {
//     //   label: 'Dataset 2',
//     //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//     //   borderColor: 'rgb(53, 162, 235)',
//     //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     // },
//   ],
// };

// export default function BarChart() {
//     return (
//         <div style={{ width: '600px', height: 'auto' }}>
//           <Bar options={options} data={data} />
//         </div>
//       );
//     }




import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  // ReferenceLine,
  ResponsiveContainer,
  Label,
} from 'recharts';


const data = 
[{year:"1800", value: 4},
{year:"1801", value:3},
{year: "1802", value: 6},
{year: "1803", value: 3}, 
{year: "1804", value:10}, 
{year: "1805", value:13}, 
{year: "1806", value:11}, 
{year: "1807", value:15}, 
{year: "1808",value: 12}, 
{year: "1809", value: 15}, 
{year: "1810", value: 15}, 
{year:"1800", value: 4},
{year:"1801", value:3},
{year: "1802", value: 6},
{year: "1803", value: 3}, 
{year: "1804", value:10}, 
{year: "1805", value:13}, 
{year: "1806", value:11}, 
{year: "1807", value:15}, 
{year: "1808",value: 12}, 
{year: "1809", value: 15}, 
{year: "1810", value: 15}, 
{year:"1800", value: 4},
{year:"1801", value:3},
{year: "1802", value: 6},
{year: "1803", value: 3}, 
{year: "1804", value:10}, 
{year: "1805", value:13}, 
{year: "1806", value:11}, 
{year: "1807", value:15}, 
{year: "1808",value: 12}, 
{year: "1809", value: 15}, 
{year: "1810", value: 15}, 
{year:"1800", value: 4},
{year:"1801", value:3},
{year: "1802", value: 6},
{year: "1803", value: 3}, 
{year: "1804", value:10}, 
{year: "1805", value:13}, 
{year: "1806", value:11}, 
{year: "1807", value:15}, 
{year: "1808",value: 12}, 
{year: "1809", value: 15}, 
{year: "1810", value: 15}, 
{year:"1800", value: 4},
{year:"1801", value:3},
{year: "1802", value: 6},
{year: "1803", value: 3}, 
{year: "1804", value:10}, 
{year: "1805", value:13}, 
{year: "1806", value:11}, 
{year: "1807", value:15}, 
{year: "1808",value: 12}, 
{year: "1809", value: 15}, 
{year: "1810", value: 15}, 
{year:"1800", value: 4},
{year:"1801", value:3},
{year: "1802", value: 6},
{year: "1803", value: 3}, 
{year: "1804", value:10}, 
{year: "1805", value:13}, 
{year: "1806", value:11}, 
{year: "1807", value:15}, 
{year: "1808",value: 12}, 
{year: "1809", value: 15}, 
{year: "1810", value: 15}, 
{year:"1800", value: 4},
{year:"1801", value:3},
{year: "1802", value: 6},
{year: "1803", value: 3}, 
{year: "1804", value:10}, 
{year: "1805", value:13}, 
{year: "1806", value:11}, 
{year: "1807", value:15}, 
{year: "1808",value: 12}, 
{year: "1809", value: 15}, 
{year: "1810", value: 15}, 
{year:"1800", value: 4},
{year:"1801", value:3},
{year: "1802", value: 6},
{year: "1803", value: 3}, 
{year: "1804", value:10}, 
{year: "1805", value:13}, 
{year: "1806", value:11}, 
{year: "1807", value:15}, 
{year: "1808",value: 12}, 
{year: "1809", value: 15}, 
{year: "1810", value: 15}, 
{year: "1808",value: 12}, 
{year: "1809", value: 15},
 {year: "1810", value: 15}, 
 {year: "1808",value: 12}, 
 {year: "1809", value: 15}, 
 {year: "1810", value: 15}, 
 {year: "1808",value: 12}, 
 {year: "1809", value: 15}, 
 {year: "1810", value: 15},
 {year: "1808",value: 12}, 
 {year: "1809", value: 15}, 
 {year: "1810", value: 15}]

export default class LC extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" aspect={2}>
      <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" padding={{ left: 30, right: 30 }} tick={{ fontSize: 12 }}>
            <Label value="Years" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: 'count', angle: -90, position: 'center' }} tick={{ fontSize: 12 }} />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
