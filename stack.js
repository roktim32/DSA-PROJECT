export { Stack };

class Stack {
  constructor() {
    this.size = 0;
    this.stack = []; //when we undo it gives us a empty stack
    this.buffer = 4; //first 4 letter in one element
    //we are using this buffer flow condition to avoid overflow condition and memory leakagea
  }
  clear() {
    this.size = 0;
    this.stack = [];
  }

  isEmpty() {
    return this.size === 0;
  }

  //returns the top element
  top() {
    return this.stack[this.size - 1];
  }

  pop() {
    //if its not empty we delete one last element
    if (!this.isEmpty()) {
      this.size--;
      return this.stack.pop();
    } else {
      return [-1, ""];
    }
  }

  push(type, char) {
    //if its empty
    if (this.isEmpty()) {
      //and type is 0 we push
      if (type === 0) this.stack.push([type, char]);
    } else {
      let tmp = this.top();
      if (tmp[0] === type && tmp[1].length < this.buffer) {
        let top = this.pop();
        top[1] = char + top[1];
        this.stack.push(top);
      } else {
        this.stack.push([type, char]);
      }
    }
    this.size++;
  }
}
