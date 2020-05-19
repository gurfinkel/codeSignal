int kthLargestElement(int[] nums, int k) {
    var _minHeap = new MinHeap(k);

    foreach (var val in nums) {
        if (_minHeap.isFull()) {
            var min = _minHeap.ExtractTop();
            _minHeap.Add(Math.Max(val, min));
        } else {
            _minHeap.Add(val);
        }
    }

    return _minHeap.PeekTop();
}

private class MinHeap {
    private readonly int[] _data;
    private int _last = -1;

    public MinHeap(int size) {
        _data = new int[size];
    }

    public bool isFull() {
        return _last + 1 == _data.Length;
    }

    public void Add(int item) {
        _data[++_last] = item;
        SiftUp(_last);
    }

    public int ExtractTop() {
        var top = _data[0];

        _data[0] = _data[_last--];
        SiftDown(0);

        return top;
    }

    public int PeekTop() {
        return _data[0];
    }

    private void SiftDown(int i) {
        while (_last >= (i << 1) + 1) {
            var left = (i << 1) + 1;
            var right = (i << 1) + 2;
            var j = left;

            if (_last >= right && _data[left] > _data[right]) {
                j = right;
            }

            if (_data[i] < _data[j]) {
                break;
            }

            Swap(i, j);
            i = j;
        }
    }

    private void SiftUp(int i) {
        while (0 < i && _data[i] < _data[(i - 1) >> 1]) {
            Swap(i, (i - 1) >> 1);
            i = (i - 1) >> 1;
        }
    }

    private void Swap(int i, int j) {
        var temp = _data[i];
        _data[i] = _data[j];
        _data[j] = temp;
    }
}
