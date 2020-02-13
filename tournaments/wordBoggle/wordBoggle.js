function wordBoggle(board, words) {
    const trie = {};

    for (const word of words) {
        let node = trie;

        for (const letter of word) {
            if (!(letter in node)) node[letter] = {};
            node = node[letter];
        }

        node['$'] = word;
    }

    const  wordsFound = new Set();
    const [n, m] = [board, board[0]].map(arr => arr.length);

    for (let i = 0; n > i; ++i) {
        for (let j = 0; m > j; ++j) {
            const letter = board[i][j];

            if (letter in trie) {
                seek(i, j, trie[letter]);
            }
        }
    }

    function seek(x, y, node, visited = new Set()) {
        const hash = 5 * x + y;
        visited.add(hash);

        if ('$' in node) wordsFound.add(node['$']);

        for (let dx = -1; 1 >= dx; ++dx) {
            for (let dy = -1; 1 >= dy; ++dy) {
                if ((dx || dy) && x + dx in board && y + dy in board[0]) {
                    const nextHash = 5 * (x + dx) + (y + dy);
                    const letter = board[x + dx][y + dy];

                    if (letter in node && !visited.has(nextHash)) {
                        seek(x + dx, y + dy, node[letter], visited);
                    }
                }
            }
        }

        visited.delete(hash);
    }

    return [...wordsFound].sort();
}
