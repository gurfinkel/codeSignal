#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub divideAsLongAsPossible {
    my ($n, $d) = @_;

    while (0 == $n % $d) {
        $n /= $d;
    }

    return $n;
}
