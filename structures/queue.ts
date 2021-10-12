// the queue datastructure works just like a waiting queue for lunch, you enqueue nodes at the end, but then dequeue them from the beggining

export class Queue {
  private list: any[] = [];

  enqueue = (value: any) => {
    this.list.push(value);
  };

  dequeue = () => {
    if (this.list.length === 0) return;
    return this.list.shift();
  };
}
