bool isOneSwapEnough(string inputString) {
    if (inputString.Length==1)
        return true;
    char[]a=inputString.ToCharArray();
    for (int i=0; i<a.Length;i++)
        for (int j=0; j<a.Length;j++){
            char tmp=a[i];
            a[i]=a[j];
            a[j]=tmp;
            if (isP(a, a.Length))return true;
            tmp=a[i];
            a[i]=a[j];
            a[j]=tmp;
        }
    return false;
}

bool isP(char[]a, int n){
    for (int i=0; i<n; i++)
        if (a[i]!=a[n-i-1])return false;
    return true;
}