const useTraverseTree = () =>{
    
    function insertNode (tree, folderID, item, isFolder){
        if(tree.id === folderID && tree.isFolder){
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                items:[]
            })
            return tree;
        }

        let latestNode = [];
        latestNode = tree.items.map((ob) => {
        return insertNode(ob, folderID, item, isFolder);
        });

        return { ...tree, items: latestNode };
    }

    return {insertNode};
};

export default useTraverseTree;