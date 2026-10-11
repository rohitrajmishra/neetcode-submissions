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
        // Empty or single node
        if(!head || !head.next) {
            return false;
        }

        let slow = head;
        let fast = head.next;

        while(fast && fast.next) {
            if(slow === fast) { // cycle detected
                return true;
            }
            slow = slow.next;
            fast = fast.next.next;
        }
        return false;
    }
}
