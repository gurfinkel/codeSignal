#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub kthDivisor {
    my ($n, $k) = @_;

    my $result = 1;

    while (0 < $k && $result <= $n) {
        if (!($n % $result)) {
            --$k;
        }
        if ($k) {
            ++$result;
        }
    }

    return !$k ? $result : -1;
}
