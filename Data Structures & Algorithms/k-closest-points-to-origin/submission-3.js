class MaxHeap {
    constructor() {
        this.heap = [];
    }

    bubbleUp(i) {
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent][0] >= this.heap[i][0]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    bubbleDown(i) {
        const n = this.heap.length;
        while (true) {
            let left = 2 * i + 1, right = 2 * i + 2, largest = i;

            if (left < n && this.heap[left][0] > this.heap[largest][0]) largest = left;
            if (right < n && this.heap[right][0] > this.heap[largest][0]) largest = right;

            if (largest === i) break;
            
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }
    }

    insert(distance, point) {
        this.heap.push([distance, point]);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMax() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown(0);
        }
        return max;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}


class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxHeap = new MaxHeap();

        for (const point of points) {
            const dist = point[0] ** 2 + point[1] ** 2;
            maxHeap.insert(dist, point);
            if (maxHeap.size() > k) {
                maxHeap.extractMax();
            }
        }
    
        return maxHeap.heap.map(item => item[1]);
    }
}
