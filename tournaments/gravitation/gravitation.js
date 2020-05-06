function gravitation(rows) {
    minTimer = rows.length;
    answer = [];
    for (i = 0; i < rows[0].length; i++) {
        finish = rows.length - 1;
        timer = 0
        for (j = rows.length - 1; j >= 0; j--) {
            if (rows[j].charAt(i) === "#") {
                timer = finish - j;
                finish--;
            }
        }

        if(timer === minTimer) answer.push(i)
        if(timer < minTimer){
            minTimer = timer
            answer = []
            answer.push(i)
        }
    }
    return answer
}
