// Max-Heap implementation
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    bubbleUp(i) {
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] >= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    bubbleDown(i) {
        const n = this.heap.length;
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if (left < n && this.heap[left] > this.heap[largest]) largest = left;
            if (right < n && this.heap[right] > this.heap[largest]) largest = right;

            if (largest === i) break;

            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMax() {
        const max = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return max;
    }

    size() {
        return this.heap.length;
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxHeap();

        stones.forEach(stone => maxHeap.insert(stone));

        while (maxHeap.size() > 1) {
            const y = maxHeap.extractMax();
            const x = maxHeap.extractMax();

            if (y !== x) {
                maxHeap.insert(y - x);
            }
        }

        return maxHeap.size() === 1 ? maxHeap.extractMax() : 0;
    }
}
