import { ResponsiveContainer, YAxis, ReferenceLine, LineChart, Line, Legend, CartesianGrid,Tooltip} from 'recharts';

function CustomTooltip({ payload, label, active }) {
    if (active) {
      try {
        return (
          <div className="custom-tooltip p-2 space-y-1  text-slate-200 font-light bg-slate-700/80 border border-gray-100">
            <p>{`Rueda A: ${payload[0].value.toFixed(2)} m/s^2`}</p>
            <p>{`Rueda B: ${payload[1].value.toFixed(2)} m/s^2`}</p>
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


function CurvaAceleraciones ({titulo, color_a, color_b, datos, lim_max, height}){
    return(
      <div className='py-4 bg-slate-900 rounded-xl'>
        <div className='text-gray-400 pl-4'>{titulo}</div>
        <ResponsiveContainer height={height} className = 'text-xs text-blue-500'>
          <LineChart 
              data={datos}
              margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical = {false}/>
            <Line type="monotone" dataKey="a" stroke={color_a} />
            <Line type="monotone" dataKey="b" stroke={color_b} />
            <ReferenceLine y={lim_max} label="Máx" stroke="red" strokeDasharray="3 3" ifOverflow="extendDomain"/>
            <Tooltip content={<CustomTooltip />}/>
            <YAxis/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
}
export default CurvaAceleraciones