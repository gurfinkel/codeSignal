def lateRide(n):
    return (n // 60) // 10 + (n // 60) % 10 + (n % 60) // 10 + (n % 60) % 10;
