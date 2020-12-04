function questionCorrectionBot(question) {
    return question.replace(/ +/g, " ")
        .replace(/\w/, l => l.toUpperCase())
        .trim()
        .replace(/ *, */g, ", ")
        .replace(/\?*$/, "?");
}
