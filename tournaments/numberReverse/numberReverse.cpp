int numberReverse(int input) {

   int reversed = 0;
   while (input) {
     reversed = reversed * 10 + input % 10;
     input /= 10;
   }
   return reversed;

}
