function shoppingCart(requests) {
    var list = {},
        cart = [],
        type, name, value;
    for (var request of requests) {
        [type, name, value] = request.split(" : ");
        if (type == 'add')
            if (list[name])
                list[name]++
            else
                list[name] = 1
        if (type == 'remove')
            delete list[name]
        if (type == 'quantity_upd')
            list[name] += +value;
        if (type == 'checkout')
            list = {};
    }
    for (var name in list) {
        cart.push(name + " : " + list[name]);
    }
    return cart;
}
