function priceSuggestion(contractData) {
    var len = contractData.length,
        ret = [];
    contractData.sort((a, b) => a - b);
    if (len / 2 > 0) {
        if (len / 2 % 2) {
            ret = [contractData[len / 2 >> 1], contractData[(len / 2 >> 1) + len / 2]];
        } else {
            ret = [contractData[len / 4 - 1] + contractData[len / 4] >> 1,
                contractData[len / 4 - 1 + len / 2] + contractData[len / 4 + len / 2] + 1 >> 1
            ];
        }
    }
    return ret;
}
