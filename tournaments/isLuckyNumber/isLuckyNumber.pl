#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isLuckyNumber {
    my ($n) = @_;

    while (0 < $n) {
        if (4 != $n % 10 && 7 != $n % 10) {
            return 0;
        }
        $n = int($n / 10);
    }

    return 1;
}
