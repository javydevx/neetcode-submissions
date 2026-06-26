/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head) return;

        let nodes = []; // Step 1: Store nodes in an array
        let current = head;

        while (current) {
            nodes.push(current);
            current = current.next;
        }

        let left = 0, right = nodes.length - 1;

        while (left < right) { // Step 2: Reorder nodes
            nodes[left].next = nodes[right];
            left++;

            if (left === right) break; // Prevent cycle

            nodes[right].next = nodes[left];
            right--;
        }

        nodes[right].next = null; // Step 3: Terminate the list
    }
}
