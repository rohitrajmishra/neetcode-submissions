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
        // Initialize currents for traversal
        let c3 = null;
        let h3 = null;

        let c1 = list1;
        let c2 = list2;
        let candidateNode = null;
        while(c1 !== null && c2 !== null) {
            if(c1.val <= c2.val) {
                candidateNode = c1;
                c1 = c1.next;
            } else {
                candidateNode = c2;
                c2 = c2.next;
            }
            // Update
            if(!h3) { // First out node
                c3 = candidateNode;
                h3 = c3;
            } else {
                c3.next = candidateNode;
                c3 = c3.next;
            }
        }
        // Copy remaining non-empty LL
        if(c1) {
            while(c1) {
                if(!h3) { // First out node
                    c3 = c1;
                    h3 = c3;
                } else {
                    c3.next = c1;
                    c3 = c3.next;
                }
                c1 = c1.next;
            }
        } else {
            while(c2) {
                if(!h3) { // First out node
                    c3 = c2;
                    h3 = c3;
                } else {
                    c3.next = c2;
                    c3 = c3.next;
                }
                c2 = c2.next;
            }
        }
        return h3;
    }
}
