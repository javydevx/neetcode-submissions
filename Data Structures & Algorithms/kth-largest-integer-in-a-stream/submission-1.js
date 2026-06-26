// MinHeap Implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Bubble up
    bubbleUp(index) {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] <= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    // Bubble down
    bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    remove() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown(0);
        }
        return min;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}


class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinHeap();
    
        nums.forEach(num => this.add(num));
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.insert(val);
        if (this.minHeap.size() > this.k) {
            this.minHeap.remove();
        }
        return this.minHeap.peek();
    }
}
