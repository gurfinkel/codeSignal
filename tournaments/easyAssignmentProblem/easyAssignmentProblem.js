function easyAssignmentProblem(skills) {
    if (skills[0][0] - skills[1][0] > skills[0][1] - skills[1][1]) {
        return [1, 2];
    } else {
        return [2, 1];
    }
}
