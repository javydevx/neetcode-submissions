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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head); // Dummy node to handle edge cases
        let fast = dummy, slow = dummy;

        // Step 1: Move `fast` ahead by `n + 1` steps
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        }

        // Step 2: Move both `fast` and `slow` together
        while (fast) {
            slow = slow.next;
            fast = fast.next;
        }

        // Step 3: Remove the nth node
        slow.next = slow.next.next;

        return dummy.next;
    }
}
