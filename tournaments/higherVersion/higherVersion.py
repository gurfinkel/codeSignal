def higherVersion(ver1, ver2):
    a = ver1.split(".")
    b = ver2.split(".")

    for i in range(0, len(a)):
        if int(a[i]) > int(b[i]):
            return True
        elif int(a[i]) < int(b[i]):
            return False

    return False
