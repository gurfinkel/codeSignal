def lrc2subRip(lrcLyrics, songLength):
    r ,count = [], 1
    time = [[int(s[i:i + 2]) for i in [1, 4]] +[s[7:9]] for s in lrcLyrics]
    time = ['{:02d}:{:02d}:{:02d},{}'.format(x // 60,x % 60,y,z.ljust(3,'0'))  for x,y,z in time] + [songLength + ',000']
    for index, s in enumerate(lrcLyrics):
        r.extend([str(count), time[index] + ' --> ' + time[index + 1], s[11:], ''])
        count += 1
    return r[:-1]
