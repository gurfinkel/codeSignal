#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub equalPairOfBits {
    my ($n, $m) = @_;

    my $result = 0;

    while (0 < $n && 0 < $m && 1 == ($n & 1) + ($m & 1)) {
        $n >>= 1;
        $m >>= 1;
        ++$result;
    }

    return 2 ** $result;
}
