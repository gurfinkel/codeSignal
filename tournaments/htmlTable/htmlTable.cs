string htmlTable(string table, int row, int column) {
    try
    {
        var splitByTr = table.Split(new[] { "<tr>" }, StringSplitOptions.None);
        var thisRow = splitByTr[row + 1];
        var splitRowByTd = thisRow.Split(new[] { "<td>" }, StringSplitOptions.None);
        var thisData = splitRowByTd[column + 1];
        return thisData.Replace("</td>", string.Empty).Replace("</tr>", string.Empty).Replace("</table>", string.Empty);
    }
    catch
    {
        return "No such cell";
    }
}
