function minimalBasketPrice(maxPrice, vendorsDelivery, vendorsProducts) {
    var vendlen = vendorsDelivery.length,
        prodlen = vendorsProducts[0].length,
        products = vendorsProducts[0].map(a => []);
    
    // create the vendor list for the products
    vendorsProducts.map((prod, vendid) =>
        prod.map((price, prodid) => {
            if (price > -1)
                products[prodid].push({price: price, time: vendorsDelivery[vendid], vend: vendid});
        })
    );
    // sort vendors by delivery time and price for each products
    products.map(list => list.sort((a, b) => a.time - b.time || a.price - b.price));
    
    // find the current delivery time of the fastest deliveries
    var time = Math.max(...products.map(p => p[0].time));
    
    // get the delivery times ordered list
    vendorsDelivery.sort((a,b) => a - b);
    // and remove the smallest items than the current delivery time
    for (j = 0; j < vendlen && vendorsDelivery[j] <= time; j++) ;
    vendorsDelivery = vendorsDelivery.slice(j);
    
    // function for search the minimum prices of the products where delivery time <= time
    f = time => {
        for (i = 0; i < prodlen; i++) {
            min = 1e9
            for (j = 0; j < products[i].length && products[i][j].time <= time; j++)
                if (min > products[i][j].price) {
                    min = products[i][j].price
                    id = j
                }
            products[i].splice(0, j, products[i][id]);
        }
    }
    // first loop, synchronize the product array for the current mimum time. get the minimum prices.
    f(time);
    
    // second loop while sum of the fastest deliveries price > maxPrice
    while (products.reduce((a, b) => a + b[0].price, a = 0) > maxPrice)
        // try to increase the delivery time and get the minimum prices again with the new timelimit.
        f(vendorsDelivery.shift());
    
    // return the ordered set of the festest deiliveries vendors
    return [...new Set(products.map(p => p[0].vend))].sort((a, b) => a - b);
}
