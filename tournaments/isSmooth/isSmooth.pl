#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isSmooth {
    my ($arr) = @_;

    my $n = @$arr;
    my $half = ~~($n / 2);

    if ($$arr[0] != $$arr[$n - 1]) {
        return 0;
    }

    return $$arr[0] == (1 == ($n & 1) ? $$arr[$half] : ($$arr[$half] + $$arr[$half - 1]));
}
