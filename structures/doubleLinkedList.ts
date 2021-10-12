class ListNode {
  constructor(
    value: any,
    previousNode: ListNode | null,
    nextNode: ListNode | null
  ) {
    this.value = value;
    this.previousNode = previousNode;
    this.nextNode = nextNode;
  }
  value: any;
  previousNode: ListNode | null;
  nextNode: ListNode | null;
}
export class DoubleLinkedList {
  nodes: ListNode[] = [];

  addNode = (value: any) => {
    const previousIdx = this.nodes.length - 1;
    let previousNode = null;
    if (this.nodes.length > 0) {
      previousNode = this.nodes[previousIdx];
    }
    const node = new ListNode(value, previousNode, null);
    if (previousNode) {
      this.nodes[previousIdx].nextNode = node;
    }
    this.nodes.push(node);
  };
}
