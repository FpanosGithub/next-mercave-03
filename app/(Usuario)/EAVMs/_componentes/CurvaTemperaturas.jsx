'use client';
import { ResponsiveContainer, YAxis, ReferenceLine, LineChart, Line, Legend, CartesianGrid,Tooltip} from 'recharts';

function CustomTooltip({ payload, label, active }) {
    if (active) {
      try {
        return (
          <div className="custom-tooltip p-2 space-y-1 text-slate-200 font-light bg-slate-700/80 border border-gray-100">
            <p>{`Rueda A: ${payload[0].value.toFixed(2)} º`}</p>
            <p>{`Rueda B: ${payload[1].value.toFixed(2)} º`}</p>
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


function CurvaTemperaturas ({datos, height}){
    return(
          <div className='py-4 bg-slate-900 rounded-xl'>
            <div className='text-gray-400 pl-4'>Temperaturas</div>
            <ResponsiveContainer height={height} className = 'text-xs text-blue-500'>
              <LineChart 
                      data={datos}
                      margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical = {false}/>
                  <Line type="monotone" dataKey="tempa" stroke="#8884d8" />
                  <Line type="monotone" dataKey="tempb" stroke="#82ca9d" />
                  <ReferenceLine y={50} label="50º" stroke="red" strokeDasharray="3 3" ifOverflow="extendDomain"/>
                    <ReferenceLine y={-10} label="-10º" stroke="blue" strokeDasharray="3 3" ifOverflow="extendDomain"/>
                  <Tooltip content={<CustomTooltip />}/>
                  <YAxis/>
              </LineChart>
            </ResponsiveContainer>
          </div>
    )
}
export default CurvaTemperaturas