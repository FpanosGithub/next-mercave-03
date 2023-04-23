'use client';
import { ResponsiveContainer, YAxis, ReferenceLine, LineChart, Line, CartesianGrid, Tooltip} from 'recharts';

function CustomTooltip({ payload, label, active }) {
    if (active) {
      try {
        return (
          <div className="custom-tooltip p-2 text-slate-200 font-light bg-slate-700/80 border border-gray-100">
            {`${payload[0].value.toFixed(2)} Km/h`}
          </div>
        );
      }
      catch {
      return (
        <div className="custom-tooltip">
          <p className="label">{`sin valores`}</p>
        </div>
      );
      }
    }
  
    return null;
  }


  export default function CurvaVelocidad ({datos, height}){
    return(
          <div className='py-4 bg-slate-900 rounded-xl'>
            <div className='text-gray-400 pl-4'>Velocidad</div>
            <ResponsiveContainer height={height} className = 'text-xs text-blue-500'>
              <LineChart 
                      data={datos}
                      margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical = {false}/>
                  <Line type="monotone" dataKey="vel" stroke="#8884d8" />
                  <ReferenceLine y={100} label={{ value: '100 Km/h', position: 'top' }}  stroke="red" strokeDasharray="2 2" ifOverflow="extendDomain" wrapperStyle={{ backgroundColor: '#fdfdfd'}}/>
                  <Tooltip content={<CustomTooltip />}/>
                  <YAxis/>
              </LineChart>
            </ResponsiveContainer>
          </div>
    )
}
