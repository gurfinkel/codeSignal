function switchLights(a) {
    return a.map((j,i)=>(j+a.slice(i).reduce((x,y)=>x+y))%2);
}
