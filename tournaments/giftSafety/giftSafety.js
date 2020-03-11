function giftSafety(gift) {
    return (gift.match(/(.)(?=.\1|(.)\2|\1.)/g) || []).length;
}
