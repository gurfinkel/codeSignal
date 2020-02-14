int networkWires(int n, int[][] wires) {
    MinHeap heap = new MinHeap(wires.Length);

    foreach (var wire in wires) {
        heap.add(new Edge(wire[0], wire[1], wire[2]));
    }

    if (heap.empty()) {
        return 0;
    }

    var result = 0;
    DisjointSet disjointSet = new DisjointSet(n);

    while(!heap.empty()) {
        Edge edge = heap.remove();

        if (!disjointSet.isCycle(edge.u, edge.v)) {
            result += edge.weight;
        }
    }

    return result;
}

class DisjointSet {
    private int[] _parent;

    public DisjointSet(int n) {
        _parent = new int[n];
        Array.Fill(_parent, -1);
    }

    public bool isCycle(int v, int u) {
        int x = find(v);
        int y = find(u);

        if (x == y) {
            return true;
        }

        union(v, u);

        return false;
    }

    private void union(int v, int u) {
        int x = find(v);
        int y = find(u);
        _parent[x] = y;
    }

    private int find(int i) {
        if (-1 == _parent[i]) {
            return i;
        }

        return find(_parent[i]);
    }
}

class Edge {
    private int _u;
    public int u {get {return _u;} set {_u = value;}}

    private int _v;
    public int v {get {return _v;} set {_v = value;}}

    private int _weight;
    public int weight {get {return _weight;} set {_weight = value;}}

    public Edge(int u, int v, int weight) {
        _u = u;
        _v = v;
        _weight = weight;
    }
}

class MinHeap {
    private Edge[] _data;
    private int _size;

    public MinHeap(int capacity) {
        _data = new Edge[capacity];
        _size = 0;
    }

    public void add(Edge e) {
        _data[_size] = e;
        ++_size;

        if (_size > 1) siftUp(_size-1);
    }

    public Edge remove() {
        Edge res = _data[0];
        --_size;

        if (_size > 0) {
            _data[0] = _data[_size];
            siftDown(0);
        }

        return res;
    }

    public bool empty() { return 0 == _size; }

    private void siftDown(int i) {
        var min = i;
        var l = i * 2 + 1;
        var r = i * 2 + 2;

        if (l < _size && _data[l].weight < _data[min].weight) min = l;
        if (r < _size && _data[r].weight < _data[min].weight) min = r;

        if (min > i) {
            swap(min, i);
            siftDown(min);
        }
    }

    private void siftUp(int i) {
        while (0 < i) {
            int parent = (i - 1) / 2;
            if (_data[i].weight >= _data[parent].weight) return;
            swap(i, parent);
            i = parent;
        }
    }

    private void swap(int i, int j) {
        Edge tmp = _data[i];
        _data[i] = _data[j];
        _data[j] = tmp;
    }
}
