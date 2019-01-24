function findHeapPredicate(heap) {

    var allGreater = true, allLess = true;
    for (var i = 0; 2 * i + 1 < heap.length; i++) {
        var sign1 = heap[i] - heap[2 * i + 1];
        var sign2 = 0;
        if (2 * i + 2 < heap.length) {
            sign2 = heap[i] - heap[2 * i + 2];
        }
        allGreater &= sign1 >= 0 && sign2 >= 0;
        allLess &= sign1 <= 0 && sign2 <= 0;
    }
  
    if (allGreater && allLess) {
        return '?';
    } else if (allGreater) {
        return '>=';
    } else if (allLess) {
        return '<=';
    } else {
        return '!';
    }
}
  
  