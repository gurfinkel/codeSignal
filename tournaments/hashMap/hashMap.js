function hashMap(queryType, query) {
    const n = query.length;
    const store = new Map();
    let deltaKey = 0;
    let deltaValue = 0;
    let result = 0;

    for (let i = 0; n > i; ++i) {
        switch (queryType[i]) {
            case 'insert':
                store.set(query[i][0] - deltaKey, query[i][1] - deltaValue);
                break;
            case 'get':
                result += deltaValue + store.get(query[i][0] - deltaKey);
                break;
            case 'addToKey':
                if (store.size) deltaKey += query[i][0];
                break;
            default:
                if (store.size) deltaValue += query[i][0];
                break;
        }
    }

    return result;
}
