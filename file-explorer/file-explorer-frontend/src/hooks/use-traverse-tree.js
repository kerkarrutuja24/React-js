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
    };

    const deleteNode = function (tree, deleteId) {
        // If no children, return tree as it is
        if (!tree.items || tree.items.length === 0) {
            return tree;
        }

        const updatedItems = tree.items
            // First remove the node if id matches
            .filter((item) => item.id !== deleteId)
            // Then recursively check inside children
            .map((item) => deleteNode(item, deleteId));

        return {
            ...tree,
            items: updatedItems,
        };
    };

    const renameNode = (tree, renameId, newName) => {
        // If this is the node we want to rename
        if (tree.id === renameId) {
            return {
            ...tree,
            name: newName,
            };
        }

        // If not a folder, return as it is
        if (!tree.isFolder) return tree;

        // Otherwise recursively search in children
        const updatedItems = tree.items.map((item) =>
            renameNode(item, renameId, newName)
        );

        return {
            ...tree,
            items: updatedItems,
        };
    };

    return {insertNode, deleteNode, renameNode};
};

export default useTraverseTree;