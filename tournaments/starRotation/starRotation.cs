int[][] starRotation(int[][] matrix, int width, int[] center, int t) {
    t = t%8;
    int[][] temp = matrix.Select(x => x.ToArray()).ToArray();
    switch(t) {
        case 0:
            return matrix;
        case 1:
            for(int i=-width/2;i<=width/2;i++) {
                matrix[center[0]+i][center[1]+i] = temp[center[0]][center[1]+i];
                matrix[center[0]+i][center[1]] = temp[center[0]+i][center[1]+i];
                matrix[center[0]-i][center[1]+i] = temp[center[0]-i][center[1]];
                matrix[center[0]][center[1]+i] = temp[center[0]-i][center[1]+i];
            }
            return matrix;
        case 2:
            for(int i=-width/2;i<=width/2;i++) {
                matrix[center[0]+i][center[1]+i] = temp[center[0]-i][center[1]+i];
                matrix[center[0]+i][center[1]] = temp[center[0]][center[1]+i];
                matrix[center[0]-i][center[1]+i] = temp[center[0]-i][center[1]-i];
                matrix[center[0]][center[1]+i]= temp[center[0]-i][center[1]];
            }
            return matrix;
        case 3:
            for(int i=-width/2;i<=width/2;i++) {
                matrix[center[0]+i][center[1]+i] = temp[center[0]-i][center[1]];
                matrix[center[0]+i][center[1]] = temp[center[0]-i][center[1]-i];
                matrix[center[0]-i][center[1]+i] = temp[center[0]][center[1]-i];
                matrix[center[0]][center[1]+i]= temp[center[0]-i][center[1]-i];
            }
            return matrix;
        case 4:
            for(int i=-width/2;i<=width/2;i++) {
                matrix[center[0]+i][center[1]+i] = temp[center[0]-i][center[1]-i];
                matrix[center[0]+i][center[1]] = temp[center[0]-i][center[1]];
                matrix[center[0]-i][center[1]+i] = temp[center[0]+i][center[1]-i];
                matrix[center[0]][center[1]+i]= temp[center[0]][center[1]-i];
            }
            return matrix;
        case 5:
            for(int i=-width/2;i<=width/2;i++) {
                matrix[center[0]+i][center[1]+i] = temp[center[0]][center[1]-i];
                matrix[center[0]+i][center[1]] = temp[center[0]-i][center[1]-i];
                matrix[center[0]-i][center[1]+i] = temp[center[0]+i][center[1]];
                matrix[center[0]][center[1]+i]= temp[center[0]+i][center[1]-i];
            }
            return matrix;
        case 6:
            for(int i=-width/2;i<=width/2;i++) {
                matrix[center[0]+i][center[1]+i] = temp[center[0]+i][center[1]-i];
                matrix[center[0]+i][center[1]] = temp[center[0]][center[1]-i];
                matrix[center[0]-i][center[1]+i] = temp[center[0]+i][center[1]+i];
                matrix[center[0]][center[1]+i] = temp[center[0]+i][center[1]];
            }
            return matrix;
        case 7:
            for(int i=-width/2;i<=width/2;i++) {
                matrix[center[0]+i][center[1]+i] = temp[center[0]+i][center[1]];
                matrix[center[0]+i][center[1]] = temp[center[0]+i][center[1]-i];
                matrix[center[0]-i][center[1]+i] = temp[center[0]][center[1]+i];
                matrix[center[0]][center[1]+i] = temp[center[0]+i][center[1]+i];
            }
            return matrix;
        default:
            return matrix;
    }
}
