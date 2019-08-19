#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub sumBelowBound {
    my ($bound) = @_;

    my $n = 1;

    while ($n * ($n + 1) >> 1 <= $bound) {
        ++$n;
    }

    return $n - 1;
}
