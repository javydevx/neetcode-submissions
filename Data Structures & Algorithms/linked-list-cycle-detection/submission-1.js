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
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next; //Moves 1 step
            fast = fast.next.next; // Moves 2 steps
        
            if (slow === fast) {
                return true; // Cycle detected
            }
        }

        return false; // No cycle
    }
}
