//
// Binary trees are already defined with this interface:
// class Tree<T> {
//   public T value { get; set; }
//   public Tree<T> left { get; set; }
//   public Tree<T> right { get; set; }
// }
Tree<int> deleteFromBST(Tree<int> t, int[] queries) {
    if (null == t) {
        return null;
    }

    foreach (int item in queries) {
        if (null == t.left && null == t.right && item == t.value) {
            return null;
        }

        if (item == t.value) {
            t = remove(t);
            continue;
        }

        var node = find(t, item);
        var isLeftChildFlag = false;

        if (null != node) {
            var parent = node;
            if (null != parent.left && item == parent.left.value) {
                node = parent.left;
                isLeftChildFlag = true;
            } else {
                node = parent.right;
            }

            if (isLeftChildFlag) {
                parent.left = remove(node);
            } else {
                parent.right = remove(node);
            }
        }
    }

    return t;
}

private Tree<int> remove(Tree<int> node) {
    if (null != node.left) {
        if (null == node.left.right) {
            node.left.right = node.right;

            return node.left;
        } else {
            var maxNodeParent = getMaxNode(node.left);
            var rightNode = maxNodeParent.right;

            maxNodeParent.right = rightNode.left;

            rightNode.left = node.left;
            rightNode.right = node.right;

            return rightNode;
        }
    } else {
        return node.right;
    }
}

private Tree<int> getMaxNode(Tree<int> root) {
    if (null != root.right && null != root.right.right) {
        return getMaxNode(root.right);
    }

    return root;
}

Tree<int> find(Tree<int> root, int val) {
    if (null == root) {
        return null;
    }

    if ((null != root.left && val == root.left.value) || (null != root.right && val == root.right.value)) {
        return root;
    }

    if (root.value > val) {
        return find(root.left, val);
    } else if (root.value < val) {
        return find(root.right, val);
    } else {
        return root;
    }
}
