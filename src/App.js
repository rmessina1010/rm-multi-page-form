import './App.css';
import {TheForm} from './components/components/sample';
import { useState } from 'react';

const defaultData={
  name:'',
  number:'',
  samp:'ss'
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
function useManagedData(defaultData = {}) {
    const [data,setData] = useState(defaultData);
    const  updateField = (fieldName, val) => setData(currentData=>{return {...currentData, [fieldName]:val}} )
    const  updateFieldSet = (fieldSet) => setData(currentData=>{return {...currentData, ...fieldSet}} )
    return [ data, updateFieldSet , updateField]
}
function App() {
  const [data,updateFS, updateData] = useManagedData(defaultData);

  return (
    <div className="App">
      <TheForm
      pages={ ['hi','otter!','bear', <InputF lbl="sample"
      data={data.samp} update={updateData} />, 'rabbit']}
      subFoo={()=>alert(1)}
      />
    </div>
  );
}

export default App;
