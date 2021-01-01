double companyBotStrategy(int[][] trainingData) {
    var correctAnswers = new List<int>();

    foreach (var item in trainingData) {
        if (1 == item[1]) {
            correctAnswers.Add(item[0]);
        }
    }

    return 0 < correctAnswers.Count ? correctAnswers.Average() : 0;
}
