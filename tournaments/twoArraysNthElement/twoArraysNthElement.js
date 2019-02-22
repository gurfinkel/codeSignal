function twoArraysNthElement(array1, array2, n) {

  var lowerBound = function(array, elem) {
    var l = -1;
    var r = array.length;
    while ( l + 1 < r ) {
      var mid = Math.floor((l + r) / 2);
      if (array[mid] <= elem) {
        l = mid;
      }
      else {
        r = mid;
      }
    }
    return l;
  };

  var l = -1;
  var r = array1.length;

  while (l + 1 < r) {
    var mid = Math.floor((l + r) / 2);
    var pos = lowerBound(array2, array1[mid]);

    if (mid + pos + 1 <= n) {
      l = mid;
    }
    else {
      r = mid;
    }
  }

  if (l > -1 && l + lowerBound(array2, array1[l]) + 1 === n) {
    return array1[l];
  }
  return twoArraysNthElement(array2, array1, n);
}
