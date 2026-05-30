import { useState } from "react";

function Folder({handleRenameNode, handleDeleteNode, handleInsertNode, explorer}){
    const [expand, setExpand]= useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    });

    const handleNewFolder = (e, isFolder) =>{
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder
        });
    };

    const onAddFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
        handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
        setShowInput({ ...showInput, visible: false });
        }
    };

    const handleDelete= (e) =>{
        e.stopPropagation();
        handleDeleteNode(explorer.id);
    }

    if(explorer.isFolder){
        return(
        <div style={{marginTop:5}}>
            <div onClick={()=> setExpand(!expand)} className="folder">
                <span>
                    📁{explorer.name}
                </span>
                <span>
                    <button onClick={handleRenameNode

                        
                    }>Rename</button>
                    <button onClick={handleDelete}> - delete</button>
                    <button onClick={(e)=> handleNewFolder(e, true)}>+ Folder</button>
                    <button onClick={(e)=> handleNewFolder(e, false)}>+ File</button>
                </span>
            </div>
            <div style ={{display: expand? "block":"none", paddingLeft: 25}}>
                {
                    showInput.visible && (
                        <div className="inputcontainer">
                            <span>{showInput.isFolder ? "📁" : "📄"}</span>
                            <input 
                            type="text"
                            autoFocus
                            onKeyDown={onAddFolder}
                            onBlur={()=> setShowInput({...showInput, visible: false})}
                            className="inputcontainer__input"/>
                        </div>
                    )
                }

                {explorer.items.map((item)=>{
                    return <Folder key={item.id} handleRenameNode={handleRenameNode} handleDeleteNode={handleDeleteNode} handleInsertNode={handleInsertNode} explorer={item}/>
                })}
            </div>
        </div>
        );
    }else{
        return <div>
            <span>📄{explorer.name}</span>
            <span><button onClick={handleDelete}> - delete</button></span>
            </div>
    }
}

export default Folder;