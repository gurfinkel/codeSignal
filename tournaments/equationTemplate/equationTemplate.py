def equationTemplate(values):
    a,b,c,d=values
    return a*b==c*d or a*c==b*d or a*d==b*c or a*b*c==d or a*b*d==c or a*d*c==b or d*b*c==a