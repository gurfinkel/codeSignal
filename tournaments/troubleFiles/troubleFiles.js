function troubleFiles(files, backups) {
    var ret = [],
        fpos = 0,
        flen = files.length,
        i,
        st, en, trouble;
    
    for (i in backups) {
        st = backups[i]
        en = st
        while (fpos < flen && files[fpos][0] <= st) {
            en += files[fpos][1];
            fpos++;
        }
        trouble = 0;
        while (fpos < flen && files[fpos][0] <= en) {
            trouble++;
            fpos++;
        }
        ret.push(trouble);
    }
    
    return ret;
}
