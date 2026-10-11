class MinStack {
    constructor() {
        this.stack = [];
        this.trackMinStack = [];
        this.trackMinStack.push(Number.POSITIVE_INFINITY);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        // Keep track of min val at each point
        if(val < this.getMin()) {
            this.trackMinStack.push(val);
        } else {
            this.trackMinStack.push(this.getMin());
        }
        
        this.stack.push(val);
        return;
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.trackMinStack.pop();
        return;
    }

    /**
     * @return {number}
     */
    top() {
        const size = this.stack.length;
        return this.stack[size - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        const size = this.trackMinStack.length;
        return this.trackMinStack[size-1];
    }
}
