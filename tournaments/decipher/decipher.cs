string decipher(string cipher) {
    string m = "";
	string s = "";
    
	foreach (char ch in cipher) {
		s += ch;
		if (97 <= int.Parse(s) && int.Parse(s) <= 122)
		{
			m += (char)int.Parse(s);
			s = "";
		}
	}
    
	return m;
}
