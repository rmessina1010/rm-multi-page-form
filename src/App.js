import './App.css';
import {TheForm} from './components/components/sample';
import { useState, useMemo } from 'react';
import { PreSetFields, InputF} from './components/pages/pages';

const defaultData={
  name:'',
  number:'',
  samp:'ss',
  field1:null,
  field2:null,
  field3:null,
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
