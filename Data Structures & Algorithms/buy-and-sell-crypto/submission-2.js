class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        let minBuy = prices[0];
        let bigProfit = 0; 
        for(let i = 1; i<prices.length; i++) {
            if(prices[i] <= minBuy ) {
                minBuy = prices[i];
            } else {
                // Sell case
                let profit = prices[i] - minBuy;
                if(profit > bigProfit) {
                    bigProfit = profit;
                }
            }
        }
        return bigProfit;
    }
}
