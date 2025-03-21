'use client'

import { useState, useEffect } from "react";
import { ResponsiveContainer,AreaChart,XAxis,YAxis,CartesianGrid,Tooltip,Area} from "recharts";


const Chart = () => {

    const data = [
        {
          "name": "September",
          "other_courses": 1000,
          "starcode": 9000,
          "amt": 2400
        },
        {
          "name": "",
          "other_courses": 2000,
          "starcode": 4598,
          "amt": 2210
        },
        {
          "name": "Page C",
          "other_courses": 2000,
          "starcode": 9200,
          "amt": 2290
        },
        {
          "name": "Page D",
          "other_courses": 780,
          "starcode": 7208,
          "amt": 2000
        },
        {
          "name": "Page E",
          "other_courses": 1890,
          "starcode": 7800,
          "amt": 2181
        },
        {
          "name": "Page F",
          "other_courses": 2390,
          "starcode": 3000,
          "amt": 2500
        },
        {
          "name": "Page G",
          "other_courses": 3490,
          "starcode": 7300,
          "amt": 2100
        }
      ]
       
const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
      


return(





<AreaChart width={isMobile?430:800} height={isMobile?180:300} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />

  <Tooltip />
  <Area type="monotone" dataKey="other_courses" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="starcode" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>



)
    
}

export default Chart;