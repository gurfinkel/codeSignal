def taskMaker(source, challengeId):
    chalString = '//DB ' + str(challengeId) + '//'

    out = []
    for ln in source:
        if ln.strip()[0:2]=='//':
            if ln.strip()[0:len(chalString)]==chalString:
                out.pop()
                out.append(ln.replace(chalString,''))
        else:
            out.append(ln)

    return(out)
