int[][] contoursShifting(int[][] matrix) {
    int[][] temp = matrix.Select(x => x.ToArray()).ToArray();
    int len = Math.Min(matrix.Length,matrix[0].Length);
    
    for(int i=0;i<(int)(Math.Ceiling((double)len/2));i++){
        matrix = shifting(matrix, temp, i, i*2==matrix[0].Length-1||i*2==matrix.Length-1, i%2==1, matrix.Length<matrix[0].Length);
    }
    
    return matrix;
}

int[][] shifting(int[][] matrix, int[][] temp, int i, bool single, bool inversed, bool forward) {
    if(single){
        if(forward){            
            if(inversed){
                for(int j=i;j<matrix[0].Length-i-1;j++){
                   matrix[i][j]=temp[i][j+1];
                }
                matrix[i][matrix[0].Length-i-1]=temp[i][i];
            }else{
                for(int j=i;j<matrix[0].Length-i-1;j++){
                   matrix[i][j+1]=temp[i][j];
                }
                matrix[i][i]=temp[i][matrix[0].Length-i-1];
            }
        }else{
            if(inversed){                
                for(int j=i;j<matrix.Length-i-1;j++){
                   matrix[j][i]=temp[j+1][i];
                }
                matrix[matrix.Length-i-1][i]=temp[i][i];
            }else{
                for(int j=i;j<matrix.Length-i-1;j++){
                   matrix[j+1][i]=temp[j][i];
                }
                matrix[i][i]=temp[matrix.Length-i-1][i];
            }
        }        
    }else{
        if(inversed){
            for(int j=i;j<matrix[0].Length-i-1;j++){
                matrix[i][j]=temp[i][j+1];
            }
            for(int j=i;j<matrix.Length-i;j++){
                matrix[j][matrix[0].Length-i-1]=temp[j+1][matrix[0].Length-i-1];
            }
            for(int j=i;j<matrix[0].Length-i-1;j++){
                matrix[matrix.Length-i-1][j+1]=temp[matrix.Length-i-1][j];
            }
            for(int j=i;j<matrix.Length-i-1;j++){
                matrix[j+1][i]=temp[j][i];
            }
        }else{
            for(int j=i;j<matrix[0].Length-i-1;j++){
                matrix[i][j+1]=temp[i][j];
            }
            for(int j=i+1;j<matrix.Length-i;j++){
                matrix[j][matrix[0].Length-i-1]=temp[j-1][matrix[0].Length-i-1];
            }
            for(int j=i;j<matrix[0].Length-i-1;j++){
                matrix[matrix.Length-i-1][j]=temp[matrix.Length-i-1][j+1];
            }
            for(int j=i;j<matrix.Length-i-1;j++){
                matrix[j][i]=temp[j+1][i];
            }
        }
    }
    return matrix;
}
