import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import explorer from './data/folderData';
import Folder from './components/Folder';
import useTraverseTree from './hooks/use-traverse-tree';

function App() {

  const [explolrerData, setExplorerData] = useState(explorer);

  const {insertNode} = useTraverseTree();

  const handleInsertNode= (folderId, item, isFolder)=>{

    const finalTree= insertNode(explolrerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  }

  console.log(explolrerData);

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explolrerData}/>
    </div>
  );
}

export default App;
