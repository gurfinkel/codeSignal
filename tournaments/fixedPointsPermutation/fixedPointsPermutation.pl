#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub fixedPointsPermutation {
    my ($permutation) = @_;

    my $result = 0;

    for (my $i = 0; @$permutation > $i; ++$i) {
        if ($$permutation[$i] == $i + 1) {
            ++$result;
        }
    }

    return $result;
}
