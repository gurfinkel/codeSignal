function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return (yourLeft === friendsLeft || yourLeft === friendsRight) && (yourRight === friendsLeft || yourRight === friendsRight);
}
