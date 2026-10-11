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
    getLen(head) {
        let cur = head;
        let size = 0;
        while(cur !== null) {
            size++;
            cur = cur.next;
        }
        return size;
    }
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let cur = head;
        // console.log("before cur1: ", cur.val);
        let size = this.getLen(cur);
        let indexToDelete = size - n;
        // console.log("after cur1: ", cur.val);
        // console.log("size: ", size);

        let i = 0, prev = null;
        while(cur !== null) { // Safeguard against error
            if(i === indexToDelete) {
                if(!prev) { // Node to delete is head itself
                    head = cur.next;
                    return head;
                } else {
                    prev.next = cur.next;
                    cur.next = null;
                    return head;
                }
            }
            i++;
            prev = cur;
            cur = cur.next;
        }
        // If somehow invalid case, code will reach here
        return head;
    }
}
