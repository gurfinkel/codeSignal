function electionsWinners(votes, k) {

  var currentMaxIndex = 0,
    cntLeaders = 1,
    result = 0;
  for (var i = 1; i < votes.length; i++) {
    if (votes[i] === votes[currentMaxIndex]) {
      cntLeaders++;
    }
    if (votes[i] > votes[currentMaxIndex]) {
      currentMaxIndex = i;
      cntLeaders = 1;
    }
  }

  for (var i = 0; i < votes.length; i++) {
    if (votes[i] + k > votes[currentMaxIndex]) {
      result++;
    }
    if (votes[i] + k === votes[currentMaxIndex]
      && currentMaxIndex === i && cntLeaders === 1) {
      result++;
    }
  }

  return result;
}
