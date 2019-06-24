#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isPrime {
    my ($n) = @_;

    for (my $i = 2; $n >= $i * $i; ++$i) {
        if (0 == $n % $i) {
            return 0;
        }
    }

    return 1;
}
