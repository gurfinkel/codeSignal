int caesarBoxCipherEncoding2(string message) {
    int n=message.Length;
    int anz=0;
    for (int i=2; i<n; i++){
        if (n%i==0)
        {
            int j=n/i;
            int index=0;
            char[,]a=new char[i,j];
            for (int k=0; k<i; k++)
                for (int l=0; l<j;l++){
                    a[k,l]=message[index];
                    index++;
                }
            string x="";
            for (int l=0; l<j;l++)
                for (int k=0; k<i; k++)
                    x+=a[k,l];
            index=0;
            for (int k=0; k<i; k++)
                for (int l=0; l<j;l++){
                    a[k,l]=x[index];
                    index++;
                }
            x="";
            for (int l=0; l<j;l++)
                for (int k=0; k<i; k++)
                    x+=a[k,l];
            if (x.Equals(message))
                anz++;
        }
    }
    return anz;
}
