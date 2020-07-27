function pyraminxPuzzle(faceColors, moves) {
    const FACE_COORDS = [
        '022',
        '112',
        '122',
        '121',
        '202',
        '212',
        '211',
        '221',
        '220'
    ];
    
    const FRONT_CORNERS = {
        b: 'ulr',
        u: 'brl',
        r: 'lub',
        l: 'rbu'
    };
    
    const BACK_CORNERS = 'burl';
    
    let vertices = [];
    
    for (let i = 0; i < faceColors.length; i++) {
        for (let c of FACE_COORDS) {
            let coords = [...c].map(Number);
            coords.splice(i, 0, 3);
            let vertex = { color: faceColors[i] };
            for (let i = 0; BACK_CORNERS[i]; i++) {
                vertex[BACK_CORNERS[i]] = coords[i];
            }
            vertices.push(vertex);
        }
    }
    
    while (moves.length) {
        let move = moves.pop();
        let corner = move[0];
        let level = corner > 'a' ? 1 : 0;
        corner = corner.toLowerCase();
        let corners = [...FRONT_CORNERS[corner]];
        if (!move[1]) {
            corners.reverse();
        }
        for (let vertex of vertices) {
            if (vertex[corner] <= level) {
                [
                    vertex[corners[0]],
                    vertex[corners[1]],
                    vertex[corners[2]]
                ] = [
                    vertex[corners[1]],
                    vertex[corners[2]],
                    vertex[corners[0]]
                ];
            }
        }
    }
    
    let res = [];
    for (let c of BACK_CORNERS) {
        let facesVertices = vertices.filter(v => v[c] === 3);
        let lb = [...FRONT_CORNERS[c]];
        const f = vertex => lb.map(s => vertex[s]).join``;
        facesVertices.sort((a, b) => FACE_COORDS.indexOf(f(a)) - FACE_COORDS.indexOf(f(b)));
        res.push(facesVertices.map(vertex => vertex.color));
    }
    return res;
}
