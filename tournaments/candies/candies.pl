#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub candies {
    my ($n, $m) = @_;

    return int($m / $n) * $n;
}
