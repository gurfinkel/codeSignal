function firstMultiple2(divisors, start) {
    while (true) {
      for (let i = 0; divisors.length > i; ++i) {
          if (!(start % divisors[i])) return start;
      }
      ++start;
    }
}
