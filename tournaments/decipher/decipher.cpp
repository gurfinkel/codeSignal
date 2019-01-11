std::string decipher(std::string cipher)
{
	std::string m;
	std::string s;
	for (char ch : cipher)
	{
		s += ch;
		if (97 <= std::stoi(s) && std::stoi(s) <= 122)
		{
			m += std::stoi(s);
			s = "";
		}
	}
	return m;
}