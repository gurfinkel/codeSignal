#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub josephusProblem {
    my ($n, $k) = @_;

    return 1 == $n ? 1 : 1 + (josephusProblem($n - 1, $k) + $k - 1) % $n;
}
