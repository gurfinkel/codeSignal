#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub fibonacciNumber {
    my ($n) = @_;

    my $result = 1;
    my $count = 2;
    my $fib1 = 0;
    my $fib2 = 1;

    while ($n >= $count++) {
        $result = $fib1 + $fib2;
        $fib1 = $fib2;
        $fib2 = $result;
    }

    return $result;
}
