// the stack datastructure is just like a stack of cards, the last you push on is the first you pop back

export class Stack {
  private list: any[] = [];

  push = (value: any) => {
    this.list.push(value);
  };

  pop = () => {
    if (this.list.length === 0) return;
    return this.list.pop();
  };
}
