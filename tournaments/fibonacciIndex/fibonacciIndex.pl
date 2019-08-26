#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub fibonacciIndex {
    my ($n) = @_;

    return ~-$n && ~~($n / 0.21) - 2;
}
