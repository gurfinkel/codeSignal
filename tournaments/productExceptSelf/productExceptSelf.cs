int productExceptSelf(int[] nums, int m) {
    var product = 1;
    var sum = 0;

    foreach (int item in nums) {
        sum = (sum * item + product) % m;
        product = (product * item) % m;
    }

    return sum;
}
