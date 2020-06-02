function findSquareSide(x, y) {
   const store = Array(x.length - 1);

   for (let i = 1; x.length > i; ++i) {
      store[i - 1] = ((y[i - 1] - y[i]) ** 2 + (x[i - 1] - x[i]) ** 2);
   }

   return Math.min(...store);
}
