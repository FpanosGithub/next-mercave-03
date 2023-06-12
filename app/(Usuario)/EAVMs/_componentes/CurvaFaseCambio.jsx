'use client';
import { ResponsiveContainer, YAxis, XAxis, ReferenceLine, LineChart, Line, CartesianGrid, Tooltip} from 'recharts';

function CustomTooltip({ payload, label, active }) {
    if (active) {
      try {
        return (
          <div className="custom-tooltip p-2 text-white font-light bg-slate-900/50 border border-gray-100">
            {`${payload[0].value.toFixed(2)} N`}
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

  export default function CurvaFaseCambio ({datos, fase, rueda, height, color}){

    return(
          <div className='py-3 bg-gray-100 rounded-xl'>
            <div className='text-gray-700 font-semibold pl-4'>{fase}</div>
            <div className='text-gray-700 pl-4'>Rueda {rueda}</div>
            <ResponsiveContainer height={height} className = 'text-xs text-blue-500'>
              <LineChart 
                      data={datos}
                      margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical = {false}/>
                  <XAxis dataKey="x" />
                  <Line type="monotone" dataKey="f" stroke={color} strokeWidth={3}/>
                  <Tooltip content={<CustomTooltip />}/>
                  <YAxis/>
              </LineChart>
            </ResponsiveContainer>
          </div>
    )
}
