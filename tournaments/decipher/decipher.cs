string decipher(string cipher) {
    StringBuilder sb = new StringBuilder();
	string str = "";

	foreach (char item in cipher) {
		str += item;

        var num = int.Parse(str);

		if (97 <= num && 122 >= num) {
			sb.Append((char)num);
			str = "";
		}
	}

	return sb.ToString();
}
