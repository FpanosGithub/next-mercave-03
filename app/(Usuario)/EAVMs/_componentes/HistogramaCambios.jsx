
'use client';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid,Tooltip, Legend } from 'recharts';

function CustomTooltip({ payload, label, active }) {
    if (active) 
      {
      if(payload !== null) 
        {  
        return (
          <div className="custom-tooltip p-2 text-slate-200 font-light bg-slate-700/80 border border-gray-100">
            <p>{`Rueda A: ${payload[0].value}  cambios`}</p>
            <p>{`Rueda B: ${payload[1].value}  cambios`}</p>
          </div>
        );
        }
      }
    return null;
  }

  export default function HistogramaCambios ({datos, titulo, color_a, color_b, height}){

  return(
    <div className='py-4 bg-slate-900 rounded-xl'>
      <div className='text-gray-400 pl-4'>{titulo}</div>
      <ResponsiveContainer height={height} className = 'text-xs text-blue-500'>
        <BarChart 
                  data={datos} 
                  margin = {{
                    top: 20,
                    right: 20,
                    left: -10,
                    bottom: 5,}}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip content={<CustomTooltip />}/>
            <Bar dataKey="A" fill={color_a} />
            <Bar dataKey="B" fill={color_b} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    );
}

