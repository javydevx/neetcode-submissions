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
        let length = 0, curr = head;

        // Step 1: Find the length of the linked list
        while (curr) {
            length++;
            curr = curr.next;
        }

        // Step 2: Find the node to delete
        let target = length - n;
        if (target === 0) return head.next; // If first node needs to be removed

        // Step 3: Traverse again and remove the node
        let prev = null;
        curr = head;
        while (target > 0) {
            prev = curr;
            curr = curr.next;
            target--;
        }

        // Remove the target node
        prev.next = curr.next;

        return head;
    }
}
