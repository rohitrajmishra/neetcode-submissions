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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        // console.log(l1);
        // console.log(l2);
        let h3 = null, c3 = null;
        let carry = 0;
        // Min len guaranteed to be 1
        while(l1 && l2) {
            let sum = carry + l1.val + l2.val;
            // console.log("sum: ", sum);
            // Reset carry after use
            carry = 0;
            if(sum > 9) {
                carry = 1;
                sum = sum % 10;
            }
            // console.log(carry, sum);

            let newNode = new ListNode(sum);
            if(!h3) { //First Node
                h3 = newNode;
                c3 = newNode;
            } else {
                c3.next = newNode;
                c3 = c3.next;
            }
            l1 = l1.next;
            l2 = l2.next;
        }

        let pendingList = null;
        pendingList = l1 ? l1 : l2;
        if(pendingList) {
            while(pendingList) {
                let sum = carry + pendingList.val;
                // Reset carry after use
                carry = 0;
                if(sum > 9) {
                    carry = 1;
                    sum = sum % 10;
                }
                let newNode = new ListNode(sum);
                c3.next = newNode;
                c3 = c3.next;
                pendingList = pendingList.next;
            }
        }
        // Settle remaining carry
        if(carry) {
            let newNode = new ListNode(carry);
            c3.next = newNode;
            c3 = c3.next;
        }
        return h3;
    }
}
