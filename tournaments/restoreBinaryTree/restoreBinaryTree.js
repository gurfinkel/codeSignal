//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function restoreBinaryTree(inorder, preorder) {
    if (!inorder.length || !preorder.length) {
        return null;
    }
    
    const len = preorder.length;
    let index = -1;
    
    const makeTree = function(i, p) {
        if (!i.length) {
            return null;
        }
        
        ++index;
        
        let data = p[index];
        let node = new Tree(data);
        let inIndex = i.indexOf(data);
        
        if (1 === i.length) {
            return node;
        }
        
        node.left = makeTree(i.slice(0, inIndex), p);
        node.right = makeTree(i.slice(inIndex + 1), p);
        
        return node;
    };
    
    return makeTree(inorder, preorder);
}
