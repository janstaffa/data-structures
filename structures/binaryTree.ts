class TreeNode {
  constructor(
    value: any,
    leftNode: TreeNode | null,
    rightNode: TreeNode | null
  ) {
    this.value = value;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
  value: any;
  leftNode: TreeNode | null;
  rightNode: TreeNode | null;

  createChild = (value: string, side: "left" | "right") => {
    const node = new TreeNode(value, null, null);
    if (side === "left") {
      this.rightNode = node;
    } else {
      this.leftNode = node;
    }

    return node;
  };
}

export class BinaryTree {
  root: TreeNode;

  constructor(rootValue: any) {
    const node = new TreeNode(rootValue, null, null);
    this.root = node;
  }
}
