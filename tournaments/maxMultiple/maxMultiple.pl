#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub maxMultiple {
    my ($divisor, $bound) = @_;

    while (0 < $bound) {
        if (!($bound % $divisor)) {
            return $bound;
        }
        --$bound;
    }
}
