function isInformationConsistent(evidences) {
    for (let j = 0; j in evidences[0]; ++j) {
        let r = 0;
        for (let i = 0; i in evidences; ++i) {
            if (1 === evidences[i][j]) {
                if (!r) r = 1;
                else if (!~r) return false;
            } else if (!~evidences[i][j]) {
                if (!r) r = -1;
                else if (1 === r) return false;
            }
        }
    }

    return true;
}
