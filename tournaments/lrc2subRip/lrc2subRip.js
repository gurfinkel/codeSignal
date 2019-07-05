function lrc2subRip(lrcLyrics, songLength) {
  const l2s = function(hh, mm, ss, xx) {
    const seconds = hh * 3600 + mm * 60 + +ss;

    ss = ('0' + (seconds % 60)).slice(-2);
    mm = ('0' + ((seconds - ss) / 60) % 60).slice(-2);
    hh = ('0' + ((seconds - mm * 60 - ss) / 3600) % 24).slice(-2);
    xx = (',' + (xx || '00') + '0');

    return `${hh}:${mm}:${ss+xx}`;
  };

  songLength = l2s(...songLength.split`:`);

  return lrcLyrics.map(v => v.match(/\[(\d\d):(\d\d).(\d\d)\] ?(.*)/))
    .reduce((p,v,i,a) => {
      i && p.push('');
      p.push('' + ++i);
      callL2S = V => l2s(0, V[1], V[2], V[3]);
      p.push(callL2S(v) + ' --> ' + (i === a.length ? songLength : callL2S(a[i])));
      p.push(v[4]);
      return p;
    }, []);
}
