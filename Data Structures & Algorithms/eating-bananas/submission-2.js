class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(p, h) {
        // Invalid case
        if(p.length > h) {
            return -1;
        }

        // Solution comp. => O(n + O(rangelLen * log(rangeLen))) 
        // e.g. rangeLen is P, O(n + O(PlogP))
        // let minItem = p[0];
        let maxItem = p[0];
        for(let i=1;i<p.length;i++) {
            // if(p[i] < minItem) {
            //     minItem = p[i];
            // } else if(p[i] > maxItem) {
            //     maxItem = p[i];
            // }
            if(p[i] > maxItem) {
                maxItem = p[i];
            }
        }

        // Range array for k, [1, ..., ..., ..., maxItem], say length is rangeLen
        // Binary search comp. O(rangelLen * log(rangeLen))
        let l = 1, r = maxItem;
        let k = -1;
        while(l<=r) {
            let mid = Math.floor((l + r)/2);
            // Calculate eating time
            let time = 0;
            for(let i=0;i<p.length;i++) {
                time += Math.ceil(p[i] / mid);
            }
            // console.log(`mid: ${mid} \t time: ${time}`)

            // Update possible k
            if(time <= h) {
                k = mid;
                // console.log("k: ", k);
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return k;
    }
}
