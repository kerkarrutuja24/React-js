function Folder({explorer}){
    console.log(explorer);

    return(
        <div style={{marginTop:5}}>
            <div>
                <span>📁{explorer.name}</span>
            </div>
        </div>
    );
}

export default Folder;