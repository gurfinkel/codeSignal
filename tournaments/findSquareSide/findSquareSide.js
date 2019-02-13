function findSquareSide(x, y) {
   let index = 1;

   while (x.length > index && x[0] !== x[index++]) {}

   return Math.pow(Math.abs(y[0] - y[--index]), 2);
}
