import { tuple } from "./structures/tuple";
import { array } from "./structures/array";
import { object } from "./structures/object";
import { LinkedList } from "./structures/linkedList";
import { DoubleLinkedList } from "./structures/doubleLinkedList";
import { Stack } from "./structures/stack";
import { Queue } from "./structures/queue";
import { BinaryTree } from "./structures/binaryTree";

// object:
console.group("object:");
console.log("accessing a property:", object.key);
console.log("calling a method:", object.method());
console.groupEnd();

// array:
console.group("array:");
console.log("getting item at index 0:", array[0]);
console.groupEnd();

// tuple:
console.group("tuple:");
console.log("calling a function at index 2:", tuple[2]());
console.groupEnd();

// one way linked list:
console.group("linked list:");
const list = new LinkedList();

list.addNode("node 1");
list.addNode("node 2");
list.addNode("node 3");

console.log("getting the node at index 1:", list.nodes[1]);
console.groupEnd();

// two way linked list:
console.group("double linked list:");
const doubleList = new DoubleLinkedList();

doubleList.addNode("node 1");
doubleList.addNode("node 2");
doubleList.addNode("node 3");

console.log("getting the nodes at index 1:", doubleList.nodes[1]);
console.groupEnd();

//stack:
console.group("stack:");
const stack = new Stack();

stack.push("value 1");
stack.push("value 2");

console.log("popping the last item from stack:", stack.pop());
console.log("popping the second to last item from stack:", stack.pop());
console.groupEnd();

//queue:
console.group("queue:");
const queue = new Queue();

queue.enqueue("value 1");
queue.enqueue("value 2");

console.log("dequeuing the first item from queue:", queue.dequeue());
console.log("dequeuing the second item from queue:", queue.dequeue());

console.groupEnd();

//binary tree:

console.group("binary tree:");
const tree = new BinaryTree("root");

const node1 = tree.root.createChild("value 2", "left");
tree.root.createChild("value 3", "right");
node1.createChild("value 4", "left");

console.log(tree.root);
console.groupEnd();
