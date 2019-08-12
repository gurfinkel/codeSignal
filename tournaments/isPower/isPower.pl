#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isPower {
    my ($n) = @_;

    if (1 == $n) {
        return 1;
    }

    for (my $i = 2; $n >= $i * $i; ++$i) {
        for (my $j = $i * $i; $n >= $j; $j *= $i) {
            if ($n == $j) {
                return 1;
            }
        }
    }

    return 0;
}
