class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const graph = {};
        for (let [u, v, w] of times) {
            if (!graph[u]) graph[u] = [];
            graph[u].push([v, w]);
        }

        // Min heap: [time, node]
        const minHeap = [[0, k]];
        const dist = new Map();

        while (minHeap.length) {
            // Sort heap manually or use real PQ (like binary heap in libs)
            minHeap.sort((a, b) => a[0] - b[0]);
            const [time, node] = minHeap.shift();

            if (dist.has(node)) continue; // already visited
            dist.set(node, time); // lock in shortest time

            for (let [nei, weight] of (graph[node] || [])) {
                if (!dist.has(nei)) {
                    minHeap.push([time + weight, nei]);
                }
            }
        }

        if (dist.size !== n) return -1;
        return Math.max(...dist.values());
    };
}
