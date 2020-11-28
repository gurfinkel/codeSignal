function optimalStockBasket(stocks, riskBudget) {
    a = [m = 0]
    for ([v, r] of stocks) {
        for (j = riskBudget; j >= 0; j--) {
            if (r + j <= riskBudget && a[j] !== undefined)
                m = Math.max(m, a[j + r] = Math.max(~~a[j + r], a[j] + v))
        }
    }
    return m
}
