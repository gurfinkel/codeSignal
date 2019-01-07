function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
    var res = [];
    var useRow = [];
    var useColumn = [];
  
    for (var i = 0; i < matrix.length; i++) {
      useRow.push(true);
    }
    for (var i = 0; i < matrix[0].length; i++) {
      useColumn.push(true);
    }
  
    for (var i = 0; i < rowsToDelete.length; i++) {
      useRow[rowsToDelete[i]] = false;
    }
    for (var i = 0; i < columnsToDelete.length; i++) {
      useColumn[columnsToDelete[i]] = false;
    }
  
    for (var i = 0; i < matrix.length; i++) {
      if (useRow[i]) {
        res.push([]);
        for (var j = 0; j < matrix[0].length; j++) {
          if (useColumn[j]) {
            res[res.length - 1].push(matrix[i][j]);
          }
        }
      }
    }
  
    return res;
  }
  