import logo from './logo.svg';
import './App.css';
import Code from './code';
import { useState } from 'react';
function App() {
  const [language,setLanguage] = useState('');
  return (
    <div className="App">
      <header className="App-header">
       <h4>Code Highlight</h4>
      </header>
      <select onChange={(e)=> {
        console.log(e)
        setLanguage(e.target.value)}}>
        <option value='json'>JSON</option>
        <option value='sql'>sql</option>

      </select>
     <Code code = '{"name":"suresh","age":29,"gender":"male"}' language={language}></Code>
     {/* <Code code = 'select * from users' language={language}></Code> */}

    </div>
  );
}

export default App;
