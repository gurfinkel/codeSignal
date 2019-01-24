bool equationTemplate(int[] values) {
    if (values[0] * values[1] == values[2] * values[3]) return true;
    if (values[0] * values[2] == values[1] * values[3]) return true;
    if (values[0] * values[3] == values[1] * values[2]) return true;
    if (values[0] * values[1] * values[2] == values[3]) return true;
    if (values[0] * values[1] * values[3] == values[2]) return true;
    if (values[0] * values[2] * values[3] == values[1]) return true;
    if (values[1] * values[2] * values[3] == values[0]) return true;
    return false;
}
