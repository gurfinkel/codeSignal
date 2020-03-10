function houseRobber(nums, idx = nums.length - 1, dp = Array(nums.length).fill(-1)) {
    if (0 > idx) {
        return 0;
    }
    
    if (!~dp[idx]) {
        dp[idx] = Math.max(houseRobber(nums, idx - 1, dp), nums[idx] + houseRobber(nums, idx - 2, dp))
    }
    
    return dp[idx];
}
