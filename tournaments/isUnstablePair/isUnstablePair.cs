bool isUnstablePair(string filename1, string filename2) {
    if(string.Compare(filename2,filename1, StringComparison.Ordinal)>0) {
        return string.Compare(filename2.ToUpper(),filename1.ToUpper(),StringComparison.Ordinal)<0;
    }
    else if(string.Compare(filename2,filename1, StringComparison.Ordinal)<0) {
        return string.Compare(filename2.ToLower(),filename1.ToLower(), StringComparison.Ordinal)>0;
    }
    else
        return false;
}
