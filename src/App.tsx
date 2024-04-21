import { useCallback, useEffect, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { xml as langXML } from '@codemirror/lang-xml';
import { yaml as langYAML } from '@codemirror/lang-yaml';
import { atomone } from '@uiw/codemirror-theme-atomone';
import XML from 'xml2js';
import YAML from 'yaml'

import './App.css'
import { demoXML } from './demoXML';

function App() {
  const [valueXML, setValueXML] = useState(demoXML);
  const onChangeXML = useCallback((val: any, _viewUpdate) => {
    console.log('val:', val);
    setValueXML(val);
    XML.parseString(val, (err, result) => {
      console.dir(result);
      setValueReq(YAML.stringify(result));
    });
  }, []);

  const [valueReq, setValueReq] = useState("");
  const onChangeReq = useCallback((val: any, _viewUpdate) => {
    console.log('val:', val);
    setValueReq(val);
    
    const builder = new XML.Builder();
    const xml = builder.buildObject(YAML.parse(val));
    setValueXML(xml);
  }, []);

  useEffect(() => {
    XML.parseString(demoXML, (err, result) => {
      console.dir(result);
      setValueReq(YAML.stringify(result));
    });
  }, []);

  return (
    <div className="h-full w-full flex flex-row">
      <div className='flex-1' />
      <CodeMirror
        value={valueReq}
        theme={atomone}
        width="48vw"
        height="95vh"
        extensions={[langYAML()]}
        onChange={onChangeReq} />
      <CodeMirror value={valueXML}
        theme={atomone}
        width="48vw"
        height="95vh"
        extensions={[langXML({})]}
        onChange={onChangeXML} />
      <div className='flex-1' />
    </div>
  )
}

export default App
