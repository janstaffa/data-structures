class ListNode {
  constructor(value: any, previousNode: ListNode | null) {
    this.value = value;
    this.previousNode = previousNode;
  }
  value: any;
  previousNode: ListNode | null;
}

export class LinkedList {
  nodes: ListNode[] = [];

  addNode = (value: any) => {
    let previousNode = null;
    if (this.nodes.length > 0) {
      previousNode = this.nodes[this.nodes.length - 1];
    }
    const node = new ListNode(value, previousNode);
    this.nodes.push(node);
  };
}
