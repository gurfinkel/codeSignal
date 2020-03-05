string integerToEnglishWords(int num) {
    string[] store = " One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen Twen Thir For Fif Six Seven Eigh Nine  Thousand Million Billion".Split();

    return 1 > num ? "Zero" : getResult(num, 28, store);
}

string getResult(int n, int S, string[] dict) {
    return ((n>0 ? getResult(n/1000,S+1, dict)+" " : "") +
    ((n%=1000)<1 ? "" : (n>99 ?  dict[n/100] + " Hundred " : "") +
    ((n%=100)<20 ? dict[n] : dict[n/10+18] + "ty " + dict[n%10]) + " " + dict[S]))
    .Replace("  "," ").Trim();
}
