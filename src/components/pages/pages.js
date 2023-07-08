import { useState } from 'react';

export const InputF =({lbl,data,update}) => {
 const [v, setV] = useState(data);
 return <label>{lbl}<input
    type="email"
    required
    value={v}
    onChange={e=>setV(e.target.value)}
    onBlur={e=>update('samp',v)}
  /></label>
}

export const PreSetFields =  ({data,update}) => {
 const [v, setV] = useState(data);
 return <div>
      <div><label>field 1:<input
        type="text"
        required
        value={data.field1}
        onChange={e=>setV({...v, field1: e.target.value})}
        onBlur={e=>update('field1',v.field1)}
      /></label></div>
      <div><label>field 2:<input
        type="number"
        required
        value={data.field2}
        onChange={e=>setV({...v, field2: e.target.value})}
        onBlur={e=>update('field2',v.field2)}
      /></label></div>
      <div><label>field 3:<input
        type="text"
        required
        value={data.field3}
        onChange={e=>setV({...v, field3: e.target.value})}
        onBlur={e=>update('field3',v.field3)}
      /></label></div>
  </div>
}
