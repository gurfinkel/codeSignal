int pipesGame(string[] state) {
    var water = new List<string>();
    var newwater = new List<string>();
    var filled = new List<string>();
    var count = 0;
    var doneList = new List<char>();
    for (var i = 0; i < state.Length; i++)
    {
        for (var j = 0; j < state[0].Length; j++)
        {
            var x = state[i][j];
            if (x < 'a' || x > 'z') continue;
            if (i != 0 && (state[i - 1][j] == '1' || state[i - 1][j] == '3' || state[i - 1][j] == '4' || state[i - 1][j] == '7')) newwater.Add("3:" + x + ":" + (i - 1) + ":" + j);
            if (i != state.Length - 1 && (state[i + 1][j] == '1' || state[i + 1][j] == '5' || state[i + 1][j] == '6' || state[i + 1][j] == '7')) newwater.Add("1:" + x + ":" + (i + 1) + ":" + j);
            if (j != 0 && (state[i][j - 1] == '2' || state[i][j - 1] == '3' || state[i][j - 1] == '6' || state[i][j - 1] == '7')) newwater.Add("2:" + x + ":" + i + ":" + (j - 1));
            if (j != state[0].Length - 1 && (state[i][j + 1] == '2' || state[i][j + 1] == '4' || state[i][j + 1] == '5' || state[i][j + 1] == '7')) newwater.Add("4:" + x + ":" + i + ":" + (j + 1));
        }
    }
    var dist = 0;
    do
    {
        Console.WriteLine(dist++);
        water = newwater;
        newwater = new List<string>();
        foreach (var x in water)
        {
            var l = x.Split(':');
            var dir = l[0]; //1^ 2> 3v 4<
            var srcx = l[1];
            var cory = int.Parse(l[2]);
            var corx = int.Parse(l[3]);

            Console.WriteLine(x);
            if (cory < 0 || cory >= state.Length) return count;
            if (corx < 0 || corx >= state[0].Length) return count;

            if (state[cory][corx] == '0') return count;
            else if (state[cory][corx] == '1')
            {
                switch (dir)
                {
                    case "2":
                    case "4": return count;
                    case "1": newwater.Add(dir + ":" + srcx + ":" + (cory + 1) + ":" + corx); break;
                    default: newwater.Add(dir + ":" + srcx + ":" + (cory - 1) + ":" + corx); break;
                }
            }
            else if (state[cory][corx] == '2')
            {
                switch (dir)
                {
                    case "1":
                    case "3": return count;
                    case "2": newwater.Add(dir + ":" + srcx + ":" + cory + ":" + (corx - 1)); break;
                    default: newwater.Add(dir + ":" + srcx + ":" + cory + ":" + (corx + 1)); break;
                }
            }
            else if (state[cory][corx] == '3')
            {
                switch (dir)
                {
                    case "1":
                    case "4": return count;
                    case "2": newwater.Add("1" + ":" + srcx + ":" + (cory + 1) + ":" + corx); break;
                    default: newwater.Add("4" + ":" + srcx + ":" + cory + ":" + (corx + 1)); break;
                }
            }
            else if (state[cory][corx] == '4')
            {
                switch (dir)
                {
                    case "1":
                    case "2": return count;
                    case "4": newwater.Add("1" + ":" + srcx + ":" + (cory + 1) + ":" + corx); break;
                    default: newwater.Add("2" + ":" + srcx + ":" + cory + ":" + (corx - 1)); break;
                }
            }
            else if (state[cory][corx] == '5')
            {
                switch (dir)
                {
                    case "2":
                    case "3": return count;
                    case "4": newwater.Add("3" + ":" + srcx + ":" + (cory - 1) + ":" + corx); break;
                    default: newwater.Add("2" + ":" + srcx + ":" + cory + ":" + (corx - 1)); break;
                }
            }
            else if (state[cory][corx] == '6')
            {
                switch (dir)
                {
                    case "3":
                    case "4": return count;
                    case "2": newwater.Add("3" + ":" + srcx + ":" + (cory - 1) + ":" + corx); break;
                    default: newwater.Add("4" + ":" + srcx + ":" + cory + ":" + (corx + 1)); break;
                }
            }
            else if (state[cory][corx] == '7')
            {
                switch (dir)
                {
                    case "1": newwater.Add(dir + ":" + srcx + ":" + (cory + 1) + ":" + corx); break;
                    case "4": newwater.Add(dir + ":" + srcx + ":" + cory + ":" + (corx + 1)); break;
                    case "2": newwater.Add(dir + ":" + srcx + ":" + cory + ":" + (corx - 1)); break;
                    default: newwater.Add(dir + ":" + srcx + ":" + (cory - 1) + ":" + corx); break;
                }
            }
            else if (state[cory][corx] >= 'a' && state[cory][corx] <= 'z') return count;
            else
            {
                if (srcx[0] != state[cory][corx] - 'A' + 'a') return count;
                else doneList.Add(state[cory][corx]);
            }
        }
        foreach (var x in water)
        {
            var l = x.Split(':');
            var dir = l[0]; //1^ 2> 3v 4<
            var srcx = l[1];
            var cory = int.Parse(l[2]);
            var corx = int.Parse(l[3]);
            filled.Add(l[2] + " " + l[3]);
        }
        filled = filled.Distinct().ToList();
        doneList = doneList.Distinct().ToList();
        count = doneList.Count() - filled.Count();
    } while (newwater.Count() != 0);
    return count * -1;
}
