function minimalNumberOfCoins(coins, price) {
    let result = 0;
    let index = coins.length - 1;

    coins.sort((a, b) => a - b);

    while (0 <= index && 0 < price) {
        if (coins[index] <= price) {
            price -= coins[index];
            ++result;
        } else {
            --index;
        }
    }

    return result;
}
