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
     * @return {ListNode}
     */
    reverseList(head) {
        let temp = new ListNode()
        let curr = new ListNode()

        curr = head
        let prev = null

        while(curr) {
            temp = curr.next;
            curr.next = prev;
            prev = curr;
            // Move curr
            curr = temp;
        }

        return prev
    }
}
