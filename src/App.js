import './App.css';
import {TheForm} from './components/components/sample';
import {useManagedData} from './components/components/multiPage';
import { PreSetFields, InputF} from './components/pages/pages';

const defaultData={
  name:'',
  number:'',
  samp:'ss',
  field1:null,
  field2:null,
  field3:null,
}

function App() {
  const [data,, updateData] = useManagedData(defaultData);
  const retData=  ()=>data;

  return (
    <div className="App">
      <h1>multi-page form test</h1>
      <ul>Outside of form...{Object.keys(data).map(d=><li><b>{d}</b>:{data[d]}</li>)}</ul>
      <p>{data.field3 == data.samp ? 'yes':'no'}</p>

      <TheForm
        pages={[
            'hi',
            'otter!',
            'bear',
            <InputF lbl="sample" data={data.samp} update={updateData} />,
            'rabbit' ,
            <PreSetFields data={data} update={updateData}/>
        ]}
        retData= {retData}
        subFoo={(e,ret)=>{
          alert(JSON.stringify(ret))
        }}
      />
    </div>
  );
}

export default App;
