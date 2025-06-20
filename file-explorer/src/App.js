import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import explorer from './data/folderData';
import Folder from './components/Folder';

function App() {

  const [explolrerData, setExplorerData] = useState(explorer);

  console.log(explolrerData);

  return (
    <div className="App">
      <Folder explorer={explolrerData}/>
    </div>
  );
}

export default App;
