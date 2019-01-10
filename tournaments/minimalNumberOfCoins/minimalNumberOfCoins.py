def minimalNumberOfCoins(coins, price):
    i = -1
    numCoins = 0
    
    while 0 < price and len(coins) >= abs(i):
        if price >= coins[i]:
            price -= coins[i]
            numCoins += 1
        else:
            i -= 1
    
    return numCoins
