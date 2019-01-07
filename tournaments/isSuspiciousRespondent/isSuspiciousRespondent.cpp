bool isSuspiciousRespondent(bool ans1, bool ans2, bool ans3) {
    if (ans1 == ans2 && ans2 == ans3) return true;
    return false;
}
