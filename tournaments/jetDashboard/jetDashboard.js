function jetDashboard(orders, n) {
    var max = 0,
        sum = 0,
        avg,
        dev = 0;
    orders = orders.slice(-n)
    return orders
        .map((price, i) => {
            max = Math.max(max, price)
            sum += price
            avg = sum / (i + 1)
            dev = 0
            for (var j = 0; j <= i; j++)
                dev += Math.pow(orders[j] - avg, 2)
            return [max, avg, i > 0 ? Math.sqrt(dev / i) : -1]
        })
}
