std::vector<int> myReverse(std::vector<int> input) {

   for (int i = 0; i * 2 < input.size(); i++) {
     int tmp = input[i];
     input[i] = input[(int)input.size() - i - 1];
     input[(int)input.size() - i - 1] = tmp;
   }
   return input;
}
