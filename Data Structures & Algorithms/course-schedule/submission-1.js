class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = Array.from({ length: numCourses }, () => []);
        for (let [course, prereq] of prerequisites) {
            graph[prereq].push(course); // Directed edge: prereq -> course
        }

        const visited = new Array(numCourses).fill(0); // 0 = unvisited, 1 = visiting, 2 = visited

        const dfs = (node) => {
            if (visited[node] === 1) return false; // Found a cycle
            if (visited[node] === 2) return true;  // Already checked this node, no cycle

            visited[node] = 1; // Mark as visiting

            for (let neighbor of graph[node]) {
                if (!dfs(neighbor)) return false;
            }

            visited[node] = 2; // Mark as fully visited
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}
