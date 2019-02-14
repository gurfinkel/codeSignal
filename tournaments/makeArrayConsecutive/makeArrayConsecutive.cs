int[] makeArrayConsecutive(int[] sequence) {
    var result = new List<int>();
    var index = 0;

    Array.Sort(sequence);

    for (var i = sequence[index]; sequence[sequence.Length - 1] > i; ++i) {
        if (i != sequence[index]) {
            result.Add(i);
        }
        else {
            ++index;
        }
    }

    return result.ToArray();
}
