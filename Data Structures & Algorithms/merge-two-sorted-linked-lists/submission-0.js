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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let arr = [];

        while (list1) {
            arr.push(list1.val);
            list1 = list1.next;
        }

        while (list2) {
            arr.push(list2.val);
            list2 = list2.next;
        }

        arr.sort((a, b) => a - b);

        let dummy = new ListNode();
        let current = dummy;

        for (let num of arr) {
            current.next = new ListNode(num);
            current = current.next;
        }

        return dummy.next;
    }
}
