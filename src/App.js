import './App.css';
import {TheForm} from './components/components/sample';
import { useState, useMemo } from 'react';

const defaultData={
  name:'',
  number:'',
  samp:'ss',
  field1:null,
  field2:null,
  field3:null,
}

function InputF ({lbl,data,update}){
 const [v, setV] = useState(data);
 return <label>{lbl}<input
    type="email"
    required
    value={v}
    onChange={e=>setV(e.target.value)}
    onBlur={e=>update('samp',v)}
  /></label>
}
function PreSetFields ({data,update}){
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
function useManagedData(defaultData = {}) {
    const [data,setData] = useState(defaultData);
    const  updateField = (fieldName, val) => setData(currentData=>{return {...currentData, [fieldName]:val}} )
    const  updateFieldSet = (fieldSet) => setData(currentData=>{return {...currentData, ...fieldSet}} )
    return [ data, updateFieldSet , updateField]
}
function App() {
  const [data,, updateData] = useManagedData(defaultData);
  const retData=  ()=>data
  return (
    <div className="App">
      <h1>multi-page form test</h1>
      <TheForm
        pages={[
            'hi',
            'otter!',
            'bear',
            <InputF lbl="sample" data={data.samp} update={updateData} />,
            'rabbit' ,
            <PreSetFields data={data} update={updateData}/>
        ]}
        retData={retData}
        subFoo={(e,ret)=>{
          alert(JSON.stringify(ret))
        }}
      />
    </div>
  );
}

export default App;
