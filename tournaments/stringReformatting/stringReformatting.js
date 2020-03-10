function stringReformatting(s, k) {
    var str = s.replace(/\-/g,'').split('').reverse().join('');
    var regex = new RegExp('[^\-]{1,'+k+'}','g');
    
    if(!(match = str.match(regex))){
        return str;
    }
    return match.join('-').split('').reverse().join('');
}
