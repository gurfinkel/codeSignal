function htmlTable(table, row, column) {
    try {
        return table.split("<tr>")[row+1].split("<td>")[column+1].split("<")[0];
    } catch (_) {
        return "No such cell";
    }
}
