function longestDigitsPrefix(inputString) {
  const result = [];

  for (const item of inputString) {
      if ('0' <= item && '9' >= item) result.push(item);
      else break;
  }

  return result.join('');
}
