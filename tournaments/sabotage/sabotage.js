function sabotage(hangar) {
    E = L = {}
    
    for(I in hangar)
        for(J in hangar[I]) {
            S = { ...L }
            i = I
            j = J
            
            try {
                while(!E[[i,j]] & !S[[i,j]]) {
                    S[[i,j]] = 1
                    k = hangar[i][j]
                    k == 'L' ? --j :
                        k == 'R' ? ++j :
                            k == 'U' ? --i : ++i
                }
                
                L = S[[i,j]] ? { ...S } : L
            } catch(e) {
                E = { ...E, ...S }
            }
        }
    
    return Object.keys(L).length;
}
