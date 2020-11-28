function marathonTaskScore(marathonLength, maxScore, submissions, successfulSubmissionTime) {
    var unsuccess   = --submissions * 10,
        timepenalty = successfulSubmissionTime * (maxScore / 2) * (1 / marathonLength),
        score       = maxScore - unsuccess - timepenalty;
    return successfulSubmissionTime < 0
        ? 0
        : score < maxScore / 2
            ? maxScore / 2
            : score;
}
