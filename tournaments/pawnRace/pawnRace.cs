string pawnRace(string white, string black, char toMove) {
    if (white[1] >= black[1] || Math.Abs(white[0] - black[0]) > 1) {
        double mw = '8' - white[1] - (white[1] == '2' ? 1 : 0) - (toMove == 'w' ? 0.5d : 0d);
        double mb = black[1] - '1' - (black[1] == '7' ? 1 : 0) - (toMove == 'b' ? 0.5d : 0d);

        return mw > mb ? "black" : "white";
    }

    if (white[0] == black[0]) return "draw";
    if (black[1] == '7' && white[1] != '4' && (toMove == 'w' || (toMove == 'b' && white[1] != '2'))) return "black";
    if (white[1] == '2' && black[1] != '5' && (toMove == 'b' || (toMove == 'w' && black[1] != '7'))) return "white";

    return (black[1] - white[1]) % 2 == 1 ? toMove == 'w' ? "white" : "black" : toMove == 'w' ? "black" : "white";
}
