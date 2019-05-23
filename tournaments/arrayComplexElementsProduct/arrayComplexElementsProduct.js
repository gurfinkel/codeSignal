function arrayComplexElementsProduct(real, imag) {
    const result = [real[0], imag[0]];

    for (let i = 1; real.length > i; ++i) {
        let a = result[0] * real[i] - result[1] * imag[i];
        result[1] = result[1] * real[i] + result[0] * imag[i];
        result[0] = a;
    }

    return result;
}
