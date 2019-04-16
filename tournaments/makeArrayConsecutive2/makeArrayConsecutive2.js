function makeArrayConsecutive2(statues) {
    return Math.max(...statues) - Math.min(...statues) - statues.length + 1;
}
