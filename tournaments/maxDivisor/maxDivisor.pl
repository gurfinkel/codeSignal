#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub maxDivisor {
    my ($left, $right, $divisor) = @_;

    while ($left <= $right) {
        unless ($right % $divisor) {
            return $right;
        }
        --$right;
    }

    return -1;
}
