function mapDecoding(message) {
    // No DP required!
    var c0 = 1, // number of combinations up to message[i]
        c1 = 0, // number of combinations up to message[i + 1]
        c2 = 0; // number of combinations up to message[i + 2]
    for (var i = 0; i < message.length && c0 !== 0; i++) {
        var char = message[i];
        if (char !== '0') {
            // Add the combinations if we treat it as a one-digit number
            c1 = (c1 + c0) % (1e9 + 7);
            // Add the combinations if we treat it as a two digit number
            if ((char + message[i + 1]) <= 26) c2 = c0;
        }
        // Move to the next index
        c0 = c1; c1 = c2; c2 = 0;
    }
    return c0;
}
