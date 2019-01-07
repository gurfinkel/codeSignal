function isSuspiciousRespondent(ans1, ans2, ans3) {
    return !ans1 && !ans2 && !ans3 || (ans1 && ans2 && ans3)
}
