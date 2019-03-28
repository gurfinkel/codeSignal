const permutations = (arr) => {
  const collections = [];

  const collectPermutations = (str, prefix = '') => {
    if (!str.length) {
      return collections.push(prefix);
    }
    for (let i = 0; i < str.length; ++i) {
      if (~~str.slice(0,i).indexOf(str[i])) {
        collectPermutations(str.slice(0,i).concat(str.slice(i+1)), prefix+str[i]);
      }
    }
  };

  collectPermutations(arr);

  return collections;
};

const permutationsWithoutDuplicates = (arr) => {
  const collections = [];

  const shouldSwap = (str, start, curr) => {
    for (let i = start; i < curr; ++i) {
      if (str[i] === str[curr]) return false;
    }

    return true;
  };

  const findPermutations = (str, index = 0) => {
    const n = str.length;

    if (index >= n) {
      return collections.push(str);
    }

    for (let i = index; i < n; i++) {
      const check = shouldSwap(str, index, i);
      if (check) {
        const newStr = [...str];
        [newStr[index], newStr[i]] = [newStr[i], newStr[index]];
        findPermutations(newStr.join(''), index + 1);
      }
    }
  };

  findPermutations(arr);

  return collections;
};