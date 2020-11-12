function menuTypesetting(menu, numberOfItems) {
    var s = "",
        list = [];
    for (i = 0; i < menu.length; i++) {
        if (i > 0 && menu[i-1][1] == "Section Header")
            separator = ":"
        else if (i < menu.length - 1 && menu[i+1][1] == "Section Header")
            separator = ":"
        else if (i == menu.length - 1 && menu[i][1] == "Menu Item")
            separator = ":"
        else if (i > 0)
            separator = ","
        else
            separator = ""
        s += separator + menu[i][0]
    }
    s = s.replace(
        RegExp("([^,:]+[,:]){1,"+(numberOfItems-1)+"}([^,:]+)(,|$)", "g"),
        (...a) => {
            list.push(a[0].split(/[:,]/))
            return ""
        }
    )
    return list.map(l => l.filter(a => a))
}
