function applesDistribution(apples, boxCapacity, maxResidue) {
    let result = 0;

    for (let i = 0; boxCapacity >= i; ++i)
        if(apples % i <= maxResidue)
            ++result;

    return result;
}
