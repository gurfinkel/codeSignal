bool isMAC48Address(string inputString) {
    Regex r = new Regex("^[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}$");

    return r.IsMatch(inputString);
}
