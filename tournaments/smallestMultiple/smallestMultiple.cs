int smallestMultiple(int left, int right) {
    for (int candidate = 1;; ++candidate) {
        bool correct = true;

        for (int divisor = left; right >= divisor; divisor++) {
            if (0 != candidate % divisor) {
                correct = false;
                break;
            }
        }
        
        if (correct) {
            return candidate;
        }
  }
}
