#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub factorialTrailingZeros {
    my ($n) = @_;

    return ~~($n/5) + ~~($n/25);
}
