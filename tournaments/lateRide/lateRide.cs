int lateRide(int n) {
    var minutes = n % 60;
    var hours = n / 60;
    
    var a = minutes % 10 + minutes / 10;
    var b = hours % 10 + hours / 10;
    
    return a + b;
}
